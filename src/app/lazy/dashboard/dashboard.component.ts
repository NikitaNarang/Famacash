import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public editOptions: EditSettingsModel = {allowAdding: true, allowEditing:true, allowDeleting: true, mode: "Normal"};
  // public toolbarOptions: ToolbarItem[] = ['Add', 'Edit','Delete', 'Update', 'Cancel'];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public data: object[] = [
    {
      name: "Famacash",
      email: "famacash@gmail.com",
      mobile: "9999999999"
    },
    {
      name: "Nikita",
      email: "nikita@gmail.com",
      mobile: "8888888888"
    },
    {
      name: "Test",
      email: "test@gmail.com",
      mobile: "7777777777"
    },
    {
      name: "Dummy",
      email: "dummy@gmail.com",
      mobile: "6666666666"
    },

  ]

  constructor() { }

  ngOnInit() {
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

}
