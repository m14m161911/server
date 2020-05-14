let express = require('express');
let morgan = require('morgan');
let bp = require('body-parser');
let cors = require('cors');
const port = 8000;

const app = express();

app.use(cors());

if (!process.env.NODE_ENV === "test") app.use(morgan('dev'));
app.use(
    bp.json({
        parameterLimit: 100000,
        limit: '50mb',
        extend: true
    })
)

app.use('/fish', function (req, res, next) {
    res.status(200).json({
        results: fish.length,
        data: fish
    })
});

app.use('/fish/:id', function(req, res, next){
    
    let result - fish.find((f) => f.id == req.params.id);

})

if (!process.env.NODE_ENV === "test") {
    app.listen(port, () => {
        console.log(`we are live on ${port}!`);
    });
}

