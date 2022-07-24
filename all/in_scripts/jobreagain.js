import {collectData, job_near_banglore, a_tred_banglore} from "./job_data_page.js";
// import navbar from "./component/navbar.js";
//  document.querySelector('.main_container').innerHTML=navbar();
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


//appending the data

appendActualJobCard(collectData)
function appendActualJobCard(database){
  document.querySelector('#display_srch_res').innerHTML= null
  database.forEach((el)=>{
        
        let job_main_div = document.createElement('div') 
        
        let jobtitle = document.createElement('h4') 
        jobtitle.innerText=el.jobrequirment
        let com_name = document.createElement("p") 
        com_name.innerText = el.companyName
        let city_name = document.createElement('p') 
        city_name.innerHTML = `<i class="fa fa-map-marker"></i>${el.city}`
        city_name.setAttribute('class', "basic_info")
        
        let exper = document.createElement('p') 
        exper.innerHTML=`<i class="fa fa-suitcase"></i>${el.experience}`
        exper.setAttribute('class', "basic_info")
        let specified = document.createElement('p') 
        specified.innerHTML=`<img class ="i" src="in_scripts/icon_coin.png" alt="coin_icon"></i>${el.specified}`
        specified.setAttribute('class', "basic_info")
        let basic_inf = document.createElement('div')
        basic_inf.append(city_name, exper, specified)
        let des = document.createElement('p')
        des.innerText=el.jobdescription 
        des.addEventListener('click', ()=>{
          gettingAllDetails(el)
        })
        // findTheMatch(el)
        let skills = document.createElement('p')
        skills.innerHTML=`<span class="skill">Skills:</span> ${el.skills}`
        let access_share = document.createElement('div')
        access_share.setAttribute("id", 'access_share')
        let post_update = document.createElement('p')
        post_update.setAttribute("class", 'post_update')
        post_update.innerText="Posted 1:30 Hours ago |"
        let star = document.createElement('i')
        star.setAttribute("class", "fa fa-star")
        
        let div_img = document.createElement('div') 
        div_img.setAttribute('class', 'parent_social_div')
        let link_icon = document.createElement('img')
        link_icon.src="in_scripts/branch_img.svg"
        link_icon.setAttribute("class", "social_media")
        let div3 = document.createElement('div')
      
        let faceboook = document.createElement('i')
        faceboook.setAttribute('class', 'fa fa-facebook')
        let twitter = document.createElement('i')
        twitter.setAttribute('class', 'fa fa-twitter')
        let linked_in = document.createElement('i')
        linked_in.setAttribute('class', 'fa fa-linkedin')
        let gmail = document.createElement('i')
        gmail.setAttribute('class', 'fa fa-envelope-square')
        div3.append(faceboook, twitter, linked_in, gmail)
        div3.setAttribute('class', "showHover")
        div_img.append(link_icon, div3)
        
        let btn = document.createElement('button')
        btn.innerText="Apply"
        btn.setAttribute("class", 'apply_for_job') 
        access_share.append(post_update, star, div_img, btn)  
        job_main_div.append(jobtitle, com_name, basic_inf, des, skills, access_share)
        
        document.querySelector('#display_srch_res').append(job_main_div)
    })
}
// let xyz = socialMedia_icon()
// console.log(xyz)
function socialMedia_icon(){

return `let div3 = document.createElement('div')
  let faceboook = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-facebook')
  let twitter = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-twitter')
  let linked_in = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-linked_in')
  let gmail = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-mail')
  div3.append(faceboook, twitter, linked_in, gmail)`


}


// filter   
// function  findTheMatch(el){
//   for(let i=0;i<el.jobdescription.length;i++){
//     let char = el.jobdescription
//     // if(char[i][0])
//     // console.log(char[i][0])
    
//   }


//   if(el.jobdescription=="Developer"){
//       console.log("hello")
//   }else{
//     console.log("no");
//   }
// }
// console.log("yes")
let input = document.querySelectorAll('input') 

for(let i=0;i<input.length;i++){
  // console.log(input[i])
  input[i].addEventListener('click', function(){
    if(input[i].checked==true){
      let ct = collectData.filter((el)=>{
        if(el.city==input[i].value || el.experience==input[i].value){
          return el
        }
         
      })
      appendActualJobCard(ct)
      console.log(ct)
      
    }
  })
}
//location based search
locationBasedSearch()
function locationBasedSearch(){
let loc_input = document.querySelector('#location_srch') 
loc_input.addEventListener('input', function(){
 
    let location_s = collectData.filter((el)=>{
      if(el.city==loc_input.value){
        return el
      }
       
    })
    appendActualJobCard(location_s)
    console.log(location_s)
    
  
})
loc_input.value=null
}
// experience based search
experienceBasedSearch()
function experienceBasedSearch(){
  let exp_search = document.querySelector('#exp_srch')
  exp_search.addEventListener('input', ()=>{
  let exp_len = collectData.filter((el)=>{
      
        if(Number(el.experience[0])){
          let num = +el.experience[0]
          let exp_y = +exp_search.value
          if(num==exp_y) return el
          // console.log(num)  
          
          // console.log(exp_search.value)  
        }
     })
      console.log(exp_len)
      appendActualJobCard(exp_len)
  })
  
}

