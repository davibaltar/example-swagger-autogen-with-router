const express = require('express')
const router = express.Router()
const authorize = require('../middlewares/auth')

router.post('/signin', (req, res, next) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    res.status(201).json({
        data: [],
        message: 'Authentication successed'
    })
})

router.route('/users/:id').get(authorize, (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to get a specific user.' 
    const users = []
    const data = users.find(e => e.id === req.params.id)

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User registered successfully." } */
    res.status(200).json({
        data: [],
        message: 'Successfully found'
    })
})

module.exports = router