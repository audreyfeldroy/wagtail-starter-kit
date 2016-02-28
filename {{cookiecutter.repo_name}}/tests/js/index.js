import test from 'tape';
import clicker from '../../src/server/static/js/clickCounter';

test('Count my clicks', expect => {
  const click = clicker();

  click.click();
  expect.equal(click.count, 1, 'Wow I can count to 1');
  expect.end();
});
