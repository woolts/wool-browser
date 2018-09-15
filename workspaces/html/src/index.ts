const el = tag => (): HTMLElement => document.createElement(tag);

export const div = el('div');
export const span = el('span');
