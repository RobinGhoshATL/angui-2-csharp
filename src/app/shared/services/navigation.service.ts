import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
    constructor(
  ) {}

 // assign dynamic menus
 dynamicMenu: IMenuItem[]=[{
  name: "Dashboard",
  type: "link",
  tooltip: "Dashboard",
  icon: "dashboard",
  state: "dashboard/default"
}];

userMenu: IMenuItem = 
  {
    name: "Clients",
    type: "dropDown",
    tooltip: "Clients",
    icon: "group",
    state: "dashboard/clients",
    sub: [
      { name: "Client Details", state: "details" },
      { name: "Charts", state: "charts" }
    ]
  };

 migrationMenu: IMenuItem = 
  {
    name: "Migrations",
    type: "dropDown",
    tooltip: "Migrations",
    icon: "mediation",
    state: "dashboard/migrations",
    sub: [
      { name: "Migration Configuration", state: "configuration" },
      { name: "Migrate Clients", state: "steps" },
      { name: "View logs", state: "logs" },
    ]
  };

  systemServiceMenu: IMenuItem = 
  {
    name: "Windows Services",
    type: "link",
    tooltip: "Windows Services",
    icon: "settings",
    state: "dashboard/system-services",
    sub: [
      { name: "Service Listings", state: "" },
      { name: "PS Script Run", state: "ps_script" },
      { name: "DB Connect", state: "dbconnect" }
    ]
  }
  PowerShellScriptingMenu: IMenuItem = 
  {
    name: "Run PowerShell Script",
    type: "link",
    tooltip: "PowerShellScripting",
    icon: "description",
    state: "dashboard/ps-scripts",
    sub: [
      { name: "Client Details", state: "details" },
      { name: "Charts", state: "charts" }
    ]
  }
  DBConnection: IMenuItem = 
  {
    name: "Database Connection",
    type: "link",
    tooltip: "Database Connection",
    icon: "format_list_bulleted",
    state: "dashboard/db-connect",
    sub: [
      { name: "Client Details", state: "details" },
      { name: "Charts", state: "charts" }
    ]
  }
editorMenu: IMenuItem = 
  {
    name: "Editor",
    type: "link",
    tooltip: "Editor",
    icon: "mediation",
    state: "dashboard/editors"
  };

plainMenu: IMenuItem=
  {
    name: "DASHBOARD",
    type: "link",
    tooltip: "Dashboard",
    icon: "dashboard",
    state: "dashboard"
  };
  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;

  
  menuItems = new BehaviorSubject<IMenuItem[]>(this.dynamicMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  publishNavigationChange(roles: []) {

    this.dynamicMenu.push(this.systemServiceMenu);
            this.dynamicMenu.push(this.PowerShellScriptingMenu);
            this.dynamicMenu.push(this.DBConnection);
    // roles.forEach(menuType => {
    //   switch (menuType) {
    //     case "admin":{
    //       if(!this.dynamicMenu.includes(this.systemServiceMenu)){
    //         this.dynamicMenu.push(this.systemServiceMenu);
    //         this.dynamicMenu.push(this.PowerShellScriptingMenu);
    //         this.dynamicMenu.push(this.DBConnection);
    //       }
    //     } 
    //     break;
    //     case "user":{
    //       if(!this.dynamicMenu.includes(this.systemServiceMenu)){
    //         this.dynamicMenu.push(this.systemServiceMenu);
    //         this.dynamicMenu.push(this.PowerShellScriptingMenu);
    //         this.dynamicMenu.push(this.DBConnection);
    //       }
    //     }
    //     break;
       
        
    //     default:
    //     console.log("User roles not found!")
    //   }
    // });
  }
}
