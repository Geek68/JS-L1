// js du seconde degree
var a,b,c,x1,x2,delta,resultat;
function degree2()
{
    a=parseFloat(document.forms["2degre"]["a"].value);
    b=parseFloat(document.forms["2degre"]["b"].value);
    c=parseFloat(document.forms["2degre"]["c"].value);
    if(isNaN(a) || isNaN(b) || isNaN(c))
    {
        resultat="une valeur ne doit pas ête un alphabet";
       alert(resultat);
    }
    else
    {
        if (a==0)
        {
            var x;
            x = -c/b;
            resultat="equation de 1er degree et la solution vaut";
            document.querySelector(".rps").innerHTML=resultat;
            document.querySelector(".s1").innerHTML=x.toFixed(2);
            document.querySelector(".dlt").textContent="";
            document.querySelector(".s2").textContent="";
        }  
        else
        {
            delta=Math.pow(b,2)-(4*a*c);
            if(delta<0)
            {
                resultat="la solution est vide";
                document.querySelector(".dlt").innerHTML=delta.toFixed(2);
                document.querySelector(".rps").innerHTML=resultat;   
            }
            else if(delta==0)
            {
                x1=(-b)/(2*a);
                resultat="une solution unique, la voilà";
                document.querySelector(".rps").innerHTML=resultat;
                document.querySelector(".s1").innerHTML=x1.toFixed(2);
                document.querySelector(".dlt").innerHTML=delta.toFixed(2);
            }
            else
            {
                x1=(-b-Math.sqrt(delta))/(2*a);
                x2=(-b+Math.sqrt(delta))/(2*a);
                resultat="deux solution, les voilà";
                document.querySelector(".rps").innerHTML=resultat;
                document.querySelector(".s1").innerHTML=x1.toFixed(2);
                document.querySelector(".s2").innerHTML=x2.toFixed(2);
                document.querySelector(".dlt").innerHTML=delta;
            }
        }
    }
}

var renit= document.querySelector(".reset1")
renit.addEventListener("click",retour)
function retour()
{
    document.forms["2degre"]["a"].value="";
    document.forms["2degre"]["b"].value="";
    document.forms["2degre"]["c"].value="";
    document.querySelector(".s1").textContent="";
    document.querySelector(".s2").textContent="";
    document.querySelector(".dlt").textContent="";
    resultat="Entrer des nouveaux valeurs si vous voulez";
    document.querySelector(".rps").innerHTML=resultat;
}
// js du seconde degree

