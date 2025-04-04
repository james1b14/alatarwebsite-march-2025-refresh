import 'server-only';

// Define language types to ensure type safety
export type Locale = 'en-GB' | 'ur' | 'ro' | 'pl';

// Define dictionary structure
export interface Dictionary {
  navigation: {
    home: string;
    services: string;
    about: string;
    contact: string;
    termsOfUse: string;
    transportHaulage: string;
    freightForwarding: string;
    specialisedHaulage: string;
    warehousing: string;
    languageSwitcher: string;
  };
  common: {
    readMore: string;
    contactUs: string;
    getAQuote: string;
    learnMore: string;
    viewAllServices: string;
    email: string;
    phone: string;
    address: string;
    privacyPolicy: string;
    termsOfUse: string;
    copyright: string;
    allRightsReserved: string;
  };
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      subtitle: string;
      content: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
    };
    stats: {
      title: string;
      subtitle: string;
      stat1: {
        value: string;
        label: string;
      };
      stat2: {
        value: string;
        label: string;
      };
      stat3: {
        value: string;
        label: string;
      };
      stat4: {
        value: string;
        label: string;
      };
    };
    contact: {
      title: string;
      subtitle: string;
      formTitle: string;
    };
  };
  services: {
    common: {
      title: string;
      subtitle: string;
      cta: string;
    };
    transportHaulage: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        feature1: {
          title: string;
          description: string;
        };
        feature2: {
          title: string;
          description: string;
        };
        feature3: {
          title: string;
          description: string;
        };
        feature4: {
          title: string;
          description: string;
        };
      };
    };
    freightForwarding: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        feature1: {
          title: string;
          description: string;
        };
        feature2: {
          title: string;
          description: string;
        };
        feature3: {
          title: string;
          description: string;
        };
        feature4: {
          title: string;
          description: string;
        };
      };
    };
    specialisedHaulage: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        feature1: {
          title: string;
          description: string;
        };
        feature2: {
          title: string;
          description: string;
        };
        feature3: {
          title: string;
          description: string;
        };
        feature4: {
          title: string;
          description: string;
        };
      };
    };
    warehousing: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        feature1: {
          title: string;
          description: string;
        };
        feature2: {
          title: string;
          description: string;
        };
        feature3: {
          title: string;
          description: string;
        };
        feature4: {
          title: string;
          description: string;
        };
      };
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      value1: {
        title: string;
        description: string;
      };
      value2: {
        title: string;
        description: string;
      };
      value3: {
        title: string;
        description: string;
      };
    };
    team: {
      title: string;
      subtitle: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    addressTitle: string;
    hoursTitle: string;
    hours: string;
  };
  termsOfUse: {
    title: string;
    subtitle: string;
    sections: {
      introduction: {
        title: string;
        content: string;
      };
      definitions: {
        title: string;
        content: string;
      };
      serviceUsage: {
        title: string;
        content: string;
      };
      userObligations: {
        title: string;
        content: string;
      };
      intellectualProperty: {
        title: string;
        content: string;
      };
      liability: {
        title: string;
        content: string;
      };
      termsChanges: {
        title: string;
        content: string;
      };
      governingLaw: {
        title: string;
        content: string;
      };
    };
  };
}

// Cache dictionaries for better performance
const dictionaries = {
  'en-GB': () => import('./dictionaries/en-GB.json').then((module) => module.default),
  'ur': () => import('./dictionaries/ur.json').then((module) => module.default),
  'ro': () => import('./dictionaries/ro.json').then((module) => module.default),
  'pl': () => import('./dictionaries/pl.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    return await dictionaries[locale]();
  } catch {
    // Just log the error without creating any unused variable
    console.error(`Dictionary for locale ${locale} not found, falling back to en-GB`);
    return await dictionaries['en-GB']();
  }
};
