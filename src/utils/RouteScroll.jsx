import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScroll() {
	const pathname = usePathname();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

  return null;
}