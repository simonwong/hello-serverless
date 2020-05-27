'use strict';

exports.helloSls = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Your Function 成功啦'
    }),
  };

  callback(null, response);
};
