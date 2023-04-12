import { Component } from '@angular/core';
import { codeBasedIconActivateLarge } from 'projects/code-based-icons/icons';
import { CodeBasedIconsRegistryService } from 'projects/code-based-icons/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private codeBasedIconsRegistryService: CodeBasedIconsRegistryService
  ) {
    this.codeBasedIconsRegistryService.registerIcons([
      codeBasedIconActivateLarge
    ]);
  }
}
