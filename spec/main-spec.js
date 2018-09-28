const main = require('../main/main');

describe('main()', () => {

    it('should calculate the remaindar', () => {
        expect(main.Mymethod(9, 3)).toBe(0);
        expect(main.Mymethod(11, 4)).toBe(3);
    });
});