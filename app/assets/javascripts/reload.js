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
  $(function(){
    setInterval(update,5000);
  });
  function update(){
    if($('.message')[0]){
      var message_id = $('.message:last').data('id');
    }else{
      var message_id = 0
    }
    console.log(message_id)
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {
        message: {id: message_id}
      },
      dataType: 'json'
    })
    .always(function(data){
      $.each(data,function(i,data){
        var html = buildHTML(data);
        $('.messages').append(html);
        if(data.image_url){
          $('.messages').append(`<img src="${data.image_url}">`)
        }
        $(".messages").scrollTop( $(".messages")[0].scrollHeight);
      });
    });
  }
});
