import { JsonObject, JsonProperty } from 'json2typescript';
import Item from './Item';

@JsonObject('Obj')
export default class Obj {
  @JsonProperty('items', [Item], true)
  public items: Item[]|undefined = undefined;
}



