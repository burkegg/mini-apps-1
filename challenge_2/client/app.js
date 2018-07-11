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
        // for each item in the array,
        // create a div and put in text
        for (let idx = 0; idx < response.length; idx++) {
          var myDiv = $("<div>").text(response[idx]);
          $('#csv').append(myDiv);
        }
        //$('#csv').text(response);
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



 