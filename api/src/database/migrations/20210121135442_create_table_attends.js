exports.up = (knex) => knex.schema.createTable('attends', table => {
    table.increments('id')

    table.string('name').unique().notNullable()
    table.string('phone').unique().notNullable()
    table.string('email').unique()

    table.boolean('isAvaliable').unique()

    //fk - hours
    table.integer('hour_id').unsigned().notNullable();
    table.foreign('hour_id').references('hours.id')
    

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
  })

exports.down = knex => knex.schema.dropTable('Attends');
