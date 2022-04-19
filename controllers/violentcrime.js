const crimesRouter = require('express').Router;


app.get('',(request,response)=>{
    response.send('<h1>crimes</h1>')
})
app.get('/:crime',(request,response)=>{
    const crime = request.params.crime
    response.send(`<h1>${crime}</h1>`)
})

module.exports = crimesRouter;