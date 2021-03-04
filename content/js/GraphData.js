var graphdata = [{
		name : "Consented Dwellings and Population Growth Information",
		id : "BCsAndPopulationGraph",
		container : "BCsAndPopulation",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/BCsAndPopulationGraph.csv",
		func : "BCsAndPopulationGraph",
		funcFile : "/PlotlyGraphs/graphFunctions/BCsAndPopulationGraph.js",
		link : [
			{
				linktext : "<b>Datasource</b>",
				text : "Statistics New Zealand and Dunedin City Council (.csv)",
				url : "/PlotlyGraphs/data/BCsAndPopulationGraph.csv"
			}
		]
	}, {
		name : "Citywide By Suburb Information",
		id : "CitywideInfo",
		container : "CitywideBySuburb",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/SuburbBCDataAnnualbySuburb.csv",
		func : "CitywideBySuburbgraph",
		funcFile : "/PlotlyGraphs/graphFunctions/CitywideBySuburbgraph.js",
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Citywide_by_Suburb",
				valtext : ["2020", "2019", "2018", "2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002"]
			},{
				text : "End year",
				id : "dropdownEndYear_Citywide_by_Suburb",
				valtext : ["2020", "2019", "2018", "2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002"]
			},{
				text : "Choose a data type",
				id : "datatypedd_CitywideBySuburbgraph",
				valtext : ["Total dwellings consented","Consented dwellings by type", "Value of consented construction"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/PlotlyGraphs/data/SuburbBCDataAnnualbySuburb.csv"
			}
		]
	}, {
		name : "Development By Month",
		id : "DevMonthYearRollingInfo",
		container : "AllDevelopmentbyMonth",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/CitywideBCdataMonthly.csv",
		func : 'AllDevelopmentbyMonthgraph',
		funcFile : "/PlotlyGraphs/graphFunctions/AllDevelopmentbyMonthgraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_DevelopmentbyMonthgraph",
				valtext : ["Total dwellings consented","Consented dwellings by type", "Value of consented construction", "Constructed dwellings", "Consented dwellings by greenfield/brownfield", "Consented dwellings by zone"]
			},{
				text : "Choose a timeframe",
				id : "timeframe_DevelopmentbyMonthgraph",
				valtext : ["Years", "Months", "Year to date"]	
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand and Dunedin City Council (.csv)",
				url : "/PlotlyGraphs/data/CitywideBCdataMonthly.csv"
			}
		]
	}, {
		name : "Development By Year",
		id : "DevTrendsByYear",
		container : "Dev_Trends_by_Year",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/CitywideBCdataAnnual.csv",
		func : 'DevTrendsByYearGraph',
		funcFile : "/PlotlyGraphs/graphFunctions/DevTrendsByYearGraph.js",
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/PlotlyGraphs/data/CitywideBCdataAnnual.csv"
			}
		]
	}, {
		name : "Dwellings Completed",
		id : "DwellingsCCCd",
		container : "DwellingsCompleted",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/DwellingsCCCd.csv",
		func : 'DwellingsCCCd',
		funcFile : "/PlotlyGraphs/graphFunctions/DwellingsCCCd.js",
		drop : [
			{
				text : "Choose an extra dataset",
				id : "DwellingsCCCd_ExtraDataType",
				valtext : ["-","Consented dwellings","Projected dwellings"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand, Dunedin City Council, and Rationale Ltd (.csv)",
				url : "/PlotlyGraphs/data/DwellingsCCCd.csv"
			}
		]
		
	}, {
		name : "Infometrics Graph",
		id : "InfometricsGraph",
		container : "InfometricsInfo",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/Infometrics.csv",
		func : "InfometricsGraph",
		funcFile : "/PlotlyGraphs/graphFunctions/InfometricsGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "InfometricsGraph_Datatype",
				valtext : ["Housing affordability index","Rental affordability index"]
			}
		],
		link : [
			{	
				linktext : "<b>Data source</b>",
				text : "Infometrics (.csv)",
				url : "/PlotlyGraphs/data/Infometrics.csv"
			}
		]/*,
		div : [
			{
				id : "ExtraReferences"
			}
		]*/

	}, {
		name : "Dwelling Type Over Time",
		id : "DwellingTypePie",
		container : "DwellingTypePieGraph",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/DwellingTypeSplitAnnual.csv",
		func : 'piegraphmaker',
		funcFile : "/PlotlyGraphs/graphFunctions/Piegraphmaker.js",
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Pie",
				valtext : ["2020", "2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "End year",
				id : "dropdownEndYear_Pie",
				valtext : ["2020", "2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "Comparison start year",
				id : "dropdownStartYearTwo_Pie",
				valtext : ["-", "2020", "2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "Comparison end year",
				id : "dropdownEndYearTwo_Pie",
				valtext : ["-", "2020", "2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/PlotlyGraphs/data/DwellingTypeSplitAnnual.csv"
			}
		]
	}, {
		name : "Property Data Graph",
		id : "PropertyDataGraph",
		container : "PropertyDataInfo",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/HouseDataQuarterly.csv",
		func : 'PropertyDataGraph',
		funcFile : "/PlotlyGraphs/graphFunctions/PropertyDataGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "PropertySales_DataType",
				valtext : ["Average house values","House sales","House values and sales","Growth rate"]
			}
		],		
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Infometrics (.csv)",
				url : "/PlotlyGraphs/data/HouseDataQuarterly.csv"
			}
		]
	}, {
		name : "Rental Graph",
		id : "RentalGraph",
		container : "RentGraph",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/RentalData.csv",
		func : 'RentalGraph',
		funcFile : "/PlotlyGraphs/graphFunctions/RentalGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "TypeDD_RentalGraph",
				valtext : ["Average rental cost", "Growth rate", "Comparison with other cities"]
			}
		],	
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Ministry of Business, Innovation and Employment (.csv)",
				url : "/PlotlyGraphs/data/RentalData.csv"
			}
		]
	}, {
		name : "Suburb Information",
		id : "SubInfo",
		container : "SuburbInformation",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/SuburbBCDataAnnualbyYear.csv",
		func : "SuburbAnnualDataGraph",
		funcFile : "/PlotlyGraphs/graphFunctions/SuburbAnnualDataGraph.js",
		drop : [
			{
				text : "Choose an area",
				id : "datafromdropdown_suburbgraph",
				valtext : ["Dunedin City Total","Andersons Bay/Waverley", "Blueskin Bay", "Caversham", "Concord/Corstophine/Kew", "Fairfield", "Green Island/Abbotsford", "Helensburgh/Balmacewen", "Inner City", "Leith Valley", "Maori Hill", "Mornington", "Mosgiel", "Musselburgh/Tainui", "North East Valley", "Outer Peninsula", "Outram/Momona", "Peninsula", "Pine Hill", "Port Chalmers/Purakaunui", "Roslyn/Belleknowes", "South Coast", "South Dunedin", "St Clair", "St Kilda", "Strath Taieri", "Taieri", "Three Mile Hill", "University", "Waikouaiti/Karitane", "Wakari", "West Harbour"]
			},{
				text : "Compare with another area",
				id : "comparisiondd_suburbgraph",
				valtext : [" ","Dunedin City Total","Andersons Bay/Waverley", "Blueskin Bay", "Caversham", "Concord/Corstophine/Kew", "Fairfield", "Green Island/Abbotsford", "Helensburgh/Balmacewen", "Inner City", "Leith Valley", "Maori Hill", "Mornington", "Mosgiel", "Musselburgh/Tainui", "North East Valley", "Outer Peninsula", "Outram/Momona", "Peninsula", "Pine Hill", "Port Chalmers/Purakaunui", "Roslyn/Belleknowes", "South Coast", "South Dunedin", "St Clair", "St Kilda", "Strath Taieri", "Taieri", "Three Mile Hill", "University", "Waikouaiti/Karitane", "Wakari", "West Harbour"]
			},{
				text : "Choose a data type",
				id : "datatypedd_suburbgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type", "Value of Consented Construction"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/PlotlyGraphs/data/SuburbBCDataAnnualbyYear.csv"
			}
		]
	}, {
		name : "Population Graph",
		id : "PopGraph",
		container : "PopulationGraph",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/PlotlyGraphs/data/Population.csv",
		func : "PopGraph",
		funcFile : "/PlotlyGraphs/graphFunctions/PopGraph.js",
		drop : [
			{
				text : "Choose a data series",
				id : "dataseriesdd_PopGraph",
				valtext : ["Population", "Households"]
			},
			{
				text : "Choose a data type",
				id : "datatypedd_PopGraph",
				valtext : ["Growth", "Growth rate","Total"]
			}
			],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand / Russell Jones / Infometrics",
				url : "/PlotlyGraphs/data/Population.csv"
			}
		]
	}
];

