import { Activity, AlertTriangle, Gauge } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  HorizontalBarChart,
  VerticalBarChart,
  GroupedBarChart,
  RadarChart,
} from "@/components/dashboard-charts"

const LOG_LINES = [
  "[08-11 10:25:01] ARES Core Control Tower Initialized. Connected to OpenBao KMS Vault.",
  "[08-11 10:25:05] P-Cert Verification Module Active. 1,024 Active Session Keys Encrypted via Kyber-1024.",
  "[08-11 10:25:12] RPKI Route Origin Authorization Validated (Zero Hijacking Risk).",
]

export function ControlTowerSection() {
  return (
    <section id="control-tower" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-24 right-1/4 size-72 rounded-full bg-cyan/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-cyan/10 ring-1 ring-cyan/25">
                <Gauge className="size-5 text-cyan" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-foreground sm:text-xl">
                  ARES Cyber Resilience Control Tower
                </h2>
                <p className="text-xs text-muted-foreground">
                  2,000개 기업 데이터 및 실시간 AI 텔레메트리 기반 사이버 복원력 지표 통합 관제
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 font-mono-tight text-[11px] font-medium text-pink">
                <AlertTriangle className="size-3" />
                모의 사이버 위협 발생 시뮬레이션
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3 py-1 font-mono-tight text-[11px] text-muted-foreground">
                SLA Target: 99.98% Uptime
              </span>
            </div>
          </div>

          <div className="relative mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="bg-muted/40 p-5">
              <p className="mb-4 text-sm font-semibold text-foreground">
                1. 시스템 가용성 &amp; SLA 준수율 (%)
              </p>
              <HorizontalBarChart
                min={80}
                max={100}
                data={[
                  { label: "System Uptime", value: 99.5, color: "#22d3ee" },
                  { label: "% Compliance", value: 92, color: "#818cf8" },
                  { label: "RTO Target", value: 86, color: "#34d399" },
                  { label: "RPO Target", value: 88, color: "#fbbf24" },
                ]}
              />
            </Card>

            <Card className="bg-muted/40 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  2. 산업별 다운타임 손실 치명도 (1-7 SCALE)
                </p>
                <span className="text-[10px] text-muted-foreground">
                  Risk Criticality Rating
                </span>
              </div>
              <VerticalBarChart
                min={3}
                max={6}
                color="#fb7185"
                data={[
                  { label: "금융", value: 5.6 },
                  { label: "공공", value: 5.4 },
                  { label: "IT/통신", value: 5.7 },
                  { label: "의료", value: 5.5 },
                  { label: "에너지", value: 5.6 },
                  { label: "제조", value: 5.3 },
                ]}
              />
            </Card>

            <Card className="bg-muted/40 p-5">
              <p className="mb-4 text-sm font-semibold text-foreground">
                3. 기업 규모별 탐지(MTTD) vs 복구(MTTR) 시간 (분)
              </p>
              <GroupedBarChart
                max={140}
                data={[
                  { label: "대기업", a: 18, b: 112 },
                  { label: "중견기업", a: 14, b: 65 },
                  { label: "공공/기타", a: 22, b: 96 },
                  { label: "SME", a: 12, b: 128 },
                ]}
              />
              <p className="mt-2 text-right text-[10px] text-muted-foreground/70">
                Lower is Better
              </p>
            </Card>

            <Card className="bg-muted/40 p-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  4. 아레스 핵심 보안 및 자동화 커버리지 (%)
                </p>
                <span className="text-[10px] text-muted-foreground">PQC / RPKI / SOAR</span>
              </div>
              <RadarChart
                max={100}
                data={[
                  { label: "RPKI 라우팅", value: 92 },
                  { label: "DNSSEC 도메인", value: 78 },
                  { label: "SOAR 자동대응", value: 88 },
                  { label: "인프라 이중화", value: 95 },
                  { label: "AI 이상탐지", value: 82 },
                ]}
              />
            </Card>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-xl border border-border bg-black/40 p-4 font-mono-tight text-[12px]">
            <div className="mb-3 flex items-center justify-between text-muted-foreground">
              <span className="flex items-center gap-2 text-foreground/80">
                <Activity className="size-3.5 text-green" />
                ARES Resilience Engine Real-Time Log Stream
              </span>
              <span className="flex items-center gap-1.5 text-green">
                <span className="size-1.5 rounded-full bg-green" />
                STATUS: ACTIVE
              </span>
            </div>
            <div className="space-y-1.5 text-cyan/90">
              {LOG_LINES.map((line) => (
                <p key={line} className="truncate">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
