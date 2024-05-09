function inc(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id = id)
    tarefa.status += 10

    if (tarefa.status > 100) tarefa.status=100

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    document.querySelector("#"+id +" progress").value = tarefa.status

    document.querySelector("#"+id +" progress").classList.add("is-error")

    if (tarefa.status > 39) {
        document.querySelector("#"+id +" progress").classList.add("is-warning")
        document.querySelector("#"+id +" progress").classList.remove("is-error")
    }
    if (tarefa.status > 79) {
        document.querySelector("#"+id +" progress").classList.add("is-success")
        document.querySelector("#"+id +" progress").classList.remove("is-warning")
    }
    if (tarefa.status > 99) {
        document.querySelector("#"+id +" progress").classList.add("is-primary")
        document.querySelector("#"+id +" progress").classList.remove("is-success")
    }
}

function dec(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id = id)
    tarefa.status -= 10

    if (tarefa.status < 0) tarefa.status=0

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    document.querySelector("#"+id +" progress").value = tarefa.status

    if (tarefa.status < 49) {
        document.querySelector("#"+id +" progress").classList.add("is-error")
        document.querySelector("#"+id +" progress").classList.remove("is-warning")
    }
    if (tarefa.status < 79) {
        document.querySelector("#"+id +" progress").classList.add("is-warning")
        document.querySelector("#"+id +" progress").classList.remove("is-success")
    }
    if (tarefa.status < 99) {
        document.querySelector("#"+id +" progress").classList.add("is-success")
        document.querySelector("#"+id +" progress").classList.remove("is-primary")
    }
}