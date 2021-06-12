import AsyncStorage from '@react-native-community/async-storage'; // 1
import React, {createContext, useState, useRef, useLayoutEffect} from 'react';
import LocalizedStrings from 'react-native-localization'; // 2
import * as RNLocalize from 'react-native-localize'; // 3
import ps from '../localization/ps.json';
import fa from '../localization/fa.json';
import {APP_LANGUAGE} from '../constants';

const DEFAULT_LANGUAGE = 'fa';

const languages = {fa, ps};

const translations = new LocalizedStrings(languages); // 4

export const LocalizationContext = createContext({
  // 5
  translations,
  setAppLanguage: language => {}, // 6
  appLanguage: DEFAULT_LANGUAGE, // 7
});

export const LocalizationProvider = ({children}) => {
  // 9
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const initialRender = useRef(false);

  // 11
  const setLanguage = language => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  // for initial app loading
  useLayoutEffect(() => {
    if (initialRender.current === true) return;

    initialRender.current = true;
    (async () => {
      const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

      if (currentLanguage) {
        translations.setLanguage(currentLanguage);
        setAppLanguage(currentLanguage);
      } else {
        // get current local
        let currentLocal = RNLocalize.getLocales()[0].languageCode;
        // do we have translation for this local
        const supportedLocaleCodes = translations.getAvailableLanguages();
        // if translations not include current local
        if (!supportedLocaleCodes.includes(currentLocal)) {
          // then
          currentLocal = 'fa';
        }
        setLanguage(currentLocal);
      }
    })();
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage, // 10
        appLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// export const withLocalization = Component => props =>
//   (
//     <LocalizationContext.Consumer>
//       {translate => <Component translate={translate} {...props} />}
//     </LocalizationContext.Consumer>
//   );
