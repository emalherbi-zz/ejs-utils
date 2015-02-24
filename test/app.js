/* CMC7 */

test('Util.cmc7.validate', function () {
    var input = Util.cmc7.validate('341003630010000055200005306998'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
// test('Util.cmc7.validate', function () {
//     var input = Util.cmc7.validate('341003630010000055200005306997'),
//         expected = true;
//
//     equal(input, expected, 'This should work with no problem.');
// });

/* CNPJ */

test('Util.cnpj.validate', function () {
    var input = Util.cnpj.validate('62173620000180'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.cnpj.validate - with Mask', function () {
    var input = Util.cnpj.validate('621.736.200/001-80'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});

/* CPF */

test('Util.cpf.validate', function () {
    var input = Util.cpf.validate('29727693172'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});
test('Util.cpf.validate - with Mask', function () {
    var input = Util.cpf.validate('297.276.931-72'),
        expected = true;

    equal(input, expected, 'This should work with no problem.');
});

/* DATE */

test('Util.date.nowBr - BR Format', function () {
    var input = Util.date.nowBr(),
        expected = Util.date.nowBr();

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.nowSql - SQL Format', function () {
    var input = Util.date.nowSql(),
        expected = Util.date.nowSql();

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.addDaysBr', function () {
    var input = Util.date.addDaysBr('24/02/2015', '2'),
        expected = '26/02/2015';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.addMonthBr', function () {
    var input = Util.date.addMonthBr('24/02/2015', '2'),
        expected = '24/04/2015';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.addYearBr', function () {
    var input = Util.date.addYearBr('24/02/2015', '2'),
        expected = '24/02/2017';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.addDays', function () {
    var input = Util.date.addDays('2015-02-24', '2'),
        expected = '2015-02-26';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.addMonth', function () {
    var input = Util.date.addMonth('2015-02-24', '2'),
        expected = '2015-04-24';

    equal(input, expected, 'This should work with no problem.');
});
test('Util.date.addYear', function () {
    var input = Util.date.addYear('2015-02-24', '2'),
        expected = '2017-02-24';

    equal(input, expected, 'This should work with no problem.');
});

/* MASK */

test('Util.mask.dateBr', function () {
    var input = Util.mask.dateBr('01052015'),
        expected = "01/05/2015";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.hour', function () {
    var input = Util.mask.hour('1320'),
        expected = "13:20";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.telBr', function () {
    var input = Util.mask.telBr('4699000011'),
        expected = "(46) 9900 - 0011";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.cep', function () {
    var input = Util.mask.cep('95701320'),
        expected = "95.701-320";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.cpf', function () {
    var input = Util.mask.cpf('29727693172'),
        expected = "297.276.931-72";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.cnpj', function () {
    var input = Util.mask.cnpj('62173620000180'),
        expected = "62.173.620/0001-80";

    equal(input, expected, 'This should work with no problem.');
});
// test('Util.mask.cnpjcpf - CPF', function () {
//     var input = Util.mask.cnpjcpf('62173620000180'),
//         expected = "62.173.620/0001-80";
//
//     equal(input, expected, 'This should work with no problem.');
// });
// test('Util.mask.cnpjcpf - CNPJ', function () {
//     var input = Util.mask.cnpjcpf('29727693172'),
//         expected = "297.276.931-72";
//
//     equal(input, expected, 'This should work with no problem.');
// });
test('Util.mask.number', function () {
    var input = Util.mask.number('100^%u&.12'),
        expected = "10012";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.currency', function () {
    var input = Util.mask.currency('10000'),
        expected = "100.00";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.currencyBr', function () {
    var input = Util.mask.currencyBr('10000'),
        expected = "100,00";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.currencyBrFocusOut', function () {
    var input = Util.mask.currencyBrFocusOut('10000'),
        expected = "10000,00";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.cfop', function () {
    var input = Util.mask.cfop('6111'),
        expected = "6.111";

    equal(input, expected, 'This should work with no problem.');
});

/* MONEY */

test('Util.money.formatBr', function () {
    var input = Util.money.formatBr(100.12),
        expected = "100,12";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.money.formatUs', function () {
    var input = Util.money.formatUs('100,12'),
        expected = 100.12;

    equal(input, expected, 'This should work with no problem.');
});

/* NUMBER */

test('Util.number.only', function () {
    var input = Util.number.only('100^%u&.12'),
        expected = 10012;

    equal(input, expected, 'This should work with no problem.');
});

/* STRING */

test('Util.string.addLeft', function () {
    var input = Util.string.addLeft('1', '5'),
        expected = "00001";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.string.trim', function () {
    var input = Util.string.trim(' 100^%u&.12    '),
        expected = '100^%u&.12';

    equal(input, expected, 'This should work with no problem.');
});

/* TIME */

test('Util.time.now', function () {
    var input = Util.time.now(),
        expected = Util.time.now();

    equal(input, expected, 'This should work with no problem.');
});
