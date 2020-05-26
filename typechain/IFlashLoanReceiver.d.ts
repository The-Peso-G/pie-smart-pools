/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IFlashLoanReceiverInterface extends Interface {
  functions: {
    executeOperation: TypedFunctionDescription<{
      encode([_token, _amount, _fee, _params]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class IFlashLoanReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IFlashLoanReceiver;
  attach(addressOrName: string): IFlashLoanReceiver;
  deployed(): Promise<IFlashLoanReceiver>;

  on(event: EventFilter | string, listener: Listener): IFlashLoanReceiver;
  once(event: EventFilter | string, listener: Listener): IFlashLoanReceiver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IFlashLoanReceiver;
  removeAllListeners(eventName: EventFilter | string): IFlashLoanReceiver;
  removeListener(eventName: any, listener: Listener): IFlashLoanReceiver;

  interface: IFlashLoanReceiverInterface;

  functions: {
    executeOperation(
      _token: string,
      _amount: BigNumberish,
      _fee: BigNumberish,
      _params: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  executeOperation(
    _token: string,
    _amount: BigNumberish,
    _fee: BigNumberish,
    _params: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    executeOperation(
      _token: string,
      _amount: BigNumberish,
      _fee: BigNumberish,
      _params: Arrayish
    ): Promise<BigNumber>;
  };
}
