var config = {
    style: 'mapbox://styles/ur-dsl/ckcgckuxj0jbn1imn3fz03ct8',
    accessToken: 'pk.eyJ1IjoidXItZHNsIiwiYSI6ImNqdGs3MHhxdDAwd2E0NHA2bmxoZjM1Y2IifQ.y1wfhup4U2U8KvHuOpFCng',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Redlining Richmond',
    subtitle: 'A look into redlining and its connections now',
    byline: 'University of Richmond - Digital Scholarship Lab',
    footer: 'Source: dsl.richmond.edu',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Home Owners Loan Corporation (HOLC)',
            image: './images/redlining_legend.jpg',
            description:'In the late 1930s the Home Owners Loan Corporation (HOLC), a New Deal agency created to refinance homes and prevent foreclosures, surveyed real estate trends in the nations largest cities. Working with local lenders and realtors, they assessed neighborhoods using a number of factors ranging from terrain to income levels to the "infiltration of a lower grade population" (by which they meant African Americans, Jews, and immigrants). Using these assessments they assigned a grade for each neighborhoods residential security.Green A neighborhoods were the "hot spots" where mortgages were deemed to be reasonably safe. On the other end of the spectrum, red "D" areas were "characterized by detrimental influences in a pronounced degree, and mortgages in these areas were considered much more risky. The HOLC produced maps for each city showing the grades for all areas.',
            location: {
                center: [-77.45958, 37.55118],
				zoom: 11.96,
				pitch: 32.00,
				bearing: 38.40
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
