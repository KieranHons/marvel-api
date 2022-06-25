import {ResourceModel} from "./resource.model";

export interface CollectionModel {
  available: number;
  collectionURI: String;
  items: ResourceModel[];
  returned: number;
}
