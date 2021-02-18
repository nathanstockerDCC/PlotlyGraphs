function DateMinMax(all_dates, minmax) {
	var minmax_dt = all_dates[0];
	minmax_dt_dtObj = new Date(all_dates[0]);
	all_dates.forEach(function(dt, index)
	{
		if (minmax == "max") {
			if ( new Date( dt ) > minmax_dt_dtObj )
				{
				minmax_dt = dt;
				minmax_dt_dtObj = new Date(dt);
				}
			};
		
		if (minmax == "min") {
			if ( new Date( dt ) < minmax_dt_dtObj )
				{
				minmax_dt = dt;
				minmax_dt_dtObj = new Date(dt);
				}
			};	
	});

	return minmax_dt;
	}

function TimeToMilliseconds(amount, type) {
	if (type == "Days") {
		return amount * 86400000;
	}
	if (type == "Months") {
		return amount * 2592000000;
	}
	if (type == "Years") {
		return amount * 31622400000;
	}
	}
	
	
function AllDevelopmentbyMonthgraph(chartData){

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

function t(){
    return x;
}

window.onload = t;
window.onresize = t;

var WindowWidth = t();
		
if (chartData == null || chartData.length <= 0)
		return;

var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();


if (timeframe_Development_by_Month == "Months") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
	
	var filteredDates = xValues.filter(function(e) { return e !== "" });
	var StartDate = new Date(DateMinMax(filteredDates, "max"));
	StartDate.setDate(StartDate.getDate()-745);
	var EndDate = new Date(DateMinMax(filteredDates, "max"));
	EndDate.setDate(EndDate.getDate()+20);
	
	if (WindowWidth < 500)
		dtickValue = "M6";
	else 
		dtickValue = "M3";

	tick0Value = DateMinMax(filteredDates, "max");
	tickformatValue = "%b '%y";
	
	;}

else if (timeframe_Development_by_Month == "Year to date") {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
	
	var filteredDates = xValues.filter(function(e) { return e !== "" });
	var StartDate = new Date(DateMinMax(filteredDates, "min"));
	StartDate.setDate(StartDate.getDate()+345);
	var EndDate = new Date(DateMinMax(filteredDates, "max"));
	EndDate.setDate(EndDate.getDate()+20);
	
	if (WindowWidth < 500)
		dtickValue = "M6";
	else 
		dtickValue = "M6";

	tick0Value = DateMinMax(filteredDates, "max");
	tickformatValue = "%b '%y";
	
	;}
	
else if (timeframe_Development_by_Month == "Years") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		});

	var filteredDates = xValues.filter(function(e) { return e !== "" });
	var StartDate = new Date(DateMinMax(filteredDates, "min"));
	StartDate.setDate(StartDate.getDate()-300);
	var EndDate = new Date(DateMinMax(filteredDates, "max"));
	EndDate.setDate(EndDate.getDate()+300);


	if (datatypetouse_Development_by_Month == "Constructed dwellings")
		{
		tick0Value = '2010-01-01';	
		StartDate = new Date('2010-01-01');
		StartDate.setDate(StartDate.getDate()-300);		
		if (WindowWidth < 500)
			{dtickValue = TimeToMilliseconds(5, "Years");}
		else 
			{dtickValue = TimeToMilliseconds(1, "Years");}
		}
	else if (datatypetouse_Development_by_Month == "Consented dwellings by zone")
		{
		tick0Value = '2002-01-01';	
		StartDate = new Date('2002-01-01');
		if (WindowWidth < 500)
			{dtickValue = TimeToMilliseconds(6, "Years");}
		else 
			{dtickValue = TimeToMilliseconds(2, "Years");}
		}
	else if (datatypetouse_Development_by_Month == "Consented dwellings by greenfield/brownfield")
		{
		tick0Value = '2014-01-01';	
		StartDate = new Date('2013-06-01');
		if (WindowWidth < 500)
			{dtickValue = TimeToMilliseconds(2, "Years");}
		else 
			{dtickValue = TimeToMilliseconds(1, "Years");}
		}
	else
		{
		tick0Value = '1992-01-01';	
		if (WindowWidth < 500)
			{dtickValue = TimeToMilliseconds(4, "Years");}
		else 
			{dtickValue = TimeToMilliseconds(2, "Years");}
		}
	
	tickformatValue = "%Y";

	;}	
