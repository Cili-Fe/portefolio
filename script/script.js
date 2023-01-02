const skillContent = document.getElementsByClassName('skills-content'), 
    skillHeader = document.querySelectorAll('.skills-header')
function toggleSkill(){
    let itemClass = this.parentNode.className
    for(i = 0; i<skillContent.length;i++){
        skillContent[i].className = 'skills-content skill_close'
    }    
    if(itemClass === 'skills-content skill_close'){
        this.parentNode.className = 'skills-content skill_open'
    }
    
}
skillHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkill)
})


// nav menu responsive
function myFunction() {
    var x = document.getElementById("nav_menu");
    if (x.className === "navMenu") {
      x.className += " responsive";
    } else {
      x.className = "navMenu";
    }
  }
