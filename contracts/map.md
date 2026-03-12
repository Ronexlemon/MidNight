# Map and fold expressions
Map expressions have the form **map(f,e,e, ...)** where map is a keyword, f is a circuit or witness taking at least one argument and the **e s** are expressions

Fold expressions have the form fold(f,init,e,e, ...) where fold is a keyword, f is a circuit or witness and init and the **e** s are expressions

`
expr-> map (fun,expr{,expr})
     | fold (fun,expr,expr{,expr})
`
# Ledger assignment expressions
They have the form lhs op e where lhs is a *ledger* expression, op is one of the assignment operators =(assignment).+=(additional assignment), or -=(subtraction assignment), and e is an expression

# Declaring witness for private state
Compact code can call code external to the zero-knowledge circuits to read and update private state via witness function
*NB* A witness function declaration can appear anywhere a circuit definition can appear, including within modules.
*NB* A witness function does not have a body and its implementation is instead an input to the contract in the Typescript target.

# Declaring and maintaining public state
Compact code can declare public state through ledger declaration
```
ledger val:Field;
export ledger cnt:Counter;
sealed ledger u8List:List<Uint<8>>;
export sealed ledger mapping: Map<Boolean,Field>;
```

# Nested state types in the map type
Example:

```
import CompactStandardLibrary;
ledger fld: Map<Boolean,Map<Field,Counter>>;

export circuit initNestedMap(b:Boolean):[]{
    fld.insert(b,default<Map<Field,Counter>>);
}
export circuit initNestedCounter(b:Boolean,n:Field):[]{
    fld.lookup(b).insert(n,default<Counter>);
}
export circuit incrementNestedCounter(b: Boolean,n:Field,k:Uint<64>):[]{
    fld.lookup(b).lookup(n).increment(k);
}
export circuit readNestedCounter1(b:Boolean,n:Field):Uint<64>{
    return fld.lookup(b).lookup(n).read();
}
export circuit readNestedCounter2(b:Boolean,n:Field): Uint<64>{
    return fld.lookup(b).lookup(n);
}
```

# Sealed and unsealed ledger fields

A **Sealed** field cannot be set except during contract initialization.That is, its value can be modified only by the contract constructor(if any), either directly within the body of the constructor or via helper circuits called by the constructor.
*NB* The sealed keyword must come after the export keyword(if present) and before the ledger keyword
i.e:
```
sealed ledger field1:Uint<32>;
export sealed ledger field2:Uint<32>;
circuit init(x:Uint<32>):[]{
    field2 = x;
}
constructor(x:Uint<16>){
    field1 = 2 *x;
    init(x);

}
```
