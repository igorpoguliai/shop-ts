import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyle";
import useIsMobile from "./hooks/useIsMobile";

function Index() {
  const isMobile = useIsMobile();

  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <App />
      ) : (
        alert("Цей додаток працює тільки на мобільному пристрої ;)")
      )}
    </>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(<Index />);
