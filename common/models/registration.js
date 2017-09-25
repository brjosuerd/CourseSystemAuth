'use strict';

module.exports = function(Registration) {
  Registration.remoteMethod('register', {
      accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
      returns: {arg: 'scores', type: 'Registration', root: true},
      http: {path: '/register', verb: 'post'},
  });

  Registration.observe('*', function(ctx, next) {

    next();
  });
};
