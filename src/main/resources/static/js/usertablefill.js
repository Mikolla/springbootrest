$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/rest/user/all"
    }).then(function(data) {
        var userList = data;
       $('.greeting-id').append( userList[0].id + '<br/>');
       $('.greeting-content').append( userList[0].name  + '<br/>');



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


        $('.table-striped').append(
        '<tr>' +
        '<td>' + 'id' + '</td>' +
        '<td>' + 'id' + '</td>' +
        '<td>' + 'id' + '</td>' +
        '<td>' + 'id' + '</td>' +
        '<td>' + 'id' + '</td>' +
        '<td>' + 'id' + '</td>'
         + '</tr>'
        );


    });
});
