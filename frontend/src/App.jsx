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

  //  function countOccurrences(countries) {
  //   return countries.reduce((accumulator, country) => {
  //     if (accumulator[country]) {
  //       accumulator[country] += 1;
  //     } else {
  //       accumulator[country] = 1;
  //     }
  //     return accumulator;
  //   }, {});
  // }
  // let countries = ["France,France,Japon,Japon"];

  return (
    <div className="App">
      {numeroQuestion < api.length && (
        <div>
          <p>{api[numeroQuestion].question}</p>
          {api[numeroQuestion].options.map((res) => (
            <button
              type="button"
              onClick={() => {
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
