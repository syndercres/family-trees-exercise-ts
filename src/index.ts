import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
// import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import { findDescendent, findGivenPerson, logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";

async function mainProgram() {
  //printBanner("BARATHEON");
  //printPersonTreeAsAscii(createBaratheonTree());

  //printBanner("STARK");
  //printPersonTreeAsAscii(createStarkTree());

  // Uncomment to test your work..

  //printBanner("LANNISTER");
  //printPersonTreeAsAscii(createLannisterTree());

  // printBanner("All people in STARK")
  // logAllPeopleInTree(createStarkTree());

  // printBanner("WITH STACK - british royals")
  // logAllPeopleInTree(createBritishSuccessionTree());
  //printBanner("WITH QUEUE - british royals")
  //console.log(logAllPeopleInTreeWithQueue(createBritishSuccessionTree()));
  //console.log(findGivenPerson("Steve", createBritishSuccessionTree()));
  console.log(findDescendent("Mia", "Zara", createBritishSuccessionTree()));

  // You'll need to add more test code for later exercises, too.
}

mainProgram();
