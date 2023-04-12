import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CodeBasedIconsRegistryService } from './code-based-icons-registry.service';
import { codeBasedIcon } from 'projects/code-based-icons/icons';

@Component({
  selector: 'lib-code-based-icons',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBasedIconsComponent {
  private svgIcon: SVGElement | undefined;

  @Input()
  set name(iconName: codeBasedIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.codeBasedIconsRegistryService.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private codeBasedIconsRegistryService: CodeBasedIconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {}

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent || '';
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
