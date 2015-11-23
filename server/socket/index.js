module.exports = function(io){
    io.on('connection', function(socket){
        console.log("Socket Connection Opens");
        socket.on('stream', function(data){
            console.log(data);
            console.log("Stream received");
        });
        socket.on('disconnect', function(){
            console.log("Socket closed");
        });
    });
};
