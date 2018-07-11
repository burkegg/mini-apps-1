// this is where code or the ajax calls 
//from the client will go.



$(document).ready(function(){


  var getAll = function(){
    $.ajax({
      type: "GET",
      url: 'http://localhost:3000/data',
      //datatype: ''    // the type you expect back.  it might guess for me.
      success: function(response) {
        console.log(response);
        currentTasks = response;
        // post to DOM
        $('#csv').text(currentTasks);
      }
    });
  }

  var postIt = function(jsonData) {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/data',
      datatype: "application/json",
      contentType: "application/json",
      data: jsonData,
    })
  };
  var currentTasks = '';
  getAll();


  $("form").on("submit", function(event) {
    event.preventDefault(); 
    //console.log(event);
    let dataToPost = $('#reports').val()
    postIt(dataToPost);
    getAll();

  });

});



 