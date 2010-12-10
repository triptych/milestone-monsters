/** code for milestone monsters! **/

YUI().use("node", "anim", function(Y){
  
  var mm = {
    init: function(){
      Y.log("mm init!");
      mm.generateBG(.3); // default opacity is .2
      mm.bindings()
    }, 
    bindings: function(){
      Y.one("#startgame").on("click", function(){
        mm.swapPanel("splash","intro");
      });
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

    },
    swapPanel: function(oldId, newId){
      //put unhidden panel away
      Y.log(oldId)
      
      hidingPanel = Y.one("#"+oldId);
      var animHidePanel = new Y.Anim({
        node: hidingPanel,
        to: {
          left: -400 
        },
        easing: Y.Easing.backIn
      });
      
      var onEnd = function(){
        hidingPanel.addClass("hide").removeClass("show").setAttribute("style","");
        Y.log("hid one! " + oldId)
        animShowPanel.run();
      }
      
      animHidePanel.once("end", onEnd);
      
      animHidePanel.run();
      
      
      var showingPanel = Y.one("#"+newId)
      var animShowPanel = new Y.Anim({
        node: showingPanel,
        to: {
          left: 14
        },
        easing: Y.Easing.backOut
      })
      
      var onShowEnd = function(){
        showingPanel.addClass("show").removeClass("hide").setAttribute("style","");
        Y.log("shown one! " + newId );
        
      }
      animShowPanel.once("end", onShowEnd);
      
      
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
