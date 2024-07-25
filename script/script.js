function todofun(){
    var todoval=document.getElementById("todo");
    var todoinp=todoval.value.trim();

    if(todoinp!==""){
        var li=document.createElement("li");
        li.textContent=todoinp;

        var delbtn=document.createElement("Button");
        delbtn.textContent="Delete";
        delbtn.classList.add("delete");
        delbtn.onclick=function(){
            li.remove();
        }
        li.appendChild(delbtn);

        document.getElementById("todolist").appendChild(li);
        todoval.value="";
    }
    else{
        alert("Enter Value");
    }

}