
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        { id: 1, address: '6969 Home Street', img: "null", link: "null", price: 100, description: "it's on the sidewalk" },

      ]);
    });
};
