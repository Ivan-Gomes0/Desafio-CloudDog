import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produtos } from './produto';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produtos[];
  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.service.lista().subscribe(dados => this.produto = dados);
  }
}
