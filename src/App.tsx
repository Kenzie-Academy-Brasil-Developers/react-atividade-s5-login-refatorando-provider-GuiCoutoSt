import { Toaster } from "react-hot-toast";
import Routes from "./routes";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Routes />
      <Toaster />
      <GlobalStyle />
    </>
  );
}

export default App;
