const jsonServer = require('json-server')
const auth = require('json-server-auth')
 
const app = jsonServer.create()
const router = jsonServer.router('db.json')
 
const middlewares = jsonServer.defaults()

app.use(middlewares)

app.db = router.db

app.use(auth)
app.use(router)
app.listen(3000,()=>{
    console.log('Server is running at port 3000');
    
})