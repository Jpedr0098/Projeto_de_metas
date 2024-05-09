function apagar(id) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefasAtualiazadas = tarefas.filter(tarefa => tarefa.id != id)
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualiazadas))

    document.querySelector("#"+id).remove()
}