else {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
		
	var filteredDates = xValues.filter(function(e) { return e !== "" })
	var StartDate = new Date(DateMinMax(filteredDates, "max"));
	StartDate.setDate(StartDate.getDate()-745);
	var EndDate = new Date(DateMinMax(filteredDates, "max"));
	EndDate.setDate(EndDate.getDate()+20);

	if (WindowWidth < 500)
		dtickValue = "M6";
	else 
		dtickValue = "M3";
	
	tick0Value = StartDate-TimeToMilliseconds(-2, "Months");
	tickformatValue = "%b '%y"
	;}	

	
StartDate = (new Date(StartDate)).getTime();
EndDate = (new Date(EndDate)).getTime();

	
if (timeframe_Development_by_Month == "Year to date") {
	TimeframeConverted = "Citywide YTD "
	;}
else {
	TimeframeConverted = "Citywide "+timeframe_Development_by_Month+" Longterm "
	;}

var dels = [];

function BlanksToRemove(arrY) {
 
i = 0;
dels = [];

while (i < arrY.length) {
	if (arrY[i] == ''){
    dels.push(i);
    i++
    ;}
 
	else {
	i++
	;}

}

;}


function RemoveBlanks(arr, deletes) {
 
for (var i = deletes.length-1; i >= 0; i--){
	arr.splice(deletes[i],1)
	;}
;}

	
if (datatypetouse_Development_by_Month == "Total dwellings consented") {

	var yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		});

	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValues, dels);
	
	data = [{
		x: xValues,
		y: yValues,
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total dwellings consented',
		showlegend: false,
		xaxis: {
			zeroline: false, 
			type: 'date',
			range: [StartDate, EndDate],
			dtick: dtickValue,
			tick0: tick0Value,
			tickformat: tickformatValue,
			fixedrange: Zooming
			},		
		yaxis: {
			zeroline: false,
			rangemode: 'tozero',
			fixedrange: Zooming
			},
		}
	;}
	
