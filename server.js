const express = require('express');
const app = express();

app.use(express.json());

app.get('/nimc/:nin', (req, res) => {
    const { nin } = req.params;

    // Mock response data
    const mockUsers = {
        '12345678901': {
            NIN: '12345678901',
            name: 'Buzz brain',
            phoneNumber: '2347012345678',
            balance: 10000,
        },
        '98765432101': {
            NIN: '98765432101',
            name: 'Nduoma Chinomso',
            phoneNumber: '2348100553962',
            balance: 10000,
        },
    };

    const userDetails = mockUsers[nin] || null;

    if (userDetails) {
        res.json(userDetails);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Mock NIMC API running on port ${PORT}`);
});
