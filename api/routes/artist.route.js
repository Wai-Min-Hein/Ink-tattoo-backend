import { get, getSingleArtist, post } from "../controllers/artist.controller.js"
import express from 'express'

const router = express.Router()

router.post('/', post)
router.get('/', get)
router.get('/:id', getSingleArtist)

export default router