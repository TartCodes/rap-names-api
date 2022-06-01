const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancleor Bennett',
        'birthLocation': 'Chicago, Illinois'
        }, 
        
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan, Dylon'
        }, 
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => { // the ':' here in express is saying that this is a query param
    const rappersName = req.params.rapperName.toLocaleLowerCase()
    if (rappers[rappersName]) { //bracket notation due to spaces in our rappers names
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['dylan'])
    }
    //res.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it! hehe`)
})
