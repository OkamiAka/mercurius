import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [api, setApi] = useState([]);
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((res) => setApi(res));
  }, []);
  return (
    <div className="App">
      {numeroQuestion < api.length && (
        <div>
          <p>{api[numeroQuestion].question}</p>
          {api[numeroQuestion].options.map((res) => (
            <button
              type="button"
              onClick={() => {
                if (api.length) {
                  setNumeroQuestion(numeroQuestion + 1);
                } else {
                }
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
