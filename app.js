const { multiplicar } = require('./helpers/multiplicar');
const  argv = require('./config/yargs');


console.clear();



//console.log(argv);

//console.log('base: yargs', argv.b);

//let base = 4

multiplicar(argv.b, argv.l, argv.h)
    .then(nom => console.log(nom, 'creado'))
    .catch(err => console.log(err));
