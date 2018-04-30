$(document).ready(function(){
  $('#style-editor').submit(function(e){
    e.preventDefault();
    let selector = $('input[name="selector"]').val();
    let property = $('input[name="property"]').val();
    let value = $('input[name="value"]').val();
    $(selector).css(property, value);
  })
});
