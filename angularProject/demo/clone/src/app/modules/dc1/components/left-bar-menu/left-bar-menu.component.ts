import { Component, OnInit } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-left-bar-menu',
  templateUrl: './left-bar-menu.component.html',
  styleUrl: './left-bar-menu.component.css'
})
export class LeftBarMenuComponent implements OnInit {
  fullPermission!: Boolean;
  userRole!: String;
  userPermission = {
    "id": 22,
    "userId": "49",
    "receiver": "full",
    "register": "full",
    "DC1": "full",
    "pharmaDimension": "full",
    "photographer": "full",
    "DC2": "full",
    "vendor": "full",
    "QC": "full",
    "release": "full",
    "QA": "full",
    "admin": "full",
    "serviceType": "all",
    "createdAt": "2023-06-12T12:11:07.856Z",
    "updatedAt": "2023-06-12T12:11:07.856Z",
    "pharmaPhotographer": "full"
  }

  ngOnInit(): void {
    if (this.userPermission['DC1'] === 'full' && this.userPermission['pharmaDimension'] === 'full') this.fullPermission = true
    this.userRole = 'admin'
    if (this.userRole === 'Qaphoto' && this.userRole === 'QaEdit' && this.userRole === 'QC') this.userRole = 'pharamaDimension'
  }



}
