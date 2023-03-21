import * as mongoose from 'mongoose';
import entityModel from '../models/daomodels/entity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class entityDao {
    private entity = entityModel;
    constructor() { }
    
    public async GpDelete(entityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpDelete');

    

    
    
    
    this.entity.findByIdAndRemove(entityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(entityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(entityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.entity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(entityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.entity.findOneAndUpdate({ _id: entityData._id }, entityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(entityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpUpdate');

    

    
    
    
    this.entity.findOneAndUpdate({ _id: entityData._id }, entityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(entityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpGetNounById');

    

    
    
    
    this.entity.findById(entityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpGetNounById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpGetAllValues');

    

    
    
    
    this.entity.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(entityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpCreate');

    let temp = new entityModel(entityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(entityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(entityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.entity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpSearchRelationship');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(entityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.entity.aggregate(([
                        { $match: { $and: [{ created_by: entityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}