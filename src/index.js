const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'code-security-scanner-nextjs-ts-v2026',
        category: 'Automated Code Quality & Vulnerability Scanner',
        tech: 'TypeScript / Next.js React App',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[code-security-scanner-nextjs-ts-v2026] Express engine listening on port ${PORT}`);
});
