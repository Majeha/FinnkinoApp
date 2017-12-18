//Make the URL-code so the area is not hard coded and user can search the area
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var date ="&dt="+ dd+'.'+mm+'.'+yyyy+'"';
var api = "http://www.finnkino.fi/xml/Schedule/?area="

    		
   				
   			
   		
//putting userinput and rest of the url together



	//function for onchange
function change() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 & xmlhttp.status ==200) {
			myData(this);
		}
	};
	//list
	var ovalue= document.getElementById('selectcity').value;
	var url2 = api + ovalue + date;
	xmlhttp.open("GET", url2, true);
	xmlhttp.send();
		function myData(xml) {
			var i;
			var xmlDoc = xml.responseXML;
			var table= '<tr><th></th><th>Teatteri</th><th>Esitys alkaa</th></tr>';
			var x = xmlDoc.getElementsByTagName
			x = xmlDoc.getElementsByTagName("Show");
			for (i=0; i< x.length; i++){
				table += '<tr><td><img src="' + x[i].getElementsByTagName("EventSmallImagePortrait")[0].childNodes[0].nodeValue + '"></td><td>' +
				x[i].getElementsByTagName("TheatreAndAuditorium")[0].childNodes[0].nodeValue + '</td><td>'+
    			x[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue + '</td></tr><br>'; 
  				
  			}
			document.getElementById("moviedata").innerHTML =table;
			
			}
    		
   				}


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
			var table= '<tr><th></th><th>Location</th><th>Starts</th></tr>';
			var x = xmlDoc.getElementsByTagName
			x = xmlDoc.getElementsByTagName("Show");
			for (i=0; i< x.length; i++){
				table += '<tr><td><img src="' + x[i].getElementsByTagName("EventSmallImagePortrait")[0].childNodes[0].nodeValue + '"></td><td>' +
				x[i].getElementsByTagName("TheatreAndAuditorium")[0].childNodes[0].nodeValue + '</td><td>'+
    			x[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue + '</td></tr><br>'; 
  				
  			}
			document.getElementById("moviedata").innerHTML =table;
			
			}
		}





