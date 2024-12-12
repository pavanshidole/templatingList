import { Component } from "@angular/core";


@Component({
    selector:"app-colors",
    templateUrl:"./colors.component.html",
    styleUrls:["./colors.component.scss"],
})

export class ColorsComponent{
    colorsArr:Array<string>=["red","green","yellow","blue","pink","orange","white","black"];
}