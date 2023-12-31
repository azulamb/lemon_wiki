import type { JSXInternal } from 'preact/src/jsx.d.ts';
import type { SampleHeader } from './sample-header.ts';
import type { SampleComponent } from './sample-component.ts';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['sample-header']: JSXInternal.HTMLAttributes<SampleHeader>;
      ['sample-component']: JSXInternal.HTMLAttributes<SampleComponent>;
    }
  }
}
