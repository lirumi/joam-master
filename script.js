var photoCount = 1;
 $("#refresh").click(function(event){
 event.preventDefault();


 if (photoCount >= 19){
 photoCount = 1;
 }
 else{
 photoCount+=9;
 }
 $(".portfolio-image").fadeOut("slow", "linear",refreshImage); 

 });
 function refreshImage(){
 var index;

 for(var i = 0; i< 9; i++){

 index = i + photoCount;

 $(".portfolio-image")[i].src="images/" + index + ".jpg";
 $(".portfolio-image").fadeIn(3000, "linear");
 }
 } 


 $(".points>li").on("click", function(event){
   		event.preventDefault();
   		$(".points>li").removeClass("black");
   		$(this).addClass("black");

   		var index = $(".points>li").index($(this));
   		var elm = $(".item:eq(" + index +")");

   		$(".item").hide("slow");
   		elm.show( "slow" );
    		
   })
   
   function makeCircle() {
   		
  		function slide() {

  			var index = $(".points>li").index($(".black"));
  			$(".points>li:eq(" + index +")").removeClass("black");
  			$(".item:eq(" + index +")").hide("slow");

     		if (index==5){
     			index=-1;
     		}

     		$(".points>li:eq(" + (index+1) +")").addClass("black");
			$(".item:eq(" + (index+1) +")").show("slow");	
		}
		
		slide();
		
		
	}
	setInterval(makeCircle, 4000);