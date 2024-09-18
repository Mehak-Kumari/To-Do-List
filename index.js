const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
function add(){
      if(input.value === ''){
        swal("Please Enter Something!!!");

      }
      else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      }
      input.value = "";
}
list.addEventListener("click", function(cross){
    if(cross.target.tagName === "LI"){
        cross.target.classList.toggle("checked");
    }
    else if(cross.target.tagName === "SPAN"){
        cross.target.parentElement.remove();
    }

}, false);