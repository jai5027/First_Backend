
import express from 'express'
import connectDB from './src/db/db.js'
import userModel from './src/models/user.models.js'

connectDB()

const app = express()
app.use(express.json())

app.post('/user', async (req, res) => {
    
    const data = req.body
    await userModel.create({
        id: data.id,
        name: data.name
    })

    res.status(201).json({
        msg: "user created"
    })
})

app.get('/user', async (req, res) => {

    const userData = await userModel.find()

    res.status(200).json({
        msg: "userData mil gya",
        userData: userData
    })
})

app.delete('/user/:id', async (req, res) => {
    const id = req.params.id

    await userModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        msg: "user deleted successfully"
    })
})


app.patch('/user/:id', async (req, res) => {
    const id = req.params.id
    const name = req.body.name
    
    await userModel.findOneAndUpdate(
        { _id: id },      
        { name: name }
    )

    res.status(200).json({
        msg: "name update successfully"
    })
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})





























// app.use(express.json())

// const name = []

// app.post('/user', (req, res) => {
//     name.push(req.body)

//     res.status(200).json({
//         msg: "post kiys gya"
//     })
// })

// app.get('/user', (req, res) => {
//     res.status(201).json({
//         msg: "data mil gya",
//         name:name
//     })
// })

// app.delete('/user/:index', (req, res) => {
//     const indx = req.params.index
//     delete name[indx]

//     res.status(200).json({  
//         msg: "delete success"
//     })
// })

// app.patch('/user/:index', (req, res) => {
//     const indx = req.params.index
//     const id = req.body.id

//     name[indx].id = id

//     res.status(200).json({
//         msg: "id updated"
//     })
// })













// import express from 'express'


// const app = express()
// app.use(express.json())

// const notes = []

// app.post('/notes', (req, res) => {
//      notes.push(req.body)
//     res.status(200).json({
//         msg: "notes successfully create"
//     })
// })

// app.get('/notes', (req, res) => {
//     res.status(201).json({
//         name: "Jai sharma",
//         notes: notes
//     })
// })

// app.delete('/notes/:index', (req, res) => {
//     const indx = req.params.index
//     delete notes[indx]
    
//     res.status(200).json({
//         msg: "note deleted successfully"
//     })
// })


// app.patch('/notes/:index', (req, res) => {
//     const indx = res.param.index
//     const name = res.body.name

//     notes[indx].name = name

//     res.status(200).json({
//         msg: "name updated"
//     })
// })

// app.listen(4000, () => {
//     console.log("server running http://localhost:4000")
// })















































// // import express from 'express'

// // const app = express()
// // app.use(express.json())

// // const notes = []

// // app.post('/notes', (req, res) => {
// //     notes.push(req.body)
// //     res.status(201).json({
// //         msg: "node create successfully"
// //     })
// // })

// // app.get('/notes', (req, res) => {
// //     res.status(200).json({
// //         msg: "notes fetch successfully",
// //         notes: notes
// //     })
// // })


// // app.listen(3000, () => {
// //     console.log("server is running http://localhost:3000");
    
// // })