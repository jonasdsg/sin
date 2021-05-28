import { Card } from "./models/card.js";

const conteudo = [
    {
        videoUrl:'https://www.youtube.com/embed/OpT0MMYoAk0',
        title:'ÉTICA HACKER',
        message:'O prejuízo causado por ataques virtuais pode custar muito para uma empresa, às vezes podendo até levá-la a falir. Com objetivo de contornar isso, cada vez mais empresas estão investindo em segurança cibernética. Grandes nomes como a Google, por exemplo, pagam profissionais para achar brechas na segurança de seus sistemas e produzirem soluções para essas vulnerabilidades. O termo para esse conceito é o da “Ética Hacker”.',
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
        message:'Muitas empresas estão contratando profissionais de segurança cibernética. É uma das áreas que mais crescem no mercado, sendo uma das principais tendências em tecnologia nos próximos anos.Esta alta demanda de profissionais da área, deve-se à popularização e democratização da internet. Cada vez mais pessoas e empresas estão conectadas, e, com isso, mais dados são gerados. Consequentemente, os ciberataques estão ficando cada vez mais frequentes e complexos.',
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
})

d.addEventListener('click',(e)=>{
    if(d.value){
        c.hidden = !c.hidden;
    }
})

