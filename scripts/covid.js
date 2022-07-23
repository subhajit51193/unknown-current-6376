import {navbar1} from "../components/navbar.js"
document.getElementById('Ist_navbar').innerHTML=navbar1()

import {navbar2} from "../components/navbar.js"
document.getElementById('sec_navbar').innerHTML=navbar2()


import {navbar3} from "../components/navbar.js"
document.getElementById('third_navbar').innerHTML=navbar3()

import {footer} from "../components/footer.js"
document.getElementById('footer').innerHTML=footer()


import {footer1} from "../components/footer.js"
document.getElementById('small_footer').innerHTML=footer1()



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



  
// small covid data

let covid2 = [
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2020/09/Companies-that-are-Hiring-Amid-Coronavirus.jpg",
    Title: "Career Managment",
    Heading: "Companies that are Hiring Amid Coronavirus Outbreak",
    Para: "Team Monster - September 1, 2021",
  },
  {
    Image:"https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1589286331.jpg",
    Title: "Career Managment",
    Heading: "How to quit your job without burning bridges",
    Para: "Team Monster - August 31, 2021",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1595418108.jpg",
    Title: "Career Managment",
    Heading: "Coronavirus Pandemic is Changing the Way Recruiters Hire",
    Para: "August 31, 2021",
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma.jpg",
    Title: "Career Managment",
    Heading: "Top 10 In-demand Jobs in Coronavirus Pandemic",
    Para: "Team Monster - July 17, 2020",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1595418108.jpg",
    Title: "Career Managment",
    Heading: "Coronavirus Pandemic is Changing the Way Recruiters Hire",
    Para: "August 31, 2021",
  },
];



let data_append_3 = document.getElementById('data_append_3')
function data(){


  covid2.forEach(function(el,i){

    let box_1 = document.createElement('div')
    box_1.setAttribute('class','div-1')

    let box2 = document.createElement('div')
    box2.setAttribute('class','box-2')

    let box3 = document.createElement('div')
    box3.setAttribute('class','box-3')


    let image= document.createElement('img')
    image.src=el.Image

    let  heading= document.createElement('h2')
    heading.innerText=el.Heading
    heading.setAttribute("class","heads")


    let para= document.createElement('p')
    para.innerText=el.Para
    para.setAttribute("class","parag")

    let para1= document.createElement('p')
    para1.innerText=el.Para1
    para1.setAttribute("class","parag1")


    box2.append(image)
    box3.append(heading,para)
    box_1.append(box3,box2)
    data_append_3.append(box_1)
  })

}

data()
