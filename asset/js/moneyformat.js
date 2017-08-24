//印尼钱币格式  
function gFormatNumbIndo(OrgNumb) {
    var gformatnumber_Louis = function (prices) {
        var separator = '.';
        var decseparator = ',';

        var decimals = '';
        price = '' + prices;
        var firstchar = price.charAt(0);
        var signs = '';
        if (firstchar == '-') {
            price = price.substr(1);
            signs = '-';
        }
        var decimalpoint = price.indexOf(".");
        if (decimalpoint != -1) {
            price = price.substr(0, decimalpoint);
            var temps = Math.round(prices * 100) / 100;
            temps = '' + temps;
            var decimalnow = temps.substr(decimalpoint + 1);
            if (decimalnow.length == 0) {
                decimalnow = '00';
            }
            else if (decimalnow.length == 1) {
                decimalnow = decimalnow;
            }
            decimals = decseparator + decimalnow;
        }
        if (price.length > 3) {
            mod = price.length % 3;
            output = (mod > 0 ? price.substr(0, mod) : '');
            var tLength = Math.floor(price.length / 3)
            for (var i = 0; i < tLength; i++) {
                if ((mod == 0) && (i == 0))
                    output += price.substr(mod + 3 * i, 3);
                else
                    output += separator + price.substr(mod + 3 * i, 3);
            }
            return signs + output + decimals;
        }
        else {
            return signs + price + decimals;
        }
    }

    var gjround_Louis = function (value, precision, mode) {
        var m, f, isHalf, sgn; // helper variables
        var decimalpoint;
        var decimalnow = 0;
        precision |= 0; // making sure precision is integer
        min = false;
        if (parseFloat(value) < 0) {
            min = true;
        }
        value = Math.abs(value);
        m = Math.pow(10, precision);
        value *= m;
        valued = value.toFixed(precision);
        decimalpoint = valued.indexOf(".");
        if (decimalpoint != -1) {
            decimalnow = valued.substr(decimalpoint + 1);
        }
        decpre = 1;
        for (i = 1; i < precision; i++) {
            decpre *= 10;
        }

        sgn = (value > 0) | -(value < 0); // sign of the number

        isHalf = value % 1 === 0.5 * sgn;
        f = Math.floor(value);

        if (typeof (mode) == 'undefined' || mode == '') {
            mode = 'PHP_ROUND_HALF_EVEN';
        }

        switch (mode) {
            case 'PHP_ROUND_HALF_DOWN':
                value = f + (sgn < 0); // rounds .5 toward zero
                break;
            case 'PHP_ROUND_HALF_EVEN':
                if (decimalnow >= parseFloat(5 * decpre)) {
                    if (f % 2 != 0) {
                        value = f + (f % 2 * sgn); // rouds .5 towards the next even integer
                    }
                    else {
                        value = f + !(f % 2); // rounds .5 towards the next odd integer
                    }
                }
                break;
            case 'PHP_ROUND_HALF_ODD':
                value = f + !(f % 2); // rounds .5 towards the next odd integer
                break;
            default:
                value = f + (sgn > 0); // rounds .5 away from zero
        }


        initvalue = (isHalf ? value : Math.round(value)) / m;
        if (min) {
            return parseFloat('-' + initvalue);
        }
        else {
            return parseFloat(initvalue);
        }
    }

    return gformatnumber_Louis(gjround_Louis(OrgNumb, 3));
}