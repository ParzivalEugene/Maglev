export const checkLanguage = (lang) => {
  if (language.languages.includes(lang)) {
    return lang
  }
  return "ru"
}


export const language = {
  languages: ["ru", "en"],
  navbar: {
    tabs: {
      about: {
        text: function (lang) {
          const text = {
            ru: "О проекте",
            en: "About"
          }
          return lang === "ru" ? text.ru : text.en
        },
        link: "/about/"
      },
      team: {
        text: function (lang) {
          const text = {
            ru: "Команда",
            en: "Team"
          }
          return lang === "ru" ? text.ru : text.en
        },
        link: "/team/"
      },
      docs: {
        text: function (lang) {
          const text = {
            ru: "Документация",
            en: "Documentation"
          }
          return lang === "ru" ? text.ru : text.en
        },
        link: "/docs/"
      }
    },
    button: {
      text: function (lang) {
        const text = {
          ru: "Спонсировать",
          en: "Sponsor"
        }
        return lang === "ru" ? text.ru : text.en
      },
      link: ""
    }
  },
  footer: {
    info_section: [
      {
        title: function (lang) {
          const text = {
            ru: "Информация о проекте",
            en: "Project information"
          }
          return lang === "ru" ? text.ru : text.en
        },
        links: [
          {
            text: function (lang) {
              const text = {
                ru: "Исследования",
                en: "Researches"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: ""
          },
          {
            text: function (lang) {
              const text = {
                ru: "Документация",
                en: "Documentation"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: ""
          },
          {
            text: function (lang) {
              const text = {
                ru: "Расчеты",
                en: "Calculation"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: ""
          }
        ]
      },
      {
        title: function (lang) {
          const text = {
            ru: "Ресурcы",
            en: "Resources"
          }
          return lang === "ru" ? text.ru : text.en
        },
        links: [
          {
            text: function (lang) {
              const text = {
                ru: "Google.Drive",
                en: "Google.Drive"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: ""
          },
          {
            text: function (lang) {
              const text = {
                ru: "GitHub",
                en: "GitHub"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: ""
          },
        ]
      },
      {
        title: function (lang) {
          const text = {
            ru: "Связь с командой",
            en: "Contacts"
          }
          return lang === "ru" ? text.ru : text.en
        },
        links: [
          {
            text: function (lang) {
              const text = {
                ru: "michkov.eugene@gmail.com",
                en: "michkov.eugene@gmail.com"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: "mailto:michkov.eugene@gmail.com"
          },
          {
            text: function (lang) {
              const text = {
                ru: "harser@gmail.com",
                en: "harser@gmail.com"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: "mailto:harser@gmail.com"
          },
        ]
      },
      {
        title: function (lang) {
          const text = {
            ru: "Спонсорство",
            en: "Sponsorship"
          }
          return lang === "ru" ? text.ru : text.en
        },
        links: [
          {
            text: function (lang) {
              const text = {
                ru: "Поддержать проект",
                en: "Support project"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: ""
          }
        ]
      },
      {
        title: function (lang) {
          const text = {
            ru: "Язык / Language",
            en: "Язык / Language"
          }
          return lang === "ru" ? text.ru : text.en
        },
        links: [
          {
            text: function (lang) {
              const text = {
                ru: "Русский",
                en: "Русский"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: "special-ru"
          },
          {
            text: function (lang) {
              const text = {
                ru: "English",
                en: "English"
              }
              return lang === "ru" ? text.ru : text.en
            },
            link: "special-en"
          }
        ]
      },
    ]
  },
  main: {
    hero: {
      title: function (lang) {
        const text = {
          ru: "Магнитная Левитационная Технология",
          en: "Magnetic Levitation Technology"
        }
        return lang === "ru" ? text.ru : text.en
      },
      paragraphs: {
        one: function (lang) {
          const text = {
            ru: "Революция в мире общественного транспорта и трансортных " +
              "технологий.",
            en: "A revolution in the world of public transport and transport " +
              "technologies."
          }
          return lang === "ru" ? text.ru : text.en
        },
        two: function (lang) {
          const text = {
            ru: "Проект, открывающий дверь в будущее человечества.",
            en: "A project that opens the door to the future of humanity."
          }
          return lang === "ru" ? text.ru : text.en
        },
      }
    }
  }
}