/** code for milestone monsters! **/

YUI().use("node", function(Y){
  
  var mm = {
    init: function(){
      Y.log("mm init!");
      mm.generateBG(.3); // default opacity is .2
    }, 
    generateBG: function(opacity){
      if ( !! !document.createElement('canvas').getContext) {
        return false;
      }
      
      var canvas = document.createElement("canvas"),
             ctx = canvas.getContext('2d'),
          x, y, number, opacity = opacity || .2;
      
      canvas.width = 48;
      canvas.height = 48;
      
      for (x = 0; x < canvas.width; x++) {
        for (y = 0; y < canvas.height; y++) {
          number = Math.floor(Math.random() * 60);

          ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
          ctx.fillRect(x, y, 1, 1);
        }
      }
      
      //document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
      Y.one(".viewport").setStyle("backgroundImage", "url(" + canvas.toDataURL("image/png") + ")" );

    }
    
    
    
  }; //end mm
  
  
  
  
  
  Y.on("domready",function(){
    mm.init();
  })
})


/**
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
**/
