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
const spl_token_1 = require("@solana/spl-token");
const myKeypair_json_1 = __importDefault(require("../myKeypair.json"));
const keypair = web3_js_1.Keypair.fromSecretKey(new Uint8Array(myKeypair_json_1.default));
const connection = new web3_js_1.Connection("https://api.devnet.solana.com", "confirmed");
const mint = new web3_js_1.PublicKey("5cSWnHeGH4hMAzrZv3HqyA7JhePjXEVEemqHVhi82nUo");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const tokenAccount = yield (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, keypair, mint, keypair.publicKey);
    const ata = tokenAccount.address;
    console.log("Associated Token Account: ", ata.toBase58());
    const amount = 10e6;
    yield (0, spl_token_1.mintTo)(connection, keypair, mint, ata, keypair.publicKey, amount);
    console.log("Minted", amount, "to", ata.toBase58());
}))();
