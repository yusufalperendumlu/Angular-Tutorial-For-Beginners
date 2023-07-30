import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IUsers {
  id: number;
  name: string;
  age: number;
  type: string;
  isBool: boolean;
  isStylish: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string;
  // numberOne: number = 1;
  // numberTwo: number = 2;
  // togglePokemon: boolean = false;

  // constructor() {
  //   this.title = 'Alperen';
  // }

  // title: string = "Basket of baby beavers";
  // imgSrc: string = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nba.com%2F&psig=AOvVaw0p5ihR89gNrafpK1MBJ3El&ust=1690609814721000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPD2073asIADFQAAAAAdAAAAABAE"

  // favoriteAnimal: string = "turtle";

  // pokemonName: string = "";
  // isEmpty: any = "";

  // constructor() {
  //   console.log("Constructor called");
  // }

  // handleClick(value: any){
  //   if (value.trim() === this.isEmpty) {
  //        return console.log("Empty");
  //   }

  //   console.log(value.trim());    
  // }

    

  userName: string = "";

  constructor() {

  }

  handleChange(e: any) {
    this.userName = e.target.value;
  }


}
