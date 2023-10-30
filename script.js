let form=document.createElement("form");


// first name
let l1=document.createElement("label");
l1.innerHTML="First Name";
l1.setAttribute("id", "l1");
let br14=document.createElement("br");

let fname=document.createElement("input");
fname.setAttribute("placeholder", "First Name");
fname.setAttribute("type","text");
fname.setAttribute("id","fname");

let br0=document.createElement("br");
let br13=document.createElement("br");
// last name
let l2=document.createElement("label");
l2.innerHTML="last Name";
l2.setAttribute("id", "l2");
let br15=document.createElement("br");

let lname=document.createElement("input");
lname.setAttribute("placeholder", "First Name");
lname.setAttribute("type","text");
lname.setAttribute("id","lname");

let br=document.createElement("br");

let br1=document.createElement("br");

let Gender=document.createElement("label");
Gender.innerHTML="Gender";

let Male=document.createElement("input");
Male.setAttribute("type","radio");
Male.setAttribute("value","Male");
Male.setAttribute("name","gender");
Male.setAttribute("id","gender");

let M=document.createElement("label");
M.innerHTML="Male";

let Female=document.createElement("input");
Female.setAttribute("type","radio");
Female.setAttribute("value","Female");
Female.setAttribute("name","gender");
Female.setAttribute("id","gender");

let F=document.createElement("label");
F.innerHTML="Female";

let br12=document.createElement("br");

// address
let ads=document.createElement("label");
ads.innerHTML="Address";

let br16=document.createElement("br");

let address=document.createElement("textarea");
address.setAttribute("id","address");
address.setAttribute("placeholder", "Address...")

let br2=document.createElement("br");

let br3=document.createElement("br");

//pincode
let pinc=document.createElement("label");
pinc.innerHTML="Pincode";

let br17=document.createElement("br");

let pincode=document.createElement("input");
pincode.setAttribute("placeholder", "Pincode");
pincode.setAttribute("type","text");
pincode.setAttribute("id","pincode")

let br4=document.createElement("br");

// foods checkbox
let foods=document.createElement("label");
foods.innerHTML="foods";
foods.setAttribute("id","foodss");

let br5=document.createElement("br");

let food=document.createElement("input");
food.setAttribute("type","checkbox");
food.setAttribute("id","briyani");
food.setAttribute("value","briyani");
food.setAttribute("name","foods");

let briyani=document.createElement("label");
briyani.innerHTML="briyani";
briyani.setAttribute("id","briyani");

let food1=document.createElement("input");
food1.setAttribute("type","checkbox");
food1.setAttribute("id","idly");
food1.setAttribute("value","Idly");
food1.setAttribute("name","foods");

let Idly=document.createElement("label");
Idly.innerHTML="Idly";
Idly.setAttribute("id","idly");

let food2=document.createElement("input");
food2.setAttribute("type","checkbox");
food2.setAttribute("id","dosa");
food2.setAttribute("value","Dosa");
food2.setAttribute("name","foods");

let dosa=document.createElement("label");
dosa.innerHTML="dosa";
dosa.setAttribute("id","dosa");

let food3=document.createElement("input");
food3.setAttribute("type","checkbox");
food3.setAttribute("id","poori");
food3.setAttribute("value","Poori");
food3.setAttribute("name","foods");

let Poori=document.createElement("label");
Poori.innerHTML="Poori";
Poori.setAttribute("id","poori");

let food4=document.createElement("input");
food4.setAttribute("type","checkbox");
food4.setAttribute("id","pongal")
food4.setAttribute("value","Pongal");
food4.setAttribute("name","foods");

let pongal=document.createElement("label");
pongal.innerHTML="Pongal";
pongal.setAttribute("id","pongal");

let br6=document.createElement("br");

// State 
let State=document.createElement("label");
State.innerHTML="State";
// State.setAttribute("id","state");

let br7=document.createElement("br");

let Ste=document.createElement("input");
Ste.setAttribute("type","text");
Ste.setAttribute("placeholder", "State");
Ste.setAttribute("id","state");

let br8=document.createElement("br");

// country
let country=document.createElement("label");
country.innerHTML="country";
// country.setAttribute("id","country");

let br9=document.createElement("br");

let contry=document.createElement("input");
contry.setAttribute("type","text");
contry.setAttribute("placeholder", "Country");
contry.setAttribute("id","country")

let br10=document.createElement("br");
document.body.append(br10);

let br11=document.createElement("br");

let submit=document.createElement("input");
submit.setAttribute("type","submit")
submit.innerHTML="SUBMIT";
submit.setAttribute("id","submit");

form.setAttribute("id","formdata");
form.append(l1,br14,fname,br0,br13,l2,br15,lname,br,br1,Gender,Male,M,Female,F,br12,ads,br16,address,br2,br3,pinc,br17,pincode,br4,foods,br5,food,briyani,food1,Idly,food2,dosa,food3,Poori,food4,pongal,br6,State,br7,Ste,br8,country,br9,contry,br10,br11,submit);
document.body.append(form);
 
let form1=document.getElementById("formdata");
let tbody=document.getElementById("table");

form1.addEventListener('submit',function(e){
    e.preventDefault();
let firstname=document.getElementById('fname').value;
let lastname=document.getElementById('lname').value;
let Gender=document.querySelector('input[name="gender"]:checked').value;
let adds=document.getElementById("address").value;
let pin=document.getElementById("pincode").value;
let state=document.getElementById("state").value;
let Country=document.getElementById("country").value;
let foods=document.querySelectorAll('input[name="foods"]:checked');
let foodsarray = Array.from(foods).map(item => item.value);
if(foodsarray.length<2){
    alert("select Min 2 food items");
   
}
let newrow = table.insertRow();
let cell1=newrow.insertCell(0);
let cell2=newrow.insertCell(1);
let cell3=newrow.insertCell(2);
let cell4=newrow.insertCell(3);
let cell5=newrow.insertCell(4);
let cell6=newrow.insertCell(5);
let cell7=newrow.insertCell(6);
let cell8=newrow.insertCell(7);
cell1.textContent=firstname;
cell2.textContent=lastname;
cell3.textContent=Gender;
cell4.textContent=adds;
cell5.textContent=pin;
cell6.textContent=foodsarray.join(',');
cell7.textContent=state;
cell8.textContent=Country;
form1.reset();
})




