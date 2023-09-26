// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //this function applies the colors to the time blocks based on if they are in the past, present or future
  function updateTimeBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
      var timeBlockId = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockId < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (timeBlockId === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }
});


