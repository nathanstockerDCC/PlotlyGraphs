function PropertyDataGraph(chartData){
	
	var DataType = $('#PropertySales_DataType option:selected').text();
	
	var yAxisFormat = '';
	
	if (DataType == "House sales")
		{yAxisFormat = '';}
	else if (DataType == "Growth rate")
		{yAxisFormat = '%';}
	else 
		{yAxisFormat = '$,s';};
	
	
 	if (DataType == "House prices and sales"){
		data = [{
			x: $.map(chartData, function(data){
				return data["Quarter"];
				}),
			y: $.map(chartData, function(data){
				return data["Median house prices"];
				}),
			type: 'line',
			name: 'Median house price',
			line: {width: 6},
			marker: {color: Colour1},
			yaxis: 'y2'		
		},{
		x: $.map(chartData, function(data){
				return data["Quarter"];
				}),
			y: $.map(chartData, function(data){
				return data["House sales"];
				}),
			type: 'bar',
			name: 'House sales',
			marker: {color: Colour3}
			}];
			
		layout = {
			title: "House sales and median prices",
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
				dtick: 4,
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
			x: $.map(chartData, function(data){
				return data["Quarter"];
				}),
			y: $.map(chartData, function(data){
				return data["Quarterly growth rate"];
				}),
			type: 'line',
			name: 'Quarterly growth rate',
			line: {width: 6},
			marker: {color: Colour1}
		},{
		x: $.map(chartData, function(data){
				return data["Quarter"];
				}),
			y: $.map(chartData, function(data){
				return data["Annual growth rate"];
				}),
			type: 'line',
			name: 'Annual growth rate',
			line: {width: 6},
			marker: {color: Colour3}
			}];
			
		layout = {
			title: "House price growth",
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
				dtick: 4,
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
			x: $.map(chartData, function(data){
				return data["Quarter"];
				}),
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
				tickmode: 'linear',
				tick0: 0,
				dtick: 4,
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
