function halved(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}
halved(5);

function squareNumber(num) {
    var squaredNumber = num ** 2;
    console.log('Squaring the number of ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}
squareNumber(2.5);

function circleArea(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with R' + radius + ' is ' + area);
    return area;
}
circleArea(2.5);

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}
percentOf(2.5, 5);


function operation(num) {
    var half    = halved(num);
    var squared = squareNumber(half);
    var area    = circleArea(squared);
    var result  = percentOf(squared, area);
}
