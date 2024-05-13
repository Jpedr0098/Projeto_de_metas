function inc(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id = id)
    tarefa.valor += 10
    const valores = tarefa.valor
    

    let progresso = document.querySelector("#progresso-geral progress").value
    let progressoMax = document.querySelector("#progresso-geral progress").max
    progresso += 10

    if (tarefa.value > 100) tarefa.value=100
    if (progresso >= progressoMax) progresso = progressoMax

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    document.querySelector("#"+id +" progress").value = valores
    document.querySelector("#progresso-geral progress").value = progresso
    
    document.querySelector("#"+id +" progress").classList.add("is-error")

    if (tarefa.value > 39) {
        document.querySelector("#"+id +" progress").classList.add("is-warning")
        document.querySelector("#"+id +" progress").classList.remove("is-error")
    }
    if(tarefa.value > 79) {
        document.querySelector("#"+id +" progress").classList.add("is-success")
        document.querySelector("#"+id +" progress").classList.remove("is-warning")
    }
    if(tarefa.value > 99) {
        document.querySelector("#"+id +" progress").classList.add("is-primary")
        document.querySelector("#"+id +" progress").classList.remove("is-success")
    }   
}

function dec(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id = id)
    tarefa.valor -= 10
    const valores = tarefa.valor

    let progresso = document.querySelector("#progresso-geral progress").value
    let progressoMax = document.querySelector("#progresso-geral progress").max
    progresso -= 10

    if (tarefa.value < 0) tarefa.value=0
    if (progresso >= progressoMax) progresso = progressoMax

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    document.querySelector("#"+id +" progress").value = valores
    document.querySelector("#progresso-geral progress").value = progresso

    if (tarefa.value < 99) {
        document.querySelector("#"+id +" progress").classList.add("is-success")
        document.querySelector("#"+id +" progress").classList.remove("is-primary")
    }
    if(tarefa.value < 79) {
        document.querySelector("#"+id +" progress").classList.add("is-warning")
        document.querySelector("#"+id +" progress").classList.remove("is-success")
    }
    if(tarefa.value < 49) {
        document.querySelector("#"+id +" progress").classList.add("is-error")
        document.querySelector("#"+id +" progress").classList.remove("is-warning")
    }  
}