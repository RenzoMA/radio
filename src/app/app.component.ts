import { Component, OnInit } from "@angular/core";
import { RadioService } from "./services/radio.service";
import { RadioCancion } from "./models/radio-cancion.model";
import { interval } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  items: RadioCancion[] = [];
  source = interval(5000);
  constructor(private radioService: RadioService) {}
  ngOnInit(): void {
    this.getData();
    this.source.subscribe(() => {
      this.getData();
    });
  }
  getData() {
    this.radioService.getData().subscribe((items) => {
      this.items = items;
    });
  }
}
