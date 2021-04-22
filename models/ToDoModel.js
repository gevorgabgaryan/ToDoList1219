const {model,Schema}=require(`mongoose`);

let ToDoSchema=new Schema({
    task:{
        type:String
    }
},{
    timestamps:true
});

let ToDoModel=model(`todo`,ToDoSchema);

module.exports={
  ToDoModel
}