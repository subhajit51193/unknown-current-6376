import {collectData} from "./job_data_page.js";

var coll = document.getElementsByClassName("open_close");
var i;
let icon = document.getElementsByClassName("icon_fa")

// let cl = document.getElementsByClassName("open_close")
let flag;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    
      content.style.display = "none";
      flag = 1
       
    } else {
      content.style.display = "block";
     flag= -1
    }
    for(let i=0;i<icon.length;i++){
        if(flag==1){
            
            icon[i].innerHTML='<i class="fa fa-plus"></i>'  
        }else{
            icon[i].innerHTML='<i class="fa fa-minus"></i>'  
        }
    }
  });
}




appendActualJobCard()
function appendActualJobCard(){
    collectData.forEach((el)=>{
        
        let job_main_div = document.createElement('div') 
        
        let jobtitle = document.createElement('h3') 
        jobtitle.innerText=el.jobrequirment
        let com_name = document.createElement('p') 
        com_name = el.companyName
        let city_name = document.createElement('p') 
        city_name.innerText = el.city
        let exper = document.createElement('p') 
        exper.innerText=el.experience
        let specified = document.createElement('p') 
        specified.innerText=el.specified
        let des = document.createElement('p')
        des.innerText=el.jobdescription 
        let skills = document.createElement('p')
        skills.innerText=el.skills 
        job_main_div.append(jobtitle, com_name, city_name, exper, specified, des, skills)
        document.querySelector('#display_srch_res').append(job_main_div)
    })
}
   
// console.log(collectData)


