// Lightweight, dependency-free SVG chart primitives styled for the ARES dark dashboard.

type HBarDatum = { label: string; value: number; color: string }

export function HorizontalBarChart({
  data,
  min = 80,
  max = 100,
}: {
  data: HBarDatum[]
  min?: number
  max?: number
}) {
  const ticks = Array.from(
    { length: Math.round((max - min) / 2) + 1 },
    (_, i) => min + i * 2
  )

  return (
    <div className="flex flex-col gap-4">
      {data.map((d) => {
        const pct = ((d.value - min) / (max - min)) * 100
        return (
          <div key={d.label} className="grid grid-cols-[110px_1fr] items-center gap-3">
            <span className="text-xs text-muted-foreground">{d.label}</span>
            <div className="relative h-4 overflow-hidden rounded-full bg-white/[0.04]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max(0, Math.min(100, pct))}%`,
                  background: d.color,
                  boxShadow: `0 0 12px -2px ${d.color}`,
                }}
              />
            </div>
          </div>
        )
      })}
      <div className="grid grid-cols-[110px_1fr] gap-3">
        <span />
        <div className="flex justify-between font-mono-tight text-[10px] text-muted-foreground/70">
          {ticks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

type VBarDatum = { label: string; value: number }

export function VerticalBarChart({
  data,
  min = 3,
  max = 6,
  color = "#fb7185",
}: {
  data: VBarDatum[]
  min?: number
  max?: number
  color?: string
}) {
  const ticks = Array.from(
    { length: Math.round((max - min) / 0.2) + 1 },
    (_, i) => +(min + i * 0.2).toFixed(1)
  ).filter((_, i) => i % 5 === 0)

  return (
    <div className="flex h-56 gap-3">
      <div className="flex flex-col justify-between py-1 font-mono-tight text-[10px] text-muted-foreground/70">
        {[...ticks].reverse().map((t) => (
          <span key={t}>{t.toFixed(1)}</span>
        ))}
      </div>
      <div className="flex flex-1 items-end justify-between gap-3 border-l border-border pl-3">
        {data.map((d) => {
          const pct = ((d.value - min) / (max - min)) * 100
          return (
            <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-44 w-full items-end">
                <div
                  className="w-full rounded-t-md"
                  style={{
                    height: `${Math.max(2, Math.min(100, pct))}%`,
                    background: `linear-gradient(180deg, ${color}, ${color}99)`,
                    boxShadow: `0 0 14px -3px ${color}`,
                  }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{d.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type GroupedDatum = { label: string; a: number; b: number }

export function GroupedBarChart({
  data,
  max = 140,
  colorA = "#22d3ee",
  colorB = "#fb7185",
  legendA = "MTTD (탐지 · 분)",
  legendB = "MTTR (복구 · 분)",
}: {
  data: GroupedDatum[]
  max?: number
  colorA?: string
  colorB?: string
  legendA?: string
  legendB?: string
}) {
  const ticks = [0, 20, 40, 60, 80, 100, 120, 140].filter((t) => t <= max)

  return (
    <div>
      <div className="mb-3 flex items-center gap-5 font-mono-tight text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm" style={{ background: colorA }} />
          {legendA}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm" style={{ background: colorB }} />
          {legendB}
        </span>
      </div>
      <div className="flex h-56 gap-3">
        <div className="flex flex-col justify-between py-1 font-mono-tight text-[10px] text-muted-foreground/70">
          {[...ticks].reverse().map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="flex flex-1 items-end justify-between gap-4 border-l border-border pl-3">
          {data.map((d) => (
            <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-44 w-full items-end justify-center gap-1.5">
                <div
                  className="w-full max-w-6 rounded-t-md"
                  style={{
                    height: `${Math.max(2, (d.a / max) * 100)}%`,
                    background: colorA,
                    boxShadow: `0 0 10px -2px ${colorA}`,
                  }}
                />
                <div
                  className="w-full max-w-6 rounded-t-md"
                  style={{
                    height: `${Math.max(2, (d.b / max) * 100)}%`,
                    background: colorB,
                    boxShadow: `0 0 10px -2px ${colorB}`,
                  }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type RadarDatum = { label: string; value: number }

export function RadarChart({ data, max = 100 }: { data: RadarDatum[]; max?: number }) {
  const size = 220
  const center = size / 2
  const radius = size / 2 - 34
  const angleStep = (Math.PI * 2) / data.length

  const point = (i: number, ratio: number) => {
    const angle = angleStep * i - Math.PI / 2
    return [
      center + Math.cos(angle) * radius * ratio,
      center + Math.sin(angle) * radius * ratio,
    ]
  }

  const rings = [0.25, 0.5, 0.75, 1]
  const polygonPoints = data
    .map((d, i) => point(i, d.value / max).join(","))
    .join(" ")

  return (
    <div className="flex items-center justify-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-56 w-56">
        {rings.map((r) => (
          <polygon
            key={r}
            points={data.map((_, i) => point(i, r).join(",")).join(" ")}
            fill="none"
            stroke="rgba(148,187,233,0.14)"
            strokeWidth={1}
          />
        ))}
        {data.map((_, i) => {
          const [x, y] = point(i, 1)
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(148,187,233,0.14)"
              strokeWidth={1}
            />
          )
        })}
        <polygon
          points={polygonPoints}
          fill="rgba(34,211,238,0.18)"
          stroke="#22d3ee"
          strokeWidth={2}
          style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.6))" }}
        />
        {data.map((d, i) => {
          const [x, y] = point(i, d.value / max)
          return <circle key={d.label} cx={x} cy={y} r={2.5} fill="#22d3ee" />
        })}
        {data.map((d, i) => {
          const [x, y] = point(i, 1.28)
          return (
            <text
              key={d.label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground"
              fontSize={9.5}
            >
              {d.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
