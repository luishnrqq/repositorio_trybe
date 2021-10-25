function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


  
 function createDaysOfTheMonth() {
   let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
     let day = dezDaysList[index];
     let dayItem = document.createElement('li');

     if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
       dayItem.innerHTML = day;

      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    button.innerHTML = buttonName;
    button.id = newButtonID;
    buttonContainer.appendChild(button);
  };
  
  createHolidayButton('Feriados');


  function displayHolidays() {
    let selectButton = document.querySelector('#btn-holiday');
    let selectAll    = document.querySelectorAll('.holiday');
    let clicaMuda   = 'rgb(238,238,238)';
    let clicaDnvMuda= 'yellow';

    selectButton.addEventListener('click',function(){
        for(let i = 0; i < selectAll.length; i += 1){
            if(selectAll[i].style.backgroundColor == clicaDnvMuda){
                selectAll[i].style.backgroundColor = clicaMuda;
            }
            else{
                selectAll[i].style.backgroundColor = clicaDnvMuda;
            }
        }
    })
  };
  
  displayHolidays();

function sextou(botao){
    let selecionaBotao = document.querySelector('.buttons-container');
    let botaoSextou = document.createElement('button');
    let botaoSextouID = 'btn-friday';

    botaoSextou.innerHTML = botao;
    botaoSextou.id = botaoSextouID;
    selecionaBotao.appendChild(botaoSextou);
}

sextou('Sexta-Feira');

function ativarSextou(sextouArray){
    let selecionarSexta = document.querySelector('#btn-friday');
    let selecionarTdsSexta = document.getElementsByClassName('friday');
    let clicaMuda   = 'sextou carai!';
    
    selecionarSexta.addEventListener('click', function(){
    for(let i = 0; i < selecionarTdsSexta.length; i+=1){
      if(selecionarTdsSexta[i].innerHTML != clicaMuda){
        selecionarTdsSexta[i].innerHTML = clicaMuda;
      }
      else{
        selecionarTdsSexta[i].innerHTML = sextouArray[i];
      }
    }
})
}

let friday = [4 , 11 ,18 , 25];

ativarSextou(friday);

function passarAumenta(){
  let dia = document.querySelector('#days');

  dia.addEventListener('mouseover',function(event){
    event.target.style.fontSize = '35px';
    event.target.style.fontWeight = '400';
  });
}

function tirarDiminui(){
  let dia = document.querySelector('#days');

  dia.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

passarAumenta();
tirarDiminui();

function criarTarefas(tarefas){
  let container = document.querySelector('.my-tasks');
  let criaSpan = document.createElement('span');

  criaSpan.innerHTML = tarefas;
  container.appendChild(criaSpan);
}

criarTarefas('To-Do:');

function addLegend(color){
  let selecionaContainer = document.querySelector('.my-tasks');
  let criarDiv = document.createElement('div');

  criarDiv.className = 'tarefas';
  criarDiv.style.backgroundColor = color;
  selecionaContainer.appendChild(criarDiv);
}

addLegend('green');

function addEvent(){
  let taskSelecionada = document.getElementsByClassName('task selected');
  let naoSelecionada = document.querySelector('.task');

  naoSelecionada.addEventListener('click', function(event){
    if(taskSelecionada === 0){
      event.target.className = 'task selected';
    }
    else{
      event.target.className = 'task';
    }
  })
}

addEvent();

function diaCor(){
  let selecionaTask = document.getElementsByClassName('task selcted');
  let selecionaDia = document.querySelector('#days');
  let task = document.querySelector('.task');
  let corDeFundo = task.style.backgroundColor;

  selecionaDia.addEventListener('click', function(event){
    let targetColor = event.target.style.color;
    if(selecionaTask.length > 0 && targetColor !== corDeFundo){
      let cor = selecionaTask[0].style.backgroundColor;
        event.target.style.color = cor;
    }
    else if(targetColor === corDeFundo && selecionaTask.length !== 0){
      event.target.style.color= 'rgb(119,119,119)';
    }
  });
}

diaCor();