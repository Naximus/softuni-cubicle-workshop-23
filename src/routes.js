const cubController = require('./controllers/cubeController')

app.use(express.static('src/public'));

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/about', (req,res) => {
    res.render('about');
})

// app.get('/create', (req,res) => {
//     res.render('create');
// })

app.get('/create', cubController.getCreateCube);