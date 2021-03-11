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
	"Growth": ["AbsoluteGrowth", "growth:"],
	"Growth rate": ["GrowthRate", "growth rate:"],
	"EstimatesStartDate" : 1996,
	"EstimatesEndDate" : 2017,
	"ProjectionsStartDate" : 2018,
	"ProjectionsEndDate" : 2043
	};

	
	
if (DataSeriesToUse == "Population by age"){
	
	if (DataTypeToUse == "Total"){
		
		var xValues = ($.map(chartData, function(data){
			return data["Year"];
			})).splice(PopByAgeDict[EstimatesStartDate],PopByAgeDict[ProjectionsEndDate]);
			
		var yValues_0_14_estimated = ($.map(chartData, function(data){
			return data["Estimated_0_14_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[EstimatesStartDate],PopByAgeDict[EstimatesEndDate]);
			
		var yValues_15_24_estimated = ($.map(chartData, function(data){
			return data["Estimated_15_24_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[EstimatesStartDate],PopByAgeDict[EstimatesEndDate]);
			
		var yValues_25_64_estimated = ($.map(chartData, function(data){
			return data["Estimated_25_64_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[EstimatesStartDate],PopByAgeDict[EstimatesEndDate]);
			
		var yValues_65_plus_estimated = ($.map(chartData, function(data){
			return data["Estimated_65_plus_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[EstimatesStartDate],PopByAgeDict[EstimatesEndDate]);
			
		var yValues_0_14_projected = ($.map(chartData, function(data){
			return data["Projected_0_14_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[ProjectionsStartDate],PopByAgeDict[ProjectionsEndDate]);
			
		var yValues_15_24_projected = ($.map(chartData, function(data){
			return data["Projected_15_24_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[ProjectionsStartDate],PopByAgeDict[ProjectionsEndDate]);
			
		var yValues_25_64_projected = ($.map(chartData, function(data){
			return data["Projected_25_64_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[ProjectionsStartDate],PopByAgeDict[ProjectionsEndDate]);
			
		var yValues_65_plus_projected = ($.map(chartData, function(data){
			return data["Projected_65_plus_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			})).splice(PopByAgeDict[ProjectionsStartDate],PopByAgeDict[ProjectionsEndDate]);
				

/* 		testRange = []
		testAdd = [,]
		var i;
		for (i = 0; i < yValues_0_14_estimated.length; i++) {
			if (yValues_0_14_estimated[i] > 0 || yValues_0_14_projected[i] > 0 ) {
				testRange.concat(1) 
				}
			else {
				testRange.concat(testAdd[0]);
				;} 
		 
			}				
		BlanksToRemove(testRange);
		RemoveBlanks(xValues, dels);
		RemoveBlanks(yValues_0_14_estimated, dels);		
		RemoveBlanks(yValues_15_24_estimated, dels);		
		RemoveBlanks(yValues_25_64_estimated, dels);		
		RemoveBlanks(yValues_65_plus_estimated, dels);		
		RemoveBlanks(yValues_0_14_projected, dels);		
		RemoveBlanks(yValues_15_24_projected, dels);		
		RemoveBlanks(yValues_25_64_projected, dels);		
		RemoveBlanks(yValues_65_plus_projected, dels);		 */
		
		console.log("xValues: " + xValues);
		console.log("yValues: " + yValues_0_14_estimated);
//		console.log("NewX: " + xValues.splice(xValues.indexOf(1996), xValues.indexOf(2017)));
//		console.log("NewY: " + yValues_0_14_estimated.splice(xValues.indexOf(1996), xValues.indexOf(2017)));
		
		data = [{
			x: xValues,
			y: yValues_0_14_estimated,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 0-14',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour1}		
			},{

			x: xValues,
			y: yValues_15_24_estimated,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 15-24',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour3}
			},{

			x: xValues,
			y: yValues_25_64_estimated,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 25-64',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour2}
			},{

			x: xValues,
			y: yValues_65_plus_estimated,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 65+',
			line: {width: 4},
			stackgroup: 'one',
			marker: {color: Colour4}
			},{

			x: xValues,
			y: yValues_0_14_projected,
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 0-14',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'two',
			marker: {color: Colour1}		
			},{

			x: xValues,
			y: yValues_15_24_projected,
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 15-24',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'two',
			marker: {color: Colour3}
			},{

			x: xValues,
			y: yValues_25_64_projected,
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 25-64',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'two',
			marker: {color: Colour2}
			},{

			x: xValues,
			y: yValues_65_plus_projected,
			name: 'Projected '+PopByAgeDict[DataTypeToUse][1]+' aged 65+',
			line: {width: 4, dash: 'dashdot'},
			stackgroup: 'two',
			marker: {color: Colour4}
			}
			];		
		;}
	
	else {

		var xValues = $.map(chartData, function(data){
				return data["YearRange"];
			});
			
		var yValues_0_14 = $.map(chartData, function(data){
			return data["YearRange_0_14_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			});
			
		var yValues_15_24= $.map(chartData, function(data){
			return data["YearRange_15_24_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			});
			
		var yValues_25_64 = $.map(chartData, function(data){
			return data["YearRange_25_64_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			});
			
		var yValues_65_plus = $.map(chartData, function(data){
			return data["YearRange_65_plus_"+PopByAgeDict[DataTypeToUse][0]+"_Medium"];
			});


		BlanksToRemove(yValues_0_14);
		RemoveBlanks(xValues, dels);
		RemoveBlanks(yValues_0_14, dels);		
		RemoveBlanks(yValues_15_24, dels);		
		RemoveBlanks(yValues_25_64, dels);		
		RemoveBlanks(yValues_65_plus, dels);		

		data = [{
			x: xValues,
			y: yValues_0_14,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 0-14',
			type: 'bar',
			marker: {color: Colour1}		
			},{

			x: xValues,
			y: yValues_15_24,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 15-24',
			type: 'bar',
			marker: {color: Colour3}
			},{

			x: xValues,
			y: yValues_25_64,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 25-64',
			type: 'bar',
			marker: {color: Colour2}
			},{

			x: xValues,
			y: yValues_65_plus,
			name: 'Estimated '+PopByAgeDict[DataTypeToUse][1]+' aged 65+',
			type: 'bar',
			marker: {color: Colour4}
			}
			];

		dTickValue = 1;
	;}

;}

if (DataSeriesToUse == "Population by age" && DataTypeToUse == "Total"){
	TickAngleValue = 0,
	RangeVal = [1996, 2043]
	;}

else if (DataSeriesToUse == "Population by age" && DataTypeToUse != "Total"){
	TickAngleValue = 0,
	RangeVal = []
	;}
	
else {
	TickAngleValue = 45,
	RangeVal = []
	;}

	
	
var yRangeDict = {};
yRangeDict["Population" + "Growth"] = [-510,2100];
yRangeDict["Population" + "Growth rate"] = [-0.0051,0.0151];
yRangeDict["Population" + "Total"] = [108900,161010];
yRangeDict["Households" + "Growth"] = [-210,810];
yRangeDict["Households" + "Growth rate"] = [-0.0051,0.0151];
yRangeDict["Households" + "Total"] = [39500,65500];
yRangeDict["Population by age" + "Growth"] = [-2600,8100];
yRangeDict["Population by age" + "Growth rate"] = [-0.11,0.35];
yRangeDict["Population by age" + "Total"] = [0,175000];
	
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
		tickangle: TickAngleValue,
		range : RangeVal,
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
