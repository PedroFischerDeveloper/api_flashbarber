exports.up = (knex) => knex.schema.createTable('hours', table => {
    table.increments('id')

    table.string('workHour').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
  })

exports.down = knex => knex.schema.dropTable('hours');
