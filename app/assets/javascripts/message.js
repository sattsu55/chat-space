$(function(){
  function buildHTML(message){
    var html = `<div class = "message" data-id = "${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">${message.user_name}</div>
                    <div class="upper-message__date">${message.created_at}</div>
                  </div>
                  <div class = "lower-message">
                  <p class="lower-message__content">${message.content}</p></div>
                </div>`
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
      $('.messages').append(html)
      if(data.image_url){
        $('.messages').append(`<img src="${data.image_url}">`)
      }
      $(".messages").scrollTop( $(".messages")[0].scrollHeight )
      $('.form__message').val('')
      $('.form__submit').attr('disabled', false)
    })
    .fail(function(){
      alert('error');
    })
  })
})
