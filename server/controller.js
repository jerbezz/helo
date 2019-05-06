const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        const userArr = await db.findUserByUsername([username])
        if (userArr[0]){
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.createUser([username, hash])
        req.session.user = {id: newUserArr[0].helo_id, username: newUserArr[0].helo_username};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
      },

      login: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')
        const userAcc = await db.findUserByUsername([username])
        if (!userAcc[0]) {
            return res.status(200).send({message: 'account not found'})
        }
        let result = bcrypt.compareSync(password, userAcc[0].helo_password)
        if(!result){
            return res.status(200).send({message: 'incorrect password'})
        }
        req.session.user = {id: userAcc[0].helo_id, username: userAcc[0].helo_username}
        res.status(200).send({
            message: 'log in successful',
            userData: req.session.user,
            loggedIn: true
        })
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('http://localhost:3000/#/')
    },
    userData: (req, res) => {
        if(req.session.user) res.status(200).send(req.session.user)
      else res.status(401).send('please log in');
    }
}