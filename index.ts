import { JsonConvert } from 'json2typescript';
import Obj from './Obj';
import Item from './Item';

// create object representation of model
const jsonObj: object = {
  'items': [
    {
      'bar': 'somestring'
    }
  ]
};
// init the converter
let jsonConvert = new JsonConvert();
// attempt to create an Obj instance from the JS object
// error gets thrown here
let convertedObject: Obj = jsonConvert.deserializeObject(jsonObj, Obj);
// log out the obj
console.log(convertedObject);
// check to make sure that the "items" on the obj are actual instances of Item by calling method in class
if (convertedObject.items) {
  convertedObject.items.map(item => console.log(item.getBar()));
}
