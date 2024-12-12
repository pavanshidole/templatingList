import { Component } from "@angular/core";



@Component({
    selector:"app-numberstr",
    templateUrl:"./numberstr.component.html",
    styleUrls:["./numberstr.component.scss"],
})

export class NumberstrComponent{
    numberstr:Array<string>=["one","two","three","four"];
}