fn main() {
    let source = r#"A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celestia, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never lacked for reading material!"#;
    let target = r#"A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celebra, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never ever lacked for reading material!"#;

    let dmp = dmp::new();
    let pch = dmp.patch_make1(source, target);
    let txt = dmp.patch_to_text(&pch);
    println!("{}", txt);
}
