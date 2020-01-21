function DevTrendsByYearGraph(chartData){
	
	data = [{
		x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Houses"];}),
		name: 'Houses',
		line: {width: 6},
		marker: {color: Colour1}
	}, {
		x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Units"];}),
		name: 'Units',
		line: {width: 6,},
		marker: {color: Colour2}
	}, {
		x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Apartments"];}),
		name: 'Apartments',
		line: {width: 6,},
		marker: {color: Colour4}
	}, {
		x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Retirement Village Units"];}),
		name: 'Retirement Village Units',
		line: {width: 6,},
		marker: {color: Colour5}
	}, {
		x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Total New Dwellings"];}),
		name: 'Total',
		opacity: 0.7,
		marker: {color: Colour3},
		type: 'bar'	
	}];
	
	layout = {
		title: 'Consented Dwellings by Year',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false,
			tickmode: 'linear',
			tick0: 1992,
			dtick: 2,
			tickangle: 45,
			fixedrange: Zooming},
		yaxis: {
			zeroline: false,
			fixedrange: Zooming}
		};


	Plotly.newPlot('Dev_Trends_by_Year', data, layout);
	} 
