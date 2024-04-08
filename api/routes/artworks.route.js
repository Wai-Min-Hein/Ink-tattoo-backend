import express from 'express'

import { deleteData, getArtworks, postArtworks, put } from '../controllers/artworksController.js' 

const router = express.Router()

router.post('/', postArtworks)
router.get('/', getArtworks)

router.put('/', put)
router.post('/delete', deleteData)

export default router