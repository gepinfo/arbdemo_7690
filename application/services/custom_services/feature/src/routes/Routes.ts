import { Request, Response, NextFunction } from "express";
import { entityController } from '../controller/entityController';


export class Routes {
    private entity: entityController = new entityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/entity/:id').delete(this.entity.GpDelete);
app.route('/entity/get/search').get(this.entity.GpSearch);
app.route('/entity/get/update').put(this.entity.GpSearchForUpdate);
app.route('/entity').put(this.entity.GpUpdate);
app.route('/entity/:id').get(this.entity.GpGetNounById);
app.route('/entity').get(this.entity.GpGetAllValues);
app.route('/entity').post(this.entity.GpCreate);
app.route('/entity/get/searchrelationship').get(this.entity.GpSearchRelationship);
app.route('/entity/userid/created_by').get(this.entity.GpGetNounCreatedBy);
     }

}