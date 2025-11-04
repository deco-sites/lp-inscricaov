# 📋 Instruções Completas - Integração Google Sheets

## 🎯 O que foi feito

✅ Landing page totalmente editável via painel Admin  
✅ Layout idêntico à imagem fornecida  
✅ Todas as imagens, ícones e textos editáveis  
✅ Script do Google Sheets corrigido e testado  
✅ Logs detalhados para debug  

---

## 📝 PASSO 1: Configurar o Google Sheets

### 1.1 Criar a Planilha

1. Acesse: https://sheets.google.com
2. Crie uma nova planilha em branco
3. Dê um nome: "Inscrições - Primeira Conversão"

### 1.2 Abrir o Apps Script

1. Na planilha, clique em **Extensões > Apps Script**
2. Apague todo o código que aparecer
3. Copie o código do arquivo `/static/google-apps-script.js` deste projeto
4. Cole no Apps Script
5. Salve (Ctrl+S ou ícone de disquete)
6. Dê um nome ao projeto: "Webhook Newsletter"

### 1.3 Testar o Script

**IMPORTANTE: Execute este teste ANTES de implantar!**

1. No menu dropdown de funções, selecione: **`testarInsercao`**
2. Clique em **▶️ Executar**
3. Na primeira vez, será solicitada autorização:
   - Clique em **"Analisar permissões"**
   - Escolha sua conta do Google
   - Clique em **"Avançado"**
   - Clique em **"Ir para [nome do projeto] (não seguro)"**
   - Clique em **"Permitir"**
4. Verifique:
   - Vá na aba **Execuções** (menu lateral)
   - Veja os logs - deve mostrar "✅ Dados inseridos com sucesso!"
   - Volte para a planilha e verifique se apareceu uma linha de teste

✅ **Se o teste funcionou, prossiga para a implantação**

### 1.4 Implantar como Web App

1. No Apps Script, clique em **🚀 Implantar > Nova implantação**
2. Clique no ícone de **⚙️ engrenagem** ao lado de "Selecionar tipo"
3. Escolha **"Aplicativo da Web"**
4. Configure EXATAMENTE assim:
   - **Descrição:** "Webhook Newsletter Primeira Conversão"
   - **Executar como:** **Eu** (sua conta)
   - **Quem tem acesso:** **Qualquer pessoa** ⚠️ CRÍTICO!
5. Clique em **Implantar**
6. **COPIE A URL COMPLETA** (algo como: `https://script.google.com/macros/s/AKfycby...../exec`)
7. Clique em **Concluído**

---

## 🎨 PASSO 2: Configurar no Admin da deco.cx

### 2.1 Acessar o Admin

1. Acesse: https://lp-inscricaov.deco.site/admin
2. Faça login

### 2.2 Configurar a Home

1. Vá em: **Páginas > Home**
2. Adicione ou edite a section **PrimeiraConversaoLP**
3. Configure os campos:

#### Configurações Obrigatórias:
- **URL do Google Sheets Webhook:** Cole a URL copiada do Apps Script

#### Textos Editáveis:
- **Logo Superior:** Faça upload de um ícone
- **Título Principal (parte 1):** PRIMEIRA
- **Título Principal (parte 2 - verde):** CONVERSÃO
- **Subtítulo:** Seu jornal diário do mundo digital
- **Texto abaixo do subtítulo:** Todo dia útil às 04h00 na sua caixa de entrada

#### Benefícios (3 cards):
Cada card tem:
- **Ícone:** URL de uma imagem
- **Título:** Texto do card
- **Descrição:** Texto descritivo

Padrão:
1. Todo dia às 04h / Comece o dia informado...
2. Podcast 5 minutos / Ouça no Spotify...
3. Newsletter diária / Receba diretamente...

#### Formulário:
- **Título do Formulário:** Receba a newsletter
- **Subtítulo do Formulário:** Cadastre-se gratuitamente...
- **Labels dos campos:** Nome completo, E-mail, WhatsApp
- **Placeholders:** Seu nome, seu@email.com, (00) 00000-0000
- **Texto do Checkbox:** Aceito receber comunicações...
- **Texto do Botão:** Quero receber a newsletter

#### Seção Spotify:
- **Título:** Também disponível no Spotify
- **Descrição:** Ouça o podcast diário...
- **Texto do Botão:** Ouvir no Spotify
- **Link do Spotify:** URL do podcast

