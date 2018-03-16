module.exports = {
    get: (req, res)=> {
        res.status(200).send(greeting)
    },
    put: (req, res) => {
        greeting.push(req.body)
        res.status(200).send(greeting)
    },
    push: (req,res) =>{
        console.log(req.params.id)
    },
    delete: (req, res) => {
        
    }
}