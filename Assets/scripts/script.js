$(function(){

    //get current date and time using moment.js - store as variables - display in #currentDay

    var currentDay = moment().format('dddd');

    var currentDate = moment().format('MMMM Do YYYY');

    $("#currentDay").text(currentDay + ' ' + currentDate);

    //local storage variable

    let textArr = [
        {
            hour: 8,
            task: ""
        },
        {
            hour: 9,
            task: ""
        },
        {
            hour: 10,
            task: ""
        },
        {
            hour: 11,
            task: ""
        },
        {
            hour: 12,
            task: ""
        },
        {
            hour: 13,
            task: ""
        },
        {
            hour: 14,
            task: ""
        },
        {
            hour: 15,
            task: ""
        },
        {
            hour: 16,
            task: ""
        },
        {
            hour: 17,
            task: ""
        },
        {
            hour: 18,
            task: ""
        }
    ];

    if (JSON.parse(localStorage.getItem("textArr") !== null)){
        textArr = JSON.parse(localStorage.getItem("textArr"));
    };


    //create all the time blocks

    var currentHour = parseInt(moment().format("HH"));
    
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

        //style using pre-set class names depending on time
        if (i < currentHour){
            description.addClass("past");
        } else if (i === currentHour){
            description.addClass("present");
        } else {
            description.addClass("future");
        }

        var textarea = $("<textarea>");
        textarea.attr("id", i);
        textarea.val(textArr[i-8].task);

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

    //click handler and logic for save button

    $(".saveBtn").click(function(){
        //finding the correct textarea using dom traversal
        var siblings = $(this).siblings();
        var description = $(siblings[1]);
        var textarea = description.find(">:first-child");
        var inputText = textarea.val().trim();


        //using the id to dynamically update the array of textinputs
        var textId = parseInt(textarea.attr("id"));
        var textIndex = textArr.findIndex((element => element.hour === textId));
        textArr[textIndex].task = inputText;

        //save to local storage

        localStorage.setItem("textArr", JSON.stringify(textArr))
        
    })










})