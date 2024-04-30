let password
function validatePassword(password){
    if (password.replace(/\s/g, '').length < 8){ //raplace: reemplazar especificamente algo. -(sirve para eliminar espacios y contar las letras)
       return(console.log("Por favor, ingrese una contrasena valida, minimo 8 caracteres")) 
    }

    if (!/[A-Z]/.test(password)) { //![A-Z] "!" si no hay coincidencia con un carccter mayuscula
        return(console.log("Por favor, ingrese una contrasena valida, debe tener como minimo una letra en mayuscula"))
    }

    if (!/\d/.test(password)) { // /\d/ verifica si el password contiene al menos un número
        return(console.log("Por favor, ingrese una contrasena valida, debe contener números"))
      }
      
      
}
validatePassword("edwincito_2.0")