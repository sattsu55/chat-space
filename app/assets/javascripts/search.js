$(function() {

var search_result = $("#user-search-result");

function appendUser(users){
  var html = `<p>
                成功
              </p>`
  search_result.append(html);
}

function appendNoUser(users){
  var html = `<p>
                失敗
              </p>`
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
       else {
         appendNoUser("何か入れてね");
       }
    })
    // .fail(function() {
    //   alert('error');
    // });
  });
});
