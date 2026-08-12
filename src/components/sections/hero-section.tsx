import { Cpu, LineChart, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"

const STATS = [
  {
    label: "평균 탐지 시간\n(MTTD)",
    value: "12",
    unit: "분",
    caption: "실시간 AI 엔진 구동",
    border: "border-cyan/40",
    valueColor: "text-cyan",
  },
  {
    label: "평균 복구 시간\n(MTTR)",
    value: "38",
    unit: "분",
    caption: "SOAR 플레이북 자동화",
    border: "border-blue-400/40",
    valueColor: "text-blue-300",
  },
  {
    label: "양자 안전 규격 준수",
    value: "NIST",
    unit: "L5",
    caption: "Kyber / Dilithium",
    border: "border-green/40",
    valueColor: "text-green",
  },
  {
    label: "SLA 목표 가용성",
    value: "99.98",
    unit: "%",
    caption: "무중단 장애 복구",
    border: "border-violet/40",
    valueColor: "text-violet",
  },
]

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-border">
      <div className="grid-overlay pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-panel/60 p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-cyan/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-0 size-96 rounded-full bg-violet/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/[0.06] px-4 py-1.5 font-mono-tight text-xs text-cyan">
                <Cpu className="size-3.5" />
                AI-Native Cyber Resilience &amp; Post-Quantum Cryptography
              </span>

              <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                양자 암호와 AI 자율 오퍼레이션으로
                <br />
                <span className="text-gradient">차세대 국가·기업 사이버 안보 수호</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                아레스 사이버전략연구소는 양자 컴퓨터 시대의 위협에 대비하는{" "}
                <strong className="font-semibold text-foreground/90">
                  양자후암호(PQC) 마이그레이션 기술
                </strong>
                과 개발자 부재 리스크를 극복하는{" "}
                <strong className="font-semibold text-foreground/90">
                  AI 자율 사이버 복원력(Self-Healing Infrastructure)
                </strong>
                을 연구·개발하는 전담 연구 기관입니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl">
                  <LineChart className="size-4" />
                  실시간 관제 대시보드 시연
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl">
                  <KeyRound className="size-4" />
                  PQC Key 마이그레이션 체험
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border ${stat.border} bg-white/[0.02] p-4`}
                >
                  <p className="whitespace-pre-line text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className={`mt-2 font-mono-tight text-2xl font-bold sm:text-3xl ${stat.valueColor}`}>
                    {stat.value}
                    <span className="ml-1 text-sm font-medium">{stat.unit}</span>
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground/80">{stat.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
