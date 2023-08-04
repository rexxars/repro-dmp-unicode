package dmpjava;

import java.util.LinkedList;
import org.bitbucket.cowwoc.diffmatchpatch.DiffMatchPatch;
import org.bitbucket.cowwoc.diffmatchpatch.DiffMatchPatch.Patch;

public class App {
    public static void main(String[] args) {
        String source = "A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celestia, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never lacked for reading material!";
        String target = "A curious 🦊 named Felix lived in the 🪄🌲 of Willowwood. One day, he discovered a mysterious 🕳️, which lead to a magical 🌌.  In the 🪐 of Celebra, 🦊 met a friendly 🌈🦄 named Sparkle. They had extraordinary adventures together, befriending a 🧚, who shared so many 🏴‍☠️ 📚 that they never ever lacked for reading material!";

        DiffMatchPatch dmp = new DiffMatchPatch();
        LinkedList<Patch> patches = dmp.patchMake(source, target);
        String result = dmp.patchToText(patches);
        
        System.out.println(result);
    }
}
