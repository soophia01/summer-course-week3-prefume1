$(document).ready(function () {
    $('.rwd-menu .hamburger').click(function (e) { 
        e.preventDefault();
        $('.rwd-menu-list').slideToggle(1000);
    });
});

// $(document).ready(function () {
//     $('.rwd-menu .hamburger').click(function (e) { 
//         e.preventDefault();
//         $('.rwd-menu-list').classToggle('show');
//     });
// });