$(document).on("click", '#addnewuserButton', function() {

    console.log('add User Button clicked');


    //adduserForm

    var addqueryString = $('#adduserForm').serialize();
    console.log('addqueryString = ' + addqueryString);

 /*   jQuery.ajax({
        url: 'http://localhost:8080/rest/user/del/' + id100,
        type: 'DELETE',
        success: function(data) {
            console.log('removed user id was - ' + id100);

            $tr.find('td').fadeOut(1000,function(){
                $tr.remove();
            });

        }
    }); */










});
