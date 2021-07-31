# eth_series #show 2.
###### Solidity Programming Language. types booleans and int | uint

![ethereum hero](./assets/img/hero.png)
###### image Copyright (c) 2019 ethereum.org contributors

#### [eth_series #show2 source code](https://github.com/xioxium/eth_series/blob/main/doc/show2.md)
#### [jump back to the #index!](https://github.com/xioxium/eth_series/blob/main/README.md)

Hello,  
have you ever had that feeling mixed of frustration and excitement when you meet a new interesting person? I feel frustrated because I still don't know how to interact properly with this person, but in the same time there is excitement because I have someone new to talk with. However, someone to tell my story in a new way.  
Getting to learn a new programming language is the same with the little addition, there is a manual to read and understand. In real life with new relationships we know from experience what to don't do to result rude, what to do to result nice and bla bla bla. At the end of the story the instinct and feelings will tell us what's good what's bad, and we will take an action in the right direction, maybe the right one.  

With programming language it is not like this, period.  

It's important to know how to write the code correctly so doing the machine will execute the routine, or the infinite routines, we "told" it to do. We need to know how in this specific language we declare a function for example, we need to know the available types for variables, and we need to get used to the syntax. Like, are hyphens allowed? what about semicolons? operators? does this language have memory allocation? so on.

