    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

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

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of countries for deaths is over 5k
    const five = countries.filter(country => (country.deaths >= 5000));
    console.table(five);

    // 1.1 Filter the list of countries for deaths is over 50k
    const fifty = countries.filter(country => (country.cases >= 50000));
    console.table(fifty);

    // Array.prototype.map()
    // 2. Give us an array of the countries data
    const fullData = countries.map(country => `${country.name} ${country.cases} ${country.deaths} ${country.recovered}`);
    console.log(fullData);

    // 3. Sort the countries for numbers of recovered
    const ordered = countries.sort((a, b) => a.recovered > b.recovered ? 1 : -1);
    console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many deaths have this countries
    const Possibledeaths = countries.reduce((total, country) => {
      return total + (country.cases - country.recovered);
    }, 0);

    console.log("Possible Deaths: " + Possibledeaths);

    // 5. Sort the countries by deaths
    const nDeaths = countries.sort(function(a, b) {
      const deathsCountry = a.deaths;
      const nextCountry = b.deaths;
      return deathsCountry > nextCountry ? -1 : 1;
    });
    console.table(nDeaths);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = countries.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);