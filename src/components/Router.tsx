import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

/* ===== Context & Hooks ===== */

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: "/",
  navigate: () => {},
});

export function useLocation() {
  return useContext(RouterContext);
}

/* ===== Router Provider ===== */

export function Router({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  const navigate = useCallback((to: string) => {
    window.history.pushState({}, "", to);
    setPathname(to);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);    // Intercept all clicks on <a> elements that point to internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Allow Ctrl/Cmd+click and middle-click to open in new tab
      if (e.metaKey || e.ctrlKey || e.button === 1) return;
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto") || href.startsWith("#") || href.startsWith("https")) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

/* ===== Link Component ===== */

export function Link({
  to,
  className,
  children,
  ...rest
}: {
  to: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}) {
  const { navigate } = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    // Allow Ctrl/Cmd+click and middle-click to open in new tab
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (to.startsWith("http") || to.startsWith("tel") || to.startsWith("mailto")) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}

/* ===== Routes Component ===== */

export function Routes({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  let matched: ReactNode = null;

  // Find matching route
  const childrenArray = Array.isArray(children) ? children : [children];
  for (const child of childrenArray) {
    if (child && typeof child === "object" && "props" in child) {
      const { path, element } = (child as any).props;
      if (path === pathname) {
        matched = element;
        break;
      }
    }
  }

  return matched || null;
}

export function Route({
  path,
  element,
}: {
  path: string;
  element: ReactNode;
}) {
  // This is just a declaration component — Routes handles matching
  return null;
}
