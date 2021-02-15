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

var DataSeriesToUse = $('#dataseriesdd_PopGraph option:selected').text();
var DataTypeToUse = $('#datatypedd_PopGraph option:selected').text();


if (DataTypeToUse == "Total"){
		
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Estimated" + DataSeriesToUse + "_Total"]
			;}),
		name: 'Estimated ' + DataSeriesToUse.toLowerCase(),
		line: {width: 6},
		marker: {color: Colour1}		
		},{

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Projected" + DataSeriesToUse + "_Total_Low"]
			;}),
		name: 'Projected ' + DataSeriesToUse.toLowerCase() + ' (low growth scenario)',
		line: {width: 6},
		marker: {color: Colour3}
		},{

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Projected" + DataSeriesToUse + "_Total_Medium"]
			;}),
		name: 'Projected ' + DataSeriesToUse.toLowerCase() + ' (medium growth scenario)',
		line: {width: 6},
		marker: {color: Colour2}
		},{

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Projected" + DataSeriesToUse + "_Total_High"]
			;}),
		name: 'Projected ' + DataSeriesToUse.toLowerCase() + ' (high growth scenario)',
		line: {width: 6},
		marker: {color: Colour4}
		}
		];
	
	tickformatValue = ",";
	
	;}
	
else if (DataTypeToUse == "Growth"){
		
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Estimated" + DataSeriesToUse + "_AbsoluteGrowth"]
			;}),
		name: 'Estimated growth',
		line: {width: 6},
		marker: {color: Colour1}		
		},{	

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Projected" + DataSeriesToUse + "_AbsoluteGrowth_Low"]
			;}),
		name: 'Projected growth (low growth scenario)',
		line: {width: 6},
		marker: {color: Colour3}
		},{	

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Projected" + DataSeriesToUse + "_AbsoluteGrowth_Medium"]
			;}),
		name: 'Projected growth (medium growth scenario)',
		line: {width: 6},
		marker: {color: Colour2}
		},{	

		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Projected" + DataSeriesToUse + "_AbsoluteGrowth_High"]
			;}),
		name: 'Projected growth (high growth scenario)',
		line: {width: 6},
		marker: {color: Colour4}
		}
		];

	tickformatValue = ",";
	
	;}
	
else {	
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["Estimated" + DataSeriesToUse + "_GrowthRate"]
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
			return data["Projected" + DataSeriesToUse + "_GrowthRate_Low"]
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
			return data["Projected" + DataSeriesToUse + "_GrowthRate_Medium"]
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
			return data["Projected" + DataSeriesToUse + "_GrowthRate_High"]
			;}),
		name: 'Projected growth rate (high growth scenario)',
		line: {width: 6},
		marker: {color: Colour4},
		hovertemplate: '%{y:0.2%}'
		}
		];
	
	tickformatValue = "0.1%";
	
	;}

	
var yRangeDict = {};
yRangeDict["PopulationGrowth"] = [-500,2000];
yRangeDict["PopulationGrowth rate"] = [-0.005,0.015];
yRangeDict["PopulationTotal"] = [109000,161000];
yRangeDict["HouseholdsGrowth"] = [-200,800];
yRangeDict["HouseholdsGrowth rate"] = [-0.005,0.015];
yRangeDict["HouseholdsTotal"] = [40000,65000];

	
layout = {
	title: DataSeriesToUse + ' trends',
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
		range: yRangeDict[DataSeriesToUse+DataTypeToUse],
		tickformat: tickformatValue
		}, 
	}

Plotly.newPlot('PopulationGraph', data, layout);
	
;} 
