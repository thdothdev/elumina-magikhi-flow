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
            Centralização de dados, acompanhamento proativo de sinistros e visão
            de entradas e saídas para a Mágikhi Corretora.
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6">
            <div
              className="rounded-full px-6 py-3 slide-badge"
              style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
            >
              Condição Especial · Projeto-Piloto
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
  "HDI",
  "Bradesco",
  "Porto Seguro",
  "Yelum",
  "Zurich",
  "Tokio Marine",
  "Allianz",
  "Mapfre",
  "Suhai",
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
              Para consultar parcelas, apólices e informações dos clientes, a
              Mágikhi ainda precisa acessar manualmente os portais das
              seguradoras. O SeguroLink auxilia principalmente nos cálculos,
              mas nem sempre reúne 100% das informações necessárias.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "var(--navy-soft)", maxWidth: 780 }}
            >
              A proposta é criar uma{" "}
              <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
                base única e confiável
              </span>{" "}
              para consultar clientes, seguradoras, apólices e ocorrências em
              uma única tela.
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
          <Card className="p-10">
            <div className="slide-chrome" style={{ color: "var(--emerald)" }}>
              Sinistros
            </div>
            <div
              className="slide-body-lg mt-4"
              style={{ color: "var(--navy-deep)" }}
            >
              O maior desgaste acontece durante o acompanhamento. O cliente
              envia mensagens e liga repetidamente para descobrir se houve
              alguma atualização. Para responder, a corretora precisa verificar
              o andamento e retornar individualmente.
            </div>
            <div
              className="slide-body mt-5"
              style={{ color: "var(--navy-soft)" }}
            >
              Além disso, relatos, documentos e fotos recebidos pelo WhatsApp
              precisam ser organizados antes do envio à seguradora.
            </div>
          </Card>

          <Card className="p-10">
            <div className="slide-chrome" style={{ color: "var(--emerald)" }}>
              Cobranças em atraso
            </div>
            <div
              className="slide-body-lg mt-4"
              style={{ color: "var(--navy-deep)" }}
            >
              A consulta de pendências exige acessar os portais das seguradoras,
              verificar os relatórios disponíveis e entrar em contato
              individualmente com cada cliente.
            </div>
          </Card>
        </div>

        <div
          className="mt-10 rounded-2xl p-8"
          style={{ background: "var(--navy-deep)", color: "#F5F7FA" }}
        >
          <div className="slide-body-lg" style={{ color: "#F5F7FA" }}>
            O foco do projeto é reduzir consultas repetitivas, organizar as
            informações e{" "}
            <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
              manter o cliente atualizado de maneira proativa
            </span>
            .
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
          Tecnologia robusta baseada em{" "}
          <span style={{ color: "var(--emerald)" }}>arquivos e dados centralizados</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-6 flex flex-col justify-start">
            <p
              className="slide-body-lg"
              style={{ color: "oklch(0.85 0.02 250)", maxWidth: 820 }}
            >
              Sem depender de integrações instáveis com os portais das
              seguradoras.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "oklch(0.78 0.02 250)", maxWidth: 820 }}
            >
              Na primeira etapa, a equipe continua realizando o download dos
              relatórios disponibilizados pelas seguradoras. A partir desse
              ponto, o sistema{" "}
              <b style={{ color: "var(--emerald)" }}>
                elimina grande parte da conferência, organização e digitação
                repetitiva
              </b>
              .
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
                → Demonstração prática da primeira versão do sistema Mágikhi
              </div>
            </div>
          </div>

          <div className="col-span-6 flex items-center">
            <div className="w-full space-y-6">
              {[
                { n: "01", t: "Download do relatório", d: "PDF ou Excel disponibilizado pela seguradora." },
                { n: "02", t: "Envio para o painel", d: "A equipe arrasta o arquivo para a área de importação." },
                { n: "03", t: "IA extrai e organiza", d: "O sistema interpreta os dados e atualiza a base central." },
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
          <Kicker>04 · Sinistros</Kicker>
          <div
            className="rounded-full px-5 py-2 slide-badge"
            style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
          >
            WhatsApp 24h
          </div>
        </div>
        <h2 className="slide-title mt-6" style={{ maxWidth: 1500 }}>
          Acompanhamento proativo de{" "}
          <span style={{ color: "var(--emerald)" }}>sinistros</span>
        </h2>

        <div className="mt-12 grid flex-1 grid-cols-12 gap-10">
          <div className="col-span-6">
            <p className="slide-body-lg" style={{ color: "var(--navy)", maxWidth: 820 }}>
              Sempre que o andamento for atualizado no painel, o sistema envia
              automaticamente a mensagem adequada ao cliente — reduzindo
              ligações, interrupções e cobranças de status.
            </p>
            <ul className="mt-8 space-y-5" style={{ maxWidth: 820 }}>
              {[
                ["Atualiza o cliente automaticamente", "Cada alteração de status pode gerar uma mensagem personalizada pelo WhatsApp."],
                ["Centraliza o acompanhamento", "A corretora visualiza o cliente, a seguradora e o estágio atual em uma única tela."],
                ["Organiza documentos e relatos", "Em uma etapa complementar, áudios, fotos e documentos também poderão ser estruturados pelo assistente."],
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
                <div className="flex items-center justify-between mb-5">
                  <div className="slide-chrome" style={{ color: "var(--navy-soft)" }}>
                    Painel · Acompanhamento de sinistro
                  </div>
                  <div
                    className="rounded-full px-3 py-1 slide-badge"
                    style={{ background: "var(--navy-deep)", color: "var(--emerald-soft)", fontSize: 14 }}
                  >
                    Fluxo demonstrativo
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    ["Cliente", "Ana Beatriz Rocha"],
                    ["Apólice", "Auto · Porto Seguro"],
                    ["Estágio atual", "Vistoria agendada"],
                    ["Última atualização", "Hoje, 14h32"],
                    ["Mensagem enviada", "WhatsApp ✓"],
                    ["Documentos", "Organizados na pasta do caso"],
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
                  Cliente atualizado automaticamente
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
              apresentada representa uma{" "}
              <b>primeira proposta de estrutura</b>, construída com base nas
              informações enviadas pela Mágikhi.
            </p>
            <p
              className="slide-body mt-8"
              style={{ color: "var(--navy-soft)", maxWidth: 820 }}
            >
              Antes do desenvolvimento definitivo, campos, telas, categorias,
              relatórios e fluxos serão{" "}
              <b style={{ color: "var(--emerald)" }}>
                validados com a Geisa
              </b>{" "}
              e adaptados à rotina real da corretora.
            </p>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-6 self-center">
            {[
              { t: "Painel", d: "Layout e informações ajustados à operação." },
              { t: "Botões e fluxos", d: "Ações rápidas alinhadas à rotina da corretora." },
              { t: "Relatórios financeiros", d: "Primeira visão de entradas e saídas, ajustável após validação." },
              { t: "Desenvolvimento próprio", d: "Ajustes realizados diretamente pela equipe da Elumina IA." },
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
      r: "Dias 1 – 7",
      t: "Validação e mapeamento",
      d: "Confirmação dos fluxos, campos necessários e análise de amostras dos relatórios das seguradoras.",
    },
    {
      r: "Dias 8 – 18",
      t: "Base e importação",
      d: "Construção da base cadastral, painel e processamento inicial de PDFs e planilhas.",
    },
    {
      r: "Dias 19 – 26",
      t: "Sinistros e WhatsApp",
      d: "Central de acompanhamento e mensagens automáticas de atualização ao cliente.",
    },
    {
      r: "Dias 27 – 30",
      t: "Financeiro, homologação e entrega",
      d: "Visão inicial de entradas e saídas, testes, treinamento e ajustes finais.",
    },
  ];
  return (
    <SlideFrame variant="dark" pageNumber={7}>
      <div className="absolute inset-0 flex flex-col px-24 py-20 pb-32">
        <Kicker variant="dark">06 · Cronograma</Kicker>
        <h2 className="slide-title mt-6" style={{ color: "#F5F7FA", maxWidth: 1500 }}>
          Primeira versão operacional em até{" "}
          <span style={{ color: "var(--emerald)" }}>30 dias</span>
        </h2>
        <p
          className="slide-body mt-5"
          style={{ color: "oklch(0.78 0.02 250)", maxWidth: 1500 }}
        >
          Prazo contado após a validação dos fluxos e o recebimento de amostras
          dos arquivos utilizados pela corretora.
        </p>

        <div className="mt-12 grid flex-1 grid-cols-4 gap-6">
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
                    Implantação
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
                  Condição Especial — Projeto-Piloto
                </div>
              </div>
              <div className="slide-body mt-4" style={{ color: "var(--navy-deep)", maxWidth: 900 }}>
                Desenvolvimento da primeira versão operacional para o segmento
                Automóvel, conforme escopo validado com a Mágikhi.
              </div>
              <div className="slide-body mt-3" style={{ color: "var(--navy-soft)", maxWidth: 900 }}>
                50% na entrada e 50% na entrega e validação, ou parcelamento em
                até 3 vezes sem juros.
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
                Inclui hospedagem, manutenção da solução, suporte operacional e
                ajustes de pequeno porte dentro do escopo contratado.
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
              <div className="slide-title mt-6" style={{ color: "#F5F7FA", fontSize: 48, lineHeight: 1.1 }}>
                Consumo de Inteligência Artificial pago diretamente pela
                corretora
              </div>
              <div
                className="slide-body mt-6"
                style={{ color: "oklch(0.85 0.02 250)" }}
              >
                O consumo das ferramentas de Inteligência Artificial será
                cobrado diretamente na conta cadastrada pela Mágikhi, sem
                margem ou intermediação da Elumina IA.
              </div>
              <div
                className="slide-body-lg mt-5"
                style={{ color: "#F5F7FA" }}
              >
                Estimativa inicial:{" "}
                <span style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  aproximadamente US$ 5/mês
                </span>
              </div>
              <div
                className="slide-caption mt-3"
                style={{ color: "oklch(0.75 0.02 250)" }}
              >
                Valor ilustrativo e variável conforme o volume de arquivos,
                imagens, áudios e mensagens processados.
              </div>

              <div className="mt-auto pt-8">
                <div
                  className="rounded-xl px-6 py-5 slide-body font-semibold"
                  style={{ background: "var(--emerald)", color: "var(--navy-deep)" }}
                >
                  Vamos construir e validar o projeto-piloto da Mágikhi junto
                  com a Geisa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
