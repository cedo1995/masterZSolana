"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
// Importo la chiave privata del wallet precedentemente generato tramite il comando yarn keygen
const myKeypair_json_1 = __importDefault(require("../myKeypair.json"));
// Recupero la keypair dal wallet 
const keypair = web3_js_1.Keypair.fromSecretKey(new Uint8Array(myKeypair_json_1.default));
// Creo una nuova connessione alla devnet
const connection = new web3_js_1.Connection("https://api.devnet.solana.com", "finalized");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Richiedo un airdrop di 1 SOL al wallet 
        const airdropSignature = yield connection.requestAirdrop(keypair.publicKey, 1 * web3_js_1.LAMPORTS_PER_SOL);
        // Attendo la conferma della transazione e stampo il link della transazione sull'explorer di Solana
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    }
    catch (error) {
        console.error(error);
    }
}))();
