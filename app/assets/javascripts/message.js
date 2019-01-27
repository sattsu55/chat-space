$(function(){
  function buildHTML(message){
    var html = `<p>
                  ${message.content}
                </p>`
    return html;
  }


  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__body').append(html)
      $('.form__message').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
})
