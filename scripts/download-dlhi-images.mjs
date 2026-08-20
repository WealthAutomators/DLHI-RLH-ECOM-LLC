/**
 * Downloads curated Unsplash images for DLHI RLH ECOM LLC.
 * Uses direct images.unsplash.com URLs — no API key required or stored.
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const ASSIGNMENTS = {
  // Hero — modern coastal interiors (no palm-tree clichés)
  "hero/hero-1.jpg": "photo-1616486338812-3dadae4b4ace",
  "hero/hero-2.jpg": "photo-1556912173-46c336c7fd55",
  "hero/hero-3.jpg": "photo-1600585154340-be6161a56a0c",

  // Banners / collections
  "banners/collection-home.jpg": "photo-1616486338812-3dadae4b4ace",
  "banners/collection-kitchen.jpg": "photo-1556911220-bff31c812bea",
  "banners/collection-workspace.jpg": "photo-1497366216548-37526070297c",
  "banners/collection-outdoor.jpg": "photo-1600585154340-be6161a56a0c",
  "banners/lifestyle-banner.jpg": "photo-1600607687939-ce8a6c25118c",
  "banners/about.jpg": "photo-1600566753190-17f0baa2a6c3",
  "banners/featured.jpg": "photo-1586023492120-27b2c045efd7",

  // Categories
  "categories/home-living.jpg": "photo-1586023492120-27b2c045efd7",
  "categories/kitchen.jpg": "photo-1556912173-46c336c7fd55",
  "categories/bathroom.jpg": "photo-1552321554-5fefe8c9ef14",
  "categories/electronics.jpg": "photo-1519389950473-47ba0277781c",
  "categories/workspace.jpg": "photo-1593062096033-9a26b09da705",
  "categories/office.jpg": "photo-1497366811353-6870744d04b2",
  "categories/beauty.jpg": "photo-1596462502278-27bfdc403348",
  "categories/sports.jpg": "photo-1571019614242-c5c5dee9f50b",
  "categories/gaming.jpg": "photo-1542751371-adc38448a05e",
  "categories/fashion.jpg": "photo-1483985988355-763728e1935b",
  "categories/baby-products.jpg": "photo-1515488042361-ee00e0c3ddc7",
  "categories/pet-supplies.jpg": "photo-1587300003388-59208cc962cd",
  "categories/health-wellness.jpg": "photo-1544367567-0f2fcb009e0b",
  "categories/outdoor.jpg": "photo-1600566753086-00f18fb6b3ea",
  "categories/travel.jpg": "photo-1469854523086-cc02fe5d8800",
  "categories/educational.jpg": "photo-1503454537195-1dcabb73ffb9",
  "categories/storage.jpg": "photo-1595428774223-ef52624120d2",
  "categories/lighting.jpg": "photo-1507473885765-e6ed057f782c",

  // Instagram
  "instagram/post-1.jpg": "photo-1615876234480-ac0b5e040e6b",
  "instagram/post-2.jpg": "photo-1556911221-bff31c812bea",
  "instagram/post-3.jpg": "photo-1486312338219-ce68d2c6f44d",
  "instagram/post-4.jpg": "photo-1600585154526-990dced4db0d",
  "instagram/post-5.jpg": "photo-1507652313519-d4e9174996dd",
  "instagram/post-6.jpg": "photo-1616046229478-9901c5536a45",

  // Reviews
  "reviews/review-1.jpg": "photo-1494790108377-be9c29b29330",
  "reviews/review-2.jpg": "photo-1507003211169-0a1dd7228f2d",
  "reviews/review-3.jpg": "photo-1438761681033-6461ffad8d80",
  "reviews/review-4.jpg": "photo-1500648767791-00dcc994a43e",
  "reviews/review-5.jpg": "photo-1534528741775-53994a69daeb",
  "reviews/review-6.jpg": "photo-1539571696357-5a69c17a67c6",
  "reviews/review-7.jpg": "photo-1524504388940-b1c1722653e1",
  "reviews/review-8.jpg": "photo-1506794778202-cad84cf45f1d",

  // Products (primary + secondary)
  "products/travertine-accent-side-table-1.jpg": "photo-1532372320572-cda256256de2",
  "products/travertine-accent-side-table-2.jpg": "photo-1592078615290-033ee584e267",
  "products/washed-linen-throw-blanket-1.jpg": "photo-1631889993959-41b4e9c6e3c5",
  "products/washed-linen-throw-blanket-2.jpg": "photo-1584100936595-c0654b55a2e2",
  "products/arched-floor-mirror-1.jpg": "photo-1618220179428-22790b461013",
  "products/arched-floor-mirror-2.jpg": "photo-1615874959474-d609969a20ed",
  "products/seagrass-nesting-baskets-1.jpg": "photo-1595428774223-ef52624120d2",
  "products/seagrass-nesting-baskets-2.jpg": "photo-1616046229478-9901c5536a45",
  "products/floating-wall-organizer-1.jpg": "photo-1595428774223-ef52624120d2",
  "products/floating-wall-organizer-2.jpg": "photo-1484154218962-a197022b5858",
  "products/ceramic-accent-vase-1.jpg": "photo-1578500494198-246f612d3b3d",
  "products/ceramic-accent-vase-2.jpg": "photo-1581783898377-1c85bf937427",
  "products/gooseneck-electric-kettle-1.jpg": "photo-1544787219-7f47ccb76574",
  "products/gooseneck-electric-kettle-2.jpg": "photo-1571934811356-5cc061b6821f",
  "products/countertop-turntable-organizer-1.jpg": "photo-1556911220-e15b29be8c8f",
  "products/countertop-turntable-organizer-2.jpg": "photo-1556910103-1c02745aae4d",
  "products/glass-spice-jar-set-1.jpg": "photo-1596040033229-a9821ebd058d",
  "products/glass-spice-jar-set-2.jpg": "photo-1506368249639-73a05d4f4b84",
  "products/bamboo-prep-board-set-1.jpg": "photo-1590794056226-9dc76bafb931",
  "products/bamboo-prep-board-set-2.jpg": "photo-1562967916-eb82221dfb92",
  "products/floating-bath-shelf-1.jpg": "photo-1552321554-5fefe8c9ef14",
  "products/floating-bath-shelf-2.jpg": "photo-1584622781867-0d7f090daa3e",
  "products/sensor-soap-dispenser-1.jpg": "photo-1584622650111-993a426fbf0a",
  "products/sensor-soap-dispenser-2.jpg": "photo-1620626011761-996317b8d101",
  "products/vanity-cosmetic-tray-1.jpg": "photo-1596462502278-27bfdc403348",
  "products/vanity-cosmetic-tray-2.jpg": "photo-1522335789203-aabd1fc54bc9",
  "products/usb-c-charging-hub-1.jpg": "photo-1625948515291-69613efd103f",
  "products/usb-c-charging-hub-2.jpg": "photo-1583394838336-acd977736f66",
  "products/multi-device-charging-station-1.jpg": "photo-1609091839311-b48b1f1f3f79",
  "products/multi-device-charging-station-2.jpg": "photo-1556656793-08538906a9f8",
  "products/smart-plug-trio-1.jpg": "photo-1558002038-1055907df827",
  "products/smart-plug-trio-2.jpg": "photo-1545259741-c5ce6e0c8c0e",
  "products/portable-usb-c-display-1.jpg": "photo-1527443224154-c4a3942d3acf",
  "products/portable-usb-c-display-2.jpg": "photo-1593640408182-31c70c8268f5",
  "products/minimal-digital-clock-1.jpg": "photo-1563861826100-9cb668366a83",
  "products/minimal-digital-clock-2.jpg": "photo-1509042239860-f550ce710b93",
  "products/walnut-laptop-stand-1.jpg": "photo-1527864550417-7fd91fc51a46",
  "products/walnut-laptop-stand-2.jpg": "photo-1496181133206-80ce9b88a853",
  "products/monitor-shelf-riser-1.jpg": "photo-1593062096033-9a26b09da705",
  "products/monitor-shelf-riser-2.jpg": "photo-1497366754035-f200968a6e72",
  "products/felt-cable-tray-1.jpg": "photo-1558618666-fcd25c85cd64",
  "products/felt-cable-tray-2.jpg": "photo-1486312338219-ce68d2c6f44d",
  "products/brass-task-desk-lamp-1.jpg": "photo-1507473885765-e6ed057f782c",
  "products/brass-task-desk-lamp-2.jpg": "photo-1513506003901-1e6a229e418e",
  "products/accordion-document-organizer-1.jpg": "photo-1586281380349-632531db7ed4",
  "products/accordion-document-organizer-2.jpg": "photo-1450101499163-c8848c66ca85",
  "products/stackable-desk-trays-1.jpg": "photo-1454165804606-c3d57bc86b40",
  "products/stackable-desk-trays-2.jpg": "photo-1484480974693-6ca0a78fb36b",
  "products/lighted-vanity-mirror-1.jpg": "photo-1631217868264-e5b90bb7e629",
  "products/lighted-vanity-mirror-2.jpg": "photo-1522338242992-e1a54906a8da",
  "products/rotating-makeup-carousel-1.jpg": "photo-1512496015851-a90fb38ba796",
  "products/rotating-makeup-carousel-2.jpg": "photo-1596462502278-27bfdc403348",
  "products/travel-cosmetic-case-1.jpg": "photo-1612817288484-6f916006741a",
  "products/travel-cosmetic-case-2.jpg": "photo-1583241800698-e8ab01830a07",
  "products/silk-hair-scrunchie-set-1.jpg": "photo-1522337660859-02fbefca4702",
  "products/silk-hair-scrunchie-set-2.jpg": "photo-1519699047748-de8e457a634e",
  "products/cork-yoga-block-set-1.jpg": "photo-1544367567-0f2fcb009e0b",
  "products/cork-yoga-block-set-2.jpg": "photo-1506126613408-eca07ce68773",
  "products/insulated-sports-bottle-1.jpg": "photo-1602143407151-7111542de6e8",
  "products/insulated-sports-bottle-2.jpg": "photo-1523362628745-0c100150b504",
  "products/controller-stand-dock-1.jpg": "photo-1606144042614-b2417e99c4e3",
  "products/controller-stand-dock-2.jpg": "photo-1612287230202-1ff1d85d1bdf",
  "products/desk-cable-sleeve-kit-1.jpg": "photo-1558618666-fcd25c85cd64",
  "products/desk-cable-sleeve-kit-2.jpg": "photo-1593640408182-31c70c8268f5",
  "products/woven-straw-tote-1.jpg": "photo-1590874103328-eac38a683ce7",
  "products/woven-straw-tote-2.jpg": "photo-1548036328-c08555381dd0",
  "products/linen-baseball-cap-1.jpg": "photo-1588850561407-ed78f301fa11",
  "products/linen-baseball-cap-2.jpg": "photo-1521369909029-2afed882baee",
  "products/nursery-changing-caddy-1.jpg": "photo-1515488042361-ee00e0c3ddc7",
  "products/nursery-changing-caddy-2.jpg": "photo-1555252337-59f4fe5e5c77",
  "products/silicone-baby-feeding-set-1.jpg": "photo-1519689680058-324335c77eba",
  "products/silicone-baby-feeding-set-2.jpg": "photo-1503454537195-1dcabb73ffb9",
  "products/silicone-pet-feeding-mat-1.jpg": "photo-1587300003388-59208cc962cd",
  "products/silicone-pet-feeding-mat-2.jpg": "photo-1548199973-03cce0bbc87b",
  "products/pet-grooming-glove-1.jpg": "photo-1601758228041-f3b2795255f1",
  "products/pet-grooming-glove-2.jpg": "photo-1583511655857-d19b40a7a54e",
  "products/collapsible-pet-travel-bowls-1.jpg": "photo-1450778869180-41d0601e046e",
  "products/collapsible-pet-travel-bowls-2.jpg": "photo-1583337130417-3346a1be7dee",
  "products/massage-recovery-ball-set-1.jpg": "photo-1571019614242-c5c5dee9f50b",
  "products/massage-recovery-ball-set-2.jpg": "photo-1518611012118-696072aa579a",
  "products/rechargeable-patio-lantern-1.jpg": "photo-1504280390367-361c6d9f38f4",
  "products/rechargeable-patio-lantern-2.jpg": "photo-1470246973918-29ebe2615bb3",
  "products/outdoor-storage-bin-1.jpg": "photo-1600585154526-990dced4db0d",
  "products/outdoor-storage-bin-2.jpg": "photo-1600566753086-00f18fb6b3ea",
  "products/picnic-flatware-set-1.jpg": "photo-1504674900247-0877df9cc836",
  "products/picnic-flatware-set-2.jpg": "photo-1414235077428-338989a2e8c0",
  "products/folding-teak-side-table-1.jpg": "photo-1600210492486-724fe5c67fb0",
  "products/folding-teak-side-table-2.jpg": "photo-1600047509807-ba8f91626554",
  "products/garden-tool-tote-1.jpg": "photo-1416879595882-3373a0480b5b",
  "products/garden-tool-tote-2.jpg": "photo-1585320806297-369af1a5c5d4",
  "products/hanging-toiletry-kit-1.jpg": "photo-1553062407-98eeb64c6a62",
  "products/hanging-toiletry-kit-2.jpg": "photo-1583241800698-e8ab01830a07",
  "products/magnetic-tile-builder-set-1.jpg": "photo-1587654780291-39c9404d746b",
  "products/magnetic-tile-builder-set-2.jpg": "photo-1566576912321-d58ddd7a6088",
  "products/constellation-wood-puzzle-1.jpg": "photo-1606092195730-5d7b9af1efc5",
  "products/constellation-wood-puzzle-2.jpg": "photo-1611532736597-de2d4265fba3",
  "products/stem-bridge-engineering-kit-1.jpg": "photo-1587654780291-39c9404d746b",
  "products/stem-bridge-engineering-kit-2.jpg": "photo-1503454537195-1dcabb73ffb9",
  "products/linen-drum-floor-lamp-1.jpg": "photo-1543198126-a8ad8e47fb22",
  "products/linen-drum-floor-lamp-2.jpg": "photo-1513506003901-1e6a229e418e",
  "products/bath-towel-set-1.jpg": "photo-1616628182503-bfb8e1d06b0c",
  "products/bath-towel-set-2.jpg": "photo-1584622650111-993a426fbf0a",
  "products/soft-plush-blanket-1.jpg": "photo-1515488042361-ee00e0c3ddc7",
  "products/soft-plush-blanket-2.jpg": "photo-1555252337-59f4fe5e5c77",
  "products/foam-roller-1.jpg": "photo-1599058945522-28d584b6f14f",
  "products/foam-roller-2.jpg": "photo-1571019614242-c5c5dee9f50b",
  "products/resistance-bands-set-1.jpg": "photo-1598289431512-b97b0917affc",
  "products/resistance-bands-set-2.jpg": "photo-1518611012118-696072aa579a",
  "products/kitchen-scale-1.jpg": "photo-1556910103-1c02745aae4d",
  "products/kitchen-scale-2.jpg": "photo-1556911220-bff31c812bea",
  "products/building-blocks-set-1.jpg": "photo-1566576912321-d58ddd7a6088",
  "products/building-blocks-set-2.jpg": "photo-1587654780291-39c9404d746b",
  "products/silicone-food-storage-set-1.jpg": "photo-1584568694244-14fbdf83bd30",
  "products/silicone-food-storage-set-2.jpg": "photo-1556911220-e15b29be8c8f",
  "products/yoga-mat-1.jpg": "photo-1601925260368-ae2f83cf8b7f",
  "products/yoga-mat-2.jpg": "photo-1544367567-0f2fcb009e0b",
  "products/packing-cubes-set-1.jpg": "photo-1553062407-98eeb64c6a62",
  "products/packing-cubes-set-2.jpg": "photo-1469854523086-cc02fe5d8800",
  "products/underbed-storage-bags-1.jpg": "photo-1595428774223-ef52624120d2",
  "products/underbed-storage-bags-2.jpg": "photo-1616046229478-9901c5536a45",
};

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

async function download(photoId, destRel) {
  const dest = path.join(PUBLIC, destRel);
  ensureDir(dest);
  const url = `https://images.unsplash.com/${photoId}?w=1200&q=80&auto=format&fit=crop`;
  const res = await fetch(url, {
    headers: { "User-Agent": "DLHIRLHECOM/1.0 (storefront-images)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${photoId}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error(`Too small (${buf.length}) for ${photoId}`);
  fs.writeFileSync(dest, buf);
  return { destRel, bytes: buf.length, hash: crypto.createHash("md5").update(buf).digest("hex").slice(0, 8) };
}

async function main() {
  const entries = Object.entries(ASSIGNMENTS);
  console.log(`Downloading ${entries.length} images...`);
  let ok = 0;
  let fail = 0;
  for (const [destRel, photoId] of entries) {
    try {
      const result = await download(photoId, destRel);
      ok += 1;
      console.log(`✓ ${destRel} (${result.bytes}b ${result.hash})`);
    } catch (err) {
      fail += 1;
      console.error(`✗ ${destRel}: ${err.message}`);
    }
  }
  console.log(`Done. ok=${ok} fail=${fail}`);
}

main();
