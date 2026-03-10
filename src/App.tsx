import "./styles/theme.css";
import "./styles/global.css";
import MainRouter from "./routers/MainRouter";
import { SignContextProvider } from "./contexts/SignContext/SignContextProvider";

function App() {
  return (
    <>
      <SignContextProvider>
        <MainRouter />
      </SignContextProvider>
    </>
  );
}

export default App;
