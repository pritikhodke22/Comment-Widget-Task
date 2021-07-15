$(document).ready(function () {
  $("#comment").click(function () {
    var input = $("#input").val();
    $(".del_box").append(input + "<br>");
    $("#input").val('');
    $(".com_box").slideDown();
  });

  $("#cancel").click(function(){
    $("#input").val('');

  });
  
  $("#delete").click(function(){
    $(".del_box").text('');
    $(".com_box").slideUp();
  });
});
 