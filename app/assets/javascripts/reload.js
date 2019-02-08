// $(function(){
//   function buildHTML(message){
//     var html = `<div class = "message" data-id = "${message.id}">
//                   <p>
//                   ${message.user_name}<br>
//                   ${message.created_at}<br>
//                   ${message.content}<br>
//                 </p>
//                 </div>`
//     return html;
//   }
//   $(function(){
//     setInterval(update,5000);
//   });
//   function update(){
//     if($('.message')[0]){
//       var message_id = $('.message:last').data('id');
//     }else{
//       var message_id = 0
//     }
//     $.ajax({
//       url: location.href,
//       type: 'GET',
//       data: {
//         message: {id: message_id}
//       },
//       dataType: 'json'
//     })
//     .always(function(data){
//       $.each(data,function(i,data){
//         var html = buildHTML(data);
//         $('.chat-main__body').append(html);
//         $(".chat-main__body").scrollTop( $(".chat-main__body")[0].scrollHeight);
//       });
//     });
//   }
// });
