/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Computes the complete elliptic integral of the first kind.
*
* @param m - input value
* @returns evaluated elliptic integral
*
* @example
* var v = ellipk( 0.5 );
* // returns ~1.854
*
* v = ellipk( 2.0 );
* // returns NaN
*
* v = ellipk( -1.0 );
* // returns ~1.311
*
* v = ellipk( Infinity );
* // returns NaN
*
* v = ellipk( -Infinity );
* // returns NaN
*
* v = ellipk( NaN );
* // returns NaN
*/
declare function ellipk( m: number ): number;


// EXPORTS //

export = ellipk;
