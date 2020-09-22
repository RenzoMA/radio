import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { RadioCancion } from "../models/radio-cancion.model";

@Injectable({
  providedIn: "root",
})
export class RadioService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<RadioCancion[]> {
    return of([
      {
        Id: 38692435,
        Codigo: 1307693,
        Descripcion: "LOS PATOS Y LAS PATAS",
        Descripcion2: "LOS PATOS Y LAS PATAS",
        Autor: "NOSEQUIEN Y LOS NOSECUANTOS",
        Duracion: 183,
        FechaHoraInicio: new Date("2020-09-22T14:10:13.427"),
        FechaHoraFin: new Date("2020-09-22T14:13:16.427"),
        UrlAmazonS3: "https://dev-audioplayer-sistemas.s3.amazonaws.com/1307693_NOSEQUIEN%20Y%20LOS%20NOSECUANTOS_LOS%20PATOS%20Y%20LAS%20PATAS.jpg?AWSAccessKeyId=AKIATFFF6PG3R3GOGW6D&Expires=1632289535&Signature=Y8TT9qOv2ZfVlqwIiXm6IR%2BmCL4%3D",
        Medio: "Oxígeno",
      },
      {
        Id: 38692435,
        Codigo: 1307693,
        Descripcion: "LOS PATOS Y LAS PATAS",
        Descripcion2: "LOS PATOS Y LAS PATAS",
        Autor: "NOSEQUIEN Y LOS NOSECUANTOS",
        Duracion: 183,
        FechaHoraInicio: new Date("2020-09-22T00:51:13.427"),
        FechaHoraFin: new Date("2020-09-22T00:54:16.427"),
        UrlAmazonS3: "https://dev-audioplayer-sistemas.s3.amazonaws.com/1307693_NOSEQUIEN%20Y%20LOS%20NOSECUANTOS_LOS%20PATOS%20Y%20LAS%20PATAS.jpg?AWSAccessKeyId=AKIATFFF6PG3R3GOGW6D&Expires=1632289535&Signature=Y8TT9qOv2ZfVlqwIiXm6IR%2BmCL4%3D",
        Medio: "Oxígeno",
      },
      {
        Id: 38692435,
        Codigo: 1307693,
        Descripcion: "LOS PATOS Y LAS PATAS",
        Descripcion2: "LOS PATOS Y LAS PATAS",
        Autor: "NOSEQUIEN Y LOS NOSECUANTOS",
        Duracion: 183,
        FechaHoraInicio: new Date("2020-09-22T00:51:13.427"),
        FechaHoraFin: new Date("2020-09-22T00:54:16.427"),
        UrlAmazonS3: "https://dev-audioplayer-sistemas.s3.amazonaws.com/1307693_NOSEQUIEN%20Y%20LOS%20NOSECUANTOS_LOS%20PATOS%20Y%20LAS%20PATAS.jpg?AWSAccessKeyId=AKIATFFF6PG3R3GOGW6D&Expires=1632289535&Signature=Y8TT9qOv2ZfVlqwIiXm6IR%2BmCL4%3D",
        Medio: "Oxígeno",
      },
      {
        Id: 38692435,
        Codigo: 1307693,
        Descripcion: "LOS PATOS Y LAS PATAS",
        Descripcion2: "LOS PATOS Y LAS PATAS",
        Autor: "NOSEQUIEN Y LOS NOSECUANTOS",
        Duracion: 183,
        FechaHoraInicio: new Date("2020-09-22T00:51:13.427"),
        FechaHoraFin: new Date("2020-09-22T00:54:16.427"),
        UrlAmazonS3: "https://dev-audioplayer-sistemas.s3.amazonaws.com/1307693_NOSEQUIEN%20Y%20LOS%20NOSECUANTOS_LOS%20PATOS%20Y%20LAS%20PATAS.jpg?AWSAccessKeyId=AKIATFFF6PG3R3GOGW6D&Expires=1632289535&Signature=Y8TT9qOv2ZfVlqwIiXm6IR%2BmCL4%3D",
        Medio: "Oxígeno",
      },
      {
        Id: 38692435,
        Codigo: 1307693,
        Descripcion: "LOS PATOS Y LAS PATAS",
        Descripcion2: "LOS PATOS Y LAS PATAS",
        Autor: "NOSEQUIEN Y LOS NOSECUANTOS",
        Duracion: 183,
        FechaHoraInicio: new Date("2020-09-22T00:51:13.427"),
        FechaHoraFin: new Date("2020-09-22T00:54:16.427"),
        UrlAmazonS3: "https://dev-audioplayer-sistemas.s3.amazonaws.com/1307693_NOSEQUIEN%20Y%20LOS%20NOSECUANTOS_LOS%20PATOS%20Y%20LAS%20PATAS.jpg?AWSAccessKeyId=AKIATFFF6PG3R3GOGW6D&Expires=1632289535&Signature=Y8TT9qOv2ZfVlqwIiXm6IR%2BmCL4%3D",
        Medio: "Oxígeno",
      },
      {
        Id: 38692435,
        Codigo: 1307693,
        Descripcion: "LOS PATOS Y LAS PATAS",
        Descripcion2: "LOS PATOS Y LAS PATAS",
        Autor: "NOSEQUIEN Y LOS NOSECUANTOS",
        Duracion: 183,
        FechaHoraInicio: new Date("2020-09-22T00:51:13.427"),
        FechaHoraFin: new Date("2020-09-22T00:54:16.427"),
        UrlAmazonS3: "https://dev-audioplayer-sistemas.s3.amazonaws.com/1307693_NOSEQUIEN%20Y%20LOS%20NOSECUANTOS_LOS%20PATOS%20Y%20LAS%20PATAS.jpg?AWSAccessKeyId=AKIATFFF6PG3R3GOGW6D&Expires=1632289535&Signature=Y8TT9qOv2ZfVlqwIiXm6IR%2BmCL4%3D",
        Medio: "Oxígeno",
      },
    ]).pipe(delay(1500));
  }
}