//js de cramer
function determinant(a11,a12,a13,a21,a22,a23,a31,a32,a33) //calcul de determinant de principal
{
    var d1,d2,d3,det;
    d1=a11*((a22*a33)-(a32*a23));
    d2=a12*((a21*a33)-(a31*a23));
    d3=a13*((a21*a32)-(a31*a22));
    det=d1-d2+d3;
    return(det);
}
function detx(b1,a12,a13,b2,a22,a23,b3,a32,a33) //calcul de determinant de x1
{
    var x1,x2,x3,determx;
    x1=b1*((a22*a33)-(a32*a23));
    x2=a12*((b2*a33)-(b3*a23));
    x3=a13*((b2*a32)-(b3*a22));
    determx=x1-x2+x3;
    return(determx);
}   
function dety(a11,b1,a13,a21,b2,a23,a31,b3,a33) //calcul de determinant de x2
{
    var y1,y2,y3,determy;
    y1=a11*((b2*a33)-(b3*a23));
    y2=b1*((a21*a33)-(a31*a23));
    y3=a13*((a21*b3)-(a31*b2));
    determy=y1-y2+y3;
    return(determy);
}  
function detz(a11,a12,b1,a21,a22,b2,a31,a32,b3) //calcul de determinant de x3
{
    var z1,z2,z3,determz;
    z1=a11*((a22*b3)-(a32*b2));
    z2=a12*((a21*b3)-(a31*b2));
    z3=b1*((a21*a32)-(a31*a22));
    determz=z1-z2+z3;
    return(determz);
} 
var alt
function cramer()
{
    a11=parseFloat(document.forms["cramer"]["a11"].value);
    a12=parseFloat(document.forms["cramer"]["a12"].value);
    a13=parseFloat(document.forms["cramer"]["a13"].value);
    a21=parseFloat(document.forms["cramer"]["a21"].value);
    a22=parseFloat(document.forms["cramer"]["a22"].value);
    a23=parseFloat(document.forms["cramer"]["a23"].value);  
    a31=parseFloat(document.forms["cramer"]["a31"].value);
    a32=parseFloat(document.forms["cramer"]["a32"].value);
    a33=parseFloat(document.forms["cramer"]["a33"].value);
    b1=parseFloat(document.forms["cramer"]["b1"].value);
    b2=parseFloat(document.forms["cramer"]["b2"].value);
    b3=parseFloat(document.forms["cramer"]["b3"].value);
    var deter=determinant(a11,a12,a13,a21,a22,a23,a31,a32,a33); // determinant principal
    var deltax=detx(b1,a12,a13,b2,a22,a23,b3,a32,a33); //determinant de x
    var deltay=dety(a11,b1,a13,a21,b2,a23,a31,b3,a33); //determinant de y
    var deltaz=detz(a11,a12,b1,a21,a22,b2,a31,a32,b3); // determinant de z
    if(isNaN(a11)||isNaN(a12)||isNaN(a13)||isNaN(a21)||isNaN(a22)||isNaN(a23)||isNaN(a31)||isNaN(a33)||isNaN(a32))
    {
        alt="n  des valeur ne doit pas être un caractère";
        alert(alt)
    }
   else
   {
    if(deter==0)
    {   document.querySelector(".det").innerHTML=deter;
       alt="pas de solution \n ou \n infinete de solution"
       document.querySelector(".valdet").innerHTML =alt
       document.querySelector(".detx").textContent="";
       document.querySelector(".dety").textContent="";
       document.querySelector(".detz").textContent="";
 
       document.querySelector(".X1").textContent="";
       document.querySelector(".X2").textContent="";
       document.querySelector(".X3").textContent="";
    }
    else
    {    document.querySelector(".valdet").textContent ="";
        if (isNaN(b1)||isNaN(b2)||isNaN(b3))
        {
            alert("completer un les valeurs de case b p\n pour avoir une solution");
            document.querySelector(".det").innerHTML=deter.toFixed(2);
        }
        else
        {
            var x1,x2,x3;
          x1= deltax/deter;
          x2= deltay/deter;
          x3= deltaz/deter;
          
          document.querySelector(".det").innerHTML=deter.toFixed(2);
          document.querySelector(".detx").innerHTML=deltax.toFixed(2);
          document.querySelector(".dety").innerHTML=deltay.toFixed(2);
          document.querySelector(".detz").innerHTML=deltaz.toFixed(2);
    
          document.querySelector(".X1").innerHTML=x1.toFixed(2);
          document.querySelector(".X2").innerHTML=x2.toFixed(2);
          document.querySelector(".X3").innerHTML=x3.toFixed(2);
        }
    }
   }
}
var retour=document.querySelector(".reset2");
retour.addEventListener('click', touche)
function touche()
{
    document.forms["cramer"]["a11"].value="";
    document.forms["cramer"]["a12"].value="";
    document.forms["cramer"]["a13"].value="";
    document.forms["cramer"]["a21"].value="";
    document.forms["cramer"]["a22"].value="";
    document.forms["cramer"]["a23"].value="";  
    document.forms["cramer"]["a31"].value="";
    document.forms["cramer"]["a32"].value="";
    document.forms["cramer"]["a33"].value="";
    document.forms["cramer"]["b1"].value="";
    document.forms["cramer"]["b2"].value="";
    document.forms["cramer"]["b3"].value="";

    document.querySelector(".valdet").textContent="";

    document.querySelector(".det").textContent="";
    document.querySelector(".detx").textContent="";
    document.querySelector(".dety").textContent="";
    document.querySelector(".detz").textContent=""

    document.querySelector(".X1").textContent="";
    document.querySelector(".X2").textContent="";
    document.querySelector(".X3").textContent="";
    if(isNaN(a11)||isNaN(a12)||isNaN(a13)||isNaN(a21)||isNaN(a22)||isNaN(a23)||isNaN(a31)||isNaN(a33)||isNaN(a32))
    {
        document.classList.remove(alert("un des valeur doit pas un caractère"));
    }
  
}


