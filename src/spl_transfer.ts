import {
    Keypair,
    Connection,
    PublicKey,
} from "@solana/web3.js";

import {
    getOrCreateAssociatedTokenAccount,
    transfer,
} from "@solana/spl-token";

import wallet from "../myKeypair.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("5cSWnHeGH4hMAzrZv3HqyA7JhePjXEVEemqHVhi82nUo");
const fromAta = new PublicKey("E2eCTBja9hTfCC6YatoBS82QUjKPSysFx28zfF7t65K6");

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58());

(async () => {

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        to.publicKey,
    );

    const toAta = tokenAccount.address;
    console.log("Associated Token Account: ", toAta.toBase58());

    const amountToAta = tokenAccount.amount;
    console.log("Amount in ATA: ", amountToAta.toString());

    const amount = 10e6;

    await transfer(
        connection,
        keypair,
        fromAta,
        toAta,
        keypair,
        amount
    );

    console.log("Transferred", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
})()
