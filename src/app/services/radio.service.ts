import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { RadioCancion } from "../models/radio-cancion.model";

@Injectable({
  providedIn: "root",
})
export class RadioService {
  url = "";
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<RadioCancion[]> {
    return this.httpClient.get<RadioCancion[]>(this.url);
  }
  getFakeData(): Observable<RadioCancion[]> {
    return of([
      {
        id: 2,
        codigo: "1301745",
        descripcion: "SUEÑA",
        descripcion2: "SUEÑA",
        autor: "LUIS MIGUEL",
        duracion: 251,
        fechaHoraInicio: "2020-09-25T07:48:13.687+00:00",
        fechaHoraFin: "2020-09-25T07:52:24.687+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/1301745_LUIS%20MIGUEL_SUE%C3%91A.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632556097&Signature=rbXx0wU4MQQ1t9NlZM6pEte70A8%3D",
        medio: "CAVHCorazon",
      },
      {
        id: 3,
        codigo: "7543364",
        descripcion: "Jurare No Amarte Mas",
        descripcion2: "Jurare No Amarte Mas",
        autor: "Armonía 10",
        duracion: 251,
        fechaHoraInicio: "2020-09-25T07:52:44.330+00:00",
        fechaHoraFin: "2020-09-25T07:56:55.330+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/7543364_Armon%C3%ADa%2010_Jurare%20No%20Amarte%20Mas.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632556367&Signature=f%2FosOzJ7QDBbJPF0f3TS7MLFR3E%3D",
        medio: "CAVHLa Mega",
      },
      {
        id: 4,
        codigo: "5974722",
        descripcion: "PA MI",
        descripcion2: "PA MI",
        autor: "DALEX",
        duracion: 244,
        fechaHoraInicio: "2020-09-25T07:52:47.720+00:00",
        fechaHoraFin: "2020-09-25T07:56:51.720+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/5974722_DALEX_PA%20MI.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632556373&Signature=AIijUVyN5CMreTuA979I1nGnhbM%3D",
        medio: "CAVHLa Zona",
      },
      {
        id: 5,
        codigo: "3976134",
        descripcion: "COSITAS QUE HACIAMOS",
        descripcion2: "COSITAS QUE HACIAMOS",
        autor: "FARRUKO",
        duracion: 241,
        fechaHoraInicio: "2020-09-25T08:00:46.110+00:00",
        fechaHoraFin: "2020-09-25T08:04:47.110+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/3976134_FARRUKO_COSITAS%20QUE%20HACIAMOS.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632556851&Signature=6lFSDT%2FjHLKCCHpF3wuE1Noghy8%3D",
        medio: "CAVHLa Zona",
      },
      {
        id: 6,
        codigo: "7543468",
        descripcion: "Sueno O Pesadilla",
        descripcion2: "Sueno O Pesadilla",
        autor: "Corazón Serrano",
        duracion: 277,
        fechaHoraInicio: "2020-09-25T08:00:49.690+00:00",
        fechaHoraFin: "2020-09-25T08:05:26.690+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/7543468_Coraz%C3%B3n%20Serrano_Sueno%20O%20Pesadilla.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632556851&Signature=YSDlOZfYMCgp8QXC1H651%2FvZt%2Fg%3D",
        medio: "CAVHLa Mega",
      },
      {
        id: 7,
        codigo: "6530002",
        descripcion: "ABRAZAME MUY FUERTE",
        descripcion2: "ABRAZAME MUY FUERTE",
        autor: "JUAN GABRIEL",
        duracion: 238,
        fechaHoraInicio: "2020-09-25T08:01:19.730+00:00",
        fechaHoraFin: "2020-09-25T08:05:17.730+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/6530002_JUAN%20GABRIEL_ABRAZAME%20MUY%20FUERTE.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632556891&Signature=oUntRA8a1sxS15goAS2YT%2FFlV8s%3D",
        medio: "CAVHCorazon",
      },
      {
        id: 8,
        codigo: "6619418",
        descripcion: "CON MI AMIGA",
        descripcion2: "CON MI AMIGA",
        autor: "DANIELA DANCOURT",
        duracion: 227,
        fechaHoraInicio: "2020-09-25T08:04:54.217+00:00",
        fechaHoraFin: "2020-09-25T08:08:41.217+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/6619418_DANIELA%20DANCOURT_CON%20MI%20AMIGA.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632557096&Signature=%2F0YV2Fbv3z980BNR0NYYrhbEmT8%3D",
        medio: "CAVHLa Zona",
      },
      {
        id: 9,
        codigo: "6648424",
        descripcion: "BABY, I LOVE YOUR WAY",
        descripcion2: "BABY, I LOVE YOUR WAY",
        autor: "BIG MOUNTAIN",
        duracion: 261,
        fechaHoraInicio: "2020-09-25T08:14:02.947+00:00",
        fechaHoraFin: "2020-09-25T08:18:23.947+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/6648424_BIG%20MOUNTAIN_BABY%2C%20I%20LOVE%20YOUR%20WAY.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632557668&Signature=0RMVtPtXdhHV70k4sPs6hnCLq40%3D",
        medio: "CAVHOxígeno",
      },
      {
        id: 10,
        codigo: "7543401",
        descripcion: "La Llorona",
        descripcion2: "La Llorona",
        autor: "Bárbara",
        duracion: 242,
        fechaHoraInicio: "2020-09-25T08:14:44.743+00:00",
        fechaHoraFin: "2020-09-25T08:18:46.743+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/7543401_B%C3%A1rbara_La%20Llorona.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632557687&Signature=%2F%2BmXx9opi1%2FQgkEJDmao88afbSM%3D",
        medio: "CAVHLa Mega",
      },
      {
        id: 11,
        codigo: "7844468",
        descripcion: "DAME LUZ",
        descripcion2: "DAME LUZ",
        autor: "QUIMICO ULTRA Y MARTHA HEREDIA",
        duracion: 229,
        fechaHoraInicio: "2020-09-25T08:15:53.127+00:00",
        fechaHoraFin: "2020-09-25T08:19:42.127+00:00",
        urlAmazonS3:
          "https://proyecto-upc-g4.s3.amazonaws.com/7844468_QUIMICO%20ULTRA%20Y%20MARTHA%20HEREDIA_DAME%20LUZ.jpg?AWSAccessKeyId=AKIAI2Q44ALHH7BA254Q&Expires=1632557754&Signature=fqX2J6dEvIC3MyIfpG5uPxgvdU4%3D",
        medio: "CAVHLa Zona",
      },
    ]).pipe(delay(1500));
  }
}
