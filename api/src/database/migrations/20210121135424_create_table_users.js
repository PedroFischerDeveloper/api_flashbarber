
exports.up = (knex) => knex.schema.createTable('users', table => {
    table.increments('id')
  
    table.string('name').notNullable()
    table.string('email').unique()
    table.string('password').unique()

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
  })

exports.down = knex => knex.schema.dropTable('users');

