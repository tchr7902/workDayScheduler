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

  //this function saves the tasks to local storage, and changes the content of the time block to the inputted content
  function loadSavedTasks() {
    $(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var savedTask = localStorage.getItem(timeBlockId);

      if (savedTask !== null) {
        $(this).find(".description").val(savedTask);
      }
    });
  }

  //this function displays the current date at the top of the page
  function displayCurrentDate() {
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  }

  //adds the event listener to the save buttons
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var taskDescription = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, taskDescription);
  });

  //calls the functions
  updateTimeBlocks();
  loadSavedTasks();
  displayCurrentDate();
});


