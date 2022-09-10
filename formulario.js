//formulario

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit",validarformulario);

function validarformulario(ev){
    if((campoEmail.value=="")||(!isNaN(campoEmail.value))){
        ev.preventDefault();
    }
    if((campoconsulta.value=="")||(!isNaN(campoconsulta.value))){
        ev.preventDefault();
    } 
}
