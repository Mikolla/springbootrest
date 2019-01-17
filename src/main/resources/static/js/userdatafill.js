$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/rest/user/principal"
    }).then(function(data) {
        var userlogined = data;
      console.log(userlogined.id);
      console.log(userlogined.name);
      console.log(userlogined.login);
      console.log(userlogined.password);
      console.log(userlogined.roles[0].roleName);

        $('#hellouser').append( 'Hello ' + userlogined.name + '!' );
        $('#userdataid').append( 'Authorised user data: ');
        $('#userdataid').append( 'id = ' + userlogined.id + '; ');
        $('#userdatalogin').append( 'login = ' + userlogined.login  + '; ');
        $('#userdataname').append( 'name = ' + userlogined.name  + '; ');
        $('#userdatapassword').append( 'password = ' + userlogined.password  + '; ');
        $('#userdatarole').append( 'role = ' + userlogined.roles[0].roleName  + '.');

    });
});
