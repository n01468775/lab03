var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 03 - CPAN 212' });
});

router.get('/generate-image', function(req, res, next) {
  res.render('form', { title: 'Image Form'})
})

router.post('/generate-image', function(req,res,next) {
  const{height, width, blur, grayscale}=req.body;
  const image = `https://picsum.photos/${width}/${height}?${grayscale ? 'grayscale&' : ''}${blur ? `blur==${blur}` : ''}`;
  res.render('form', {
    image
  })
})

router.get('/generate-qr-code', function(req, res, next) {
  res.render('qr', { title: 'QR Code Form'})
})

router.post('/generate-qr-code', function(req,res,next) {
  const{height, width, value}=req.body;
  const img = `https://image-charts.com/chart?chs=${width}x${height}&cht=qr&chl=${encodeURIComponent(value)}`;
  res.render('qr', {
    img
  })
})

module.exports = router;
