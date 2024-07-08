import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "buyer";

export const TransactionTitle = (record: TTransaction): string => {
  return record.buyer?.toString() || String(record.id);
};
