export interface SideMenu extends HTMLElement {
  closed: boolean;
}

Promise.all([
  new Promise<string>((resolve, reject) => {
    const name = 'side-menu';
    if (customElements.get(name)) {
      return reject(new Error(`Defined: ${name}`));
    }
    if (document.readyState !== 'loading') {
      return resolve(name);
    }
    document.addEventListener('DOMContentLoaded', () => {
      resolve(name);
    });
  }),
  Promise.resolve(<HTMLScriptElement> document.currentScript),
]).then((results) => {
  const [name] = results;
  customElements.define(
    name,
    class extends HTMLElement implements SideMenu {
      constructor() {
        super();

        const style = document.createElement('style');
        style.innerHTML = [
          ':host { background: var(--back-sub); --contents-size: var(--side-size); grid-area: side; --button-width: 1rem; --button-height: 3rem; --open-symbol: "▶"; --close-symbol: "◀"; }',
          ':host > div { width: 100%; }',
          ':host > div.button { position: sticky; top: 0; }',
          ':host > div.wrapper { width: 100%; overflow: hidden; }',
          ':host > div.wrapper > div { width: var(--contents-size); }',
          ':host button { background: var(--back-sub); position: absolute; top: 0; left: calc(100% - 1px); width: var(--button-width); height: var(--button-height); border-radius: 0 0.5rem 0.5rem 0; border: none; outline: none; cursor: pointer; }',
          ':host button::before { content: var(--close-symbol); display: inline; }',
          ':host([closed]) button::before { content: var(--open-symbol); }',
        ].join('');

        const button = document.createElement('button');
        button.addEventListener('click', () => {
          this.closed = !this.closed;
        });
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('button');
        buttonWrapper.appendChild(button);

        const contents = document.createElement('div');
        contents.appendChild(document.createElement('slot'));

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.appendChild(contents);

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(style);
        shadow.appendChild(buttonWrapper);
        shadow.appendChild(wrapper);

        if (
          document.defaultView?.getComputedStyle(document.body)
            .getPropertyValue('--is-smartphone') === '1'
        ) {
          this.closed = true;
        }
      }

      get closed() {
        return this.hasAttribute('closed');
      }
      set closed(value) {
        if (value) {
          this.setAttribute('closed', '');
        } else {
          this.removeAttribute('closed');
        }
      }
    },
  );
});
