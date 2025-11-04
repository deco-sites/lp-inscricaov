import { useState } from "preact/hooks";
import { invoke } from "../runtime.ts";

export interface NewsletterFormProps {
  labelName: string;
  placeholderName: string;
  labelEmail: string;
  placeholderEmail: string;
  labelWhatsApp: string;
  placeholderWhatsApp: string;
  radioText: string;
  buttonText: string;
  webhookUrl: string;
}

export default function NewsletterForm(props: NewsletterFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const terms = formData.get("terms") as string;

    console.log("=== DADOS CAPTURADOS (NÃO VÃO PARA URL) ===");
    console.log("📝 Nome:", name);
    console.log("📝 Email:", email);
    console.log("📝 WhatsApp:", whatsapp);
    console.log("📝 Termos:", terms);

    setLoading(true);
    setError("");

    try {
      // Chama a action - DADOS NÃO VÃO PELA URL!
      const result = await invoke["site"].actions.submitNewsletter({
        name,
        email,
        whatsapp,
        terms,
        webhookUrl: props.webhookUrl,
      });

      console.log("📥 Resultado:", result);

      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(result.message || "Erro ao processar inscrição");
      }
    } catch (err) {
      console.error("❌ Erro:", err);
      setError(err instanceof Error ? err.message : "Erro ao processar");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
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
          onClick={() => setSuccess(false)}
          class="mt-6 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
        >
          Fazer Nova Inscrição
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-5">
      {/* Nome Completo */}
      <div>
        <label for="name" class="block text-sm font-semibold mb-2 text-white">
          {props.labelName}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder={props.placeholderName}
          class="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none transition text-white placeholder-gray-500"
        />
      </div>

      {/* E-mail */}
      <div>
        <label for="email" class="block text-sm font-semibold mb-2 text-white">
          {props.labelEmail}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={props.placeholderEmail}
          class="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none transition text-white placeholder-gray-500"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label for="whatsapp" class="block text-sm font-semibold mb-2 text-white">
          {props.labelWhatsApp}
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          placeholder={props.placeholderWhatsApp}
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
          {props.radioText}
        </label>
      </div>

      {/* Mensagem de Erro */}
      {error && (
        <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-300 text-sm">
          ❌ {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        class="w-full bg-[#4ade80] hover:bg-[#3cc76e] text-gray-900 font-bold py-4 px-6 rounded-lg transition duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : props.buttonText}
      </button>
    </form>
  );
}
