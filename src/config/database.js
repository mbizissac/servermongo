const mongoose  = require('mongoose');
require('dotenv').config();
const dbState = [{
    value:0,
    label:'Disconnected'
},
{
    value:1,
    label:'Connected'
},
{
    value:2,
    label:'Connecting'
},
{
    value:3,
    label:'Disconnecting'
}
]


const connection = async() => {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27018/');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, 'to db');
      } catch (error) {
        console.log('error connection DB L:', error);
      }
}

    


    module.exports = connection;
