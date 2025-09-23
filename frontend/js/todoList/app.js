// 할일 목록
var todos = [];

const btnAdd = document.getElementById("btn-add");
const ipbTodo = document.getElementById("ipb-todo");

btnAdd.addEventListener("click", onClickAddBtn);
ipbTodo.addEventListener("keydown", onKeydownIpbTodo)

function onClickAddBtn(e) {
    addList();
}

function onKeydownIpbTodo(e) {
    if(e.key == "Enter") {
        addList();
    }
}

// 할일 목록에 아이템 추가
function addList() {
    // inputbox
    const ipbTodo = document.getElementById("ipb-todo");
    const strItemValue = ipbTodo.value;
    // ul
    const todoList = document.getElementById("todo-list");
    
    if(strItemValue == "") {
        return ;
    }
    
    var newItem = createItem(strItemValue, false)
    todos = [...todos, {text: strValue, done: false}];

    todoList.appendChild(newItem);

    ipbTodo.value = "";
}

// 아이템 생성
function createItem(strValue, done) {
    // .item
    const div = document.createElement("div");
    div.className = "item";

    // .list-item
    const li = document.createElement("li");
    li.innerHTML = strValue;
    // delete Button
    const button = document.createElement("button");
    button.innerHTML = "X"
    // 삭제 버튼 클릭 로직
    button.addEventListener("click", function() {
        const todoList = document.getElementById("todo-list");

        todoList.removeChild(div);
    })

    // done Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "chk-" + strValue
    checkbox.checked = done;

    checkbox.addEventListener("change", function(e) {
        li.classList.toggle("done");
    })

    div.appendChild(checkbox);
    div.appendChild(li);
    div.appendChild(button);

    return div;
}