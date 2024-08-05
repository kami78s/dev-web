import localization from '../../localization.json';

export default function (pathname) {
  if (pathname.startsWith('/fr') || pathname === '/') {
    return localization.fr;
  }
  return localization.en;
}