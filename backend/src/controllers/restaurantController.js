const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        
        const restaurants = await connection('restaurants').select('*'); //aguarde junto com async
    
        return response.json(restaurants);
    },

    async create(request, response){
    const { name, email, whatsapp, address } = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('restaurants').insert({
        id,
        name,
        email,
        whatsapp,
        address,
    });

    return response.json({ id });
    }
};