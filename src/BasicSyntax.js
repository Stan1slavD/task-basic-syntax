export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'I') {
            if (str.charAt(i + 1) == 'V' || str.charAt(i + 1) == 'X') result--;
            else {
                result += 1;
            }
        }

        if (str.charAt(i) == 'V') {
            if (str.charAt(i + 1) == 'X' || str.charAt(i + 1) == 'L')
                result -= 10;
            else result += 5;
        }

        if (str.charAt(i) == 'X') {
            if (str.charAt(i + 1) == 'L' || str.charAt(i + 1) == 'C')
                result -= 10;
            else result += 10;
        }

        if (str.charAt(i) == 'L') {
            if (str.charAt(i + 1) == 'C' || str.charAt(i + 1) == 'D')
                result -= 50;
            else result += 50;
        }

        if (str.charAt(i) == 'C') {
            if (str.charAt(i + 1) == 'D' || str.charAt(i + 1) == 'M')
                result -= 100;
            else result += 100;
        }

        if (str.charAt(i) == 'D') {
            if (str.charAt(i + 1) == 'M') result -= 500;
            else result += 500;
        }

        if (str.charAt(i) == 'M') result += 1000;
    }

    return result;
}
