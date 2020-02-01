const Item = require('../models/list.model');
const uuidv4 = require('uuid/v4');

/*
exports.getListFromServer = function (req, res) {
    const data = [{ id: '1adfasf', content: 'kupić mydło FA' }, { id: '2evxc34', content: 'zadzwonić do mamy' }, { id: 'fvaerf4', content: 'zrobić pranie' }, { id: '5wrtgbs', content: 'opłacić prąd' }, { id: 'hbdfgaa', content: 'opłacić szambo' }, { id: 'iutmyu6', content: 'opłacić gaz' }, { id: '43wrgrt', content: 'iść do kościoła' }, { id: 'xbrtgw4', content: 'potrenowć bieganie' }, { id: '65f3ehw', content: 'upiec sernik' }, { id: 'u7645eh', content: 'ubić wołu' }, { id: 'kjmfug4', content: 'wyprawić skórę woła' }, { id: '74jrtik', content: 'rozpaliś ognisko' }, { id: 'h35ehru', content: 'zasadzić drzewo' }, { id: '65htujk', content: 'napić się wody źródlanej' }, { id: '8756r7j', content: 'napisać list do Świętego Mikołaja (to co, że już po Świętach)' }, { id: '56rjyik', content: 'upolować łosia' }, { id: 'q2wergz', content: 'zrobić pasztet z dziczyzny' }, { id: 'mnb530p', content: 'oglądnoć Grę o Tron' }, { id: 'vwqf4tf', content: 'poskakać na nartach' }, { id: '654ktjf', content: 'powalczyć Judo' }, { id: 'jrbv432', content: 'zgłosić się do Fame MMA (jako kasjer)' }, { id: '235122f', content: 'wypić piwo' }, { id: 'be5tsht', content: 'zjeść ciastko' }, { id: 't5ndhnn', content: 'beknąć złowrogo' }, { id: '76543v0', content: 'przegonić na dobre kota sąsiadów' }, { id: 'mbyegt5', content: 'ztuningować auto' }, { id: '4r5tgh7', content: 'odśnieżyć podwórko' }, { id: '5yhli0i', content: 'pojeździć na sankach' }, { id: '786d96k', content: 'zobaczyć Ermitaż' }, { id: 'h56heyt', content: 'zaspiewąc pieśń patriotyczną' }, { id: '10101gf', content: 'zakupić bukiet kwiatów' }];
    res.json(data);
};
*/

/* get list from db */
exports.getListFromServer = async (req, res) => {

    try {
        res.status(200).json(await Item.find().collation( { 'locale': 'pl', 'strength' : 4, 'caseFirst': 'upper' } ).sort( { status: 1, content: 1 } ) );

    } catch(err) {
        res.status(500).json(err);

    }
};

/* add item to the list */
exports.addItemToList = async (req, res) => {

    try {

        /*//ver 1
        let newItem = new Item(req.body);
        newItem.id = uuidv4();
        */

        /*//ver 2
        const { content } = req.body;
    
        let newItem = new Item();
        newItem.content = content;
        newItem.id = uuidv4();
        */
    
        let newItem = new Item();
        newItem.content = req.body.data.content;
        newItem.status = req.body.data.status;
        newItem.id = uuidv4();

        /*
        newItemSaved = await newItem.save();
        res.status(200).json(newItemSaved);
        */

        res.status(200).json(await newItem.save());

    } catch(err) {
        res.status(500).json(err);
    }
};

/* remove item from list */
exports.removeItemFromList = async (req, res) => {

    try {
        res.status(200).json(await Item.deleteOne( { 'id': req.body.removeId } ) );

    } catch(err) {
        res.status(500).json(err);

    }
};

/* update item in list */
exports.updateItemFromList = async (req, res) => {

    try {
        res.status(200).json(await Item.updateOne( { 'id': req.body.data.updatedItem.id }, { 'content': req.body.data.updatedItem.content, 'status': req.body.data.updatedItem.status } ) );
        //console.log(req.body.data.updatedItem);
        //console.log(req);


    } catch(err) {
        res.status(500).json(err);

    }
};

