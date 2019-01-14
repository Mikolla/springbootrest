$(document).on("click", '#addnewuserButton', function() {

    console.log('add User Button clicked');


    //adduserForm

    var addqueryString = $('#adduserForm').serialize();
    console.log('addqueryString = ' + addqueryString);

    var myform = document.getElementById("adduserForm");
    var formData = new FormData(myform);
    var name2 = formData.get('name');
    var login2 = formData.get('login');
    var password2 = formData.get('password');
    var role2 = formData.get('role');
    console.log('name = ' + name2);
    console.log('login = ' + login2);
    console.log('password = ' + password2);
    console.log('role = ' + role2);
    var rolid;
    if (role2 == 'User' ) { rolid = 2;}
    else if (role2 == 'Admin' ) {rolid = 1;}

    // var jsondata = '{"id":55,"name":"13115","login":"13115","password":"13115","roles":[{"id":2,"roleName":"User"}]}';
    var jsondata = '{"name":"'+ name2 +'","login":"'+ login2 +'","password":"'+ password2 +'","roles":[{"id":' + rolid + ',"roleName":"'+ role2 +'"}]}';
    console.log(jsondata);


    $.ajax({
        type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
        dataType: "json", // Set datatype - affects Accept header
        contentType: "application/json; charset=utf-8",
        url: "http://localhost:8080/rest/user/add", // A valid URL
        data: jsondata, // Some data e.g. Valid JSON as a string
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    }).then(function(data) {

        $('form[name="modalFormAdd"]').submit();
    });










});
