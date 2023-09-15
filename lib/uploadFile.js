/*import fetch from 'node-fetch'
import { FormData, Blob } from 'formdata-node'
import { fileTypeFromBuffer } from 'file-type'
/**
 * Upload epheremal file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
/*const fileIO = async buffer => {
  const { ext, mime } = await fileTypeFromBuffer(buffer) || {}
  let form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  form.append('file', blob, 'tmp.' + ext)
  let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
  return json.link
}

/**
 * Upload file to storage.restfulapi.my.id
 * @param {Buffer|ReadableStream|(Buffer|ReadableStream)[]} inp File Buffer/Stream or Array of them
 * @returns {string|null|(string|null)[]}
 */
/*const RESTfulAPI = async inp => {
  let form = new FormData()
  let buffers = inp
  if (!Array.isArray(inp)) buffers = [inp]
  for (let buffer of buffers) {
    const blob = new Blob([buffer.toArrayBuffer()])
    form.append('file', blob)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.text()
  try {
    json = JSON.parse(json)
    if (!Array.isArray(inp)) return json.files[0].url
    return json.files.map(res => res.url)
  } catch (e) {
    throw json
  }
}

/**
 * 
 * @param {Buffer} inp 
 * @returns {Promise<string>}
 */
/*export default async function (inp) {
  let err = false
  for (let upload of [RESTfulAPI, fileIO]) {
    try {
      return await upload(inp)
    } catch (e) {
      err = e
    }
  }
  if (err) throw err
}*/

import FormData from "form-data"

const { fileTypeFromBuffer } = await import("file-type"
const tmpFile = (buffer) => {
  return new Promise(async (resolve, reject) => {
    const { ext, mime } = await fileTypeFromBuffer(buffer)
    const form = new FormData();
    form.append('file', buffer, {
      filename: new Date() * 1 + '.' + ext,   
      contentType: mime
    });

    const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: {
        ...form.getHeaders(),
      },
    })
    .catch((e) => resolve(e?.response))
    resolve(data) 
  })
}
const buffer = await m.quoted.download()
const res = await tmpFile(buffer)