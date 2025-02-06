import { generatePassword } from "../controllers/passwordControllers";

app.get('/generate-password', (req,res) => {
    const password = generatePassword(16, true, true, true, true);
    res.send(`Generated Password: ${password}`);
});