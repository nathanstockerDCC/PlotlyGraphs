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

var PopByAgeDict = {
	"Total": ["Total", "population"],
	"Growth": ["AbsoluteGrowth", "growth for population"],
	"Growth rate": ["GrowthRate", "growth rate for population"]
	};

if (DataSeriesToUse == "Population by age"){
	
	if (DataTypeToUse == "Total"){
		data = [{
			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Estimated_0_14_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 0-14',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour1}		
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Estimated_15_24_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 15-24',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour3}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Estimated_25_64_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 25-64',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour2}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Estimated_65_plus_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 65+',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour4}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Projected_0_14_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 0-14',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'one',
			marker: {color: Colour1}		
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Projected_15_24_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 15-24',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'one',
			marker: {color: Colour3}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Projected_25_64_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 25-64',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'one',
			marker: {color: Colour2}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["Projected_65_plus_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 65+',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'one',
			marker: {color: Colour4}
			}
			];		
		;}
	
	else {
		data = [{
			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["YearRange_0_14_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 0-14',
			type: 'bar',
			marker: {color: Colour1}		
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["YearRange_15_24_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 15-24',
			type: 'bar',
			marker: {color: Colour3}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["YearRange_25_64_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 25-64',
			type: 'bar',
			marker: {color: Colour2}
			},{

			x: $.map(chartData, function(data){
				return data["Year"]
				;}),
			y: $.map(chartData, function(data){
				return data["YearRange_65_plus_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"]
				;}),
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 65+',
			type: 'bar',
			marker: {color: Colour4}
			}
			];				
	;}

;}
	
	
var yRangeDict = {};
yRangeDict["Population" + "Growth"] = [-510,2100];
yRangeDict["Population" + "Growth rate"] = [-0.0051,0.0151];
yRangeDict["Population" + "Total"] = [108900,161010];
yRangeDict["Households" + "Growth"] = [-210,810];
yRangeDict["Households" + "Growth rate"] = [-0.0051,0.0151];
yRangeDict["Households" + "Total"] = [39500,65500];
yRangeDict["Population by age" + "Growth"] = [-600,1500];
yRangeDict["Population by age" + "Growth rate"] = [-0.02,0.04];
yRangeDict["Population by age" + "Total"] = [0,70000];
	
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
