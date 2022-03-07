//chrome://extensions/


let myLead = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabEL = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLead'));
if(leadsFromLocalStorage){
    myLead = leadsFromLocalStorage;
    render(myLead)
}


tabEL.addEventListener("click", ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url);
        localStorage.setItem("mylead", JSON.stringify(myLead));
        render(myLead)
    })
})

function render(leads){
let listItems = "";
for(let i = 0; i<leads.length; i++){
    listItems += 
    `<li>
        <a target='_blank' href="${leads[i]}">
            ${leads[i]}
        </a>
    </li>`
}
ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", ()=>{
    localStorage.clear();
    myLead = [];
    render(myLead)
})

inputBtn.addEventListener("click", ()=>{
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
})
