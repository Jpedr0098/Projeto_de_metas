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

    document.querySelector("#vencimento-meta").innerText = card.title+" - "+card.data
    
    const partesData = card.data.split("-");
    const dataRetida = new Date(partesData[0], partesData[1] - 1, partesData[2]);

    document.querySelector("#vencimento-meta").classList.remove("is-error")
    document.querySelector("#vencimento-meta").classList.add("is-success")

    if(dataRetida < new Date()) {
        document.querySelector("#vencimento-meta").classList.remove("is-success")
        document.querySelector("#vencimento-meta").classList.add("is-error")
    }
}

function compare(a, b) {
    return a - b;
}

    