"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Download,
  MessageCircle,
  FileText,
  Target,
  CheckCircle2,
  GraduationCap,
  ClipboardCheck,
  Award,
  Building2,
  Handshake,
  Sparkles,
  Users2,
  MapPin,
  Clock4,
  BookOpenCheck,
  HelpCircle,
  Mail,
  Phone,
  Crown,
} from "lucide-react";

/**
 * Cuidatoria — ONG do Futuro (Landing Page)
 * Paleta aprox.: teal #2FB7AD, orange #F4A520, gold #D4AF37, ink #0F1C1C
 */

export default function ONGDoFuturoPage() {
  const whatsNumber = "+554899832081"; // seu número no formato E.164
  const preMsg = encodeURIComponent("Olá! Tenho interesse no programa ONG do Futuro.");
  const preMsgJoin = encodeURIComponent("Olá! Quero participar do ONG do Futuro.");
  const preMsgTotals = encodeURIComponent("Olá! Sobre os totais do projeto, quero avançar no Cenário B (com HUB).");
  const pdfUrl = "/projeto-ong-do-futuro.pdf"; // link real do PDF

  return (
    <div
      className="min-h-screen bg-[var(--cui-ink)] text-white"
      style={
        {
          "--cui-teal": "#2FB7AD",
          "--cui-orange": "#F4A520",
          "--cui-gold": "#D4AF37",
          "--cui-ink": "#0F1C1C",
        } as React.CSSProperties
      }
    >
      <Hero pdfUrl={pdfUrl} whatsNumber={whatsNumber} preMsgJoin={preMsgJoin} />
      <ImpactNumbers />
      <WhySection />
      <Steps />
      <SpaceHub />
      {/* NOVA SEÇÃO — TOTAIS DO PROJETO */}
      <TotaisProjeto
        pdfUrl={pdfUrl}
        whatsNumber={whatsNumber}
        preMsgTotals={preMsgTotals}
      />
      <SponsorsCTA />
      <Team />
      <Proponente />
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <a
        href={`https://wa.me/${whatsNumber}?text=${preMsg}`}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 group"
        target="_blank"
      >
        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-[var(--cui-teal)]/40 blur-md opacity-80 group-hover:opacity-100 transition" />
          <Button className="rounded-full h-14 w-14 p-0 bg-[var(--cui-teal)] hover:bg-[#27a196] shadow-xl">
            <MessageCircle className="h-7 w-7" />
          </Button>
        </div>
      </a>
    </div>
  );
}

/* --------- Seções --------- */

