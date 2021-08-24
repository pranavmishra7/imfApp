import { Injectable } from '@angular/core';
import * as mongoose from 'mongoose';
import bodyParser from "body-parser";

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor() {
   // this.connectdb()
   }
  connectdb(){
    mongoose.connect('mongodb+srv://pranav:Varanasi@07@imfapp.jpxdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useFindAndModify: false})
    .then(() =>  console.log('connection successful'))
    .catch((err) => console.error(err));

  }
}
