import { render } from "react-dom";
import App from "./App";
import GlobalStyle from "./globalStyle";

function Index() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
}
render(<Index />, document.getElementById("root"));
