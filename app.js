var bodyParser = require('body-parser'),
    express = require('express'),
    multer = require('multer'),
    cors = require('cors'),
    app = express();

var upload = multer({ dest: 'uploads/' });

app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.render('home'); 
});

app.post('/upload', upload.single('file'), function(req, res, next) {
   var fileSize = req.file.size;
   return res.json({'file size': fileSize});
});


var port = process.env.PORT || 3000;
app.listen(port);