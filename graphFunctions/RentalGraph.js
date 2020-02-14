function RentalGraph(chartData){
	

var DataToUse = $('#TypeDD_RentalGraph option:selected').text();


if (DataToUse == "Average rental cost"){
	data = [{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Lower Quartile"]
			;}),
		line: {width: 4},
		name: 'Lower Quartile',
		marker: {color: Colour1}
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Geometric Mean"]
			;}),
		line: {width: 4},
		name: 'Mean',
		marker: {color: Colour2}			
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Upper Quartile"]
			;}),
		line: {width: 4},
		name: 'Upper Quartile',
		marker: {color: Colour4}			
		}
		];
		
	layout = {
		title: 'Rental Costs',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickangle: 45,
			tickmode: 'linear', 
			tick0: 0,
			dtick: 'M24',
			tickformat: "%Y"},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '$,s', 
			rangemode: "tozero"}
		};

	}

else if (DataToUse == "Growth rate"){
	data = [{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Annual increase in mean rental costs"]
			;}),
		line: {width: 4},
		name: 'Annual increase in mean rental costs',
		marker: {color: Colour1}
        }];
		
	layout = {
		title: 'Rental Costs',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickangle: 45,
			tickmode: 'linear', 
			tick0: 0,
			dtick: 'M24',
			tickformat: "%Y"},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '%', 
			rangemode: "tozero"}
		};

	}

else {
	
	data = [{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Geometric Mean"]
			;}),
		type: 'line',
		line: {width: 5},
		name: 'Dunedin City',
		marker: {width: 100, color: Colour1}
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Auckland"]
			;}),
		type: 'line',
		name: 'Auckland',
		marker: {color: Colour2}	
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Christchurch"]
			;}),
		type: 'line',
		name: 'Christchurch',
		marker: {color: Colour3}			
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["National"]
			;}),
		type: 'line',
		name: 'National',
		marker: {color: Colour4}			
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Wellington"]
			;}),
		type: 'line',
		name: 'Wellington Region',
		marker: {color: Colour5}			
		}
		];
		
	layout = {
		title: 'Rental Costs',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickangle: 45,
			type: 'date',
			tickmode: 'linear', 
			tick0: 1,
			dtick: 'M24',
			tickformat: "%Y"},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '$,s', 
			rangemode: "tozero"}
		};	
	
	}


Plotly.newPlot('RentGraph', data, layout);
}
