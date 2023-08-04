package main

import (
	"fmt"

	"github.com/sergi/go-diff/diffmatchpatch"
)

const source = `A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celestia, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never lacked for reading material!`
const target = `A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celebra, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never ever lacked for reading material!`

func main() {
	dmp := diffmatchpatch.New()

	// Go-generated patch
	diffs := dmp.PatchMake(source, target)
	textPatch := dmp.PatchToText(diffs)

	fmt.Println(textPatch)
}
