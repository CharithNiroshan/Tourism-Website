let counter=0;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneno =  /^\d{10}$/;


//Function to Translate Navigation Bar
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



//Form Javascript
class User{
}


let form={
    'name':document.querySelector("#name"),
    'nationality':document.querySelector("#address"),
    'members':document.querySelector("#group"),
    'duration':document.querySelector("#duration"),
    'budget':document.querySelector("#budget"),
    'mobile':document.querySelector("#mobile"),
    'work':document.querySelector("#home"),
    'email':document.querySelector("#email"),
    'interests':{
        'wild':document.querySelector("#wild"),
        'scenic':document.querySelector("#scenic"),
        'beaches':document.querySelector("#beaches"),
        'heritages':document.querySelector("#heritage"),
        'food':document.querySelector("#food"),
        'sports':document.querySelector("#sports"),
    },
    'provinces':{
        'western':document.querySelector("#western"),
        'southern':document.querySelector("#southern"),
        'central':document.querySelector("#central"),
        'eastern':document.querySelector("#eastern"),
        'northern':document.querySelector("#northern"),
        'uva':document.querySelector("#uva"),
        'sabaragamuwa':document.querySelector("#sabaragamuwa"),
        'northcentral':document.querySelector("#northcentral"),
        'northwestern':document.querySelector("#northwestern"),
    },
    'hoteltype':document.querySelector("#hotelselector"),
    'wifi':document.querySelector("#wifi"),
    'rooms':document.querySelector('#ac'),
    'transport':document.querySelector("#travel"),
}


//User object array
let Users=[];

let submit=document.querySelector("#submit");


//Function to Get Form Validity
function validate()
{
    if(form['name'].value.trim()=="" || form['nationality'].value=="" || form['members'].value=="" || form['duration'].value=="" || form['budget'].value=="" || form['mobile'].value=="" || form['work'].value=="" || form['email'].value=="" || form['hoteltype'].value=="" || form['transport'].value=="" || form['rooms'].value=="")
    {
        return false;
    }
    if(form['members'].value>200)
    {
        return false;
    }
    else if(form['duration'].value< 7 || form['duration'].value>100)
    {
        return false;
    }
    else if(form['budget'].value< 10 || form['budget'].value>10000)
    {
        return false;
    }
    else if(!form['mobile'].value.match(phoneno))
    {
        return false;
    }
    else if(!form['work'].value.match(phoneno))
    {
        return false;
    }
    if(!form['email'].value.match(mailformat))
    {
        return false;
    }
    else
    {
        return true;
    }   
}


submit.addEventListener('click',()=>{
    if(validate())
    {
        Users.push(getvalues());
        alert("Thank You for your response.Your Details has been succesfully saved.We will let you know about your tour plan through e-mail.");
    }
    iterate();
})

function iterate()
{
    for(let i=0;i<Users.length;i++)
    {
        console.log(Users[i]);
    }
}


//Function to Get input from the form
function getvalues()
{
    let newUser=new User();
    newUser.name=form['name'].value;
    newUser.nationality=form['nationality'].value;
    newUser.members=form['members'].value;
    newUser.duration=form['duration'].value;
    newUser.budget=form['budget'].value;
    newUser.mobile=form['mobile'].value;
    newUser.work=form['work'].value;
    newUser.email=form['email'].value;
    newUser.wild=form['interests']['wild'].value;
    newUser.scenic=form['interests']['scenic'].value;
    newUser.beaches=form['interests']['beaches'].value;
    newUser.heritages=form['interests']['heritages'].value;
    newUser.food=form['interests']['food'].value;
    newUser.sports=form['interests']['sports'].value;
    newUser.western=form['provinces']['western'].value;
    newUser.southern=form['provinces']['southern'].value;
    newUser.central=form['provinces']['central'].value;
    newUser.northern=form['provinces']['northern'].value;
    newUser.eastern=form['provinces']['eastern'].value;
    newUser.uva=form['provinces']['uva'].value;
    newUser.sabaragamuwa=form['provinces']['sabaragamuwa'].value;
    newUser.northcentral=form['provinces']['northcentral'].value;
    newUser.northwestern=form['provinces']['northwestern'].value;
    newUser.hoteltype=form['hoteltype'].value;
    newUser.wifi=form['wifi'].value;
    newUser.rooms=form['rooms'].value;
    newUser.transport=form['transport'].value;
    return newUser;
}