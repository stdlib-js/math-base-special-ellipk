// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=Math.sqrt,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=o,u=function(n){return e.call(n)},i=Object.prototype.hasOwnProperty,f=function(n,t){return null!=n&&i.call(n,t)},c="function"==typeof Symbol?Symbol.toStringTag:"",a=f,y=c,l=o,p=u,A=function(n){var t,r,o;if(null==n)return l.call(n);r=n[y],t=a(n,y);try{n[y]=void 0}catch(t){return l.call(n)}return o=l.call(n),t?n[y]=r:delete n[y],o},d=r&&"symbol"==typeof Symbol.toStringTag?A:p,b=d,U="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,w=function(n){return U&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},s=m,v=function(){var n,t;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=w(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},F=v()?h:N,I=d,S="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,g=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===I(n)},j=T,E=function(){var n,t;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,NaN]),n=g(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},x="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},P=E()?x:O,V=d,Y="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return Y&&n instanceof Uint8Array||"[object Uint8Array]"===V(n)},q=_,G=function(){var n,t;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),n=k(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},M="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=G()?M:z,C=d,D="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,J=function(n){return D&&n instanceof Uint16Array||"[object Uint16Array]"===C(n)},K=H,L=function(){var n,t;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,65536,65537]),n=J(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},W={uint16:L()?Q:R,uint8:B};(n=new W.uint16(1))[0]=4660;var X=52===new W.uint8(n.buffer)[0],Z=F,$=!0===X?1:0,nn=new P(1),tn=new Z(nn.buffer),rn=function(n){return nn[0]=n,tn[$]},on=F,en=!0===X?1:0,un=new P(1),fn=new on(un.buffer),cn=function(n,t){return un[0]=n,fn[en]=t>>>0,un[0]},an=cn,yn=function(n){return n!=n},ln=Number.NEGATIVE_INFINITY,pn=rn,An=an,dn=yn,bn=ln,Un=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},mn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},wn=.6931471803691238,sn=1.9082149292705877e-10,vn=1048575,hn=function(n){var t,r,o,e,u,i,f,c,a,y,l;return 0===n?bn:dn(n)||n<0?NaN:(e=0,(r=pn(n))<1048576&&(e-=54,r=pn(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(f=614244+(r&=vn)&1048576|0)>>20|0,i=(n=An(n,r|1072693248^f))-1,(vn&2+r)<3?0===i?0===e?0:e*wn+e*sn:(u=i*i*(.5-.3333333333333333*i),0===e?i-u:e*wn-(u-e*sn-i)):(f=r-398458|0,c=440401-r|0,o=(y=(l=(a=i/(2+i))*a)*l)*Un(y),u=l*mn(y)+o,(f|=c)>0?(t=.5*i*i,0===e?i-(t-a*(t+u)):e*wn-(t-(a*(t+u)+e*sn)-i)):0===e?i-a*(i-u):e*wn-(a*(i-u)-e*sn-i))))},Nn=Number.POSITIVE_INFINITY;return function(n){var r,o,e,u,i,f;return f=n,n<0&&(f=n/(n-1),r=!0),0===f?1.5707963267948966:1===f?Nn:f>1?NaN:(f<.1?i=function(n){return 0===n?1.5910034537907922:1.5910034537907922+n*(.41600074399178694+n*(.24579151426410342+n*(.17948148291490615+n*(.14455605708755515+n*(.12320099331242772+n*(.10893881157429353+n*(.09885340987159291+n*(.09143962920174975+n*(.0858425915954139+.08154111871830322*n)))))))))}(f-.05):f<.2?i=function(n){return 0===n?1.63525673226458:1.63525673226458+n*(.4711906261487323+n*(.3097284108314996+n*(.2522083117731357+n*(.22672562321968465+n*(.21577444672958598+n*(.21310877187734892+n*(.21602912460518828+n*(.2232558316330579+n*(.23418050129420992+n*(.24855768297226408+.26636380989261754*n))))))))))}(f-.15):f<.3?i=function(n){return 0===n?1.685750354812596:1.685750354812596+n*(.5417318486132803+n*(.40152443839069024+n*(.3696424734208891+n*(.37606071535458363+n*(.4052358870851259+n*(.45329438175399905+n*(.5205189476511842+n*(.609426039204995+n*(.7242635222829089+n*(.8710138477098124+1.057652872753547*n))))))))))}(f-.25):f<.4?i=function(n){return 0===n?1.7443505972256133:1.7443505972256133+n*(.6348642753719353+n*(.5398425641644455+n*(.5718927051937874+n*(.6702951362654062+n*(.8325865900109772+n*(1.0738574482479333+n*(1.4220914606754977+n*(1.9203871834023047+n*(2.6325525483316543+n*(3.6521097473190394+n*(5.115867135558866+7.224080007363877*n)))))))))))}(f-.35):f<.5?i=function(n){return 0===n?1.8138839368169826:1.8138839368169826+n*(.7631632457005573+n*(.7619286053215958+n*(.9510746536684279+n*(1.315180671703161+n*(1.9285606934774109+n*(2.9375093425313787+n*(4.594894405442878+n*(7.33007122188172+n*(11.871512597425301+n*(19.45851374822938+n*(32.20638657246427+n*(53.73749198700555+90.27388602941*n))))))))))))}(f-.45):f<.6?i=function(n){return 0===n?1.8989249102715535:1.8989249102715535+n*(.9505217946182445+n*(1.1510775899590158+n*(1.7502391069863006+n*(2.952676812636875+n*(5.285800396121451+n*(9.83248571665998+n*(18.787148683275596+n*(36.61468615273698+n*(72.45292395127771+n*(145.1079577347069+n*(293.4786396308497+n*(598.385181505501+n*(1228.4200130758634+2536.5297553827645*n)))))))))))))}(f-.55):f<.7?i=function(n){return 0===n?2.0075983984243764:2.0075983984243764+n*(1.2484572312123474+n*(1.9262346570764797+n*(3.7512896400875877+n*(8.119944554932045+n*(18.665721308735552+n*(44.603924842914374+n*(109.50920543094983+n*(274.2779548232414+n*(697.5598008606327+n*(1795.7160145002472+n*(4668.38171679039+n*(12235.762468136643+n*(32290.17809718321+n*(85713.07608195965+n*(228672.1890493117+612757.2711915852*n)))))))))))))))}(f-.65):f<.8?i=function(n){return 0===n?2.1565156474996434:2.1565156474996434+n*(1.7918056418494632+n*(3.8267512874657132+n*(10.386724683637972+n*(31.403314054680703+n*(100.92370394986955+n*(337.3268282632273+n*(1158.7079305678278+n*(4060.9907421936323+n*(14454.001840343448+n*(52076.661075994045+n*(189493.65914621568+n*(695184.5762413896+n*(2567994.048255285+n*(9541921.966748387+n*(35634927.44218076+n*(133669298.46120408+n*(503352186.68662846+n*(1901975729.53866+7208915015.330104*n))))))))))))))))))}(f-.75):f<.85?i=function(n){return 0===n?2.3181226217125106:2.3181226217125106+n*(2.6169201502912327+n*(7.897935075731356+n*(30.502397154466724+n*(131.48693655235286+n*(602.9847637356492+n*(2877.024617809973+n*(14110.519919151804+n*(70621.4408815654+n*(358977.266582531+n*(1847238.2637239718+n*(9600515.416049214+n*(50307677.08502367+n*(265444188.6527128+n*(1408862325.0287027+7515687935.373775*n))))))))))))))}(f-.825):f<.9?i=function(n){return 0===n?2.473596173751344:2.473596173751344+n*(3.727624244118099+n*(15.607393035549306+n*(84.12850842805888+n*(506.98181970406137+n*(3252.2770581451236+n*(21713.242419574344+n*(149037.04518909327+n*(1043999.3310899908+n*(7427974.817042039+n*(53503839.67558661+n*(389249886.99487084+n*(2855288351.1008105+n*(21090077038.76684+n*(156699833947.7902+n*(1170222242422.44+n*(8777948323668.9375+n*(66101242752484.95+n*(499488053713388.8+0x86813c6c7adde8*n))))))))))))))))))}(f-.875):(u=function(n){return 0===n?0:0+n*(.0625+n*(.03125+n*(.0205078125+n*(.01513671875+n*(.011934280395507812+n*(.009816169738769531+n*(.008315593004226685+n*(.007199153304100037+n*(.00633745662344154+n*(.00565311038371874+n*(.005097046040418718+n*(.004636680381850056+n*(.004249547423822886+.003919665602267974*n)))))))))))))}(e=1-f),o=function(n){return 0===n?1.5910034537907922:1.5910034537907922+n*(.41600074399178694+n*(.24579151426410342+n*(.17948148291490615+n*(.14455605708755515+n*(.12320099331242772+n*(.10893881157429353+n*(.09885340987159291+n*(.09143962920174975+n*(.0858425915954139+.08154111871830322*n)))))))))}(e-.05),i=-hn(u)*(.3183098861837907*o)),r?i/t(1-n):i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ellipk=t();
//# sourceMappingURL=browser.js.map
