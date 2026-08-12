import { FileText, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const REPORTS = [
  {
    tag: "PQC STRATEGY",
    date: "2026.07",
    title: "2026 국가 핵심기반 양자내성암호(PQC) 전환 로드맵",
    description:
      "금융·에너지·통신 등 국가 핵심기반시설의 PQC 전환 우선순위와 OpenBao 기반 키 관리 아키텍처 설계 가이드라인.",
  },
  {
    tag: "AI RESILIENCE",
    date: "2026.05",
    title: "개발자 부재 시대의 AI Self-Healing 인프라 구축 백서",
    description:
      "24/7 자율 코드 리뷰 및 자동 패치 파이프라인이 평균 복구 시간(MTTR)에 미치는 영향에 대한 실증 연구.",
  },
  {
    tag: "THREAT REPORT",
    date: "2026.03",
    title: "2,000개 기업 표본 기반 산업별 사이버 위협 치명도 분석",
    description:
      "금융·공공·IT/통신 등 6대 산업군의 다운타임 손실 치명도(1-7 SCALE) 벤치마크와 SLA 목표 수립 방법론.",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono-tight text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Publications &amp; Strategy Reports
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            최신 정책·전략 연구 보고서
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            아레스 연구소가 발간하는 양자 암호화 및 AI 자율 복원력 관련 최신 연구 성과와 정책
            제언을 확인하세요.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REPORTS.map((report) => (
            <Card
              key={report.title}
              className="group flex flex-col p-6 transition-colors hover:border-cyan/30"
            >
              <div className="flex items-center justify-between">
                <Badge variant="cyan">{report.tag}</Badge>
                <span className="font-mono-tight text-[11px] text-muted-foreground">
                  {report.date}
                </span>
              </div>
              <span className="mt-5 flex size-10 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-border-strong">
                <FileText className="size-4.5 text-cyan" />
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                {report.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {report.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
                보고서 보기
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
