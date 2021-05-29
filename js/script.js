import { conteudoListas, eticaMessage, leisMessage, mercadoMessage, questoesMessage } from "./data.js";
import { Card } from "./models/card.js";

const conteudo = [
    {
        videoUrl:'https://www.youtube.com/embed/OpT0MMYoAk0',
        title:'ÉTICA HACKER',
        message: eticaMessage,
        linkDoc:'https://drive.google.com/file/d/1MUsTrFhbB1jPpMea0SrO47Da5OSnx3Sn/view?usp=sharing'
    },
    {
        videoUrl:'https://www.youtube.com/embed/S6kJ98BJruA',
        title:'Questões jurídicas corporativas',
        message:questoesMessage,
        linkDoc:'https://drive.google.com/file/d/1jGnO4c5qJiXFJ7cBQ3ZEn-wLS2boLdqR/view?usp=sharing'
    },
    {
        videoUrl:null,
        title:null,
        message:null,
        linkDoc:null
    },
    {
        videoUrl:'https://www.youtube.com/embed/OSWGHhjSFbs?start=33',
        title:'Mercado de trabalho',
        message: mercadoMessage,
        linkDoc:'https://drive.google.com/file/d/1Lh-OciuUTc3xmY3ewPZQgyD4qhMTREDS/view?usp=sharing'
    },
    {
        videoUrl:'https://www.youtube.com/embed/oFRROvMVUWQ',
        title:'Entenda: O que é e pra que serve a LGPD?',
        message:leisMessage,
        linkDoc:'https://drive.google.com/file/d/1-nbus7sa6qlqG2-VP2WGM_vdML6cBKGw/view?usp=sharing'
    },
]

let loaded = false;
let lis;
let heavy = [0,0,0,0,0];
let find = document.querySelector("#find");
let b = document.querySelector("#main div div");
let c = document.querySelector("#textContent");
let d = document.querySelector("#description");
let f = document.querySelector("#topics ul");

if(loaded){
    b.classList = "";
    c.classList = "";
    d.hidden = true;
}



for(let i = 0; i<conteudoListas.length; i++){
    let li = document.createElement('li');
    li.classList = "list-group-item mb-1 list-group-item-action";
    li.innerHTML = `<header><b>${conteudoListas[i].titulo}</b></header>
                    <span hidden>${conteudoListas[i].corpo}</span>`;
    f.appendChild(li);
}


f.addEventListener('click',(e)=>{
    let index = 0;
    lis = f.querySelectorAll('li');
    for(index = 0; index < lis.length; index++){
        if(lis[index].textContent.includes(e.target.textContent)){
            break;
        }
    }
    setConteudo(index);
})

d.addEventListener('click',(e)=>{
    if(d.value){
        c.hidden = !c.hidden;
    }
})

find.addEventListener('keyup',(e)=>{
    heavy = [0,0,0,0,0];
    console.log(find.value);
    let i = 0;
 
    conteudo.forEach(cont=>{
        let contentArray = null;
        let keySplit = null;
        
        if(!keySplit){
            keySplit = find?.value?.split(/\s/);
        } 
        if(!contentArray){
            contentArray = cont?.message?.toLowerCase()?.split(/\s/);
            console.log(contentArray)
        }

        if(keySplit?.length>1){

            keySplit.forEach(m=>{
                if(contentArray?.includes(m)){
                    heavy[i]++
                }
            })
        }

        i++;
    })
    let maior = 0, index;
    i = 0;
    heavy.forEach(n=>{
        if(n>maior){
            index = i;
            maior = n;
        }
        i++;
    })

    setConteudo(index);
    console.log(index)
    console.log(heavy);
});
let last = null;
function setConteudo(index){
    if(conteudo[index]?.title){
        if(!loaded){
            loaded = true;
            b.classList = "col-md-12 col-lg-8 ratio ratio-16x9 mb-2";
            c.classList = "col-md-12 col-lg-8 mb-2";
        }
        let a = new Card(conteudo[index].videoUrl,conteudo[index].title,conteudo[index].message,conteudo[index].linkDoc);
        c.removeChild(c.firstChild);
        c.appendChild(a.textContent);
        b.removeChild(b.firstChild);
        b.appendChild(a.card)
        if(last){
            last.hidden = true;
        }
        last = lis[index].querySelector('span');
        last.hidden = false;
    }
}