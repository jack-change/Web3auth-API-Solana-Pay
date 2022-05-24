import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { clusterApiUrl, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { NextApiRequest, NextApiResponse } from "next"
import { createQR, encodeURL, TransferRequestURLFields, findReference, validateTransfer, FindReferenceError, ValidateTransferError } from "@solana/pay";
import internal from "stream";
import BigNumber from "bignumber.js";

export type MakeTransactionInputData = {
  reference: string,
  amount: string,
  shopAddress: string,
}

export type MakeTransactionOutputData = {
  signature: string,
  message: string,
}

type ErrorOutput = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MakeTransactionOutputData | ErrorOutput>
) {
  try {
    const input_data  = req.query as MakeTransactionInputData;
    const  amount = input_data.amount;
    const shopAddress = input_data.shopAddress
    const reference = input_data.reference
    const network = WalletAdapterNetwork.Devnet
const endpoint = clusterApiUrl(network)
const connection = new Connection(endpoint);
const urlParams: TransferRequestURLFields = {
  recipient: new PublicKey(shopAddress),
  splToken: new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"),
  amount: new BigNumber(Number(amount)),
  reference: new PublicKey(reference),
  label: "Cookies Inc",
  message: "Thanks for your order! 🍪",
}
    // Check if there is any transaction for the reference
    const signatureInfo = await findReference(connection, new PublicKey(reference), { finality: 'confirmed' })
    // Validate that the transaction has the expected recipient, amount and SPL token
    const data = await validateTransfer(
      connection,
      signatureInfo.signature,
      {
        recipient: new PublicKey(shopAddress),
        amount: new BigNumber(Number(amount)),
        splToken: new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"),
        reference: new PublicKey(reference),
      },
      { commitment: 'confirmed' }
    )

            console.log(data);
              res.status(200).json({
                    signature: "recieved",
                    message:  "Thanks for your order! 🍪",
                  });}
                   catch
                   {
                     res.status(200).json({
                        signature:"not_yet",
                        message:  "be patient my guy",
                  });
    }
  }
