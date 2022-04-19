const stateRouter = require('express').Router()

stateRouter.get('', async (request,response)=>{
    response.send('<h1>states</h1>')
})
stateRouter.post('/:state', async (request,response)=>{
    response.send
})


module.exports = stateRouter;