else if (datatypetouse_Development_by_Month == "Consented dwellings by type") {

	var yValuesHouses = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Houses"];
		});
		
	var yValuesUnits = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Units"];
		});
		
	var yValuesApartments = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Apartments"];
		});
	
	var yValuesRVUs = $.map(chartData, function(data){
		return data[TimeframeConverted+"Retirement Village Units"];
		});
		
	var yValuesTotal = $.map(chartData, function(data){
		return data[TimeframeConverted+"Total New Dwellings"];
		});
		

	BlanksToRemove(yValuesHouses);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValuesHouses, dels);
	RemoveBlanks(yValuesUnits, dels);
	RemoveBlanks(yValuesApartments, dels);
	RemoveBlanks(yValuesRVUs, dels);
	RemoveBlanks(yValuesTotal, dels);
	
	data = [{
		x: xValues,
		y: yValuesHouses,
		name: "Houses",
		hoverlabel: {namelength :-1},
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: yValuesUnits,
		name: "Units",
		hoverlabel: {namelength :-1},
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: yValuesApartments,
		name: "Apartments",
		hoverlabel: {namelength :-1},
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xValues,
		y: yValuesRVUs,
		name: "Retirement village units",
		hoverlabel: {namelength :-1},
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour5}
		 
        },{
		x: xValues,
		y: yValuesTotal,
		name: "Total",
		type: 'bar',
		connectgaps: true,
		opacity: 0.7,
		marker: {color: Colour3}
        }];

	layout = {
		title: 'Consented dwellings by type',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			type: 'date',
			range: [StartDate, EndDate],
			dtick: dtickValue,
			tick0: tick0Value,
			tickformat: tickformatValue,
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			rangemode: 'tozero',
			fixedrange: Zooming,
			barmode: 'stack'
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Value of consented construction") {

	var yValuesTotalResid = $.map(chartData, function(data){
		return data[TimeframeConverted+"Total Residential Buildings"];
		});

	var yValuesNewResid = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Residential Buildings"];
		});

	var yValuesAlteredResid = $.map(chartData, function(data){
		return data[TimeframeConverted+"Altered Residential Buildings"];
		});
		
	var yValuesNonResid = $.map(chartData, function(data){
		return data[TimeframeConverted+"NonResidential Construction"];
		});
	
	var yValuesTotal = $.map(chartData, function(data){
		return data[TimeframeConverted+"Total Construction Value"];
		});
	
	BlanksToRemove(yValuesTotalResid);
	BlanksToRemove(yValuesNewResid);
	BlanksToRemove(yValuesAlteredResid);
	BlanksToRemove(yValuesNonResid);
	BlanksToRemove(yValuesTotal);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValuesTotalResid, dels);
	RemoveBlanks(yValuesNewResid, dels);
	RemoveBlanks(yValuesAlteredResid, dels);
	RemoveBlanks(yValuesNonResid, dels);
	RemoveBlanks(yValuesTotal, dels);

	data = [
	{
		x: xValues,
		y: yValuesTotalResid,
		name: "Residential buildings - total",
		visible: 'legendonly',
		hoverlabel: {namelength :-1},
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour5}		
        },{
		x: xValues,
		y: yValuesNewResid,
		name: "New residential buildings",
		hoverlabel: {namelength :-1},
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: yValuesAlteredResid,
		name: "Residential alterations",
		hoverlabel: {namelength :-1},
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour4}
		
        },{
		x: xValues,
		y: yValuesNonResid,
		name: "Non-residential construction",
		visible: 'legendonly',
		hoverlabel: {namelength :-1},
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour3}
		
        },{
		x: xValues,
		y: yValuesTotal,
		name: "Total construction value",
		visible: 'legendonly',
		hoverlabel: {namelength :-1},
		type: 'line',
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
        }];

	layout = {
		title: 'Value of consented construction',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			type: 'date',
			range: [StartDate, EndDate],
			dtick: dtickValue,
			tick0: tick0Value,
			tickformat: tickformatValue,
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			rangemode: 'tozero',
			fixedrange: Zooming,
			tickformat: '$,s', 
			hoverformat: '$,.4s'

			}
		}
	;}
	
