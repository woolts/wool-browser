import { div } from 'wool/dom';

// -- Elements --
export const text = text => div();
export const el = (attrs, child) => div();
export const column = (attrs, children) => div();
export const row = (attrs, children) => div();
export const layout = (attrs, child) => div();

// -- Attributes --
type Color = RGB | RGBA | Hex;
type RGB = [number, number, number];
type RGBA = [number, number, number, number];
type Hex = string;

export const color = (color: Color) => {};
