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
