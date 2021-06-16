import { stringify, parse } from '/csv';
import { activate } from 'activate';

const stringifyInput = [
	['Numbers', 0, 1, 2, 3],
	['Test values', 'test', {test: true}],
	['Falsey values', false, '', [], null],
	['Values to sanitise', '=GET(malicious_code)', '-FETCH(url)', '+DO(nefarious_thing)', '@POST(data)'],
];

const parseInput = `Numbers,0,1,2,3
Test values,test,{test: true},,
Falsey values,false,'',[],null
Values to sanitise,=GET(malicious_code),-FETCH(url),+DO(nefarious_thing),@POST(data)`;

activate('.js-stringify__button', () => {
	let $input = document.querySelector('.js-stringify__input');
	let $output = document.querySelector('.js-stringify__output');

	let $transpose = document.querySelector('.js-stringify__transpose');
	let $sanitise = document.querySelector('.js-stringify__sanitise');

	let options = {
		transpose: $transpose.checked,
		sanitise: $sanitise.checked,
	};

	let str = stringify(stringifyInput, options);

	$input.innerHTML = JSON.stringify(stringifyInput, null, '\t');
	$output.innerHTML = str;
});

activate('.js-parse__button', () => {
	let $input = document.querySelector('.js-parse__input');
	let $output = document.querySelector('.js-parse__output');

	let data = parse(parseInput);

	$input.innerHTML = parseInput;
	$output.innerHTML = JSON.stringify(data, null, '\t');
});
