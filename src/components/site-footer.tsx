import { ShieldHalf } from "lucide-react"

const LINK_GROUPS = [
  {
    title: "연구소",
    links: ["연구소 소개", "핵심 기술", "연구 성과", "채용"],
  },
  {
    title: "솔루션",
    links: ["통합 관제 타워", "PQC 샌드박스", "OpenBao KMS", "SOAR 플레이북"],
  },
  {
    title: "리소스",
    links: ["기술 백서", "정책 보고서", "API 문서", "보안 공지"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400">
                <ShieldHalf className="size-5 text-white" strokeWidth={2.25} />
              </span>
              <span className="text-base font-bold text-foreground">
                ARES <span className="text-cyan">연구소</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              아레스 사이버전략연구소는 양자내성암호와 AI 자율 복원력 기술로 국가·기업의 사이버
              안보를 수호하는 전담 연구 기관입니다.
            </p>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="font-mono-tight text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 ARES Cyber Strategy Institute. All rights reserved.
          </p>
          <p className="font-mono-tight text-[11px] text-muted-foreground/70">
            아레스 사이버전략연구소 | Cyber Strategy Institute
          </p>
        </div>
      </div>
    </footer>
  )
}
