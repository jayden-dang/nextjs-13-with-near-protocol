/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

export class Contract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  async getTokenAccount() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_total_token",
    });
  }
}
