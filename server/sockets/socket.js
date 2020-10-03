const {io} = require('../server');

io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.emit('EnviarMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a la aplicacion'
    })

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });
    //Escuchar el cliente
    client.on('EnviarMensaje',(data,callback)=>{
        console.log(data);

        client.broadcast.emit('EnviarMensaje',data);
        // if(mensaje.usuario){
        //     callback({
        //         mensaje:'todo salio bien!'
        //     });
        // }else{
        //     callback({
        //         messaje:'Todo salio malll°'
        //     })
        // }
    })
});
