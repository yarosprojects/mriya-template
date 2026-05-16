const navigation = [
    {
        id: "home",
        name: 'Home',
        href: '/',
        translate_key: 'home',
        children: [],
    },
    {
        id: "teach-staff",
        name: 'Teach Staff',
        href: '/teach-staff/',
        translate_key: 'teach-staff',
        children: [],
    },
    {
        id: "schedule",
        name: 'Schedule',
        href: '/schedule/',
        translate_key: 'schedule',
        children: [],
    },
    {
        id: "registration",
        name: 'Registration',
        href: '/registration/',
        translate_key: 'registration',
        children: [],
    },
    {
        id: "about",
        name: 'About',
        href: '/about/',
        translate_key: 'about',
        children: [],
    },
    {
        id: "contact",
        name: 'Contact',
        href: '/contact/',
        translate_key: 'contact',
        children: [],
    },
    {
        id: "more",
        name: 'More',
        href: '/#/',
        translate_key: 'more',
        children: [
            {
                id: "statute",
                name: 'Statute',
                href: '/statute/',
                translate_key: 'statute',
            },
            {
                id: "requirements",
                name: 'Requirements',
                href: '/requirements/',
                translate_key: 'requirements',
            },
            {
                id: "our-graduates",
                name: 'Our graduates',
                href: '/our-graduates/',
                translate_key: 'our-graduates',
            },
        ],
    },
] as const;

export default navigation;