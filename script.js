var addproductsnbr=document.querySelectorAll(".bi-plus-circle");
var substractproductsnbr=document.querySelectorAll(".bi-dash-circle");
var productsnbr =document.querySelectorAll(".nbrprod");
var total=document.querySelector(".badge");

// console.log(total.textContent);


addproductsnbr.forEach(element => {
    
    element.addEventListener("click",()=>{
        console.log("addlistnerLPlus");
        element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent)+1 ;
        verify();
    })})
    


substractproductsnbr.forEach(element => {

    
    
    element.addEventListener("click",()=>{
        
        if( Number(element.previousElementSibling.textContent)===0 ){
            element.disabled= true;
        }
        else{
        element.previousElementSibling.textContent = Number(element.previousElementSibling.textContent)-1 ;

}
 verify();       
})});
function verify(){
    let N = 0;
productsnbr.forEach(element => {
    
    
    if (Number(element.textContent)>0 ) {
      
         N++ ;
    
    
}
    // else if(Number(element.textContent) > 1){
    //     console.log("Not ok");
    //     total.textContent = Number(t) ;
    // }
        

    
});
total.textContent = N;
}
// verify();



