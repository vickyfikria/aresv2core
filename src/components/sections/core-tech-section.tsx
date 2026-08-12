import { KeyRound, BrainCircuit, ShieldCheck, Zap, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

const SOLUTIONS = [
  {
    icon: KeyRound,
    color: "text-cyan",
    bg: "bg-cyan/10",
    ring: "ring-cyan/20",
    title: "OpenBao PQC Key Rotation Engine",
    subtitle: "Post-Quantum Cryptography KMS",
    items: [
      "기존 RSA-2048 및 ECDSA 키를 무중단으로 NIST 승인 양자후암호(CRYPTONITE-Kyber / Dilithium)로 전환(Rotation)하는 마이그레이션 엔진",
      "P-Cert 인증서 자동 발급 및 검증",
      "OpenBao Vault 기반 일원화 키 관리",
    ],
  },
  {
    icon: BrainCircuit,
    color: "text-violet",
    bg: "bg-violet/10",
    ring: "ring-violet/20",
    title: "AI Agent Self-Healing Pipeline",
    subtitle: "Autonomous Code Review & Bug Patch",
    items: [
      "개발자 부재 시에도 24시간 취약점 코드를 감수하는 AI Reviewer와, 스테이징 장애 발생 시 애코그램 로그를 분석해 자율 패치를 생성하는 시스템",
      "CodeRabbit & Sweep.dev 자동 감수 게이트키핑",
      "Greptile 기반 소스코드 지식 그래프",
    ],
  },
  {
    icon: ShieldCheck,
    color: "text-green",
    bg: "bg-green/10",
    ring: "ring-green/20",
    title: "Zero-Trust Network Guardrail",
    subtitle: "RPKI & DNSSEC Protection",
    items: [
      "BGP 라우팅 변조를 차단하는 RPKI 검증 체계 및 DNS 하이재킹을 방지하는 DNSSEC 검증 모듈로 네트워크 전반의 신뢰성을 보장합니다.",
      "Python Core (Ares IP) & Node.js API 관리 설계",
      "99.98% 가용성 보장 하이브리드 게이트웨이",
    ],
  },
  {
    icon: Zap,
    color: "text-amber",
    bg: "bg-amber/10",
    ring: "ring-amber/20",
    title: "SOAR Automated Incident Containment",
    subtitle: "Threat Mitigation Playbook",
    items: [
      "보안 침해 시 탐지부터 호스트 격리, 트래픽 우회까지 사람의 개입 없이 12분 이내 격리하는 지능형 오케스트레이션 플레이북",
      "MTTD 12분 / MTTR 38분 이내 제어",
      "CISO 요청 실시간 손실 최소화 지표",
    ],
  },
]

export function CoreTechSection() {
  return (
    <section id="core-tech" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono-tight text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Research &amp; Technologies
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            아레스 연구소 4대 핵심 기술 솔루션
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <Card key={solution.title} className="p-6">
              <div className="flex items-start gap-4">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${solution.bg} ring-1 ${solution.ring}`}
                >
                  <solution.icon className={`size-5 ${solution.color}`} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-0.5 font-mono-tight text-xs text-muted-foreground">
                    {solution.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {solution.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <Check className={`mt-0.5 size-4 shrink-0 ${solution.color}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
