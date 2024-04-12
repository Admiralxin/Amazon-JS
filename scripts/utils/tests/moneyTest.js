import {formatCurrency} from '../money.js';


console.log('Test Suite:  FormatCunrrency');
console.log('converts cents into dollars');
if (formatCurrency(2095) === '20.95'){
  console.log('Passed');
}else{
  console.log('Failed');
}

console.log('Works with 0')
if (formatCurrency(0) === '0.00'){
  console.log('Passed');
}else{
  console.log('Failed');
}

console.log('Rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log('Passed');
}else{
  console.log('Failed');
}