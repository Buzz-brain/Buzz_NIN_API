const express = require('express');
const app = express();

app.use(express.json());

app.get('/nimc/:nin', (req, res) => {
    const { nin } = req.params;

    // Mock response data
    const mockUsers = {
        '81005539620': {
            NIN: '81005539620',
            name: 'Nduoma Chinomso'
        },
        '81283406520': {
            NIN: '81283406520',
            name: 'Akwuiwu Chukwuemeka Johnpaul'
        },
        '70620879750': {
            NIN: '70620879750',
            name: 'Nkwocha Cornelius N'
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
