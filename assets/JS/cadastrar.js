document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()+1
    const year = today.getFullYear()
    const date = String(year)+String(month)+String(day)


    const tarefa = {
        title: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value,
        data: form.data.value
    }

    validar(tarefa)

    
    
    console.log(date)

    console.log(tarefa)
})

function validar(tarefa){
    document.querySelector("#titulo").classList.remove("is-error")
    document.querySelector("#descricao").classList.remove("is-error")
    document.querySelector("#pontos").classList.remove("is-error")
    document.querySelector("#data").classList.remove("is-error")
    document.querySelector("#titulo-erro").innerText = ""
    document.querySelector("#descricao-erro").innerText = ""
    document.querySelector("#pontos-erro").innerText = ""
    document.querySelector("#data-erro").innerText = ""

    
    
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