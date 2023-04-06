import { HoverAffectDirective } from './hover-affect.directive';
import { ElementRef } from '@angular/core';


const el = new ElementRef(null);
describe('HoverAffectDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverAffectDirective(el);
    expect(directive).toBeTruthy();
  });
});
