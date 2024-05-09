document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        id: "id_" + new Date().getTime(),
        title: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value,
        data: form.data.value,
        value: 0
    }
    
    const erro = validar(tarefa)

    if (erro == 0) salvar(tarefa)
})

function salvar(tarefa){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href = "index.html"
}

function validar(tarefa){

    limparErros()
    let erro = 0

    const partesData = tarefa.data.split("-");
    const dataRetida = new Date(partesData[0], partesData[1] - 1, partesData[2]);
    
    if (tarefa.title.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "Titulo é obrigatório!"
        erro = 1
    }
    if (tarefa.descricao.trim() == "" || tarefa.descricao.lenght < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "descricao deve ter no minimo 10 caracteres"
        erro = 1
    }
    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = "Os pontos devem ser maiores que zero!"
        erro = 1
    }
    if(dataRetida < new Date() || dataRetida == "Invalid Date"){
        document.querySelector("#data").classList.add("is-error")
        document.querySelector("#data-erro").innerText = "Coloque uma data maior que o dia de hoje!"
        erro = 1
    }
    return erro
}

function limparErros(){

    document.querySelector("#data-erro").innerText=""

    document.querySelectorAll("input.is-error, textarea.is-error")
    .forEach((input)=>{input.classList.remove("is-error")})

    document.querySelectorAll(".nes-field span")
    .forEach((span)=> span.innerText="") 
}