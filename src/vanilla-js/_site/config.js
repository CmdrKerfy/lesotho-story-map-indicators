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
            id: 'HTS_TST-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/1_HTS_TST.png',
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
            id: 'HTS_TST',
            title: 'Indicator: HTS_TST',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/PMTCT_Lesotho.jpg',
            description: 'Switching to testing, most of the HIV related testing occurs within Mohale\'s Hoek Urban Council and Maseru City Council, with the majority occuring in the former.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-1',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-1',
                opacity: 0
            }]
        },

        // {
        //     id: 'HTS-TST-Zoom',
        //     title: 'Mohale\'s Hoek Urban Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Testing.png',
        //     description: 'Within Mohale\'s Hoek Urban Council, testing is primarily in the northeast, using Nts\'ekhe Hospital, located west of Mohale\'s Hoek High School',
        //     location: {
        //         center: [27.42334, -30.16053],
        //         zoom: 12.21,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-1',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-1',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'HTS_TST-POS-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/2_HTS_TST_POS.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-2',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-2',
                opacity: 0
            }]
        },

        {
            id: 'HTS-TST-POS',
            title: 'Indicator: HTS_TST_POS',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Testing2.jpg',
            description: 'When isolating for postive results, the testing landscape changes slightly. While Mohale\'s Hoek Urban Council and Maseru City Council are still the focus, Mafeteng Urban Council has also reported an above average amount of positive tests. As the Mohale\'s Hoek Urban Council outlook is the same as HTS_TST, we will instead do a deeper dive into Maseru City Council.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-2',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-2',
                opacity: 0
            }]
        },

        // {
        //     id: 'HTS-TST-POS-Zoom',
        //     title: 'Maseru Community Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Testing3.jpg',
        //     description: 'Postive tests are mostly evenly distributed around the health facilities within Maseru with particularly high amouonts around Maseru East, Lower/Upper Thame, White City, and Ha Motseoneng.',
        //     location: {
        //         center: [27.45210, -29.31503],
        //         zoom: 11.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-2',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-2',
        //         opacity: 0
        //     }]
        // },

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

        // {
        //     id: 'TX-NEW-Zoom',
        //     title: 'Maseru Community Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Hospital2.JPG',
        //     description: 'When taking a closer look, we can see that there are particular concentrations the center of the CC, in Upper/Lower Thamae and New Europa neighbhorhoods.',
        //     location: {
        //         center: [27.45210, -29.31503],
        //         zoom: 11.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-4',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-4',
        //         opacity: 0.
        //     }]
        // },

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

        // {
        //     id: 'TX-CURR-Zoom',
        //     title: 'Maseru Community Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Couple_Lesotho.png',
        //     description: 'When taking a closer look, we can see that there are particular concentrations in the southeast part of the CC, near the border with Berea. While Borokhoaneng and Lower Seoli have much of it, high levels are consistent throughout the capital.',
        //     location: {
        //         center: [27.45210, -29.31503],
        //         zoom: 11.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-3',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-3',
        //         opacity: 0.
        //     }]
        // },

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
            description: 'Continuing onto the twin indicator TX_NET_NEW, the visualization has a more dramatic shift. Most areas would be considered moderate losses, symbolized with orange (~ -200) with only Mamafubelu and Maseru City Councils higher losses Gains, symbolized with green, are only occuring in Qhoasing and Maseru City Councils. For consistency, we will again zoom into Maseru.',
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

        // {
        //     id: 'TX-NET-NEW-Zoom',
        //     title: 'Maseru Community Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/AIDS2.jpg',
        //     description: 'Upon closer inspection, while there are losses across the city, in particular Maseru East, there have been significant gains (dark green) within the city center.',
        //     location: {
        //         center: [27.45210, -29.31503],
        //         zoom: 11.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-5',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-5',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'TXML-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/6_TX_ML.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-6',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-6',
                opacity: 0
            }]
        },

        {
            id: 'TX-ML',
            title: 'Indicator: TX_ML',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Family4.jpg',
            description: 'Examining mortality and loss within Lesotho also causes a notable shift in the map. For this indicator, there are only strong correlations within Mapoteng and Maseru City Councils, with a focus on the latter',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-6',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-6',
                opacity: 0
            }]
        },

        // {
        //     id: 'TX-ML-Zoom',
        //     title: 'Maseru Community Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/AIDS.jpg',
        //     description: 'When observing the capital, it becomes obvious that the only neighborhood worth highlighting is, again, the Lower/Upper Thame',
        //     location: {
        //         center: [27.45210, -29.31503],
        //         zoom: 11.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-6',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-6',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'TXRTT-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/8_TX_RTT.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-8',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-8',
                opacity: 0
            }]
        },

        {
            id: 'TX-RTT',
            title: 'Indicator: TX_RTT',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Family5.jpg',
            description: 'Patients returning to treatment diverge noticeably from the other treatment indicators. Unlike the others, heavy concentrations are instead within Teya-Teyaneng, Mapoteng, and at its highest, Mamafubelu Community Councils.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-8',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-8',
                opacity: 0
            }]
        },

        // {
        //     id: 'TX-RTT-Zoom',
        //     title: 'Teya-Teyaneng, Mapoteng, and Mamafubelu Community Councils.',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/PHI_Lesotho.jpg',
        //     description: 'Within Mamafubelu, return to follow-up is concentrated in on the east side, near the border with Bolahla. The health facility, Pontmain H/C, is located east of Ha Fako and Ha Sekeleme. <br /> <br /> In Mapoteng Community Council, the return to treatment population is concentrated in the NW quadrent of the city. Specifically, Maluti Adventist Hospital.<br /> <br /> For Teya-Teyaneng, patients were returning to followup using the Berea Government Hospital, located near the center of the city.',
        //     location: {
        //         center: [27.82559, -28.96590],
        //         zoom: 9.58,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-8',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-8',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'TXPVLS-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/7_TX_PVLS.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-7',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-7',
                opacity: 0
            }]
        },

        {
            id: 'TX-PVLS',
            title: 'Indicator: TX_PVLS',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/PHI_Lesotho.jpg',
            description: 'Analyzing the percentage of ART patients with a suppressed viral load show much higher correlations around the country, with hotspots in Mohale\'s Hoek, Mafeteng Urban, Mapoteng, Butha Buthe, Teya-Teyaneng, Maputsoe Urban, and Maseru Community Councils. For consistency, we will again look at the captial.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-7',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-7',
                opacity: 0
            }]
        },

        // {
        //     id: 'TX-PVLS-Zoom',
        //     title: 'Maseru Community Council',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/VMMC_Lesotho.jpg',
        //     description: 'While the hot spots are spread throughout the city for TX_PVLS, a majority of the virally supressed appear to be going to health facilites within Maseru East and Lower/Upper Thame.',
        //     location: {
        //         center: [27.45210, -29.31503],
        //         zoom: 11.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'lesotho-7',
        //         opacity: 1
        //     }],
        //     onChapterExit: [{
        //         layer: 'lesotho-7',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'Composite-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/chapter_titles/9_Composite.png',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-9',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'lesotho-9',
                opacity: 0
            }]
        },

        {
            id: 'Composite',
            title: 'Composite Scores',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Family5.jpg',
            description: 'diverge noticeably from the other treatment indicators. Unlike the others, heavy concentrations are instead within Teya-Teyaneng, Mapoteng, and at its highest, Mamafubelu Community Councils.',
            location: {
                center: [27.48014, -29.61933],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-9',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-9',
                opacity: 0
            }]
        },

        {
            id: 'Composite-Zoom',
            title: 'Maseru Community Council',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/lesotho-story-map-indicators/master/img/wikicoms/Family5.jpg',
            description: 'When taking a closer look, we can see that there are particular concentrations in the southeast part of the CC, near the border with Berea. While Borokhoaneng and Lower Seoli have much of it, high levels are consistent throughout the capital.',
            location: {
                center: [27.82559, -28.96590],
                zoom: 9.58,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'lesotho-9',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'lesotho-9',
                opacity: 0
            }]
        },

    ]
};