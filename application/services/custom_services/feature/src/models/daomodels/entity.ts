
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const entitySchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   name: String,
   age: Number
})

const entityModel = mongoose.model('entity', entitySchema, 'entity');
export default entityModel;