else if (datatypetouse_Development_by_Month == "Constructed dwellings") {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Constructed Dwellings"];
		});
	
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValues, dels);
	
	data = [{
		x: xValues,
		y: yValues,
		name: "Constructed dwellings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Constructed dwellings',
		showlegend: false,
		xaxis: {
			zeroline: false, 
			type: 'date',
			range: [StartDate, EndDate],
			dtick: dtickValue,
			tick0: tick0Value,
			tickformat: tickformatValue,
			fixedrange: Zooming			
			},
		yaxis: {
			zeroline: false, 
			rangemode: 'tozero',
			fixedrange: Zooming
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Consented dwellings by greenfield/brownfield") {

	var yValuesGreenfield = $.map(chartData, function(data){
		return data[TimeframeConverted+"Greenfield"];
		});

	var yValuesIntensification = $.map(chartData, function(data){
		return data[TimeframeConverted+"Intensification"];
		});

	
	BlanksToRemove(yValuesGreenfield);
	BlanksToRemove(yValuesIntensification);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValuesGreenfield, dels);
	RemoveBlanks(yValuesIntensification, dels);

	data = [
	{
		x: xValues,
		y: yValuesGreenfield,
		name: "Greenfield",
		hoverlabel: {namelength :-1},
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}		
        },{
		x: xValues,
		y: yValuesIntensification,
		name: "Brownfield",
		hoverlabel: {namelength :-1},
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
        }];

	layout = {
		title: 'Consented dwellings by development type',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			type: 'date',
			range: [StartDate, EndDate],
			dtick: dtickValue,
			tick0: tick0Value,
			tickformat: tickformatValue,
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			rangemode: 'tozero',
			fixedrange: Zooming
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Consented dwellings by zone") {

	var yValuesTownshipAndSettlement = $.map(chartData, function(data){
		return data[TimeframeConverted+"Township and Settlement"];
		});

	var yValuesInnerCityResidential = $.map(chartData, function(data){
		return data[TimeframeConverted+"Inner City Residential"];
		});

	var yValuesGeneralResidential2 = $.map(chartData, function(data){
		return data[TimeframeConverted+"General Residential 2"];
		});

	var yValuesGeneralResidential1 = $.map(chartData, function(data){
		return data[TimeframeConverted+"General Residential 1"];
		});

	var yValuesLargeLotResidential = $.map(chartData, function(data){
		return data[TimeframeConverted+"Large Lot Residential"];
		});

	var yValuesLowDensityResidential = $.map(chartData, function(data){
		return data[TimeframeConverted+"Low Density Residential"];
		});

	var yValuesCommercialandMixedUse = $.map(chartData, function(data){
		return data[TimeframeConverted+"Commercial and Mixed Use"];
		});

	var yValuesRural = $.map(chartData, function(data){
		return data[TimeframeConverted+"Rural"];
		});

	var yValuesRuralResidential = $.map(chartData, function(data){
		return data[TimeframeConverted+"Rural Residential"];
		});		

	var yValuesOtherZones = $.map(chartData, function(data){
		return data[TimeframeConverted+"Other zones"];
		});		

	
	BlanksToRemove(yValuesTownshipAndSettlement);
	BlanksToRemove(yValuesInnerCityResidential);
	BlanksToRemove(yValuesGeneralResidential2);
	BlanksToRemove(yValuesGeneralResidential1);
	BlanksToRemove(yValuesLargeLotResidential);
	BlanksToRemove(yValuesLowDensityResidential);
	BlanksToRemove(yValuesCommercialandMixedUse);
	BlanksToRemove(yValuesRural);
	BlanksToRemove(yValuesRuralResidential);
	BlanksToRemove(yValuesOtherZones);

	RemoveBlanks(xValues, dels);

	RemoveBlanks(yValuesTownshipAndSettlement, dels);
	RemoveBlanks(yValuesInnerCityResidential, dels);
	RemoveBlanks(yValuesGeneralResidential2, dels);
	RemoveBlanks(yValuesGeneralResidential1, dels);
	RemoveBlanks(yValuesLargeLotResidential, dels);
	RemoveBlanks(yValuesLowDensityResidential, dels);
	RemoveBlanks(yValuesCommercialandMixedUse, dels);
	RemoveBlanks(yValuesRural, dels);
	RemoveBlanks(yValuesRuralResidential, dels);
	RemoveBlanks(yValuesOtherZones, dels);

	
	data = [{
		x: xValues,
		y: yValuesTownshipAndSettlement,
		name: "Township and Settlement",
		marker: {color: Colour1},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesInnerCityResidential,
		name: "Inner City Residential",
		marker: {color: Colour2},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesGeneralResidential2,
		name: "General Residential 2",
		marker: {color: Colour3},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesGeneralResidential1,
		name: "General Residential 1",
		marker: {color: Colour4},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesLargeLotResidential,
		name: "Large Lot Residential",
		marker: {color: Colour5},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesLowDensityResidential,
		name: "Low Density Residential",
		marker: {color: Colour6},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesCommercialandMixedUse,
		name: "Commercial and Mixed Use",
		marker: {color: Colour7},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesRural,
		name: "Rural",
		marker: {color: Colour8},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesRuralResidential,
		name: "Rural Residential",
		marker: {color: Colour9},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        },{
		x: xValues,
		y: yValuesOtherZones,
		name: "Other zones",
		marker: {color: Colour10},
		hoverlabel: {namelength :-1},
		stackgroup: 'one'
        }];

	layout = {
		title: 'Consented dwellings by zone',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			type: 'date',
			range: [StartDate, EndDate],
			dtick: dtickValue,
			tick0: tick0Value,
			tickformat: tickformatValue,
			fixedrange: Zooming			
			},
		yaxis: {
			zeroline: false, 
			rangemode: 'tozero',
			fixedrange: Zooming
			}
		}
	;}
	

Plotly.newPlot('AllDevelopmentbyMonth', data, layout);
}
