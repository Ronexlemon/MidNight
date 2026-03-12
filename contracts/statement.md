# Statements
A Statement may be:
  * a for loop
  * an if statement
  * a return statement
  * a block - a sequence of zeror or more statements in a nested scope, enclosed by curly braces
  * a const binding statement
  * an expression

## For Loop
 syntax:
    ```
    for (const i of <vector>) <statement>
    for (const i of <lower>..<upper>)<statement>
    ```
## If Statement

    ```
    if (textexpr)
    <statement>
    if (textexpr)
    <statement>
    else
    <statement>
    ```
# Structure Creation
 Structure values are created with structure creation expressions. The expression S {f, ...} is a structure creation expression, where S is a structure type and f, ... is a sequence of zero or more comma-separated field value specifiers
 A Field value specifier can be one of three things:
   * A **positional** field value is an expression. Evaluating the expression gives the value for the field. Positional field value must be given in the order that fields are declared in the corresponding structure declaration 
   * A **named** field value is of the form id: e where id is a field name and e is an expression. *NB* if named and positional fields are mixed, all the named fields must appear after all the positional fields
   * **Spread** expression is of the form ...e where ... is the literal three dots (ellipsis) token and e is an expression.
*The example below demonstrates the use of positional and spread field values*
```
struct S {a:Uint<32>,b :Boolean, c :Bytes<8>}
circuit f(x :Uint<32>,y: Boolean, z: Bytes<8>):S{
    const s1 = S{c:z,a:x,b:y};
    // Alternatively, s1 can be created with the positional syntax S{ x,y,z}
    //or a mix of positional and named field values S {x,c:z,b:y}
    const s2 = S{...s1,b:true}
    //s2 is created using the spread syntax, So s2 has the field values
    // as s1 except that b is true

    const s3 = S{...s2,c :'lemonr'}
    // s3 is also created using the spread syntax. s3 has the same field values
    // as s2 except that c is 'lemonr'
    return s3;
}
```

