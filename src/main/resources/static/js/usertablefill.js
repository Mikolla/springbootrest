$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/rest/user/all"
    }).then(function(data) {
        var userList = data;
        console.log(userList);




        for(var i = 0; i < userList.length; i++) {
            var role = userList[i].roles[0];
            console.log(userList[i].id + ' ' + userList[i].login + ' ' + userList[i].name + ' ' + userList[i].password + ' ' + role.roleName + '\r\n');

            $('#listrole').append(
                '<tr>' +
                '<td>' + userList[i].id + '</td>' +
                '<td>' + userList[i].login + '</td>' +
                '<td>' + userList[i].name + '</td>' +
                '<td>' + userList[i].password + '</td>' +
                '<td>' + role.roleName + '</td>' +
                '<td>' +
                        '<button class="btn btn-success" id="edButton" data-toggle="modal" data-target="#myModal">Edit</button>' +
                        ' ' +
                        '<button type="button" class="btn btn-primary" id="delButton">Delete</button>'
                + '</td>'
                + '</tr>'
            );

        }


    });
});
