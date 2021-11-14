'use strict'

const events=require('./globalEventPool');

require('./globalPackageEvents')
require('./Client-Application/vendor')
require('./Client-Application/driver')

const Client = require('./clientModel/client');
const client=new Client

events.emit('pickup',client)