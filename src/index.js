const express= require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const staticPath=path.join(__dirname,'../public')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(staticPath))
// console.log(app.get('views')); // To ensure the correct views path is set



app.get('',(req,res)=>{
    // res.send('Hello World!');
    res.render('index')
});
app.get('/about',(req,res)=>{
    // res.send('This is about page');
    res.render('about')
})
app.get('/weather',(req,res)=>{
    // res.send('This is weather page');
    res.render('weather');
})
app.get('*',(req,res)=>{
    // res.send('Oops ! 404error..');
    res.render('404error');
})
app.listen(port,()=>{
    console.log("it's working....");
});