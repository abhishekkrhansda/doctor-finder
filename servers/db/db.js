const mongoose=require('mongoose');

const db=async()=>{
  try {
    mongoose.set('strictQuery',false)
    await mongoose.connect(process.env.MONGODB)
    console.log('connected to DB');
  } catch (error) {
    console.log('errored connection')
  }
}

module.exports={db};