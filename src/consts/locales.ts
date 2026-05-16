export const locales = ["es-ES", "uk-UA", "en-EN", "ca-ES"] as const;
export const defaultLocale = "es-ES" as const;
export const labelsLocales = {
    'es-ES': {
        code: 'es-ES',
        name: 'Español',
        label: 'es',
        country: {
            simple: '',
            complex: 'ESPAÑA',
        },
        multispoken: true,
        icon: 'fi fi-es',
        group: 'es',
    },
    'uk-UA': {
        code: 'uk-UA',
        name: 'Українська',
        label: 'ua',
        country: {
            simple: 'UA',
            complex: 'УКРАЇНА',
        },
        multispoken: false,
        icon: 'fi fi-ua',
        group: 'uk',
    },
    'en-EN': {
        code: 'en-EN',
        name: 'English',
        label: 'en-UK',
        country: {
            simple: '',
            complex: 'UNITED KINGDOM',
        },
        multispoken: true,
        icon: 'fi fi-gb',
        group: 'en',
    },
    'ca-ES': {
        code: 'ca-ES',
        name: 'Català',
        label: 'cat',
        country: {
            simple: '',
            complex: 'ESPANYA',
        },
        multispoken: false,
        icon: 'fi fi-es-ct',
        group: 'es',
    },
};