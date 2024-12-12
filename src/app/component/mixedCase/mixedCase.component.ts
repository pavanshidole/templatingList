import { Component } from "@angular/core";





@Component({
    selector:"app-mixedCase",
    templateUrl:"./mixedCase.component.html",
    styleUrls:["./mixedCase.component.scss"],
})


export class MixedCaseComponent{
    mixedCaseArr:Array<string>=["hello","world","javascript","array"];
}