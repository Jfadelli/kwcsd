
exports.up = async function (knex) {
    await knex.schema.createTable('listings', tbl => {
        tbl.increments()
        tbl.string('img')
        tbl.string('address')
        tbl.string('link').unique()
        tbl.integer('price')
        tbl.string('description')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('listings')
};
