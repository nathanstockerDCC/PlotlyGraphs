function CitywideBySuburbgraph(chartData){

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
	
if (WindowWidth < 900)
	{dTickValue = 2,
	tick0Value = 1;}
else 
	{dTickValue = 1,
	tick0Value = 0;}

var StartYear_Citywide_by_SuburbText = $('#dropdownStartYear_Citywide_by_Suburb option:selected').text();
var EndYear_Citywide_by_SuburbText = $('#dropdownEndYear_Citywide_by_Suburb option:selected').text();
var StartYear_Citywide_by_SuburbValue = $('#dropdownStartYear_Citywide_by_Suburb option:selected').val();
var EndYear_Citywide_by_SuburbValue = $('#dropdownEndYear_Citywide_by_Suburb option:selected').val();
var datatypetouse_Citywide_by_Suburb = $('#datatypedd_CitywideBySuburbgraph option:selected').text();


if(StartYear_Citywide_by_SuburbValue>EndYear_Citywide_by_SuburbValue)
{alert("End year is earlier than start year")};


var StartingYear = parseInt(StartYear_Citywide_by_SuburbText)-2004
var EndingYear = parseInt(EndYear_Citywide_by_SuburbText)-2004



var HousesCollated = [];
var UnitsCollated = [];
var ApartmentsCollated = [];
var TotalDwellingsCollated = [];
var RetirementVillageUnitsCollated = [];
var ConstructionValueCollated = [];


for(i = (parseInt(StartYear_Citywide_by_SuburbValue)); i <= (parseInt(EndYear_Citywide_by_SuburbValue)); i++)
	{
		TotalDwellingsWithYear = "TotalDwellings".concat(i);

		TotalDwellingsThisYear = $.map(chartData, function(data){
			return parseInt(data[TotalDwellingsWithYear]);
			});
		
		TotalDwellingsCollated = ArraySummation(TotalDwellingsCollated, TotalDwellingsThisYear);


		HousesWithYear = "Houses".concat(i);

		HousesThisYear = $.map(chartData, function(data){
			return parseInt(data[HousesWithYear]);
			});
		
		HousesCollated = ArraySummation(HousesCollated, HousesThisYear);
		

		UnitsWithYear = "Units".concat(i);

		UnitsThisYear = $.map(chartData, function(data){
			return parseInt(data[UnitsWithYear]);
			});
		
		UnitsCollated = ArraySummation(UnitsCollated, UnitsThisYear);
		

		ApartmentsWithYear = "Apartments".concat(i);

		ApartmentsThisYear = $.map(chartData, function(data){
			return parseInt(data[ApartmentsWithYear]);
			});
		
		ApartmentsCollated = ArraySummation(ApartmentsCollated, ApartmentsThisYear);

		
		RetirementVillageUnitsWithYear = "Retirement Village Units".concat(i);

		RetirementVillageUnitsThisYear = $.map(chartData, function(data){
			return parseInt(data[RetirementVillageUnitsWithYear]);
			});
		
		RetirementVillageUnitsCollated = ArraySummation(RetirementVillageUnitsCollated, RetirementVillageUnitsThisYear);	
	

		ConstructionValueWithYear = "ConstructionValue".concat(i);

		ConstructionValueThisYear = $.map(chartData, function(data){
			return parseInt(data[ConstructionValueWithYear]);
			});
		
		ConstructionValueCollated = ArraySummation(ConstructionValueCollated, ConstructionValueThisYear);

				
	};	
 
function ArraySummation(array1, array2){
{
  var result = [];
  var counter = 0;
  var x=0;

 while (counter < array1.length && counter < array2.length) 
  {
    result.push(array1[counter] + array2[counter]);
    counter++;
  }

 if (counter === array1.length) 
 {
    for (x = counter; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = counter; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

	
	};

	
var SuburbsList = $.map(chartData, function(data){
			return data["Suburb"];
			});

			
	var CategoryOrderType = CategoryOrderType || 'trace';
			
			
if (datatypetouse_Citywide_by_Suburb == "Total dwellings consented") {

	data = [{
		x: SuburbsList,
		y: TotalDwellingsCollated,
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total dwellings consented by suburb'+" ("+StartYear_Citywide_by_SuburbText+"-"+EndYear_Citywide_by_SuburbText+")",
		showlegend: false,
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: tick0Value, 
			dtick: dTickValue, 
			tickangle: 25, 
			categoryorder: 'category ascending',
			automargin: true,
			fixedrange: Zooming},
       	yaxis: {zeroline: false, rangemode: "tozero", fixedrange: Zooming}
		}
	;}
			
else if (datatypetouse_Citywide_by_Suburb == "Value of consented construction") {

	data = [{
		x: SuburbsList,
		y: ConstructionValueCollated,
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Value of consented construction by suburb'+" ("+StartYear_Citywide_by_SuburbText+"-"+EndYear_Citywide_by_SuburbText+")",
		showlegend: false,
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: tick0Value, 
			dtick: dTickValue, 
			tickangle: 25, 
			categoryorder: 'category ascending',
			automargin: true,
			fixedrange: Zooming},
       	yaxis: {
			zeroline: false, 
			rangemode: "tozero", 
			fixedrange: Zooming,
			tickformat: '$,s', 
			hoverformat: '$,.4s', 
			}
		}
	;}
	
else {

	data = [{
		x: SuburbsList,
		y: HousesCollated,
		name: "Houses",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: SuburbsList,
		y: UnitsCollated,
		name: "Units",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: SuburbsList,
		y: ApartmentsCollated,
		name: "Apartments",
		type: 'bar',
		marker: {color: Colour4}
		
        },{
		x: SuburbsList,
		y: RetirementVillageUnitsCollated,
		name: "Retirement Village Units",
		type: 'bar',
		marker: {color: Colour5}
        }]

	layout = {
		title: 'Dwellings consented by type and suburb'+" ("+StartYear_Citywide_by_SuburbText+"-"+EndYear_Citywide_by_SuburbText+")",
		showlegend: true,
//		legend: {orientation: 'h', y: '-0.25'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: tick0Value, 
			dtick: dTickValue,  
			tickangle: 25, 
			automargin: true,
			categoryorder: 'category ascending',
			fixedrange: Zooming},
		yaxis: {zeroline: false, rangemode: "tozero", fixedrange: Zooming},
		barmode: 'stack'
		}
	;}

	
Plotly.newPlot('CitywideBySuburb', data, layout);

;}
