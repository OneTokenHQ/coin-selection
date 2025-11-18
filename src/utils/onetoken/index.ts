import { composeTxPlan } from './transaction';
import { signTransaction, signTx } from './signTx';
import { dAppUtils } from './dapp';
import { txToOneToken } from './txToOneToken';
import { hasSetTagWithBody } from './hasSetTag';

const onetokenUtils = {
  composeTxPlan,
  signTransaction,
  signTx,
  txToOneToken,
  hasSetTagWithBody,
};

export { onetokenUtils, dAppUtils };
