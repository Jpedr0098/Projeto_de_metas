document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        title: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)

    console.log(tarefa)
})

function validar(tarefa){
    document.querySelector("#titulo").classList.remove("is-error")
    document.querySelector("#descricao").classList.remove("is-error")
    document.querySelector("#pontos").classList.remove("is-error")
    document.querySelector("#titulo-erro").innerText = ""
    document.querySelector("#descricao-erro").innerText = ""
    document.querySelector("#pontos-erro").innerText = ""


    
    if (tarefa.title.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "Titulo é obrigatório!"
        console.log("Ta no erro irmão...")
    }
    if (tarefa.descricao.trim() == "" || tarefa.descricao.lenght < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "descricao deve ter no minimo 10 caracteres"
        console.log("Ta no erro irmão...")
    }
    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = "Os pontos devem ser maiores que zero!"
        console.log("Ta no erro irmão...")
    }
}