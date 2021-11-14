'use strict';
const Client= require('../clientModel/client');
const events = require('../globalEventPool');
require('../app');
require('../Client-Application/vendor');
require('../Client-Application/driver');
require('../globalPackageEvents');
describe('logger middleware', ()=>{
  let consoleSpy;
  const payload = new Client;

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=>{
    consoleSpy.mockRestore();
  });


  it('delivered', ()=>{
    events.emit('delivered', payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
});