function colorGrid(){
    var color=$('#colorPicker').val();
    $(this).css("background-color",color);
}
function makeGrid() {
    $('table tr').remove();
    var height =$('#inputHeight').val();
    var width=$('#inputWidth').val();
    for(var i=0;i<height;i++){
        $('#pixelCanvas').append('<tr></tr>');
    }
    for(var j=0;j<width;j++){
        $('tr').append('<td></td>');
    }
    var color=$('#colorPicker').val();
    $("td").on('click',colorGrid);
    return false; // Your code goes here!

}
$(document).ready(function(){
    
    $("button").on('click',makeGrid);
    $("#pixelCanvas tr").on('click',function(){console.log("hello")});

});
