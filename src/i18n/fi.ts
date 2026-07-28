import type { Dict } from "./en";

export const fi: Dict = {
  lang: "fi",
  meta: {
    title: "Verstas — huolella tehtyjä sovelluksia",
    description:
      "Pieni paja, joka rakentaa rauhallisia ja hyödyllisiä sovelluksia: Lukumaku kirjapäiväkirjaan ja Muisti aikaväliin perustuvaan kertaamiseen.",
  },
  hero: {
    eyebrow: "Verstas",
    title: "Digitaalisia työkaluja, juuri sinulle.",
    subtitle:
      "Huolella muotoiltua suunnittelua ja ideoita käytännön ratkaisuiksi. Ilmainen ja paikallinen.",
  },
  card: {
    visit: (name: string) => `Vieraile sivustolla ${name}`,
    whatsInside: "Mitä sisältyy",
  },
  projects: {
    lukumaku: {
      benefit:
        "Elävä lukupäiväkirja — pienet palkinnot pitävät motivaation yllä, ja muut lukijat auttavat löytämään seuraavan kirjan.",
      tags: ["lukeminen", "päiväkirja", "tapa"],
      benefits: [
        "Yksityinen päiväkirja jokaiselle kirjalle — arvostelut, muistiinpanot ja edistyminen samassa paikassa.",
        "Lisää kirja sekunneissa — haku täyttää nimen, kirjailijan ja kannen puolestasi.",
        "Pidä lukulistaa ja muuta se päiväkirjamerkinnäksi heti, kun luet kirjan loppuun.",
        "Löydä seuraava lukemisesi muiden lukijoiden suositusten kautta — vain nimi, kirjailija ja syy, ei koskaan heidän yksityisiä muistiinpanojaan.",
        "Aseta vuosittainen lukutavoite ja vertaile halutessasi edistymistä ystävien kanssa yksityisessä lukupiirissä tai vapaaehtoisella tulostaululla.",
        "Vie päiväkirjasi JSON- tai CSV-muodossa milloin tahansa.",
      ],
    },
    muisti: {
      benefit:
        "Pieniä päivittäisiä kertauksia, jotka kasvattavat putken pituutta — ajoitettuna sen mukaan, miten muisti haalistuu.",
      tags: ["muistikortit", "muisti", "kertaaminen"],
      benefits: [
        "Kertaukset ajoitetaan muistin tieteen mukaan (Ebbinghausin unohtamiskäyrä) — ei arvailulla.",
        "Opiskele nopeimmalla tavalla — pikanäppäimet tietokoneella, pyyhkäisyeleet mobiilissa.",
        "Rakenna pakka sekunneissa — liitä lista etu/taka-pareja ja aloita opiskelu.",
        "Katso muistamiskäyräsi tasoittuvan ajan myötä — putket ja kertauslämpökartta pitävät motivaation yllä.",
        "Omista pakkasi — tuo tai vie JSON- tai CSV-muodossa milloin tahansa.",
        "Näyttää hyvältä kaikkialla, yötä päivää — täysi tumma tila, responsiivinen kaikilla laitteilla.",
      ],
    },
  },
  demo: {
    lukumaku: {
      turnThePage: "Käännä sivua",
      tagline: "Jokainen kirja on makuasia.",
    },
    muisti: {
      tapToReveal: "Napauta korttia paljastaaksesi",
      howWellKnew: "Kuinka hyvin muistit sen?",
      again: "Uudelleen",
      good: "Hyvä",
      easy: "Helppo",
      inDays: {
        "10 minutes": "10 minuutin",
        "4 days": "4 päivän",
        "9 days": "9 päivän",
      },
      feedback: (label: string, days: string) => `${label} — seuraava kertaus ${days} kuluttua`,
      tagline: "Yksi kortti päivässä pitää putken elossa.",
    },
  },
  footer: {
    colophon: (year: number) =>
      `Ladottu Fraunces- ja Inter-fonteilla. Rakennettu Astrolla, Sveltellä ja Tailwindilla, ja sidottu yhteen rauhallisena iltapäivänä vuonna ${year}.`,
    madeBy: "Tehnyt",
    madeBySuffix:
      "— yhden hengen paja, joka rakentaa pieniä työkaluja, joiden luo kannattaa palata.",
    linkedin: "Sano hei LinkedInissä",
  },
};
