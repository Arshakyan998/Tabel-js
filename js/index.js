var arr = [
  {
    name: "Jill",
    lastName: "Smith",
    language: "js",
    age: 60,
  },
  {
    name: "Eve",
    lastName: "Jackson",
    language: "html",
    age: 20,
  },
  {
    name: "John",
    lastName: "Doe",
    language: "css",
    age: 15,
  },
  {
    name: "Vahe",
    lastName: "Bagratyan",
    language: "js",
    age: 23,
  },
  {
    name: "Arman",
    lastName: "Harutyunyan",
    language: "css",
    age: 18,
  },
  {
    name: "Tigran",
    lastName: "Avetisyan",
    language: "html",
    age: 21,
  },
  {
    name: "Narek",
    lastName: "Poghosyan",
    language: "html",
    age: 16,
  },
  {
    name: "Levon",
    lastName: "Harutyunyan",
    language: "css",
    age: 45,
  },
  {
    name: "Manvel",
    lastName: "Davtyan",
    language: "js",
    age: 37,
  },
  {
    name: "Manuk",
    lastName: "Xachatryan",
    language: "css",
    age: 21,
  },
  {
    name: "Sveta",
    lastName: "Petrosyan",
    language: "js",
    age: 23,
  },
  {
    name: "Artak",
    lastName: "Abrahamyan",
    language: "html",
    age: 19,
  },
  {
    name: "Lyova",
    lastName: "Ohanyan",
    language: "html",
    age: 17,
  },
  {
    name: "Alik",
    lastName: "Araqelyan",
    language: "js",
    age: 41,
  },
  {
    name: "Hasmik",
    lastName: "Hayrapetyan",
    language: "css",
    age: 43,
  },
];

let newArr = arr;
let tBody = document.querySelector("tbody");
drowArr(arr);

function drowArr(arr) {
  tBody.innerText = "";
  arr.forEach((element) => {
    let td = document.createElement("tr");
    let trName = document.createElement("td");
    let trLastName = document.createElement("td");
    let trlanguage = document.createElement("td");
    let trAge = document.createElement("td");
    trName.innerText = element.name;
    trLastName.innerText = element.lastName;
    trlanguage.innerText = element.language;
    trAge.innerText = element.age;
    td.append(trName, trLastName, trLastName, trlanguage, trAge);
    tBody.appendChild(td);
  });
}

let pErr=document.createElement("p")

document.querySelector("input").addEventListener("input", (e) => {
  pErr.innerText=""
  if (e.target.value === "") {
    drowArr(arr);
  }
  newArr = arr.filter((element) =>
    element.name.toLowerCase().startsWith(e.target.value.toLowerCase())
  );
  drowArr(newArr);
 if(newArr.length===0){
  let h2=document.createElement("h2")
  h2.textContent="нечего не найденно"
pErr.appendChild(h2)
  tBody.appendChild(pErr)

 }else{

  pErr.remove()

 }

});

document.querySelector("#select").addEventListener("change", (e) => {
  if (e.target.value === "all") {
    drowArr(arr);
  } else {
    newArr = arr.filter((element) => element.language === e.target.value);
    drowArr(newArr);
  }
});

document.querySelectorAll("thead tr td").forEach((element) => {
  element.addEventListener("click", sortBy);
});

let reverse = {
  name: true,
  lastName: true,
  language: true,
  age: true,
  input:true
};


function SortBy(key){
        let sortBy=arr.reduce((aggr,value)=>{
              aggr.push(value[key])
                return aggr

        },[]).sort()

        let fakeArr=[...arr]


        let SortFromNewArr=sortBy.reduce((aggr,value)=>{
                let index=fakeArr.findIndex(item=>{
                        
                       return item[key]===value
                })
                        
                if(index >-1){
                        aggr.push(fakeArr[index])
                        fakeArr.splice(index,1)
                        
                }
 

                return aggr
        },[])



       

return SortFromNewArr

}



function sortBy(e) {
  let data = e.target.getAttribute("data-name");
  if(data==="age"){
          if(reverse.age){
                  newArr=arr.sort((a,b)=>a.age-b.age)
                  drowArr(newArr)
                  reverse={
                          ...reverse,
                          age:false
                  }
          }else{
                  reverse={
                          ...reverse,
                          age:true

                  }
                  drowArr(newArr.reverse())
          }
  }else if(data==="name"){
          if(reverse.name){
                  drowArr(SortBy("name"))
                  reverse={
                          ...reverse,
                          name:false
                  }
          }else{
                  reverse={
                          ...reverse,
                          name:true
                  }

                  drowArr(SortBy("name").reverse())
          }
  }else if(data==="lastName"){
        if(reverse.lastName){
                drowArr(SortBy("lastName"))
                reverse={
                        ...reverse,
                        lastName:false
                }
        }else{
                reverse={
                        ...reverse,
                        lastName:true
                }

                drowArr(SortBy("lastName").reverse())
        }
}else if(data==="programing"){
        if(reverse.language){
                drowArr(SortBy("language"))
                reverse={
                        ...reverse,
                        language:false
                }
        }else{
                reverse={
                        ...reverse,
                        language:true
                }

                drowArr(SortBy("language").reverse())
        }
}
}

let btn=document.querySelector(".addUsers")

btn.classList.add('btn-outline-success')

btn.addEventListener('click',addUsers)

let forAdd=document.querySelector('.form')
function addUsers(){

  forAdd.classList.add("active")


  if(btn.innerHTML==='close'){

    
    forAdd.classList.remove("active")
    forAdd.classList.add("hide")
    btn.innerHTML="addUser"
   
    btn.classList.remove("btn-outline-danger")
    btn.classList.add("btn-outline-success")

  }else{
    btn.innerHTML="close"
    btn.classList.remove("btn-outline-success")
    btn.classList.add("btn-outline-danger")
  }
    document.querySelector('.addNewUser').addEventListener("click",addUser)
    
}


let p=document.createElement("p")
let input=document.querySelectorAll(".form input")

function addUser(e){
  p.innerText=""
  e.preventDefault()

p.style.color="red"



if(input[0].value===""||input[1].value===""||input[2].value===""||input[3].value==="" ){
  
  p.setAttribute('data',"err")
  p.innerText="Заполните все поля"
  
  forAdd.appendChild(p)
  return false


}else{

  let attr=document.body.querySelector('[data=err]')
  if(attr){
    setTimeout(()=>{
      forAdd.removeChild(attr)  
    },500)
  
  }


 let obj={
   name:input[0].value,
   lastName: input[1].value,
  language: input[2].value,
  age: input[3].value,

 }
  setTimeout(()=>{
    input.forEach(element=>{
   element.value=""
 })
},500)
 

 forAdd.classList.remove("active")
 forAdd.classList.add("hide")

 
 btn.innerHTML="addUser"
   
 btn.classList.remove("btn-outline-danger")
 btn.classList.add("btn-outline-success")
 arr.push(obj)

 drowArr(arr)
}
}

