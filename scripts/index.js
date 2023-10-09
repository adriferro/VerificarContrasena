const pswrd = document.getElementById("pswrd");

const verificar = document.getElementById("verificar");

verificar.addEventListener("click", () => {
    
      const condition = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    
        if(condition.test(pswrd.value)){
            alert("La contraseña es segura")
        }else{
            alert("La contraseña no es segura")
        }
    
})
