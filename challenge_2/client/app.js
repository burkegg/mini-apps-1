// this is where code or the ajax calls 
//from the client will go.

$(document).ready(function(){
  // MAKE AJAX HAPPEN!

// $.ajax({
//   type: "POST",
//   url: 'localhost:3000',
//   data: {"firstName":"Beth","lastName":"Johnson","county":"San Francisco","city":"San Francisco","role":"Broker/Sales Person","sales":7500000,"children":[]},
//   dataType: 'application/json',
// });
  
$.ajax({
  type: "GET",
  url: 'http://localhost:3000/data',
  //datatype: ''    // the type you expect back.  it might guess for me.
  success: function(error, response) {console.log(error);}
});
// }
console.log('inside js');
});
// $.get("localhost:3000/data", function(){
//   console.log('got?');
// }, 'text');


// $.post("localhost:3000/data", {"firstName":"Beth","lastName":"Johnson","county":"San Francisco","city":"San Francisco","role":"Broker/Sales Person","sales":7500000,"children":[]}, function() {
//   console.log('posted');
// }, 'json');
  
// });

// {"firstName":"Beth","lastName":"Johnson","county":"San Francisco","city":"San Francisco","role":"Broker/Sales Person","sales":7500000,"children":[]}

 