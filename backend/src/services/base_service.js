class Base {
    constructor(model) {
        this.model = model;
    }

    createOne({ query }) {
        return this.model.create(query);
    }

    createMany({ list }) {
        console.log(typeof [...list])
        return this.model.insertMany([...list]);
    }

    async findOne({ query = {}, populate = [] }) {
        let result = this.model.findOne(query);
        populate.forEach(element => {
            result = result.populate(element);
        });
        const res = await result;
        return res;
    }

    async findMany({ query = {}, populate = [] }) {
        let result = this.model.find(query);
        populate.forEach(element => {
            result = result.populate(element);
        });
        const res = await result;
        return res;
    }

    async findPagination({ query = {}, limit = 50, offset = 0, sort = '_id', populate = [] }) {
        let q = query;
        if (!query) {
            q = {};
        }
        const count = await this.model.find(q).count();
        let results = this.model
            .find(q)
            .limit(+limit)
            .skip(+offset)
            .sort(sort);

        populate.forEach(element => {
            results = results.populate(element);
        });

        const res = await results;
        return { result: res, count };
    }

    updateOne({ query, body }) {
        return this.model.findOneAndUpdate(
            query,
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    updateMany({ query, body }) {
        return this.model.updateMany(
            query,
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    deleteOne({ query }) {
        return this.model.findOneAndDelete(query._id);
    }

    deleteMany({ query }) {
        return this.model.deleteMany(query);
    }
}

module.exports = Base;
