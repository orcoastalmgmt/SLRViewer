define({
    root: {
        link: 'About',
        navigation: {
            title: 'About',
            description: "An exposure inventory is in progress to determine the assets and geographies most likely to be affected by sea level rise in 21 of Oregon’s estuaries," +
			"and prioritize areas to focus future resources and further study. Project end date is December 2017." +
			"This project is being completed through the NOAA Coastal Management Fellowship program, supported by the Oregon Coastal Management Program (OCMP) and the NOAA Office of "+
			"Coastal Management. Please contact Julie Sepanik, julie.sepanik@state.or.us with questions."+
			"This product is for informational purposes, and may not be suitable for legal, engineering or surveying purposes. This information or data is provided with the understanding that conclusions drawn from such information are the responsibility of the user." 
            // pan1: 'Drag to pan',
            // recenter: 'SHIFT + Click to recenter',
            // zoomIn1: 'SHIFT + Drag to zoom in',
            // zoomOut1: 'SHIFT + CTRL + Drag to zoom out',
            // zoomIn2: 'Mouse Scroll Forward to zoom in',
            // zoomOut2: 'Mouse Scroll Backward to zoom out',
            // pan2: 'Use Arrow keys to pan',
            //zoomInLevel: '+ key to zoom in a level',
            //zoomOutLevel: '- key to zoom out a level',
            //zoomCenter: 'Double Click to Center and Zoom in'
        },
        search: {
            title: 'Methods',
            description: "The sea level rise scenario polygons displayed in this map were created by using sea-level rise projections coupled with flood event water levels. "+ 
			"The sea-level rise projections are from the National Research Council of the National Academies \"Sea-Level Rise for the Coasts of California, Oregon, and Washington: Past, Present, and Future\" "+
			"(2012, pg 96). The report gave a range of sea-level rise projections for 2030, "+
			"2050, and 2100. We used the high value of the range for each year projected, from a 2012 baseline, to provide a large range (23 to 142 cm) of possible water levels. The sea level rise "+
			"projections used were 23 cm for 2030, 48 cm for 2050, and 142 cm for 2100. The flood event levels were determined from water level exceedance analysis at select NOAA tide gauges. The "+
			"flood event levels used were the 1% and 50% annual probability values, referred to as a moderate and major flood, respectively. For example, the 50% exceedance elevation is 0.8 m above Mean Higher High Water (MHHW) at South Beach, Oregon. This "+
			"means there is a 50% chance that the tide will exceed 0.8 m above MHHW in a given year, or on average, once every two year period. The 50% and 1% flood event water levels were taken from NOAA’s "+
			"extreme water levels at the Crescent City, Charleston, South Beach, and Astoria tide stations"
            //address: 'Search by Address',
            //place: 'Search by Place Name',
            //etc: 'Search By Zip Code, County, etc.'
        },
        tools: {
            title: 'Help',
            description: "Use the drop down box below under 'Select Planning Scenario' to choose the time horizon you are interested in exploring: 2030, 2050, or 2100. In addition, below the Legend, the following tools are provided: ",
            bookmarks: {
                title: 'Bookmarks',
                description: 'Select your estuary of interest and the map will zoom to that location.'
            },
            print: {
                title: 'Print',
                description: 'This map can be exported to various formats and layouts.'
            }
        }
    },
    'es': true,
    'fr': true,
    'pt-br': true,
    'pt-pt': true
});
