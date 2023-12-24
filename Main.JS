const Formato = document.getElementById('form'); 

let Usuario1= ''; 

const Data= [
    {
    Name: 'Jesus',
    Pass: '1999', saldo: '10' 
    },
    {
        Name: 'Fer', Pass: '2005', saldo: '800' 
    },
    {
        Name:'Luci', Pass: '1975', saldo: '500' 
    }
]

function show(type){
    let error = document.getElementById(`error${type}`)
    error.classList.remove(`escondido`)
    error.classList.add(`error`)
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 4000)
}

function True(usuario, contraseña){
    for (let i =0; i< Data.length; i++){
        if(usuario==='' && contraseña===''){
            show('Datos')
            console.log('Hola1');
        }
        else if (usuario!== Data[i].Name){
            show('Usuario')
            console.log("Hola2");
        }
        else if (contraseña!== Data[i].Pass){
            show('Password')
            console.log("Hola1");
        }
        else{
            console.log('Bienvenido');
            location.href='Menu.html';
            Usuario1=document.getElementById('Usuariohtml').value;
            localStorage.setItem("usuario",Usuario1);
            localStorage.setItem("saldo", Data[i].saldo)
            console.log(Usuario1);
            console.log(Data[i].saldo)
        }
    }
}

Formato.addEventListener('submit', (evento) => {

    evento.preventDefault();

    let usuarioHtml = document.getElementById('Usuariohtml').value

    let passwordHtml = document.getElementById('Passwordhtml').value

    True(usuarioHtml, passwordHtml)

})
