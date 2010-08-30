
var mm = {
		init: function(){
			console.log("mm init!");
			mm.bindings();
		},
		bindings: function(){
			$("#startup").live("click", function(){
				mm.showpanel('#menu')
			})
		},
		showpanel: function(pnl){
			$(".panel")
				.addClass("hide")
				.find(pnl).removeClass("hide");
		}
		
}


$(document).ready(function(){
	//$("#tabs").tabs();
	
	//alert("hi")
	mm.init();
	})
