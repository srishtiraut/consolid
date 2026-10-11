require('dotenv').config()

const express = require('express')
const cors = require('cors')
const axios = require('axios')      //backend will use axios to send HTTP requests to GitHub

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

app.get('/auth/github/callback', async(req, res) => {
    const code = req.query.code

    if(!code){
        return res.status(400).send('Authorization code missing')
    }

    try {
        const response = await axios.post(
            //send the authorization code and GitHub OAuth credentials to GitHub
            'https://github.com/login/oauth/access_token',
            {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code: code
            },
            {
                headers:{
                    Accept: 'application/json'
                }
            }
        )

        //extract the token from GitHub's response
        const accessToken = response.data.access_token

        if(!accessToken){
            //means GitHub has rejected the exchange
            console.error('Github token exchange failed: ', response.data.error);
            return res.status(401).send('Github authorization failed')
        }

        console.log('Access token received:', !!accessToken);

        res.send('Github authorization successful. Access token received!')
        
        
    } catch (error) {
        console.error('Github token exchange failed',
            error.response?.data || error.message
        )
        res.status(500).send('Something broke during Github authorization')
        
    }

})


app.listen(5000, ()=>{
    console.log('Server running for Adu');
    
})