require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food bleak radar right purse coral light army genre'; 
let testAccounts = [
"0x7724fc89d4d6b173ffe50105593aa1968f6d867f89861ba10b8366447958f090",
"0x2770eea70c91d5cb0a9760832b44f3935e8e9c95aa880e1f556e6a3c6d2e4dd2",
"0x5d5e5824e6e13405ed1fecca9cada968ba292f0e8bedf5d2b365abbe10d78d29",
"0xa718b6a565dc33b1cd6c7cf381bf061bf72b6cfb2e63517a535da452a24f394b",
"0x33ba0ef87359c1adabd64d252eeb9923ee3869f9cb289262991cd79fef891530",
"0xa761efd4697b2c3be4ad21ec3d9a421beb78173bbe26af9ac54d1a8ccdc25f95",
"0xa4e88c79cdfd52b5156a7fd544ba21dec7ab5ed041122210fb231f33b5acb2c5",
"0x50ad683e315fed8b23d42addd3549b847985422fc7535bd8e78f03a25bfcca28",
"0x85f95443915a226a6e1efd2c0ae02cd2f041c17dd513edcf18a01d11831bae40",
"0xa3e19c0e43960c6ee1f79cc61848e6102c5dc62bee95b8cc01863c327729be2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
