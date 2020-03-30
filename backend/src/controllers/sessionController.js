const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;
        const restaurant = await connection('restaurants').where('id', id).select('name').first();

        if(!restaurant){
            return response.status(400).json({error: 'No Ong found with this ID'});
        }
        return response.json(restaurant);
    }
}