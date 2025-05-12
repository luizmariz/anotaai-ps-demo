import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ItemDto } from '../dtos/item.dto';

@Injectable({
  providedIn: 'root',
})
export class ItemHttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  public getAll(): Observable<ItemDto[]> {
    return this.httpClient.get<ItemDto[]>(`${this.apiUrl}`);
  }
}
