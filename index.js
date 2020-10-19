let fs = require('fs');
let CodeGen = require('swagger-js-codegen').CodeGen;
let file = 'swagger/metamodell.json';
let swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
let nodejsSourceCode = CodeGen.getNodeCode({ className: 'Test', swagger: swagger });
let angularjsSourceCode = CodeGen.getAngularCode({ className: 'Test', swagger: swagger });
let reactjsSourceCode = CodeGen.getReactCode({ className: 'Test', swagger: swagger });
let tsSourceCode = CodeGen.getTypescriptCode({ className: 'Test', swagger: swagger, imports: ['../../typings/tsd.d.ts'] });
//console.log(nodejsSourceCode);
//console.log(angularjsSourceCode);
//console.log(reactjsSourceCode);
//console.log(tsSourceCode);
/*
fs.writeFile("filename.js", nodejsSourceCode, "utf-8", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("worked");
    }
});
*/

let generatedClient = new Function (nodejsSourceCode);
let products = generatedClient.listProductsUsingGET()
console.log(products);