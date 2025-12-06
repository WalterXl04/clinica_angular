import { Routes } from '@angular/router';

// IMPORTS DE LAYOUT E HOME
import { PublicLayoutComponent } from './layout/public-layout/public-layout';
import { Home } from './pages/public/home/home';
import { PrivateLayout } from './layout/private-layout/private-layout';
import { DashboardComponent } from './pages/private/dashboard/dashboard';

// IMPORTS DAS PÁGINAS ADMINISTRATIVAS
// 1. Médicos
import { MedicosComponent } from './pages/private/administrativo/medicos/medicos';
import { MedicosFormComponent } from './pages/private/administrativo/medicos-form/medicos-form';

// 2. Pacientes
import { PacientesComponent } from './pages/private/administrativo/pacientes/pacientes';
import { PacientesFormComponent } from './pages/private/administrativo/pacientes-form/pacientes-form';

// 3. Atendentes
import { AtendentesComponent } from './pages/private/administrativo/atendentes/atendentes';
import { AtendentesFormComponent } from './pages/private/administrativo/atendentes-form/atendentes-form';

// 4. Consultas (ADICIONE ISTO AQUI)
import { ConsultasComponent } from './pages/private/administrativo/consultas/consultas';
import { ConsultasFormComponent } from './pages/private/administrativo/consultas-form/consultas-form';


export const routes: Routes = [
    // Rota 1: Site Público
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: Home },
            { path: 'home', redirectTo: '' }
        ]
    },

    // Rota 2: Sistema Privado
    {
        path: 'sistema', 
        component: PrivateLayout,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            
            // --- MÉDICOS ---
            { path: 'admin/medicos', component: MedicosComponent },
            { path: 'admin/medicos/novo', component: MedicosFormComponent },
            { path: 'admin/medicos/:id', component: MedicosFormComponent },

            // --- PACIENTES ---
            { path: 'admin/pacientes', component: PacientesComponent },
            { path: 'admin/pacientes/novo', component: PacientesFormComponent },
            { path: 'admin/pacientes/:id', component: PacientesFormComponent },

            // --- ATENDENTES ---
            { path: 'atendentes', component: AtendentesComponent },
            { path: 'atendentes/novo', component: AtendentesFormComponent },
            { path: 'atendentes/:id', component: AtendentesFormComponent },

            // --- CONSULTAS (ADICIONE ISTO AQUI) ---
            { path: 'consultas', component: ConsultasComponent },
            { path: 'consultas/novo', component: ConsultasFormComponent },
            { path: 'consultas/:id', component: ConsultasFormComponent },

            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },

    { path: '**', redirectTo: '' }
];