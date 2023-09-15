/*import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type'
*/
/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`s
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
/*export default async buffer => {
  const { ext, mime } = await fileTypeFromBuffer(buffer)
  let form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  form.append('file', blob, 'tmp.' + ext)
  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  })
  let img = await res.json()
  if (img.error) throw img.error
  return 'https://telegra.ph' + img[0].src
}
*/

const FormData from"form-data")
const { fileTypeFromBuffer } = await import("file-type")
const tmpFile = (buffer) => {
  return new Promise(async (resolve, reject) => {
    const { ext, mime } = await fileTypeFromBuffer(buffer)
    const form = new FormData();
    form.append('file0', buffer, {
      filename: new Date() * 1 + '.' + ext,   
      contentType: mime
    });

    const { data } = await axios.post("https://telegra.ph/upload", form, {
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
return res
