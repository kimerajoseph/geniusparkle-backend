const express = require('express')

const { getUserPendingRequests, getUserConnectionsRequests, getUserConnections } = require('../controllers/connections.controllers')

const router = express.Router()

router.get('/', getUserConnections)
router.get('/pending', getUserPendingRequests)
router.get('/requests', getUserConnectionsRequests)

module.exports = router