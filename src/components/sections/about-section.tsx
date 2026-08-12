import { KeyRound, BrainCircuit, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"

const FEATURES = [
  {
    icon: KeyRound,
    title: "양자후암호(PQC) 내재화",
    description:
      "NIST 표준 PQC 알고리즘(CRYPTONITE-Kyber / Dilithium)을 기존 ERP 및 인프라에 무중단(Zero-Downtime)으로 마이그레이션하는 OpenBao KMS 체계를 구현합니다.",
    color: "text-cyan",
    bg: "bg-cyan/10",
    ring: "ring-cyan/20",
  },
  {
    icon: BrainCircuit,
    title: "AI 기반 자율 거버넌스",
    description:
      "핵심 개발자 부재 시에도 24/7 무소스코드 감수하는 AI Reviewer에게 발생 시점 패치를 작성하는 Self-Healing CI/CD 파이프라인을 가동합니다.",
    color: "text-violet",
    bg: "bg-violet/10",
    ring: "ring-violet/20",
  },
  {
    icon: ShieldCheck,
    title: "제로 트러스트 무중단 복원력",
    description:
      "RPKI 라우팅 보호 및 DNSSEC 검증 모듈을 결합하여, 인프라 장애나 BGP 하이재킹 공격 발생 시 12분 이내 격리 및 38분 이내 시스템을 완전 복구합니다.",
    color: "text-green",
    bg: "bg-green/10",
    ring: "ring-green/20",
  },
]

export function AboutSection() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono-tight text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            About Institute
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            지능형 사이버 위협 시대의 원스톱 기술 통제소
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            단순한 방화벽이나 지점 솔루션에 의존하던 전통적 보안을 넘어, 아레스 연구소는 위협
            탐지부터 자율 치료, 양자 암호화 전환까지 아우르는 통합 복원력 프레임워크를 제공합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="p-6">
              <span
                className={`flex size-11 items-center justify-center rounded-xl ${feature.bg} ring-1 ${feature.ring}`}
              >
                <feature.icon className={`size-5 ${feature.color}`} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
