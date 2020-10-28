import React from 'react';

const ObjectAndArrays = () => {
  // start with strings, numbers and booleans
  let age = 100;
  let age2 = age;
  console.log(age, age2);
  age = 200;
  console.log(age, age2);

  let name = 'Wes';
  let name2 = name;
  console.log(name, name2);
  name = 'Wesley';
  console.log(name, name2);



  // Let's say we have an array and we want to make a copy of it.
  const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
  // You might think we can just do something like this:
  const team = players;
  console.log(players, team);
  team[3] = 'Lux';
  console.log(players, team);
  // BUT, this changes the original array as well, because team is just a reference

  // So, how do we fix this? We take a copy instead!
  // const team2 = players.slice();
  // const team3 = [].concat(players);
  // const team4 = [...players];
  // const team5 = Array.from(players);




  // The same thing goes for objects, let's say we have a person object
  const person = {
    name: 'Wes Bos',
    age: 80
  };
  // const captain = person;
  const cap2 = Object.assign({}, person, { number: 99, age: 12 });
  console.log(person, cap2);
  // const cap3 = { ...person };
  // Not, ^^ this is a shallow copy
  // const dev2 = JSON.parse(JSON.stringify(person));
  // ^ Does deep clone but not recommended

  return (
    <div className="content-container">
      <h1>JS Reference vs. Copy</h1>
      <p>Not much to see here! Some code output in console →</p>
    </div>
  );
};

export default ObjectAndArrays;
