import Link from "next/link";
import { portfolio } from "@/lib/portfolio";
export default function NotFound(){return <main className="not-found"><span className="eyebrow accent">{portfolio.hero.eyebrow}</span><h1>404</h1><p>THIS FLIGHT DOES NOT EXIST.</p><Link href="/" className="btn action-primary">{portfolio.site.navigation[0].label}</Link></main>}
