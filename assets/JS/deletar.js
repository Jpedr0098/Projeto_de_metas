function apagar(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefasAtualiazadas = tarefas.filter(tarefa => tarefa.id != id)
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualiazadas))

    document.querySelector("#progresso-geral progress").value -= document.querySelector("#"+id+" progress").value
    document.querySelector("#progresso-geral progress").max -=100

    document.querySelector("#"+id).remove()

    menorData()
}

function menorData(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    document.querySelector("#vencimento-meta").classList.remove("is-error")
    document.querySelector("#vencimento-meta").classList.add("is-success")

    if (tarefas == []) {
        document.querySelector("#vencimento-meta").innerText = "Tudo certo por aqui!"
    }
    else{
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

        if(dataRetida < new Date()) {
            document.querySelector("#vencimento-meta").classList.remove("is-success")
            document.querySelector("#vencimento-meta").classList.add("is-error")
        }
    }  
}

function compare(a, b) {
    return a - b;
}
