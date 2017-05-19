$(document).ready(function(){
	$(".search").click(moveSearchBar);
	$(".fa-search").click(moveSearchBar);

	$(".fa-search").click(getResults);

});

function getResults(){
	var api_endpt = "http://en.wikipedia.org/w/api.php";
	$.ajax({
		url: api_endpt,
		data: { action: 'query', list: 'search', srsearch: $("input[name=search]").val(), format: 'json' }, 
		dataType: "jsonp",
		type: "GET",
		error: function(){
			console.log("could not receive data");
		},
		success: printTitles
	});
	
}

function printTitles(data){
	var arrSearch = data.query.search;
	arrSearch.forEach(function(item){
		console.log(item.title);
		var snip = item.snippet.split('.');
		console.log(snip[0]+ ".");
	});
}

function printSnippet(data){
	var arrSSearch = data.query.search;
	arrSSearch.forEach(function(item){
		var snip = item.snippet.split('.');
		console.log(snip[0]+ ".");
	})
}

function printData(data){
	console.log(data.query.search[0].title);
	console.log(data.query.search[0].snippet);
}  

function moveSearchBar(){
	$("form").css("margin-top","0");
}


