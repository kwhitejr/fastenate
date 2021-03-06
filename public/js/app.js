
$('#random').click(function () {
  $.ajax('/api/random.json', {
    contentType: 'application/json',
    success: getApi
  });
});

$('#myboards').click(function () {
  $.ajax('/api/my_boards.json', {
    contentType: 'application/json',
    success: getApi
  });
});

$('#gettheapp').click(function () {
  $.ajax('/api/get_the_app.json', {
    contentType: 'application/json',
    success: getApi
  });
});

function getApi (results) {
  $('.story').remove();
  console.log('Connecting to API');
  results.data.children.forEach(function(child) {
    console.log(child.data.url);
    var $div = $("<div />", {id: child.data.id, class: 'story'});
    var $pic = $("<img />", {src: child.data.url});
    var $title = $("<h1 />", {text: child.data.title});
    var $author = $("<h2 />", {text: child.data.author});
    var $time = $("<p />", {text: child.data.created});
    var $description = $("<p />", {text: 'This is the most important sentence you have ever and will ever read and was ever written and oh shit it\'s just so good.'});

    $('#main').append(
      $('<a />', {href: child.data.permalink}).append(
        $div.append($pic, $title, $author, $time, $description)
      )
    );
  });
}