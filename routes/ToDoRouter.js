const express=require(`express`);
const { toDoView, addNewTask } = require("../controllers/ToDoController");

let router=express.Router();

router.get(`/`,toDoView);

//adding new item route
router.post(`/addTask`,addNewTask)


module.exports=router;