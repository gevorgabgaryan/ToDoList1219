let ToDoForm=document.querySelector(`#todoForm`);
let taskInput=ToDoForm.elements[`task`];
let todoList=document.querySelector(`#todoList`)

ToDoForm.addEventListener(`submit`,(e)=>{
    e.preventDefault();
    let taskObj={
        task:taskInput.value
    }
    taskInput.value=""

    fetch(`/todo/addTask`,{
        method:`POST`,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(taskObj)
    }).then(res=>{
        console.log(`res`,res);
        return res.json()
    }).then(data=>{
       let {error,toDo}=data;
       if(error){
           alert(error);
           return
       }
       console.log(toDo);
       todoList.insertAdjacentHTML(`beforeend`,`
        <li id="${toDo.id}">${toDo.task}</li>  
      `)
    })

})