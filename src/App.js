import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary.</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a href="https://www.linkedin.com/in/maximespithorst/">Maxime</a>.
          Open-sourced on{" "}
          <a href="https://github.com/hallomaxime/dictionary-project">Github</a>
          .
        </footer>
      </div>
    </div>
  );
}
