import { Component } from "@angular/core";



@Component({
    selector:"app-fruits",
    templateUrl:"./fruits.component.html",
    styleUrls:["./fruits.component.scss"],
})



export class FruitsComponent{
    fruitsArr:Array<string>=["apple", "mango","banana","cherry"];
}