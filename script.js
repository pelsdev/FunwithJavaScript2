'use strict';

const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(2,2,2));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolpins, avgKoalas){
    if (avgDolpins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolpins}) vs. (${avgKoalas})`);
    }else if  (avgKoalas >= 2 * avgDolpins){
        console.log(`koalas win (${avgKoalas}) vs. (${avgDolpins})`);
    }else {
        console.log(`No team wins....`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 135);