import express from 'express'

import { postArtworks } from '../controllers/artworksController.js' 

const router = express.Router()

router.post('/', postArtworks)

export default router