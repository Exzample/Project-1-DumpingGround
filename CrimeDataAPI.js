// var apiKey = "?api_key=OLKXfHfTQoGspfQel1wVFLFGMu5Nz7nkSyNRZLGn";
// var baseURL = "https://api.usa.gov/crime/fbi/sapi/api/data/arrest/national/homicide/"+`${since}` + `${until}`;

// var queryURL = baseURL + "homicide"+ apiKey;

// Query Parameters //
// National Level Arrest Demographic Count Endpoint //
// /api/data/arrest/national/{offense}/{variable}/{since}/{until}
// Variable could be a pick list option, API accepts data type "string"
/* Offense Options - 
        aggravated-assult
        burglary
        larceny
        motor-vehicle-theft
        homicide
        rape
        robbery
        arson
        violent-crime
        property-crime
*/
// var offense = $('<button type="select" id="Homicide>').onClick().val();
// // Variable could be a pick list option, API accepts data type "string" 
// // Possible Options (Male, Female, offense, race, monthly )
// var variable = $('<button type="select" id="Demographics"').onClick().val();
// // Start date data type is integer
// var since = $('<input id="start-date">').onClick().val();
// // End date data type is integer
// var until = $('<input id="end-date"').onClick().val();

<script src="jquery-3.3.1.min.js" />;

$.ajax({
    url: "https://api.usa.gov/crime/fbi/sapi/api/agencies?api_key=OLKXfHfTQoGspfQel1wVFLFGMu5Nz7nkSyNRZLGn",
    method: get,
}).done( () => {
    console.log(response);
});