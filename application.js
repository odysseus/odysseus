if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 $(document).ready(function() {
  $("#cv").addClass("boxtext");
  $("cv").parent().removeClass("box");
  $("#cv").text("Resume");
  $("#gh").addClass("boxtext");
  $("#gh").text("Github");
  $("#eg").addClass("boxtext");
  $("#eg").text("Example Site");
 })
}

$(document).ready(function() {
  $("#cv").mouseenter(function() {
    $(this).addClass("boxtext");
    $(this).text("Resume");
  }).mouseleave(function() {
    $(this).removeClass("boxtext");
    $(this).text("Cv");
  });

  $("#gh").mouseenter(function() {
    $(this).addClass("boxtext");
    $(this).text("Github");
  }).mouseleave(function() {
    $(this).removeClass("boxtext");
    $(this).text("Gh");
  });

  $("#eg").mouseenter(function() {
    $(this).addClass("boxtext");
    $(this).text("Example Site");
  }).mouseleave(function() {
    $(this).removeClass("boxtext");
    $(this).text("Eg");
  });
});