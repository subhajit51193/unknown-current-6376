// function document.createElement(tag){
//   return document.createElement(tag)
// }

  jobdata=[
    {
    
    companyName:"Hucon Solutions India Private Limited",
    jobTitle:"Customer Support Executive Customer Support Customer Service B.Com BBA BSC MBA Voice Voice Process" ,
    experience: "experience:0-5 years" ,
    locations:"Location(s):Hyderabad / Secunderabad, Telangana ",
    id:"job01",
   },
   {
		
    companyName:"Teleperformance Global Services Private Limited",
    jobTitle:"Email And Chat Process" ,
    experience: "experience:1-3 years" ,
    locations:"Location(s):Chennai",
    id:"job02",
   },
    {
    
    companyName:"Larsen & Toubro Infotech Limited",
    jobTitle:"Sourcing Executive " ,
    experience: "experience:2-5 years" ,
    locations:"Location(s):Chennai, Navi Mumbai, Thane",
    id:"job03",
   },
    {
    
    companyName:"Prime Hr Services",
    jobTitle:"Urgent Hiring for Work from Home, Data Entry Jobs, Part Time, Full Time Jobs and Home Based Jobs" ,
    experience: "experience:0-5 years" ,
    locations:"Location(s):Chennai, Delhi ",
    id:"job04",
   },
]
let homeWorkFrom =document.getElementsByClassName("homeWorkFrom")
homeWorkFrom=homeWorkFrom[0]
let data=jobdata
data.forEach(el => {
    



let div=document.createElement("div");
div.className="homeJobs";
let companyName =document.createElement("h3");
companyName.innerText=el.companyName .slice(0, 25)+"...";
let jobTitle=document.createElement("span");
jobTitle.innerText=el.jobTitle.slice(0, 25)+"...";
let experience=document.createElement("div");
experience.innerText=el.experience;
let location=document.createElement("div");
location.innerText=el.locations.slice(0, 40);
div.append(companyName,jobTitle,experience,location)
homeWorkFrom.append(div)
});
