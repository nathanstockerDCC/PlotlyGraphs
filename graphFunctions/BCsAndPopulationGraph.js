function BCsAndPopulationGraph(chartData){

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
	
console.log(WindowWidth);
	
if (WindowWidth < 500)
	{dtickValue = 5;}
else 
	{dtickValue = 2;}

	
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

Years_HouseholdGrowth = $.map(chartData, function(data){
			return data["Year"];
			});

Years_ConstructedDwellings = $.map(chartData, function(data){
			return data["Year"];
			});

Years_ConsentedDwellings = $.map(chartData, function(data){
			return data["Year"];
			});

Years_ProjectedDwellingGrowth = $.map(chartData, function(data){
			return data["Year"];
			});
			
HouseholdGrowthData = $.map(chartData, function(data){
			return data["Household growth"];
			});
		
ConstructedDwellingsData = $.map(chartData, function(data){
			return data["Constructed dwellings"];
			});	
		
ConsentedDwellingsData = $.map(chartData, function(data){
			return data["Consented dwellings"];
			});

			
BlanksToRemove(HouseholdGrowthData);
RemoveBlanks(HouseholdGrowthData, dels);
RemoveBlanks(Years_HouseholdGrowth, dels);

BlanksToRemove(ConstructedDwellingsData);
RemoveBlanks(ConstructedDwellingsData, dels);
RemoveBlanks(Years_ConstructedDwellings, dels);

BlanksToRemove(ConsentedDwellingsData);
RemoveBlanks(ConsentedDwellingsData, dels);
RemoveBlanks(Years_ConsentedDwellings, dels);

			
data = [{
		x: Years_HouseholdGrowth,
		y: HouseholdGrowthData,
		visible: 'true',
		type: 'bar',
		name: "Household growth",
		marker: {color: Colour3}
		
        },{
			
		x: Years_ConstructedDwellings,
		y: ConstructedDwellingsData,
		connectgaps: true,
		visible: 'legendonly',
		type: 'bar',
		name: 'Constructed dwellings',
		marker: {color: Colour2},

		},{
			
		x: Years_ConsentedDwellings,
		y: ConsentedDwellingsData,
		connectgaps: true,
		visible: 'true',
		type: 'bar',
		name: 'Consented dwellings',
		marker: {color: Colour1},

		}];

		
layout = {
		title: 'Development and growth trends',
		showlegend: true,
		barmode: 'stack',
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			title: 'Click to show/hide',
			xanchor: 'center'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0 : 0,
			dtick: dtickValue,
			tickangle: 45,
			autorange: true,
			title: "Year ending 30 June"},
			
		yaxis: {
			fixedrange: Zooming, 
			autorange: true,
			zeroline: false}
	};



Plotly.newPlot('BCsAndPopulation', data, layout);
}
