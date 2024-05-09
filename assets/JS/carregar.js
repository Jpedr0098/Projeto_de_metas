const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => { card(tarefa)})

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
            <progress class="nes-progress is-success" value="${tarefa.value}" max="100"></progress>
            <button onClick="dec('${tarefa.id}')" type="button" class="nes-btn is-primary">-</button>
            <button onClick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">apagar</button>
            <button onClick="inc('${tarefa.id}')" type="button" class="nes-btn is-primary">+</button>
        </div>
    `
    const card = document.createElement("div")
    card.id = tarefa.id
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}