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
test('Util.mask.cnpjcpf - CPF', function () {
    var input = Util.mask.cnpjcpf('62173620000180'),
        expected = "62.173.620/0001-80";

    equal(input, expected, 'This should work with no problem.');
});
test('Util.mask.cnpjcpf - CNPJ', function () {
    var input = Util.mask.cnpjcpf('62173620000180'),
        expected = "62.173.620/0001-80";

    equal(input, expected, 'This should work with no problem.');
});


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
test('Util.number.only', function () {
    var input = Util.number.only('100^%u&.12'),
        expected = 10012;

    equal(input, expected, 'This should work with no problem.');
});
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
