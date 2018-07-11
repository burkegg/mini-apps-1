// this is where code or the ajax calls 
//from the client will go.



$(document).ready(function(){


  var getAll = function(){
    $.ajax({
      type: "GET",
      url: 'http://localhost:3000/data',
      //datatype: ''    // the type you expect back.  it might guess for me.
      success: function(response) {
        $insert = $("<div id = 'data'>");
        for (let idx = 0; idx < response.length; idx++) {
          var myDiv = $("<div>").text(response[idx]);
          $insert.append(myDiv);
        }
        $('#csv').html($insert);
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
    if (dataToPost === '') {
      return;
    }
    postIt(dataToPost);
    getAll();
    $("#reports").val('');
  });

});



 