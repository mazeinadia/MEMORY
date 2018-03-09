import * as service from '../../src/cards/cards.service'

describe('cards service', () => {
    describe ('convertIntToCard - числовых значений в имена карт', () => {
        it('преобразовывает 33 в 8D', () => {
            expect(service.convertIntToCard(33)).toEqual('8D');
        });

        it('преобразовывает 0 в 0C', () => {
            expect(service.convertIntToCard(0)).toEqual('0C');
        });

        it('преобразовывает 51 в AS', () => {
            expect(service.convertIntToCard(51)).toEqual('AS');
        });

        it('преобразовывает 6 в JH', () => {
            expect(service.convertIntToCard(51)).toEqual('AS');
        });
    });

    describe('cardDistribution - случайное распределение на [0, 51]', () => {
        it('возвращает массив длины, переданной в параметры', () => {
            expect(service.cardDistribution(2).length).toEqual(2);
        });

        it('генерирует парные значения', () => {
            const array = service.cardDistribution(2);
            expect(array[0]===array[1]).toBeTruthy();
        });

        it('генерирует значения в отрезке [0, 51]', () => {
            const array = service.cardDistribution(1);
            expect(array[0]).toBeGreaterThanOrEqual(0);
            expect(array[0]).toBeLessThan(52);
        })
    });

    describe('getCardRows - случайное распределение 9 пар карт', () => {
        it('возвращает массив размером 3 строки на 6 столбцов', () => {
            expect(service.getCardRows().size).toEqual(3);
            expect(service.getCardRows().get(0).size).toEqual(6);
        })
    });
});