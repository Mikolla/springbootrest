$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/rest"
    }).then(function(data) {
        var userList = data;
       $('.greeting-id').append( userList[0].id + '<br/>');
       $('.greeting-content').append( userList[0].name  + '<br/>');

        $('.greeting-id').append( userList[1].id);
        $('.greeting-content').append( userList[1].name);

        console.log(userList[3].name);

        for(var i = 0; i < userList.length; i++) {
            var role = userList[i].roles[0];
            console.log(userList[i].id + ' ' + userList[i].login + ' ' + userList[i].name + ' ' + userList[i].password + ' ' + role.roleName + '\r\n');
        }


    });
});
