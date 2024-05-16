const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => { card(tarefa)})

menorData()

function card(tarefa){

    const dataForms = tarefa.data
    const dataSep = dataForms.split("-")
    const data = dataSep[1]+"/"+dataSep[2]

    const cardTarefa = `
    <div class="nes-container with-title is-centered is-nivel">
            <p class="title">${tarefa.title}</p>
            <p>${tarefa.descricao}</p>
            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon trophy is-small"></i></span>
                <span class="is-primary">${tarefa.pontos}</span>
            </a>
            <a href="#" class="nes-badge">
                <span class="is-primary">${data}</span>
            </a>
            <progress class="nes-progress ${tarefa.tag}" value="${tarefa.progresso}" max="100"></progress>
            <button onClick="dec('${tarefa.id}')" type="button" class="nes-btn is-primary">-</button>
            <button onClick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">apagar</button>
            <button onClick="inc('${tarefa.id}')" type="button" class="nes-btn is-primary">+</button>
        </div>
    `
    const card = document.createElement("div")
    card.id = tarefa.id
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)

    document.querySelector("#progresso-geral progress").max +=100
    document.querySelector("#progresso-geral progress").value += tarefa.progresso
}

function menorData(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let lista=[]
    let ponto=[]
    
    tarefas.forEach(tarefa => {lista.push(tarefa.data)})
    lista.sort(compare)

    let listaDatas = tarefas.filter(tarefa => tarefa.data == lista[0])

    listaDatas.forEach(tarefa => {ponto.push(tarefa.pontos)})
    ponto.sort(compare)
    let teste = ponto.pop()
    
    let item = tarefas.filter(tarefa => tarefa.pontos == teste)
    let card = item[0]

    if (card != null) {
        document.querySelector("#vencimento-meta").innerText = card.title+" - "+card.data
        document.querySelector("#buba-id p").innerText = "Não vai esquecer da meta em..."
    }
    else {
        document.querySelector("#vencimento-meta").innerText = "Tudo certo por aqui!"
        document.querySelector("#buba-id p").innerText = "Pode ficar suave meu parceiro!"
    } 
}

function compare(a, b) {
    return a - b;
}

    