import express from 'express'

const app = express()
const port= 3000


app.get("/",(req,res)=>{
    const today = new Date("June 28, 2023 11:23:00")
    let day = today.getDay()

    let type="a weekday"
    let adv="Its time to work hard"
    if(day===0 || day===6){
        type="its weekend"
        adv="its time to have a fun"
    }
    res.render("index.ejs", {
        dayType:type,
        advice: adv
    })
})


app.listen(port, ()=>{
    console.log(`app is running in port ${port}`)
})