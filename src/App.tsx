import { useKlikToast } from "./use-klik-toast";
import { useChakraToast } from "./use-chakra-toast";

function App() {
  const { showNotification } = useKlikToast();

  function handleClick() {
    showNotification({
      title: "Test",
      description: "Hello World",
    });
  }

  const { showNotification: showChakraToast } = useChakraToast();

  function handleChakraClick() {
    showChakraToast({
      title: "Test",
      description: "Hello World",
    });
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>Klik</button>
        <button onClick={handleChakraClick}>Chakra</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
