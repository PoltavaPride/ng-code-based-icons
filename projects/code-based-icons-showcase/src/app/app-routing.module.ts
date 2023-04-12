import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'combined-case-first',
    loadChildren: () =>
      import('./features/combined-case-first/combined-case-first.module').then(
        m => m.CombinedCaseFirstModule
      )
  },
  {
    path: 'combined-case-second',
    loadChildren: () =>
      import(
        './features/combined-case-second/combined-case-second.module'
      ).then(m => m.CombinedCaseSecondModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
