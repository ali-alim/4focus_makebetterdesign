import express from 'express'

const router = express.Router();

router.get('/', (req,res) => {
    res.send('hi, you can see this!')
});

export default router;