var f2nd,fcram,fcirc,fsli,facc;
f2nd = document.getElementById("degree2");
fcram = document.getElementById("CRAMER");
fcirc=document.getElementById("electrique")
fsli=document.getElementById("slide")
facc=document.getElementById("acceuil")

// js de changement de page degree2
var second=document.getElementById("second");
second.addEventListener("click",FCT1)
function FCT1()
{
    facc.style.zIndex="0";
    f2nd.style.zIndex ="1";
    fcram.style.zIndex="0";
    fcirc.style.zIndex="0";
    fsli.style.zIndex="0";
}

// js de chagement de page en methode de cramer
var cram = document.getElementById("cramer");
cram.addEventListener("click", FCT2)
function FCT2()
{
    facc.style.zIndex="0";
    f2nd.style.zIndex ="0";
    fcram.style.zIndex="1";
    fcirc.style.zIndex="0";
    fsli.style.zIndex="0";
}

// js de changement de page en circuit
var circ=document.getElementById("circuit");
circ.addEventListener("click", FCT3)
function FCT3()
{
    facc.style.zIndex="0";
    f2nd.style.zIndex ="0";
    fcram.style.zIndex="0";
    fcirc.style.zIndex="1";
    fsli.style.zIndex="0";
}
// js de changement de page en panneau publicitaire
var pub=document.getElementById("panneau");
pub.addEventListener("click",FCT4)
function FCT4()
{
    facc.style.zIndex="0";
    f2nd.style.zIndex ="0";
    fcram.style.zIndex="0";
    fcirc.style.zIndex="";
    fsli.style.zIndex="1";
}
var acc=document.getElementById("Acc");
acc.addEventListener("click",FCT5)
function FCT5()
{
    facc.style.zIndex="1";
    f2nd.style.zIndex ="0";
    fcram.style.zIndex="0";
    fcirc.style.zIndex="";
    fsli.style.zIndex="0";
}

// js de dessiner le schema de circuit en canvas
var schema = document.getElementById('schema');
var contexte=schema.getContext('2d');
// dessin de R1
contexte.lineWidth = "4";
contexte.strokeStyle= "yellow";
contexte.strokeRect(400,30,50,20);
//dessin de R4
contexte.lineWidth = "4";
contexte.strokeStyle="yellow";
contexte.strokeRect(400,270,50,20);
// dessin de R3
contexte.lineWidth = "4";
contexte.strokeStyle="yellow";
contexte.strokeRect(50,150,20,50);
// dessin de R2
contexte.lineWidth = "4";
contexte.strokeStyle="yellow";
contexte.strokeRect(200,150,20,50);    
// dessin des lignes 
contexte.strokeStyle="yellow";
contexte.moveTo(400,40);
contexte.lineTo(60,40);
contexte.lineTo(60,150);
contexte.stroke();
 
contexte.moveTo(60,200);
contexte.lineTo(60,280);
contexte.lineTo(400,280);
contexte.stroke();

contexte.moveTo(210,40);
contexte.lineTo(210,150);
contexte.stroke();

contexte.moveTo(210,200);
contexte.lineTo(210,280);
contexte.stroke();

contexte.moveTo(450,40);
contexte.lineTo(550,40);
contexte.stroke();

contexte.moveTo(450,280);
contexte.lineTo(550,280);
contexte.stroke();

// js dessin de sens de maille 
contexte.beginPath();
contexte.lineWidth = "3";
contexte.strokeStyle="yellow";
contexte.arc(90,250,8,0,(3/2)*Math.PI);
contexte.stroke();

