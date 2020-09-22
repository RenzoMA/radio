import { Component, OnInit } from "@angular/core";
import { RadioService } from "./services/radio.service";
import { RadioCancion } from "./models/radio-cancion.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  items: RadioCancion[] = [];
  constructor(private radioService: RadioService) {}
  ngOnInit(): void {
    this.radioService.getData().subscribe((items) => {
      this.items = items;
    });
  }
}
