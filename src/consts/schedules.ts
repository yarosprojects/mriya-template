import { i18n } from "./i18n.files";

type Translate = (typeof i18n)["es-ES"];

export const schedules = (translate: Translate) => {
    return [
        {
            course: translate.schedule.courses.first,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.ukrainian_language,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.maths,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.reading,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.art,
                },
            ],
        },

        {
            course: translate.schedule.courses.second,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.ukrainian_literature,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.maths,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.nature,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.english_language,
                },
            ],
        },

        {
            course: translate.schedule.courses.third,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.ukrainian_language,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.geography,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.maths,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.ukraine_history,
                },
            ],
        },

        {
            course: translate.schedule.courses.fourth,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.maths,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.ukrainian_literature,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.english_language,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.biology,
                },
            ],
        },

        {
            course: translate.schedule.courses.fifth,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.algebra,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.physics,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.ukrainian_language,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.world_history,
                },
            ],
        },

        {
            course: translate.schedule.courses.sixth,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.geometry,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.ukrainian_literature,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.biology,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.english_language,
                },
            ],
        },

        {
            course: translate.schedule.courses.seventh,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.algebra,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.physics,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.ukraine_history,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.geography,
                },
            ],
        },

        {
            course: translate.schedule.courses.eighth,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.chemistry,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.ukrainian_language,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.geometry,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.world_history,
                },
            ],
        },

        {
            course: translate.schedule.courses.ninth,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.algebra,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.biology,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.physics,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.ukrainian_literature,
                },
            ],
        },

        {
            course: translate.schedule.courses.tenth,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.astronomy,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.algebra,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.ukrainian_language,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.english_language,
                },
            ],
        },

        {
            course: translate.schedule.courses.eleventh,
            lessons: [
                {
                    type: "lesson",
                    time: "09:00",
                    title: translate.schedule.lessons.geometry,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `10 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "10:00",
                    title: translate.schedule.lessons.physics,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `15 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "11:00",
                    title: translate.schedule.lessons.ukrainian_literature,
                },
                {
                    type: "break",
                    label: translate.schedule.break,
                    duration: `20 ${translate.schedule.time_un}`,
                },
                {
                    type: "lesson",
                    time: "12:00",
                    title: translate.schedule.lessons.ukraine_history,
                },
            ],
        },
    ];
};