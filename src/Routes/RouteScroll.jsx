import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScroll() {
  const { pathname } = useLocation();
  const dontScrollToTopPaths = "/kartbody/";

  console.log(pathname);

  useEffect(() => {
    if(!pathname === dontScrollToTopPaths){
      window.scrollTo(0, 0);
    }
  }, [pathname,dontScrollToTopPaths]);

  return null;
}