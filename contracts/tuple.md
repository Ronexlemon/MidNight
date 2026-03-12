# Tuple creation
Tuple values are created with expressions of the form [e, ...] where e, ... is a sequence of zero or more comma-seoarated argument expressions. A non-empty sequence can have an optional trailing argument comma. The *lenght* of a tuple is the number of sub expressions in the tupple creation expression

The static type of a tuple creation expression is [T, ...] with the number of types matches length of the tuple and each type T is the type of the corresponding expression

# Asserts
An assert has the form assert(e,"msg") where e is an expression and msg is a string message. **e** must have a Boolean type, otherwise is a static type error.

` expr -> assert(expr,"msg")`
*NB* Each assertion is checked at runtime and contrained in-circuit

# Ledger expressions
A compact program interacts with its public state by invoking operations upon the ledger or ledger state types.
There are two different forms of ledger calls.
- **Kernel operations** : Are operation that do not depend on specific ledger state. They can be invoked by expressions of the form k.op(e, ...), where **k** is the name of a ledger field declared to have the special ADT type kernel, **op** is the name of a builtin kernel operation and e, ... is a comma separated sequence of zero or more argument expressions. The **CompactStandardLibrary** predefines the ledger field name kernel to have ledger type kernel, i.e the built-in self operation can be called from a circuit as follows:
```
import CompactStandardLibrary;
circuit f(): ContractAddress{
    return kernel.self();
}
```
- **Ledger ADT operations**: Are operations on the program's public ledger state. They are invoked by expressions of the form member.op(e, ...)..., where member is a ledger field and **.op**(e, ...)... are sequence of zero or more ledger ADT operation invocations, where each op is the name of a ledger ADT operation and each e, ... is a sequence of zero or more comma-separated argument expressions

