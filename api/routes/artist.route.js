import { deleteData, get, getSingleArtist, post, put } from "../controllers/artist.controller.js"
import express from 'express'

const router = express.Router()

router.post('/', post)
router.put('/', put)
router.post('/delete', deleteData)
router.get('/', get)
router.get('/:id', getSingleArtist)

export default router