$(function() {

var search_result = $("#user-search-result");

function appendUser(users){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${users.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${users.id}" data-user-name="${users.name}">追加</a>
</div>`
  search_result.append(html);
}

var chat_group_users = $('#chat-group-users');

function appendUserToMember(users){
  var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
  <input name='group[user_ids][]' type='hidden' value='${users.id}'>
  <p class='chat-group-user__name'>${users.name}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>`
  chat_group_users.append(html);
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
        $('#user-search-result').ready(function(){
          $(".chat-group-user__btn--add").on("click",function(){
            console.log(this)
            users.forEach(function(users){
              appendUserToMember(users)
            });
          });
        });
      }
    })

    .fail(function() {
      alert('通信に失敗しました');
    });
  });
});

