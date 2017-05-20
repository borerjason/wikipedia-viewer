$(document).ready(function(){
	
	$(".search").click(moveSearchBar);
	$(".fa-search").click(moveSearchBar);
	$(".fa-search").click(getResults);
	
	// keyboard - institute after get drop down working
	// $("input").keypress(function(event){
    

	$(".fa-times-circle").click(function(){
		$(".results").empty();
		$('input[type=text]').val("");
	});

    
});

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



// some learnings http://codepen.io/codinger/pen/adwErq
/*
var txtTitle = $("<h4></h4>").html(data[1][i]);
		var txt = $("<p></p>").html(data[2][i]);
		$(".results").append("<div class = 'page'>" + txtTitle).append(txt + "</div>");
*/
