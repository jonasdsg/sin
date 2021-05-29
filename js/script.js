import { eticaMessage, mercadoMessage } from "./data.js";
import { Card } from "./models/card.js";

const conteudo = [
    {
        videoUrl:'https://www.youtube.com/embed/OpT0MMYoAk0',
        title:'ÉTICA HACKER',
        message: eticaMessage,
        linkDoc:'https://drive.google.com/file/d/1MUsTrFhbB1jPpMea0SrO47Da5OSnx3Sn/view?usp=sharing'
    },
    {
        videoUrl:null,
        title:null,
        message:null,
        linkDoc:null
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
        videoUrl:null,
        title:null,
        message:null,
        linkDoc:null
    },
]

let loaded = false;

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

f.addEventListener('click',(e)=>{
    let index = 0;
    let lis = f.querySelectorAll('li');
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
    }
}