/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

import axios from "axios"
import uploadImage from "../lib/uploadImage.js"

const handler = async (m, { conn, usedPrefix, command, text, args }) => {
	conn.deep_fake_AI = conn.deep_fake_AI ? conn.deep_fake_AI : {}
	if (m.sender in conn.deep_fake_AI) {
		return m.reply("_Masih proses, jika tidak muncul, mungkin error ketik .resetdf untuk mengulang kembali._")
	}
	const q = m.quoted ? m.quoted : m
	const mime = (q.msg || q).mimetype || q.mediaType || ""
	if (!/image\/(jpe?g|png)/.test(mime)) {
		return m.reply(
			`Example: reply/kirim image dengan caption *${usedPrefix + command}* style\nUntuk cek list style, command *${usedPrefix}styledf*`
		)
	}
	conn.deep_fake_AI[m.sender] = true
	const [style = `${text}`,] = args
	const configs = {
		init_image: await uploadImage(await q.download()),
		style,
	}
	await conn.sendMessage(
		m.chat,
		{
			text: `_Sedang membuat deepfake, menggunakan ${configs["style"]} template_\n_Jika muncul tulisan *true*, berarti muka nya gk suport!_`,
		},
		{ quoted: m }
	)
	const { data } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/deep_fake/video",
			method: "POST",
			params: { apikey: "Rk-ZycaZetN"},
			data: { ...configs },
		})
		.catch((e) => e?.response)
	const { status, message, result } = data
	if (!status) {
		throw delete conn.deep_fake_AI[m.sender]
		return m.reply(message)
	}
	await conn.sendMessage(m.chat, { video: { url: result["video"] } }, { quoted: m })
} 
handler["help"] = ["deepfake"]
handler["command"] = ["deepfake"]
handler["tags"] = ["ai"]
export default handler