var myAtoi = function (input) {
    let sign = 1;
    let result = 0;
    let index = 0;
    let n = input.length;

    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -Math.pow(2, 31);

    while (index < n && input[index] == " ") {
        index++;
    }

    if (index < n && input[index] == "+") {
        sign = 1;
        index++;
    } else if (index < n && input[index] == "-") {
        sign = -1;
        index++;
    }

    while (index < n && input[index] >= "0" && input[index] <= "9") {
        let digit = input[index] - "0";

        if (
            result > Math.floor(INT_MAX / 10) ||
            (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
        ) {
            return sign == 1 ? INT_MAX : INT_MIN;
        }

        result = 10 * result + digit;
        index++;
    }

    return sign * result;
};
