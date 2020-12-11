exports.seed = async function (knex) {
  await knex('listings').truncate()

}
