import * as dotenv from 'dotenv'
dotenv.config()

import TronWeb from 'tronweb'

const fullNode = 'https://api.trongrid.io'
const solidityNode = 'https://api.trongrid.io'
const eventServer = 'https://api.trongrid.io'
const privateKey = process.env.PRIVATE_KEY
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey)
tronWeb.setHeader({"TRON-PRO-API-KEY": process.env.TRONGRID_API_KEY})

const args = process.argv.slice(2)
const [to, amount] = args
const toHex = tronWeb.toHex(to)
const from = tronWeb.address.fromPrivateKey(privateKey)
const fromHex = tronWeb.toHex(from)

console.log(`Transfer ${amount} SUN from ${from} to ${to}`)
tronWeb.transactionBuilder.sendTrx(toHex, amount, fromHex)
