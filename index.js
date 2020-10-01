
var rect = require('./rectangle');


function solverect(l,b)
{
    console.log("solving for rectangle with l = " + l   + " and b = " + b);
    rect(l,b, (err,rect,rectangle) => {
        if (err)
        {
            console.log("error: ", err.message);
        }
        else {
            console.log(" the area of rectangle of dimension l = " + l + " and b + " + b + " is " + rectangle.area() );
            console.log(" the perimeter of rectangle of dimension l = " + l + " and b + " + b + " is " + rectangle.perimeter() );
    }

    });
    console.log(" this statement after the call to rect()");
};

solverect(2,4);
solverect(3,5);
solverect(0,5);
solverect(-3,5);
