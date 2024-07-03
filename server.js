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
        },
        '70649988270': {
            NIN: '70649988270',
            name: 'Azubuike Prince Chidi'
        },
        '70649988270': {
            NIN: '70649988270',
            name: 'Okolo Emmanuel'
        },
        '70346313980': {
            NIN: '70346313980',
            name: 'Bon-Akalazu Nancy'
        },
        '81630785360': {
            NIN: '81630785360',
            name: 'Mere Divine Kelechi'
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
