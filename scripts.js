$(document).ready(function(){
	$(".search").click(moveSearchBar);
	$(".fa-search").click(moveSearchBar);

	$(".fa-search").click(getResults);

});
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
	for(var i = 0; i < 10; i++){
		var txtTitle = $("<h4></h4>").html(data[1][i]);
		var txt = $("<p></p>").html(data[2][i]);
		$(".results").append(txtTitle).append(txt);
	};
}

function moveSearchBar(){
	$("form").css("margin-top","10px");
}


