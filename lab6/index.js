import Express from './node_modules/express';
import chalk from 'chalk';

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

console.log(chalk.red)

App.listen(port, function() {
    console.log("Server is running");
});