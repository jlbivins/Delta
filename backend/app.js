const express = require('express');

const app = express();


app.use('/api/gets',(req, res, next) => {
const gets = [
	{id: 'akdjalkd',  // placeholder until dB finished
	 city: 'Las Vegas',
	 state: 'NV',
	 departure: '10:15 am',
	 arrival: '11:30 am' }
];
	res.status(200).json({
		message: 'Posts fetched successfully!',
		gets: gets
   });
});

module.exports = app;
