var input = document.getElementById("input");
var list = document.getElementById("list");
var form = document.getElementById("add-items");
var refreshAlert = 0;
var refreshLimit = Math.floor((Math.random() * 10) + 1);
var nearLimitAlert = refreshLimit - 3;

function addItem(e) {
    e.preventDefault();
    var item = input.value;
    console.log(item);
    list.innerHTML += "<li>" + item + "</li>";
    refreshAlert += 1;
    form.reset();

    if (refreshAlert == refreshLimitAlert) {
        alert("You are near your limit of items! Refreshing will happen after " + nearLimitAlert + " more items");
    }
    if (refreshAlert == refreshLimit) {
        location.reload();
    }
}

form.addEventListener("submit", addItem);