/**
 * SCRIPT DEFINITIVO DO GOOGLE SHEETS
 * Cole este código no Google Apps Script
 * Extensões > Apps Script
 */

function doPost(e) {
  try {
    // LOGS INICIAIS
    console.log("🚀 === NOVA REQUISIÇÃO ===");
    console.log("📦 postData:", JSON.stringify(e.postData));
    console.log("📄 contents:", e.postData.contents);
    console.log("📋 type:", e.postData.type);
    
    // PEGA A PLANILHA - FORÇA PRIMEIRA ABA
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0]; // SEMPRE a primeira aba
    
    console.log("📊 Planilha:", ss.getName());
    console.log("📄 Aba:", sheet.getName());
    console.log("📈 Linhas existentes:", sheet.getLastRow());
    
    // PARSE DOS DADOS
    let data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log("✅ Dados parseados:", JSON.stringify(data));
    } catch (parseError) {
      console.error("❌ ERRO no parse JSON:", parseError);
      throw new Error("Erro ao fazer parse do JSON: " + parseError.toString());
    }
    
    // CRIA CABEÇALHOS se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      console.log("📝 Criando cabeçalhos...");
      const headers = ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Aceite'];
      sheet.appendRow(headers);
      
      // Formata cabeçalhos
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4ade80");
      headerRange.setFontColor("#000000");
      headerRange.setHorizontalAlignment("center");
      
      console.log("✅ Cabeçalhos criados");
    }
    
    // PREPARA OS DADOS PARA INSERÇÃO
    const rowData = [
      data.timestamp || new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.name || "",
      data.email || "",
      data.whatsapp || "",
      data.terms || "Não"
    ];
    
    console.log("📝 Dados a inserir:", JSON.stringify(rowData));
    
    // INSERE NA PLANILHA
    try {
      sheet.appendRow(rowData);
      const lastRow = sheet.getLastRow();
      console.log("✅ Linha inserida na posição:", lastRow);
      
      // VERIFICA se foi realmente inserido
      const insertedData = sheet.getRange(lastRow, 1, 1, 5).getValues()[0];
      console.log("✅ Dados verificados:", JSON.stringify(insertedData));
      
      // Auto-ajusta colunas
      sheet.autoResizeColumns(1, 5);
      
      // RETORNA SUCESSO
      const successResponse = {
        status: 'success',
        message: 'Dados salvos com sucesso!',
        row: lastRow,
        data: insertedData
      };
      
      console.log("🎉 SUCESSO!");
      console.log("📤 Resposta:", JSON.stringify(successResponse));
      
      return ContentService
        .createTextOutput(JSON.stringify(successResponse))
        .setMimeType(ContentService.MimeType.JSON);
      
    } catch (insertError) {
      console.error("❌ ERRO ao inserir na planilha:", insertError);
      console.error("Stack:", insertError.stack);
      throw new Error("Erro ao inserir dados: " + insertError.toString());
    }
    
  } catch (error) {
    // LOG DE ERRO COMPLETO
    console.error("❌ === ERRO GERAL ===");
    console.error("Mensagem:", error.toString());
    console.error("Stack:", error.stack);
    
    // RETORNA ERRO DETALHADO
    const errorResponse = {
      status: 'error',
      message: error.toString(),
      stack: error.stack,
      timestamp: new Date().toISOString()
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * FUNÇÃO GET - Para testar se o webhook está acessível
 */
function doGet(e) {
  console.log("🌐 GET recebido");
  console.log("Parâmetros:", JSON.stringify(e));
  
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Webhook funcionando! Use POST para enviar dados.',
      timestamp: new Date().toLocaleString('pt-BR'),
      planilha: SpreadsheetApp.getActiveSpreadsheet().getName()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * FUNÇÃO DE TESTE MANUAL
 * Execute esta função para testar se tudo está funcionando
 * Execuções > Selecione "testarInsercao" > Executar
 */
function testarInsercao() {
  console.log("🧪 === TESTE MANUAL INICIADO ===");
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log("📁 Planilha:", ss.getName());
  
  const sheet = ss.getSheets()[0];
  console.log("📄 Aba:", sheet.getName());
  console.log("📊 Linhas antes do teste:", sheet.getLastRow());
  
  // Simula um POST
  const dadosTeste = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
        name: "TESTE MANUAL - " + new Date().getTime(),
        email: "teste@email.com",
        whatsapp: "(11) 99999-9999",
        terms: "Sim"
      }),
      type: "application/json"
    }
  };
  
  console.log("📤 Enviando dados de teste...");
  const resultado = doPost(dadosTeste);
  const resposta = JSON.parse(resultado.getContent());
  
  console.log("📥 Resposta do teste:");
  console.log(JSON.stringify(resposta, null, 2));
  
  console.log("📊 Linhas após o teste:", sheet.getLastRow());
  console.log("🧪 === TESTE CONCLUÍDO ===");
  
  // Mostra um alerta
  if (resposta.status === 'success') {
    SpreadsheetApp.getUi().alert(
      '✅ TESTE BEM-SUCEDIDO!\n\n' +
      'Dados foram inseridos na linha ' + resposta.row + '\n\n' +
      'Verifique a planilha para confirmar.'
    );
  } else {
    SpreadsheetApp.getUi().alert(
      '❌ TESTE FALHOU!\n\n' +
      'Erro: ' + resposta.message + '\n\n' +
      'Veja os logs em Execuções.'
    );
  }
  
  return resposta;
}

/**
 * FUNÇÃO PARA LIMPAR A PLANILHA
 * Use com cuidado! Apaga todos os dados.
 */
function limparPlanilha() {
  const ui = SpreadsheetApp.getUi();
  const resposta = ui.alert(
    'Confirmar limpeza',
    'Tem certeza que deseja apagar TODOS os dados da planilha?',
    ui.ButtonSet.YES_NO
  );
  
  if (resposta === ui.Button.YES) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.clear();
    console.log("🗑️ Planilha limpa!");
    ui.alert('✅ Planilha limpa com sucesso!');
  } else {
    console.log("❌ Limpeza cancelada");
    ui.alert('❌ Operação cancelada');
  }
}

/**
 * FUNÇÃO PARA VER CONFIGURAÇÕES
 * Mostra informações sobre a planilha e webhook
 */
function verConfiguracoes() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  const webAppUrl = ScriptApp.getService().getUrl();
  
  const info = {
    planilha: ss.getName(),
    aba: sheet.getName(),
    linhas: sheet.getLastRow(),
    colunas: sheet.getLastColumn(),
    webAppUrl: webAppUrl || "Não implantado ainda"
  };
  
  console.log("ℹ️ Configurações:");
  console.log(JSON.stringify(info, null, 2));
  
  SpreadsheetApp.getUi().alert(
    '📊 Configurações da Planilha\n\n' +
    'Nome: ' + info.planilha + '\n' +
    'Aba: ' + info.aba + '\n' +
    'Linhas: ' + info.linhas + '\n' +
    'Colunas: ' + info.colunas + '\n\n' +
    'URL do Webhook:\n' + info.webAppUrl
  );
  
  return info;
}
