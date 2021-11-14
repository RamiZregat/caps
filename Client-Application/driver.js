'use strict'

const events=require('../globalEventPool')


events.on('in-transit',(payload)=>{
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
    events.emit('delivered',payload)
})