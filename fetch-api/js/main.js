const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
        
    }
}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log("Deu Erro: " + e,message))
});


const btnClear = document.getElementById("btn");

btnClear.addEventListener("click", function(){
    const input_cep = document.getElementById("cep").innerHTML = "";
    const input_logra = document.getElementById("logradouro").innerHTML = "";
    const input_bairro = document.getElementById("bairro").innerHTML = "";
    const input_local = document.getElementById("localidade").innerHTML = "";
    const input_uf = document.getElementById("uf").innerHTML = "";
})