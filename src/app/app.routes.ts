import { Routes, RouterModule } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes = [
    {path: '', component: TabelaComponent },
    {path: 'novo', component: CadastroComponent},
    {path: 'editar/:id', component: CadastroComponent}
]

export const routing = RouterModule.forRoot(appRoutes)