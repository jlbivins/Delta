const express = require('express');
const bodyParser = require('body-parser');

const Get = require('./models/get');

const app = express();

app.use('/api/gets', (req, res, next) => {

  //  const gets = new Get({
  //   id: res.body.id,
  //    city: res.body.city,
  //    state: res.body.state,
  //    departure: res.body.departure,
  //    arrival: res.body.arrival

  const gets = [
    {
      id: 'akdjalkd',
      city: 'Las Vegas',
      state: 'NV',
      departure: '10:15 am',
      arrival: '11:30 am'
    }
  ];

  // });
  res.status(200).json({
    message: 'Posts fetched successfully!',
    gets: gets
  });
});

module.exports = app;
