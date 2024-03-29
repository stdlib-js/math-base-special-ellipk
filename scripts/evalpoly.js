/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*
* This script compiles modules for evaluating polynomial functions. If any polynomial coefficients change, this script should be rerun to update the compiled files.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs-read-file' ).sync;
var writeFileSync = require( '@stdlib/fs-write-file' ).sync;
var currentYear = require( '@stdlib/time-current-year' );
var substringBefore = require( '@stdlib/string-substring-before' );
var substringAfter = require( '@stdlib/string-substring-after' );
var format = require( '@stdlib/string-format' );
var licenseHeader = require( '@stdlib/_tools-licenses-header' );
var compile = require( '@stdlib/math-base-tools-evalpoly-compile' );
var compileC = require( '@stdlib/math-base-tools-evalpoly-compile-c' );


// VARIABLES //

// The tables below are from Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z](https://doi.org/10.1007/s10569-009-9228-z).

// Table 2 for expansion about x = 0.05:
var P1 = [
	1.591003453790792180,
	0.416000743991786912,
	0.245791514264103415,
	0.179481482914906162,
	0.144556057087555150,
	0.123200993312427711,
	0.108938811574293531,
	0.098853409871592910,
	0.091439629201749751,
	0.085842591595413900,
	0.081541118718303215
];

// Table 3 for expansion about 0.15:
var P2 = [
	1.635256732264579992,
	0.471190626148732291,
	0.309728410831499587,
	0.252208311773135699,
	0.226725623219684650,
	0.215774446729585976,
	0.213108771877348910,
	0.216029124605188282,
	0.223255831633057896,
	0.234180501294209925,
	0.248557682972264071,
	0.266363809892617521
];

// Table 4 for expansion about 0.25:
var P3 = [
	1.685750354812596043,
	0.541731848613280329,
	0.401524438390690257,
	0.369642473420889090,
	0.376060715354583645,
	0.405235887085125919,
	0.453294381753999079,
	0.520518947651184205,
	0.609426039204995055,
	0.724263522282908870,
	0.871013847709812357,
	1.057652872753547036
];

// Table 5 for expansion about 0.35:
var P4 = [
	1.744350597225613243,
	0.634864275371935304,
	0.539842564164445538,
	0.571892705193787391,
	0.670295136265406100,
	0.832586590010977199,
	1.073857448247933265,
	1.422091460675497751,
	1.920387183402304829,
	2.632552548331654201,
	3.652109747319039160,
	5.115867135558865806,
	7.224080007363877411
];

// Table 6 for expansion about 0.45:
var P5 = [
	1.813883936816982644,
	0.763163245700557246,
	0.761928605321595831,
	0.951074653668427927,
	1.315180671703161215,
	1.928560693477410941,
	2.937509342531378755,
	4.594894405442878062,
	7.330071221881720772,
	11.87151259742530180,
	19.45851374822937738,
	32.20638657246426863,
	53.73749198700554656,
	90.27388602940998849
];

// Table 7 for expansion about 0.55:
var P6 = [
	1.898924910271553526,
	0.950521794618244435,
	1.151077589959015808,
	1.750239106986300540,
	2.952676812636875180,
	5.285800396121450889,
	9.832485716659979747,
	18.78714868327559562,
	36.61468615273698145,
	72.45292395127771801,
	145.1079577347069102,
	293.4786396308497026,
	598.3851815055010179,
	1228.420013075863451,
	2536.529755382764488
];

// Table 8 for expansion about 0.65:
var P7 = [
	2.007598398424376302,
	1.248457231212347337,
	1.926234657076479729,
	3.751289640087587680,
	8.119944554932045802,
	18.66572130873555361,
	44.60392484291437063,
	109.5092054309498377,
	274.2779548232413480,
	697.5598008606326163,
	1795.716014500247129,
	4668.381716790389910,
	12235.76246813664335,
	32290.17809718320818,
	85713.07608195964685,
	228672.1890493117096,
	612757.2711915852774
];

