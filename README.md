<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ellipk

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [complete elliptic integral of the first kind][elliptic-integral].

<section class="intro">

The [complete elliptic integral of the first kind][elliptic-integral] is defined as

<!-- <equation class="equation" label="eq:complete_elliptic_integral_first_kind" align="center" raw="K(m)=\int_0^\tfrac{\pi}{2} \frac{d\theta}{\sqrt{1-m \sin^2\theta}}" alt="Complete elliptic integral of the first kind"> -->

<div class="equation" align="center" data-raw-text="K(m)=\int_0^\tfrac{\pi}{2} \frac{d\theta}{\sqrt{1-m \sin^2\theta}}" data-equation="eq:complete_elliptic_integral_first_kind">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fa2cf1d471224644251a972f9424f30bde62c2c3/lib/node_modules/@stdlib/math/base/special/ellipk/docs/img/equation_complete_elliptic_integral_first_kind.svg" alt="Complete elliptic integral of the first kind">
    <br>
</div>

<!-- </equation> -->

where the parameter `m` is related to the modulus `k` by `m = k^2`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import ellipk from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ellipk@deno/mod.js';
```

#### ellipk( m )

Computes the [complete elliptic integral of the first kind][elliptic-integral].

```javascript
var v = ellipk( 0.5 );
// returns ~1.854

v = ellipk( -1.0 );
// returns ~1.311

v = ellipk( 2.0 );
// returns NaN

v = ellipk( Infinity );
// returns NaN

v = ellipk( -Infinity );
// returns NaN

v = ellipk( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is valid for `-∞ < m <= 1`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import ellipk from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ellipk@deno/mod.js';

var m;
var i;

for ( i = 0; i < 100; i++ ) {
    m = -1.0 + ( randu() * 2.0 );
    console.log( 'ellipk(%d) = %d', m, ellipk( m ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z][@fukushima:2009a].
-   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038][@fukushima:2015a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ellipe`][@stdlib/math/base/special/ellipe]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the second kind.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ellipk.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ellipk

[test-image]: https://github.com/stdlib-js/math-base-special-ellipk/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-ellipk/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ellipk/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ellipk?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ellipk.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ellipk/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ellipk/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-ellipk/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-ellipk/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-ellipk/blob/main/branches.md

[elliptic-integral]: https://en.wikipedia.org/wiki/Elliptic_integral

[@fukushima:2009a]: https://doi.org/10.1007/s10569-009-9228-z

[@fukushima:2015a]: https://doi.org/10.1016/j.cam.2014.12.038

<!-- <related-links> -->

[@stdlib/math/base/special/ellipe]: https://github.com/stdlib-js/math-base-special-ellipe/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
