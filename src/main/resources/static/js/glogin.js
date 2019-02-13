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


        var checkbox = document.getElementById('chebo');
        if (checkbox.checked) {
            console.log('checkbox checked');
            $.ajax({
                url: "http://localhost:8080/restU/user/token/" + id_token
            }).then(function(data) {
                var userlogined = data;
                var role = userlogined.roles[0].roleName;
                console.log('You have got a data = ');
                console.info(data);
                console.log('User in data base has role as = ' + role);
                if(role == 'User') {
                    window.location.href = "http://localhost:8080/userrest"
                console.log('goto User page as user')
                }
                else if(role == 'Admin') {
                    window.location.href = "http://localhost:8080/adminrest"
                    console.log('goto Admin page as admin')
                }

            });
        }





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
        document.getElementById("giddata").innerHTML ='user just log out';
        document.getElementById("gnamedata").innerHTML ='';
        document.getElementById("gemaildata").innerHTML ='';
    });
}