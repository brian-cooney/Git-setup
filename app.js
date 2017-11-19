



$( document ).ready(function() {

    $('#close-button').click(function() {
        $('#modal-overlay').toggleClass('closed');
        $('#modal').toggleClass('closed');
    });

    $('#open-button').click(function() { 
        $('#modal-overlay').toggleClass('closed')
        $('#modal').toggleClass('closed');
    })


});


// if($.cookie('popup') != 'seen'){
//     $.cookie('popup', 'seen', { expires: 1, path: '/' }); // Set it to last a year, for example.
//   $('#close-button').click(function() {
//         console.log($(this));
//         // $(this).toggleClass('closed');
//         $('#modal-overlay').toggleClass('closed')
//         $('#modal').toggleClass('closed');
//     });

//     $('#open-button').click(function() { 
//         $('#modal-overlay').toggleClass('closed')
//         $('#modal').toggleClass('closed');
//     })
// };



// var modal           = document.querySelector('#modal');
// var modalOverlay    = document.querySelector('#modal-overlay');
// var closeButton     = document.querySelector('#close-button');
// var openButton      = document.querySelector('#open-Button');

// closeButton.addEventListener('click', function() {
//     console.log(TouchList);
//     modal.classList.toggle('closed');
//     modalOverlay.classList.toggle('closed');
// });

// openButton.addEventListener('click', function () {
//     console.log('fired!');
//     modal.classList.toggle('closed');
//     modalOverlay.classList.toggle('closed');
// });

