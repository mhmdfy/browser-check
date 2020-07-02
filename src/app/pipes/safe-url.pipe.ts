import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string, ...args: any[]): any {
    console.log('url', url);
    // return this.sanitizer.sanitize(SecurityContext.URL, url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
