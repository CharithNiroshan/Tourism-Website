let counter=0;


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