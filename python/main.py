from diff_match_patch import diff_match_patch

source = "A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celestia, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never lacked for reading material!"
target = "A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celebra, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never ever lacked for reading material!"

dmp = diff_match_patch()
patches = dmp.patch_make(source, target)
diff = dmp.patch_toText(patches)

print(diff)
