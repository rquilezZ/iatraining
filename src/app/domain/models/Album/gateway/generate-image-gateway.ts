import { Observable } from 'rxjs';

export abstract class GenerateImageGateway {
    abstract generateImage(prompt: String): Observable<any>;
}