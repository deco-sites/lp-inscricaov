import { useSection } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @title Título Principal */
  title?: string;
  /** @title Subtítulo */
  subtitle?: string;
  /** @title Imagem de Fundo */
  backgroundImage?: ImageWidget;
  /** @title Texto do Botão */
  buttonText?: string;
  /** @title URL de Webhook do Google Sheets */
  /** @description Cole aqui a URL do webhook gerado no Google Apps Script */
  googleSheetsWebhook?: string;
}

export default function LandingPageForm({
  title = "Inscreva-se Agora",
  subtitle = "Preencha o formulário abaixo para garantir sua vaga",
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200",
  buttonText = "Enviar Inscrição",
  googleSheetsWebhook = "",
}: Props) {
  return (
    <div class="min-h-screen w-full relative">
      {/* Background Image com Overlay */}
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div class="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-md">
          {/* Card */}
          <div class="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            {/* Header */}
            <div class="text-center space-y-2">
              <h1 class="text-3xl font-bold text-gray-900">
                {title}
              </h1>
              <p class="text-gray-600">
                {subtitle}
              </p>
            </div>

            {/* Form */}
            <form
              class="space-y-4"
              hx-post={useSection({ props: { googleSheetsWebhook } })}
              hx-swap="outerHTML"
              hx-target="closest form"
            >
              {/* Nome */}
              <div class="space-y-2">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Digite seu nome"
                />
              </div>

              {/* Email */}
              <div class="space-y-2">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div class="space-y-2">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Mensagem */}
              <div class="space-y-2">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Deixe uma mensagem..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {buttonText}
              </button>
            </form>
          </div>

          {/* Footer Text */}
          <p class="text-center text-white text-sm mt-6">
            Seus dados estão seguros conosco
          </p>
        </div>
      </div>
    </div>
  );
}

export const action = async (props: Props, req: Request) => {
  const form = await req.formData();
  const data = {
    name: form.get("name")?.toString() || "",
    email: form.get("email")?.toString() || "",
    phone: form.get("phone")?.toString() || "",
    message: form.get("message")?.toString() || "",
    timestamp: new Date().toISOString(),
  };

  // Se houver webhook configurado, envia para Google Sheets
  if (props.googleSheetsWebhook) {
    try {
      await fetch(props.googleSheetsWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Erro ao enviar para Google Sheets:", error);
    }
  }

  // Retorna mensagem de sucesso
  return (
    <div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center space-y-3">
      <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <h3 class="text-2xl font-bold text-green-900">
        Inscrição Enviada!
      </h3>
      <p class="text-green-700 text-lg">
        Obrigado! Entraremos em contato em breve.
      </p>
      <button
        onclick="window.location.reload()"
        class="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Enviar Nova Inscrição
      </button>
    </div>
  );
};