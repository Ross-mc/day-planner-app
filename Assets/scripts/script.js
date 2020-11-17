$(function(){

    //get current date and time using moment.js - store as variables - display in #currentDay

    var currentDay = moment().format('dddd');

    var currentDate = moment().format('MMMM Do YYYY');

    $("#currentDay").text(currentDay + ' ' + currentDate);


    //create all the time blocks

    var currentTime = moment().format("hh:mm:ss");
    var currentHour = parseInt(moment().format("hh"));
    
    //create time block
    var timeBlock = $("<div>");
    timeBlock.addClass("timeblock");

    for (let i = 8; i<19; i++){
            //create row

        var row = $("<div>");
        row.addClass("row");



        //create hour element
        var hour = $("<p>");
        hour.addClass("hour");
        var timeText = `${i}:00`;
        hour.text(timeText);

        //create description

        var description = $("<div>");
        description.addClass("description");

        if (i < currentHour){
            description.addClass("past");
        } else if (i === currentHour){
            description.addClass("present");
        } else {
            description.addClass("future");
        }

        var textarea = $("<textarea>");

        description.append(textarea);

        // create saveBtn

        var saveBtn = $("<button>");
        saveBtn.addClass("saveBtn");

        var icon = $("<i>");
        icon.addClass("fas fa-save");

        saveBtn.append(icon);

        //apending

        row.append(hour);
        row.append(description);
        row.append(saveBtn);

        timeBlock.append(row);

    }




    




    //


    //append timeblock
    $(".container").append(timeBlock);




    //style them (using class names) according to the current time





})