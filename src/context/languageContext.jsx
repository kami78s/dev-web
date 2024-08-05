import { useState, createContext } from "react";

// Language Context
export const langContext = createContext();

import useLocale from "../hooks/useLocale";

export default function LanguageContext({ children }) {
  const [lang, setLang] = useState('fr');
  const locale = useLocale();

    return (
      <langContext.Provider value={{ lang, setLang, locale }}>
        {children}
      </langContext.Provider>
    );
  }