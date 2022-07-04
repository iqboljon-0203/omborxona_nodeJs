const dash=require("./dash");
const dep = require("./dep");
const sell = require("./sell");
const action=process.argv[2];
async function app(){
    switch (action){
        case undefined:
            await dash();
            break;
        case '--dep':{
            const product_name=process.argv[3];
            const count =Number(process.argv[4]);
            await dep(product_name,count)
            break;
        }
        case '--sell':{
            const product_name=process.argv[3];
            const count =Number(process.argv[4]);
            await sell(product_name,count)
            break;
        }
        default:
            break;
    }
}
app();
