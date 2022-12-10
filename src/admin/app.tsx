import favicon from './extensions/favicon.png';
import logo from './extensions/logo.png';
import logoFull from './extensions/logo-full.png';

export default {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Clearlake Consulting",
        "Auth.form.welcome.subtitle": "Log in to your App",
        'app.components.LeftMenu.navbrand.title': 'Clearlake Consulting',
        'app.components.LeftMenu.navbrand.workplace': 'Dashboard',
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
      }
    }
  },
  bootstrap(app) {

  },
};
