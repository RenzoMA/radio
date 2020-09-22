import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { RadioCancion } from "../../models/radio-cancion.model";
import * as moment from "moment";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-radio-card",
  templateUrl: "./radio-card.component.html",
  styleUrls: ["./radio-card.component.scss"],
})
export class RadioCardComponent implements OnInit, OnDestroy {
  @Input() item: RadioCancion;
  @Output() completed: EventEmitter<void> = new EventEmitter<void>();

  autoTicks = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;
  source = interval(1000);
  subs: Subscription;
  constructor() {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.setCurrentValue();
    this.subs = this.source.subscribe(() => {
      this.setCurrentValue();
    });
  }
  getDurationInSeconds() {
    return this.item.Duracion;
  }

  setCurrentValue() {
    const inicio = moment(this.item.FechaHoraInicio);
    const fin = moment(this.item.FechaHoraFin);
    const now = moment();
    const endDiffNow = moment.duration(fin.diff(now));
    if (endDiffNow.asSeconds() < 0) {
      this.value = this.item.Duracion;
      this.completed.emit();
    } else {
      const currentProgress = moment.duration(now.diff(inicio));
      console.log(currentProgress.asSeconds());
      this.value = currentProgress.asSeconds();
    }
  }
}
