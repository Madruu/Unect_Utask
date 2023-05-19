//Abrir o popup da task

function togglePopup(){
    var Element = document.getElementById("popup1")
    Element.classList.toggle("active");
}


//Carrosel

const carrosel = document.querySelectorAll(".slide");
const btnprev = document.getElementById("icone_prev");
const btnNext = document.getElementById("icone_next");

let currentSlide = 0;

function hideSlider(){
    carrosel.forEach(item => item.classList.remove('on'));
} 

function showSlider(){
    carrosel[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider();
    if(currentSlide == carrosel.length -1){
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider(){
    hideSlider();
    if(currentSlide == 0){
        currentSlide = carrosel.length -1
    } else {
        currentSlide--;
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnprev.addEventListener('click', prevSlider);

console.log(carrosel);


//Função para criar task

const listContainer = document.getElementById("list-container");
const tituloinput = document.getElementById("titulo-input");
const descricaoinput = document.getElementById("descricao-input");
const botaoTask = document.getElementById("botao-cria-task")
const taskAdd = document.getElementById("taskAdd");

function addTask(e){
    if(tituloinput.value !== ''){
        e.preventDefault();
        
        const parteCompras = document.createElement('div');
        parteCompras.classList.add("parte_compras");
        
        const titulo = document.createElement('h4');
        titulo.innerHTML = tituloinput.value;
        
        const paragrafo = document.createElement('p');
        paragrafo.innerHTML = "Ler descrição";
        
        const imgXevron = document.createElement('img');
        imgXevron.src = "img/icone_xevron.svg";
        imgXevron.classList.add("icone_cima");
        
        const icone3pts = document.createElement('div');
        icone3pts.classList.add("icone_3pts");
        
        const descricao = document.createElement('p2');
        descricao.innerHTML = descricaoinput.value;
        descricao.classList.add("descricao");

        const btExc = document.createElement('div');
        btExc.classList.add("botao_excluir");

        const lixo = document.createElement('div');
        lixo.classList.add("icone_lixo");

        const paragrafo_excl = document.createElement('p2');
        paragrafo_excl.innerHTML = "Excluir";

        const update = document.createElement('div');
        update.classList.add("icone_direita");
        
        
        btExc.append(lixo, paragrafo_excl);
        paragrafo.append(imgXevron);
        parteCompras.append(titulo, paragrafo, btExc, update, icone3pts, descricao);
        
        listContainer.append(parteCompras);
        togglePopup();
    }
    
    tituloinput.innerHTML = '';
    descricaoinput.innerHTML = '';
    seto = document.querySelectorAll(".parte_compras");
    seto.forEach((item) => {
        item.addEventListener('click', abreFechaDescricao);
    });

    let exclue = document.querySelectorAll(".botao_excluir");

    exclue.forEach((botao) => {
        botao.addEventListener('click', deletar);
    })

    let setting = document.querySelectorAll(".icone_3pts");
    
    setting.forEach((botao) => {
        botao.addEventListener('click', abreSettings);
    })
    
    let update = document.querySelectorAll('.icone_direita');
    
    update.forEach((botao) => {
        botao.addEventListener('click', atualiza_task);
    })
}

function abreSettings(event){
    const item = event.target;
    item.parentElement.classList.toggle('exibe');
}

function deletar(event){
    const item = event.target;
    if(item.classList.contains("botao_excluir")){
        item.parentElement.remove();
    } else {
        item.parentElement.parentElement.remove();
    }
}

let seto = document.querySelectorAll(".parte_compras");
console.log(seto);


//Abrir/fechar descrição

function abreFechaDescricao(event){
    const descricao = event.target;
    if(descricao.classList.contains("icone_cima")){
        descricao.parentElement.parentElement.lastChild.classList.toggle('visible');
        if(descricao.parentElement.parentElement.lastChild.classList.contains('visible')){
            descricao.parentElement.classList.add('Aberto')
            descricao.parentElement.innerHTML = "Esconder descrição <img class = 'icone_cima' src='img/icone_paracima.svg' alt='icone seta para baixo'>"
        }else{
            descricao.parentElement.classList.remove('Aberto');
            descricao.parentElement.innerHTML = "Ler descrição <img class = 'icone_cima' src='img/icone_xevron.svg' alt='icone seta para baixo'>";
        }
    }
}

botaoTask.addEventListener('click', addTask);


//Update Task

function atualiza_task(event){
    /*const item = event.target;
    const atual = item.parentElement.parentElement.id;
    item.parentElement.classList.toggle('move')
    if(item.classList.contains('icone_direita')){
        if(atual == 'list-container'){
            document.getElementById('andamento').append(update);
        } else if(atual == 'andamento'){
            document.getElementById('_feito_').append(update);
            item.src = 'img/icone_esquerda.svg';
        } else {
            document.getElementById('list-container').append(update);
            item.src = 'img/icone_direita.svg';
        }
    }*/
    const item = event.target;
    const task = item.parentElement;
    const atual = item.parentElement.parentElement.id;
    item.parentElement.classList.toggle('att');
  //  Mover para frente
    if (item.classList.contains('icone_direita')) {
        if (atual == 'list-container') {
            document.getElementById('_andamento_').append(task);
        } else if (atual == '_andamento_') {
            document.getElementById('_feito_').append(task);
            item.src = 'img/icone_esquerda.svg';
        } else {
            document.getElementById('list-container').append(task);
            item.src = 'img/icone_direita.svg';
        }
    }
        const parteCompras = document.createElement('div');
        parteCompras.classList.add("parte_compras");
        
        const titulo = document.createElement('h4');
        titulo.innerHTML = tituloinput.value;
        
        const paragrafo = document.createElement('p');
        paragrafo.innerHTML = "Ler descrição";
        
        const imgXevron = document.createElement('img');
        imgXevron.src = "img/icone_xevron.svg";
        imgXevron.classList.add("icone_cima");
        
        const icone3pts = document.createElement('div');
        icone3pts.classList.add("icone_3pts");
        
        const descricao = document.createElement('p2');
        descricao.innerHTML = descricaoinput.value;
        descricao.classList.add("descricao");

        const btExc = document.createElement('div');
        btExc.classList.add("botao_excluir");

        const lixo = document.createElement('div');
        lixo.classList.add("icone_lixo");

        const paragrafo_excl = document.createElement('p2');
        paragrafo_excl.innerHTML = "Excluir";

        const update = document.createElement('div');
        update.classList.add("icone_direita");
        
        btExc.append(lixo, paragrafo_excl);
        paragrafo.append(imgXevron);
        parteCompras.append(titulo, paragrafo, btExc, update, icone3pts, descricao);

}


//Excluir uma task

/*const deletar = document.getElementById("delete");
const deletou = document.getElementById("deletou");
const par = document.getElementById("par");
*/
