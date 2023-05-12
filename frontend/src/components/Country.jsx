import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CountryDetails({ country }) {
  // props contient le nom de pays en francais
  const [countryDetails, setCountryDetails] = useState({});
  const [loading, setLoading] = useState(true);
  // fonction pour convertir le nom du pays en français en un code de pays à deux lettres
  function convertCountryNameToCode(frenchName) {
    const countriesCode = {
      Maroc: "MA",
      Turquie: "TR",
      Thaïlande: "TH",
      Indonésie: "ID",
      Tunisie: "TN",
      Espagne: "ES",
      Grèce: "GR",
      Italie: "IT",
      Portugal: "PT",
      Mexique: "MX",
      Japon: "JP",
      Maldives: "MV",
      "Nouvelle-Zélande": "NZ",
      Australie: "AU",
      "République Dominicaine": "DO",
      France: "FR",
      Canada: "CA",
      "États-Unis": "US",
      Norvège: "NO",
      Suède: "SE",
      Finlande: "FI",
      Islande: "IS",
      Népal: "NP",
      Pérou: "PE",
      "Afrique du Sud": "ZA",
      "Costa Rica": "CR",
      Inde: "IN",
      Égypte: "EG",
      Seychelles: "SC",
      Bahamas: "BS",
      Singapour: "SG",
      Suisse: "CH",
      "Hong Kong": "HK",
      Albanie: "AL",
      Belgique: "BE",
      "Corée du Sud": "KR",
      Lithuanie: "LT",
      Koweït: "KW",
      Kazakhstan: "KZ",
      Bahreïn: "BH",
      Estonie: "EE",
      Iran: "IR",
      Géorgie: "GE",
      Philippines: "PH",
    };
    return countriesCode[frenchName];
  }
  useEffect(() => {
    const countryCode = convertCountryNameToCode(country);
    // Récupérer les données du pays depuis l'API
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryDetails(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails du pays :",
          error
        );
      });
  }, [country]);
  if (loading) {
    return <p>Chargement...</p>;
  }
  return (
    <div className="quiz">
      <h2>Destination recommandée : </h2>
      <h1>{country}</h1>
      <img src={countryDetails.flags.svg} alt={`Drapeau de ${country}`} />
    </div>
  );
}
export default CountryDetails;
