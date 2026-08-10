import Link from "next/link";
export default function NotFound() { return <main className="not-found"><div className="not-found-inner"><span className="micro-label">ARV / Not found</span><h1>404</h1><p>This page is no longer part of the current ARV site structure.</p><Link href="/" className="button button-dark">Back to home <span>→</span></Link></div></main>; }
