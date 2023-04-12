import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  CodeBasedIconsModule,
  CodeBasedIconsRegistryService
} from 'projects/code-based-icons/src/public-api';
import { AboutComponent } from './about.component';
import { codeBasedIconAddUserLarge } from 'projects/code-based-icons/icons';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CodeBasedIconsModule]
})
export class AboutModule {
  constructor(
    private codeBasedIconsRegistryService: CodeBasedIconsRegistryService
  ) {
    this.codeBasedIconsRegistryService.registerIcons([
      codeBasedIconAddUserLarge
    ]);
  }
}
