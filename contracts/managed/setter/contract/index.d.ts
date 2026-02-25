import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<PS> = {
  secretKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  get(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  set(context: __compactRuntime.CircuitContext<PS>, v_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  clear(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  get(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  set(context: __compactRuntime.CircuitContext<PS>, v_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  clear(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  readonly authority: Uint8Array;
  readonly value: bigint;
  readonly state: number;
  readonly round: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>,
               sk_0: Uint8Array,
               v_0: bigint): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
