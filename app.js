
// CJS esetén a package.json - ban ne szerepeljen a type: module
// const http = require('http');
// const car = require('./car')
// const cars = require('./cars')


//ESM esetén a package.json - ban szerepeljen a type: module

import http from 'http'
import motorcycle  from './motorcycle.js'
import {kawasaki, honda } from './motorcycles.js'

const server = http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    //CJS
    // if( req.url === '/audi' ) {
    //     res.end(car('Audi'))
    // }
    // else if( req.url === '/mercedes' ) {
    //     res.end( cars.mercedes )
    // }
    // else if( req.url === '/volvo' ) {
    //     res.end( cars.volvo )
    // }
    
    //ESM
    //else 
    if( req.url === '/ducati' ) {
        res.end( motorcycle('Ducati') )
    }
    else if( req.url === '/kawasaki' ) {
        res.end( kawasaki )
    }
    else if( req.url === '/honda' ) {
        res.end( honda )
    }
})

server.listen(3000, "localhost", ()=>console.log('Server is running'))