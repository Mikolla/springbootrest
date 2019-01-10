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
    var modalForm = $('<form id="formoid" role="form" name="modalForm" action="/rest/" method="PUT" ></form>');


    var idForm = $('<div class="form-group"></div>');

    idForm.append('<label for="id" style="margin-top: 5%">id</label>');
    idForm.append('<input class="form-control"  disabled="disabled"  name="id" id="id" value="'+id100+'" />');

    idForm.append('<input class="form-control"  type="hidden"  name="id" id="id" value="'+id100+'" />');


    idForm.append('<label for="'+columnHeadings[1]+'" style="margin-top: 5%">login</label>');
    idForm.append('<input class="form-control" name="login" id="login" value="'+login100+'" />');

    idForm.append('<label for="'+columnHeadings[2]+'" style="margin-top: 5%">name</label>');
    idForm.append('<input class="form-control" name="name" id="name" value="'+name100+'" />');

    idForm.append('<label for="'+columnHeadings[3]+'" style="margin-top: 5%">password</label>');
    idForm.append('<input class="form-control" name="password" id="password" value="'+password100+'" />');

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
$(document).on("click", '.btn-primary', function() {
    console.log('save button clicked')

    var myform = document.getElementById("formoid");
    var fd = new FormData(myform);

    console.log('formdata - ' + fd);

    $.ajax({
        url: "/rest",
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        type: 'PUT',
        success: function (dataofconfirm) {
           console.log('data saved')
        }
    });



    /*
    $.ajax({
    type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
    dataType: 'json', // Set datatype - affects Accept header
    url: "http://example.com/people/1", // A valid URL
    headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
    data: '{"name": "Dave"}' // Some data e.g. Valid JSON as a string
});
     */

});

$('.modal-footer .btn-primary').click(function() {
    console.log('save button clicked')
    $('form[name="modalForm"]').submit();
});