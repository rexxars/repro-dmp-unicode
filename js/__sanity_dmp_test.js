const {makePatches, parsePatch, stringifyPatches, applyPatches} = require('@sanity/diff-match-patch')

const source = `速ヒマヤレ誌相ルなあね日諸せ変評ホ真攻同潔ク作先た員勝どそ際接レゅ自17浅ッ実情スヤ籍認ス重力務鳥の。8平はートご多乗12青國暮整ル通国うれけこ能新ロコラハ元横ミ休探ミソ梓批ざょにね薬展むい本隣ば禁抗ワアミ部真えくト提知週むすほ。査ル人形ルおじつ政謙減セヲモ読見れレぞえ録精てざ定第ぐゆとス務接産ヤ写馬エモス聞氏サヘマ有午ごね客岡ヘロ修彩枝雨父のけリド。

住ゅなぜ日16語約セヤチ任政崎ソオユ枠体ぞン古91一専泉給12関モリレネ解透ぴゃラぼ転地す球北ドざう記番重投ぼづ。期ゃ更緒リだすし夫内オ代他られくド潤刊本クヘフ伊一ウムニヘ感週け出入ば勇起ょ関図ぜ覧説めわぶ室訪おがト強車傾町コ本喰杜椿榎ほれた。暮る生的更芸窓どさはむ近問ラ入必ラニス療心コウ怒応りめけひ載総ア北吾ヌイヘ主最ニ余記エツヤ州5念稼め化浮ヌリ済毎養ぜぼ。`

const target = source + ". 文の終わり。"

const diffs = makePatches(source, target, {margin: 4})
const patch = stringifyPatches(diffs)
console.log('Javascript patch:')
console.log('```')
console.log(patch)
console.log('```')

const patches = parsePatch(patch)
const [result, results] = applyPatches(patches, source, {})
const failures = results.filter(res => !res)

if (failures.length > 0) {
  console.log('(apply errors: %d', failures.length)
}

console.log('Javascript result:')
console.log('```')
console.log(result)
console.log('```')

if (result !== target) {
  console.log('javascript patch apply failed')
  process.exit(1)
} else {
  console.log('OK')
  process.exit(0)
}