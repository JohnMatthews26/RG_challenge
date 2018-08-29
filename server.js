let express = require('express');
let path = require('path');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
	 res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
});
