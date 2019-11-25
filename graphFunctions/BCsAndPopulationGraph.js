
function BCsAndPopulationGraph(chartData){

var DataType = $('#datatypedd_BCs_and_pop_growth_graph option:selected').text();

Years = $.map(chartData, function(data){
			return data["Year"];
			});

if (DataType == "Consented Dwellings"){
	xRange = [1990.5, Years[Years.length]]
		;}
else {
	xRange = [2008.5, Years[Years.length]]
	;}

data = [{
		x: Years,
		y: $.map(chartData, function(data){
			return data[DataType];
		}),
		line: {width: 6},
		name: DataType,
		marker: {color: Colour1}
		
        },{
			
		x: Years,
		y: $.map(chartData, function(data){
			return data["HouseholdGrowth"];
		}),
		line: {width: 6},
		connectgaps: true,
		name: 'Approx. Household Growth',
		marker: {color: Colour2},

		}];

		
layout = {
		title: DataType+' and Household Growth',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0 : 1,
			dtick: 2,
			tickangle: 45,
			range: xRange,
			title: "Year ending 30 June"},
			
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false}
	};



Plotly.newPlot('BCsAndPopulation', data, layout);
}