function Hero({
  pdfUrl,
  whatsNumber,
  preMsgJoin,
}: {
  pdfUrl: string;
  whatsNumber: string;
  preMsgJoin: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cui-teal)]/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo-cuidatoria.png"
              alt="Cuidatoria"
              className="h-12 w-auto object-contain drop-shadow"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <Badge className="bg-[var(--cui-teal)]/20 text-[var(--cui-teal)] border-[var(--cui-teal)]/30">
              Programa 360°
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            ONG do Futuro: <span className="text-[var(--cui-teal)]">100 OSC</span> aceleradas em 6 etapas
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
            Diagnóstico em 1 minuto, regularização completa, capacitações práticas, projetos aprováveis, prestação de
            contas impecável e conexão direta com empresas patrocinadoras.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* “Quero Participar” -> WhatsApp */}
            <Button asChild className="bg-[var(--cui-teal)] hover:bg-[#27a196]">
              <a
                href={`https://wa.me/${whatsNumber}?text=${preMsgJoin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quero participar via WhatsApp"
                className="flex items-center gap-2"
              >
                Quero Participar <ChevronRight className="h-5 w-5" />
              </a>
            </Button>

            {/* Botão de destaque (sem branco) */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[var(--cui-gold)] to-[var(--cui-orange)] text-[var(--cui-ink)] hover:opacity-90"
            >
              <a href={pdfUrl} download className="flex items-center gap-2">
                <Download className="h-5 w-5" /> Baixar PDF do Projeto
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[var(--cui-gold)]" /> Transparência & Impacto
            </div>
            <div className="flex items-center gap-2">
              <Handshake className="h-5 w-5 text-[var(--cui-orange)]" /> Governo • Empresas • OSC
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-[var(--cui-teal)]/30 via-[var(--cui-orange)]/20 to-[var(--cui-gold)]/20 blur-xl" />
            <div className="relative rounded-[28px] p-1 bg-white/5 border border-white/10 backdrop-blur">
              <div className="rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FileText, label: "Relatório instantâneo" },
                    { icon: Target, label: "Demandas priorizadas" },
                    { icon: Building2, label: "Regularização" },
                    { icon: GraduationCap, label: "Mentorias pro" },
                    { icon: ClipboardCheck, label: "Editais, do zero" },
                    { icon: Award, label: "Certificação final" },
                  ].map(({ icon: Icon, label }, i) => (
                    <Card key={i} className="bg-white/5 border-white/10">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-[var(--cui-teal)]/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[var(--cui-teal)]" />
                        </div>
                        <span className="text-white/90">{label}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactNumbers() {
  const items = [
    { k: "100 OSC", v: "aceleradas" },
    { k: "6 Etapas", v: "roteiro completo" },
    { k: "1 min", v: "diagnóstico DIALOGICS" },
    { k: "+4 mentores", v: "hands-on" },
  ];
  return (
    <section className="py-10 md:py-14 border-y border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[var(--cui-teal)]">{it.k}</div>
            <div className="text-white/70">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-16" id="sobre">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-black">
            Por que o <span className="text-[var(--cui-teal)]">ONG do Futuro</span> é diferente?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl">
            Unimos tecnologia proprietária (DIALOGICS & Edital Certo), mentoria executiva e uma ponte real com
            patrocinadores. O resultado são OSCs regularizadas, eficientes e prontas para captar e executar recursos com
            excelência e transparência.
          </p>
          <ul className="mt-6 grid gap-3 text-white/85">
            {[
              "Relatórios claros para OSCs e patrocinadores",
              "Mapeamento de riscos e prioridades por maturidade",
              "Formação prática com avaliações e Hackathon Social",
              "Prestação de contas guiada, com templates e checklists",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--cui-orange)]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold mb-4">Para patrocinadores</h3>
            <p className="text-white/80">
              Entregamos um <strong>dashboard de demandas</strong> e relatórios consolidados de maturidade, facilitando
              a alocação de recursos com foco em impacto e conformidade. Acompanhe a evolução por OSC e por etapa do
              programa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** SEÇÃO — Espaço de Acolhimento (Poupa Tempo do 3º Setor) com IMAGEM */
function SpaceHub() {
  const bullets = [
    {
      icon: HelpCircle,
      title: "Acolhimento & Orientação",
      desc:
        "Balcão presencial para tirar dúvidas, abrir chamados e receber direcionamento individual sobre documentos, cadastros e rotinas.",
    },
    {
      icon: BookOpenCheck,
      title: "Capacitações contínuas",
      desc:
        "Agenda mensal com oficinas e mentorias presenciais/híbridas: gestão, portfólio, escrita de projetos, prestação de contas e compliance.",
    },
    {
      icon: ClipboardCheck,
      title: "Regularização na prática",
      desc:
        "Clínicas jurídicas e contábeis com checklists, modelos e conferência documental para acelerar estatutos, atas e certidões.",
    },
    {
      icon: Target,
      title: "Plantões Edital Certo",
      desc:
        "Análise de editais, aderência projeto–edital e criação/ajustes guiados para submissão com mais chance de aprovação.",
    },
  ] as const;

  return (
    <section
      id="espaco"
      className="relative py-16 border-y border-white/10 bg-gradient-to-b from-white/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-start">
        {/* Texto à esquerda */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--cui-teal)]/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-[var(--cui-teal)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black">
              Espaço de Acolhimento —{" "}
              <span className="text-[var(--cui-teal)]">“Poupa Tempo do 3º Setor”</span>
            </h2>
          </div>

          <p className="mt-4 text-white/80 max-w-3xl">
            Com a locação do espaço, criaremos um ponto fixo de atendimento para as OSC de Santa Catarina — um
            ambiente acolhedor e resolutivo onde as organizações podem buscar informações, participar de capacitações,
            receber orientação para regularização e preparar projetos. É o equivalente a um <strong>Poupa Tempo</strong>,
            só que dedicado ao <strong>3º Setor</strong>.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-white/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--cui-orange)]" /> Florianópolis/SC
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock4 className="h-4 w-4 text-[var(--cui-orange)]" /> Atendimento em horário comercial
            </span>
          </div>
        </div>

        {/* Direita: IMAGEM + Bullets */}
        <div className="lg:col-span-5 space-y-5">
          {/* IMAGEM DA FACHADA */}
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[var(--cui-teal)]/50 via-white/10 to-[var(--cui-orange)]/40">
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <Image
                  src="/images/cuidatoria-hub.png"   // coloque o arquivo em /public/images/
                  alt="Fachada — Cuidatoria HUB do 3º Setor"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
              <div className="px-4 py-2 text-sm text-white/80 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--cui-teal)]" />
                Cuidatoria HUB do 3º Setor
              </div>
            </div>
          </div>

          {/* BULLETS */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="grid gap-4">
              {bullets.map((b, i) => {
                const Icon = b.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[var(--cui-teal)]/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[var(--cui-teal)]" />
                    </div>
                    <div>
                      <div className="font-semibold">{b.title}</div>
                      <div className="text-white/75">{b.desc}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Faixa de reforço */}
        <div className="lg:col-span-12 mt-2 rounded-xl border border-white/10 bg-gradient-to-r from-[var(--cui-teal)]/10 to-[var(--cui-orange)]/10 p-4 text-white/85">
          <strong>Resultado esperado:</strong> atendimento mensal de dezenas de OSC, aumento de regularizações
          concluídas, mais projetos prontos para editais e prestação de contas padronizada — tudo monitorado em
          dashboard.
        </div>
      </div>
    </section>
  );
}

/** NOVA SEÇÃO — TOTAIS DO PROJETO (comparativo A vs B) */
function TotaisProjeto({
  pdfUrl,
  whatsNumber,
  preMsgTotals,
}: {
  pdfUrl: string;
  whatsNumber: string;
  preMsgTotals: string;
}) {
  return (
    <section id="totais" className="py-16 border-t border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-[var(--cui-teal)]/20 flex items-center justify-center">
            <Crown className="h-5 w-5 text-[var(--cui-teal)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Totais do Projeto</h2>
        </div>

        <p className="text-white/80 max-w-3xl">
          Apresentamos duas opções de alocação. Ambas entregam o ciclo completo de aceleração das OSC. A opção com HUB
          adiciona infraestrutura permanente de atendimento e acelera resultados no território.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Cenário A */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Cenário A — Metas 1–7</h3>
              </div>
              <p className="mt-2 text-white/80">
                Execução integral do método (diagnóstico → certificação) com operação e espaço locado.
              </p>
              <ul className="mt-4 space-y-2 text-white/85 text-sm">
                <li>• 100 OSC diagnosticadas e capacitadas</li>
                <li>• Regularização, projetos para editais e prestação de contas</li>
                <li>• Evento de certificação e relatórios consolidados</li>
              </ul>
              <div className="mt-6 text-3xl font-black text-[var(--cui-teal)]">
                R$ 344.400,00
              </div>
              <div className="mt-4 flex gap-3">
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <a href={pdfUrl} download>
                    Baixar PDF
                  </a>
                </Button>
                <Button asChild className="bg-[var(--cui-teal)] hover:bg-[#27a196]">
                  <a
                    href={`https://wa.me/${whatsNumber}?text=${encodeURIComponent(
                      "Olá! Quero entender melhor o Cenário A (Metas 1–7)."
                    )}`}
                    target="_blank"
                  >
                    Falar sobre A
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cenário B */}
          <Card className="relative bg-white/5 border-white/10">
            <span className="absolute -top-3 left-5 rounded-full px-3 py-1 text-xs font-bold bg-gradient-to-r from-[var(--cui-gold)] to-[var(--cui-orange)] text-[var(--cui-ink)] shadow">
              Recomendado
            </span>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Cenário B — Metas 1–8 (com HUB)</h3>
              </div>
              <p className="mt-2 text-white/80">
                Tudo do Cenário A <strong>+ Equipamentos & Adequações do HUB</strong> para criar o
                “Poupa Tempo do 3º Setor”.
              </p>
              <ul className="mt-4 space-y-2 text-white/85 text-sm">
                <li>• Infraestrutura de acolhimento, capacitações e plantões</li>
                <li>• Notebook(s), mobiliário, acessibilidade e audiovisual</li>
                <li>• Atendimento contínuo e ganhos permanentes de capacidade</li>
              </ul>
              <div className="mt-5 text-sm text-white/70">
                R$ 344.400,00 + R$ 71.000,00
              </div>
              <div className="text-3xl font-black text-[var(--cui-orange)]">
                R$ 415.400,00
              </div>
              <div className="mt-4 flex gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[var(--cui-gold)] to-[var(--cui-orange)] text-[var(--cui-ink)] hover:opacity-90"
                >
                  <a href={pdfUrl} download>
                    Baixar PDF
                  </a>
                </Button>
                <Button asChild className="bg-[var(--cui-teal)] hover:bg-[#27a196]">
                  <a href={`https://wa.me/${whatsNumber}?text=${preMsgTotals}`} target="_blank">
                    Apoiar Cenário B
                  </a>
                </Button>
              </div>

              {/* Nota persuasiva curta */}
              <div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-3 text-white/80 text-sm">
                <strong>Por que vale a pena?</strong> O HUB cria capacidade instalada no território,
                reduz assimetria de informação e acelera regularização e submissões a editais. É um
                legado que permanece além do ciclo do projeto.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    {
      title: "Diagnóstico DIALOGICS",
      icon: FileText,
      desc:
        "Avaliação de maturidade em &lt; 1 minuto com relatório que prioriza fragilidades e aponta pontos fortes. Direcionamento para soluções e início do dossiê da OSC.",
    },
    {
      title: "Regularização da OSC",
      icon: Building2,
      desc:
        "Estatuto, atas, CNPJ, cadastros e conformidades jurídico-contábeis. Tudo organizado para operar e captar com segurança.",
    },
    {
      title: "Portfólio & Lideranças",
      icon: Users2,
      desc:
        "Capacitação em gestão, organização e comunicação. Construção de portfólio, apresentações e evidências de impacto.",
    },
    {
      title: "Projetos & Editais",
      icon: Target,
      desc:
        "Mentorias com 4 profissionais + Edital Certo: análise de exigências, aderência projeto–edital e criação do zero quando necessário.",
    },
    {
      title: "Prestação de Contas",
      icon: ClipboardCheck,
      desc:
        "Treinamento prático com modelos, fluxos e boas práticas para executar e comprovar resultados sem dor de cabeça.",
    },
    {
      title: "Certificação & Conexão",
      icon: Award,
      desc:
        "Evento de celebração com entrega de certificações e apresentação dos relatórios do programa, conectando OSCs e empresas.",
    },
  ] as const;

  return (
    <section
      id="etapas"
      className="relative py-16 bg-white/5 border-y border-white/10 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 20% -10%, rgba(47,183,173,0.20) 0%, rgba(47,183,173,0.00) 60%), radial-gradient(900px 500px at 110% 20%, rgba(244,165,32,0.18) 0%, rgba(244,165,32,0.00) 60%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-10">As 6 Etapas</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group"
              >
                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[var(--cui-teal)]/50 via-white/10 to-[var(--cui-orange)]/40 transition duration-300 group-hover:from-[var(--cui-teal)] group-hover:to-[var(--cui-orange)]">
                  <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(120px_120px_at_30%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute -inset-1 rounded-2xl bg-[var(--cui-teal)]/25 blur-md group-hover:bg-[var(--cui-teal)]/35 transition" />
                          <div className="relative h-11 w-11 rounded-2xl bg-[var(--cui-teal)]/25 border border-[var(--cui-teal)]/30 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-[var(--cui-teal)]" />
                          </div>
                          <span className="absolute inset-0 rounded-2xl animate-ping opacity-10 bg-[var(--cui-teal)]" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--cui-teal)]/15 border border-[var(--cui-teal)]/30 text-[var(--cui-teal)]">
                          {i + 1}ª etapa
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
                      <p
                        className="mt-3 text-white/85 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: s.desc }}
                      />
                    </div>
                    <div className="h-[3px] rounded-b-2xl bg-gradient-to-r from-transparent via-[var(--cui-teal)]/60 to-[var(--cui-orange)]/60 opacity-60 group-hover:opacity-100 transition" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-sm text-white/60">
          * Haverá bancada avaliadora com empresas convidadas no Hackathon Social.
        </div>
      </div>
    </section>
  );
}

