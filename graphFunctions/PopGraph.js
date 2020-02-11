function PopulationGraph(chartData){


data = [{
	x: $.map(chartData, function(data){
		return data["Year"]
		;}),
	y: $.map(chartData, function(data){
		return data["EstimatedPopulation_Total"]
		;}),
	name: 'Estimated Population',
	line: {width: 6},
	marker: {color: Colour1}		
	},{
		
	x: $.map(chartData, function(data){
		return data["Year"]
		;}),
	y: $.map(chartData, function(data){
		return data["ProjectedPopulation_Total"]
		;}),
	name: 'Projected Population',
	line: {width: 6},
	marker: {color: Colour2}
	}];


layout = {
	title: 'Population trends',
	showlegend: true,
	legend: {
		orientation: 'h',
		y: '-0.25',
		x: '0.5',
		xanchor: 'center'},
	xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 5, tickangle: 45, fixedrange: Zooming},
	yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero"}, 
	}


		
Plotly.newPlot('PopulationGraph', data, layout);
	
} 
