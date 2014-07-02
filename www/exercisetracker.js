document.addEventListener("deviceready", function(){
   $("#mensaje").html("que tal");
  if(navigator.network.connection.type == Connection.NONE){
    $("#home_network_button").text('No Internet Access')
                 .attr("data-icon", "delete")
                 .button('refresh');
  }
 
});