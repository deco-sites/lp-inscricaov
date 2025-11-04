// COLE ESTE CÓDIGO NO GOOGLE APPS SCRIPT
// Acesse: Extensões > Apps Script na sua planilha do Google Sheets

function doPost(e) {
  try {
    // Log completo para debug
    Logger.log("=== NOVA REQUISIÇÃO ===");
    Logger.log("postData: " + JSON.stringify(e.postData));
    Logger.log("contents: " + e.postData.contents);
    
    // Pega a planilha ativa
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Parse dos dados recebidos
    let data;
    try {
      data = JSON.parse(e.postData.contents);
      Logger.log("Dados parseados com sucesso: " + JSON.stringify(data));
    } catch (parseError) {
      Logger.log("ERRO ao fazer parse do JSON: " + parseError);
      throw new Error("Erro ao processar dados: " + parseError);
    }
    
    // Se a planilha estiver vazia, cria cabeçalhos
    if (sheet.getLastRow() === 0) {
      Logger.log("Criando cabeçalhos...");
      const headers = ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Aceite de Termos'];
      sheet.appendRow(headers);
      
      // Formata os cabeçalhos
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4ade80");
      headerRange.setFontColor("#000000");
    }
    
    // Prepara os dados para inserção
    const rowData = [
      data.timestamp || new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.name || "",
      data.email || "",
      data.whatsapp || "",
      data.terms || "Não"
    ];
    
    Logger.log("Inserindo linha: " + JSON.stringify(rowData));
    
    // Insere os dados
    sheet.appendRow(rowData);
    
    // Auto-ajusta as colunas
    sheet.autoResizeColumns(1, 5);
    
    Logger.log("✅ Dados inseridos com sucesso!");
    Logger.log("Linha inserida: " + sheet.getLastRow());
    
    // Retorna resposta de sucesso
    const response = {
      status: 'success',
      message: 'Dados salvos com sucesso!',
      row: sheet.getLastRow()
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log detalhado do erro
    Logger.log("❌ ERRO: " + error.toString());
    Logger.log("Stack: " + error.stack);
    
    // Retorna erro detalhado
    const errorResponse = {
      status: 'error',
      message: error.toString(),
      details: error.stack
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função GET para testar se o webhook está funcionando
function doGet(e) {
  Logger.log("GET recebido: " + JSON.stringify(e));
  
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Webhook está funcionando! Use POST para enviar dados.',
      timestamp: new Date().toLocaleString('pt-BR')
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função de teste manual (Execute esta função para testar)
function testarInsercao() {
  Logger.log("=== TESTE MANUAL ===");
  
  const dadosTeste = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
        name: "João Teste",
        email: "joao.teste@email.com",
        whatsapp: "(11) 98765-4321",
        terms: "Sim"
      }),
      type: "application/json"
    }
  };
  
  const resultado = doPost(dadosTeste);
  const resposta = resultado.getContent();
  
  Logger.log("Resposta do teste:");
  Logger.log(resposta);
  
  return resposta;
}

// Função para limpar a planilha (use com cuidado!)
function limparPlanilha() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  Logger.log("Planilha limpa!");
}
