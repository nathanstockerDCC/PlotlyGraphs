function InfometricsGraph(chartData) {

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
	{dTickValue = "M36";}
else 
	{dTickValue = "M12";}

var DataToUseWithSpaces = $('#InfometricsGraph_Datatype option:selected').text();
var DataToUse = DataToUseWithSpaces.replace(/ /g, "");
var EndofString = DataToUseWithSpaces.slice(-6);

RangeValues = [];

/*
document.getElementById("ExtraReferences").innerHTML = "";

if (DataToUseWithSpaces == "Rental affordability index") {
	var textdiv = document.getElementById("ExtraReferences");
	var aTag = document.createElement('a');
	aTag.setAttribute('href', "http://ecoprofile.infometrics.co.nz/Dunedin%20City/StandardOfLiving/RentalAffordability");
	aTag.setAttribute('target', "_blank");
	aTag.innerHTML = "Rental Affordability Index";
	textdiv.appendChild(aTag); ;
}

if (DataToUseWithSpaces == "Housing affordability index") {
	var textdiv = document.getElementById("ExtraReferences");
	var aTag = document.createElement('a');
	aTag.setAttribute('href', "http://ecoprofile.infometrics.co.nz/Dunedin%20City/StandardOfLiving/Housing_Affordability");
	aTag.setAttribute('target', "_blank");
	aTag.innerHTML = "Housing Affordability Index";
	textdiv.appendChild(aTag); ;
}
*/

	

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


var yValuesDunedin = $.map(chartData, function (data) {
				return data[DataToUse];
			});

var yValuesNZ = $.map(chartData, function (data) {
				return data[DataToUse.concat("_NZ")];
			});

var xValues = $.map(chartData, function (data) {
				return data["Quarter"];
			});

BlanksToRemove(yValuesDunedin);
RemoveBlanks(xValues, dels);
RemoveBlanks(yValuesDunedin, dels);
RemoveBlanks(yValuesNZ, dels);
				
	data = [{

			x : xValues,
			y : yValuesDunedin,
			line: {width: 4},
			name : "Dunedin",
			marker : {
				color : Colour1
			}

		}, {

			x : xValues,
			y : yValuesNZ,
			line: {width: 4},
			name : "New Zealand",
			marker : {
				color : Colour2
			}

		}
	];

	
if (DataToUseWithSpaces == "Rental affordability index")
	{
	rangemodeValue = "normal",
	rangeValue = [0.2, 0.4]
	;}
else
	{
	rangemodeValue = "tozero",
	rangeValue = ""
	;}

	layout = {
		title : DataToUseWithSpaces,
		showlegend : true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis : {
			fixedrange : Zooming,
			type: 'date',
			dtick: dTickValue,
			tick0: "2000-06-30",
			tickformat: "%b '%y",
			zeroline : false,
		},
		yaxis : {
			fixedrange : Zooming,
			rangemode: rangemodeValue,
			range: rangeValue,
			zeroline : false
		}

		};
	
	Plotly.newPlot('InfometricsInfo', data, layout);
}
