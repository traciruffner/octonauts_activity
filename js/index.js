

$(document).ready(function(){
    
  $('#title').fadeIn(3000);    
    
    
  $('#pod').draggable();
  $('#sandy').draggable();  
  $('#shellington').draggable();  
      
  $('#whale').click(function(){
      $('#whale').effect('bounce', {times:10}, 800);      
  }); 
    
  $('#sebastian').hide();
    
   $('#lobster').click(function(){
        $('#lobster').hide();
        $('#sebastian').show();
      }); 
    
   $('#sebastian').click(function(){
       $('#sebastian').hide();
       $('#lobster').show();
   });
    
   
   
   $('#seahorse').click(function()
  {       
      $('#horse').animate({
        left: '0',
      }, 500, function() {
    });
      $('#horse').animate({
        left: '300',
      }, 500, function() {
    });   
       
  });
    
    $('#blow').click(function(){
       $('#blowfish').rotate(180);
   });  
    
    $('#snap').hide();
    
   $('#croc').click(function(){
        $('#croc').hide();
        $('#snap').show();
      }); 
    
   $('#snap').click(function(){
       $('#snap').hide();
       $('#croc').show();
   });
    
   
   
     
   
    
   

    
  
});  