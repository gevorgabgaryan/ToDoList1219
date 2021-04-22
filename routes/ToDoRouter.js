const express=require(`express`);
const { toDoView, addNewTask,deleteTask } = require("../controllers/ToDoController");

let router=express.Router();

router.get(`/`,toDoView);

//adding new item route
router.post(`/addTask`,addNewTask)

//delete

router.delete("/deleteItem",deleteTask)


module.exports=router;