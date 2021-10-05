import EventEmitter from 'events'
import { createWriteStream, readFileSync, writeFileSync } from 'fs'
// // const { Duplex } = require('stream')

const writeStream = createWriteStream('./p.txt')
// // class Command extends Duplex {
// //   _read() {}
// //   _write(chunk, encoding, callback) {
// //     let edited = chunk.toString().replace(' ', 'c')
// //     if ('w' in edited.split()) {
// //       console.log(edited);
// //       this.push(null)
// //       callback()
// //       return
// //     }
// //     this.push(edited)
// //     callback()
// //   }
// //   _final(callback) {
// //     this.push("Stuff are coming")
// //     callback()
// //   }
// // }

// // const c = new Command()

// // process.stdin.pipe(c).pipe(writeStream)

// const { promisify } = require('util')
// const sleep = promisify(setTimeout)

// async function * countDown (n, callback = async () => {}, timeBetween = 1000, ) {
//   for (var i = n; i >= 0; i--) {
//     await callback()
//     await sleep(timeBetween)
//     yield i
//   }
// }

// function cb () {
//   console.log((Math.random() * 200));
// }
// const state = { pause: false, stop: false }
// async function main() {
//   for await (const co of countDown(100, cb )) {
//     console.clear()
//     console.log(co)
//     console.table(state)
//     if (state.stop) break
//   }
// }

// main()

// function handle(signal) {
//   console.log(`Received ${signal}`);
//   console.log('Do you want to stop');
//   state.pause = true
//   process.stdin.on('data', (data) => {
//     if (!data.toString().replace('yes', '')) process.exit(1)
//     // if ('continue' in data.toString()) state.stop = true
//   })
// }
// process.on('SIGINT', handle);
// process.on('SIGTERM', handle);

const y = new EventEmitter()

y.on('call', ()=> console.log('Hellow'))

setTimeout(() => y.emit('call'), 2000)

// import { Duplex } from 'stream'
// import process from 'process'
// class Transform extends Duplex {
//   _read() {}
//   _write(chunk, encoding, callback) {
//     const streamString = chunk.toString().split(' ')
//     if (streamString.includes('clear\n')) {
//       console.clear()
//       this.push('THIS IS MY NOTER\n')
//       this.push('>> ')
//       callback()
//       return
//     }
//     if (streamString.includes('save\n')) {
//       writeFileSync('./copy.txt', readFileSync('./p.txt'))
//       this.push('File Saved!!')
//       this.push('\n>> ')
//       callback()
//       return
//     }
//     writeStream.write(chunk)
//     this.push('>> ')
//     callback()
//   }
//   _final() {
//     this.push('Noter has ended')
//     this.push(null)
//   }
// }
// process.stdout.write('THIS IS MY NOTER')
// process.stdin.pipe(new Transform()).pipe(process.stdout)
// const handle = () => {
//   console.log('Are you sure you want to terminate this?');
//   setTimeout(() => {
//     console.log('terminated')
//     process.exit(0)
//   }, 5000)
  
// }
// process.on('SIGTERM', handle)
// process.on('SIGINT', handle)


const x = process.stdin.read()
process.stdin.pause()
console.log(x);