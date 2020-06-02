// document.addEventListener('init', function(event) {
//     var page = event.target;

  
//     if (page.id === 'page1') {
//       page.querySelector('#push-button').onclick = function() {
//         document.querySelector('#myNav').pushPage('page2.html', {data: {title: 'Page 2'}});
//       };
//     } else if (page.id === 'page2') {
//       page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//     }
//   });

ons.ready(function() {
    window.fn = {}
    window.fn.pushPage = function (page, anim) {
        if (anim) {
            document.getElementById('myNav').pushPage(page.id, { data: { title: page.title }, animation: anim });
        } else {
            document.getElementById('myNav').pushPage(page.id, { data: { title: page.title } });
        }
    };
})

document.addEventListener('show', function (event) {
    if (event.target.matches('#shops')) {
      $("#shop-list").empty();
      $.get(
          "shops",
          function(data) {
            console.log(data);
            data.forEach(function(datum){
                $("#shop-list").append(
                  "<ons-card modifier='material'>" +
                    '<div class="title">' +
                      datum.name +
                    "</div>" +
                    '<div class="content">' + 
                    "</div>"+
                  "</ons-card>"
              )
            })
          }
      );
    }

    if (event.target.matches('#edit_shop')) {
        $("#save_button").on('click', function(event){
            var name = $("#name").val();
            if(name !== ""){
                $.ajax({
                    url: 'shops/' +  name,
                    type: 'PUT',
                    success: function(response) {
                        console.log(response);
                    },
                    failure: function(response) {
                        console.log(response);
                    }
                })
            }
            document.getElementById('myNav').popPage();
        })
      }
  }, false);