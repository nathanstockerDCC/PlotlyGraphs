var graphdata = [{
		name : "Consented Dwellings and Population Growth Information",
		id : "BCsAndPopulationGraph",
		container : "BCsAndPopulation",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/dccgraphs/data/BCsAndPopulationGraph.csv",
		func : "BCsAndPopulationGraph",
		funcFile : "/dccgraphs/graphFunctions/BCsAndPopulationGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_BCs_and_pop_growth_graph",
				valtext : ["Consented Dwellings","Constructed Dwellings"]
			}
		],
		link : [
			{
				linktext : "<b>Datasource</b>",
				text : "Statistics New Zealand and Dunedin City Council (.csv)",
				url : "/dccgraphs/data/BCsAndPopulationGraph.csv"
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
		csv : "/dccgraphs/data/SuburbBCDataAnnualbySuburb.csv",
		func : "CitywideBySuburbgraph",
		funcFile : "/dccgraphs/graphFunctions/CitywideBySuburbgraph.js",
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Citywide_by_Suburb",
				valtext : ["2019", "2018", "2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002"]
			},{
				text : "End year",
				id : "dropdownEndYear_Citywide_by_Suburb",
				valtext : ["2019", "2018", "2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002"]
			},{
				text : "Choose a data type",
				id : "datatypedd_CitywideBySuburbgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type", "Value of Consented Construction"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/dccgraphs/data/SuburbBCDataAnnualbySuburb.csv"
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
		csv : "/dccgraphs/data/CitywideBCdataMonthly.csv",
		func : 'AllDevelopmentbyMonthgraph',
		funcFile : "/dccgraphs/graphFunctions/AllDevelopmentbyMonthgraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_DevelopmentbyMonthgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type", "Value of Consented Construction", "Constructed Dwellings"]
			},{
				text : "Choose a timeframe",
				id : "timeframe_DevelopmentbyMonthgraph",
				valtext : ["Years", "Months"]	
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand and Dunedin City Council (.csv)",
				url : "/dccgraphs/data/CitywideBCdataMonthly.csv"
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
		csv : "/dccgraphs/data/CitywideBCdataAnnual.csv",
		func : 'DevTrendsByYearGraph',
		funcFile : "/dccgraphs/graphFunctions/DevTrendsByYearGraph.js",
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/dccgraphs/data/CitywideBCdataAnnual.csv"
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
		csv : "/dccgraphs/data/DwellingsCCCd.csv",
		func : 'DwellingsCCCd',
		funcFile : "/dccgraphs/graphFunctions/DwellingsCCCd.js",
		drop : [
			{
				text : "Choose an extra dataset",
				id : "DwellingsCCCd_ExtraDataType",
				valtext : ["-","Consented Dwellings","Projected Dwellings"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand, Dunedin City Council, and Rationale Ltd (.csv)",
				url : "/dccgraphs/data/DwellingsCCCd.csv"
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
		csv : "/dccgraphs/data/Infometrics.csv",
		func : "InfometricsGraph",
		funcFile : "/dccgraphs/graphFunctions/InfometricsGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "InfometricsGraph_Datatype",
				valtext : ["Housing Affordability Index","Rental Affordability Index"]
			}
		],
		link : [
			{	
				linktext : "<b>Data source</b>",
				text : "Infometrics (.csv)",
				url : "/dccgraphs/data/Infometrics.csv"
			}
		],
		div : [
			{
				id : "ExtraReferences"
			}
		]

	}, {
		name : "Dwelling Type Over Time",
		id : "DwellingTypePie",
		container : "DwellingTypePieGraph",
		width : "100%",
		height : "500px",
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		csv : "/dccgraphs/data/DwellingTypeSplitAnnual.csv",
		func : 'piegraphmaker',
		funcFile : "/dccgraphs/graphFunctions/Piegraphmaker.js",
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Pie",
				valtext : ["2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "End year",
				id : "dropdownEndYear_Pie",
				valtext : ["2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "Comparison start year",
				id : "dropdownStartYearTwo_Pie",
				valtext : ["-","2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "Comparison end year",
				id : "dropdownEndYearTwo_Pie",
				valtext : ["-","2019", "2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Statistics New Zealand (.csv)",
				url : "/dccgraphs/data/DwellingTypeSplitAnnual.csv"
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
		csv : "/dccgraphs/data/HouseDataQuarterly.csv",
		func : 'PropertyDataGraph',
		funcFile : "/dccgraphs/graphFunctions/PropertyDataGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "PropertySales_DataType",
				valtext : ["Median House Price","Number of House Sales","Both","Growth rate"]
			}
		],		
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Infometrics (.csv)",
				url : "/dccgraphs/data/HouseDataQuarterly.csv"
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
		csv : "/dccgraphs/data/RentalData.csv",
		func : 'RentalGraph',
		funcFile : "/dccgraphs/graphFunctions/RentalGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "TypeDD_RentalGraph",
				valtext : ["Dunedin City", "Mean Rent Comparison", "Growth rate"]
			}
		],	
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Ministry of Business, Innovation and Employment (.csv)",
				url : "/dccgraphs/data/RentalData.csv"
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
		csv : "/dccgraphs/data/SuburbBCDataAnnualbyYear.csv",
		func : "SuburbAnnualDataGraph",
		funcFile : "/dccgraphs/graphFunctions/SuburbAnnualDataGraph.js",
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
				url : "/dccgraphs/data/SuburbBCDataAnnualbyYear.csv"
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
		csv : "/dccgraphs/data/Population.csv",
		func : "PopGraph",
		funcFile : "/dccgraphs/graphFunctions/PopGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_PopGraph",
				valtext : ["Growth", "Growth rate","Total"]
			}
		],
		link : [
			{
				linktext : "<b>Data source</b>",
				text : "Russell Jones / Dunedin City Council (.csv)",
				url : "/dccgraphs/data/Population.csv"
			}
		]
	}
];

