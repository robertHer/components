import { Component, OnInit } from '@angular/core';
import { Duplex } from 'stream';

@Component({
  // selector: 'app-servers',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus:string = 'No server was created';
  serverName:string;
  serverCreated:boolean = false;
  servers = ['testserver', 'testserver2']
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'new server was created. Name is' + this.serverName; 
    this.servers.push()
  }

  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
