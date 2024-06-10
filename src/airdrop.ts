import {
    LAMPORTS_PER_SOL,
    Keypair,
    Connection
} from "@solana/web3.js";

// Importo la chiave privata del wallet precedentemente generato tramite il comando yarn keygen
import wallet from "../myKeypair.json";

// Recupero la keypair dal wallet 
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Creo una nuova connessione alla devnet
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
    try {

        // Richiedo un airdrop di 1 SOL al wallet 
        const airdropSignature = await connection.requestAirdrop(keypair.publicKey, 1 * LAMPORTS_PER_SOL);

        // Attendo la conferma della transazione e stampo il link della transazione sull'explorer di Solana
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    } catch (error) {
        console.error(error);
    }
})();
