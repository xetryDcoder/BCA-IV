a = a + b;  expression

= +  operator
a b operand


js
arithmetic operator

+
-
/
*
++   
--  
%

Assignment operator
=  a = 1
+=  a = a + 5  a += 5
-=  a = a - 6  a -= 6
*=
/=
%=
&=
|=

and  true true == true or false
or true false/true == true

comparison operator
==  a == b true false value
===  a===b true false value data typeof
!=  a != b boolean not equal value true false
!== a !== b with data type value not same true, false
> a > b  
< a < b
>= a >= b
<= a <= b

logical operator
&&  true && true - true or false   eg:  (5 < 6 && 10> 20) - flase
|| true || f/t - true or false   eg:  (5 < 6 || 10> 20) - true
!  a = true  , !a = false


ternary operator

? :

statement1 ? statement2 : statement3

condition ? exper 1 : expres 2
                T       F

condition ? exprIfTrue : exprIfFalse


var StudentClass = 5;
var level = (StudentClass >= 11) ? "College" : "School";
console.log(level); 

syntax of array
datatype varibaleName = []

var studentClass = ["bbs", "bba", "bca"]

console.log(studentClass[0])

var complexArray = [
    "bca",
    {
        "name": "Ram",
        "age" : 25
    },
    2078,
    "Koshi college"
]


var fixedSizeArray = new Array(5)