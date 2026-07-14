import {
  SlideFrame,
  Kicker,
  MagikhiMark,
  EluminaMark,
  Card,
  NumberedItem,
} from "./primitives";

/* ================================================================
 * Slide 1 — Capa
 * ================================================================ */
export function Cover() {
  return (
    <SlideFrame variant="dark" showFooter={false}>
      <div className="absolute inset-0 flex flex-col justify-between px-24 py-20">
        {/* Top: two logos */}
        <div className="flex items-start justify-between">
          <MagikhiMark variant="dark" />
          <div className="flex items-center gap-6">
            <span className="slide-chrome" style={{ color: "oklch(0.75 0.02 250)" }}>
              Apresentado por
            </span>
            <EluminaMark variant="dark" />
          </div>
        </div>

        {/* Center: title */}
        <div className="max-w-[1500px]">
          <Kicker variant="dark">Proposta Comercial · 2026</Kicker>
          <h1 className="slide-title-lg mt-8" style={{ color: "#F5F7FA" }}>
            Ecossistema de{" "}
            <span style={{ color: "var(--emerald)" }}>Inteligência Operacional</span>
            <br />
            e Pós-Venda
          </h1>
          <p
            className="slide-subtitle mt-10"
            style={{ color: "oklch(0.82 0.02 250)", maxWidth: 1400 }}
          >
            Centralização de dados, triagem de sinistros por IA e controle financeiro
            para a Mágikhi Corretora.
          </p>
        </div>

        {/* Bottom: meta */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6">
            <div
              className="rounded-full px-6 py-3 slide-badge"
              style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
            >
              Case de Sucesso · Nº 1
            </div>
            <div className="slide-chrome" style={{ color: "oklch(0.75 0.02 250)" }}>
              10 slides · 12 min
            </div>
          </div>
          <div
            className="slide-chrome"
            style={{ color: "oklch(0.65 0.02 250)", letterSpacing: "0.3em" }}
          >
            Confidencial
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 2 — Cenário Atual
 * ================================================================ */
const SEGURADORAS = [
  "Porto Seguro",
  "Azul Seguros",
  "HDI",
  "Bradesco",
  "SulAmérica",
  "Allianz",
  "Tokio Marine",
  "Mapfre",
  "Liberty",
];

export function Scenario() {
  return (
    <SlideFrame variant="light" pageNumber={2}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker>01 · Diagnóstico</Kicker>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          O desafio de operar <br />
          <span style={{ color: "var(--navy-soft)" }}>sem uma base centralizada</span>
        </h2>

        <div className="mt-14 grid flex-1 grid-cols-12 gap-10">
          {/* Left: text */}
          <div className="col-span-6 flex flex-col justify-start">
            <p className="slide-body-lg" style={{ color: "var(--navy)", maxWidth: 780 }}>
              Gerenciar a corretora acessando manualmente{" "}
              <b style={{ color: "var(--navy-deep)" }}>9 portais de seguradoras</b> gera
              descentralização, ruído e retrabalho.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "var(--navy-soft)", maxWidth: 780 }}
            >
              A Mágikhi precisa de uma{" "}
              <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
                Fonte Única da Verdade
              </span>{" "}
              para seus dados e operações — eliminando de vez o vaivém de planilhas.
            </p>

            <Card className="mt-12 p-8" >
              <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                Sintomas hoje
              </div>
              <ul className="mt-4 space-y-3 slide-body" style={{ color: "var(--navy)" }}>
                <li>· Dados espalhados em múltiplos logins</li>
                <li>· Planilhas manuais para consolidar comissão</li>
                <li>· Renovações e inadimplência sem alerta unificado</li>
              </ul>
            </Card>
          </div>

          {/* Right: portals grid */}
          <div className="col-span-6">
            <div className="slide-chrome mb-6" style={{ color: "var(--navy-soft)" }}>
              9 portais acessados manualmente
            </div>
            <div className="grid grid-cols-3 gap-5">
              {SEGURADORAS.map((s, i) => (
                <Card key={s} className="flex items-center justify-between p-6">
                  <div>
                    <div
                      className="slide-caption"
                      style={{ color: "var(--navy-soft)", letterSpacing: "0.12em" }}
                    >
                      Portal {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="mt-1 font-semibold"
                      style={{ fontSize: 26, color: "var(--navy-deep)", letterSpacing: "-0.01em" }}
                    >
                      {s}
                    </div>
                  </div>
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{ background: "var(--slate-light)", border: "2px solid var(--slate-mid)" }}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 3 — Gargalo do Pós-Venda
 * ================================================================ */
export function Bottleneck() {
  return (
    <SlideFrame variant="light" pageNumber={3}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker>02 · Dor Operacional</Kicker>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          O peso do <span style={{ color: "var(--emerald)" }}>atendimento manual</span>
          <br />
          de sinistros
        </h2>

        <div className="mt-14 grid flex-1 grid-cols-12 gap-12">
          <div className="col-span-7">
            <p
              className="slide-body-lg"
              style={{ color: "var(--navy)", maxWidth: 900, lineHeight: 1.35 }}
            >
              O sinistro é o momento de <b>maior tensão</b> para o cliente. A equipe hoje
              gasta horas preciosas no WhatsApp:
            </p>

            <div className="mt-10 space-y-6" style={{ maxWidth: 900 }}>
              {[
                ["Ouvindo relatos longos", "Áudios de 3 a 8 minutos com a dinâmica do acidente."],
                ["Pedindo documentos repetidamente", "CNH, CRLV, comprovantes — enviados aos poucos."],
                ["Conferindo se a foto está legível", "Checagem visual manual, uma por uma."],
                ["Acalmando o segurado", "Suporte emocional em paralelo à triagem técnica."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-5">
                  <div
                    className="mt-3 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: "var(--emerald)" }}
                  />
                  <div>
                    <div className="slide-body-lg font-semibold" style={{ color: "var(--navy-deep)" }}>
                      {t}
                    </div>
                    <div className="slide-body" style={{ color: "var(--navy-soft)" }}>
                      {d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stat */}
          <div className="col-span-5 flex items-center">
            <Card
              variant="dark"
              className="w-full p-12"
            >
              <div
                className="rounded-2xl p-10"
                style={{ background: "var(--navy-deep)", color: "#F5F7FA" }}
              >
                <div
                  className="slide-chrome"
                  style={{ color: "var(--emerald-soft)", letterSpacing: "0.28em" }}
                >
                  Custo escondido
                </div>
                <div
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 168,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "var(--emerald)",
                  }}
                >
                  42h
                </div>
                <div className="slide-body-lg mt-4" style={{ color: "#F5F7FA" }}>
                  por mês em burocracia manual de sinistros — tempo que{" "}
                  <span style={{ color: "var(--emerald-soft)" }}>não</span> gera comissão.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 4 — Engenharia Elumina IA
 * ================================================================ */
export function Engineering() {
  return (
    <SlideFrame variant="dark" pageNumber={4}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker variant="dark">03 · Arquitetura</Kicker>
        <h2 className="slide-title mt-6" style={{ color: "#F5F7FA", maxWidth: 1500 }}>
          Tecnologia robusta <br />
          <span style={{ color: "var(--emerald)" }}>baseada em arquivos</span>{" "}
          <span style={{ color: "oklch(0.75 0.02 250)", fontSize: 60 }}>· 100% segura</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-6 flex flex-col justify-start">
            <p
              className="slide-body-lg"
              style={{ color: "oklch(0.85 0.02 250)", maxWidth: 820 }}
            >
              Em vez de <s style={{ color: "oklch(0.60 0.10 30)" }}>integrações via API</s>{" "}
              que quebram toda semana nos portais das seguradoras, nossa tecnologia trabalha
              por <b style={{ color: "var(--emerald)" }}>interceptação de arquivos</b>.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "oklch(0.78 0.02 250)", maxWidth: 820 }}
            >
              Sua equipe faz o download padrão do PDF/Excel do portal, arrasta para o painel,
              e a nossa IA extrai e processa tudo de forma automática.
            </p>
          </div>

          {/* Right: flow diagram */}
          <div className="col-span-6 flex items-center">
            <div className="w-full space-y-6">
              {[
                { n: "01", t: "Download padrão", d: "PDF ou Excel do portal da seguradora." },
                { n: "02", t: "Drag & drop no painel", d: "A equipe apenas arrasta o arquivo." },
                { n: "03", t: "IA extrai + processa", d: "Estrutura os dados e atualiza a base." },
              ].map((s) => (
                <div
                  key={s.n}
                  className="flex items-center gap-8 rounded-2xl px-8 py-6"
                  style={{
                    background: "oklch(1 0 0 / 0.06)",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 56,
                      color: "var(--emerald)",
                      lineHeight: 1,
                      minWidth: 80,
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="slide-body-lg font-semibold" style={{ color: "#F5F7FA" }}>
                      {s.t}
                    </div>
                    <div className="slide-body" style={{ color: "oklch(0.78 0.02 250)" }}>
                      {s.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 5 — Entregável 1: Base Cadastral
 * ================================================================ */
export function Deliverable1() {
  return (
    <SlideFrame variant="light" pageNumber={5}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <div className="flex items-center gap-6">
          <Kicker>Entregável 01</Kicker>
          <div
            className="rounded-full px-5 py-2 slide-badge"
            style={{ background: "var(--navy-deep)", color: "#F5F7FA" }}
          >
            Base Cadastral
          </div>
        </div>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          Sua <span style={{ color: "var(--emerald)" }}>Fonte Única da Verdade</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-8">
          {/* Left copy */}
          <div className="col-span-5">
            <p className="slide-body" style={{ color: "var(--navy-soft)", maxWidth: 700 }}>
              Um painel centralizado para controle de <b>Clientes Cadastrados</b>,{" "}
              <b>Apólices Ativas</b> e contratos <b>Em Renovação</b>.
            </p>
            <div
              className="mt-8 rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, var(--navy-deep), var(--navy))",
                color: "#F5F7FA",
              }}
            >
              <div className="slide-chrome" style={{ color: "var(--emerald-soft)" }}>
                Mecanismo de Checagem por IA
              </div>
              <div className="slide-body-lg mt-4" style={{ color: "#F5F7FA" }}>
                Arraste o relatório de pendências da seguradora e a IA altera o status
                dos clientes para{" "}
                <span
                  className="rounded-md px-3 py-1"
                  style={{ background: "oklch(0.60 0.20 25)", color: "#fff", fontSize: 30 }}
                >
                  Inadimplente
                </span>{" "}
                na hora.
              </div>
            </div>
          </div>

          {/* Right: mocked dashboard */}
          <div className="col-span-7">
            <Card className="p-8">
              <div className="flex items-center gap-3 border-b pb-5" style={{ borderColor: "var(--slate-mid)" }}>
                <div className="h-3 w-3 rounded-full" style={{ background: "var(--emerald)" }} />
                <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                  Painel · Base Cadastral
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { k: "Cadastrados", v: "1.842", c: "var(--navy)" },
                  { k: "Apólices Ativas", v: "1.607", c: "var(--emerald)" },
                  { k: "Em Renovação", v: "97", c: "var(--navy-soft)" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl p-5"
                    style={{ background: "var(--slate-light)" }}
                  >
                    <div className="slide-caption" style={{ color: "var(--navy-soft)" }}>
                      {s.k}
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 56,
                        color: s.c,
                        lineHeight: 1,
                      }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>

              {/* Drop zone */}
              <div
                className="mt-6 rounded-xl border-2 border-dashed px-6 py-6 text-center"
                style={{
                  borderColor: "var(--emerald)",
                  background: "oklch(0.62 0.14 165 / 0.06)",
                }}
              >
                <div className="slide-body font-semibold" style={{ color: "var(--navy-deep)" }}>
                  ↓ Arraste aqui o relatório de pendências (PDF/Excel)
                </div>
                <div className="slide-caption mt-1" style={{ color: "var(--navy-soft)" }}>
                  IA cruza CPFs e atualiza status automaticamente
                </div>
              </div>

              {/* Rows */}
              <div className="mt-6 space-y-2">
                {[
                  ["Ana Beatriz Rocha", "Auto · Porto", "Ativa", "var(--emerald)"],
                  ["Carlos Menezes", "Vida · Bradesco", "Renovar", "var(--navy-soft)"],
                  ["Márcia Lopes", "Auto · HDI", "Inadimplente", "oklch(0.60 0.20 25)"],
                ].map(([n, p, s, c]) => (
                  <div
                    key={n}
                    className="flex items-center justify-between rounded-lg px-4 py-3"
                    style={{ background: "var(--slate-light)" }}
                  >
                    <div className="slide-body font-medium" style={{ color: "var(--navy-deep)" }}>
                      {n}
                    </div>
                    <div className="slide-caption" style={{ color: "var(--navy-soft)" }}>
                      {p}
                    </div>
                    <div
                      className="rounded-full px-3 py-1 slide-caption font-semibold"
                      style={{ background: c, color: "#fff" }}
                    >
                      {s}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 6 — Entregável 2: Assistente WhatsApp
 * ================================================================ */
export function Deliverable2() {
  return (
    <SlideFrame variant="light" pageNumber={6}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <div className="flex items-center gap-6">
          <Kicker>Entregável 02</Kicker>
          <div
            className="rounded-full px-5 py-2 slide-badge"
            style={{ background: "#25D366", color: "#0a3a1e" }}
          >
            WhatsApp · 24h
          </div>
        </div>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1600 }}>
          Triagem, acolhimento <br />
          e <span style={{ color: "var(--emerald)" }}>visão computacional</span> 24h
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          {/* Left: WhatsApp mock */}
          <div className="col-span-5 flex items-center justify-center">
            <div
              className="w-full max-w-[440px] rounded-3xl p-6"
              style={{
                background: "#075E54",
                boxShadow: "0 30px 60px -30px oklch(0.20 0.055 258 / 0.35)",
              }}
            >
              <div className="flex items-center gap-3 pb-4" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.15)" }}>
                <div className="h-10 w-10 rounded-full" style={{ background: "var(--emerald)" }} />
                <div className="text-white">
                  <div style={{ fontSize: 20, fontWeight: 600 }}>Mágikhi · Assistente</div>
                  <div style={{ fontSize: 14, opacity: 0.7 }}>online agora</div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div
                  className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ background: "#fff", fontSize: 18, color: "#111" }}
                >
                  Oi, Lucas. Que susto! Estou aqui para te ajudar. Respire — vamos resolver
                  juntos. 💚
                </div>
                <div
                  className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm px-4 py-3"
                  style={{ background: "#DCF8C6", fontSize: 18, color: "#111" }}
                >
                  🎙️ áudio · 2:47
                </div>
                <div
                  className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ background: "#fff", fontSize: 18, color: "#111" }}
                >
                  Transcrevi seu relato. Agora preciso da foto da CNH e 3 fotos do carro
                  (frente, lateral e o dano).
                </div>
                <div
                  className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm px-3 py-3"
                  style={{ background: "#DCF8C6" }}
                >
                  <div
                    className="h-24 w-full rounded-lg"
                    style={{ background: "linear-gradient(135deg,#888,#444)" }}
                  />
                </div>
                <div
                  className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ background: "#fff", fontSize: 18, color: "#111" }}
                >
                  ✅ Foto legível · Dano estimado:{" "}
                  <b style={{ color: "var(--emerald)" }}>perda média</b>.
                </div>
              </div>
            </div>
          </div>

          {/* Right: capabilities */}
          <div className="col-span-7 flex flex-col justify-center gap-5">
            {[
              ["Acolhimento com empatia", "Recebe o cliente acidentado com tom humano e calmo."],
              ["Transcrição de áudios", "Extrai a dinâmica do acidente automaticamente."],
              ["Solicitação inteligente", "Pede os documentos certos, na ordem certa."],
              ["Visão computacional", "Avalia fotos do dano: leve · média · total."],
              ["Validação de legibilidade", "Detecta CNH borrada e pede reenvio educadamente."],
            ].map(([t, d]) => (
              <Card key={t} className="flex items-center gap-6 px-8 py-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--emerald)", color: "var(--navy-deep)", fontSize: 28 }}
                >
                  ✓
                </div>
                <div>
                  <div className="slide-body-lg font-semibold" style={{ color: "var(--navy-deep)" }}>
                    {t}
                  </div>
                  <div className="slide-body" style={{ color: "var(--navy-soft)" }}>
                    {d}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 7 — Entregável 3: Dossiê do Sinistro
 * ================================================================ */
export function Deliverable3() {
  return (
    <SlideFrame variant="dark" pageNumber={7}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <div className="flex items-center gap-6">
          <Kicker variant="dark">Entregável 03</Kicker>
          <div
            className="rounded-full px-5 py-2 slide-badge"
            style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
          >
            Ctrl+C · Ctrl+V
          </div>
        </div>
        <h2 className="slide-title mt-6" style={{ color: "#F5F7FA", maxWidth: 1600 }}>
          O <span style={{ color: "var(--emerald)" }}>Dossiê do Sinistro</span> pronto
          <br />
          para o corretor no painel
        </h2>

        <div className="mt-10 grid flex-1 grid-cols-12 gap-10">
          {/* Left: dossier mock */}
          <div className="col-span-7">
            <div
              className="h-full rounded-2xl p-8"
              style={{
                background: "#F5F7FA",
                color: "var(--navy-deep)",
                boxShadow: "0 30px 60px -30px oklch(0 0 0 / 0.5)",
              }}
            >
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--slate-mid)" }}>
                <div>
                  <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                    Dossiê #SN-2411
                  </div>
                  <div className="slide-body-lg mt-1 font-semibold">Lucas Andrade · Auto · Porto Seguro</div>
                </div>
                <div
                  className="rounded-full px-4 py-2 slide-badge"
                  style={{ background: "var(--emerald)", color: "#fff" }}
                >
                  Pronto para portal
                </div>
              </div>

              <div className="mt-6">
                <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                  Resumo executivo
                </div>
                <div className="slide-body mt-2" style={{ maxWidth: 900 }}>
                  Colisão traseira em baixa velocidade na Av. Faria Lima às 18h20. Dano
                  concentrado no para-choque e lanterna direita. Sem vítimas.
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["cnh.jpg", "crlv.pdf", "dano-1.jpg", "dano-2.jpg", "dano-3.jpg", "audio.mp3"].map((f) => (
                  <div
                    key={f}
                    className="rounded-lg px-3 py-2 slide-caption"
                    style={{ background: "var(--slate-light)", color: "var(--navy)" }}
                  >
                    📎 {f}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                    Texto técnico (para colar no portal)
                  </div>
                  <div
                    className="rounded-md px-3 py-1 slide-caption font-semibold"
                    style={{ background: "var(--navy-deep)", color: "#fff" }}
                  >
                    Copiar
                  </div>
                </div>
                <div
                  className="mt-3 rounded-lg p-4 slide-caption"
                  style={{
                    background: "var(--slate-light)",
                    color: "var(--navy)",
                    fontFamily: "ui-monospace, monospace",
                    lineHeight: 1.5,
                  }}
                >
                  Em 12/11/2026, o segurado conduzia o veículo VW Polo, placa XXX-0000,
                  quando foi atingido na traseira por terceiro na Av. Faria Lima…
                </div>
              </div>
            </div>
          </div>

          {/* Right: extras */}
          <div className="col-span-5 flex flex-col justify-center gap-6">
            {[
              ["📋", "Resumo executivo da batida", "A IA sintetiza a dinâmica em 3 linhas."],
              ["📁", "Arquivos organizados", "Documentos e fotos nomeados e categorizados."],
              ["✍️", "Texto técnico redigido", "Descrição pronta no padrão da seguradora."],
              ["🧭", "Roteiro do B.O. online", "Mastigado, campo a campo, para o cliente."],
            ].map(([e, t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-6"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                }}
              >
                <div className="flex items-start gap-5">
                  <div style={{ fontSize: 40 }}>{e}</div>
                  <div>
                    <div className="slide-body-lg font-semibold" style={{ color: "#F5F7FA" }}>
                      {t}
                    </div>
                    <div className="slide-body" style={{ color: "oklch(0.78 0.02 250)" }}>
                      {d}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 8 — Entregável 4: Financeiro
 * ================================================================ */
export function Deliverable4() {
  return (
    <SlideFrame variant="light" pageNumber={8}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <div className="flex items-center gap-6">
          <Kicker>Entregável 04</Kicker>
          <div
            className="rounded-full px-5 py-2 slide-badge"
            style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
          >
            Fluxo de Caixa
          </div>
        </div>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1600 }}>
          Gestão de entradas e saídas
          <br />
          <span style={{ color: "var(--navy-soft)" }}>em tempo real</span>
        </h2>

        <div className="mt-10 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-5">
            <p className="slide-body" style={{ color: "var(--navy-soft)", maxWidth: 700 }}>
              Substituição de planilhas complexas por controle de <b>saldo líquido real</b>{" "}
              do mês.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["Importação por IA", "Extratos de comissão das 9 seguradoras — entradas automáticas."],
                ["Ação rápida: Entrada", "Registre entradas diretas em 1 clique."],
                ["Ação rápida: Saída", "Custos operacionais e retiradas manuais."],
              ].map(([t, d]) => (
                <Card key={t} className="p-6">
                  <div className="slide-body-lg font-semibold" style={{ color: "var(--navy-deep)" }}>
                    {t}
                  </div>
                  <div className="slide-body mt-1" style={{ color: "var(--navy-soft)" }}>
                    {d}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: financial dashboard */}
          <div className="col-span-7">
            <Card className="p-8">
              <div className="flex items-center justify-between border-b pb-5" style={{ borderColor: "var(--slate-mid)" }}>
                <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                  Portal Financeiro · Novembro / 2026
                </div>
                <div className="flex gap-2">
                  <div
                    className="rounded-md px-3 py-1 slide-caption font-semibold"
                    style={{ background: "var(--emerald)", color: "#fff" }}
                  >
                    + Entrada
                  </div>
                  <div
                    className="rounded-md px-3 py-1 slide-caption font-semibold"
                    style={{ background: "var(--navy-deep)", color: "#fff" }}
                  >
                    − Saída
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { k: "Entradas", v: "R$ 84.720", c: "var(--emerald)" },
                  { k: "Saídas", v: "R$ 22.410", c: "oklch(0.55 0.15 25)" },
                  { k: "Saldo líquido", v: "R$ 62.310", c: "var(--navy-deep)" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl p-5"
                    style={{ background: "var(--slate-light)" }}
                  >
                    <div className="slide-caption" style={{ color: "var(--navy-soft)" }}>
                      {s.k}
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 42,
                        color: s.c,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="mt-8">
                <div className="slide-chrome mb-3" style={{ color: "var(--navy-soft)" }}>
                  Entradas por seguradora
                </div>
                <div className="flex items-end gap-3" style={{ height: 180 }}>
                  {[
                    ["Porto", 90],
                    ["Azul", 62],
                    ["HDI", 78],
                    ["Bradesco", 55],
                    ["SulAm.", 70],
                    ["Allianz", 40],
                    ["Tokio", 48],
                    ["Mapfre", 30],
                    ["Liberty", 22],
                  ].map(([n, h]) => (
                    <div key={n as string} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-md"
                        style={{
                          height: `${h}%`,
                          background: "linear-gradient(180deg, var(--emerald), oklch(0.45 0.14 165))",
                        }}
                      />
                      <div className="slide-caption" style={{ color: "var(--navy-soft)" }}>
                        {n}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 9 — Cronograma
 * ================================================================ */
export function Timeline() {
  const phases = [
    {
      d: "Dias 1 – 5",
      t: "Mapeamento & Base",
      body: "Mapeamento de PDFs das 9 seguradoras e estruturação do Banco de Dados.",
    },
    {
      d: "Dias 6 – 15",
      t: "Assistente WhatsApp",
      body: "Desenvolvimento do assistente (transcrição e visão computacional) e fluxos no n8n.",
    },
    {
      d: "Dias 16 – 20",
      t: "Integração & Testes",
      body: "Integração das telas do painel, testes de disparos e homologação financeira.",
    },
    {
      d: "Dia 21",
      t: "Treinamento & Go-Live",
      body: "Treinamento prático da equipe e entrega oficial do sistema rodando.",
    },
  ];
  return (
    <SlideFrame variant="light" pageNumber={9}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker>04 · Execução</Kicker>
        <div className="mt-6 flex items-baseline gap-10">
          <h2 className="slide-title" style={{ maxWidth: 1200 }}>
            Do desenho à entrega em
          </h2>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 180,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              color: "var(--emerald)",
            }}
          >
            21
          </div>
          <div className="slide-subtitle" style={{ color: "var(--navy-soft)" }}>
            dias
          </div>
        </div>

        <div className="mt-16 relative">
          {/* Track */}
          <div
            className="absolute left-0 right-0"
            style={{ top: 44, height: 4, background: "var(--slate-mid)", borderRadius: 4 }}
          />
          <div
            className="absolute left-0"
            style={{
              top: 44,
              height: 4,
              width: "100%",
              background: "linear-gradient(90deg, var(--navy) 0%, var(--emerald) 100%)",
              borderRadius: 4,
            }}
          />

          <div className="grid grid-cols-4 gap-10">
            {phases.map((p, i) => (
              <div key={p.d} className="flex flex-col items-start">
                <div
                  className="flex h-[88px] w-[88px] items-center justify-center rounded-full"
                  style={{
                    background: i === phases.length - 1 ? "var(--emerald)" : "var(--navy-deep)",
                    color: i === phases.length - 1 ? "var(--navy-deep)" : "#F5F7FA",
                    fontFamily: "var(--font-display)",
                    fontSize: 36,
                    boxShadow: "0 12px 30px -14px oklch(0.20 0.055 258 / 0.45)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="slide-chrome mt-6" style={{ color: "var(--emerald)" }}>
                  {p.d}
                </div>
                <div className="slide-body-lg mt-2 font-semibold" style={{ color: "var(--navy-deep)" }}>
                  {p.t}
                </div>
                <div className="slide-body mt-3" style={{ color: "var(--navy-soft)", maxWidth: 380 }}>
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 10 — Proposta Comercial
 * ================================================================ */
export function Proposal() {
  return (
    <SlideFrame variant="dark" pageNumber={10}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker variant="dark">05 · Proposta Comercial</Kicker>
        <h2 className="slide-title mt-6" style={{ color: "#F5F7FA", maxWidth: 1600 }}>
          Investimento e{" "}
          <span style={{ color: "var(--emerald)" }}>parceria de sucesso</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-8">
          {/* Setup card */}
          <div className="col-span-4">
            <div
              className="h-full rounded-2xl p-8"
              style={{
                background: "oklch(1 0 0 / 0.05)",
                border: "1px solid oklch(1 0 0 / 0.12)",
              }}
            >
              <div className="slide-chrome" style={{ color: "oklch(0.75 0.02 250)" }}>
                Setup de desenvolvimento
              </div>
              <div
                className="mt-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 92,
                  color: "#F5F7FA",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                R$ 3.000
              </div>
              <div className="slide-caption mt-2" style={{ color: "oklch(0.70 0.02 250)" }}>
                Valor promocional · 1º Case de Sucesso
              </div>

              <div
                className="mt-8 rounded-xl p-4"
                style={{ background: "oklch(1 0 0 / 0.06)" }}
              >
                <div className="slide-body" style={{ color: "#F5F7FA" }}>
                  Parcelado em até <b>3x</b>
                </div>
                <div className="slide-caption mt-2" style={{ color: "oklch(0.75 0.02 250)" }}>
                  ou 50% de entrada + 50% na entrega.
                </div>
              </div>
            </div>
          </div>

          {/* Monthly */}
          <div className="col-span-4">
            <div
              className="h-full rounded-2xl p-8"
              style={{
                background: "linear-gradient(160deg, var(--emerald) 0%, oklch(0.45 0.14 165) 100%)",
                color: "var(--navy-deep)",
              }}
            >
              <div className="slide-chrome" style={{ color: "var(--navy-deep)", opacity: 0.8 }}>
                Mensalidade · Tudo Incluso
              </div>
              <div className="flex items-baseline gap-3">
                <div
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 92,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  R$ 500
                </div>
                <div className="slide-body-lg" style={{ opacity: 0.75 }}>
                  / mês
                </div>
              </div>
              <div className="slide-caption mt-2" style={{ opacity: 0.85 }}>
                ≈ R$ 16,60 por dia
              </div>

              <div className="mt-8 space-y-2">
                {[
                  "Suporte dedicado",
                  "VPS + infraestrutura",
                  "Tokens de IA inclusos",
                  "API estável do WhatsApp",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3 slide-body">
                    <span style={{ fontSize: 20 }}>✓</span> {f}
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-lg px-4 py-3 slide-badge"
                style={{ background: "var(--navy-deep)", color: "#F5F7FA" }}
              >
                Custo extra para a Mágikhi: R$ 0,00
              </div>
            </div>
          </div>

          {/* ROI */}
          <div className="col-span-4">
            <div
              className="h-full rounded-2xl p-8"
              style={{
                background: "#F5F7FA",
                color: "var(--navy-deep)",
              }}
            >
              <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                ROI Esperado
              </div>
              <div
                className="mt-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 92,
                  color: "var(--emerald)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                +42h
              </div>
              <div className="slide-caption mt-2" style={{ color: "var(--navy-soft)" }}>
                mensais liberadas de burocracia
              </div>

              <div className="mt-8 slide-body" style={{ color: "var(--navy)" }}>
                O fechamento de apenas{" "}
                <b style={{ color: "var(--emerald)" }}>2 novas apólices</b> adicionais no
                mês já paga o investimento e gera{" "}
                <b>lucro recorrente</b> para a corretora.
              </div>

              <div
                className="mt-6 rounded-lg px-4 py-3 slide-badge"
                style={{ background: "var(--navy-deep)", color: "#F5F7FA" }}
              >
                Próximo passo: assinatura em 48h
              </div>
            </div>
          </div>
        </div>

        {/* Signature strip */}
        <div className="mt-10 flex items-center justify-between rounded-2xl px-8 py-5"
          style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.10)" }}
        >
          <div className="flex items-center gap-6">
            <EluminaMark variant="dark" small />
            <div className="slide-body" style={{ color: "#F5F7FA" }}>
              Elumina IA · Consultoria de Tecnologia
            </div>
          </div>
          <div className="slide-chrome" style={{ color: "oklch(0.75 0.02 250)" }}>
            proposta válida por 15 dias
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
