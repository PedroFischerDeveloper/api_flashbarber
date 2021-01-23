exports.up = (knex) => knex.schema.createTable('attends', table => {
    table.increments('id')

    table.string('name').unique().notNullable()
    table.string('phone').unique().notNullable()
    table.string('email').unique()

    table.boolean('isAvaliable')
    table.boolean('today')
    table.boolean('week')
    table.text('description')

    //fk - client
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id')

    //fk - service provider
    table.integer('service_provider_id').unsigned().notNullable();
    table.foreign('service_provider_id').references('service_provider.id')
    

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
  })

exports.down = knex => knex.schema.dropTable('attends');
