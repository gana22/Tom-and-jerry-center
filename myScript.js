
function HideAndShow( divID1 , divID2){
    document.getElementById(divID1).style.display='none';

    document.getElementById(divID2).style.display='block';
}
function registertion(){
    window .alert('registertion is done 👏 👏');
}
function Appointment(){
  window .alert(' your Appointment is taken 👏 👏');
}
function shop(){
    window .alert(' the product is add to the chart👏 👏');
}
function ShowAll( divID1 , divID2){
    document.getElementById(divID1).style.display='block';

    document.getElementById(divID2).style.display='block';
}

function divhover(myID){
    document.getElementById(myID).onmouseover=function(){
        document.getElementById(myID).style.boxShadow=" 2px 2px 4px gray"; 
    }


}
function btnhover(myID){
   
    document.getElementById(myID).onmouseover=function(){
         document.getElementById(myID).style.opacity="0.7" ;
     } 

      
}
function btnoffhover(myID){
    document.getElementById(myID).onmouseout=function(){
        document.getElementById(myID).style.opacity="1" ;
    }
}
function dochover(myID){
   
    document.getElementById(myID).onmouseover=function(){
         document.getElementById(myID).style.color="blueviolet" ;
         document.getElementById(myID).style.textShadow="2px 2px 4px gray" ;
        } 

      
}
function docoffhover(myID){
    document.getElementById(myID).onmouseout=function(){
        document.getElementById(myID).style.color="black" ;
    }
}
function home(myID) {
    document.getElementById(myID).onmouseover=function(){
        document.getElementById(myID).style.fontSize="red" ;
        document.getElementById(myID).style.textShadow="2px 2px 4px gray" ;
    }
    document.getElementById(myID).onmouseout=function(){
        document.getElementById(myID).style.fontSize="rgb(22, 69, 119)" ;
        document.getElementById(myID).style.textShadow="0px 0px 0px gray" ;
    }

    
}




