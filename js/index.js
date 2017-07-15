

$(document).ready(function(){
    
  $('#title').draggable();    
  $('#logo').draggable();  
  $('#octopod').draggable();
  $('#sandy').draggable();  
  $('#shellington').draggable();
  $('#ray').draggable();
  $('#jelly').draggable(); 
  $('#octopus').draggable(); 
  $('#whale').draggable();
  $('#horse').draggable();
  $('#blowfish').draggable(); 
  $('#shark').draggable();
  $('#fish1').draggable();
  $('#fish2').draggable();
  $('#dolphin').draggable();
  $('#ship').draggable();  
  $('#castle').draggable();      
      
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