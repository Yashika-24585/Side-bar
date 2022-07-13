let sidebar = document.getElementById('sidebar');
let options = document.querySelectorAll('.options')
console.log(options);

    
sidebar.addEventListener('mouseover' , ()=>{
    for(var child of options){
        child.style.display = "flex"
        
       }
    

})

sidebar.addEventListener('mouseout', ()=>{
    for(var child of options){
        child.style.display = "none"
       }
    
})