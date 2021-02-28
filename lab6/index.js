import Express from './node_modules/express';

const App = Express();
const port = 45030;

const person = {
    name: "William Sweginnis",
    favoritecolor: "Blue"
}

App.get("/", function(req,res){
    res.send("Hello World!");
});

App.get("/person", function(req, res){
    res.json(person);
});



App.listen(port, function() {
    console.log("Server is running");
});