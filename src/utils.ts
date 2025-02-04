// This Funciton takes string a input then convert it to UTC date format

export function convertStringToDate(dStr: String): Date {
    let temp: number[] = dStr.split('-').map(Number);
    return new Date(Date.UTC(temp[2], temp[1] - 1, temp[0]));
}


