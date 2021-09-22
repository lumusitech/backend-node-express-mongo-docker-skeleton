const { Router } = require('express');

const userRoutes = Router();

userRoutes.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        msg: 'GET /user/:id',
        id
    });
})

module.exports = userRoutes;