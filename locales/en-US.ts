import type { Translations } from '.';

const t: Translations = {
  campaign: {
    donate: 'Donate',
    extra: 'A little more information...',
  },
  share: {
    title: 'Share',
    nonProfit: 'Our non-profit',
    toWebsite: 'Back to the page',
    toHub: 'See all our campaigns',
    shareTo: 'Share to',
    copyLink: 'Copy link',
  },
  footer: {
    madePossibleBy: 'Made possible by',
    tac: 'Terms and conditions',
    pp: 'Privacy policy',
  },
  donate: {
    title: 'Donate',
    next: 'Next',
    donation: 'Donation',
    submit: 'Donate',
    send: 'Send',
    chooseAmount: 'Choose an amount',
    fiscal: 'For a donation of €40 or more, you will receive a fiscal receipt (in Belgium).',
    raised: 'raised',
    canvasTitle: 'Thank you for your donation',
  },
  messages: {
    noMessages: 'No messages',
    title: 'Messages',
  },
  thanks: {
    toFiscal: 'To the fiscal page',
    toPage: 'To the page',
    download: 'Download image',
    share: 'Share image',
    title: 'Thank you for your donation!',
    fiscalTitle: 'Leave your fiscal details!',
    fiscalDescription: 'For a donation of €40 or more, you will receive a fiscal receipt (in Belgium). Fill in your details via the link below to receive the receipt.',
    shareTitle: 'Are you helping to spread this campaign?',
    shareDescription: 'By sharing this action on the social media below, you help us to spread this campaign further. This allows us to reach even more people and have a greater impact in achieving our goals.',
    shareImageLg: 'Don\'t forget to share the image on the left! By placing it in your story, you also encourage your friends to donate. The more people we reach, the better!',
    shareImageSm: 'Don\'t forget to share the image below! By placing it in your story, you also encourage your friends to donate. The more people we reach, the better!',
  },
  fiscal: {
    personalFields: 'Personal details',
    locationFields: 'Location',
    companyFields: 'Company details',
    fiscalSuccess: 'Your fiscal certificate has been successfully submitted!',
    fiscalError: 'An error occurred while submitting your fiscal certificate.',
    alreadyCreated: 'You have already created a fiscal certificate.',
    orderNotFound: 'Order not found.',
  },
  fields: {
    company: {
      name: 'Donate as a company',
      errors: {},
    },
    amount: {
      name: 'Amount',
      errors: {
        required: 'Amount required',
      },
    },
    name: {
      name: 'Name',
      errors: {
        required: 'Name required',
      },
    },
    description: {
      name: 'Message',
      errors: {
        required: 'Message required',
      },
    },
    coords: {
      name: 'Placement of your donation',
      errors: {
        required: 'placement required',
      },
    },
    email: {
      name: 'E-mail',
      errors: {
        required: 'E-mail required',
        email: 'E-mail invalid',
        regex: 'E-mail invalid',
        invalid: 'E-mail invalid',
      },
    },
    firstName: {
      name: 'First name',
      errors: {
        required: 'First name required',
      },
    },
    lastName: {
      name: 'Last name',
      errors: {
        required: 'Last name required',
      },
    },
    remark: {
      name: 'Remark',
      errors: {},
    },
    street: {
      name: 'Street',
      errors: {
        required: 'Street required',
      },
    },
    houseNumber: {
      name: 'House number',
      errors: {
        required: 'House number required',
      },
    },
    houseNumberSuffix: {
      name: 'House number suffix',
      errors: {
        required: 'House number suffix required',
      },
    },
    town: {
      name: 'City',
      errors: {
        required: 'City required',
      },
    },
    postalCode: {
      name: 'Postal code',
      errors: {
        required: 'Postal code required',
      },
    },
    anonymous: {
      name: 'Anonymous',
      errors: {},
    },
    nationalNr: {
      name: 'National number',
      errors: {
        required: 'National number required',
      },
    },
    gender: {
      name: 'Gender',
      errors: {
        required: 'Gender required',
      },
    },
    country: {
      name: 'Country',
      errors: {
        required: 'Country required',
      },
    },
    locality: {
      name: 'Locality',
      errors: {
        required: 'Locality required',
      },
    },
    streetNr: {
      name: 'Street and house number',
      errors: {
        required: 'Street and house number required',
      },
    },
    premise: {
      name: 'Premise',
      errors: {
        required: 'Premise required',
      },
    },
    companyName: {
      name: 'Company name',
      errors: {
        required: 'Company name required',
      },
    },
    companyNr: {
      name: 'Company number',
      errors: {
        required: 'Company number required',
      },
    },
    orderNr: {
      name: 'Order number',
      errors: {
        required: 'Order number required',
      },
    },
  },
};

export default t;
