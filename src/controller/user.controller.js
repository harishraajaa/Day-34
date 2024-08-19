
const users = [
    {
        id:1,
        name:"Ram",
        email:"ram@gmail.com",
        mobile:"0987654321",
        password:"123",
        status:true
    },
    {
        id:2,
        name:"Raj",
        email:"raj@gmail.com",
        mobile:"8765432190",
        password:"123",
        status:true
    },
    {
        id:3,
        name:"Ajmal",
        email:"ajmal@gmail.com",
        mobile:"7890123456",
        password:"123",
        status:false
    }
]

function findIndex(array,id){
    let i=-1
    for (i=0;i<array.length; i++){
        if(array[i].id == id)
            return i
    }
    return -1
}

const getAllUsers = (req,res)=>{
    res.status(200).send({
        message:"Data Fetch Successfull",
        data:users
    })
}

const getUserById=(req,res)=>{
    //console.log(req.params)
    let {id}=req.params
    //console.log(id)
    let index = findIndex(users,id)
    //console.log(index)
    if(index!=-1){
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:users[index]
        })
    }
    else{
        res.status(400).send({
            message:"Invalid User",
            data: `Provided ID is ${id}`
        })
    }
    
}

const createUser=(req,res)=>{
    //console.log(req.body)
    try {
        let newid = users.length? users[users.length-1].id+1 : 1
        console.log(newid)
        req.body.id=newid
        users.push(req.body)
        res.status(201 ).send({
            message:"User Created",
            data:req.body
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server error",
        })
    }
}

const deleteUserById=(req,res)=>{
    try {
        //console.log(req.params)
        let {id}=req.params
        //console.log(id)
        let index = findIndex(users,id)
        //console.log(index)
        if(index!=-1){
            users.splice(index,1)
            res.status(200).send({
                message:"Data Deleted Successfull"
            })
        }
        else{
            res.status(400).send({
                message:"Invalid User",
                data: `Provided ID is ${id}`
            })
    }

        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server error",
        })
    }
}

const editUserById=(req,res)=>{
    try {
        //console.log(req.params)
        let {id}=req.params
        //console.log(id)
        let index = findIndex(users,id)
        //console.log(index)
        if(index!=-1){
            let currentData= users[index]
            users.splice(index,1,{...currentData,...req.body})
            res.status(200).send({
                message:"Data Edited Successfull"
            })
        }
        else{
            res.status(400).send({
                message:"Invalid User",
                data: `Provided ID is ${id}`
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server error",
        })
    }
}
export default {
    getAllUsers, getUserById,createUser,deleteUserById,editUserById
}