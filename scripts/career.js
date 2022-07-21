let menu = [
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
  menu.forEach(function(el,i){
   
    box1 = document.createElement('div')
    box1.setAttribute('class','box1')


    image= document.createElement('img')
    image.src=el.Image

    title= document.createElement('p')
    title.innerText=el.Title

    heading= document.createElement('h2')
    heading.innerText=el.Heading


    para= document.createElement('p')
    para.innerText=el.Para

    box1.append(image,title,heading,para)
    container1.append(box1)

  })
}

displayData()


