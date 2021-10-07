import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(ChainedBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: process.env.NODE_ENV !== 'production',
        fallbackLng: 'en-US',

        backend: {
            backends: [
              LocalStorageBackend,
              HttpBackend
            ],
            backendOptions: [{
              expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
            }, {
              loadPath: '/locales/{{lng}}.json'
            }],
        },
        react: { 
            useSuspense: false //   <---- this will do the magic
          }

    });

// i18n.loadNamespaces(['validation']);

export default i18n;
