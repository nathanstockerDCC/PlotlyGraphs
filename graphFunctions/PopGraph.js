function PopGraph(chartData){

var DataToUse = $('#datatypedd_PopGraph option:selected').text();

if (DataToUse == "Total"){
		
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["EstimatedPopulation_Total"]
			;}),
		name: 'Estimated population',
		line: {width: 6},
		marker: {color: Colour1}		
		},{
			
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_Total"]
			;}),
		name: 'Projected population',
		line: {width: 6},
		marker: {color: Colour2}
	}];
	
	yRange = [109000,151000];
	tickformatValue = ",";
	
	;}
	
else if (DataToUse == "Growth"){
		
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["EstimatedPopulation_AbsoluteGrowth"]
			;}),
		name: 'Estimated population growth',
		line: {width: 6},
		marker: {color: Colour1}		
		},{
			
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_AbsoluteGrowth"]
			;}),
		name: 'Projected population growth',
		line: {width: 6},
		marker: {color: Colour2}
	}];

	yRange = [-500,2000];
	tickformatValue = ",";
	
	;}
	
else {	
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["EstimatedPopulation_GrowthRate"]
			;}),
		name: 'Estimated growth rate',
		line: {width: 6},
		marker: {color: Colour1},
		hovertemplate: '%{y:0.2%}'
		},{
			
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_GrowthRate"]
			;}),
		name: 'Projected growth rate',
		line: {width: 6},
		marker: {color: Colour2},
		hovertemplate: '%{y:0.2%}'
		}];
	
	yRange = [-0.005,0.015];
	tickformatValue = "0.1%";
	
	;}
	
	
layout = {
	title: 'Population trends',
	showlegend: true,
	legend: {
		orientation: 'h',
		y: '-0.25',
		x: '0.5',
		xanchor: 'center'},
	xaxis: {
		zeroline: false,
		tickmode: 'linear',
		tick0: 0,
		dtick: 5,
		tickangle: 45,
		fixedrange: Zooming
		},
	yaxis: {
		zeroline: false,
		fixedrange: Zooming,
		range: yRange,
		tickformat: tickformatValue
		}, 
	}

Plotly.newPlot('PopulationGraph', data, layout);
	
;} 
