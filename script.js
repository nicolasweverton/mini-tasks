let BotaoAdd = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Taredas = document.getElementById('tarefas');
let marcado = false;
BotaoAdd.addEventListener('click', function() {
    if (Input.value != ''){
        var tarefa = document.createElement('p');
        tarefas.appendChild(tarefa);
        tarefa.innerHTML = '<input id="check-main" class="form-check-input" type="checkbox"> ' + Input.value;
        Input.value = '';
        tarefa.addEventListener('click', function() {
            if (marcado == false){
                marcado = true;
            }
            else {
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })
        tarefa.addEventListener('dblclick', function() {
            tarefas.removeChild(tarefa);
        })
    }
})