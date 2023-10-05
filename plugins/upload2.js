import axios from 'axios'
import FormData from 'form-data'
import { fileTypeFromBuffer } from "file-type"
import fs from "fs"

let tmpFile = (buffer) => {
  return new Promise(async (resolve, reject) => {
    let { ext, mime } = await fileTypeFromBuffer(buffer)
    let form = new FormData();
    form.append('file', buffer, {
      filename: new Date() * 1 + '.' + ext,   
      contentType: mime
    });

    let { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: {
        ...form.getHeaders(),
      },
    })
    .catch((e) => resolve(e?.response))
    resolve(data) 
  })
}
handler.help = ['upload2 <file>']
handler.tags = ['tools']
handler.command = ['upload2','tourl2']
handler.premium = false
handler.diamond = true

export default handler