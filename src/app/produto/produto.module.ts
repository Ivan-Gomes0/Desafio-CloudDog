import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdutoRoutingModule} from './produto-routing.module';
import {FormComponent} from './form/form.component';
import {ProdutoComponent} from './produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [ProdutoComponent, FormComponent]
})

export class ProdutoModule {
}