import { locales } from "../consts/locales";

export function getLocaleStaticPaths() {
    return locales.map((locale) => ({
        params: { locale },
    }));
}