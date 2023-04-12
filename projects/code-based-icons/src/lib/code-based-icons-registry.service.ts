import { Injectable } from '@angular/core';
import { CodeBasedIcon } from 'projects/code-based-icons/icons';

@Injectable({
  providedIn: 'root'
})
export class CodeBasedIconsRegistryService {
  private registry = new Map<string, string>();

  public registerIcons(icons: CodeBasedIcon[]): void {
    icons.forEach((icon: CodeBasedIcon) =>
      this.registry.set(icon.name, icon.data)
    );
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
