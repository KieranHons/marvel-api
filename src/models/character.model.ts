import {CollectionModel} from "./collection.model";

export interface CharacterModel {
  comics: CollectionModel;
  description: String;
  events: CollectionModel
  id: number;
  modified: String;
  name: String;
  resourceURI: String;
  series: CollectionModel
  stories: CollectionModel
  thumbnail: {path: String, extension: String}
  urls: {type: String, url: String}
}
