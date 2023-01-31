import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollToTop() {
  const { pathnames } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathnames]);

  return null;
}