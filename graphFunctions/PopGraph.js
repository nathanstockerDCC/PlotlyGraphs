function PopGraph(chartData){

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

	
if (WindowWidth < 500)
	{dTickValue = 10;}
else 
	{dTickValue = 5;}

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
			return data["ProjectedPopulation_Total_Low"]
			;}),
		name: 'Projected population (low growth scenario)',
		line: {width: 6},
		marker: {color: Colour3}
		},{

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_Total_Medium"]
			;}),
		name: 'Projected population (medium growth scenario)',
		line: {width: 6},
		marker: {color: Colour2}
		},{

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_Total_High"]
			;}),
		name: 'Projected population (high growth scenario)',
		line: {width: 6},
		marker: {color: Colour4}
		}
		];
	
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
			return data["ProjectedPopulation_AbsoluteGrowth_Low"]
			;}),
		name: 'Projected population growth (low growth scenario)',
		line: {width: 6},
		marker: {color: Colour3}
		},{	

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_AbsoluteGrowth_Medium"]
			;}),
		name: 'Projected population growth (medium growth scenario)',
		line: {width: 6},
		marker: {color: Colour2}
		},{	

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_AbsoluteGrowth_High"]
			;}),
		name: 'Projected population growth (high growth scenario)',
		line: {width: 6},
		marker: {color: Colour4}
		}
		];

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
			return data["ProjectedPopulation_GrowthRate_Low"]
			;}),
		name: 'Projected growth rate (low growth scenario)',
		line: {width: 6},
		marker: {color: Colour3},
		hovertemplate: '%{y:0.2%}'
		},{
			
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_GrowthRate_Medium"]
			;}),
		name: 'Projected growth rate (medium growth scenario)',
		line: {width: 6},
		marker: {color: Colour2},
		hovertemplate: '%{y:0.2%}'
		},{
			
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["ProjectedPopulation_GrowthRate_High"]
			;}),
		name: 'Projected growth rate (high growth scenario)',
		line: {width: 6},
		marker: {color: Colour4},
		hovertemplate: '%{y:0.2%}'
		}
		];
	
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
		dtick: dTickValue,
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
