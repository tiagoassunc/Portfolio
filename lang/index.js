import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'My Knowledge':
        '→ Development of frontend systems: languages: HTML, CSS - Sass and JS - TS | Structures: Reat, Redux, NEXT and Other Meta-Frameworks → Backend system development: Languages: Node - JS and TS | Structures: Express, Firebase Meta-Frameworks → Automated testing: Unit tests, integration tests, acceptance tests → Maintenance of continuous integration and deployment policies → Process and agile methodologies → Search and application of good practice market for the Software development'
    }
  },
  pt: {
    translation: {
      'My Knowledge':
        '→ Desenvolvimento de sistemas frontend: Linguagens: Html, Css - Sass e Js - Ts | Frameworks: React, Redux, Next e outros meta-frameworks → Desenvolvimento de sistemas backend: Linguagens: Node - Js e Ts | Frameworks: Express, Firebase e outros meta-frameworks → Criação de testes automatizados: Testes unitários, testes de integração, testes de aceitação → Manutenção de políticas de integração e deploy contínua → Prática de processos e metodologias ágeis → Pesquisa e aplicação de boas práticas do mercado para o desenvolvimento de software'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
