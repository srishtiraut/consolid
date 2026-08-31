require('dotenv').config()

const express = require('express')
const cors = require('cors')

console.log("App Id exists: ", !!process.env.GITHUB_APP_ID);
console.log("Client ID exists:", !!process.env.GITHUB_CLIENT_ID)
console.log("Client Secret exists:", !!process.env.GITHUB_CLIENT_SECRET)


const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Consolid backend is sprinting hehehe...')
})

//send the user from Consolid → GitHub's authorization page
app.get('/auth/github', (req, res)=>{
const githubAuthUrl = `https://github.com/login/oauth/authorize?` + `client_id=${process.env.GITHUB_CLIENT_ID}` + `&redirect_uri=http://localhost:5000/auth/github/callback`

    res.redirect(githubAuthUrl);
})

app.get('/auth/github/callback', (req, res) => {
    const code = req.query.code

    console.log('Authorization code received:', !!code)

    res.send('GitHub authorization successful! We received the code.')
})


app.listen(5000, ()=>{
    console.log('Server running for Adu');
    
})