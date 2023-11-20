import React from 'react'

function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};
alice.salary = alice['salary'] + 20000

  return (
    <>
    <h3>Filter Function</h3>
    numbersGreaterThan2 = {numbersGreaterThan2} <br/>
    evenNumbers = {evenNumbers} <br/>
    oddNumbers = {oddNumbers} <br/>
    salary = {alice.salary}
  

    </>
  )
}

export default FilterFunction