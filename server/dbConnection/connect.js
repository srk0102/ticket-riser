const mongoose = require('mongoose')

const url = "mongodb+srv://siva:siva@cluster0.cabsq.mongodb.net/Ticket-Raiser?retryWrites=true&w=majority"

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err)=>{
    console.log(err)
  })

const cont = mongoose.connection
cont.once('open', () => console.log("DB connected"))