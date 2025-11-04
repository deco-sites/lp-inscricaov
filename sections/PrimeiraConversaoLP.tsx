import { useSection } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { invoke } from "../runtime.ts";

export interface Props {
  /** @title Título Principal (parte 1) */
  titlePart1?: string;
  
  /** @title Título Principal (parte 2 - verde) */
  titlePart2?: string;
  
  /** @title Subtítulo */
  subtitle?: string;
  
  /** @title Texto abaixo do subtítulo */
  subText?: string;
  
  /** @title Card 1 - Título */
  card1Title?: string;
  
  /** @title Card 1 - Descrição */
  card1Description?: string;
  
  /** @title Card 2 - Título */
  card2Title?: string;
  
  /** @title Card 2 - Descrição */
  card2Description?: string;
  
  /** @title Card 3 - Título */
  card3Title?: string;
  
  /** @title Card 3 - Descrição */
  card3Description?: string;
  
  /** @title Título do Formulário */
  formTitle?: string;
  
  /** @title Subtítulo do Formulário */
  formSubtitle?: string;
  
  /** @title Label do campo Nome */
  labelName?: string;
  
  /** @title Placeholder do campo Nome */
  placeholderName?: string;
  
  /** @title Label do campo Email */
  labelEmail?: string;
  
  /** @title Placeholder do campo Email */
  placeholderEmail?: string;
  
  /** @title Label do campo WhatsApp */
  labelWhatsApp?: string;
  
  /** @title Placeholder do campo WhatsApp */
  placeholderWhatsApp?: string;
  
  /** @title Texto do Radio Button */
  radioText?: string;
  
  /** @title Texto do Botão */
  buttonText?: string;
  
  /** @title Título da Seção Spotify */
  spotifyTitle?: string;
  
  /** @title Descrição da Seção Spotify */
  spotifyDescription?: string;
  
  /** @title Texto do Botão Spotify */
  spotifyButtonText?: string;
  
  /** @title Link do Spotify */
  spotifyLink?: string;
  
  /** @title Texto do Footer (linha 1) */
  footerText1?: string;
  
  /** @title Texto do Footer (linha 2) */
  footerText2?: string;
  
  /** @title URL do Google Sheets Webhook (opcional) */
  /** @description Se preenchido, também enviará os dados para o Google Sheets */
  googleSheetsWebhook?: string;
}

