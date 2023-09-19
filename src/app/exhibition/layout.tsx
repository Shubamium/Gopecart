import ExhibitionNavigation from "@/components/exhibitionNavigation/ExhibitionNavigation";

type ExhibitionLayoutProps = {
	children:React.ReactNode;
}
export default function ExhibitionLayout({children} : ExhibitionLayoutProps) {
  return (
	  <>
	  	<ExhibitionNavigation/>
		<div id="container_exhibition" style={{height:'100%',overflow:'visible'}}>
			{children}
		</div>
	  </>
  )
}