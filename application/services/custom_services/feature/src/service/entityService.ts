import { Request, Response } from 'express';
import {entityDao} from '../dao/entityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let entity = new entityDao();

export class entityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpDelete')
     let  entityId = req.params.id;
     entity.GpDelete(entityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpSearch')
     let  entityData = req.query;
     entity.GpSearch(entityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpSearchForUpdate')
     let  entityData = req.body;
     entity.GpSearchForUpdate(entityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpUpdate')
     let  entityData = req.body;
     entity.GpUpdate(entityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpGetNounById')
     let  entityId = req.params.id;
     entity.GpGetNounById(entityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpGetAllValues')
     
     entity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpCreate')
     let  entityData = req.body;
     entity.GpCreate(entityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpSearchRelationship')
     let  entityData = req.query;
     entity.GpSearchRelationship(entityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityService.ts: GpGetNounCreatedBy')
     let  entityData = { created_by: req.query.createdby };
     entity.GpGetNounCreatedBy(entityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}