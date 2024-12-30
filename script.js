let items = document.querySelectorAll(".item");

let leftBox = document.querySelector(".left-box");

let rightBox = document.querySelector(".right-box");

let selectedItem = null;
for (let item of items) {
    item.addEventListener("dragstart", (e)=>{
        selectedItem = e.target;
    });
}

rightBox.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

rightBox.addEventListener("drop", (e)=>{
    if (selectedItem) {
        rightBox.appendChild(selectedItem);
        selectedItem = null;
    }
});

leftBox.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

leftBox.addEventListener("drop", (e)=>{
    if (selectedItem) {
        leftBox.appendChild(selectedItem);
        selectedItem = null;
    }
});