

const socket = io({
    autoConnect:false
});

//sweetAlert usuario
let user;

// const { value: formValues } = await
//  Swal.fire({
//     title: 'Identificate',
//     html:
//       '<input id="user-id" class="form-control mb-3" placeholder="Email" >'+
//       '<input id="user-name" class="form-control mb-3"  placeholder="Nombre" > ' +
//       '<input id="user-lastName" class="form-control mb-3" placeholder="Apellido" >'+
//       '<input id="user-age" class="form-control mb-3" placeholder="Edad" > '+
//       '<input id="user-alias" class="form-control mb-3" placeholder="Alias" > ',
//     allowOutsideClick: false,
//     focusConfirm: true,    
//     preConfirm: () => {
        
//           const users = {
//             email: document.getElementById('user-id').value,
//             name: document.getElementById('user-name').value,
//             lastName: document.getElementById('user-lastName').value,
//             age: document.getElementById('user-age').value,
//             alias: document.getElementById('user-alias').value,
//            }
//         return new Promise(function (resolve) { 

//           if (Object.values(users).some(x => (x === ''))) {
//             swal.showValidationMessage("Ingrese un valor en todos los campos"); 
//             swal.enableButtons(); 
//             } else {
//             swal.resetValidationMessage(); 
//             resolve( users)
//         }
//         })
//         }  
//   }).then(result =>{

//      if (typeof(result.value) == 'undefined') {
//         return false;
//     }
//     user = result.value;
//     socket.connect();
//     socket.emit('new-user', user);

// })
  
let uid
socket.on('user', data => {uid = data });


//leyendo formulario
const addMessage = (e) => {
    e.preventDefault()
    console.log(uid)

    const chatbox = document.getElementById('texto');
    const date = new Date();
    const time = date.toLocaleString()
       if(chatbox.value.trim().length>0){
         const mensaje = {
             author: uid ,
             text: chatbox.value,
             createdAt: time
           
         };        
         socket.emit('new-message', mensaje);
         chatbox.value="";
     }
    return false;
}

const formChat = document.getElementById('formChat')
formChat.addEventListener('submit',(e)=>addMessage(e))

//renderizando mensajes
const renderChat = (data) => {
    console.log('render char')
    const html = data.map(elem => {
        
        return(`<div class="bg-light" >
               <strong  style="color:blue">${elem?.author.name}</strong>
         <strong  style="color:blue">${elem?.author.lastName}</strong>
        <em  style="color:brown">[${elem?.time}]</em>: 
        <em  style="color:green">${elem?.text}</em> 
        </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html ;
}
socket.on('messages', (data) => { renderChat(data) });



//new user
socket.on('newUser', data => {
    if(user){
        Swal.fire({
            text:"Nuevo usuario en el chat",
            toast:true,
            position: "top-right",
        })
    }
})
