import { PitchLines } from '@/components/pitch-lines'

const modulos = [
  'Escalações',
  'Jogadores',
  'Mensalidades',
  'Estatísticas',
  'Convocações',
]

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
      <PitchLines />

      {/* topo */}
      <header className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-sm bg-primary font-display text-sm font-bold tracking-tight text-primary-foreground"
          >
            MT
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            MeuTime
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Em construção
          </span>
        </div>
      </header>

      {/* centro */}
      <section className="relative flex flex-1 flex-col justify-center py-16">
        <p className="mb-6 font-mono text-[11px] tracking-[0.3em] text-primary uppercase">
          Pré-temporada
        </p>

        <h1 className="max-w-3xl font-display text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Em breve, seu sistema de gestão de times{' '}
          <span className="text-primary">completo</span>.
        </h1>

        <p className="mt-6 font-display text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl">
          Zero estresse.
        </p>

        <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-3">
          {modulos.map((modulo) => (
            <li
              key={modulo}
              className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground"
            >
              {modulo}
            </li>
          ))}
        </ul>
      </section>

      {/* base */}
      <footer className="relative flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
        <a
          href="https://meutime.pro"
          className="font-display text-xl font-semibold tracking-tight underline decoration-primary decoration-2 underline-offset-[6px] transition-colors hover:text-primary sm:text-2xl"
        >
          meutime.pro
        </a>
        <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} MeuTime
        </p>
      </footer>
    </main>
  )
}
