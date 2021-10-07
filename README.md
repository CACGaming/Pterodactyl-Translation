# pterodactyl_translation
 Pterodactyl translation system using react-i18n and i18next

## Install
- Replace files
- Run ```yarn add i18next-browser-languagedetector i18next-http-backend```

## Modify
- Add ```import { usetranslation } from 'react-i18next';```
- Make variable ```const { t } = useTranslation();```
- Wrap text/keyname in ```t{}``` and define the key in the .json files.
