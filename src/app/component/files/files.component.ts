import { Component } from "@angular/core";


@Component({
    selector:"app-files",
    templateUrl:"./files.component.html",
    styleUrls:["./files.component.scss"],
})

export class FilesComponent{
    filesArr:Array<string>=["index.html","style.css","app.js"];
}