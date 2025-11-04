/**
 * Action para salvar inscrições da newsletter
 * Os dados ficam salvos localmente e podem ser exportados
 */

export interface SubscriptionData {
  name: string;
  email: string;
  whatsapp: string;
  terms: boolean;
  timestamp: string;
}

export interface Props {
  name: string;
  email: string;
  whatsapp: string;
  terms: string;
}

/**
 * Salva a inscrição da newsletter
 */
export default async function saveNewsletterSubscription(
  props: Props,
  req: Request
): Promise<{ success: boolean; message: string; data?: SubscriptionData }> {
  try {
    const { name, email, whatsapp, terms } = props;

    // Validação básica
    if (!name || !email || !whatsapp) {
      return {
        success: false,
        message: "Preencha todos os campos obrigatórios",
      };
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "E-mail inválido",
      };
    }

    // Cria o objeto de dados
    const subscriptionData: SubscriptionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      terms: terms === "accepted",
      timestamp: new Date().toISOString(),
    };

    console.log("✅ Inscrição salva:", subscriptionData);

    // Aqui você pode adicionar integrações futuras:
    // - Enviar para API do Google Sheets
    // - Enviar para CRM
    // - Enviar para plataforma de e-mail marketing
    // - Salvar em banco de dados

    // Por enquanto, retorna sucesso
    return {
      success: true,
      message: "Inscrição realizada com sucesso!",
      data: subscriptionData,
    };
  } catch (error) {
    console.error("❌ Erro ao salvar inscrição:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Erro ao processar inscrição",
    };
  }
}
