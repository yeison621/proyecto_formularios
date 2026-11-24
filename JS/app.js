const formulario=document.querySelector("#formulario");
const resultado=document.querySelector("#resultado");
const aprendizGuardado=localStorage.getItem("aprendiz");


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const datos =new FormData(formulario);
    const aprendiz={};

    for(const[campo, valor]of datos.entries()){
        aprendiz[campo]=valor;
    }

    aprendiz.acepta=datos.has("acepta")? "si":"no";

    localStorage.setItem("aprendiz", JSON.stringify(aprendiz))

    mostrarAprendiz(aprendiz);
});

function mostrarAprendiz(aprendiz){
    resultado.replaceChild();

    for(const campo in aprendiz){
        resultado.innerHTML+=`<p> ${campo} ${aprendiz[campo]}</p>`
    }

    formulario.reset();
    alert("Aprendiz registrado exitosamente");
}

if(aprendizGuardado){
    mostrarAprendiz(JSON.parse(aprendizGuardado))
}