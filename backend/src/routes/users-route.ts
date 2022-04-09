import express from "express";

const router = express.Router();

router.get('/register', (req, res) => {
   res.send('Register route');
});

router.get('/login', (req, res) => {
   res.send('Login route');
});

router.get('/logout', (req, res) => {
   res.send('Logout route');
})

export default router;