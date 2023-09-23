import axios from 'axios'
import crypto from 'crypto'
import { Buffer } from 'buffer'
import md5 from 'md5'
import fs from 'fs'

const baseURL = 'https://h5.tu.qq.com/'

function randomUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = crypto.randomBytes(1)[0] % 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

async function jadianime(image) {
  let imageData = await Buffer.from(image).toString('base64')
  const data = {
    'busiId': 'different_dimension_me_img_entry',
    'extra': JSON.stringify({
      'face_rects': [],
      'version': 2,
      'platform': 'web',
      'data_report': {
        'parent_trace_id': crypto.randomUUID(),
        'root_channel': '',
        'level': 0
      }
    }),
    'images': [imageData]
  }
  const dataStr = JSON.stringify(data)
  const encodedData = encodeURIComponent(dataStr).replace(/%[89ABab]/g, match => {
    const code = match.charCodeAt(0)
    return '%' + (code & 0xF | 0x90).toString(16) + (code & 0x3F | 0x80).toString(16)
  })
  const sign = md5(baseURL + encodedData + 'HQ31X02e')
  const headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://h5.tu.qq.com',
    'Referer': 'https://h5.tu.qq.com/',
    'User-Agent': 'Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'x-sign-value': sign
  }
  const options = {
    'method': 'POST',
    'url': 'https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process',
    'data': data,
    'headers': headers
  }
  const response = await axios(options)
  return response.data
}

export { jadianime }