import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiGeneratorApiService {

  // private apiUrl = 'https://api-inference.huggingface.co/models/alvdansen/phantasma-anime';
  // private apiUrl = 'https://api-inference.huggingface.co/models/dreamlike-art/dreamlike-photoreal-2.0';
  private apiUrl = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0';

  

  constructor(private http: HttpClient) { }

  generateImage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer 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`,
      'Content-Type': 'application/json'
    });

    const body = { inputs: prompt };

    return this.http.post(this.apiUrl, body, { headers: headers, responseType: 'blob' as 'json' });
  }
}
