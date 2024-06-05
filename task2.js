const names = [
    'Abigail','Alexandra','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deirdre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope'
  ];
  
  function searchNames(names, query, limit, callback) {
    const results = [];
    let count = 0;
  
    for (let i = 0; i < names.length; i++) {
      if (count === limit) break;
      if (names[i].indexOf(query) !== -1) {
        results.push(names[i]);
        count++;
      }
    }
  
    callback(results);
  }

  function displayResults(results) {
    if (results.length === 0) {
      console.log("tidak ada nama yang sama");
    } else {
      console.log("nama yang sama: ");
      for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
      }
    }
  }
  
  const searchTerm = "el";
  const limitResults = 3;
  searchNames(names, searchTerm, limitResults, displayResults);
  
