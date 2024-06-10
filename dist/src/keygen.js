"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
// genero una keypair (chiave pubblica + privata)
const keypair = web3_js_1.Keypair.generate();
console.log("Public key:", keypair.publicKey.toBase58());
console.log("Private key:", keypair.secretKey.toString());
