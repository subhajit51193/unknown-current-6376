import {footer} from "../components/footer.js"
document.getElementById('footer').innerHTML=footer()

import {navbar} from "../components/navbar.js"
document.getElementById('third_navbar').innerHTML=navbar()





let career = [
    {
      Image:
        "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice.jpg",
      Title: "Career Managment",
      Heading: "Courses and Career Options After 12",
      Para: "Team Monster - September 1, 2021",
    },
    {
      Image:
        "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/career-option.jpg",
      Title: "Career Managment",
      Heading: "Career option after 12th Humanities",
      Para: "Team Monster - August 31, 2021",
    },
    {
      Image:
        "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/Courses-for-PCM-Students-After-Class-12th.jpg",
      Title: "Career Managment",
      Heading: "Courses after 12th Commerce without Maths",
      Para: "August 31, 2021",
    },
    {
      Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma.jpg",
      Title: "Career Managment",
      Heading: "Careers and Jobs After B Pharm",
      Para: "August 31, 2021",
    },
    {
      Image:
        "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice.jpg",
      Title: "Career Managment",
      Heading: "Courses and Career Options After 12",
      Para: "Team Monster - September 1, 2021",
    },
   
  ];
  
  
  let container1=document.getElementById('container1')
  function displayData(){
    career.forEach(function(el,i){
     
      let  box1 = document.createElement('div')
      box1.setAttribute('class','box1')
  
  
      let image= document.createElement('img')
      image.src=el.Image
  
      let title= document.createElement('p')
      title.innerText=el.Title
  
      let heading= document.createElement('h2')
      heading.innerText=el.Heading
  
  
      let para= document.createElement('p')
      para.innerText=el.Para
  
      box1.append(image,title,heading,para)
      container1.append(box1)
  
    })
  }
  
  displayData()