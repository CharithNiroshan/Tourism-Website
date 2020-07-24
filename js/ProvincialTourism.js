let counter=0;


//Function to Slide the Navigation bar
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


//Code to Image Sliders


let imageslider={
    'western':{
        counter:0,
        slider:document.querySelector('#westernslider'),
        sliderimages:document.querySelector('#westernslider').querySelectorAll('.slide'),
        left:document.querySelector("#western").querySelector("#arrow-left"),
        right:document.querySelector("#western").querySelector("#arrow-right"),
    },
    'central':{
        counter:0,
        slider:document.querySelector('#centralslider'),
        sliderimages:document.querySelector('#centralslider').querySelectorAll('.slide'),
        left:document.querySelector("#central ").querySelector("#arrow-left"),
        right:document.querySelector("#central ").querySelector("#arrow-right"),
    },
    'northern':{
        counter:0,
        slider:document.querySelector('#northernslider'),
        sliderimages:document.querySelector('#northernslider').querySelectorAll('.slide'),
    },
    'eastern':{
        counter:0,
        slider:document.querySelector('#easternslider'),
        sliderimages:document.querySelector('#easternslider').querySelectorAll('.slide'),
    },
    'southern':{
        counter:0,
        slider:document.querySelector('#southernslider'),
        sliderimages:document.querySelector('#southernslider').querySelectorAll('.slide'),
        left:document.querySelector("#southern ").querySelector("#arrow-left"),
        right:document.querySelector("#southern ").querySelector("#arrow-right"),
    },
    'northwestern':{
        counter:0,
        slider:document.querySelector('#northwesternslider'),
        sliderimages:document.querySelector('#northwesternslider').querySelectorAll('.slide'),
    },
    'northcentral':{
        counter:0,
        slider:document.querySelector('#northcentralslider'),
        sliderimages:document.querySelector('#northcentralslider').querySelectorAll('.slide'),
        left:document.querySelector("#northcentral ").querySelector("#arrow-left"),
        right:document.querySelector("#northcentral ").querySelector("#arrow-right"),
    },
    'uva':{
        counter:0,
        slider:document.querySelector('#uvaslider'),
        sliderimages:document.querySelector('#uvaslider').querySelectorAll('.slide'),
    },
    'sabaragamuwa':{
        counter:0,
        slider:document.querySelector('#sabaragamuwaslider'),
        sliderimages:document.querySelector('#sabaragamuwaslider').querySelectorAll('.slide'),
        left:document.querySelector("#sabaragamuwa ").querySelector("#arrow-left"),
        right:document.querySelector("#sabaragamuwa ").querySelector("#arrow-right"),
    },
}


const WESTERN=imageslider['western'];
const EASTERN=imageslider['central'];
const SOUTHERN=imageslider['southern'];
const NORTHERN=imageslider['northern'];
const NORTHWESTERN=imageslider['northwestern'];
const UVA=imageslider['uva'];
const SABARAGAMUWA=imageslider['sabaragamuwa'];
const NORTHCENTRAL=imageslider['northcentral'];
const CENTRAL=imageslider['central'];

let times=0;

let provinces=['western','central','northern','eastern','southern','northwestern','northcentral','uva','sabaragamuwa'];

if(times==0)
{
    startslide();
}

//Start slide

function startslide()
{
    for(let j=0;j<provinces.length;j++)
    {
        sliderimages=imageslider[provinces[j]]['sliderimages'];
        for(let i=0;i<sliderimages.length;i++)
        {
            sliderimages[i].style.display='none';
        }
    } 
    for(let j=0;j<provinces.length;j++)
    {
        sliderimages=imageslider[provinces[j]]['sliderimages'];
        sliderimages[0].style.display='block';
    } 
}


//Slide Left
function slideleft(province)
{
    sliderimages=imageslider[province]['sliderimages'];
    for(let i=0;i<sliderimages.length;i++)
    {
        sliderimages[i].style.display='none';
    }
    sliderimages[imageslider[province]['counter']-1].style.display='block';
    imageslider[province]['counter']--;
}


//Slide Right
function slideright(province)
{
    sliderimages=imageslider[province]['sliderimages'];
    for(let i=0;i<sliderimages.length;i++)
    {
        sliderimages[i].style.display='none';
    }
    sliderimages[imageslider[province]['counter']+1].style.display='block';
    imageslider[province]['counter']++;
}

