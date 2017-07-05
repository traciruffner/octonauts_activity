

$(document).ready(function(){
    
  $(function() {    
    $('#pod').draggable();
  });   
    
  $('#bubble1').click(function(){
      $('#bubble1').effect('explode');
  });  
    
  $('#bubble2').click(function(){
      $('#bubble2').effect('explode');
  }); 
    
  $('#bubble3').click(function(){
      $('#bubble3').effect('explode');
  });   
    
  $('#bubble4').click(function(){
      $('#bubble4').effect('explode');
  });        
    
  $('#whale').click(function(){
      $('#whale').effect('bounce', {times:10}, 2000);      
  }); 
    
  
});  