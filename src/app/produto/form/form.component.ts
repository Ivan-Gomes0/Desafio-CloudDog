import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProdutoService} from '../produto.service';
import { Produtos } from '../produto';
import { ProdutoComponent } from '../produto.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  confirmado = false;
  form: FormGroup;

  constructor(
    private formB: FormBuilder,
    private service: ProdutoService,
    private location: Location,
    private rota: ActivatedRoute
  ) {}

  ngOnInit() {

    const produto = this.rota.snapshot.data['Produtos'];

    this.form = this.formB.group({
      id: [produto.id],
      nome: [produto.nome, [Validators.required]],
      preco: [produto.preco, [Validators.required]],
      categoria: [produto.categoria, [Validators.required]],
      descricao: [produto.descricao]
    });
  }

  updateForm(produto) {
    this.form.patchValue({
       id: produto.id,
      nome: produto.nome
    });
  }

  onSubmit() {
    this.confirmado = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Adicionado');

      let msgSuccess = 'Produto Adicionado!';
      let msgError = 'Erro ao Adcionar o Produto, tente novamente!';
    }
  }

  onCancel() {
    this.confirmado = false;
    this.form.reset();
    // console.log('onCancel');
  }
}
