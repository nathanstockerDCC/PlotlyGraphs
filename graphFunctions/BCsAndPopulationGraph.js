function BCsAndPopulationGraph(chartData){

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

Years = $.map(chartData, function(data){
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

ProjectedDwellingGrowthData = $.map(chartData, function(data){
			return data["Projected dwelling growth"];
			});			
			
BlanksToRemove(Years);
RemoveBlanks(HouseholdGrowthData, dels);
RemoveBlanks(ConstructedDwellingsData, dels);
RemoveBlanks(ConsentedDwellingsData, dels);
RemoveBlanks(ProjectedDwellingGrowthData, dels);
RemoveBlanks(Years, dels);

			
data = [{
		x: Years,
		y: HouseholdGrowthData,
		line: {width: 6},
		name: "Household growth",
		visible: 'true',
		marker: {color: Colour3}
		
        },{
			
		x: Years,
		y: ConstructedDwellingsData,
		line: {width: 6},
		connectgaps: true,
		visible: 'legendonly',
		name: 'Constructed dwellings',
		marker: {color: Colour2},

		},{
			
		x: Years,
		y: ConsentedDwellingsData,
		line: {width: 6},
		connectgaps: true,
		visible: 'true',
		name: 'Consented dwellings',
		marker: {color: Colour1},

		},{
			
		x: Years,
		y: ProjectedDwellingGrowthData,
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
			title: 'Click to show/hide',
			xanchor: 'center'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0 : 1,
			dtick: 2,
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
