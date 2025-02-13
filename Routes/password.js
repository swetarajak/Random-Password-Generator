import express from 'express';
import { getPassword } from '../controllers/passwordController';

const router = express.Router();

// Render the homepage
router.get('/', (req, res) => {
    res.render('index', { error: null });
});

// Handle password generation and render the result
router.get('/generate-password', (req, res) => {
    const result = getPassword(req);

    if (result.error) {
        return res.render('index', {
            error: result.error
        });
    }

    res.render('result', {
        password: result.password
    });
});

module.exports = router;
