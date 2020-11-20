var config = {
    style: 'mapbox://styles/ur-dsl/ckcgckuxj0jbn1imn3fz03ct8',
    accessToken: 'pk.eyJ1IjoiYWJpY2UxMiIsImEiOiJja2hwa202emowOHlpMnNwMjJtZjZjYnp4In0.yl6kGQgKb_hRKxuiAi1i-Q',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Mapping **The North Star**',
    subtitle: 'A look into the coverage of **The North Star** in its first articles',
    byline: 'Alex Bice - Digital Public Historian',
    footer: 'Data from the Library of Congress Frederick Douglass Newspaper Collection',
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
