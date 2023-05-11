import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CountryDetails({ country }) {
  // props contient le nom de pays en francais
  const [countryDetails, setCountryDetails] = useState({});
  const [loading, setLoading] = useState(true);
  // fonction pour convertir le nom du pays en français en un code de pays à deux lettres

  function convertCountryNameToCode(frenchName) {
    const countriesCode = {
      France: "FR",
      Maroc: "MA",
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
    <div>
      <h2>{country}</h2>
      <img src={countryDetails.flags.svg} alt={`Drapeau de ${country}`} />
    </div>
  );
}
export default CountryDetails;
