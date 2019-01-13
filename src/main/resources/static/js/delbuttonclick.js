$(document).on("click", '#delButton', function() {


    var $tr = $(this).closest('tr');
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
    console.log('id to del = ' + id100);
    console.log('login to del = ' + login100);
    console.log('name to del = ' + name100);
    console.log('password to del = ' + password100);
    console.log('role to del = ' + role100);

    jQuery.ajax({
        url: 'http://localhost:8080/rest/user/del/' + id100,
        type: 'DELETE',
        success: function(data) {
            console.log('removed user id was - ' + id100);

            $tr.find('td').fadeOut(1000,function(){
                $tr.remove();
            });

        }
    });










});
