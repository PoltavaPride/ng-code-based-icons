import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  CodeBasedIconsModule,
  CodeBasedIconsRegistryService
} from 'projects/code-based-icons/src/public-api';
import { ContactsComponent } from './contacts.component';
import {
  codeBasedIconAddUserLarge,
  codeBasedIconArrowRightLarge,
  codeBasedIconArrowSortDownLarge
} from 'projects/code-based-icons/icons';

const routes: Routes = [{ path: '', component: ContactsComponent }];

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CodeBasedIconsModule]
})
export class ContactsModule {
  constructor(
    private codeBasedIconsRegistryService: CodeBasedIconsRegistryService
  ) {
    this.codeBasedIconsRegistryService.registerIcons([
      codeBasedIconAddUserLarge,
      codeBasedIconArrowRightLarge,
      codeBasedIconArrowSortDownLarge
    ]);
  }
}
