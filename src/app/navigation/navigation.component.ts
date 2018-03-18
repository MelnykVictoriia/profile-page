import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  navItems: any[];

  constructor() {
    this.navItems = [
      {
        name: "About",
        path: "/"
      },
      {
        name: "Education",
        path: "/education"
      },
      {
        name: "Skills",
        path: "/skills"
      }
    ];
  }

  toggleNav(): void {
    document.querySelector("nav .collapse").classList.toggle("show");
  }

  closeNav(): void {
    document.querySelector("nav .collapse").classList.remove("show");
  }

  ngOnInit() {}
}
