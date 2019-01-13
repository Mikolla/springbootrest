$(document).on("click", '#edButton', function() {


    console.log('form filler script');
    // Get array of column Headings
    var columnHeadings = $("thead th").map(function() {
        return $(this).text();
    }).get();
    // Remove the last column heading (for the Edit button)
    columnHeadings.pop();
    // Get array of column values from the row where the Edit button was clicked
    var columnValues = $(this).parent().siblings().map(function() {
        return $(this).text();
    }).get();
    var id100 = columnValues[0];
    var login100 = columnValues[1];
    var name100 = columnValues[2];
    var password100 = columnValues[3];
    var role100 = columnValues[4];
    console.log('id = ' + id100);
    console.log('login = ' + login100);
    console.log('name = ' + name100);
    console.log('password = ' + password100);
    console.log('role = ' + role100);
    var modalBody = $('<div id="modalContent"></div>');
    var modalForm = $('<form id="formoid" role="form" name="modalForm" action="/adminrest" method="POST" ></form>');


    var idForm = $('<div class="form-group"></div>');

    idForm.append('<label for="id" style="margin-top: 5%">id</label>');
    idForm.append('<input class="form-control"  disabled="disabled"  name="id" id="id" value="'+id100+'" />');

    idForm.append('<input class="form-control"  type="hidden"  name="id" id="id" value="'+id100+'" ref="id"/>');


    idForm.append('<label for="'+columnHeadings[1]+'" style="margin-top: 5%">login</label>');
    idForm.append('<input class="form-control" name="login" id="login" value="'+login100+'" ref="login"/>');

    idForm.append('<label for="'+columnHeadings[2]+'" style="margin-top: 5%">name</label>');
    idForm.append('<input class="form-control" name="name" id="name" value="'+name100+'" ref="name" />');

    idForm.append('<label for="'+columnHeadings[3]+'" style="margin-top: 5%">password</label>');
    idForm.append('<input class="form-control" name="password" id="password" value="'+password100+'" ref="password" />');

    var sel = $('<select class="form-control" name="role" id="role"></select>');
    if (role100 == 'Admin') {
        sel.append('<option value="Admin">Admin</option>');
        sel.append('<option value="User">User</option>');
    } else {
        sel.append('<option value="User">User</option>');
        sel.append('<option value="Admin">Admin</option>');
    }


    idForm.append('<label for="role" style="margin-top: 5%">role</label>')
    idForm.append(sel);


    modalForm.append(idForm);

    modalBody.append(modalForm);

    $('.1234').html(modalBody);


});

//$(document).on("click", '#edButton', function()
$(document).on("click", '#saveUserButton', function() {
    console.log('save button clicked')

    var myform = document.getElementById("formoid");
    var fd = new FormData(myform);

    console.log('formdata - ' + fd);
    console.log('id - ' + fd.get('login'));

    var queryString = $('#formoid').serialize();
    console.log(queryString);


    var formEl = document.forms.formoid;
    var formData = new FormData(formEl);
    var id2 = formData.get('id');
    var name2 = formData.get('name');
    var login2 = formData.get('login');
    var password2 = formData.get('password');
    var role2 = formData.get('role');
    console.log('id = ' + id2);
    console.log('name = ' + name2);
    console.log('login = ' + login2);
    console.log('password = ' + password2);
    console.log('role = ' + role2);
    var rolid;
    if (role2 == 'User' ) { rolid = 2;}
    else if (role2 == 'Admin' ) {rolid = 1;}

 // var jsondata = '{"id":55,"name":"13115","login":"13115","password":"13115","roles":[{"id":2,"roleName":"User"}]}';
  var jsondata = '{"id":'+ id2 +',"name":"'+ name2 +'","login":"'+ login2 +'","password":"'+ password2 +'","roles":[{"id":' + rolid + ',"roleName":"'+ role2 +'"}]}';
  console.log(jsondata);


    $.ajax({
        type: 'PUT', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
        dataType: "json", // Set datatype - affects Accept header
        contentType: "application/json; charset=utf-8",
        url: "http://localhost:8080/rest/user/edit", // A valid URL
        data: jsondata, // Some data e.g. Valid JSON as a string
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
                                        }

    }).then(function(data) {

        $('form[name="modalForm"]').submit();
    });



});

$('.modal-footer .btn-primary').click(function() {
    console.log('save button clicked')
   // $('form[name="modalForm"]').submit();
});