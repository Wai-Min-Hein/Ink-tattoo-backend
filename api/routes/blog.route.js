import express from "express";

import { post, get, put, deleteData, getSingleBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", post);
router.get("/", get);


router.put('/', put)
router.post('/delete', deleteData)

router.get('/:id', getSingleBlog)


export default router;
