import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produtos } from './produto';
import { environment } from '../../environments/environment'
import { tap, take } from 'rxjs/Operators';

@Injectable({
  providedIn: ('root')
})
export class ProdutoService {

  //private readonly API = `${environment.API}Produtos`;
  private readonly API = "http://localhost:3000/Produtos"
  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Produtos[]>(this.API);
  }
  
  create(produto) {
      return this.http.post(this.API, produto).pipe(take(1))
  }
}
