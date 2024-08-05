import clsx from 'clsx';
import { useContext, useState } from 'react';

import { langContext } from '../context/languageContext';

export default function Select() {
  const { lang, setLang } = useContext(langContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative lang-selector"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(true)}
    >
      <select
        className={clsx(
            `w-full pl-12 py-4 border border-white text-base font-semibold font-inter text-white bg-background-accent rounded-lg`,
          { 'bg-france-flag': lang === 'fr', 'bg-england-flag': lang === 'en' }
        )}
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="fr" hidden>
          Français
        </option>
        <option value="en" hidden>
          English
        </option>
      </select>
      <ul
        className={clsx(
          'absolute top-14 left-0 flex flex-col w-full border border-t-0 text-white text-base',
          { hidden: !isHovered }
        )}
      >
        <li
          className="bg-france-flag pl-12 py-2 hover:bg-gray-600 hover:cursor-pointer"
          onClick={() => setLang('fr')}
        >
          FR
        </li>
        <li
          className="bg-england-flag pl-12 py-2 hover:bg-gray-600 hover:cursor-pointer"
          onClick={() => setLang('en')}
        >
          EN
        </li>
      </ul>
    </div>
  );
}