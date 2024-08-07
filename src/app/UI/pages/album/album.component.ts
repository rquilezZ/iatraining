import { Component, OnInit, inject } from '@angular/core';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';
import { Album } from '../../../domain/models/Album/album';
import { Observable } from 'rxjs';
import { CircularProgressComponent } from '../../ds/atoms/circular-progress/circular-progress.component';
import { GenerateImageUseCases } from '../../../domain/usecase/generate-image-use-case';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CircularProgressComponent, FormsModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent implements OnInit {
  prompt: string = '';
  imageUrl: string = '';

  constructor(
    private _getAlbumUseCase: GetAlbumUseCases,
    private _generateImageUseCase: GenerateImageUseCases
  ) {}

  response$: Observable<Album> | undefined;
  datos?: Album;

  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('20');
    this.response$.subscribe((data: Album) => {
      this.datos = data;
    });
  }

  generateImage() {
    this._generateImageUseCase.generateImage(this.prompt).subscribe(
      (response) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}