var socket = io();
socket.on('connect',function(){
    console.log('Conectando al servidor');
});
socket.on('disconnect',function(){
    console.log('Perdimos conexión con el servidor');
});
//enviar información
socket.emit('EnviarMensaje',{
    usuario:'Alexander',
    mensaje:'Hola Mundo'
},function(resp){
    console.log(resp);
});
socket.on('EnviarMensaje',(mensaje)=>{
    console.log(mensaje);
});