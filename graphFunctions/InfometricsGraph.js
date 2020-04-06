function InfometricsGraph(chartData) {

	var DataToUseWithSpaces = $('#InfometricsGraph_Datatype option:selected').text();
	var DataToUse = DataToUseWithSpaces.replace(/ /g, "");
	var EndofString = DataToUseWithSpaces.slice(-6);

	RangeValues = [];

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
			line: {width: 6},
			name : "Dunedin",
			marker : {
				color : Colour1
			}

		}, {

			x : xValues,
			y : yValuesNZ,
			line: {width: 6},
			name : "New Zealand",
			marker : {
				color : Colour2
			}

		}
	];

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
			dtick: "M12",
			tick0: "2000-06-30",
			tickformat: "%b '%y",

			zeroline : false,
		},
			yaxis : {
			fixedrange : Zooming,
			zeroline : false
		}

		};
	
	Plotly.newPlot('InfometricsInfo', data, layout);
}
