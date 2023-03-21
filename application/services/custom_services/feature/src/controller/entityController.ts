import { Request, Response } from 'express';
import { entityService } from '../service/entityService';
import { CustomLogger } from '../config/Logger'
let entity = new entityService();

export class entityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpCreate');
    })}
public GpSearchRelationship(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpSearchRelationship');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityController.ts: GpGetNounCreatedBy');
    })}


}