let searchJob = ()=>{
  // console.log( search_job.value);
  let r_search = collectData.filter((el)=>{
    if(el.jobrequirment==search_job.value){
      return el
    }
     
  })
    console.log(r_search);
}

let search_job = document.querySelector('#job_scrh')
 search_job.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
      
      searchJob()
    }
 })
//  function gothroughStrings(){
//   let count = 0
//   let bag = ""
//   let putinpair = {}
//   for(let i=0;i<collectData.length;i++){
//     let char = collectData[i]

//      for(let j=0;j<char.jobrequirment.length;j++){
//       // console.log(char.jobdescription[j]); 
//       let ch = char.jobrequirment[j]
//       if(ch[i]){
//          if(ch[i]!==" " || ch[i]!==","){
           
//           bag+=ch[i]
//          }else{
           
//          }
//       }  
//      }
    
//     // if(char[i]){
//     //   console.log(char[i]);
//     // }
//   }
//   bag = bag.split(" ")
//   console.log(bag)
// }

// gothroughStrings()

const element = document.querySelector('#upload_child_div')
element.addEventListener('click', ()=>{
})

let arr = []
element.addEventListener('dragover', (e)=>{
   e.preventDefault()
})
element.addEventListener('drop', e =>{
 e.preventDefault()
 
 let preview = e.dataTransfer.files[0]
 if(preview.type.startsWith("image/")){ 
  const reader = new FileReader()
  arr.push(reader)
  localStorage.setItem("uploaded_documents",JSON.stringify(arr))
  reader.readAsDataURL(preview)
  reader.onload = () =>{
   let images = document.createElement('img')
   images.src = URL.createObjectURL(preview) 
   
   images.setAttribute('class', 'uploadPreview')
    element.style.backgroundImage = `url('${reader[0].result}')`
  //  let empty_this_box = document.querySelector('#upload_child_div')
  //  empty_this_box.innerHTML=null
    // element.append(images)
  }

 }
})

let upload_div = document.querySelectorAll('#target_upload_page')
// upload_div.style.display="none"
for(let i=0;i<upload_div.length;i++){

  upload_div[i].addEventListener('click', displayDocUploadPopUp)
}

function displayDocUploadPopUp(e){
  e.preventDefault()
  let up_div = document.querySelector('#upload_resume_main')
  up_div.style.display="block"
}

var modal = document.getElementById("upload_resume_main"); 
modal.addEventListener('click', ()=>{
    
  modal.style.display = "none";
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}


// let getdocsfromsubmit = ()=>{

// }
// let docs_upload_btn = document.getElementById('photo_submit')
// docs_upload_btn.addEventListener('click', ()=>{
//    console.log(docs_upload_btn.value)
// })



// document.querySelector("#input_file").addEventListener("change", function(e){
// 	var canvasElement = document.querySelector("canvas")
// 	var file = e.target.files[0]
// 	if(file.type != "application/pdf"){
// 		console.error(file.name, "is not a pdf file.")
// 		return
// 	}
	
// 	var fileReader = new FileReader();  

// 	fileReader.onload = function() {
// 		var typedarray = new Uint8Array(this.result);

// 		PDFJS.getDocument(typedarray).then(function(pdf) {
// 			// you can now use *pdf* here
// 			console.log("the pdf has ",pdf.numPages, "page(s).")
// 			pdf.getPage(pdf.numPages).then(function(page) {
// 				// you can now use *page* here
// 				var viewport = page.getViewport(2.0);
// 				var canvas = document.querySelector("canvas")
// 				canvas.height = viewport.height;
// 				canvas.width = viewport.width;


// 				page.render({
// 					canvasContext: canvas.getContext('2d'),
// 					viewport: viewport
// 				});
// 			});

// 		});
// 	};

// 	fileReader.readAsArrayBuffer(file);
// })

// data appending for couple of divs
let append_latest = document.querySelector('#append_trending_both')
let locationBanglore = document.querySelector('#near_banglore1')
let value_both;
locationBanglore.addEventListener('click', ()=>{
  console.log("hello");
  
  appe_job(append_latest, job_near_banglore, value_both)
})

appe_job(append_latest, a_tred_banglore)
let latest_j = document.querySelector('#trend_banglore')
latest_j.addEventListener('click', ()=>{
  console.log("hello");
  
  appe_job(append_latest, a_tred_banglore, value_both)
})

 
function appe_job(appn, la_job_arr, value_both){
  appn.innerHTML=null
  let ul = document.createElement('ul')
  la_job_arr.forEach((el)=>{
    let li = document.createElement('li')
    li.append(el)
    let p1 = document.createElement('p')
    p1.innerText=value_both
    ul.append(li)
  })
  appn.append(ul)
 }
 let render_pages = document.querySelector('#page_select')
 render_pages.addEventListener('change', sortPages)
 function sortPages(e){
  let newarr = []
   let page = +e.target.value
   console.log(page);
   if(page>collectData.length){
    return
   }else{
    for(let i=0;i<page;i++){
      console.log(collectData[i]);
     newarr.push(collectData[i])
    }
  }
  appendActualJobCard(newarr)   
    console.log(newarr)
  }
 /////// 
 let dataForDetails =[]
 function gettingAllDetails(el){
  // console.log(el)
    
  localStorage.setItem("job_details", JSON.stringify(el))
  // dataForDetails.push(el)
  }


  