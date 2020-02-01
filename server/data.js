const List = require('./models/list.model');

const loadDataToDb = async () => {

    const data = [ { id: '1adfasf', content: 'kupić mydło FA', status: 'done'} ];

    try {
        let counter = await List.countDocuments();
        if(counter === 0) {
            console.log('No items in db. Loading data...');
            await List.create(data);
            console.log('Data has been successfully loaded');
        }

    } catch (err) {
        console.log('Couldn\'t load data', err);
    }
};

module.exports = loadDataToDb;