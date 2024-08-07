import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/Album/album';
import { GenerateImageGateway } from '../models/Album/gateway/generate-image-gateway';

@Injectable({
  providedIn: 'root'
})

export class GenerateImageUseCases {
  constructor( private _generateImageGateWay: GenerateImageGateway) {}

  generateImage (prompt: String) : Observable <any> {
    return this._generateImageGateWay.generateImage(prompt);
  }
}