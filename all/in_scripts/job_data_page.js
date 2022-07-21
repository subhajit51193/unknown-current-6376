let collectData = []
class data{
    constructor(jobrequire, comName, city, expe, speci, jobdes, skills){
        this.jobrequirment = jobrequire
        this.companyName = comName
        this.city = city
        this.experience = expe
        this.specified = speci || "Not Specified"
        this.jobdescription = jobdes
        this.skills = skills
    }
//   findempty() {
//         this.companyName = "Company Name Confidential"
//     }
}
let collection = new data(
"JAVA Developer", 
"TATA Consultancy Services Ltd.", 
"Delhi", 
"3-8 Years", 
"", 
"Job Description Job Description Role.. Java Developer Required Technical Skill Set.. Java,Microservices , SpringBoot Rest API Must Have..If interested share resume on Desired Candidate Profile BACHELOR OF ENGINEERING",
"JAVA Developer")

let coll2 = new data(
    "Box Packing, Jewellery Packing, product packing Work From Home Near Latest Private Jobs 9930453505", 
    "Company Name Confindential", 
    "Delhi", 
    "0-1 Years", 
    "Not Specified", 
    "Box Packing, Jewellery Packing, product packing Work From Home Near Latest Private Jobs 9930453505",
    "Packaging, Packing Printing, Packing officer, Packaging Development, Flxible Packaging..", )

let job_d = new data(
    "Oracle Application Admin and DBA",
    "TATA Consultancy Services Ltd.",
    "Delhi, india",
    "3-8 Years",
    "",
    "Job Description Skills Tech Category Role Experience Range Oracle Applications DBA Orace ++ Administrator Oracle Applications Admin and DBA 6-8 Years Oracle Apps Finace Functional(AP, AR, GL)",
    "Oracle Applications Admin and DBA"
)
let job_by_sal = new data(
    "HCL Technologies || Hiring for ASP.Net/Angular/C#/SQL",
    "HCL Technologies Limited",
    "Bengaluru/Banglore, Delhi",
    "3-8 Years",
    "",
    "We are looking for software Developer/Sr Software Developer - ASP.NET/Angular/SQL/C#, Experience",
    "Anglais Asp.Net, Dot Net, Sql, SQL Server, C#"
)
    collectData.push(collection)
    collectData.push(coll2)
    collectData.push(job_d)
    collectData.push(job_by_sal)
    
    // console.log(collectData)
export {collectData}




    // Job Description

//    let str =  Skills Tech Category Role Job Experience Range
//     Oracle Applications DBA Oracle ++ Administrator Oracle Applications Admin and DBA 6 - 8 Years
//     Oracle Apps Finance Functional (AP, AR, GL) Oracle ++ Developer Oracle Apps Finance Function