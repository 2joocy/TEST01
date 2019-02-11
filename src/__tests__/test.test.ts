import {minMax, mustPayFare, NORMAL_TICKET_PRICE, SAVER_TICKET_PRICE} from '../index'

test("Null", () => {
    expect(() => minMax([])).toThrowError(TypeError("No inputs were provided"))
})

test("Highs and lows", () => {
    expect(minMax(["1","2","3","4"])).toEqual([1,4])
})

describe('Testing Blockbox Train Ticket Prices', () => {
    
    test('Ticket before 9:30 is full price', () => {
        expect(mustPayFare(5)).toBe(NORMAL_TICKET_PRICE);
    });

    test('Ticket at 9:30 is half price', () => {
        expect(mustPayFare(9.5)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket after 9:30 is half price', () => {
        expect(mustPayFare(9.51)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket before 16 is half price', () => {
        expect(mustPayFare(15.99)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket at 16 is half price', () => {
        expect(mustPayFare(16)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket at 19:30 is full price', () => {
        expect(mustPayFare(19.5)).toBe(NORMAL_TICKET_PRICE);
    });

    test('Ticket after 19:30 is half price', () => {
        expect(mustPayFare(19.50001)).toBe(SAVER_TICKET_PRICE);
    });

})