function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    var gid = profile.getId();
    var name = profile.getName();
    var email = profile.getEmail();
    console.log('ID: ' + gid); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + name);
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + email); // This is null if the 'email' scope is not present.
    console.log('GivenName = ' + profile.getGivenName());
    console.log('FamilyName = ' + profile.getFamilyName());
    console.log('ID token = ' + id_token);

    if(gid != null) {
        document.getElementById("giddata").style.fontSize = '10px';
        document.getElementById("gnamedata").style.fontSize = '10px';
        document.getElementById("gemaildata").style.fontSize = '10px';
        document.getElementById("giddata").innerHTML ='user google ID = ' +  gid + '\r\n';

        $('#gnamedata').text('user google name = ' +  name).append('\r\n');
        $('#gemaildata').text('user google email = ' +  email);


     /*  jQuery.ajax({
           url: "http://localhost:8080/restu/user/" + id_token,
            type: 'GET',
            success: function(data) {

                var tokenGot = data;
                console.log('You have got a token = ' + tokenGot);
            }
        }); */


        $.ajax({
            url: "http://localhost:8080/restU/user/token/" + id_token
        }).then(function(data) {
            var tokenGot = data;
            console.log('You have got a token = ');
            console.log('You have got a token = ' + tokenGot);

        });

     /*   $.ajax({
            url: "http://localhost:8080/restu/user/" + id_token
        }).then(function(data) {
            var tokenGot = data;
            console.log('You have got a token = ' + tokenGot);
        }); */



    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}