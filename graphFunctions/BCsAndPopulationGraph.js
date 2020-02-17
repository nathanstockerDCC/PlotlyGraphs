function BCsAndPopulationGraph(chartData){

Years = $.map(chartData, function(data){
			return data["Year"];
			});

data = [{
		x: Years,
		y: $.map(chartData, function(data){
			return data["Consented dwellings"];
		}),
		line: {width: 6},
		name: "Consented dwellings",
		visible: 'true',
		marker: {color: Colour1}
		
        },{
			
		x: Years,
		y: $.map(chartData, function(data){
			return data["Constructed dwellings"];
		}),
		line: {width: 6},
		connectgaps: true,
		visible: 'legendonly',
		name: 'Constructed dwellings',
		marker: {color: Colour2},

		},{
			
		x: Years,
		y: $.map(chartData, function(data){
			return data["Household growth"];
		}),
		line: {width: 6},
		connectgaps: true,
		visible: 'true',
		name: 'Household growth',
		marker: {color: Colour3},

		},{
			
		x: Years,
		y: $.map(chartData, function(data){
			return data["Projected dwelling growth"];
		}),
		line: {width: 6},
		connectgaps: true,
		visible: 'legendonly',
		name: 'Projected dwelling growth',
		marker: {color: Colour4},

		}];

		
layout = {
		title: 'Development and growth trends',
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
//			range: xRange,
			title: "Year ending 30 June"},
			
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false}
	};



Plotly.newPlot('BCsAndPopulation', data, layout);
}