// Table 9 for expansion about 0.75:
var P8 = [
	2.156515647499643235,
	1.791805641849463243,
	3.826751287465713147,
	10.38672468363797208,
	31.40331405468070290,
	100.9237039498695416,
	337.3268282632272897,
	1158.707930567827917,
	4060.990742193632092,
	14454.00184034344795,
	52076.66107599404803,
	189493.6591462156887,
	695184.5762413896145,
	2567994.048255284686,
	9541921.966748386322,
	35634927.44218076174,
	133669298.4612040871,
	503352186.6866284541,
	1901975729.538660119,
	7208915015.330103756
];

// Table 10 for expansion about 0.825:
var P9 = [
	2.318122621712510589,
	2.616920150291232841,
	7.897935075731355823,
	30.50239715446672327,
	131.4869365523528456,
	602.9847637356491617,
	2877.024617809972641,
	14110.51991915180325,
	70621.44088156540229,
	358977.2665825309926,
	1847238.263723971684,
	9600515.416049214109,
	50307677.08502366879,
	265444188.6527127967,
	1408862325.028702687,
	7515687935.373774627
];

// Table 11 for expansion about 0.875:
var P10 = [
	2.473596173751343912,
	3.727624244118099310,
	15.60739303554930496,
	84.12850842805887747,
	506.9818197040613935,
	3252.277058145123644,
	21713.24241957434256,
	149037.0451890932766,
	1043999.331089990839,
	7427974.817042038995,
	53503839.67558661151,
	389249886.9948708474,
	2855288351.100810619,
	21090077038.76684053,
	156699833947.7902014,
	1170222242422.439893,
	8777948323668.937971,
	66101242752484.95041,
	499488053713388.7989,
	37859743397240299.20
];

// Table 12 for Maclaurin expansion of Jacobi's nome, q, as a function of the elliptic parameter, m:
var P11 = [
	0.0,
	1.0 / 16.0,
	1.0 / 32.0,
	21.0 / 1024.0,
	31.0 / 2048.0,
	6257.0 / 524288.0,
	10293.0 / 1048576.0,
	279025.0 / 33554432.0,
	483127.0 / 67108864.0,
	435506703.0 / 68719476736.0,
	776957575.0 / 137438953472.0,
	22417045555.0 / 4398046511104.0,
	40784671953.0 / 8796093022208.0,
	9569130097211.0 / 2251799813685248.0,
	17652604545791.0 / 4503599627370496.0
];

// Talyor expansion of K(m) - E(m) for 0 <= m <= 0.1:
var P12 = [
	1.591003453790792180,
	0.416000743991786912,
	0.245791514264103415,
	0.179481482914906162,
	0.144556057087555150,
	0.123200993312427711,
	0.108938811574293531,
	0.098853409871592910,
	0.091439629201749751,
	0.085842591595413900,
	0.081541118718303215
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// FUNCTIONS //

/**
* Inserts a compiled function into file content.
*
* @private
* @param {string} text - source content
* @param {string} id - function identifier
* @param {string} str - function string
* @returns {string} updated content
*/
function insert( text, id, str ) {
	var before;
	var after;
	var begin;
	var end;

	begin = '// BEGIN: '+id;
	end = '// END: '+id;

	before = substringBefore( text, begin );
	after = substringAfter( text, end );

	return format( '%s// BEGIN: %s\n\n%s\n%s%s', before, id, str, end, after );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var copts;
	var opts;
	var file;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, '..', 'lib', 'poly_p1.js' );
	str = header + compile( P1 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p2.js' );
	str = header + compile( P2 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p3.js' );
	str = header + compile( P3 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p4.js' );
	str = header + compile( P4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p5.js' );
	str = header + compile( P5 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p6.js' );
	str = header + compile( P6 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p7.js' );
	str = header + compile( P7 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p8.js' );
	str = header + compile( P8 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p9.js' );
	str = header + compile( P9 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p10.js' );
	str = header + compile( P10 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p11.js' );
	str = header + compile( P11 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p12.js' );
	str = header + compile( P12 );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'double',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'poly_p1';
	str = compileC( P1, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p2';
	str = compileC( P2, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p3';
	str = compileC( P3, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p4';
	str = compileC( P4, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p5';
	str = compileC( P5, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p6';
	str = compileC( P6, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p7';
	str = compileC( P7, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p8';
	str = compileC( P8, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p9';
	str = compileC( P9, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p10';
	str = compileC( P10, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p11';
	str = compileC( P11, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p12';
	str = compileC( P12, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
