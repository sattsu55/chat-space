$(function() {

function appendUser(users){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${users.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${users.id}" data-user-name="${users.name}">追加</a>
</div>`
  $("#user-search-result").append(html);
}

function appendUserToMember(users){
  var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${users.id}'>
  <input name='group[user_ids][]' type='hidden' value='${users.id}'>
  <p class='chat-group-user__name'>${users.name}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>`
  $('#chat-group-users').append(html);
}

function appendUsermiss(){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">該当の人はいません</p>
</div>`
  $("#user-search-result").append(html);
}

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(users){
          appendUser(users);
        });
      }else{
        appendUsermiss();
      }
      $('#user-search-result').ready(function(){
        $(".chat-group-user__btn--add").on("click",function(){
          $("#user-search-result").empty();
          users.forEach(function(users){
            appendUserToMember(users);
          });
        });
      });
    })
    .fail(function() {
      alert('通信に失敗しました');
    });
  });

});
