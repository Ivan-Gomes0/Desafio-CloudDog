import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
    {path: '', component: ProdutoComponent},
    {path: 'novo', component: FormComponent},
    {path: 'editar/:Id' , component: FormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {}