'use strict'

const events=require('../globalEventPool')


events.on('pickup',(payload)=>{
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit',payload)
})