

$(document).ready(function(){
    
  $('#title').fadeIn(3000);    
    
  $(function() {    
    $('#pod').draggable().touch();
  });   
    
      
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
    
   
   
   $('#jellyfish').click(function()
  {       
      $('#jelly').animate({
        left: '0',
      }, 500, function() {
    });
      $('#jelly').animate({
        left: '300',
      }, 500, function() {
    });   
       
  });
    
    $('#blow').click(function(){
       $('#blowfish').rotate(180);
   });   
    
   
   
     
   
    
   

    
  
});  