import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const [api, setApi] = useState([]);
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  const [rep, setRep] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((res) => setApi(res));
  }, []);
  console.log(rep);
  return (
    <div className="App">
      <Header />
      {numeroQuestion < api.length && (
        <div className="pop">
          <p>{api[numeroQuestion].question}</p>
          {api[numeroQuestion].options.map((res) => (
            <button
              type="button"
              onClick={() => {
                setRep([...rep, ...res.countries]);
                setNumeroQuestion(numeroQuestion + 1);
              }}
            >
              {res.option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
