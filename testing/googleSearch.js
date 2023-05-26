const googleDataBase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catspictures.com",
  "myfavouritecats.com",
  "myfavouritecats2",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((match) => {
    return match.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cats", googleDataBase));
module.exports = googleSearch;
