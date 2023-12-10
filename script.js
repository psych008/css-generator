
let box = document.querySelector('.block');
let showBrdR = document.querySelector('.showBrdR'); //copy Border-Radius
let showBrd = document.querySelector('.showBrd'); //copy Border
let showBck = document.querySelector('.showBck'); //copy Background

let config = [
    {'borderSetting': document.querySelector('.brdTL'), 'borderShowValue': document.querySelector('.showBrdTL')}, //TOP LEFT
    {'borderSetting': document.querySelector('.brdTR'), 'borderShowValue': document.querySelector('.showBrdTR')}, //TOP RIGHT
    {'borderSetting': document.querySelector('.brdBL'), 'borderShowValue': document.querySelector('.showBrdBL')}, //BOTTOM LEFT
    {'borderSetting': document.querySelector('.brdBR'), 'borderShowValue': document.querySelector('.showBrdBR')}, //BOTTOM RIGHT
    {'borderSetting': document.querySelector('.brdWidth'), 'borderShowValue': document.querySelector('.showBrdWidth')}, //BORDER WIDTH
    {'borderSetting': document.querySelector('.brdColor'), 'borderShowValue': document.querySelector('.showBrdColor')}, //BORDER COLOR
    {'borderSetting': document.querySelector('#brdStyle'), 'borderShowValue': document.querySelector('.showBrdStyle')}, //BORDER STYLE
    {'borderSetting': document.querySelector('.bckColor'), 'borderShowValue': document.querySelector('.showBckColor')} //BACKGROUND COLOR
]



document.addEventListener('input', function(){
    for(let i = 0; i < config.length; i++){
        config[i].borderShowValue.innerHTML = config[i].borderSetting.value;
    }
    borderRd();
    border();
    backgroundClr();
    changeCopy();
})

function borderRd(){
    box.style.borderRadius = config[0].borderSetting.value + 'px ' + config[1].borderSetting.value + 'px ' + config[2].borderSetting.value + 'px ' + config[3].borderSetting.value + 'px';
}

function border(){
    box.style.border = config[4].borderSetting.value + 'px ' + config[6].borderSetting.value + ' ' + config[5].borderSetting.value;
}

function backgroundClr(){
    box.style.backgroundColor = config[7].borderSetting.value;
}

function changeStyle(){
    box.style.borderStyle = config[5].borderSetting.value;
}

function changeCopy(){
    showBrdR.innerHTML = 'border-radius: ' + config[0].borderSetting.value + 'px ' + config[1].borderSetting.value+ 'px ' + config[2].borderSetting.value + 'px ' + config[3].borderSetting.value + 'px';
    showBrd.innerHTML = 'border: ' + config[4].borderSetting.value + 'px ' + config[6].borderSetting.value + ' ' + config[5].borderSetting.value;
    showBck.innerHTML = 'background-color: ' + config[7].borderSetting.value;
}