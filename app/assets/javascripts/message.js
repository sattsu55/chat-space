$(function(){
  $('#form').on('submit', function(e){
    var formData = new FormData(this);
    e.preventDefault();
  })
})
