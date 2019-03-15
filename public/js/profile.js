
$(".submit").on('click', function(event) {
    event.preventDefault();
    console.log('connected');
    var fullName = $('.fullName').val();
    var interests = $('.interests').val();
    var languages = $('.languages').val();
    var aboutMe = $('.aboutMe').val();

    var me = {
        name: fullName,
        interests: interests[0],
        languages: languages[0],
        aboutMe: aboutMe,
    }

    function newRider(){
        $.ajax({
            url: "/api/riders",
            method: "POST",
            data: me
        }).then(function(err, data){
            if (err) throw (err);
            console.log('ajax')
            console.log(data)
        });
    }
    newRider();



        window.location.href = "/profile/main";

});