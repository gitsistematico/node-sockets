const lblonline = document.querySelector('#lblOnline');
const lbloffline = document.querySelector('#lblOffline');
const textMensaje = document.querySelector('#textMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect',() =>{    
    lbloffline.style.display = 'none';
    lblonline.style.display = '';
})

socket.on('disconnect',() =>{    
    lblonline.style.display = 'none';
    lbloffline.style.display = '';
})

socket.on('enviar-mensaje', ( payload ) => {
    console.log(payload);
    // textMensaje.vale = payload;
})

btnEnviar.addEventListener('click', () => {
    const mensaje = textMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }
    console.log(" front ",payload)
    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log("desde el server", payload)
    });
});