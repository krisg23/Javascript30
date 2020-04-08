    // ## Array Cardio Day 2

    /*const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];*/

    const countries = [
      { name: 'US', cases: 311301, deaths: 8452, recovered: 14694 },
      { name: 'Spain', cases: 126168, deaths: 11947, recovered: 34219 },
      { name: 'Italy', cases: 124632, deaths: 15362, recovered: 20996 },
      { name: 'Germany', cases: 96092, deaths: 1444, recovered: 26400 },
      { name: 'France', cases: 90848, deaths: 7560, recovered: 15572 },
      { name: 'China', cases: 82543, deaths: 3329, recovered: 76946 },
      { name: 'Iran', cases: 55743, deaths: 3452, recovered: 19736 },
      { name: 'United Kingdom', cases: 42479, deaths: 4313, recovered: 215 },
      { name: 'Turkey', cases: 23934, deaths: 501, recovered: 786 },
      { name: 'Switzerland', cases: 20505, deaths: 666, recovered: 6415 },
      { name: 'Belgium', cases: 18431, deaths: 1283, recovered: 3247 },
      { name: 'Netherlands', cases: 16727, deaths: 1651, recovered: 262 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19?
    // const isAdult = people.some(function(person) {
    //   const currentYear = (new Date()).getFullYear();
    //   if(currentYear - person.year >= 19) {
    //     return true;
    //   }
    // });

    const isDanger = countries.some(country => (country.cases >=100000));

    console.log({isDanger});
    // Array.prototype.every() // is everyone 19?

    const allSave = countries.every(country => (country.deaths <=5000));
    console.log({allSave});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423


    const comment = comments.find(comment => comment.id === 823423);

    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // comments.splice(index, 1);

    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];
