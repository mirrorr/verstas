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
    jumpTo: (name: string) => `Siirry kohtaan ${name}`,
    moreToCome: "+ lisää tulossa",
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
    madeBy: "Tehnyt",
    madeBySuffix:
      "— yhden hengen paja, joka rakentaa pieniä työkaluja, joiden luo kannattaa palata.",
    linkedin: "Sano hei LinkedInissä",
    pwaNote:
      "Jokainen sovellus tässä — myös tämä sivusto — toimii suoraan selaimessa ja asentuu kuin natiivisovellus puhelimeesi tai tietokoneellesi. Kaikki on rakennettu yhdessä Claude Coden kanssa.",
    installGuideLabel: "Katso asennusohjeet →",
    installHref: "/fi/install",
  },
  install: {
    meta: {
      title: "Asenna se kuin sovellus — Verstas",
      description:
        "Näin asennat Lukumakun, Muistin tai minkä tahansa Verstaan sovelluksen puhelimeesi tai tietokoneellesi — ilman sovelluskauppaa.",
    },
    eyebrow: "Opas",
    title: "Asenna se kuin sovellus.",
    intro:
      "Nämä ovat asennettavia web-sovelluksia (PWA) — sovelluskauppaa ei tarvita. Lisää sovellus kotinäytölle, niin se avautuu koko näytölle, toimii ilman verkkoyhteyttä ja tuntuu aivan natiivisovellukselta.",
    platforms: [
      {
        name: "iPhone ja iPad (Safari)",
        steps: [
          "Avaa sovellus Safarissa.",
          "Napauta jako-kuvaketta (neliö ja nuoli).",
          'Vieritä alas ja napauta "Lisää kotivalikkoon".',
          'Napauta "Lisää" — valmista.',
        ],
      },
      {
        name: "Android (Chrome)",
        steps: [
          "Avaa sovellus Chromessa.",
          "Napauta ⋮-valikkoa oikeasta yläkulmasta.",
          'Napauta "Asenna sovellus" (tai "Lisää kotivalikkoon").',
          "Vahvista — sovellus löytyy nyt kotivalikostasi.",
        ],
      },
      {
        name: "Tietokone (Chrome tai Edge)",
        steps: [
          "Avaa sovellus Chromessa tai Edgessä.",
          "Napsauta asennuskuvaketta osoiterivillä.",
          'Napsauta "Asenna".',
          "Sovellus avautuu omaan ikkunaansa, kuten mikä tahansa muu sovellus.",
        ],
      },
    ],
    backLabel: "← Takaisin etusivulle",
    backHref: "/fi/",
  },
};
