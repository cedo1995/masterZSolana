import { Keypair } from "@solana/web3.js"

// genero una keypair (chiave pubblica + privata)
const keypair = Keypair.generate()

console.log("Public key:", keypair.publicKey.toBase58());
console.log("Private key:", keypair.secretKey.toString());
