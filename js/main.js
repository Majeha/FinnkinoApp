//Make the URL-code so the area is not hard coded and user can search the area
var api = "http://www.finnkino.fi/xml/Schedule/?area="
var date = "&dt=18.12.2017"
//Function for search for citys weather
function getData() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 & xmlhttp.status ==200) {
			myData(this);
		}
	};
	//user input
	var uinput=document.getElementById('input').value;
	var url = api + uinput + date;
	xmlhttp.open("GET", url, true);
	console.log(url);
	xmlhttp.send();
	
		function myData(xml) {
			var i;
			var xmlDoc = xml.responseXML;
			var table= '<tr><th>Title</th><th>Location</th><th>Starts</th><th>Image</th></tr>';
			var x = xmlDoc.getElementsByTagName
			x = xmlDoc.getElementsByTagName("Show");
			for (i=0; i< x.length; i++){
				table += '<tr><td>' +
				x[i].getElementsByTagName("OriginalTitle")[0].childNodes[0].nodeValue + '</td><td>' +
				x[i].getElementsByTagName("TheatreAndAuditorium")[0].childNodes[0].nodeValue + '</td><td>'+
    			x[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue + '</td><td><img src="' + 
  				x[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + '"></td></tr>';
  			}
			document.getElementById("moviedata").innerHTML =table;
			
			
			}
    		
   				
   			
   		
//putting userinput and rest of the url together



	//function for onchange
function change() {
	var xmlhttp = new XMLHttpRequest();
	var ovalue= document.getElementById('selectcity').value;
	var url = api + ovalue + date;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	myData();
}
    		
   				}




