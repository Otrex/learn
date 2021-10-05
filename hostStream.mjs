import express from 'express';
import path from 'path';
import cors from 'cors';
import { exec, spawn } from 'child_process';
import { createWriteStream, readFileSync, writeFileSync } from 'fs'
import { Duplex } from 'stream';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express()

app.use(express.json());
app.use(cors())
app.use(express.static(path.join('.', 'static')));

const writeStream = createWriteStream('./static/stream.txt')
const writeStream2 = createWriteStream('./static/stream2.txt')
class Command extends Duplex {
  _read() {}
  _write(chunk, encoding, callback) {
    let edited = chunk.toString()
    this.push(edited)
    callback()
  }
  _final(callback) {
    this.push("Stuff are coming")
    callback()
  }
}

const c = new Command()

process.stdin.pipe(c).pipe(writeStream)

app.use('/', (req,res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Transfer-Encoding', 'chunked');
  // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  // const createHLSVOD = spawn('node', ['./hostStream.mjs', 4500]);
  const createHLSVOD = exec('node ./hostStream.mjs 4500')
  // const createHLSVOD = spawn('bash', ['trancoderv2.sh', './videos', './transcoder']);
  // createHLSVOD.stdout.pipe(writeStream2)
  createHLSVOD.stdout.on('data', (data) => {
    res.write(data.toString())
    // res.end(data.toString())
  })
  // createHLSVOD.stderr.on('data', (data) => {
  //   res.write(data.toString())
  //   res.end(data.toString())
  // })
  // createHLSVOD.on('close', (data) => {
  //   res.end(data.toString())
  // })
})
console.log(process.argv)
app.listen(+process.argv[2], () => {
  console.log('Server has started on PORT::3000')
})

