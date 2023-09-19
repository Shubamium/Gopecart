import { usePathname } from "next/navigation";

export default function useActivePath(){
	const pathname = usePathname();
	const isActive = (path:string)=>{
		const pathReg = new RegExp(path,'g')
		return pathReg.test(pathname);
	}

	return {isActive,pathname}
}