#### Footer:
- **Texto linha 1:** © 2025 Primeira Conversão...
- **Texto linha 2:** Seu jornal diário do mundo digital...

4. **Salvar**
5. **Publicar**

---

## 🧪 PASSO 3: Testar a Integração

### 3.1 Teste Completo

1. Acesse o site: https://lp-inscricaov.deco.site
2. Preencha o formulário com dados de teste:
   - Nome: João Silva
   - Email: joao@teste.com
   - WhatsApp: (11) 99999-9999
   - Marque o checkbox
3. Clique em "Quero receber a newsletter"
4. **Aguarde a mensagem de confirmação**

### 3.2 Verificar os Dados

1. **Na Planilha:**
   - Volte para a planilha do Google Sheets
   - Verifique se a linha foi adicionada
   - Confira os dados

2. **Nos Logs do Apps Script:**
   - Vá em Apps Script
   - Clique em **Execuções** (menu lateral)
   - Veja a última execução
   - Clique nela para ver os logs detalhados

3. **No Console do Navegador:**
   - No site, pressione F12
   - Vá na aba **Console**
   - Preencha o formulário novamente
   - Veja os logs começando com 📝, 📤, ✅ ou ❌

---

## 🐛 Solução de Problemas

### ❌ Erro: "Webhook não configurado"
**Solução:** Certifique-se de que a URL do webhook foi colada corretamente no Admin

### ❌ Erro: "http error 403"
**Solução:** 
1. No Apps Script, vá em **Implantar > Gerenciar implantações**
2. Edite a implantação
3. Certifique-se de que "Quem tem acesso" está como **"Qualquer pessoa"**
4. Clique em **Implantar**
5. Copie a NOVA URL e atualize no Admin

### ❌ Dados não aparecem na planilha
**Solução:**
1. Execute a função `testarInsercao()` no Apps Script
2. Veja os logs na aba **Execuções**
3. Se o teste funcionar, o problema pode ser na URL configurada
4. Verifique se a URL está completa (deve terminar com `/exec`)

### ❌ Erro: "Script function not found: doPost"
**Solução:** Certifique-se de que o código foi colado corretamente e foi salvo

### ❌ Checkbox não funciona
**Solução:** O código já foi corrigido. O valor agora é `value="accepted"`

---

## 📊 Estrutura da Planilha

| Data/Hora | Nome | Email | WhatsApp | Aceite de Termos |
|-----------|------|-------|----------|------------------|
| 20/01/2025 10:30 | João Silva | joao@email.com | (11) 99999-9999 | Sim |

---

## 🎨 Elementos Editáveis no Admin

### Todos os elementos podem ser editados sem mexer no código:

✅ Logo/ícone do header  
✅ Títulos e subtítulos  
✅ 3 cards de benefícios (ícone + textos)  
✅ Todos os textos do formulário  
✅ Labels e placeholders  
✅ Texto do checkbox  
✅ Textos dos botões  
✅ Seção Spotify completa  
✅ Footer completo  
✅ URL do webhook do Google Sheets  

---

## 🔍 Como Visualizar os Logs

### No Apps Script:
1. Abra o Apps Script
2. Menu lateral: **Execuções**
3. Clique na execução para ver logs detalhados

### No Navegador:
1. No site, pressione **F12**
2. Vá na aba **Console**
3. Envie o formulário
4. Veja logs como:
   ```
   === INÍCIO DO ENVIO ===
   📝 Dados capturados...
   🔗 Webhook URL...
   📤 Preparando envio...
   ✅ Dados enviados com sucesso!
   ```

---

## ✅ Checklist Final

- [ ] Planilha do Google Sheets criada
- [ ] Código colado no Apps Script
- [ ] Função `testarInsercao()` executada com sucesso
- [ ] Autorização do Google concedida
- [ ] Web App implantado como "Qualquer pessoa"
- [ ] URL do webhook copiada
- [ ] URL colada no Admin da deco.cx
- [ ] Textos e imagens personalizados no Admin
- [ ] Teste real enviado pelo site
- [ ] Dados apareceram na planilha

---

## 🎉 Pronto!

Sua landing page está completa e funcionando!

**Suporte:** Se ainda tiver problemas, envie:
1. Captura de tela do erro
2. Logs do Console do navegador (F12)
3. Logs do Apps Script (aba Execuções)
