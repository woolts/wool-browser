import { column, row, element, background, rgb, spacing, text } from 'wool/ui';

export default column(
  [spacing(20)],
  [
    row(
      [spacing(10)],
      [element([], text('Hello')), element([], text('World'))],
    ),
    element([background.color(rgb(0.2, 0.2, 0.2))], text('Footer')),
  ],
);
