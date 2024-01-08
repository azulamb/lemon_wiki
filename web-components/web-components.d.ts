import type { JSXInternal } from 'preact/src/jsx.d.ts';
import type { SideMenu } from './common/side-menu.ts';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['side-menu']: JSXInternal.HTMLAttributes<SideMenu>;
    }
  }
}
