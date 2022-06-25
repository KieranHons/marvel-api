import { Injectable } from '@angular/core';
import {CollectionModel} from "../models/collection.model";

@Injectable({
  providedIn: 'root'
})
export class RandomStoryService {

  constructor() {}

  pickStoryIdFromList(stories: CollectionModel):String
  {
    let max = stories.returned;
    return stories.items[Math.floor(Math.random() * max)].resourceURI;
  }
}
