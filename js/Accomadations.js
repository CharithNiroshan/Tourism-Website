let counter=0;

//Function to slide in Navigation Bar
function barshow()
{
    const navigationbar=document.querySelector('#menuicon');
    const links=document.querySelectorAll('.nav-links li');
    const linksbar=document.querySelector('.nav-links');
    navigationbar.addEventListener('click',()=>
    {
        if(counter%2==0)
        {
            linksbar.style.transition='transform 0.6s ease-in-out';
            linksbar.style.transform='translateX(0%)';
        }
        else
        {
            linksbar.style.transition='transform 0.6s ease-in-out';
            linksbar.style.transform='translateX(100%)';
        }
        counter++;
        navigationbar.classList.toggle("toggle");
        links.forEach((link,index)=>{
            if(link.style.animation)
            {
                link.style.animation='';
            }
            else{
                link.style.animation="linkanimation 0.5s ease-in-out forwards "+((index/5)+0.3)+"s";
            }
            
        });
    });
}
barshow();


//Image Slider Javascript

let imageslider={
    'fivestar':{
        counter:0,
        slider:document.querySelector('#fivestarslider'),
        sliderimages:document.querySelector('#fivestarslider').querySelectorAll('.slide'),
        left:document.querySelector("#fivestar").querySelector("#arrow-left"),
        right:document.querySelector("#fivestar").querySelector("#arrow-right"),
    },
    'Other':{
        counter:0,
        slider:document.querySelector('#Otherslider'),
        sliderimages:document.querySelector('#Otherslider').querySelectorAll('.slide'),
        left:document.querySelector("#Other ").querySelector("#arrow-left"),
        right:document.querySelector("#Other").querySelector("#arrow-right"),
    },
    'boutiquevillas':{
        counter:0,
        slider:document.querySelector('#boutiquevillasslider'),
        sliderimages:document.querySelector('#boutiquevillasslider').querySelectorAll('.slide'),
        left:document.querySelector("#boutiquevillas ").querySelector("#arrow-left"),
        right:document.querySelector("#boutiquevillas").querySelector("#arrow-right"),
    },
    'bungalows':{
        counter:0,
        slider:document.querySelector('#bungalowsslider'),
        sliderimages:document.querySelector('#bungalowsslider').querySelectorAll('.slide'),
        left:document.querySelector("#bungalows ").querySelector("#arrow-left"),
        right:document.querySelector("#bungalows ").querySelector("#arrow-right"),
    },
}

const FIVESTAR=imageslider['fivestar'];
const OTHER=imageslider['Other'];
const BOUTIQUEVILLAS=imageslider['boutiquevillas'];
const BUNGALOWS=imageslider['bungalows'];


let times=0;

let hoteltypes=['fivestar','Other','boutiquevillas','bungalows'];

if(times==0)
{
    startslide();
}

//Start slide

function startslide()
{
    for(let j=0;j<hoteltypes.length;j++)
    {
        sliderimages=imageslider[hoteltypes[j]]['sliderimages'];
        for(let i=0;i<sliderimages.length;i++)
        {
            sliderimages[i].style.display='none';
        }
    } 
    for(let j=0;j<hoteltypes.length;j++)
    {
        sliderimages=imageslider[hoteltypes[j]]['sliderimages'];
        sliderimages[0].style.display='block';
    } 
}

function slideleft(hoteltype)
{
    sliderimages=imageslider[hoteltype]['sliderimages'];
    for(let i=0;i<sliderimages.length;i++)
    {
        sliderimages[i].style.display='none';
    }
    sliderimages[imageslider[hoteltype]['counter']-1].style.display='block';
    imageslider[hoteltype]['counter']--;
}

function slideright(hoteltype)
{
    sliderimages=imageslider[hoteltype]['sliderimages'];
    for(let i=0;i<sliderimages.length;i++)
    {
        sliderimages[i].style.display='none';
    }
    sliderimages[imageslider[hoteltype]['counter']+1].style.display='block';
    imageslider[hoteltype]['counter']++;
}

FIVESTAR['left'].addEventListener('click', ()=>{
    sliderimages=FIVESTAR['sliderimages'];
    if(FIVESTAR['counter']==0)
    {
        FIVESTAR['counter']=sliderimages.length;
    }
    slideleft('fivestar');
})

FIVESTAR['right'].addEventListener('click',()=>{
    sliderimages=FIVESTAR['sliderimages'];
    if(FIVESTAR['counter']==sliderimages.length-1)
    {
        FIVESTAR['counter']=-1;
    }
    slideright('fivestar');
})

OTHER['left'].addEventListener('click',()=>{
    sliderimages=OTHER['sliderimages'];
    if(OTHER['counter']==0)
    {
        OTHER['counter']=sliderimages.length;
    }
    slideleft('Other');
})

OTHER['right'].addEventListener('click',()=>{
    sliderimages=OTHER['sliderimages'];
    if(OTHER['counter']==sliderimages.length-1)
    {
        OTHER['counter']=-1;
    }
    slideright('Other');
})

BOUTIQUEVILLAS['left'].addEventListener('click',()=>{
    sliderimages=BOUTIQUEVILLAS['sliderimages'];
    if(BOUTIQUEVILLAS['counter']==0)
    {
        BOUTIQUEVILLAS['counter']=sliderimages.length;
    }
    slideleft('boutiquevillas');
})

BOUTIQUEVILLAS['right'].addEventListener('click',()=>{
    sliderimages=BOUTIQUEVILLAS['sliderimages'];
    if(BOUTIQUEVILLAS['counter']==sliderimages.length-1)
    {
        BOUTIQUEVILLAS['counter']=-1;
    }
    slideright('boutiquevillas');
})

BUNGALOWS['left'].addEventListener('click',()=>{
    sliderimages=BUNGALOWS['sliderimages'];
    if(BUNGALOWS['counter']==sliderimages.length-1)
    {
        BUNGALOWS['counter']=-1;
    }
    slideright('bungalows');
})

BUNGALOWS['right'].addEventListener('click',()=>{
    sliderimages=BUNGALOWS['sliderimages'];
    if(BUNGALOWS['counter']==sliderimages.length-1)
    {
        BUNGALOWS['counter']=-1;
    }
    slideright('bungalows');
})

times++;


//Javascript to show selected hotel type

let provinceselector={
    'fivestar':document.querySelector("#fivestar"),
    'other':document.querySelector("#other"),
    'boutiquevillas':document.querySelector("#boutique"),
    'bungalows':document.querySelector("#bungalows"),
}


let pselector=document.querySelector("#pselector");
let allprovinces=document.querySelectorAll(".hoteltype");
deleteall();
provinceselector['fivestar'].style.visibility='visible';



pselector.addEventListener('change',()=>{
    deleteall();
    let value=pselector.value;
    switch(value)
    {
        case 'fivestar':provinceselector['fivestar'].style.visibility='visible';break;
        case 'other':provinceselector['other'].style.visibility='visible';break;
        case 'boutiquevillas':provinceselector['boutiquevillas'].style.visibility='visible';break;
        case 'bungalows':provinceselector['bungalows'].style.visibility='visible';break;
    }
})


function deleteall()
{
    for(let i=0;i<allprovinces.length;i++)
    {
        allprovinces[i].style.visibility='hidden';
    }   
}