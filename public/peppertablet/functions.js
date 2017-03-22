


function onload(){
	//alert("hej");
	var url = window.location.href;
	var urlSplit = url.split("#");
	console.log(urlSplit);
	console.log("newverison1");
	if(urlSplit.length>1){
		var page = urlSplit[1];
		var data = "";
		if(urlSplit.length>2){
			data = urlSplit[2];
			var dataType = data.split("=")[0];
			var dataValue = data.split("=")[1];
			console.log(data);
			if(dataType == "score"){
				document.getElementById("score").innerHTML = dataValue;
			}else{
				document.getElementById("youtube").innerHTML = ' <iframe class="youtube" src="'+data+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
			}
		}
		
		var id = page;
		$('.link').removeClass("activeLink");
		//$(this).addClass("activeLink");
		$('.link[rel='+page+']').addClass("activeLink")
		//console.log(this)
		$('.box').hide();
		$('#'+id).show();  
	}else{
		$('#startMenu').show();
		$('.link[rel=startMenu]').addClass("activeLink")		
	}
	$('.link').click(function(){
		var id = $(this).attr("rel");
		$('.link').removeClass("activeLink");
		$(this).addClass("activeLink");
		console.log(this)
		$('.box').hide();
		$('#'+id).show();                      
	});
}

// -------------------------------------------------------- PHP Kod 
/* $.post( "php/php.php",   { 
		value: "test", 
		value2: "test2"
		},
	function( data ) {
		console.log(data);
		
	}); */