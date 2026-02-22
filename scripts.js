document.getElementById("carbonForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

let transport=document.querySelector('input[name="travel"]:checked')?.value;
let travel=Number(document.getElementById("travel1").value);
let electricity=Number(document.getElementById("current").value);
let meatc=Number(document.getElementById("meatc").value);
let plastic=document.querySelector('input[name="plastic"]:checked')?.value;

if(!transport ||!plastic ||!travel ||!electricity ||!meatc){
    alert("Please fill all the fields");
    return;
}
let transportemission;
if (transport == "Car")
    {transportemission = travel*52*0.21;
}
else if (transport == "Bike"){
        transportemission=travel*52*0.10;
}
else{
    transportemission=travel*52*0.08;
}
let currentemission = electricity*12*0.82;
let meatcemission = meatc*52*2.5;
let plasticemission;

if (plastic == "Low"){
    plasticemission = 10;
}
else if (plastic == "Medium"){
    plasticemission = 25;
}
else{
    plasticemission = 50;
}
let total = transportemission + currentemission + meatcemission + plasticemission;
let totalton = total/1000;
document.getElementById("top").innerHTML = "Your Carbon Impact";
document.getElementById("totalton").innerHTML = totalton.toFixed(2)+ " tons carbon ";

let impact;
if (totalton<2){
    impact = "low";
    document.getElementById("impact1").style.color = "green";
}
else if (totalton<4){
    impact = "medium";
    document.getElementById("impact1").style.color = "orange";
}
else{
    impact = "high";
    document.getElementById("impact1").style.color = "red";
}
document.getElementById("impact1").innerHTML = "Your carbon footprint is "+ impact;
let suggestion;
let tips;
if (impact == "low"){
    suggestion = "Great job! Keep up the good work and continue to make sustainable choices.";
    tips = "Consider sharing your habits with friends and family to inspire them to reduce their carbon footprint as well.";
}
else if (impact == "medium"){
    suggestion = "Your carbon footprint is moderate. Consider making some changes to reduce it.";
    tips = "<ul><li>Try using public transportation or carpooling</li><li>Reduce meat consumption</li><li>Use energy-efficient appliances</li></ul>";
}
else{
    suggestion = "Your carbon footprint is high. It's important to take action to reduce it.";
    tips = "<ul><li>Consider switching to renewable energy sources</li><li>Reduce  travel</li><li>Adopt a plant-based diet</li><li>Minimize plastic use</li></ul>";
}
document.getElementById("suggestion").innerHTML =suggestion ;
document.getElementById("tips").innerHTML = tips;
document.getElementById("result").scrollIntoView({ behavior: 'smooth' });

});