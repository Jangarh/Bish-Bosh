let input = document.getElementById("items");
        let mylist= document.getElementById("alist");
        let minValue = 2;
        let itemNo = 0;
addToList=()=>{
    // get
    let items = filterItems(input.value);
    // set 
   if (items) {
    mylist.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="alist${itemNo}">
                <div class="row">
                <div class="col-1">
                <input class="" type="checkbox" id="check${itemNo}" onclick="ready(${itemNo})">
                </div>
                <div class="col-6">
                    <span class=" h4" id="text${itemNo}"> ${items} </span>
                </div>
                <div class="col-4">
                     <button class=" btn btn-dark" onclick="removeItem(${itemNo})">Remove</button>
                     <button class=" btn btn-dark" onclick="changeItem(${itemNo})">Change</button>
                </div>                  
                 </div>    
                </li> `;
        input.value=" ";
        itemNo++;

   }
}

ready=(itemId)=>{ 
    let checkbox = document.getElementById(`check${itemId}`);
    let current = document.getElementById(`text${itemId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }else{
        current.classList.add("text-decoration-line-through");
    }
    
}

filterItems=(z)=>{
       if (z) {
            if (z.length >= minValue) {
                return z;
            }
            else{
                alert("More than 2 words needs to be entered")
            }
       }
       else{
            return false;
       }
}

changeItem=(itemId)=>{
    let currentText = document.getElementById(`text${itemId}`);
    let newText = prompt("Do you want to change this item",currentText.innerHTML);
    if (filterItems(newText)) {
        currentText.innerHTML = newText; 
    }
}

removeItem=(itemId)=>{
    let current = document.getElementById(`text${itemId}`).innerHTML;
       let deleteComfirm = confirm(`Do you really want to remove item ${current}`);
    if (deleteComfirm) {
         let m = document.getElementById("alist")
        let n = document.getElementById(`alist${itemId}`);
        m.removeChild(n);
    }
    else{
        console.log("removed");
    }
};


// få ut .value från <input>
// skapa en ny <li> med document.createElement('li')
// lägg till inputen med li.innerHTML = värdet
// använd ul.appendChild() för att lägga till vår nya li till sin ul