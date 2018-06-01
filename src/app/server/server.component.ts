import { Component } from "@angular/core";

@Component({

    selector:"app-server",
    templateUrl:"./server.component.html",
    styles: [`
    .standard{
        color: blue;
        font-size: 24px;
    }
    .online{
        color:white;
        font-size: 30px;
    }
    `]
})

export class ServerComponent {
    serverId:number = 10
    serverStatus:string   
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        
    }

    getServerStatus(){
        return this.serverStatus;
    }
getBackgroundColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'

}

    // getColor(){
    //     return this.serverStatus === 'online' ? 'white' : 'yellow'
    // }
    
}