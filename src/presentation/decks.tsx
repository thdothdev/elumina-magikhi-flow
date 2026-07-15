import {
  SlideFrame,
  Kicker,
  MagikhiMark,
  EluminaMark,
  Card,
} from "./primitives";

/* ================================================================
 * Slide 1 — Capa
 * ================================================================ */
export function Cover() {
  return (
    <SlideFrame variant="dark" showFooter={false}>
      <div className="absolute inset-0 flex flex-col justify-between px-24 py-20">
        <div className="flex items-start justify-between">
          <MagikhiMark variant="dark" />
          <div className="flex items-center gap-6">
            <span className="slide-chrome" style={{ color: "oklch(0.75 0.02 250)" }}>
              Apresentado por
            </span>
            <EluminaMark variant="dark" />
          </div>
        </div>

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
            style={{ color: "oklch(0.82 0.02 250)", maxWidth: 1500 }}
          >
            Centralização de dados, triagem de sinistros por IA e controle de fluxo
            de caixa para a Mágikhi Corretora.
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6">
            <div
              className="rounded-full px-6 py-3 slide-badge"
              style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
            >
              Case de Sucesso · Nº 1
            </div>
            <div className="slide-chrome" style={{ color: "oklch(0.75 0.02 250)" }}>
              8 slides
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
 * Slide 2 — O Cenário Operacional
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
        <Kicker>01 · Cenário Operacional</Kicker>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          O desafio de operar <br />
          <span style={{ color: "var(--navy-soft)" }}>sem uma base centralizada</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-6 flex flex-col justify-start">
            <p className="slide-body-lg" style={{ color: "var(--navy)", maxWidth: 780 }}>
              Gerenciar clientes acessando manualmente{" "}
              <b style={{ color: "var(--navy-deep)" }}>9 portais de seguradoras</b>{" "}
              (Porto Seguro, Azul, HDI, Bradesco, etc.) gera descentralização e
              retrabalho.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "var(--navy-soft)", maxWidth: 780 }}
            >
              A Mágikhi precisa de uma{" "}
              <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
                Fonte Única da Verdade
              </span>{" "}
              para organizar seus dados e operações em uma única tela.
            </p>
          </div>

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
        <Kicker>02 · Pós-Venda</Kicker>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          O impacto do{" "}
          <span style={{ color: "var(--emerald)" }}>atendimento manual</span>
        </h2>
        <p
          className="slide-subtitle mt-8"
          style={{ color: "var(--navy-soft)", maxWidth: 1500 }}
        >
          Sinistros e cobrança de parcelas em atraso drenam o tempo comercial da
          equipe.
        </p>

        <div className="mt-12 grid flex-1 grid-cols-2 gap-10">
          {[
            {
              t: "Sinistros",
              d: "A cada ocorrência, horas de WhatsApp com o cliente para coletar relato, documentos e fotos — antes mesmo de abrir o caso no portal da seguradora.",
            },
            {
              t: "Cobranças em atraso",
              d: "Conferência manual de relatórios de pendências e contato individual com cada segurado inadimplente antes que a apólice caia.",
            },
          ].map((b) => (
            <Card key={b.t} className="p-10">
              <div className="slide-chrome" style={{ color: "var(--emerald)" }}>
                {b.t}
              </div>
              <div
                className="slide-body-lg mt-4"
                style={{ color: "var(--navy-deep)" }}
              >
                {b.d}
              </div>
            </Card>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-8"
          style={{ background: "var(--navy-deep)", color: "#F5F7FA" }}
        >
          <div className="slide-body-lg" style={{ color: "#F5F7FA" }}>
            O foco do projeto é{" "}
            <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
              eliminar a digitação repetitiva
            </span>{" "}
            de dados e transformar o atendimento em algo proativo e automatizado.
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
              Sem <s style={{ color: "oklch(0.60 0.10 30)" }}>integrações instáveis via API</s>{" "}
              que quebram nos portais das seguradoras.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "oklch(0.78 0.02 250)", maxWidth: 820 }}
            >
              Sua equipe faz o download padrão do PDF/Excel do portal (o que leva
              segundos), arrasta para o painel, e a nossa IA{" "}
              <b style={{ color: "var(--emerald)" }}>extrai e processa</b> todas as
              informações de forma automática.
            </p>

            <div
              className="mt-10 rounded-2xl px-8 py-6"
              style={{
                background: "oklch(1 0 0 / 0.06)",
                border: "1px solid var(--emerald)",
              }}
            >
              <div
                className="slide-chrome"
                style={{ color: "var(--emerald-soft)" }}
              >
                Próximo bloco
              </div>
              <div
                className="slide-body-lg mt-2"
                style={{ color: "#F5F7FA" }}
              >
                → Transição para a Demonstração Prática do Sistema Mágikhi
              </div>
            </div>
          </div>

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
 * Slide 5 — Funcionário Digital (WhatsApp)
 * ================================================================ */
export function DigitalEmployee() {
  return (
    <SlideFrame variant="light" pageNumber={5}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <div className="flex items-center gap-6">
          <Kicker>04 · Funcionário Digital</Kicker>
          <div
            className="rounded-full px-5 py-2 slide-badge"
            style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
          >
            WhatsApp 24h
          </div>
        </div>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          Triagem inteligente de{" "}
          <span style={{ color: "var(--emerald)" }}>sinistros</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-6">
            <p className="slide-body-lg" style={{ color: "var(--navy)", maxWidth: 820 }}>
              A IA atende o cliente acidentado com <b>empatia</b> no WhatsApp,
              cuidando de toda a triagem antes do corretor entrar em ação.
            </p>
            <ul className="mt-8 space-y-5" style={{ maxWidth: 820 }}>
              {[
                ["Transcreve relatos em áudio", "Áudios longos viram texto estruturado."],
                ["Solicita e valida documentos", "CNH e CRLV são checados quanto à nitidez."],
                ["Monta o dossiê completo", "Caso 100% mastigado, pronto para o portal."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-5">
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
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 flex items-center">
            <Card className="w-full p-8">
              <div
                className="rounded-2xl p-8"
                style={{ background: "var(--slate-light)" }}
              >
                <div className="slide-chrome mb-5" style={{ color: "var(--navy-soft)" }}>
                  Dossiê · WhatsApp → Painel do corretor
                </div>
                <div className="space-y-3">
                  {[
                    ["Cliente", "Ana Beatriz Rocha"],
                    ["Apólice", "Auto · Porto Seguro"],
                    ["Relato transcrito", "Colisão traseira em rotatória, sem vítimas."],
                    ["CNH", "Validada ✓"],
                    ["CRLV", "Validado ✓"],
                    ["Fotos", "4/4 nítidas ✓"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between rounded-lg bg-white px-5 py-3"
                    >
                      <div className="slide-caption" style={{ color: "var(--navy-soft)" }}>
                        {k}
                      </div>
                      <div className="slide-body font-medium" style={{ color: "var(--navy-deep)" }}>
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 rounded-lg px-5 py-3 slide-body font-semibold text-center"
                  style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
                >
                  Copiar e colar no portal da seguradora
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
 * Slide 6 — Customização
 * ================================================================ */
export function Customization() {
  return (
    <SlideFrame variant="light" pageNumber={6}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker>05 · Flexibilidade</Kicker>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          Um sistema{" "}
          <span style={{ color: "var(--emerald)" }}>sob medida</span> para a Mágikhi
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-6">
            <p className="slide-body-lg" style={{ color: "var(--navy)", maxWidth: 820 }}>
              Não entregamos um software de prateleira engessado. A demonstração
              apresentada é a nossa <b>ideia base</b>.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "var(--navy-soft)", maxWidth: 820 }}
            >
              Como nossa engenharia é própria, o painel, os botões e os relatórios
              financeiros podem ser <b style={{ color: "var(--emerald)" }}>adaptados</b>{" "}
              conforme a rotina real de trabalho da corretora exigir.
            </p>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-6 self-center">
            {[
              { t: "Painel", d: "Layout e blocos ajustados à sua operação." },
              { t: "Botões e fluxos", d: "Ações rápidas para o dia a dia." },
              { t: "Relatórios financeiros", d: "Visão que faz sentido para você." },
              { t: "Engenharia própria", d: "Sem depender de fornecedor externo." },
            ].map((c) => (
              <Card key={c.t} className="p-7">
                <div className="slide-chrome" style={{ color: "var(--emerald)" }}>
                  {c.t}
                </div>
                <div className="slide-body mt-3" style={{ color: "var(--navy-deep)" }}>
                  {c.d}
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
 * Slide 7 — Cronograma 30 dias
 * ================================================================ */
export function Timeline() {
  const phases = [
    {
      r: "Dias 1 – 10",
      t: "Estruturação",
      d: "Banco de dados e mapeamento dos layouts de PDFs das seguradoras.",
    },
    {
      r: "Dias 11 – 20",
      t: "Desenvolvimento",
      d: "Assistente de WhatsApp e fluxos de IA construídos no n8n.",
    },
    {
      r: "Dias 21 – 27",
      t: "Homologação",
      d: "Painel financeiro validado e testes integrados de disparo.",
    },
    {
      r: "Dias 28 – 30",
      t: "Entrega",
      d: "Treinamento da equipe, ajustes finos e entrega oficial das chaves.",
    },
  ];
  return (
    <SlideFrame variant="dark" pageNumber={7}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker variant="dark">06 · Cronograma</Kicker>
        <h2 className="slide-title mt-6" style={{ color: "#F5F7FA", maxWidth: 1500 }}>
          Do desenho à entrega em{" "}
          <span style={{ color: "var(--emerald)" }}>30 dias</span>
        </h2>

        <div className="mt-14 grid flex-1 grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <div
              key={p.r}
              className="flex flex-col rounded-2xl p-8"
              style={{
                background: "oklch(1 0 0 / 0.06)",
                border: "1px solid oklch(1 0 0 / 0.12)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 64,
                  color: "var(--emerald)",
                  lineHeight: 1,
                }}
              >
                0{i + 1}
              </div>
              <div className="slide-chrome mt-6" style={{ color: "var(--emerald-soft)" }}>
                {p.r}
              </div>
              <div
                className="slide-body-lg mt-3 font-semibold"
                style={{ color: "#F5F7FA" }}
              >
                {p.t}
              </div>
              <div
                className="slide-body mt-3"
                style={{ color: "oklch(0.80 0.02 250)" }}
              >
                {p.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

/* ================================================================
 * Slide 8 — Proposta Comercial
 * ================================================================ */
export function Proposal() {
  return (
    <SlideFrame variant="light" pageNumber={8}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker>07 · Proposta Comercial</Kicker>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          Investimento e{" "}
          <span style={{ color: "var(--emerald)" }}>parceria de sucesso</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-7 space-y-6">
            <Card className="p-10">
              <div className="flex items-baseline justify-between gap-6">
                <div>
                  <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                    Setup de Desenvolvimento
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 88,
                      lineHeight: 1,
                      color: "var(--navy-deep)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    R$ 3.000
                  </div>
                </div>
                <div
                  className="rounded-full px-5 py-2 slide-badge"
                  style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
                >
                  Case Nº 1
                </div>
              </div>
              <div className="slide-body mt-4" style={{ color: "var(--navy-soft)", maxWidth: 900 }}>
                Valor promocional de 1º Case de Sucesso, parcelado em até 3x ou 50%
                de entrada + 50% na entrega.
              </div>
            </Card>

            <Card className="p-10">
              <div className="flex items-baseline justify-between gap-6">
                <div>
                  <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                    Mensalidade
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 88,
                      lineHeight: 1,
                      color: "var(--emerald)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    R$ 500<span style={{ fontSize: 40, color: "var(--navy-soft)" }}> /mês</span>
                  </div>
                </div>
              </div>
              <div className="slide-body mt-4" style={{ color: "var(--navy-soft)", maxWidth: 900 }}>
                Garantia de funcionamento, suporte dedicado e custos de servidor e
                API de WhatsApp <b style={{ color: "var(--navy-deep)" }}>100% inclusos</b>.
              </div>
            </Card>
          </div>

          <div className="col-span-5">
            <div
              className="flex h-full flex-col rounded-2xl p-10"
              style={{
                background: "linear-gradient(160deg, var(--navy-deep), var(--navy))",
                color: "#F5F7FA",
              }}
            >
              <div className="slide-chrome" style={{ color: "var(--emerald-soft)" }}>
                Transparência total
              </div>
              <div className="slide-title mt-6" style={{ color: "#F5F7FA", fontSize: 60, lineHeight: 1.05 }}>
                Tokens de IA no cartão da corretora
              </div>
              <div
                className="slide-body-lg mt-6"
                style={{ color: "oklch(0.85 0.02 250)" }}
              >
                O consumo real de tokens (OpenAI) é debitado direto no cartão da
                Mágikhi, estimado em apenas{" "}
                <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  ~US$ 5/mês
                </span>{" "}
                conforme o uso real — sem intermediários, sem markup.
              </div>

              <div className="mt-auto pt-10">
                <div
                  className="rounded-xl px-6 py-5 slide-body font-semibold"
                  style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
                >
                  Vamos transformar a Mágikhi no Case Nº 1 da Elumina IA.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
