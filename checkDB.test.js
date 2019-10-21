const checkDB = require('./checkDB')

describe('DB should connect, save, display data and have persistence', () => {
    it('should connect', () => {
        expect(checkDB.checkConnectDB()).toMatch('Database connection established')
    })
    it('should save data reliabily', () => {
        expect(checkDB.checkSave([1, 2, 3, 4], 1.55)).toStrictEqual([{ inputs: [1, 2, 3, 4], outputs: 1.55 }])
    })
    it('should display values', () => {
        expect(checkDB.checkDisplay()).toStrictEqual([['10/16/19 2:30p', '10/3/19 1:13a'], ['2,4,3,5', '32,42,12,54'], ['1.33', '31.37']])
    })
    it('should persist', () => {
        expect(checkDB.checkDBFunction([{ Date: '10/16/19 2:30p', inputs: [2, 4, 3, 5], outputs: 1.33 }, { Date: '10/3/19 1:13a', inputs: [32, 42, 12, 54], outputs: 31.37 }]))
            .toBe(4)
    })
})