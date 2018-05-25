var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];

average(scores);
average(scores2);

function average(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    
    return console.log(sum/numbers.length);
}