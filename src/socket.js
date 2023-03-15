import { io } from 'socket.io-client';

let socket;

export const iniciarSocket = (room) => {
    socket = io('http://localhost:3000')
    console.log('connecting...')
    if (socket && room) socket.emit('join', room)
}

export const terminarSocket = () => {
    console.log('disconnecting...')
    if (socket) socket.disconnect()
}

export const suscribeToChat = (cb) => {
    if (!socket) return true;

    socket.on('chat', msg => {
        console.log('websocket event received!')
        return cb(null, msg);
    })
}

export const enviarMensaje = (usuarioRecibe, mensaje, usuario) => {
    if (socket) socket.emit('chat', { mensaje, usuarioRecibe, usuario })
}
export const enviarRegistro = (dataUser, id) => {
    // alert(dataUser)
    dataUser.id = id
    if (socket) socket.emit('dataUser', dataUser)
}
export const traerEnviarRegistro = (cb) => {
    if (!socket) return true;

    socket.on('dataUser', msg => {
        console.log('websocket event received dataUser!')
        return cb(null, msg);
    })
}