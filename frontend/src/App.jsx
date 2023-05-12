import React, { useEffect, useState } from "react";
import CountryDetails from "./components/Country";

function App() {
  const [api, setApi] = useState([]);
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  const [rep, setRep] = useState([]);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Erreur lors de la récupération des données de l'API"
          );
        }
        return res.json();
      })
      .then((res) => setApi(res))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function countOccurrences(arr) {
    const counts = {};
    arr.forEach((country) => {
      counts[country] = (counts[country] || 0) + 1;
    });
    return counts;
  }

  useEffect(() => {
    if (numeroQuestion >= api.length) {
      const occurrences = countOccurrences(rep);
      const maxOccurrences = Math.max(...Object.values(occurrences));
      const countriesWithMaxOccurrences = Object.keys(occurrences).filter(
        (country) => occurrences[country] === maxOccurrences
      );
      setDestination(countriesWithMaxOccurrences[0]);
    }
  }, [numeroQuestion, api.length, rep]);

  return (
    <div className="App">
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

      {destination && (
        <div className="result">
          <h2>Destination recommandée : </h2>
          <CountryDetails country={destination} />
        </div>
      )}
    </div>
  );
}

export default App;
