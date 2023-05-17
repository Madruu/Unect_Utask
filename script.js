
function togglePopup(){
    var Element = document.getElementById("popup1")
    Element.classList.toggle("active");
}


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
        
        paragrafo.append(imgXevron);
        parteCompras.append(titulo, paragrafo, icone3pts, descricao);
        
        listContainer.append(parteCompras);
        togglePopup();
    }
    tituloinput.innerHTML = '';
    descricaoinput.innerHTML = '';
    seto = document.querySelectorAll(".parte_compras");
    seto.forEach((item) => {
        item.addEventListener('click', abreFechaDescricao);
    });
}

let seto = document.querySelectorAll(".parte_compras");
console.log(seto);

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


//Excluir uma task

const deletar = document.getElementById("delete");
const deletou = document.getElementById("deletou");
const par = document.getElementById("par");

deletar.addEventListener('click', function(e){
    if(e.target.tagName = "botao_excluir"){
        e.target.parentElement.remove();
    }
}, false)

deletou.addEventListener('click', function(e){
    if(e.target.tagName = "icone_lixo"){
        e.target.parentElement.parentElement.remove();
    }
})

par.addEventListener('click', function(e){
    if(e.target.tagName = "par"){
        e.target.parentElement.parentElement.remove();
    }
})

function deleteTask(event){
    
    
    
    /*const deletou = document.createElement('div');
    deletou.classList.add("botao_excluir");
    const close = document.querySelectorAll(".botao_excluir");
    for(let i = 0; close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.display = "none";
        })
    }*/
    /*e.preventDefault();
    /*const botaoDel = document.createElement('img');
    botaoDel.src = "img/icone_lixo.svg";
    botaoDel.classList.add("icone_deletar");

    const paragrafoDel = document.createElement('p2');
    paragrafoDel.innerHTML = "Excluir";
    /*const lixo = e.target;
    if(lixo.classList.contains("delete")){
        e.target.parentElement.remove();
    }
    paragrafoDel.prepend(botaoDel);*/
}

//deletar.addEventListener('click', deleteTask);
console.log(deletar);


/*<div class = "parte_manicure">
<h4>Fazer manicure</h4>
                <p>Ler descrição<img src="img/icone_xevron.svg" alt="icone seta para baixo"></p>
                <div class = "icone_3pts"></div>
                <div class = "scroll"></div>
            </div>*/ 

/*const carrosel = document.querySelector(".inner_a_fazer");

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    //e.preventDefault();
    carrosel.scrollLeft= e.pageX;
}


carrosel.addEventListener("mousedown", dragStart);
carrosel.addEventListener("mousemove", dragging);

/*document.querySelectorAll(".carrosel").forEach(carrosel => {
    const itens = carrosel.querySelectorAll(".carrosel");
    const botaohtml = Array.from(itens, () => {
        return '<div class = "a_fazer></div>', '<div class = "em_andamento></div>', '<div class = "feito></div>';
    });
    console.log(botaohtml);
    
    carrosel.insertAdjacentHTML("beforeend", '
        <div class = "a_fazer">

        </div>
    ');

    const botoes = carrosel.querySelectorAll(".icone_seta_mobile");
    const botao1 = carrosel.querySelectorAll(".icone_seta_2");

    botoes.forEach((botao, i) => {
        botao.addEventListener("click", () => {
            itens.forEach(item => item.classList.remove("carrosel_item_selecionado"));
            botoes.forEach(botao => botao.classList.remove("carrosel_item_selecionado"));
        });
    });
});*/