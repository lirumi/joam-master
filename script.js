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