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
  
function AllDevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;

var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();

if (datatypetouse_Development_by_Month == "Constructed Dwellings" && timeframe_Development_by_Month == "Years") {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		});
		
	var StartDate = new Date(DateMinMax(xValues, "min"));
	StartDate.setDate(StartDate.getDate()-250);
	var EndDate = new Date(DateMinMax(xValues, "max"));
	EndDate.setDate(EndDate.getDate()+250);

	dtickValue = 3
	;}
else if (timeframe_Development_by_Month == "Months") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
		
	var StartDate = new Date(DateMinMax(xValues, "max"));
	StartDate.setDate(StartDate.getDate());
//	StartDate.setDate(StartDate.getDate()-750);
	
	var EndDate = new Date(DateMinMax(xValues, "max"));
	EndDate.setDate(EndDate.getDate());
//	EndDate.setDate(EndDate.getDate()+20);

	dtickValue = 6
	;}
else if (timeframe_Development_by_Month == "Years") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		});

	var StartDate = new Date(DateMinMax(xValues, "min"));
	StartDate.setDate(StartDate.getDate()-250);
	var EndDate = new Date(DateMinMax(xValues, "max"));
	EndDate.setDate(EndDate.getDate()+250);

	dtickValue = 3
	;}	
else {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
		
	var StartDate = new Date(DateMinMax(xValues, "max"));
	StartDate.setDate(StartDate.getDate()-750);
	
	var EndDate = new Date(DateMinMax(xValues, "max"));
	EndDate.setDate(EndDate.getDate()+20);

	dtickValue = 6
	;}

console.log("Start: "+StartDate)
console.log("End: "+EndDate)
console.log("xValues: "+xValues)

	
StartDate = (new Date(StartDate)).getTime();
EndDate = (new Date(EndDate)).getTime();

	
TimeframeConverted = "Citywide "+timeframe_Development_by_Month+" Longterm ";

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

	
if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

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
		title: 'Total Dwellings Consented',
		showlegend: false,
		xaxis: {
			zeroline: false, 
			tickangle: 45,
			type: 'date',
			range: [StartDate, EndDate],
			fixedrange: Zooming
			},		
		yaxis: {
			zeroline: false,
			fixedrange: Zooming
			},
		}
	;}
	
else if (datatypetouse_Development_by_Month == "Consented Dwellings by Type") {

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
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: yValuesUnits,
		name: "Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: yValuesApartments,
		name: "Apartments",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xValues,
		y: yValuesRVUs,
		name: "Retirement Village Units",
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
		title: 'Consented Dwellings by Type',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			tickangle: 45,
			type: 'date',
			range: [StartDate, EndDate],
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			barmode: 'stack'
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Value of Consented Construction") {

	var yValuesResid = $.map(chartData, function(data){
		return data[TimeframeConverted+"Residential Buildings"];
		});
	
	var yValuesNonResid = $.map(chartData, function(data){
		return data[TimeframeConverted+"NonResidential Construction"];
		});
	
	var yValuesTotal = $.map(chartData, function(data){
		return data[TimeframeConverted+"Total Construction Value"];
		});
	
	BlanksToRemove(yValuesResid);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValuesResid, dels);
	RemoveBlanks(yValuesNonResid, dels);
	RemoveBlanks(yValuesTotal, dels);

	data = [{
		x: xValues,
		y: yValuesResid,
		name: "Residential Buildings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: yValuesNonResid,
		name: "NonResidential Construction",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: yValuesTotal,
		name: "Total Construction Value",
		type: 'line',
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour3}
        }];

	layout = {
		title: 'Value of Consented Construction',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			tickangle: 45,
			type: 'date',
			range: [StartDate, EndDate],
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			tickformat: '$,s', 
			hoverformat: '$,.4s'
			}
		}
	;}
	
else if (datatypetouse_Development_by_Month == "Constructed Dwellings") {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Constructed Dwellings"];
		});
	
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValues, dels);
	
	data = [{
		x: xValues,
		y: yValues,
		name: "Constructed Dwellings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
        }];
	
	layout = {
		title: 'Constructed Dwellings',
		showlegend: false,
		xaxis: {
			zeroline: false, 
			tickangle: 45, 
			type: 'date',
			range: [StartDate, EndDate],
			fixedrange: Zooming			
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
			}
		}
	;}
	



Plotly.newPlot('AllDevelopmentbyMonth', data, layout);
}
