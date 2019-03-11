$(document).ready(function(){

    function findDriver(){
        console.log("in findDriver")
        var interest = $("#interest").val();
        var lang = $("#language").val();
        $.get("/api/driver", function(dbData){
            alert(dbData)
        })
    }

    $("#submit").on("click", function(){
        event.preventDefault();
        console.log("from submit btn")
        findDriver();
    })

})