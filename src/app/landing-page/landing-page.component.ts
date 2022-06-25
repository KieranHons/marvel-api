import { Component } from '@angular/core';
import {MarvelAPIService} from "../../services/marvel-api.service";
import {CharacterModel} from "../../models/character.model";
import {ResourceModel} from "../../models/resource.model";
import {RandomStoryService} from "../../services/random-story.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  attributionText = '';
  mainName = 'Starfox';
  main = {} as CharacterModel;
  characters = [] as ResourceModel[];
  extraCharacters = [] as CharacterModel[];
  story = {title: '', description: ''};
  showStory = false;

  constructor(
    private marvelAPIService : MarvelAPIService,
    private randomStoryService : RandomStoryService
  ) {
    let storyURI: String;
    this.marvelAPIService.getMain(this.mainName).subscribe((result)=>{
      this.attributionText = result.attributionText;
      this.main = result.data.results[0];
      storyURI = this.randomStoryService.pickStoryIdFromList(this.main.stories);
      this.marvelAPIService.getStoryByURI(storyURI).subscribe((result)=>{
        let res = result.data.results[0];
        this.story = {title: res.title, description: res.description || 'Unfortunately there is no story description'};
        let allChars: ResourceModel[] = res.characters.items;
        this.characters = allChars.filter(x => x.name !== this.mainName);
        let count = 0;
        this.characters.forEach(charItem => {
          this.marvelAPIService.getCharacterByURI(charItem.resourceURI).subscribe((result)=>{
            this.extraCharacters.push(result.data.results[0]);
            count++;
            this.showStory = count === this.characters.length;
          })
        })
      });
    });
  }

}
