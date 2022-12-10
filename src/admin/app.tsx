import favicon from './extensions/favicon.png';
import logo from './extensions/logo.png';
import logoFull from './extensions/logo-full.png';

export default {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Clearlake Consulting",
        "Auth.form.welcome.subtitle": "Contract register",
        'app.components.LeftMenu.navbrand.title': 'Clearlake Consulting',
        'app.components.LeftMenu.navbrand.workplace': 'Contract register',
      },
    },
    head: {
      favicon: favicon,
    },
    auth: {
      logo: logoFull
    },
    menu: {
      logo: logo
    },
    tutorials: false,
    notifications: {
      releases: false
    },
    theme: {
      dark: {
        colors: {
          buttonPrimary500: '#00bbf4',
          buttonPrimary600: '#1c6cd2',
          primary500: '#00bbf4',
          primary600: '#1c6cd2',
          primary700: '#00bbf4'
        }
      },
      light: {
        colors: {
          buttonPrimary500: '#1c6cd2',
          buttonPrimary600: '#00bbf4',
          primary500: '#1c6cd2',
          primary600: '#00bbf4',
          primary700: '#1c6cd2'
        }
      }
    }
  },
  bootstrap(app) {

  },
};