contexte.moveTo(90,250);
contexte.lineTo(100,250);
contexte.lineTo(100,260);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth="3";
contexte.strokeStyle="yellow";
contexte.arc(240,250,8,0,(3/2)*Math.PI);
contexte.stroke();

contexte.moveTo(240,250);
contexte.lineTo(250,250); 
contexte.lineTo(250,260);
contexte.stroke();

// dessin de ssens de courant et de tension;
contexte.moveTo(550,80);
contexte.lineTo(550,240);
contexte.stroke();
                            // dessin de U
contexte.moveTo(530,110);
contexte.lineTo(550,80);
contexte.lineTo(570,110);
contexte.stroke();

contexte.moveTo(300,30);
contexte.lineTo(280,40);    // dessin e I1
contexte.lineTo(300,50);
contexte.stroke();

contexte.moveTo(200,80);
contexte.lineTo(210,100); //dessin de I2
contexte.lineTo(220,80);
contexte.stroke();

contexte.moveTo(50,80);
contexte.lineTo(60,100); //dessin de I3
contexte.lineTo(70,80);
contexte.stroke();

contexte.moveTo(160,80);
contexte.lineTo(160,240);
contexte.stroke();
                            // dessin de U2
contexte.moveTo(150,90);
contexte.lineTo(160,80);
contexte.lineTo(170,90);
contexte.stroke();

contexte.moveTo(390,70);
contexte.lineTo(460,70);
contexte.stroke();
                            // dessin de U1
contexte.moveTo(440,60);
contexte.lineTo(460,70);
contexte.lineTo(440,80);
contexte.stroke();

contexte.moveTo(390,250);
contexte.lineTo(460,250);
contexte.stroke();
                            // dessin de U3
contexte.moveTo(410,240);
contexte.lineTo(390,250);
contexte.lineTo(410,260);
contexte.stroke();
// js des legendes
 contexte.font=" bold 25px Arial";
 contexte.fillStyle="red";
 contexte.fillText("U",560,160);

contexte.font=" bold 25px Arial";
 contexte.fillStyle="red";
 contexte.fillText("U1",410,100);

 contexte.font=" bold 25px Arial";
 contexte.fillStyle="red";
 contexte.fillText("U2",120,160);

 contexte.font=" bold 25px Arial";
 contexte.fillStyle="red";
 contexte.fillText("U3",420,230);

 contexte.font=" bold 25px Arial";
 contexte.fillStyle="rgba(255,255,21,0.5)";
 contexte.fillText("I1",300,70);

contexte.font=" bold 25px Arial";
 contexte.fillStyle="rgba(255,255,21,0.5)";
 contexte.fillText("I2",225,90);
 
 contexte.font=" bold 25px Arial";
 contexte.fillStyle="rgba(255,255,21,0.5)";
 contexte.fillText("I3",25,90);

 contexte.font=" bold 15px Arial";
 contexte.fillStyle="yellow";
 contexte.fillText("maille 1",110,270);


 contexte.font=" bold 15px Arial";
 contexte.fillStyle="yellow";
 contexte.fillText(" maille 2",250,270);
 
 contexte.font=" bold 25px Arial";
 contexte.fillStyle="aqua";
 contexte.fillText("R1",410,20) ;

 contexte.font=" bold 25px Arial";
 contexte.fillStyle="aqua";
 contexte.fillText("R4",410,320);

 contexte.font=" bold 25px Arial";
 contexte.fillStyle="aqua";
 contexte.fillText("R3",15,185);

 contexte.font=" bold 25px Arial";
 contexte.fillStyle="aqua";
 contexte.fillText("R2",225,185);
// js calcul des intensites
function detprinc(R1,R2,R3,R4)
{
    var DETPRINC;
    DETPRINC= -(R2*R3)-R3*(R4+R1)-R2*(R1+R4);
    return (DETPRINC);
}

function I1(U,R3,R2)
{
    var DETI1;
    DETI1= -U*(R3+R2);
    return (DETI1);
}

function I2(U,R3)
{
    var DETI2;
    DETI2= -U*R3;
    return(DETI2);
}

