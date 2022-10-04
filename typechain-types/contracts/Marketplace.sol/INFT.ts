/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface INFTInterface extends utils.Interface {
  functions: {
    "getRoyaltyFee()": FunctionFragment;
    "getRoyaltyRecipient()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRoyaltyFee" | "getRoyaltyRecipient"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRoyaltyFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyaltyRecipient",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getRoyaltyFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyaltyRecipient",
    data: BytesLike
  ): Result;

  events: {};
}

export interface INFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getRoyaltyFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoyaltyRecipient(overrides?: CallOverrides): Promise<[string]>;
  };

  getRoyaltyFee(overrides?: CallOverrides): Promise<BigNumber>;

  getRoyaltyRecipient(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getRoyaltyFee(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyRecipient(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getRoyaltyFee(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyRecipient(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getRoyaltyFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoyaltyRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
