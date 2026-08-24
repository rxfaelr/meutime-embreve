export function PitchLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* linha central horizontal */}
      <div className="absolute top-1/2 right-0 left-0 h-px bg-foreground/8" />

      {/* círculo central */}
      <div className="absolute top-1/2 left-1/2 aspect-square w-[70vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/8" />
      <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50" />

      {/* grandes áreas laterais */}
      <div className="absolute top-1/2 -left-px h-[46vh] max-h-[420px] w-[16vw] max-w-[180px] -translate-y-1/2 rounded-r-sm border-y border-r border-foreground/8" />
      <div className="absolute top-1/2 -right-px h-[46vh] max-h-[420px] w-[16vw] max-w-[180px] -translate-y-1/2 rounded-l-sm border-y border-l border-foreground/8" />

      {/* brilho verde de baixo */}
      <div className="absolute -bottom-40 left-1/2 h-80 w-[120vw] -translate-x-1/2 bg-primary/12 blur-[120px]" />
    </div>
  )
}
