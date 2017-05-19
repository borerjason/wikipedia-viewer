$(document).ready(function(){
	$(".search").click(moveSearchBar);
	$(".fa-search").click(moveSearchBar);

});

var api_ex = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
var api_endpt = "https://en.wikipedia.org/w/api.php";


function moveSearchBar(){
	$("form").css("margin-top","0");
}

