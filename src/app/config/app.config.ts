import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideHttpClient, withFetch } from '@angular/common/http';
import { AlbumGateway } from '../domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from '../infraestructure/driven-adapter/album-api/album-api.service';
import { routes } from './app.routes';
import { GenerateImageGateway } from '../domain/models/Album/gateway/generate-image-gateway';
import { AiGeneratorApiService } from '../infraestructure/driven-adapter/ai-generator-api/ai-generator-api.service.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
  { provide: AlbumGateway, useClass: AlbumApiService },
  { provide: GenerateImageGateway, useClass: AiGeneratorApiService}]
  // { provide: AlbumGateway, useClass: AlbumApiServiceWithoutDelay },]
};