'use strict'

const events=require('./globalEventPool')


events.on('pickup',(payload)=>{logger('pickup',payload)})
events.on('in-transit',(payload)=>{logger('in-transit',payload)})
events.on('delivered',(payload)=>{logger('delivered',payload)})


function logger(eventName,payload) {
    console.log('EVENT',{event:eventName,time: new Date().toISOString(),payload});
}
