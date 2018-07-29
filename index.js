// var rect = {
//     perimeter : (x,y) => 2*(x+y),
//     area : (x,y) => x*y
// };

var rect = require('./rectangle');

function solveRect(l,b){
    console.log("solving for l= "+l+" b = "+b);
    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("error = ", err.message);
        }
        else
        {
            console.log("Area of l ="+l+" b = "+b +" is = "+rectangle.area());
            console.log("Perimeter of l ="+l+" b = "+b +" is = "+rectangle.perimeter());
        }
    });
   // console.log("This will be printed first");
}

solveRect(22,4);
solveRect(4,2);