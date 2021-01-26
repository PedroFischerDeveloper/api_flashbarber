import knex from '../database/index';

export default class Paginate {
    async paginate(table, perPage, offset, page) {
      
        let pagination = {
            total: "",
            perPage: 0,
            offset: 0,
            to: 0,
            lastPage: 0,
            currentPage: 0,
            result: [],
            from: 0
        }

        return await Promise.all([
            knex.count('* as count').from(`${table}`).first(),
            knex.select("*").from(`${table}`).offset(offset).limit(perPage)
        ]).then(([total, rows]) => {
            var count = total.count;
            var rows = rows;
            pagination.total = count;
            pagination.perPage = perPage;
            pagination.offset = offset;
            pagination.to = offset + rows.length;
            pagination.lastPage = Math.ceil(count / perPage);
            pagination.currentPage = page;
            pagination.from = offset;
            pagination.result = rows;
           
        });
    }
}