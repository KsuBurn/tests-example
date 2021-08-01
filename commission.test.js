const {commission} = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
let flyDate = a => Date.now() + a * MILLISECONDS_IN_DAY;

describe('Функция commission:', () => {
  it('должна вернуть 0, если до даты вылета 10 дней', () => {
    expect(commission(flyDate(10))).toBe(0)
  })

  it('должна вернуть 20, если до даты вылета 9.5 дней', () => {
    expect(commission(flyDate(9.5))).toBe(20)
  });

  it('должна вернуть 20, если до даты вылета чуть больше 10 дней', () => {
    expect(commission(flyDate(10.5))).toBe(0)
  });
})