function I3(U,R2)
{
    var DETI3;
    DETI3= -U*R2;
    return (DETI3);
}
 function U1(I1,R1)
 {
        var ts1;
        ts1= R1*I1;
        return (ts1);
}
function U3(I1,R4)
 {
        var ts3;
        ts3= R4*I1;
        return (ts3);
}
function U2(I2,R2)
 {
        var ts2;
        ts2= R2*I2;
        return (ts2);
}

function circuit()
{

    var R1,R2,R3,R4,U,princ,DETI1,DETI2,DETI3;
    U=parseFloat(document.forms["circuit"]["U"].value);
    R1=parseFloat(document.forms["circuit"]["R1"].value);
    R2=parseFloat(document.forms["circuit"]["R2"].value);
    R3=parseFloat(document.forms["circuit"]["R3"].value);
    R4=parseFloat(document.forms["circuit"]["R4"].value);
    princ=detprinc(R1,R2,R3,R4);
    DETI1=I1(U,R3,R2);
    DETI2=I2(U,R3);
    DETI3=I3(U,R2);
    if (isNaN(U)||isNaN(R1)||isNaN(R2)||isNaN(R3)||isNaN(R4))
    {
        alert("un valeur doit être un nombre");
    }
    else
    {
        var i1,i2,i3;
        if(princ==0)
        {
            alert("pas d'intensite");
        }
        else
        {
            i1=DETI1/princ;
            i2=DETI2/princ;
            i3=DETI3/princ;
    
            document.forms["intensite"]["I1"].value=i1.toFixed(2);
            document.forms["intensite"]["I2"].value=i2.toFixed(2);
            document.forms["intensite"]["I3"].value=i3.toFixed(2);
    

            var u1,u2,u3;
            u1=U1(i1,R1);
            u2=U2(i2,R2);
            u3=U3(i1,R4);
        
            document.forms["tension"]["U1"].value=u1.toFixed(2);
            document.forms["tension"]["U2"].value=u2.toFixed(2);
            document.forms["tension"]["U3"].value=u3.toFixed(2);
            
        }
    }
}
var origine=document.querySelector(".reset3");
origine.addEventListener("click",depart)
 function depart()
 {
    document.forms["circuit"]["U"].value="";
    document.forms["circuit"]["R1"].value="";
    document.forms["circuit"]["R2"].value="";
    document.forms["circuit"]["R3"].value="";
    document.forms["circuit"]["R4"].value="";

    document.forms["intensite"]["I1"].value="";
    document.forms["intensite"]["I2"].value="";
    document.forms["intensite"]["I3"].value="";

    document.forms["tension"]["U1"].value="";
    document.forms["tension"]["U2"].value="";
    document.forms["tension"]["U3"].value="";

 }
// js de slide
var img1=document.querySelector(".image1");
var img2=document.querySelector(".img2");
var img3=document.querySelector(".img3");
var img4=document.querySelector(".img4");
var img5=document.querySelector(".img5");
const image=[img1, img2, img3, img4, img5];

const nbslide= image.length;
const suivant= document.querySelector(".button-droite");
const precedent= document.querySelector(".button-gauche");
 var count=0;

 suivant.addEventListener("click",slide1)

 function slide1()
 {
    image[count].classList.remove('image1');
    suivant.style.color="rgba(255,255,21,0.5)";
    
    if(count<nbslide-1)
    {
        count++;
    }
    else
    {
        count =0;
    }
     image[count].classList.add('image1')

 }

 precedent.addEventListener("click",slide2)
 function slide2()
 {
    precedent.style.color="rgba(255,255,21,0.5)";
    image[count].classList.remove('image1');
    if(count > 0)
    {
        count--;
    }
    else
    {
        count = nbslide-1;
    }
    image[count].classList.add('image1');
 }

document.addEventListener("keydown",keypress)
function keypress(c)
{
    if (c.keyCode === 37)
    {
        slide2();
    }
    else if(c.keyCode === 39)
    {
        slide1();
    }
}
var time=2000
function slideauto()
{
    slide1();
    setTimeout("slideauto()",time);
}
Window.onload=slideauto();