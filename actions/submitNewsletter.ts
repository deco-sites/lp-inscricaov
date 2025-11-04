/**
 * Action para processar inscrições da newsletter
 * NÃO expõe dados na URL
 */

export interface Props {
  name: string;
  email: string;
  whatsapp: string;
  terms: string;
  webhookUrl?: string;
}

export default async function submitNewsletter(props: Props) {
  const { name, email, whatsapp, terms, webhookUrl } = props;

  console.log("=== PROCESSANDO INSCRIÇÃO (SEM EXPOR NA URL) ===");
  console.log("📝 Nome:", name);
  console.log("📝 Email:", email);
  console.log("📝 WhatsApp:", whatsapp);
  console.log("📝 Termos:", terms);

  // Validação
  if (!name || !email || !whatsapp) {
    return {
      success: false,
      message: "Preencha todos os campos obrigatórios",
    };
  }

  if (!webhookUrl) {
    return {
      success: false,
      message: "Webhook não configurado. Configure a URL do Google Sheets no Admin.",
    };
  }

  // Envia para Google Sheets
  try {
    const timestamp = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    const payload = {
      name,
      email,
      whatsapp,
      terms: terms === "accepted" ? "Sim" : "Não",
      timestamp,
    };

    console.log("📤 Enviando para Google Sheets...");
    console.log("🔗 URL:", webhookUrl);
    console.log("📦 Payload:", JSON.stringify(payload, null, 2));

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("📡 Status HTTP:", response.status);

    const responseText = await response.text();
    console.log("📄 Resposta:", responseText);

    if (response.ok || response.status === 302) {
      console.log("✅ SUCESSO! Dados salvos");
      return {
        success: true,
        message: "Inscrição realizada com sucesso!",
        data: payload,
      };
    } else {
      console.error("❌ Erro HTTP:", response.status);
      return {
        success: false,
        message: `Erro ao enviar: ${response.status}`,
      };
    }
  } catch (error) {
    console.error("❌ Erro ao enviar:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}
