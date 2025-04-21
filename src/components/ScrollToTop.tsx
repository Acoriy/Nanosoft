

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ce composant utilitaire fait défiler la fenêtre vers le haut à chaque changement de route.
 * Il utilise un délai minimal pour s'assurer que la navigation est terminée.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, [pathname]);

  return null;
}
