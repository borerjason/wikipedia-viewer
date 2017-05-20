$(document).ready(function(){
	$(".fa-search").click(moveSearchBar);
	$(".fa-search").click(getResults);
	$("input[name=search]").keypress(function(event){
		var key = event.which;
		if(key === 13){
			$(".fa-search").click();
			return false;
		}
	});
	// clear the results divs when click the clear button
	$(".fa-times-circle").click(function(){
		$(".results").empty();
		$('input[type=text]').val("");
	});
});

//retrieve data from wiki API
//https://www.mediawiki.org/wiki/API:Opensearch
function getResults(){
	var api_endpt = "http://en.wikipedia.org/w/api.php";
	$.ajax({
		url: api_endpt,
		data: { action: 'opensearch', search: $("input[name=search]").val(), format: 'json' }, 
		dataType: "jsonp",
		type: "GET",
		error: function(){
			console.log("could not receive data");
		},
		success: printInfo
	});
}	

function printInfo(data){
	$(".results").empty();
	for(var i = 0; i < 10; i++){
		$(".results").append("<a href ='" + data[3][i] + "' target = '_blank' class = 'box'  > <div class = 'page'>" + "<h4>" + data[1][i] + "</h4> <br> <p>" + data[2][i] + "</p> </div> </a>");	
	};	
}

function moveSearchBar(){
	$("form").css("margin-top", "10px");
}
