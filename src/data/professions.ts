// interface IProfessions {
//     [name: string]: {
//         stages: {
//             [name: string]: string
//         },
//         name:string
//     }
// }
export const PROFESSIONS = Object.freeze({
    TOI: {
        STAGES: {
            MECHIN: 'מכין',
            BASIC: 'בסיסי',
            RISHONI_NATUM: 'ראשוני נתו"מ',
            MITKADEM_TOVALA: 'מתקדם תובלה',
            MITKADEM_NATUM: 'מתקדם נתו"מ',
        },
        NAME: 'מגמת תו"י',
    },
    KRAV: {
        STAGES: {
            MIYUN: 'מיון',
            CHECK_KRAV: `צ'ק קרב`,
            CHECK_NAVATIM: `צ'ק נווטים`,
            RISHONI_KRAV: 'ראשוני קרב',
            RISHONI_NAVATIM: 'ראשוני נווטים',
            MITKADEM_KRAV: 'מתקדם קרב',
            MITKADEM_NAVATIM: 'מתקדם נווטים',
        },
        NAME: 'מגמת קרב'
    },
    MESOKIM: {
        STAGES: {
            CHECK_MESOKIM: "צ'ק מסוקים",
            RISHONI_MESOKIM: 'ראשוני מסוקים',
            MITKADEM_MESOKIM: 'מתקדם מסוקים',
        },
        NAME: 'מגמת מסוקים'
    },
    MADAR: {
         STAGES: {
            MEVOOT: 'מבואות',
            MASLOOLIM: 'מסלולים',
        },
        NAME: 'מגמת מד"ר'
    },
})

