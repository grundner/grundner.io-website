/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    guiOptions: {
        consentModal: {
            layout: 'cloud',
            position: 'bottom center',
            flipButtons: false,
            equalWeightButtons: true
        },
        preferencesModal: {
            layout: 'box',
            // position: 'left right',
            flipButtons: false,
            equalWeightButtons: true
        }
    },
    
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: '_gid' },
              { name: '_gat' }
            ]
          },
        }
    },

    language: {
        default: 'de',
        translations: {
            de: {
                consentModal: {
                    title: 'Ich nutze Cookies',
                    description: 'Diese Website nutzt notwendige Cookies für den Betrieb. Mit Ihrer Zustimmung verwenden wir zusätzlich Statistik-Cookies (Google Analytics 4), um unsere Inhalte zu optimieren.',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    showPreferencesBtn: 'Individuell anpassen'
                },
                preferencesModal: {
                    title: 'Cookie-Einstellungen',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    savePreferencesBtn: 'Akuelle Auswahl akzeptieren',
                    closeIconLabel: 'Schließen',
                    sections: [
                        {
                            title: 'Ich nutze Cookies',
                            description: 'Diese Website nutzt notwendige Cookies für den Betrieb. Mit Ihrer Zustimmung verwenden wir zusätzlich Statistik-Cookies (Google Analytics 4), um unsere Inhalte zu optimieren.'
                        },
                        {
                            title: 'Notwendige Cookies',
                            description: 'Essenzielle Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Nutzung der Website erforderlich. Diese Cookies können nicht deaktiviert werden.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance und Analytics',
                            description: 'Diese Cookies erfassen Informationen darüber, wie Sie meine Website nutzen. Alle Daten werden anonymisiert und können nicht dazu verwendet werden, Sie zu identifizieren.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Weitere Informationen',
                            description: 'Für Fragen zum Thema Datenschutz melden Sie sich bitte gerne direkt bei mir: <a href="mailto:stephan@grundner.io">stephan@grundner.io</a>'
                        }
                    ]
                }
            }
        }
    }
});