var socket = io("http://localhost:7001/chat");

$('button[type=submit]').click(function(){
    socket.emit('chat', $('#input').val());
    $('#input').val('');
    return false;
});

socket.on('connect', function (data) {
    $('#message').append($('<li>').text(data));
});