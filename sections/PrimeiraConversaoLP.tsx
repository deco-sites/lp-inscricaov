import { useSection } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @title URL do Google Sheets Webhook */
  /** @description Cole aqui a URL do webhook gerado no Google Apps Script */
  googleSheetsWebhook?: string;
  /** @title Logo (ícone superior) */
  logo?: ImageWidget;
  /** @title Link do Spotify */
  spotifyLink?: string;
}

export default function PrimeiraConversaoLP({
  googleSheetsWebhook = "",
  logo,
  spotifyLink = "https://open.spotify.com/show/sua-playlist",
}: Props) {
  return (
    <div class="min-h-screen bg-[#0f1419] text-white">
      {/* Header */}
      <header class="py-8">
        <div class="container mx-auto px-4 flex justify-center">
          {logo ? (
            <img src={logo} alt="Logo" class="w-12 h-12" />
          ) : (
            <div class="w-16 h-16 bg-[#1f2937] rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
              </svg>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section class="py-12 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            PRIMEIRA<br />
            <span class="text-emerald-400">CONVERSÃO</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-2">
            Seu jornal diário do mundo digital
          </p>
          <p class="text-sm text-gray-400">
            Todo dia útil às 04h00 na sua caixa de entrada
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div class="bg-[#1a2332] border border-gray-800 rounded-2xl p-8 text-center">
              <div class="w-16 h-16 bg-[#0f1419] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Todo dia às 04h</h3>
              <p class="text-gray-400 text-sm">
                Comece o dia informado com as principais notícias
              </p>
            </div>

            {/* Feature 2 */}
            <div class="bg-[#1a2332] border border-gray-800 rounded-2xl p-8 text-center">
              <div class="w-16 h-16 bg-[#0f1419] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Podcast 5 minutos</h3>
              <p class="text-gray-400 text-sm">
                Ouça no Spotify enquanto se prepara para o dia
              </p>
            </div>

            {/* Feature 3 */}
            <div class="bg-[#1a2332] border border-gray-800 rounded-2xl p-8 text-center">
              <div class="w-16 h-16 bg-[#0f1419] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Newsletter diária</h3>
              <p class="text-gray-400 text-sm">
                Receba diretamente no seu e-mail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Form Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-xl mx-auto bg-[#1a2332] border border-gray-800 rounded-3xl p-8 md:p-10">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-3">Receba a newsletter</h2>
              <p class="text-gray-400">
                Cadastre-se gratuitamente e fique por dentro do mundo digital
              </p>
            </div>

            <form
              class="space-y-6"
              hx-post={useSection({ props: { googleSheetsWebhook } })}
              hx-swap="outerHTML"
              hx-target="closest form"
            >
              {/* Nome Completo */}
              <div>
                <label for="name" class="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  class="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                />
              </div>

              {/* E-mail */}
              <div>
                <label for="email" class="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  class="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label for="whatsapp" class="block text-sm font-medium mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder="(00) 00000-0000"
                  class="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                />
              </div>

              {/* Checkbox de Aceite */}
              <div class="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  class="mt-1 w-4 h-4 rounded border-gray-700 bg-[#0f1419] text-emerald-400 focus:ring-emerald-400 focus:ring-offset-0"
                />
                <label for="terms" class="text-sm text-gray-300 leading-relaxed">
                  Aceito receber comunicações do Primeira Conversão e seus parceiros via e-mail e WhatsApp
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                class="w-full bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-4 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
              >
                Quero receber a newsletter
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section class="py-16 text-center">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Também disponível no Spotify
          </h2>
          <p class="text-gray-400 mb-8">
            Ouça o podcast diário de 5 minutos com as principais notícias
          </p>
          <a
            href={spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-4 px-8 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
          >
            Ouvir no Spotify
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-12 border-t border-gray-800">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-400 text-sm mb-2">
            © 2025 Primeira Conversão. Todos os direitos reservados.
          </p>
          <p class="text-gray-500 text-xs">
            Seu jornal diário do mundo digital • Das úteis às 04h
          </p>
        </div>
      </footer>
    </div>
  );
}

export const action = async (props: Props, req: Request) => {
  const form = await req.formData();
  
  const data = {
    name: form.get("name")?.toString() || "",
    email: form.get("email")?.toString() || "",
    whatsapp: form.get("whatsapp")?.toString() || "",
    terms: form.get("terms") === "on" ? "Sim" : "Não",
    timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
  };

  console.log("📝 Dados recebidos:", data);
  console.log("🔗 Webhook URL:", props.googleSheetsWebhook);

  let success = false;
  let errorMessage = "";

  // Envia para Google Sheets
  if (props.googleSheetsWebhook) {
    try {
      console.log("📤 Enviando para Google Sheets...");
      
      const response = await fetch(props.googleSheetsWebhook, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("✅ Resposta do Google Sheets:", response.status);
      success = true;
      
    } catch (error) {
      console.error("❌ Erro ao enviar para Google Sheets:", error);
      errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    }
  } else {
    errorMessage = "URL do webhook não configurada";
    console.warn("⚠️ URL do webhook não está configurada");
  }

  // Retorna mensagem de sucesso ou erro
  if (success || !props.googleSheetsWebhook) {
    return (
      <div class="bg-emerald-400/10 border border-emerald-400/30 rounded-2xl p-8 text-center space-y-4">
        <svg class="w-16 h-16 text-emerald-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-2xl font-bold text-white">
          Inscrição confirmada!
        </h3>
        <p class="text-gray-300">
          Você receberá nossa newsletter diária às 04h no seu e-mail.
        </p>
        <p class="text-gray-400 text-sm">
          Bem-vindo(a) ao Primeira Conversão! 🎉
        </p>
        <button
          onclick="window.location.reload()"
          class="mt-4 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
        >
          Fazer Nova Inscrição
        </button>
      </div>
    );
  } else {
    return (
      <div class="bg-red-400/10 border border-red-400/30 rounded-2xl p-8 text-center space-y-4">
        <svg class="w-16 h-16 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-2xl font-bold text-white">
          Erro no envio
        </h3>
        <p class="text-gray-300">
          Não foi possível processar sua inscrição.
        </p>
        <p class="text-red-400 text-sm">
          {errorMessage || "Tente novamente mais tarde"}
        </p>
        <button
          onclick="window.location.reload()"
          class="mt-4 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }
};
