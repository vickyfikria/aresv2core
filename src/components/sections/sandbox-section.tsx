import { useState } from "react"
import { FlaskConical, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

type KeyRow = {
  id: string
  service: string
  legacyAlgo: string
  pqcTarget: string
  progress: number
  status: "완료" | "진행 중"
}

const ROWS: KeyRow[] = [
  {
    id: "KEY-8091",
    service: "ERP Master DB Encryption",
    legacyAlgo: "RSA-4096",
    pqcTarget: "CRYPTONITE-KYBER-1024",
    progress: 100,
    status: "완료",
  },
  {
    id: "KEY-8092",
    service: "Auth Gateway Session Sign",
    legacyAlgo: "ECDSA-P384",
    pqcTarget: "DILITHIUM-5",
    progress: 100,
    status: "완료",
  },
  {
    id: "KEY-8093",
    service: "Transaction Token Secret",
    legacyAlgo: "RSA-2048",
    pqcTarget: "CRYPTONITE-KYBER-768",
    progress: 55,
    status: "진행 중",
  },
  {
    id: "KEY-8094",
    service: "VPN Tunnel Key Exchange",
    legacyAlgo: "ECDH-256",
    pqcTarget: "KYBER-768 / OpenBao",
    progress: 48,
    status: "진행 중",
  },
  {
    id: "KEY-8095",
    service: "Envelope Storage Key",
    legacyAlgo: "AES-256-GCM",
    pqcTarget: "PQC-HYBRID-AEAD",
    progress: 40,
    status: "진행 중",
  },
]

export function SandboxSection() {
  const [certId, setCertId] = useState("")

  return (
    <section id="sandbox" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono-tight text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                Interactive Sandbox
              </p>
              <h2 className="mt-2 flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
                <FlaskConical className="size-5 text-cyan" />
                P-Cert &amp; OpenBao Key Migration Live Simulator
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                실제 양자후암호(PQC) 키 마이그레이션과 검증 절차를 가상 환경에서 구동해봅니다.
              </p>
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="P-CERT-00UZONE-2026"
                className="h-10 w-56 rounded-lg border border-border-strong bg-white/[0.02] px-3 font-mono-tight text-xs text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-cyan/50"
              />
              <Button type="submit" variant="violet" size="sm" className="h-10 rounded-lg">
                <ShieldCheck className="size-3.5" />
                검증하기
              </Button>
            </form>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Key ID</TableHead>
                  <TableHead>서비스 대상</TableHead>
                  <TableHead>기존 알고리즘</TableHead>
                  <TableHead>PQC 전환 대상</TableHead>
                  <TableHead>OpenBao 등재</TableHead>
                  <TableHead className="text-right">제어</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ROWS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-mono-tight text-cyan">{row.id}</TableCell>
                    <TableCell className="text-foreground/90">{row.service}</TableCell>
                    <TableCell className="font-mono-tight text-muted-foreground">
                      {row.legacyAlgo}
                    </TableCell>
                    <TableCell className="font-mono-tight text-violet">
                      {row.pqcTarget}
                    </TableCell>
                    <TableCell>
                      <div className="h-2 w-28 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={
                          row.status === "완료"
                            ? "inline-flex rounded-full border border-green/30 bg-green/10 px-2.5 py-1 font-mono-tight text-[10px] font-semibold text-green"
                            : "inline-flex rounded-full border border-violet/30 bg-violet/10 px-2.5 py-1 font-mono-tight text-[10px] font-semibold text-violet"
                        }
                      >
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </section>
  )
}