export default function PrimeiraConversaoLP(props: Props) {
  const {
    titlePart1 = "PRIMEIRA",
    titlePart2 = "CONVERSÃO",
    subtitle = "Seu jornal diário do mundo digital",
    subText = "Todo dia útil às 04h00 na sua caixa de entrada",
    card1Title = "Todo dia às 04h",
    card1Description = "Comece o dia informado com as principais notícias",
    card2Title = "Podcast 5 minutos",
    card2Description = "Ouça no Spotify enquanto se prepara para o dia",
    card3Title = "Newsletter diária",
    card3Description = "Receba diretamente no seu e-mail",
    formTitle = "Receba a newsletter",
    formSubtitle = "Cadastre-se gratuitamente e fique por dentro do mundo digital",
    labelName = "Nome completo",
    placeholderName = "Seu nome",
    labelEmail = "E-mail",
    placeholderEmail = "seu@email.com",
    labelWhatsApp = "WhatsApp",
    placeholderWhatsApp = "(00) 00000-0000",
    radioText = "Aceito receber comunicações do Primeira Conversão e seus parceiros via e-mail e WhatsApp",
    buttonText = "Quero receber a newsletter",
    spotifyTitle = "Também disponível no Spotify",
    spotifyDescription = "Ouça o podcast diário de 5 minutos com as principais notícias",
    spotifyButtonText = "Ouvir no Spotify",
    spotifyLink = "https://open.spotify.com/",
    footerText1 = "© 2025 Primeira Conversão. Todos os direitos reservados.",
    footerText2 = "Seu jornal diário do mundo digital • Das úteis às 04h",
    googleSheetsWebhook = "",
  } = props;

  return (
    <div class="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <header class="pt-12 pb-8">
        <div class="container mx-auto px-4 flex justify-center">
          <div class="w-20 h-20 bg-emerald-600/20 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section class="py-6 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
            {titlePart1}<br />
            <span class="text-[#4ade80]">{titlePart2}</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-100 mb-2 font-medium">
            {subtitle}
          </p>
          <p class="text-sm text-gray-400">
            {subText}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {/* Card 1 - Relógio */}
            <div class="bg-[#1a2332] border border-gray-800 rounded-2xl p-8 text-center">
              <div class="w-20 h-20 bg-[#0d1117] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg class="w-10 h-10 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-3 text-white">
                {card1Title}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {card1Description}
              </p>
            </div>

            {/* Card 2 - Fone */}
            <div class="bg-[#1a2332] border border-gray-800 rounded-2xl p-8 text-center">
              <div class="w-20 h-20 bg-[#0d1117] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg class="w-10 h-10 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-3 text-white">
                {card2Title}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {card2Description}
              </p>
            </div>

            {/* Card 3 - Email */}
            <div class="bg-[#1a2332] border border-gray-800 rounded-2xl p-8 text-center">
              <div class="w-20 h-20 bg-[#0d1117] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg class="w-10 h-10 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-3 text-white">
                {card3Title}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {card3Description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Form Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-xl mx-auto bg-[#1a2332] border border-gray-800 rounded-3xl p-10">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-3 text-white">
                {formTitle}
              </h2>
              <p class="text-gray-400 text-sm">
                {formSubtitle}
              </p>
            </div>

            <form
              class="space-y-5"
              hx-post={useSection({ props })}
              hx-swap="outerHTML"
              hx-target="closest form"
            >
              {/* Nome Completo */}
              <div>
                <label for="name" class="block text-sm font-semibold mb-2 text-white">
                  {labelName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={placeholderName}
                  class="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none transition text-white placeholder-gray-500"
                />
              </div>

              {/* E-mail */}
              <div>
                <label for="email" class="block text-sm font-semibold mb-2 text-white">
                  {labelEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={placeholderEmail}
                  class="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none transition text-white placeholder-gray-500"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label for="whatsapp" class="block text-sm font-semibold mb-2 text-white">
                  {labelWhatsApp}
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder={placeholderWhatsApp}
                  class="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none transition text-white placeholder-gray-500"
                />
              </div>

              {/* Radio Button de Aceite */}
              <div class="flex items-start gap-3 pt-2">
                <input
                  type="radio"
                  id="terms"
                  name="terms"
                  value="accepted"
                  required
                  class="mt-0.5 w-4 h-4 border-gray-600 bg-transparent text-[#4ade80] focus:ring-[#4ade80] cursor-pointer"
                />
                <label for="terms" class="text-sm text-gray-300 leading-relaxed cursor-pointer">
                  {radioText}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                class="w-full bg-[#4ade80] hover:bg-[#3cc76e] text-gray-900 font-bold py-4 px-6 rounded-lg transition duration-200 mt-6"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section class="py-16 text-center">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            {spotifyTitle}
          </h2>
          <p class="text-gray-400 mb-10 text-base max-w-2xl mx-auto">
            {spotifyDescription}
          </p>
          <a
            href={spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-[#4ade80] hover:bg-[#3cc76e] text-gray-900 font-bold py-4 px-12 rounded-full transition duration-200"
          >
            {spotifyButtonText}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-16 border-t border-gray-800 mt-20">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-400 text-sm mb-2">
            {footerText1}
          </p>
          <p class="text-gray-500 text-xs mb-6">
            {footerText2}
          </p>
          
          {/* Desenvolvido por TEC4U */}
          <div class="flex items-center justify-center gap-2 text-gray-500 text-xs">
            <span>Desenvolvido por</span>
            <a 
              href="https://www.tec4udigital.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center hover:opacity-80 transition"
            >
              <img 
                src="https://cdn.prod.website-files.com/6526a00fbfb681da0e87743b/6526ab3ba6aaac4ad817286e_Vector.svg" 
                alt="TEC4U" 
                class="h-4"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const action = async (props: Props, req: Request) => {
  const form = await req.formData();
  
  const name = form.get("name")?.toString() || "";
  const email = form.get("email")?.toString() || "";
  const whatsapp = form.get("whatsapp")?.toString() || "";
  const terms = form.get("terms")?.toString() || "";

  console.log("=== PROCESSANDO INSCRIÇÃO ===");
  console.log("📝 Nome:", name);
  console.log("📝 Email:", email);
  console.log("📝 WhatsApp:", whatsapp);
  console.log("📝 Termos:", terms);

  try {
    // Salva usando a Action (mais seguro, sem passar dados via URL)
    const result = await invoke["site"].actions.saveNewsletterSubscription({
      name,
      email,
      whatsapp,
      terms,
    });

    console.log("🔍 Resultado da Action:", result);

    // Se tiver webhook do Google Sheets configurado, envia também
    if (props.googleSheetsWebhook && result.success) {
      console.log("📤 Enviando também para Google Sheets...");
      try {
        const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        const payload = {
          name,
          email,
          whatsapp,
          terms: terms === "accepted" ? "Sim" : "Não",
          timestamp,
        };
        
        await fetch(props.googleSheetsWebhook, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
        
        console.log("✅ Enviado para Google Sheets");
      } catch (err) {
        console.error("⚠️ Erro ao enviar para Google Sheets (mas dados foram salvos):", err);
      }
    }

    if (result.success) {
      return (
        <div class="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-10 text-center space-y-4">
          <svg class="w-20 h-20 text-emerald-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-3xl font-bold text-white">
            Inscrição confirmada!
          </h3>
          <p class="text-gray-300 text-lg">
            Você receberá nossa newsletter diária às 04h no seu e-mail.
          </p>
          <p class="text-gray-400">
            Bem-vindo(a) ao Primeira Conversão! 🎉
          </p>
          <button
            onclick="window.location.reload()"
            class="mt-6 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Fazer Nova Inscrição
          </button>
        </div>
      );
    } else {
      return (
        <div class="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-10 text-center space-y-4">
          <svg class="w-20 h-20 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-3xl font-bold text-white">
            Erro na inscrição
          </h3>
          <p class="text-gray-300 text-lg">
            {result.message}
          </p>
          <button
            onclick="window.location.reload()"
            class="mt-6 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Tentar Novamente
          </button>
        </div>
      );
    }
  } catch (error) {
    console.error("❌ Erro:", error);
    return (
      <div class="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-10 text-center space-y-4">
        <svg class="w-20 h-20 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-3xl font-bold text-white">
          Erro no sistema
        </h3>
        <p class="text-gray-300">
          Ocorreu um erro ao processar sua inscrição. Tente novamente.
        </p>
        <button
          onclick="window.location.reload()"
          class="mt-6 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }
};
