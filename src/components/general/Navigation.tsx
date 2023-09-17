import Link from "next/link";

export default function Navigation({}) {
	return (
		<nav className="navigation">
			<Link href={'/'} className="navigation-link">
					Home
			</Link>
			<Link href={'/exhibition/'} className="navigation-link">exhibition</Link>
			<Link href={'/commission/'} className="navigation-link">Commission</Link>
		</nav>
	)
}