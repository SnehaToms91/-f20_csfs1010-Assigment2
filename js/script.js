$(document).ready(function () {

  $('#button').click(function () {
    if (!$('input[name=ListItem]').val()) {
      alert('Please Enter the item to be added!');
    }
    else {
      let Add = $('input[name=ListItem]').val();
      $('ol').append('<li>' + Add + '</li>');
    }
  });

  $("input[name=ListItem]").keypress(function (event) {
    if (event.keyCode == 13) {
      $("#button").click();
      return false;
    }
  });

  $(document).on('dblclick', 'li', function () {
    $(this).toggleClass('strike').fadeOut('slow');
  });

  $('input').focus(function () {
    $(this).val('');
  });

  $('ol').sortable();
});
