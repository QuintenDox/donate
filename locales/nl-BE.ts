import type { Translations } from '.';

const t: Translations = {
  campaign: {
    donate: 'Doneer',
    extra: 'Nog wat informatie...',
  },
  share: {
    title: 'Delen',
    nonProfit: 'Onze non-profit',
    toDonate: 'Terug naar de pagina',
    toWebsite: 'Naar onze website',
    toHub: 'Bekijk al onze acties',
    shareTo: 'Delen op',
    copyLink: 'Kopieer pagina-link',
  },
  footer: {
    madePossibleBy: 'Mogelijk gemaakt door',
    tac: 'Gebruiksvoorwaarden',
    pp: 'Privacybeleid',
  },
  donate: {
    title: 'Doneer',
    next: 'Volgende',
    donation: 'Donatie',
    donationTo: 'Donatie aan {org}',
    submit: 'Doneer',
    send: 'Verstuur',
    chooseAmount: 'Kies zelf een bedrag',
    fiscal: 'Bij een donatie van €40 of meer ontvang je (in België) een fiscaal attest. Zo krijg je voor een donatie van €50 maar liefst €22,50 terug van de belastingen.',
    raised: 'opgehaald',
    canvasTitle: 'Bedankt voor je donatie',
    address: 'Adres',
    phone: 'Telefoonnummer',
    email: 'E-mailadres',
    vatNr: 'BTW-nummer',
    error: 'Er is een fout opgetreden bij het verwerken van je donatie. Probeer het later opnieuw.',
    stripePublishKey: 'This API call cannot be made with a publishable API key. Please use a secret API key.',
    bottomText: {
      general: 'We zullen je persoonlijke gegevens altijd veilig opslaan en alleen verwerken voor het doel waarvoor ze zijn verzameld.',
      country: {
        UK: 'Door dit formulier in te vullen, deel ik mee dat ik een belastingbetaler in het Verenigd Koninkrijk ben en dat ik mijn donatie wil doen. Ik begrijp dat als ik minder inkomstenbelasting en/of vermogenswinstbelasting betaal dan het bedrag van de belastingvermindering die op al mijn donaties in dat belastingjaar wordt geclaimd, het mijn verantwoordelijkheid is om het verschil te betalen.',
      },
    },
  },
  messages: {
    noMessages: 'Geen berichten',
    title: 'Berichten',
  },
  thanks: {
    toFiscal: 'Fiscaal attest invullen',
    toPage: 'Terugkeren',
    download: 'Download afbeelding',
    share: 'Deel deze afbeelding',
    title: 'Bedankt voor je donatie!',
    fiscalTitle: 'Laat je fiscale gegevens achter!',
    fiscalDescription: 'Voor een donatie van €40 of meer ontvangt je (in België) een fiscaal attest. Vul via onderstaande link je gegevens in om het attest te ontvangen.',
    shareTitle: 'Help jij mee deze campagne rond te laten gaan?',
    shareDescription: 'Door deze actie te delen op onderstaande sociale media, help je ons om deze campagne verder te verspreiden. Hierdoor kunnen we nog meer mensen bereiken en een grotere impact hebben om onze doelen te bereiken.',
    shareImageLg: 'Vergeet ook zeker de afbeelding links niet te delen! Door deze op je story te plaatsen spreek je ook je vrienden aan om te doneren. Hoe meer mensen we bereiken, hoe beter!',
    shareImageSm: 'Vergeet ook zeker de afbeelding onderaan niet te delen! Door deze op je story te plaatsen spreek je ook je vrienden aan om te doneren. Hoe meer mensen we bereiken, hoe beter!',
  },
  fiscal: {
    personalFields: 'Persoonlijke gegevens',
    locationFields: 'Locatie',
    companyFields: 'Bedrijfsgegevens',
    fiscalSuccess: 'Uw fiscaal certificaat is succesvol ingediend!',
    fiscalError: 'Er is een fout opgetreden bij het indienen van uw fiscaal certificaat.',
    alreadyCreated: 'U heeft al een fiscaal certificaat aangemaakt.',
    orderNotFound: 'Bestelling niet gevonden.',
  },
  fields: {
    company: {
      name: 'Doneren als bedrijf',
      errors: {},
    },
    amount: {
      name: 'Bedrag',
      errors: {
        required: 'Bedrag is verplicht',
      },
    },
    name: {
      name: 'Naam',
      errors: {
        required: 'Naam is verplicht',
      },
    },
    description: {
      name: 'Bericht',
      errors: {
        required: 'Bericht is verplicht',
      },
    },
    coords: {
      name: 'Van waar doneert u?',
      errors: {
        required: 'Locatie verplicht (moet niet uw exacte adres te zijn)',
      },
    },
    email: {
      name: 'E-mail',
      errors: {
        required: 'E-mail is verplicht',
        email: 'Ongeldig e-mailadres',
        regex: 'Ongeldig e-mailadres',
        invalid: 'Ongeldig e-mailadres',
      },
    },
    firstName: {
      name: 'Voornaam',
      errors: {
        required: 'Voornaam is verplicht',
      },
    },
    lastName: {
      name: 'Achternaam',
      errors: {
        required: 'Achternaam is verplicht',
      },
    },
    remark: {
      name: 'Opmerking',
      errors: {},
    },
    street: {
      name: 'Straat',
      errors: {
        required: 'Straat is verplicht',
      },
    },
    houseNumber: {
      name: 'Huisnummer',
      errors: {
        required: 'Huisnummer is verplicht',
      },
    },
    houseNumberSuffix: {
      name: 'Toevoeging',
      errors: {
        required: 'Toevoeging is verplicht',
      },
    },
    town: {
      name: 'Gemeente',
      errors: {
        required: 'Plaats is verplicht',
      },
    },
    postalCode: {
      name: 'Postcode',
      errors: {
        required: 'Postcode is verplicht',
      },
    },
    anonymous: {
      name: 'Anoniem doneren',
      errors: {},
    },
    nationalNr: {
      name: 'Rijksregisternummer',
      errors: {
        required: 'Rijksregisternummer is verplicht',
      },
    },
    gender: {
      name: 'Geslacht',
      errors: {
        required: 'Geslacht is verplicht',
      },
    },
    country: {
      name: 'Land',
      errors: {
        required: 'Land is verplicht',
      },
    },
    locality: {
      name: 'Gemeente',
      errors: {
        required: 'Gemeente is verplicht',
      },
    },
    streetNr: {
      name: 'Straat en huisnummer',
      errors: {
        required: 'Straat en huisnummer is verplicht',
      },
    },
    premise: {
      name: 'Bus',
      errors: {
        required: 'Bus is verplicht',
      },
    },
    companyName: {
      name: 'Bedrijfsnaam',
      errors: {
        required: 'Bedrijfsnaam is verplicht',
      },
    },
    companyNr: {
      name: 'Ondernemingsnummer',
      errors: {
        required: 'Ondernemingsnummer is verplicht',
      },
    },
    orderNr: {
      name: 'Bestelnummer',
      errors: {
        required: 'Bestelnummer is verplicht',
      },
    },
    wantsFiscal: {
      name: 'Ik wil een fiscaal attest ontvangen',
      errors: {},
    },
    wantsFiscalUK: {
      name: 'Ik wil een Gift Aid verklaring ontvangen',
      errors: {},
    },
  },
};

export default t;
