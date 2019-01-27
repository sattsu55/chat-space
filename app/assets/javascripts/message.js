$(function(){
  function buildHTML(message){
    var html = `<p>
                  ${message.user_name}<br>
                  ${message.created_at}<br>
                  ${message.content}<br>
                </p>
                <img src="${message.image_url}">
                `
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
      $('.form__submit').attr('disabled', false)
    })
    .fail(function(){
      alert('error');
    })
  })
})
