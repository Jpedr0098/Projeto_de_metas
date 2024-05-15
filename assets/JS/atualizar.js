function inc(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id == id)
    tarefa.progresso += 10
    if (tarefa.progresso >= 99) tarefa.progresso = 100
    
    let progressoGeral = document.querySelector("#progresso-geral progress").value
    let progressoMaxGeral = document.querySelector("#progresso-geral progress").max
    progressoGeral += 10

    if (progressoGeral >= progressoMaxGeral) progresso = progressoMax

    document.querySelector("#"+id +" progress").value = tarefa.progresso
    document.querySelector("#progresso-geral progress").value = progressoGeral
    
    limpar(id)
    barra_progresso_geral_INC()
    
    if(tarefa.progresso > 99) {
        document.querySelector("#"+id +" progress").classList.add("is-primary")
        tarefa.tag = "is-primary"
    } 
    else if(tarefa.progresso > 79) {
        document.querySelector("#"+id +" progress").classList.add("is-success")
        tarefa.tag = "is-success"
    }
    else if (tarefa.progresso > 39) {
        document.querySelector("#"+id +" progress").classList.add("is-warning")
        tarefa.tag = "is-warning"
    } 
    else if (tarefa.progresso < 39) {
        document.querySelector("#"+id +" progress").classList.add("is-error")
        tarefa.tag = "is-error"
    }  
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function dec(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id == id)
    tarefa.progresso -= 10
    if (tarefa.progresso <= 1) tarefa.progresso = 0

    let progressoGeral = document.querySelector("#progresso-geral progress").value
    let progressoMaxGeral = document.querySelector("#progresso-geral progress").max
    progressoGeral -= 10

    if (progressoGeral >= progressoMaxGeral) progressoGeral = progressoMaxGeral

    document.querySelector("#"+id +" progress").value = tarefa.progresso
    document.querySelector("#progresso-geral progress").value = progressoGeral

    limpar(id)
    barra_progresso_geral_DEC()

    if(tarefa.progresso < 49) {
        document.querySelector("#"+id +" progress").classList.add("is-error")
        tarefa.tag = "is-error"
    }  
    else if(tarefa.progresso < 79) {
        document.querySelector("#"+id +" progress").classList.add("is-warning")
        tarefa.tag = "is-warning"
    }
    else if (tarefa.progresso < 99) {
        document.querySelector("#"+id +" progress").classList.add("is-success")
        tarefa.tag = "is-success"
    }
    else if(tarefa.progresso > 99) {
        document.querySelector("#"+id +" progress").classList.add("is-primary")
        tarefa.tag = "is-primary"
    } 
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function limpar(id_card) {
    document.querySelector("#"+id_card +" progress").classList.remove("is-primary")
    document.querySelector("#"+id_card +" progress").classList.remove("is-success")
    document.querySelector("#"+id_card +" progress").classList.remove("is-warning")
    document.querySelector("#"+id_card +" progress").classList.remove("is-error")
    document.querySelector("#progresso-geral progress").classList.remove("is-primary")
    document.querySelector("#progresso-geral progress").classList.remove("is-success")
    document.querySelector("#progresso-geral progress").classList.remove("is-warning")
    document.querySelector("#progresso-geral progress").classList.remove("is-error")
}

function barra_progresso_geral_INC(){
    let progressoGeral = document.querySelector("#progresso-geral progress").value
    let progressoMaxGeral = document.querySelector("#progresso-geral progress").max

    if (progressoGeral > (0.99*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-primary")
    }
    else if(progressoGeral > (0.79*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-success")
    }
    else if(progressoGeral > (0.49*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-warning")
    } 
    else if(progressoGeral < (0.49*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-error")
    }   
}

function barra_progresso_geral_DEC(){
    let progressoGeral = document.querySelector("#progresso-geral progress").value
    let progressoMaxGeral = document.querySelector("#progresso-geral progress").max

    if(progressoGeral < (0.49*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-error")
    }  
    else if(progressoGeral < (0.79*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-warning")
    }
    else if (progressoGeral < (0.99*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-success")
    }
    else if (progressoGeral > (0.99*progressoMaxGeral)) {
        document.querySelector("#progresso-geral progress").classList.add("is-primary")
    }
}

