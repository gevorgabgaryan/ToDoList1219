const {ToDoModel}=require(`../models/ToDoModel`)

class ToDoController{
    
   async toDoView(req,res){
        let todos=await ToDoModel.find({});
        res.render(`todo`,{todos})
    }

   async addNewTask(req,res){
     try{  
      let savedTask=await ToDoModel.create({task:req.body.task})
      let toDo={
          id:savedTask._id,
          task:savedTask.task
      }
      res.json({toDo})
      
    

     }catch(err){
         console.log(err)
         res.json({error:err.message})
     }

    }
}

module.exports=new ToDoController();