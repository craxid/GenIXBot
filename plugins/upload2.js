import axios from 'axios'
import FormData from 'form-data'
import { fileTypeFromBuffer } from "file-type"
import fs from "fs"

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
handler.help = ['upload2 <file>']
handler.tags = ['']
handler.command = ['txt2img','diff2','imgai','img']
handler.premium = false
handler.diamond = true

export default handler