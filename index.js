const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')
console.log(__dirname)

app.set('view engine','ejs');

//app.use(express.static(publicPath));
app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/help', (_, res) => {
    res.sendFile(`${publicPath}/help.html`);
})
app.get('/profile',(_,resp) => {
    const user = {
        name: 'Ritesh Bharam',
        email: 'ritesh@test.com',
        city: 'pune',
        country: 'India',
        skills: ['java','js','C++','Node']
    }
    resp.render('profile',{user})
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})
app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404.html`);
})





app.listen(5000);