# Generic parameter reference
      *For generic modules, they are in scope within the module.
      *For generic structures, they are in scope for the structure's fields.
      *For generic circuits, they are scope in the circuit's parameters, its return types annotation and its body.
      >In these scopes, a reference to a generic parameter (that is not otherwise shadowed by some other identifier binding) is either a type or a natural-number size

# CIRCUITS
  The basic operational element in compact is the *circuit* . > This corresponds closely to a function in most language but is compiled directly into a zero-knowledge circuit.

  ` *prog* -> [export][pure] circuit id gpars([p:type,{p:type}]):type block
   *gpars* -> [<[gpar{,gpar}]>]
   *gpar* -> #id
          | id
    *block* -> {stmt;}
   `
# Pure and Impure circuits
 A Compact circuit is considered *pure* if its computes its outputs from its inputs without reference to or modification of public state (via ledger) or private state (via witnesses).
 An impure circuit if the body of the circuit contains a ledger operation, a call to any inpure circuit, or a call to a witness
 **Example of pure circuits:**
 ```pure circuit c(a:Field):Field{
    ...
 }

 export pure circuit c(a:Field):Field{
    ...
 }
 ```

