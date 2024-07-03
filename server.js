const express = require('express');
const app = express();

app.use(express.json());

app.get('/nimc/:nin', (req, res) => {
    const { nin } = req.params;

    // Mock response data
    const mockUsers = {
        '81005539620': {
            NIN: '98765432101',
            name: 'Nduoma Chinomso',
            phoneNumber: '2348100553962',
            balance: 10000,
        },
        '81283406520': {
            NIN: '98765432101',
            name: 'Akwuiwu Chukwuemeka Johnpaul',
            phoneNumber: '2348128340652',
            balance: 10000,
        },
        '70620879750': {
            NIN: '98765432101',
            name: 'Nkwocha Cornelius N',
            phoneNumber: '2347062087975',
            balance: 10000,
        }
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
