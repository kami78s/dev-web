import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import getLanguage from "../helpers/getLanguage";

export default function useLocale() {
	const [locale, setLocale] = useState(getLanguage('/fr'));

	const { pathname } = useLocation();

	useEffect(() => {
		setLocale(getLanguage(pathname));
	}, [pathname]);

	return locale;
}