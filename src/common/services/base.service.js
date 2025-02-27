import { Types } from "mongoose";
import { CommonException } from "../exeption/index.js";



export const BaseService = class BaseService {
    constructor(model){
        this.model = model
    }

    async create(data, options = {}){
        data.createdAt = new Date()
        data.updatedAt = new Date()
        const document = await this.model.create(data)
        return document?._id
    }

    async updateOne(id, data, options = {}){
        try {
            id = new Types.ObjectId(id)
            data.updatedAt = new Date()
            return await this.model.updateOne({_id: id},{$set: data}, options)

        } catch (error) {
            console.log(error.message);
        }
    }

    async softUpdateOne(id , data){
        try {
            id = new Types.ObjectId(id)
            return await this.model.updateOne({_id: id}, data)
        } catch (error) {
            console.log(error.message);
            
        }
    }

    async updateMany(query, data){
        try {
            data.updatedAt = new Date()
            return await this.model.updateMany(query, {$set: data})
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteOne(id){
        try {
            id = new Types.ObjectId(id)
            return await this.model.updateOne({_id: id}, {$set: {deletedAt: new Date()}})
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteMany(query){
        try {
            query.deletedAt = 0
            return await this.model.updateMany(query, {$set: {deletedAt: new Date()}})
        } catch (error) {
            console.log(error.message)
        }
    }
    async softDeleteOne(id){
        try {
            id = new Types.ObjectId(id)
            return await this.model.deleteOne({_id: id})
        } catch (error) {
            console.log(error);
            
        }
    }

    async findOne(query , options ={}){
        try {
            query.deletedAt = 0
            return await this.model.findOne(query , options)
        } catch (error) {
            console.log(error.message);
        }
    }

    async findById(id, options = {}){
        id = new Types.ObjectId(id)
        const doc = await this.model.findOne({_id:id , deletedAt:0}, options)
        if(!doc) return false
        return doc

    }

    async findWithId(id, options = {}){
        id = new Types.ObjectId(id)
        const doc = await this.model.findById(id, options)
        if(!doc || doc.deletedAt) throw new Error('document not found')
        return doc

    }

    async findByQuery(query, options = {}){
        try {
            return await this.model.find(query, options)
        } catch (error) {
            console.log(error.message);
        }
    }

    async aggregate(query, pipeline, options = {}){
        try {
            const $match = {
                $match: {
                    ...query,
                    deletedAt: 0
                }
            }


            const mainPipeline = [$match, ...pipeline]
            return await this.model.aggregate(mainPipeline,options)

        } catch (error) {
            console.log(error);
            throw CommonException.Unknown(error.message)
        }
    }

    async findPaging(query,data,additional_pipeline = [
            {
                $project: {
                    __v: 0,
                },
            },
        ],
    ) {
        try {
            const {limit = 10, page = 1, sortBy, asc} = data;

            const $match = {
                $match: query,
            };
        
            const $sort = {
                $sort: {
                    createdAt: -1,
                },
            };
        
            if (sortBy) {
                $sort.$sort[`${sortBy}`] = asc > 0 ? 1 : -1;
            }
        
            const $skip = {
                $skip: limit * (page - 1),
            };
        
            const $limit = {
                $limit: limit,
            };
        
            let pipeline = [$match, $sort, $skip, $limit];
        
            if (additional_pipeline.length > 0) {
                pipeline = [...pipeline, ...additional_pipeline];
            }
        
            console.log(123, JSON.stringify(pipeline, null, 4));
        
        
            const result = await this.model
                .aggregate(pipeline)
                .exec();
        
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
    async populate(query, path, select, model){
        return await this.model.find(query).populate({
            path: path,
            select: select,
            model: model
        }).exec()
    }

}
