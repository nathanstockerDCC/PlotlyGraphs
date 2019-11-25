function DevTrendsByYearGraph(chartData){

	if (chartData == null || chartData.length <= 0)
		return;

	var dels = [];

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
		
	data = [{
		xValues: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		yValuesHouses: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Houses"];}),
		name: 'Houses',
		line: {width: 6},
		marker: {color: Colour1}
		}, {
		xValues: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		yValuesUnits: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Units"];}),
		name: 'Units',
		line: {width: 6,},
		marker: {color: Colour2}
		}, {
		xValues: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		yValuesApartments: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Apartments"];}),
		name: 'Apartments',
		line: {width: 6,},
		marker: {color: Colour5}
		}, {
		xValues: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		yValuesRVUs: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Retirement Village Units"];}),
		name: 'Retirement Village Units',
		line: {width: 6,},
		marker: {color: Colour4}
		}, {
		xValues: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"];}),
		yValuesTotal: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Total New Dwellings"];}),
		name: 'Total',
		opacity: 0.7,
		marker:{color:'#AAAAAA'},
		type: 'bar'	
		}],

	BlanksToRemove(yValuesHouses);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValuesHouses, dels);
	RemoveBlanks(yValuesUnits, dels);
	RemoveBlanks(yValuesApartments, dels);
	RemoveBlanks(yValuesRVUs, dels);
	RemoveBlanks(yValuesTotal, dels);
	
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


	Plotly.plot(Dev_Trends_by_Year, data, layout);
	} 
