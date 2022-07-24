import navbar from "./component/navbar.js";
 document.querySelector(".main_container").innerHTML=navbar();
 import footer from "./component/footer.js";
document.querySelector("#footer746").innerHTML=footer();


document.querySelector("#callMeBack").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("inside");
    document.querySelector(".form").innerHTML=null;
    let img=document.createElement("img");
    img.src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/success.svg";
    img.style.height="200px";
    img.style.marginTop="60px";
    let h2=document.createElement("h2");
    h2.innerText="Thank You";
    h2.style.textAlign="center";
    let p=document.createElement("p");
    p.innerText="We’ve received your request and will call you back within 48 hours.";
    p.style.textAlign="center";

    document.querySelector(".form").append(img,h2,p);

});


