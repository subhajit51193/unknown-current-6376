document.querySelector("#applybtn").addEventListener("click",()=>{
    console.log("inside");
    let values=document.querySelector("#coupontext").value;
    console.log(values);
    let regex = /[^0-9]/gi;
    let result = values.replace(regex, "");
    console.log(result);
    let totalPrice=+document.querySelector("#tPrice").innerText;



    let discount=+document.querySelector("#discountgiven").innerText;
    console.log(discount)
    if (values==="MN30"){
        document.querySelector("#discountgiven").innerText=(result);
        document.querySelector("#tPrice").innerText=totalPrice-result;
        document.querySelector("#applybtn").innerText="APPLIED";
        document.querySelector("#applybtn").style.color="green";

    }
    else{
        document.querySelector("#applybtn").innerText="INVALID!";
        document.querySelector("#applybtn").style.color="red";


    }
})

var checkBox = document.getElementById("checkbox");
document.querySelector("#checkbox").addEventListener("click",()=>{
    if (checkBox.checked===true){
        document.getElementById("checkboxbtn").style.backgroundColor="blue";
    }
})