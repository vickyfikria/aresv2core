import { ShieldHalf, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { label: "연구소 소개", href: "#about" },
  { label: "통합 관제 타워", href: "#control-tower" },
  { label: "핵심 기술", href: "#core-tech" },
  { label: "PQC 샌드박스", href: "#sandbox" },
  { label: "연구 성과", href: "#research" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 shadow-[0_0_20px_-4px_rgba(99,102,241,0.7)]">
            <ShieldHalf className="size-6 text-white" strokeWidth={2.25} />
          </span>
          <span className="flex flex-col">
            <span className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-foreground">
                ARES <span className="text-cyan">연구소</span>
              </span>
              <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono-tight text-[10px] font-semibold text-cyan">
                v2.0 CORE
              </span>
            </span>
            <span className="text-[11px] text-muted-foreground">
              아레스 사이버전략연구소 | Cyber Strategy Institute
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-green/25 bg-green/[0.06] px-3 py-1.5 font-mono-tight text-[11px] font-medium text-green">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-green" />
            </span>
            ENGINE OPERATIONAL
          </span>
          <Button size="sm" className="rounded-full">
            <Send className="size-3.5" />
            기술 제휴 문의
          </Button>
        </div>
      </div>
    </header>
  )
}
