const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const questions = [
  {
    id: 1,
    question: "Quel est votre budget de voyage pour les vacances ?",
    options: [
      {
        id: 1,
        option: "Moins de 1000€",
        value: "low",
        countries: ["Maroc", "Turquie", "Thaïlande", "Indonésie", "Tunisie"],
      },
      {
        id: 2,
        option: "Entre 1000€ et 5000€",
        value: "medium",
        countries: ["Espagne", "Grèce", "Italie", "Portugal", "Mexique"],
      },
      {
        id: 3,
        option: "Plus de 5000€",
        value: "high",
        countries: [
          "Japon",
          "Maldives",
          "Nouvelle-Zélande",
          "Australie",
          "Dubai",
        ],
      },
    ],
  },
  {
    id: 2,
    question: "Quel type de climat préférez-vous ?",
    options: [
      {
        id: 1,
        option: "Chaud et ensoleillé",
        value: "hot",
        countries: [
          "Thaïlande",
          "Mexique",
          "République Dominicaine",
          "Indonésie",
          "Australie",
        ],
      },
      {
        id: 2,
        option: "Tempéré et doux",
        value: "temperate",
        countries: ["France", "Japon", "Australie", "Canada", "États-Unis"],
      },
      {
        id: 3,
        option: "Froid et enneigé",
        value: "cold",
        countries: ["Canada", "Norvège", "Suède", "Finlande", "Islande"],
      },
    ],
  },
  {
    id: 3,
    question: "Quel type de vacances préférez-vous ?",
    options: [
      {
        id: 1,
        option: "Aventure",
        value: "adventure",
        countries: [
          "Népal",
          "Australie",
          "Pérou",
          "Afrique du Sud",
          "Costa Rica",
        ],
      },
      {
        id: 2,
        option: "Culturelles",
        value: "cultural",
        countries: ["Japon", "Inde", "Égypte", "Italie", "Mexique"],
      },
      {
        id: 3,
        option: "Détente",
        value: "relaxing",
        countries: ["Maldives", "Bali", "Thaïlande", "Seychelles", "Bahamas"],
      },
    ],
  },
  {
    id: 4,
    question: "Quel type de cuisine préférez-vous ?",
    options: [
      {
        id: 1,
        option: "Cuisine locale",
        value: "local",
        countries: ["Maroc", "Thaïlande", "Italie"],
      },
      {
        id: 2,
        option: "Cuisine internationale",
        value: "international",
        countries: ["États-Unis", "Australie", "Singapour"],
      },
      {
        id: 3,
        option: "Cuisine gastronomique",
        value: "gastronomic",
        countries: ["France", "Espagne", "Japon"],
      },
    ],
  },
  {
    id: 5,
    question:
      "Quelle est la période de l'année où vous souhaitez partir en vacances ?",
    options: [
      {
        id: 1,
        option: "Printemps (mars-mai)",
        value: "spring",
        countries: ["Japon", "Maroc", "Turquie", "Italie", "Portugal"],
      },
      {
        id: 2,
        option: "Été (juin-août)",
        value: "summer",
        countries: ["Espagne", "Grèce", "Thaïlande", "Indonésie", "Mexique"],
      },
      {
        id: 3,
        option: "Automne (septembre-novembre)",
        value: "autumn",
        countries: ["France", "Norvège", "Canada", "États-Unis", "Italie"],
      },
      {
        id: 4,
        option: "Hiver (décembre-février)",
        value: "winter",
        countries: [
          "Canada",
          "Finlande",
          "Islande",
          "Nouvelle-Zélande",
          "Suisse",
        ],
      },
    ],
  },
];
router.get("/", (req, res) => {
  res.send(questions);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
