var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};  
function solverect(l,b)
{   if (l <= 0 && b <= 0)
    {
    console.log("rectangle dimension should be greater than zero: l = " + l + " and b = "+ b);
    
}
else
{
    console.log("the area of rectangle  is " + rect.area(l,b));
    console.log("the perimeter of rectangle is " + rect.perimeter(l,b));
}
}
solverect(2,4);
solverect(3,5);
solverect(0,5);
solverect(-3,5);
