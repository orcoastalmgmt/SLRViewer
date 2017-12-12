define({
    root: {
        link: 'About',
        navigation: {
            title: 'About',
            description: "The Estuary Sea Level Rise Exposure Inventory identified infrastructure and other assets within six scenarios that represent future flooding along "+
			"Oregon’s estuaries. The project objective was to identify the assets and geographies most likely to be impacted by sea-level rise in 21 of Oregon’s estuaries, and "+
			"prioritize areas to focus future resources and further study. \nA written report and future flooding scenarios polygons for download complement this webmap, please see www.coastalatlas.net/index.php/tools/planners/68-slr. " +
			"\nPlease contact Andy Lanier, andy.lanier@state.or.us with questions."+
			"\nThis product is for informational purposes, and may not be suitable for legal, engineering or surveying purposes. This information or data is provided with the understanding " +
			"that conclusions drawn from such information are the responsibility of the user." 
		
        },
        search: {
            title: 'Methods',
            description: "The future flooding scenarios displayed in this map were created by using sea-level rise projections coupled with flood event water levels. "+ 
			"The sea-level rise projections are from the National Research Council of the National Academies \"Sea-Level Rise for the Coasts of California, Oregon, and Washington: Past, Present, and Future\" "+
			"(2012, pg 96). The report gave a range of sea-level rise projections for 2030, "+
			"2050, and 2100. The upper end of the range for each year projected was used to take precautionary approach and to provide a large range of possible water levels. The 2030, 2050, and 2100 sea-level" +
			"rise (slr) estimates were 0.75 feet, 1.5 feet, and 4.6 feet, respectively. The coastal flood event water levels were taken from NOAA's extreme water level calculations at the Crescent City, Charleston, " + 
			"South Beach, and Astoria tide stations. The flood event water levels used were the 1% and 50% annual exceedance probability values. The exposure inventory analysis was an intersection between each of the "+ 
			"future flooding scenarios and location data of assets. The assets analyzed and shown in this map were state highways, county/local roads, railways, critical facilities, municipal use drinking water, "+
			"wastewater treatment plants, electric substations, and potential contaminant sources. For more details on the methods, please see the written report available at " +
			"www.coastalatlas.net/index.php/tools/planners/68-slr."
      
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
