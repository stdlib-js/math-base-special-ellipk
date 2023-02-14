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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var HALF_PI = require( '@stdlib/constants-float64-half-pi' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var mediumPositive = require( './fixtures/cpp/medium_positive.json' );
var closeToUnity = require( './fixtures/cpp/close_to_unity.json' );
var mediumNegative = require( './fixtures/cpp/medium_negative.json' );
var largeNegative = require( './fixtures/cpp/large_negative.json' );


// VARIABLES //

var ellipk = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( ellipk instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ellipk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the first kind (medium positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipk( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 25.0 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the first kind (values close to positive unity)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = closeToUnity.expected;
	x = closeToUnity.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipk( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 8000.0 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the first kind (medium negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumNegative.expected;
	x = mediumNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipk( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.5 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the first kind (large negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeNegative.expected;
	x = largeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipk( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1e9 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided values larger than `1.0`', opts, function test( t ) {
	var v = ellipk( 1.01 );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `1.0`', opts, function test( t ) {
	var v = ellipk( 1.0 );
	t.equal( v, PINF, 'return expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+infinity`', opts, function test( t ) {
	var v = ellipk( PINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', opts, function test( t ) {
	var v = ellipk( NINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `π/2` if provided `0`', opts, function test( t ) {
	var v = ellipk( 0 );
	t.equal( v, HALF_PI, 'returns expected value' );
	t.end();
});
