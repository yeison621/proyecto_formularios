const formulario = document.querySelector("#formulario");
const resultado= document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const datos = new FormData(formulario);
    let mascota={};

    for(let[campo,valor] of datos.entries()){

        if(valor.trim()===""){
            alert(`el campo ${campo}esta vacio`);
            return;
        }

        mascota[campo] = valor;

    }
    localStorage.setItem("mascota", JSON.stringify(mascota));

    mostrarDatos();
});

function mostrarDatos(){
    let mascota = JSON.parse(localStorage.getItem("mascota"));

    resultado.innerHTML="";

    if (mascota){
        for(let campo in mascota){
            resultado.innerHTML +=`
            <tr>
                <td>${campo}</td>
                <td>${mascota[campo]}</td>

            </tr>
            `;
        }
    }

}
// mostrar datos al cargar la página
mostrarDatos();