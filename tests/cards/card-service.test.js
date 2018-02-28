import {convertIntToCard} from "../../src/cards/card-service";

test('conversion of 33 is 8D', () => {
    expect(convertIntToCard(33)).toBe('8D');
});