function SponsorsCTA() {
  return (
    <section className="py-16" id="inscricao">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-black">
            Empresas & Emendas: patrocine impacto com <span className="text-[var(--cui-gold)]">evidências</span>.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl">
            O ONG do Futuro oferece governança, mensuração e transparência ponta a ponta. Ideal para indicações por
            emendas, leis de incentivo e políticas ESG.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Button asChild className="bg-[var(--cui-orange)] hover:bg-[#d89217]">
              <a href="#contato" className="flex items-center gap-2">
                <Handshake className="h-5 w-5" /> Quero patrocinar
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-[var(--cui-gold)] to-[var(--cui-orange)] text-[var(--cui-ink)] hover:opacity-90"
            >
              <a href="#etapas" className="flex items-center gap-2">
                Ver metodologia <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--cui-teal)]/10 to-[var(--cui-orange)]/10 p-6">
            <ul className="space-y-3 text-white/85">
              {[
                "Relatórios consolidados por OSC e por etapa",
                "Métricas de maturidade e checklist de conformidades",
                "Evidências de execução e prestação de contas",
                "Canal direto para match OSC–empresa",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--cui-teal)]" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const people = [
    { name: "Aline Pascale", role: "Fundadora e CEO", img: "/team/aline.png", focus: "50% 25%" },
    { name: "Anderson Ferreira", role: "Diretor de Dados e Relatórios", img: "/team/anderson.png", focus: "50% 35%" },
    { name: "Alessandra Vecchi", role: "Diretora de Desenvolvimento e Soluções", img: "/team/alessandra.png", focus: "50% 25%" },
    { name: "Rafael Cesár", role: "Agente de Inteligência Social", img: "/team/rafael.jpeg", focus: "50% 30%" },
    { name: "Neusa Coelho", role: "CSO de Estratégia", img: "/team/neusa.png", focus: "50% 30%" },
    { name: "Bruna Kadletz", role: "Presidente da Instituição Proponente", img: "/team/bruna.png", focus: "50% 30%" },
  ] as const;

  return (
    <section className="py-16 border-t border-white/10" id="equipe">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Equipe</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <Card key={i} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="relative w-full h-64">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={i === 0}
                      className="object-cover"
                      style={{ objectPosition: p.focus }}
                    />
                  </div>
                </div>
                <div className="mt-4 font-semibold text-lg">{p.name}</div>
                <div className="text-white/70">{p.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/** NOVA SEÇÃO — OSC PROPONENTE (final, antes do rodapé) */
function Proponente() {
  return (
    <section id="proponente" className="py-16 border-t border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4">
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[var(--cui-teal)]/50 via-white/10 to-[var(--cui-orange)]/40">
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3]">
              <Image
                src="/images/circulos-logo.png" // coloque o logo em /public/images/
                alt="Círculos de Hospitalidade — Logo"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2">
            OSC Proponente — <span className="text-[var(--cui-teal)]">Círculos de Hospitalidade</span>
          </h2>

          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-white/85">
            <div className="rounded-xl bg-black/30 border border-white/10 p-4">
              <div className="text-sm text-white/60">CNPJ</div>
              <div className="font-semibold">29.309.202/0001-00</div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-4">
              <div className="text-sm text-white/60">Data de Abertura</div>
              <div className="font-semibold">13/11/2017</div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-4 sm:col-span-2">
              <div className="text-sm text-white/60">Endereço</div>
              <div className="font-semibold">R. Fernando Machado, 140 — Centro, Florianópolis/SC — 88020-130</div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--cui-teal)]" />
              <span className="font-semibold">financeiro@circulosdehospitalidade.org</span>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-4 flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--cui-teal)]" />
              <span className="font-semibold">(48) 3225-7054</span>
            </div>
          </div>

          <p className="mt-6 text-white/80">
            A OSC proponente responde pela execução, governança e prestação de contas do projeto, assegurando
            conformidade com a legislação e transparência das etapas e resultados.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 mt-0 bg-black/40 border-t border-white/10" id="contato">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-[var(--cui-teal)]/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-[var(--cui-teal)]" />
            </div>
            <span className="text-xl font-semibold">Cuidatoria — ONG do Futuro</span>
          </div>
          <p className="text-white/70 max-w-xl">
            Junte-se a nós para fortalecer 100 OSC com tecnologia, metodologia e conexão real com patrocinadores.
          </p>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <div className="text-sm text-white/70">Contato</div>
          <div className="text-lg font-semibold">contato@cuidatoria.org</div>
          <div className="text-white/60">Florianópolis • Santa Catarina</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-xs text-white/50">
        © {new Date().getFullYear()} Cuidatoria. Todos os direitos reservados.
      </div>
    </footer>
  );
}