So I'm glad in this foggy Saturday to write my self a summary of the Solidity Language types starting with `booleans` and finishing with `int`| `uint`.  
for all of you interested in reading the manual you can read **[IT](https://docs.soliditylang.org/)** 👈 at this link. Now as now __AUGUST 2021__ the version of the manual is __*#0.8.6*__

## booleans 😁

structure declaration of booleans:  
`<type>` | `<visibility>` | `<name>` |
```solidity
bool public isTrue = false
bool internal isFalse = true;
```
Is it mandatory to declare the visibility? nope it is not, but the further you go on in writing solidity code the more it will be useful and secure and safe to use the visibility for everyfreaking everything. it will spare you from getting your wallet empty during deploying your smart contract on the main Ethereum network. Yes, because as far as I'm understanding the gas for deploying is calculated keeping in account also the visibility of the very freaking everything.

> **from the manual about visibility** [👉 link at it](https://docs.soliditylang.org/en/v0.8.6/contracts.html#visibility-and-getters) -> Solidity knows two kinds of function calls: internal ones that do not create an actual EVM call (also called a “message call”) and external ones that do. Because of that, there are four types of visibility for functions and state variables.

###### anyway boolean's values are just true and false;

###### the operators:

- `!` not `true`/`false` the pretty simple very logical negation `if x not true do something else`
- `&&` and `true`/`false` logical but complex conjunction `if x and y are false do this` 
- `||` or `true`/`false`
  
> **from the manual** [👉 link at it](https://docs.soliditylang.org/en/v0.8.6/types.html#booleans) -> The operators || and && apply the common short-circuiting rules. This means that in the expression f(x) || g(y), if f(x) evaluates to true, g(y) will not be evaluated even if it may have side-effects.

so check if your logic can skip the side-effects, booleans are evil uhauhauh 

- `==` equal `true`/`false` well `if a is equal true, go to watch a movie and order pop-corns`
- `!=` not equal `true`/`false` again `if a is different from false, go to sleep`

## integers 🧐

structure declaration of integers:  
`<type>` | `<visibility>` | `<name>` |
```solidity
uint8 internal oneUint = 0 
```

sizes for `int` AND `uint` siblings. I'll initiate the variables with the max value they can handle and commenting for the minimum value
```solidity
uint theBiggerAlias // of uint256
int theSignedBiggerAlias // of int256

// bits and bytes 😀 => 1byte = 8bit
uint8 theKid = 255 // it starts from 0
int8 theSignedKid 127 // it starts from -128

// bits and bytes 😀 => 2bytes = 16bits
uint16 theYouth = 65535 // it starts from 0
int16 theSignedYouth = 32767 // it starts from -32768

// bits and bytes 😀 => 4bytes = 32bits
uint32 theGrown = 4294967295 // it starts from 0
int32 theSignedGrown = 2147483647 // it starts from -2147483648

// bits and bytes 😀 => 8bytes = 64bits
uint64 theReadyForPension = 18446744073709551615 // it starts from 0
int64 theSignedReadyForPension = 9223372036854775807 // it starts from -9223372036854775808

// bits and bytes 😀 => 16bytes = 128bits
uint128 theStillAlive = 340282366920938463463374607431768211455 // it starts from 0
int128 theSignedStillAlive = 170141183460469231731687303715884105727 // it starts from -170141183460469231731687303715884105728

// bits and bytes 😀 => 32bytes = 256bits
uint256 theMethuselah = 115792089237316195423570985008687907853269984665640564039457584007913129639935 // it starts from 0
int256 theSignedMethuselah = 57896044618658097711785492504343953926634992332820282019728792003956564819967 // it starts from -57896044618658097711785492504343953926634992332820282019728792003956564819968
```

during the writing of this, I found something interesting regarding integers. Go to this anchor, you can always come back with just a click
[skip to the #integer-costs-money!](#integer-costs-money)

<a id="integer-costs-money-back" name="integer-costs-money-back"></a>
Integers in solidity language seem to be very important, in fact they are unwrapped on three full pages of the manual, all the operators, that can apply to this type, are explained deeply. Let's see it.

straight after the list of available operators it comes a warning ⚠️
> **from the manual** [👉 link at it](https://docs.soliditylang.org/en/v0.8.6/types.html#integers) -> Integers in Solidity are restricted to a certain range. For example, with uint32, this is 0 up to 2**32 - 1. There are two modes in which arithmetic is performed on these types: The “wrapping” or “unchecked” mode and the “checked” mode. By default, arithmetic is always “checked”, which mean that if the result of an operation falls outside the value range of the type, the call is reverted through a failing assertion. You can switch to “unchecked” mode using unchecked { ... }. More details can be found in the section about unchecked.

###### the operators:

- [👉 link -> Comparisons](https://docs.soliditylang.org/en/v0.8.6/types.html#comparisons): `<=`, `<`, `==`, `!=`, `>=`, `>` these guys evaluate to `bool` evils `if 5 major of 989 you'll win an Ice-Cream`
- [👉 link -> Bit operators](https://docs.soliditylang.org/en/v0.8.6/types.html#bit-operations): `&`, `|`, `^`, `~` these guys... well I don't understand, read it please and back to me with an explanation.
- [👉 link -> Shift operators](https://docs.soliditylang.org/en/v0.8.6/types.html#shifts): `<<`, `>>` these guys are shifts, mhhh good for them right?
- [👉 link -> Addition, Subtraction and Multiplication](https://docs.soliditylang.org/en/v0.8.6/types.html#addition-subtraction-and-multiplication): `+`, `-`,  `*` I mean, these operations I can do it, I know, you know, and he/she/it knows yeah right?
- [👉 link -> Division](https://docs.soliditylang.org/en/v0.8.6/types.html#division): `/` ohhhh I want to divide 1 by 0 and have a [👉Panic Errorrrrrr](https://docs.soliditylang.org/en/v0.8.6/control-structures.html#panic-via-assert-and-error-via-require) in the compiler! I will get `0x12` error code 🤩
- [👉 link -> Modulo](https://docs.soliditylang.org/en/v0.8.6/types.html#modulo): `%` ohhhh I want to module 1 by 0 and have a [👉Panic Errorrrrrr](https://docs.soliditylang.org/en/v0.8.6/control-structures.html#panic-via-assert-and-error-via-require) in the compiler! I will get `0x12` error code 🤩 It's funny having panic right?
- [👉 link -> Exponentiation](https://docs.soliditylang.org/en/v0.8.6/types.html#exponentiation): `**` I'm sure of it like the sun shines today...behind the fog yes.
- `unary -` (only for signed integers) this guy is lonely, feeling very lonely 😕

> **from the manual** [👉 link at it](https://docs.soliditylang.org/en/v0.8.6/types.html#integers) -> For an integer type X, you can use type(X).min and type(X).max to access the minimum and maximum value representable by the type.

this is kool thing 👆

So, 
> Let's cut the bull's head (used to say when you want to conclude fast an explanation)

as you can see I'm really not into Mathematical things, so I just linked you to the manual or to other resources.
These resources are things I'm reading too, to have a better understanding of the math matter. Not easy stuff folks, not at all. have fun with it, so do I, maybe.

My greatest problem is to stop thinking about numbers as so simple as 1, 2, 3 and 4 and beginning thinking about them as binary, or hexadecimal. I want just to say this:  
the decimal **12** is equal to the binary value of **1100** how do we do this conversion?

### check this article right [here](https://indepth.dev/posts/1019/the-simple-math-behind-decimal-binary-conversion-algorithms) 🤯
it goes so deeply in the explanation that you can see the logic behind the Ethereum Virtual Machine very well.  
  
### about Bitwise operator????? 
#### check this article right here for [Bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) 🤯

#### check this article right here for [Bitwise OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) 🤯

#### check this article right here for [Bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) 🤯

#### [I started reading this too, it's something related to IBM z/OS specifically for C++ language](https://www.ibm.com/docs/en/zos/2.4.0?topic=operators-binary-expressions) Obviously folks every programming language speaks his own words but the definitions can clarify these arguments. 

> A small note about my declaration on the [#index](https://github.com/xioxium/eth_series/blob/main/README.md#subliminal-things) page of this blog:
> I consider open source also documentation from proprietary software, hardware houses because free access to learning resources are great improvements.

## <a id="integer-costs-money" name="integer-costs-money"></a>integer costs money
[back to the #integers!](#integer-costs-money-back)   
⚠️ so yes, it depends on the size of the integer how much you pay for deploying your smart contract
check this discussion and come back here 😉 <a href="https://ethereum.stackexchange.com/questions/3067/why-does-uint8-cost-more-gas-than-uint256#answer-3071" target="_blank">jump to #integer costs money!</a>

Are you surprised? Me not that much, because I keep in mind that ethereum is a blockchain for financial operations, so it's clear now the `big why` integers are so important because, we talk money not just `1+1 equal 2`.  
Every once in a while I see some dApps or swappers being hacked, and or exploited, the thing is going wild and getting so easy to achieve because, as me, we all want to earn money right? The bad actors too are going for it, and the bad actors know very well that due to the `Holy Grail` assumption:

>you're going to be rich with cryptos in a second, just deploy NOW your dApp with this automated script and earn 200% on your stack!

And then it comes the first shock. Huge amount of money to deploy and a lot of vulnerabilities going around and bad actors know this very well.  
This is why is important to know the rules behind the solidity language, less money to deploy, more secure code and less headache after.  
I said **less** didn't say **NO**. 😎

Short story, the bigger the integer the smaller the costs, pretty not logical right, but math is math, and it has its rules no matter what.

but <a href="https://ethereum.stackexchange.com/questions/3067/why-does-uint8-cost-more-gas-than-uint256#answer-3111" target="_blank">it could cost less if in structs!</a>

[back to the #integers!](#integer-costs-money-back)

## Yeah it has been the one really hard foggy day here in Iceland.
The summer is almost gone, the COVID still going around like madness and Math is still my bigger enemy. How about you? Loving numbers things? Good weather in your country?  
I did say something like `**booleans are evils**`  how about integers now... I can just say let's back to school, at least me, yeah better to do so.  

__**I just started writing two articles, one it is about the development tools available to write solidity, deploying smart contracts and NFTs.  
The other one it will be coding, I swear, always on your Gods folks, I don't have one indeed impossible to have more. Just finishing them up and publish them later next days.**__

#### have a good day folks.


