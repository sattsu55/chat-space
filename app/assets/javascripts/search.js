$(function() {

var search_result = $("#user-search-result");

function appendUser(users){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${users.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${users.id}" data-user-name="${users.name}">追加</a>
</div>`
  search_result.append(html);
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
       }
    })

    .fail(function() {
      alert('通信に失敗しました');
    });
  });
});
