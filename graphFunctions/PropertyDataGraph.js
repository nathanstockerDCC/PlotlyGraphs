function PropertyDataGraph(chartData){

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
		{dTickValue = 20;}
	else 
		{dTickValue = 4;}

	
	var DataType = $('#PropertySales_DataType option:selected').text();
	
	var yAxisFormat = '';
	
	if (DataType == "House sales")
		{yAxisFormat = '';}
	else if (DataType == "Growth rate")
		{yAxisFormat = '%';}
	else 
		{yAxisFormat = '$,s';};
	
	var xData = $.map(chartData, function(data){
				return data["Quarter"];
				});
	
 	if (DataType == "House values and sales"){
		data = [{
			x: xData,
			y: $.map(chartData, function(data){
				return data["Average house values"];
				}),
			type: 'line',
			name: 'Average house values',
			line: {width: 6},
			marker: {color: Colour1},
			yaxis: 'y2'		
		},{
			x: xData,
			y: $.map(chartData, function(data){
				return data["House sales"];
				}),
			type: 'bar',
			name: 'House sales',
			marker: {color: Colour3}
			}];
			
		layout = {
			title: "House sales and average values",
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
				rangemode: "tozero",
				side: 'right',
				range:[0,1200]
				},
			yaxis2: {
				zeroline: false,
				fixedrange: Zooming,
				rangemode: "tozero",
				side: 'left',
				tickformat: '$,s',
				overlaying: 'y',
				range:[0,600000]
				}
			};
		
		}
	
	else if (DataType == "Growth rate"){
		data = [{
			x: xData,
			y: $.map(chartData, function(data){
				return data["Quarterly growth rate"];
				}),
			type: 'line',
			name: 'Quarterly growth rate',
			line: {width: 6},
			marker: {color: Colour1}
		},{
			x: xData,
			y: $.map(chartData, function(data){
				return data["Annual growth rate"];
				}),
			type: 'line',
			name: 'Annual growth rate',
			line: {width: 6},
			marker: {color: Colour3}
			}];
			
		layout = {
			title: "House value growth",
			showlegend: true,
			legend: {
				orientation: 'h',
				y: '-0.25',
				x: '0.5',
				xanchor: 'center'
				},
			xaxis: {
				zeroline: true,
				tickmode: 'linear',
				tick0: 0,
				dtick: dTickValue,
				tickangle: 45,
				fixedrange: Zooming
				},
			yaxis: {
				zeroline: false,
				fixedrange: Zooming,
				rangemode: "tozero",
				tickformat: yAxisFormat
				}
		};
		}

	else {
		data = [{
			x: xData,
			y: $.map(chartData, function(data){
				return data[DataType];
				}),
			type: 'line',
			name: 'Property sales',
			line: {width: 6},
			marker: {color: Colour1}
			}];
		layout = {
			title: DataType,
			showlegend: false,
			xaxis: {
				zeroline: false,
				ticktext: xData,
				tickmode: 'linear',
				tick0: 0,
				dtick: dTickValue,
				tickangle: 45,
				fixedrange: Zooming
				},
			yaxis: {
				zeroline: false,
				fixedrange: Zooming,
				rangemode: "tozero",
				tickformat: yAxisFormat
				}
			};
		}
			


	Plotly.newPlot('PropertyDataInfo', data, layout);
	}
