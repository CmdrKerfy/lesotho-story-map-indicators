var config = {
    style: 'mapbox://styles/kerfy/ckh52qwcb031619pb99pv42gv',
    accessToken: 'pk.eyJ1Ijoia2VyZnkiLCJhIjoiY2szOTE0dG43MDE4dDNqbzZ4ajdld3A1eCJ9.IYIY3O7YU3fZvR2izUZUGQ',
    showMarkers: false,
    theme: 'red',
    alignment: 'left',
    title: 'Indicator Analysis Within Lesotho',
    subtitle: 'An exploration of Treatment and Testing',
    footer: 'Source of Data: PEPFAR <br /> Source of Images: PEPFAR, Getty Images, Associated Press, VOA News, Bloomberg News, BBC News, Ruters.',
    chapters: [

        {
            id: 'Intro',
            title: 'Geographical Visualizations',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Games_Lesotho.jpg',
            description: 'This story map is based off a deep dive analysis of: <br /> <br /> TX_CURR - TX_NET - TX_NET_NEW <br /> TX_ML - TX_PVLS - TX_RTT <br /> HTS_TST and HTS_TST_POS <br /> <br />  These results are meant to be used in assisting with program improvement.<br /> ',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-1',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-1',
                opacity: 0.
            }]
        },

        {
            id: 'TXCURR-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/3_TX_CURR.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-1',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-1',
                opacity: 0
            }]
        },

        {
            id: 'TX-CURR',
            title: 'Indicator: TX_CURR',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Family_Lesotho.jpg',
            description: 'We will start with taking a closer look at TX_CURR. As you can see on the map there are strong concetrations in Hlotse Urban, Teya-Teyaneng, Mafeteng Urban, and Maseru City Councils. For this indicator, we will take a closer look at the density within Maseru CC.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-3',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-3',
                opacity: 0
            }]
        },

        {
            id: 'TX-CURR-Zoom',
            title: 'Maseru Community Council',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Couple_Lesotho.png',
            description: 'When taking a closer look, we can see that there are particular concentrations in the southeast part of the CC, near the border with Berea. While Borokhoaneng and Lower Seoli have much of it, high levels are consistent throughout the capital.',
            location: {
                center: [27.45210, -29.31503],
                zoom: 11.64,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-3',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-3',
                opacity: 0.
            }]
        },

        {
            id: 'TXNEW-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/4_TX_NEW.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-4',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-4',
                opacity: 0
            }]
        },

        {
            id: 'TX-NEW',
            title: 'Indicator: TX_NEW',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Hospital3.jpg',
            description: 'Next, we will move down the treatment cascade to TX_NEW. As you can see on the map there are strong concetrations in Maputose Urban, Teya-Teyaneng, Manonyane, Mafeteng, and Maseru City Councils. For this indicator, we will again take a closer look at the density within Maseru CC.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-4',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-4',
                opacity: 0
            }]
        },

        {
            id: 'TX-NEW-Zoom',
            title: 'Maseru Community Council',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Hospital2.JPG',
            description: 'When taking a closer look, we can see that there are particular concentrations the center of the CC, in Upper/Lower Thamae and New Europa neighbhorhoods.',
            location: {
                center: [27.45210, -29.31503],
                zoom: 11.64,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-4',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-4',
                opacity: 0.
            }]
        },


        {
            id: 'TXNETNEW-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/5_TX_NET_NEW.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-5',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-5',
                opacity: 0
            }]
        },

        {
            id: 'TX-NET-NEW',
            title: 'Indicator: TX_NET_NEW',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Family2_Lesotho.jpg',
            description: 'Continuing onto the twin indicator TX_NET_NEW, there are strong concetrations in Maputose Urban, Teya-Teyaneng, Manonyane, Mafeteng, and Maseru City Councils. For this indicator, we will again take a closer look at the density within Maseru CC.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-5',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-5',
                opacity: 0
            }]
        },

        {
            id: 'Aspect3-Week-Four',
            title: 'Week Four Staff Capacity',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/news/bloomberg1.jpg',
            description: 'By week 4, both doctor and nurse capacity are projected to be just a fraction of its current status.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week4',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week4',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week4',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week4',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Aspect3-Week-Five',
            title: 'Staff Capacity Week 5 & 6',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/kenyahos.jpg',
            description: 'By week 5, the outbreak has caused an unsustainable strain on exisiting healthcare worker capacity. Total available healthcare workers are a fraction of inital capacity. By week 6, the healthcare system will be so overloaded, irreparable damage will likely have occurred. ',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week5-6',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week5-6',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week5-6',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week5-6',
                    opacity: 0
                }
            ]
        },

        // {
        //     id: 'Scenario5-Week6',
        //     title: 'Scenario 5: (Week 6)',
        //     image: '/img/news/reuters1.jpg',
        //     description: 'In contrast to the pervious map, Scenario 5, Week 6, sees even more dramatic dropoffs',
        //     location: {
        //         center: [35.40804, -0.19256],
        //         zoom: 5.71,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'April 8th - Doc Week5-6',
        //         opacity: 0.45
        //     },
        //     {
        //         layer: 'April 8th - Nurse Week5-6',
        //         opacity: 0.45
        //     }
        // ],
        //     onChapterExit: [{
        //         layer: 'April 8th - Doc Week5-6',
        //         opacity: 0.
        //     },
        //     {
        //         layer: 'April 8th - Nurse Week5-6',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'MO-Explain',
            title: 'A Special Note on Medical Officers',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h26.jpg',
            description: 'Medical Officers are appointed by the government and typically focused on preventive care. Their role can vary between technical and managerial roles, depending on clinc needs. While accounted for in this study, their numbers stay relatively consistent throughout the predicted outbreak.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/chapter_titles/PLHIV.png',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-Explain',
            title: 'Current HIV-Positive Kenyan Patients',
            description: 'While we started this visualization on doctors, nurses, and medical officers, it is important to also focus on the effects COVID will have on people living with HIV.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S1-Week1',
            title: 'SCENARIO #1, WEEK 1',
            description: 'Starting with the Base Scenario, we can see the effects of COVID on the number of people living with HIV visiting medical facilities.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S1W1',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S1W1',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S1-Week6',
            title: 'SCENARIO #1, WEEK 6',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h14.jpg',
            description: '...and the expected increase by week 6.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S1W6',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S1W6',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S5-Week1',
            title: 'SCENARIO #5, WEEK 1',
            description: 'Similarly, we can look at the Scenario #5 projection of the number facility visits by PLHIV, starting with week 1.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S5W1',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S5W1',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S5-Week6',
            title: 'SCENARIO #5, WEEK 6',
            //description: 'In contrast, the last week of scenario #5:',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/news/nationmediagroup.jpg',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S5W6',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S5W6',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-COVID-S1',
            title: 'People Living with HIV (No Viral Supression)',
            description: 'We can also use the models in this study to examine the relationship between COVID and the HIV population that is not virally suppressed. <br /> <br /> This map depicts the amount of people non-virally suppressed HIV population expected to become infected by COVID-19, based on Scenario #1 (Base)',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV NVS COVID S1',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV NVS COVID S1',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-COVID-S4',
            title: 'SCENARIO #5, WEEK 6',
            //description: 'In comparison, Scenario #5.',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h25.jpg',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV NVS COVID S6',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV NVS COVID S6',
                opacity: 0.
            }]
        },

        {
            id: 'NextSteps-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/chapter_titles/nextsteps.png',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }]
        },

        {
            id: 'NextSteps-Explain',
            // title: 'Putting it All Together',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h7.jpg',
            description: 'We hope that the findings of this study can use by key stakeholders within Kenya to help with their planning and resource allocation',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }]
        },



    ]
};


// location: {
//     center: [35.70804, 0.01256],
//     zoom: 6.26,
//     pitch: 0.00,
//     bearing: 0.00
// },

// {
//     // Outstanding: 1) Need new picture.  
//     id: 'GenCOVID-Intro',
//     image: '/img/chapter_titles/GeHeCOVID.png',
//     location: {
//         center: [35.40804, -0.19256],
//         zoom: 5.71,
//         pitch: 0.00,
//         bearing: 0.00
//     },
//     onChapterEnter: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0
//     }
// ],
//     onChapterExit: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0.
//     }]
// },

// {
//     // Outstanding: 1) Need new picture.  
//     id: 'GeHeCOVID-Explain',
//     title: 'Putting it All Together',
//     description: 'adsfasdfjkas;dfj;asjdfja;sdfjka;jsdklf',
//     location: {
//         center: [35.40804, -0.19256],
//         zoom: 5.71,
//         pitch: 0.00,
//         bearing: 0.00
//     },
//     onChapterEnter: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0
//     }
// ],
//     onChapterExit: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0.
//     }]
// },