WESTERN['left'].addEventListener('click', ()=>{
    sliderimages=WESTERN['sliderimages'];
    console.log(sliderimages.length);
    if(WESTERN['counter']==0)
    {
        WESTERN['counter']=sliderimages.length;
    }
    slideleft('western');
})

WESTERN['right'].addEventListener('click',()=>{
    sliderimages=WESTERN['sliderimages'];
    console.log(sliderimages.length);
    if(WESTERN['counter']==sliderimages.length-1)
    {
        WESTERN['counter']=-1;
    }
    slideright('western');
})

CENTRAL['left'].addEventListener('click',()=>{
    sliderimages=CENTRAL['sliderimages'];
    if(CENTRAL['counter']==0)
    {
        CENTRAL['counter']=sliderimages.length;
    }
    slideleft('central');
})

CENTRAL['right'].addEventListener('click',()=>{
    sliderimages=CENTRAL['sliderimages'];
    if(CENTRAL['counter']==sliderimages.length-1)
    {
        CENTRAL['counter']=-1;
    }
    slideright('central');
})

SABARAGAMUWA['left'].addEventListener('click',()=>{
    sliderimages=SABARAGAMUWA['sliderimages'];
    if(SABARAGAMUWA['counter']==0)
    {
        SABARAGAMUWA['counter']=sliderimages.length;
    }
    slideleft('sabaragamuwa');
})

SABARAGAMUWA['right'].addEventListener('click',()=>{
    sliderimages=SABARAGAMUWA['sliderimages'];
    if(SABARAGAMUWA['counter']==sliderimages.length-1)
    {
        SABARAGAMUWA['counter']=-1;
    }
    slideright('sabaragamuwa');
})

SOUTHERN['left'].addEventListener('click',()=>{
    sliderimages=SOUTHERN['sliderimages'];
    if(SOUTHERN['counter']==sliderimages.length-1)
    {
        SOUTHERN['counter']=-1;
    }
    slideright('southern');
})

SOUTHERN['right'].addEventListener('click',()=>{
    sliderimages=SOUTHERN['sliderimages'];
    if(SOUTHERN['counter']==sliderimages.length-1)
    {
        SOUTHERN['counter']=-1;
    }
    slideright('southern');
})


NORTHCENTRAL['left'].addEventListener('click',()=>{
    sliderimages=NORTHCENTRAL['sliderimages'];
    if(NORTHCENTRAL['counter']==sliderimages.length-1)
    {
        NORTHCENTRAL['counter']=-1;
    }
    slideright('northcentral');
})

NORTHCENTRAL['right'].addEventListener('click',()=>{
    sliderimages=NORTHCENTRAL['sliderimages'];;
    if(NORTHCENTRAL['counter']==sliderimages.length-1)
    {
        NORTHCENTRAL['counter']=-1;
    }
    slideright('northcentral');
})

times++;


//Function to show selected provice


let provinceselector={
    'western':document.querySelector("#westerndiv"),
    'central':document.querySelector("#centraldiv"),
    'southern':document.querySelector("#southerndiv"),
    'northern':document.querySelector("#northerndiv"),
    'eastern':document.querySelector("#easterndiv"),
    'northwestern':document.querySelector("#northwesterndiv"),
    'northcentral':document.querySelector("#northcentraldiv"),
    'uva':document.querySelector("#uvadiv"),
    'sabaragamuwa':document.querySelector("#sabaragamuwadiv")
}

let pselector=document.querySelector("#pselector");
let allprovinces=document.querySelectorAll(".provinces");
deleteall();
provinceselector['western'].style.visibility='visible';



pselector.addEventListener('change',()=>{
    deleteall();
    let value=pselector.value;
    switch(value)
    {
        case 'Western':provinceselector['western'].style.visibility='visible';break;
        case 'Central':provinceselector['central'].style.visibility='visible';break;
        case 'Eastern':provinceselector['eastern'].style.visibility='visible';break;
        case 'Northern':provinceselector['northern'].style.visibility='visible';break;
        case 'Southern':provinceselector['southern'].style.visibility='visible';break;
        case 'Sabaragamuwa':provinceselector['sabaragamuwa'].style.visibility='visible';break;
        case 'Uva':provinceselector['uva'].style.visibility='visible';break;
        case 'Northcentral':provinceselector['northcentral'].style.visibility='visible';break;
        case 'Northwestern':provinceselector['northwestern'].style.visibility='visible';break;
    }
})


function deleteall()
{
    for(let i=0;i<allprovinces.length;i++)
    {
        allprovinces[i].style.visibility='hidden';
    }   
}
