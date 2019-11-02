$(document).ready(function(){
    $('#gender').on('click',function(){
       var gender = $('#gender').val();
       $('.alert').html(gender);
    })
});