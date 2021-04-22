
class IndexController{
      renderHomeView(req, res) {
        res.render('index');
      }
}

module.exports=new IndexController()