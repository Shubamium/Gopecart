import Link from "next/link";

export default function Navigation({}) {
	return (
		<nav className="navigation">
			<Link href={'/'} className="navigation-link">
					HOME
			</Link>
			<Link href={'/exhibition/emotes'} className="navigation-link">EXHIBITION</Link>
			<Link href={'/commission/'} className="navigation-link">COMMMISSION</Link>
		</nav>
	)
}