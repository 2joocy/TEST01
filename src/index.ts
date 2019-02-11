export const NORMAL_TICKET_PRICE = 10;
export const SAVER_TICKET_PRICE = 5;

export function minMax(args: string[]): number[] {
    if (args.length < 3) {
        throw TypeError("No inputs were provided");
        return [];
    }else{
        console.log(args.length)
        let min = parseFloat(args[0]);
        let max = parseFloat(args[0]);
        for (let i = 0; i < args.length; i++) {
            let iVal = parseFloat(args[i]);
            if (iVal < min) {
                min = iVal;
            }
            if (iVal > max) {
                max = iVal;
            }
        }
        return [min, max];
    }
}

export function mustPayFare(time: number) {
    if (time < 9.5 || time > 16 && time <= 19.5) {
        return NORMAL_TICKET_PRICE;
    }
    return SAVER_TICKET_PRICE;
}