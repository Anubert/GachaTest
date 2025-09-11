const abilities = [
  {
    name: "Tinder",
    rarity: 1.31,
    isNSFW: false,
    description: "1: Allows you to produce and control weak flames that are initially about as strong as matchsticks of bonfires."
  },
  {
    name: "Ember",
    rarity: 2.33,
    isNSFW: false,
    description: "2: Allows you to produce and control moderate flames that can be shaped into a variety of attacks like fireballs and fire arrows."
  },
  {
    name: "Blaze",
    rarity: 3.31,
    isNSFW: false,
    description: "3: Allows you to produce and control flames, allowing you to unleash streams of fire, fire arrows, fire whips, walls of fire etc."
  },
  {
    name: "Pyrokinesis",
    rarity: 4.44,
    isNSFW: false,
    description: "4: Allows you to produce and control flames, your own or natural flames. You have fine control over the flames you control, being able to shape them into arrows, blades, walls, projectiles etc."
  },
  {
    name: "Hellflame",
    rarity: 4.88,
    isNSFW: false,
    description: "5: MHA - Allows you to emit and control powerful flames on a large scale. You can unleash giant flamethrowers, and compress your flames into narrow points like lasers, in addition, you are extremely resistant towards flame."
  },
  {
    name: "Micro Pyrokinesis",
    rarity: 2.29,
    isNSFW: false,
    description: "6: You can control heat and flames on a small scale, although your fire and temperatures are weak they are atomically precise."
  },
  {
    name: "Disaster Flames",
    rarity: 6.72,
    isNSFW: false,
    description: "7: Jujutsu Kaisen - You embody the fear of humanity against wildfires, eruptions and flames. You have very potent pyrokinetic abilities as well as lava generation and manipulation. Due to your flames being more conceptual in nature they are far less restrained by ordinary limitations."
  },
  {
    name: "Amaterasu",
    rarity: 6.82,
    isNSFW: false,
    description: "8: Naruto - The flames of hell, allow you to ignite an object in your line of sight with the flames of Amaterasu that are impossible to extinguish through normal means and can burn anything. The more this ability is used, the more strain is placed on the user's eye to the point where they may bleed or go blind."
  },
  {
    name: "Frenzied Flame",
    rarity: 6.34,
    isNSFW: false,
    description: "9: Elden Ring - Allows the user to wield and manipulate the Frenzied Flame. Fire born from the influence of a foreign cosmic entity capable of burning even minds, souls and space yet also causes mental instability in the user the more it is used, making them obsessed with destruction."
  },
  {
    name: "Ignite",
    rarity: 3.59,
    isNSFW: false,
    description: "10: Allows the user to instantly set any object they are in contact with aflame, the stronger a target is, the harder it is to set them on fire. With training, you can also ignite adjacent objects."
  },
  {
    name: "Conflagration",
    rarity: 4.82,
    isNSFW: false,
    description: "11: Allows the user to instantly set any target or area they are in contact with aflame, the stronger a target is, the harder it is to set them on fire. With a touch you can set entire buildings on fire, and with enough training even entire cities."
  },
  {
    name: "Mystic Eyes of Flame",
    rarity: 4.77,
    isNSFW: false,
    description: "12: Allows you to increase the temperature of and spontaneously combust any target in your line of sight. The stronger the target the more energy is expended. While active your eye turns red and has the image of three overlapping triangles."
  },
  {
    name: "Fire Cloak",
    rarity: 3.44,
    isNSFW: false,
    description: "13: Skyrim - Allows you to cloak your body and your surroundings in flame, whenever a target gets near you they are set aflame unless they are friendly. May not work on stronger opponents. While fire cloak is active, all fire-based abilities are slightly more potent."
  },
  {
    name: "Fireball",
    rarity: 2.24,
    isNSFW: false,
    description: "14: Allows you to form and launch balls from your hands or other appendages, the potency and size of the fireballs are dependent on the amount of energy expended."
  },
  {
    name: "Flame Weaponry",
    rarity: 3.66,
    isNSFW: false,
    description: "15: Allows you to emit fire that can shape into any variety of cold weaponry such as swords, axes, hammers and even bows and crossbows. The flames mimic the properties of the weapon it forms into, so it will be sharp as a sword, heavy as a hammer etc."
  },
  {
    name: "Frostflare",
    rarity: 4.59,
    isNSFW: false,
    description: "16: Calamity Mod - Allows you to emit and control incredibly powerful and potent Frostflare, flames that freeze instead of burning. While using Frostflare you gain incredible ice and cold resistance in exchange for vulnerability to flame."
  },
  {
    name: "Fire Absorption",
    rarity: 4.34,
    isNSFW: false,
    description: "17: Allows you to absorb fire into your body, either storing it to release it later as your own flames or converting it into energy for your own use. But strong enough flames might be impossible or painful to absorb. Absorbing too much fire without release can cause internal burning."
  },
  {
    name: "Pyromaster",
    rarity: 7.23,
    isNSFW: false,
    description: "18: Allows the user to control flames and ignition on the level of a Level 5 Esper from Toaru. Your precision, range and control over flame and ignition is unmatched."
  },
  {
    name: "Unholy Flames",
    rarity: 5.75,
    isNSFW: false,
    description: "19: Flames of Hell, these flames are so incredibly powerful and potent that even the user is not completely immune to them, causing them to suffer burns from overuse. In addition, these flames deal severe damage to any Holy and Light-based being."
  },
  {
    name: "Profaned Flames",
    rarity: 6.24,
    isNSFW: false,
    description: "20: Calamity Mod - Allows you to channel and control the flames of Providence the Profaned Goddess, these flames are incomparably hot and turn all to impartial ash. These flames ignore all fire resistance."
  },
  {
    name: "Profaned Guardian Transformation",
    rarity: 6.55,
    isNSFW: false,
    description: "21: Calamity Mod - Allows you to accept the influence of Providence, the Profaned Goddess and temporarily take the form of one of her guardians. Massively increasing your physical stats, granting you wings of flame and the ability to manipulate Profaned Flames. But maintaining this transformation heats up your insides and burns you slowly inside out until it is released, this effect is only mitigated by fire resistance."
  },
  {
    name: "Shadowflames",
    rarity: 4.76,
    isNSFW: false,
    description: "22: Terraria - Allows the user to emit and control Shadowflame. The unknowable flames, these flames do not make sound, lack an energy signature and burn away light, making them incredibly difficult to perceive. An experienced user can hide Shadowflame from all senses."
  },
  {
    name: "Fire Fist",
    rarity: 2.67,
    isNSFW: false,
    description: "23: Allows you to coat your fists in flames, these flames mimic the properties of your fists and enhance the power behind your strikes while also burning the target. You can also release the fire while punching to create a burning fist projectile."
  },
  {
    name: "Fire Logia",
    rarity: 7.61,
    isNSFW: false,
    description: "24: One Piece - Allows the user to emit, create, shape, control and turn into fire and flame at will. Turning them into living fire."
  },
  {
    name: "Coat Flames",
    rarity: 2.65,
    isNSFW: false,
    description: "25: Allows you to coat any object you are touching in flames that form a layer around the object These flames do not affect the integrity of the object."
  },
  {
    name: "Enflame",
    rarity: 3.23,
    isNSFW: false,
    description: "26: Allows you to coat any object you are holding or your own body in flames, these flames mimic the properties of and reinforce the object the object they are coating. If they coat fists they increase blunt force and if they coat flames they enhance cutting ability alongside their flames."
  },
  {
    name: "Heat Object",
    rarity: 1.84,
    isNSFW: false,
    description: "27: Allows you to heat up any object by touching it, the more energy you expend the hotter and faster you can get the target object to heat up."
  },
  {
    name: "Heat Metal",
    rarity: 2.27,
    isNSFW: false,
    description: "28: DnD - Allows you to increase the temperature of any metal in your sensory range, the more energy you expend the faster and hotter you can increase the target's temperature."
  },
  {
    name: "Heatwave",
    rarity: 3.55,
    isNSFW: false,
    description: "29: Allows you to unleash waves of pure heat from your body that you can either control as directed waves or omnidirectional heat."
  },
  {
    name: "Sunny Day",
    rarity: 3.89,
    isNSFW: false,
    description: "30: Allows you to change the weather into harsh sunlight, decreasing the power of any water-based ability in the vicinity while boosting the potency of any fire-based ability."
  },
  {
    name: "Desolate Land",
    rarity: 5.29,
    isNSFW: false,
    description: "31: Allows you to change the weather and land to the Desolate Land, raising the temperature and getting rid of moisture to create an unlivable desolate environment with burning harsh sunlight, scorched lands and rivers of lava. Largely amplifies the power of Fire and Earth-based abilities while nullifying all Water-based abilities below Epic rank and weakening those above."
  },
  {
    name: "Kamino",
    rarity: 3.99,
    isNSFW: false,
    description: "32: Jujutsu Kaisen - By chanting \"Kamino\" you can manifest a fire arrow with immense power behind it, although the wind-up is slow, its sheer destructive power and heat more than makeup for it."
  },
  {
    name: "Blazing Courage",
    rarity: 3.66,
    isNSFW: false,
    description: "33: From JJK coats object in flames that imitate the aspects of the object like sharp flames or blunt flames"
  },
  {
    name: "Dark Flames",
    rarity: 3.63,
    isNSFW: false,
    description: "34: Allows you to emit and control the Black Flames of humanity, these flames do not burn or exude heat but instead possess mass greater than most metals, shredding whatever they touch instead of burning them."
  },
  {
    name: "Extinguish Flames",
    rarity: 2.29,
    isNSFW: false,
    description: "35: Allows you to remotely extinguish any fire or flame in your sensory range, the stronger a flame is, the more energy you need to expend to extinguish it."
  },
  {
    name: "Godslayer Apostle Flames",
    rarity: 4.75,
    isNSFW: false,
    description: "36: Elden Ring - Allows you to wield and control the Godslaying Flames of the Godskin Apostles. While these flames are already plenty strong on their own, when against the divine, these flames get significantly hotter and more potent. The more divine the enemy is, the more potent the flames"
  },
  {
    name: "Blood Flames",
    rarity: 4.34,
    isNSFW: false,
    description: "37: Elden Ring - Allows you to wield and control Bloodflames, conjuring these flames does not expend energy but instead consumes your vitality and health. In addition to being much more potent than regular flames, blood flames also lacerate on contact and are extremely hard to heal from."
  },
  {
    name: "Bloodflame Talons",
    rarity: 2.97,
    isNSFW: false,
    description: "38: Elden Ring - Allows you to conjure talons made of blood flame that both burns and lacerates whoever it digs into. These claws do not expend energy but instead health and vitality to manifest, the more vitality expended, the stronger the claws."
  },
  {
    name: "Heat vision",
    rarity: 3.66,
    isNSFW: false,
    description: "39: DC - Allows you to emit laser beams of extreme heat from your eyes, the you can concentrate the beams for less area but more power and vice versa. The longer the beam travels the less powerful it gets."
  },
  {
    name: "Fire Burst",
    rarity: 2.56,
    isNSFW: false,
    description: "40: Allows you to unleash a concentrated burst of flame like a beam from your hands. You can also unleash a continuous but less powerful beam of fire."
  },
  {
    name: "Fire Claws",
    rarity: 2.23,
    isNSFW: false,
    description: "41: Unordinary - Allows you to grow your fingernails into very durable and sharp claws that you can cover in very hot flames. These claws can even carve apart and melt metal."
  },
  {
    name: "Flamethrower",
    rarity: 2.52,
    isNSFW: false,
    description: "42: Allows you to unleash a constant stream of fire from anywhere on your body, the more energy you expend, the hotter and more potent the stream of flame is."
  },
  {
    name: "Combustion",
    rarity: 3.87,
    isNSFW: false,
    description: "43: Allows you to create explosions of flame from anywhere on your body."
  },
  {
    name: "Firebreath",
    rarity: 2.97,
    isNSFW: false,
    description: "44: Allows you to unleash a breath attack of flame like a Dragon, the gout of flame breath you unleash is very powerful and potent, and the power increases the more you charge and the more energy you expend."
  },
  {
    name: "Explosive Sweat",
    rarity: 3.34,
    isNSFW: false,
    description: "45: MHA - You can sweat a very explosive compound on demand that you can detonate at any time, allowing you to unleash powerful explosions."
  },
  {
    name: "Explosion",
    rarity: 4.49,
    isNSFW: false,
    description: "46: Allows you to create and project explosions of flame at will, you can launch explosions as condensed projectiles that resemble large glowing bullets that explode on contact. Or with enough mastery, you can send streams of explosive energy from your fingers and palms."
  },
  {
    name: "Detonation",
    rarity: 3.87,
    isNSFW: false,
    description: "47: Allows you to charge any item you are holding with explosive energy that you can detonate at any time, turning them into what are essentially time bombs. The explosive energy fades over time. The more energy you expend, the stronger the explosion."
  },
  {
    name: "Explosion!",
    rarity: 4.99,
    isNSFW: false,
    description: "48: Konosuba - Allows you to call down an incredibly powerful explosion down from the sky like the wrath of a god or a thermonuclear warhead. The longer you charge the explosion and the more energy you expend, the stronger the explosion is."
  },
  {
    name: "Heat Palm",
    rarity: 1.28,
    isNSFW: false,
    description: "49: Unordinary - Allows you to heat up your palms to red-hot levels, only your palms."
  },
  {
    name: "Magma Logia",
    rarity: 7.88,
    isNSFW: false,
    description: "50: One Piece - Allows you to create, control, and transform into Lava and Magma at will. Turning you into a living eruption."
  },
  {
    name: "Eruption",
    rarity: 3.66,
    isNSFW: false,
    description: "51: Allows you to make magma/lava shoot up from the ground like volcanic eruptions by hitting the ground. With training, you can unleash it from any sufficiently large surface."
  },
  {
    name: "Lava",
    rarity: 4.68,
    isNSFW: false,
    description: "52: Allows you to create and control Magma/Lava at will such as hurling large volcanic rocks, forming lava whips, lakes of lava, bullets of magma etc."
  },
  {
    name: "Match",
    rarity: 0.55,
    isNSFW: false,
    description: "53: Allows you to light a small flame on your fingers, barely qualifies to be a lighter."
  },
  {
    name: "Droplet",
    rarity: 0.33,
    isNSFW: false,
    description: "54: Allows you to conjure small streams of water that drip down from your fingers. Barely enough to wash your hands."
  },
  {
    name: "Spray Water",
    rarity: 1.24,
    isNSFW: false,
    description: "55: Allows you to unleash a spray of water from your hands like a showerhead or a hose. Useful for putting out fires and dousing people."
  },
  {
    name: "Sprinkle",
    rarity: 1.66,
    isNSFW: false,
    description: "56: Allows you to telekinetically control water to a minor degree, while it does not have enough power output to hurt someone, it can still be used to douse someone or remove moisture from inanimate objects etc."
  },
  {
    name: "Create Water",
    rarity: 2.34,
    isNSFW: false,
    description: "57: Konosuba - Allows you to create large volumes of fresh water from your hands but does not allow you to control it, the stream of water is strong enough to seriously hurt someone."
  },
  {
    name: "Flood",
    rarity: 3.69,
    isNSFW: false,
    description: "58: Allows you to create and release extreme volumes of water from your body, even at a basic level it is enough to flood a building, with training you can flood entire streets and towns. Doesn't grant control over the water created."
  },
  {
    name: "Geyser",
    rarity: 2.02,
    isNSFW: false,
    description: "59: Allows the user to create geysers of water that erupt from the ground around them, the more energy you expend, the more powerful the geysers."
  },
  {
    name: "Mist",
    rarity: 2.52,
    isNSFW: false,
    description: "60: Allows you to create and control mist, using it to obscure, hinder and even smother flames. With training, you could create ice mist to freeze or condense mist to create physical obstacles and attacks."
  },
  {
    name: "Lesser Hydrokinesis",
    rarity: 2.29,
    isNSFW: false,
    description: "61: Allows you to create and control water around yourself telekinetically, it is not particularly powerful but it is still very versatile and precise."
  },
  {
    name: "Water Manipulation",
    rarity: 3.45,
    isNSFW: false,
    description: "62: Allows you to control and shape any water you are in physical contact with, you cannot control water you aren't touching. As long as you maintain contact you can freely morph the water and move it as you like, the more energy you expend, the larger quantities of water you can control and the more power you can exert."
  },
  {
    name: "Micro Hydrokinesis",
    rarity: 2.23,
    isNSFW: false,
    description: "63: Allows you to control water on a small scale, although the power you can exert over the water and your range is negligible, your control is atomically precise."
  },
  {
    name: "Hydro Pump",
    rarity: 3.22,
    isNSFW: false,
    description: "64: Allows you to create and emit streams of high-volume high-pressure water from your body, these canons of water are strong enough to tear through concrete like paper."
  },
  {
    name: "Sponge",
    rarity: 2.73,
    isNSFW: false,
    description: "65: Allows you to absorb and store vast quantities of water in your body by touching them, you can unleash this water at any time."
  },
  {
    name: "Dehydration",
    rarity: 2.87,
    isNSFW: false,
    description: "66: Allows the user to evaporate the moisture inside of an object or target through physical, you could turn trees into dust, crumble most rocks etc. Using it on a living target is much harder as they can resist the effects."
  },
  {
    name: "Drought",
    rarity: 3.66,
    isNSFW: false,
    description: "67: Allows the user to remotely evaporate water in their sensory range by expending energy, the larger the quantity of water the more energy you need to expend. With enough training, you can even evaporate water inside of objects in your sensory range. Magical waters and water inside more powerful objects take more energy to evaporate."
  },
  {
    name: "Water Manipulation",
    rarity: 3.55,
    isNSFW: false,
    description: "68: Allows the user to create and control water, the more energy they expend, the larger quantities of water they can create and control and the more force they can apply to the water."
  },
  {
    name: "Hydrokinesis",
    rarity: 4.69,
    isNSFW: false,
    description: "69: Allows the user to telekinetically control Water(H2O) allowing them to freely control, move and shape it and other water-based targets to their liking."
  },
  {
    name: "Razorblade Typhoon",
    rarity: 3.87,
    isNSFW: false,
    description: "70: Terraria - Allows you to create miniature typhoons that resemble disks of whirling water razor saw blades, you can unleash these typhoons to deal devastating damage. In addition, they can lock in on and hone into your target."
  },
  {
    name: "Whirlpool",
    rarity: 2.55,
    isNSFW: false,
    description: "71: Allows you to create and control whirlpools of water, either using them as barriers, projectiles or general hindrances."
  },
  {
    name: "Rain",
    rarity: 2.27,
    isNSFW: false,
    description: "72: Allows you to make it rain from the skies, the more energy you expend the larger the scale of the rain. Slightly boosts water-based abilities and slightly weakens fire-based ones."
  },
  {
    name: "Torrent",
    rarity: 3.78,
    isNSFW: false,
    description: "73: Allows you to change the weather of the local area to heavy rain, boosting the potency of water-based abilities while weakening fire-based abilities in the area."
  },
  {
    name: "Primordial Sea",
    rarity: 5.29,
    isNSFW: false,
    description: "74: Allows you to call down the primordial sea, summoning a torrential downpour and mighty waves that swallow the land you are on. During Primordial Sea, all water-based abilities are greatly boosted while all fire-based abilities below Epic rank are snuffed out and those above are greatly weakened."
  },
  {
    name: "Dampen",
    rarity: 0.88,
    isNSFW: false,
    description: "75: Allows you to dampen any object you are touching by making it more moist."
  },
  {
    name: "Dry",
    rarity: 0.78,
    isNSFW: false,
    description: "76: Allows you to dry any object you are touching, note that does not evaporate all water particles inside but only gets rid of moisture the object should otherwise not have."
  },
  {
    name: "Aquamaster",
    rarity: 7.58,
    isNSFW: false,
    description: "77: Allows you to create and control Water(H2O) on the scale of a level 5 esper from Toaru. Granting you incredible range, power and unmatched precision in controlling water."
  },
  {
    name: "Holy Water",
    rarity: 3.69,
    isNSFW: false,
    description: "78: Allows you to create and control holy water, holy water is very effective against unholy beings, you expend more energy to either create more water or create more potent holy water."
  },
  {
    name: "Hydrofreeze",
    rarity: 5.99,
    isNSFW: false,
    description: "79: Unordinary - allows the user to create, control and turn into water and ice, allowing them to shift into water to either escape or dodge, create icicles, freeze opponents etc. But assuming water or ice likewise makes you vulnerable to what water is vulnerable to."
  },
  {
    name: "Water Bubbles",
    rarity: 0.78,
    isNSFW: false,
    description: "80: Allows you to blow harmless water bubbles from your body."
  },
  {
    name: "Hydrification",
    rarity: 3.66,
    isNSFW: false,
    description: "81: Allows the user to turn their body into water at will, allowing them to slip away, be immune to physical attacks and gain increased mobility. But turning into water also makes the user vulnerable to weaknesses water has."
  },
  {
    name: "Water Breathing",
    rarity: 1.14,
    isNSFW: false,
    description: "82: Allows the user to breathe underwater as if they were on land."
  },
  {
    name: "Steam Emission",
    rarity: 3.23,
    isNSFW: false,
    description: "83: Allows the user to conjure, control and emit blasts of hot steam from their body."
  },
  {
    name: "Ink Manipulation",
    rarity: 3.34,
    isNSFW: false,
    description: "84: Allows the user to create and telekinetically control ink. With training, you could even condense ink into hardened constructs under your command."
  },
  {
    name: "Cool",
    rarity: 0.66,
    isNSFW: false,
    description: "85: Allows you to decrease the temperature of objects through touch. Does not decrease it particularly fast and it's certainly not enough to freeze then, but it will keep your drink or ice cream cool."
  },
  {
    name: "Chill",
    rarity: 1.78,
    isNSFW: false,
    description: "86: Allows you to create and control ice to a minor degree, not very good for skewering people with icicles but good for conjuring things like ice cubes or ice knives."
  },
  {
    name: "Frostbite",
    rarity: 2.89,
    isNSFW: false,
    description: "87: Allows you to rapidly freeze targets you are touching, with training you can increase the area of effect to freeze someone's entire body by grabbing their hand, or freeze the floor of an entire street."
  },
  {
    name: "Ice Spike",
    rarity: 2.56,
    isNSFW: false,
    description: "88: Allows the user to conjure and launch ice spikes or make the spikes of ice erupt from the ground. The more energy they expend, the stronger and larger the icicles."
  },
  {
    name: "Ice Creation",
    rarity: 3.55,
    isNSFW: false,
    description: "89: Allows you to create ice but not control it, you can still conjure walls of ice, shoot out spikes, ice weapons etc but you do not have telekinetic control over the ice you create."
  },
  {
    name: "Iceberg",
    rarity: 4.34,
    isNSFW: false,
    description: "90: Allows the user to freeze objects and create massive amounts of ice, allowing them to freeze entire streets, encase buildings in ice and with training, they can even turn entire city blocks into icebergs."
  },
  {
    name: "Ice Age",
    rarity: 5.73,
    isNSFW: false,
    description: "91: Allows the user to freeze objects and create incredible volumes of ice at will, freezing entire cities and buildings, launching ice boulders that weigh thousands of tons, impale people with pillars of ice. With enough training, they can turn entire cities into mountains of ice."
  },
  {
    name: "Frost",
    rarity: 3.68,
    isNSFW: false,
    description: "92: Allows the user to create and control ice at will, but they cannot control ice they haven't created."
  },
  {
    name: "Ice Manipulation",
    rarity: 4.85,
    isNSFW: false,
    description: "93: MHA - Allows the user to sense and exert telekinetic control over all ice in their range, but they themselves cannot create ice. But it is very potent in its control."
  },
  {
    name: "Half Hot Half Cold",
    rarity: 5.69,
    isNSFW: false,
    description: "94: MHA - Allows the user to create and emit both ice and fire from either side of their body, also providing elemental resistance to both fire and ice. In addition, with enough training, they can combine both aspects to unleash Frostflare."
  },
  {
    name: "Frozen Heart",
    rarity: 4.89,
    isNSFW: false,
    description: "95: Heavily boosts the power of the user's ice abilities and forcefully keeps their minds calm and sharp, making them resistant to any mental influences, in addition, they are immune to all frost effects below Epic rank."
  },
  {
    name: "Cryokinesis",
    rarity: 4.55,
    isNSFW: false,
    description: "96: Allows the user to telekinetically create and control ice and cold, allowing them to create ice constructs, remotely freeze objects etc."
  },
  {
    name: "White Album",
    rarity: 4.83,
    isNSFW: false,
    description: "97: Jojo Stand - Allows the user to freeze objects with extreme temperatures and form an armour of cold ice around themselves, they can freely dispel the effects of their ability. With enough training, they can plunge objects to near sub-zero temperatures."
  },
  {
    name: "Horus",
    rarity: 4.24,
    isNSFW: false,
    description: "98: Jojo - Allows the user to control and create ice constructs and launch them as projectiles, this ability can act independently from the user, attacking hostiles without their input and automatically creating ice barriers around them when in danger."
  },
  {
    name: "Demons Extract",
    rarity: 6.89,
    isNSFW: false,
    description: "99: Akame Ga Kill Esdeath - Grants the user extreme cryokinetic abilities as well as the ability to freeze virtually anything as well as create extreme amounts of ice that they can telekinetically control. With enough training the user can briefly freeze even time itself."
  },
  {
    name: "Cryomaster",
    rarity: 7.52,
    isNSFW: false,
    description: "100: Toaru - Allows the user to control cold and ice on the same level as a level 5 esper from Toaru. Granting them unmatched range, power and control over Ice and Cold."
  },
  {
    name: "Snow Warning",
    rarity: 2.34,
    isNSFW: false,
    description: "101: Allows the user to summon a snowstorm on their location that slightly boosts ice-based abilities."
  },
  {
    name: "Blizzard",
    rarity: 3.77,
    isNSFW: false,
    description: "102: Allows the user to summon a fierce blizzard that boosts the power of ice-based abilities."
  },
  {
    name: "Snow Manipulation",
    rarity: 3.45,
    isNSFW: false,
    description: "103: Allows the user to create and control snow, the amount of snow and the power behind it is equal to the amount of energy expended."
  },
  {
    name: "Snow Logia",
    rarity: 4.99,
    isNSFW: false,
    description: "104: Monet from one piece - Allows the user to create, control and turn into snow. Turning them into a living entity of snow."
  },
  {
    name: "Ice Logia",
    rarity: 7.11,
    isNSFW: false,
    description: "105: Aokiji from one piece- Allows the user to create, control and turn into ice. Turning them into a living entity of ice."
  },
  {
    name: "Freezing Breath",
    rarity: 3.11,
    isNSFW: false,
    description: "106: Allows you to charge and unleash a breath attack of frigid winds that freeze whatever they hit. The longer you charge and the more energy you expend the more powerful the breath is."
  },
  {
    name: "Ice Wall",
    rarity: 2.23,
    isNSFW: false,
    description: "107: Allows the user to create and conjure durable walls of ice to serve as barriers and obstacles."
  },
  {
    name: "Black Ice",
    rarity: 4.39,
    isNSFW: false,
    description: "108: Allows you to create and control black ice, black ice is a special type of incredibly durable ice that is very resistant against heat and fire."
  },
  {
    name: "Ice Formation",
    rarity: 5.02,
    isNSFW: false,
    description: "109: Jujustsu Kaisen - Allows the user to manifest extreme levels of cold and ice at will that they can exert telekinetic control over."
  },
  {
    name: "Absolute Zero",
    rarity: 7.09,
    isNSFW: false,
    description: "110: Allows you to drop temperatures down to absolute zero on either a target you are touching or in an area, the temperature drop is not instant. The more energy you can expend, the faster you can reach Absolute Zero."
  },
  {
    name: "Divinity Water & Ice",
    rarity: 8.09,
    isNSFW: false,
    description: "111: You are a god of water and ice who holds domain over both with all that entails."
  },
  {
    name: "Typhoon",
    rarity: 4.29,
    isNSFW: false,
    description: "112: Allows you to manifest and control Typhoons at will, creating miniature ones as direct attacks or unleashing them on an entire area for massive devastation."
  },
  {
    name: "Breeze",
    rarity: 0.49,
    isNSFW: false,
    description: "113: Allows you to conjure a light breeze from your body, not nearly strong enough to blow a grown man off his feet."
  },
  {
    name: "Gust",
    rarity: 1.66,
    isNSFW: false,
    description: "114: Allows you to conjure and control winds strong enough to injure and take grown men off their feet."
  },
  {
    name: "Wind",
    rarity: 2.44,
    isNSFW: false,
    description: "115: Allows you to conjure and control winds and air with decent power and precision, strong enough to kill people with lashes of wind or throw them in the air with gusts of wind."
  },
  {
    name: "Gale",
    rarity: 3.55,
    isNSFW: false,
    description: "116: Allows you to conjure, shape and control powerful gales of wind and air."
  },
  {
    name: "Hurricane",
    rarity: 4.49,
    isNSFW: false,
    description: "117: Allows you to conjure and command mighty winds and hurricanes with great power. With enough training, you can devastate several cities with hurricanes and storms."
  },
  {
    name: "Tempest",
    rarity: 5.39,
    isNSFW: false,
    description: "118: Upgrade of Hurricane You can create and create mighty storms and hurricanes to create massive devastation. With enough training, you can unleash grand tempests that devastate cities."
  },
  {
    name: "Aerokinesis",
    rarity: 4.99,
    isNSFW: false,
    description: "119: Allows you to sense and telekinetically control wind, granting you precise and powerful control of the air around you."
  },
  {
    name: "Wind Blade",
    rarity: 2.77,
    isNSFW: false,
    description: "120: Allows you to conjure and launch razor-sharp currents of wind in the shapes of slashes that take the form of crescent slashes."
  },
  {
    name: "Wind Edge",
    rarity: 2.44,
    isNSFW: false,
    description: "121: Allows you to cloak any item you are holding with razor-sharp winds to enhance its cutting ability while also allowing you to launch the cloak any time as a projectile to extend the cutting effect."
  },
  {
    name: "Delta Stream",
    rarity: 3.02,
    isNSFW: false,
    description: "122: Allows you to call forth winds that turn the surrounding area to become very windy, enhancing the power and efficiency of all wind-based abilities."
  },
  {
    name: "Floating",
    rarity: 2.44,
    isNSFW: false,
    description: "123: Allows you to cloak yourself in winds that carry you, allowing you to fly through the air."
  },
  {
    name: "Wind Flight",
    rarity: 3.02,
    isNSFW: false,
    description: "124: Allows you to push off of the air around you, allowing you to fly with precision and power."
  },
  {
    name: "Air Jet",
    rarity: 3.33,
    isNSFW: false,
    description: "125: Allows you to create air jets, streams of powerful air currents."
  },
  {
    name: "Wind Cloak",
    rarity: 3.22,
    isNSFW: false,
    description: "126: Allows you to cloak yourself in powerful winds, these winds will assist your movements, making you faster, and swifter and allowing you to dash and float with their help."
  },
  {
    name: "Whirlwind",
    rarity: 4.02,
    isNSFW: false,
    description: "127: MHA - Allows you to create and control powerful whirlwinds and air currents that you can control but it is not very precise."
  },
  {
    name: "Vacuum",
    rarity: 4.34,
    isNSFW: false,
    description: "128: Allows you to create vacuums and control them in your sensory range allowing you to pull things in and cause implosions. The more powerful a vacuum is the more energy it expends."
  },
  {
    name: "Louden",
    rarity: 0.99,
    isNSFW: false,
    description: "129: Allows you to increase noises to non-destructive levels that, while obnoxiously loud won't cause damage."
  },
  {
    name: "Megaphone",
    rarity: 1.44,
    isNSFW: false,
    description: "130: Allows you to amplify all noises you create, they can get so loud that they disorientate and temporarily deafen opponents."
  },
  {
    name: "Sonic Blast",
    rarity: 2.99,
    isNSFW: false,
    description: "131: Allows you to amplify all noises you create, they can get so loud that they can crack objects, rupture eardrums and deafen opponents."
  },
  {
    name: "View Air",
    rarity: 2.44,
    isNSFW: false,
    description: "132: Allows you to share your senses with the air around you, allowing you to map the world around you through the wind. The base range is 1km but it can be improved with training and base stats."
  },
  {
    name: "Boomburst",
    rarity: 3.66,
    isNSFW: false,
    description: "133: Allows you to amplify all noises you create, to the point where they cause physical destruction, internal damage, and deafness."
  },
  {
    name: "Airlock",
    rarity: 3.77,
    isNSFW: false,
    description: "134: Allows you to increase the air resistance in an area to the point where it can feel like wading through mud and make things like flight near impossible, with training you can increase it to the point where even trying to move causes things to burst into flame from friction."
  },
  {
    name: "Storm Blade",
    rarity: 3.88,
    isNSFW: false,
    description: "135: Allows you to conjure a blade of compressed air that you can manipulate the size and shape of, this most commonly takes the shape of the sword. You can also release wind slash projectiles from this blade."
  },
  {
    name: "Wind Barrier",
    rarity: 2.72,
    isNSFW: false,
    description: "136: Allows you to conjure a barrier made of violent air streams, by default it is a barrier around the user that excels in deflecting projectiles and elements but not so much physical force."
  },
  {
    name: "Invisible Air",
    rarity: 4.02,
    isNSFW: false,
    description: "137: From Fate - Barrier of the Wind King, the invisible air is a barrier made of several layers of extremely compressed air that the user can control at will, to either release in destructive bursts, cover an object in to render them invisible or to reinforce an existing weapon in incredibly powerful winds."
  },
  {
    name: "Weather Manipulation",
    rarity: 4.22,
    isNSFW: false,
    description: "138: Allows you to manipulate the weather conditions in an area, despite the massive range consumes very little energy but can't be used offensively very well."
  },
  {
    name: "Wind Alteration",
    rarity: 4.89,
    isNSFW: false,
    description: "139: Allows you to alter the chemical composition and properties of air, allowing you to increase the oxygen concentration to make it more flammable and poisonous or dense enough that it feels like steel among other things."
  },
  {
    name: "Oxygen Manipulation",
    rarity: 6.89,
    isNSFW: false,
    description: "140: Allows you to sense, interact with and control electromagnetism, a fundamental force of the universe, allowing you to control magnetic objects, create railguns, shoot lightning, tweak bioelectricity and much more."
  },
  {
    name: "Aeromaster",
    rarity: 7.89,
    isNSFW: false,
    description: "141: Toaru - Allows the user to control wind, air and its composition on the same level as a level 5 esper from Toaru. Granting them unmatched range, power and control over wind and air."
  },
  {
    name: "Atmospheric Pressure Manipulation",
    rarity: 4.12,
    isNSFW: false,
    description: "142: Allows you to control atmospheric pressure with zones that you can increase and decrease the pressure of."
  },
  {
    name: "Air Whips",
    rarity: 2.59,
    isNSFW: false,
    description: "143: Allows the user to create and control whips of compressed air that they can use to lash out or grab things with. The longer and stronger the whip the more energy is expended."
  },
  {
    name: "Spark",
    rarity: 0.49,
    isNSFW: false,
    description: "144: Allows you to create small sparks of electricity from your body, not even strong enough to function as a proper taser."
  },
  {
    name: "Taser",
    rarity: 1.44,
    isNSFW: false,
    description: "145: Allows you to channel electricity through your body and discharge it, strong enough to seriously hurt someone."
  },
  {
    name: "Arc",
    rarity: 2.22,
    isNSFW: false,
    description: "146: Allows you to channel electricity through your body and discharge, with training you can channel where your electricity goes to aim it more precisely."
  },
  {
    name: "Electric Discharge",
    rarity: 3.33,
    isNSFW: false,
    description: "147: Allows you to channel potent electricity through your body and discharge, with training you can channel where your electricity goes to aim it more precisely."
  },
  {
    name: "Lightning Channel",
    rarity: 3.04,
    isNSFW: false,
    description: "148: Allows you to channel lightning through any object you are holding, reinforcing and empowering them, this lightning imitates the object it is channelled through, becoming sharp with a sword and heavy with a hammer."
  },
  {
    name: "Lightning Absorption",
    rarity: 3.45,
    isNSFW: false,
    description: "149: Allows you to absorb electricity and lightning and store it inside of your body. You can convert absorbed lightning into energy to refill your reserves or channel it to increase your power or use it as an attack."
  },
  {
    name: "Call Lightning",
    rarity: 2.89,
    isNSFW: false,
    description: "150: Allows you to call down lightning that strikes from the sky to strike any location in your sensory range, not very effective indoors."
  },
  {
    name: "Call Thunder",
    rarity: 3.22,
    isNSFW: false,
    description: "151: Allows you to call down powerful thunder that strikes from the sky to strike any location in your sensory range, not very effective indoors."
  },
  {
    name: "Call Greater Thunder",
    rarity: 4.02,
    isNSFW: false,
    description: "152: Allows you to call down very powerful thunder that strikes from the sky to strike any location in your sensory range, not very effective indoors. With training, you can call down multiple at once or even charge it to send down a concentrated spear of thunder."
  },
  {
    name: "Storm Call",
    rarity: 5.87,
    isNSFW: false,
    description: "153: Allows you to freely call thunder and lightning from the skies to strike down on the ground with little energy consumption. You can even charge it to smite the world with concentrated lightning."
  },
  {
    name: "Lightning Form",
    rarity: 4.49,
    isNSFW: false,
    description: "154: Allows you to turn into a living bolt and lightning and travel extremely quickly while ignoring most types of conventional attacks. But you are extremely vulnerable to grounding which will eject you from lightning while injuring you."
  },
  {
    name: "Radio Waves",
    rarity: 3.19,
    isNSFW: false,
    description: "155: (Tech)MHA - Allows you to emit electromagnetic waves that disable and cripple all technology with an interface. With training, you can even fine-tune the waves you send to instead to activate or control electronics."
  },
  {
    name: "Impulse",
    rarity: 2.09,
    isNSFW: false,
    description: "156: Allows you to quicken the electrical signals in your body, increasing your reflexes and speed proportionally. Overusing may cause nerve damage."
  },
  {
    name: "Godspeed",
    rarity: 4.24,
    isNSFW: false,
    description: "157: HxH - Overhaul the nervous system with your own lightning, giving near-instant reflexes and granting you extreme speed. But the lightning will cause damage to your body over time so extended use is not recommended."
  },
  {
    name: "Electrokinesis",
    rarity: 4.85,
    isNSFW: false,
    description: "158: Allows you to create and control electricity at will, whether that be shooting lightning bolts, pulling a Palpatine, or tweaking your own bioelectricity. But you cannot control electromagnetic waves."
  },
  {
    name: "Electromagnekinesis",
    rarity: 6.09,
    isNSFW: false,
    description: "159: Allows you to sense, interact with and control electromagnetism, a fundamental force of the universe, allowing you to control magnetic objects, create railguns, shoot lightning, tweak bioelectricity and much more."
  },
  {
    name: "Assign",
    rarity: 3.33,
    isNSFW: false,
    description: "160: Allows you to assign polarity to objects to make them attract or repel each other, needs physical contact to activate. The more energy you expend the stronger a polarity is."
  },
  {
    name: "Electromaster",
    rarity: 7.77,
    isNSFW: false,
    description: "161: Toaru - Allows you complete control over Electromagnetism, a fundamental force of the universe, your range, power and precision in manipulating Electromagnetism is unmatched."
  },
  {
    name: "Stun Shock",
    rarity: 2.44,
    isNSFW: false,
    description: "162: Allows you to mess up someone's bioelectricity via touch, stunning or paralyzing them, with training you could do advanced manipulation of their bodies. The stronger an opponent is, the harder it is to affect them."
  },
  {
    name: "Lightning Breath",
    rarity: 3.04,
    isNSFW: false,
    description: "163: Allows you to charge and unleash a breath of devastating lightning waves, the longer you charge for and the more energy you expend, the stronger the breath is."
  },
  {
    name: "Railgun",
    rarity: 3.89,
    isNSFW: false,
    description: "164: Allows you to turn any magnetic object in your grasp into a railgun projectile, the higher the mass higher cost and you also have to aim it."
  },
  {
    name: "Frozen Lightning",
    rarity: 3.55,
    isNSFW: false,
    description: "165: Allows you to wield and control frozen lightning, unlike regular lightning which is incredibly hot, Frozen Lightning is instead proportionally colder, freezing whatever object it electrocutes or passes through."
  },
  {
    name: "Lightning Spear",
    rarity: 2.66,
    isNSFW: false,
    description: "166: Allows the user to conjure a spear of lightning that they can throw as a projective, (does not travel at lightning speed). This spear possesses penetrative power and deals increased damage against draconic entities."
  },
  {
    name: "Great Lightning Spear",
    rarity: 3.17,
    isNSFW: false,
    description: "167: Allows the user to conjure a spear of lightning that they can throw as a projective, (does not travel at lightning speed). This spear possesses penetrative power and deals increased damage against draconic entities that rends their powerful scales and hides, nulling their defence."
  },
  {
    name: "Sunlight Spear",
    rarity: 3.77,
    isNSFW: false,
    description: "168: Allows the user to conjure a spear of lightning imbued with the power of the sun that they can throw as a projective. This spear possesses penetrative power and deals increased damage against draconic entities and unholy beings."
  },
  {
    name: "Thunder Cloak",
    rarity: 3.84,
    isNSFW: false,
    description: "169: Allows you to cloak your body in thunder, increasing your speed, power and reflexes while also imbuing electricity into your attacks."
  },
  {
    name: "Chidori",
    rarity: 3.04,
    isNSFW: false,
    description: "170: Naruto - Allows the user to cloak their hands in violent sharp electricity that also enhances piercing and cutting ability, essentially turning their hands into lightning blades."
  },
  {
    name: "Lightning Bolt",
    rarity: 3.14,
    isNSFW: false,
    description: "171: Release a bolt of lightning from your hands to the target that travels at the speed of lightning."
  },
  {
    name: "Electromagnetic Sight",
    rarity: 2.24,
    isNSFW: false,
    description: "172: Allows the user to change their vision to be able to see electromagnetism and electricity even through walls as well as being able to instinctively distinguish between and understand them."
  },
  {
    name: "Electricity",
    rarity: 4.04,
    isNSFW: false,
    description: "173: Unordinary - Allows the user to create and control electricity(not kinesis) as well as use it to slightly enhance their own stats, they can also sense and see nearby currents even through walls, and they can also ground opponent lightning with their own body."
  },
  {
    name: "Lightning Conduit",
    rarity: 5.55,
    isNSFW: false,
    description: "174: Infamous - Allows the user to absorb lightning to harness its powers, does not consume mana but instead absorbed electricity reserves, and allows the user to turn into, manipulate and generate electricity by expending their reserves."
  },
  {
    name: "Lightning Claws",
    rarity: 2.66,
    isNSFW: false,
    description: "175: Create claws of violent lightning on top of your regular hands to sever and electrocute enemies at the same time."
  },
  {
    name: "Pebble Sling",
    rarity: 0.33,
    isNSFW: false,
    description: "176: Conjure pebbles and small rocks and sling them toward enemies to minorly inconvenience them or hurt them if they hit their eyes."
  },
  {
    name: "Rock Throw",
    rarity: 1.44,
    isNSFW: false,
    description: "177: Conjure rocks and small stones and launch them as projectiles, not very powerful but a rock thrown at your head always hurts."
  },
  {
    name: "Stone Bullet",
    rarity: 2.33,
    isNSFW: false,
    description: "178: Conjure rocks and small stones and shoot them like bullets with lethal power, you are basically a living stone gun."
  },
  {
    name: "Boulder Hurl",
    rarity: 2.87,
    isNSFW: false,
    description: "179: Conjure a large boulder and hurl it at your enemies, regardless of your existing strength, the weight of the boulder does not affect your throwing ability regardless if it is a person or a house-sized boulder."
  },
  {
    name: "Rock Shotgun",
    rarity: 2.66,
    isNSFW: false,
    description: "180: Conjure multiple small rocks and launch them at lethal speeds."
  },
  {
    name: "Bullet",
    rarity: 3.34,
    isNSFW: false,
    description: "181: Allows you to conjure lead or other metal bullets ranging from small to high calibre and launch them at supersonic to hypersonic speeds. The more energy you expend the higher the caliber bullet and higher its speed."
  },
  {
    name: "Move Earth",
    rarity: 2.54,
    isNSFW: false,
    description: "182: Allows you to telekinetically move earth in your sensory range, does not have much lethal power."
  },
  {
    name: "Quicksand",
    rarity: 2.02,
    isNSFW: false,
    description: "183: Allows you to turn ground into quicksand that grabs and pulls anyone who steps on it."
  },
  {
    name: "Earth Spikes",
    rarity: 2.92,
    isNSFW: false,
    description: "184: Allows you to create, control and launch spikes made from earth and rock. You can also make these spikes energy from the ground in your sensory range."
  },
  {
    name: "Meteor Strike",
    rarity: 4.12,
    isNSFW: false,
    description: "185: Call down meteors from the sky, the size of the meteor and its speed are dependent on the amount of energy you expend."
  },
  {
    name: "Chain & Shackle",
    rarity: 3.77,
    isNSFW: false,
    description: "186: Create metal chains and shackles that erupt from the earth to bind your enemies, they are very difficult to dodge as they track opponents and chase them down."
  },
  {
    name: "Catapult",
    rarity: 3.44,
    isNSFW: false,
    description: "187: Create and launch giant boulders at your enemies regardless of your existing strength, the weight of the boulder does not affect your throwing ability regardless if it is a person or a house-sized boulder."
  },
  {
    name: "Stonewall",
    rarity: 2.11,
    isNSFW: false,
    description: "188: Create a durable wall of stone to block attacks and restrict movement, very effective against physical blows but not so much against elemental ones."
  },
  {
    name: "Micro Ferrokinesis",
    rarity: 2.44,
    isNSFW: false,
    description: "189: Allows you to manipulate metals on a small but extremely precise scale. You cannot hurl cars but you could grab a chunk of gold and turn it into an extremely ornate ring with microscopic carvings."
  },
  {
    name: "Earth Armor",
    rarity: 2.07,
    isNSFW: false,
    description: "190: Allows you to create an armour made of earth around your body to absorb blows and attacks. This armour does not impede your mobility or speed."
  },
  {
    name: "Earthquake",
    rarity: 2.81,
    isNSFW: false,
    description: "191: Allows the user to create earthquakes, causing massive environmental destruction."
  },
  {
    name: "Fissure",
    rarity: 2.23,
    isNSFW: false,
    description: "192: Allows the user to create fissures on objects to shatter them or to split them apart. The harder an object is, the more energy is needed to fissure."
  },
  {
    name: "Ferrokinesis",
    rarity: 4.99,
    isNSFW: false,
    description: "193: Allows the user to telekinetically control and shape metal in their sensory range. Ripping them out of buildings to turn them into spears to launch at enemies, flying using some metal bands, controlling blood with iron etc."
  },
  {
    name: "Terrakinesis",
    rarity: 4.55,
    isNSFW: false,
    description: "194: Allows the user to telekinetically control earth and rock in their sensory range."
  },
  {
    name: "Armor",
    rarity: 3.14,
    isNSFW: false,
    description: "195: Allows you to create very durable and reinforced metal armour on your body that enhances endurance. The stronger you are, the stronger the metal formed is, you can also change the shape of the armour with concentration."
  },
  {
    name: "Metal Kaiser",
    rarity: 4.07,
    isNSFW: false,
    description: "196: Worm - Allows you to create metal from any non-organic surface such as giant blades, walls, and pillars. The more energy you expend, the more metal is created."
  },
  {
    name: "Iron Manipulation",
    rarity: 3.66,
    isNSFW: false,
    description: "197: Allows you to telekinetically control iron and iron-based objects in your perception. The level of control and strength is based on the level of focus and the amount of mana spent."
  },
  {
    name: "Extinction Meteors",
    rarity: 5.29,
    isNSFW: false,
    description: "198: Allows you to bring down giant meteors that can cause massive devastation and damage. The mass, power and speed of these meteors are dependent on the amount of energy expended. This ability is quite expensive to use."
  },
  {
    name: "Pocket Sand",
    rarity: 0.44,
    isNSFW: false,
    description: "199: Conjure and launch a handful of sand from your hands, shouting pocket sand as you do so might make it stronger."
  },
  {
    name: "Sandshot",
    rarity: 1.14,
    isNSFW: false,
    description: "200: Conjure and launch sand from your fingers at non-lethal speeds but enough to harm people."
  },
  {
    name: "Sandstream",
    rarity: 2.21,
    description: "201: Launch powerful steams of sand from your body to hinder enemy vision and injure them, equivalent to sandblasting them."
  },
  {
    name: "Sandblast",
    rarity: 2.66,
    description: "202: Allows you to launch blasts of high-velocity sand clouds, capable of rending and shredding metals and especially flesh."
  },
  {
    name: "Death Valley Duster",
    rarity: 3.89,
    description: "203: Allows you to conjure violent clouds of sand and dust that you can launch with blasts of immense power like a sandblast to shred targets."
  },
  {
    name: "Primordial Earth",
    rarity: 5.67,
    description: "204: Allows you to control earth, dust and sand in your sensory range, allowing you to unleash giant blasts of sand, launch jagged boulders, and make stalagmites erupt."
  },
  {
    name: "Primordial Ancient",
    rarity: 6.34,
    description: "205: Allows you to control earth, dust and sand to extreme levels, what it lacks in precision it makes up in unbelievable destructive power."
  },
  {
    name: "Karura's Blessing",
    rarity: 4.29,
    description: "206: Karura's blessing is an autonomous sand shield that protects from danger automatically and does not consume mana."
  },
  {
    name: "Burial",
    rarity: 2.79,
    description: "207: Allows you to instantly bury any target touching the ground under the ground, suffocating and crushing them, using burial on a corpse prevents necromancy and revival on them."
  },
  {
    name: "Summon Lesser Earth Elemental",
    rarity: 3.69,
    description: "208: Allows you to temporarily conjure and command lesser earth elementals like ones from DnD or other fantasy series as long as they are ranked lower than rare. Elementals fade over time if not supplied with energy."
  },
  {
    name: "Summon Earth Elemental",
    rarity: 4.59,
    description: "209: Allows you to temporarily conjure and command earth elementals like ones from Hota or other fantasy series as long as they are ranked lower than Elite. Elementals fade over time if not supplied with energy."
  },
  {
    name: "Summon Greater Earth Elemental",
    rarity: 5.09,
    description: "210: Allows you to temporarily conjure and command earth elementals like ones from Overlord or other fantasy series as long as they are ranked lower than Epic. Elementals fade over time if not supplied with energy."
  },
  {
    name: "Golem Creation",
    rarity: 4.07,
    description: "211: Allows you to animate and command golems from earth, mud, sand or metal, the more durable and powerful the golem the higher the cost. The golems can be made temporary with less energy cost or permanent with a very high energy cost."
  },
  {
    name: "Titan Armor",
    rarity: 5.09,
    description: "212: Allows you to form a gigantic armour of kaiju proportions around yourself by fusing with the earth and forming it into armour around yourself. The bigger the armor the more energy expended."
  },
  {
    name: "Golem Armor",
    rarity: 3.69,
    description: "213: Allows you to create a golem around yourself that acts as armour and enhances your physical stats constructed from the ground underneath your feet or materials you are touching."
  },
  {
    name: "Stalagmite Burst",
    rarity: 2.69,
    description: "214: Allows you to unleash stalagmite blades that erupt from the ground as spikes to impale your enemies."
  },
  {
    name: "Thousand Arrows",
    rarity: 4.29,
    description: "215: Pokemon - Allows you to create and launch spears or arrows made of the ground around you, either as artillery, traps, or just plain projectile bombardment."
  },
  {
    name: "Metal Manipulation",
    rarity: 4.27,
    description: "216: MHA - Allows you to control the shape and form of all metals you are in contract with."
  },
  {
    name: "Mud Manipulation",
    rarity: 3.44,
    description: "217: Allows you to conjure and control mud, creating swamps underneath your feet or bombarding your opponents with mud."
  },
  {
    name: "Crystal Shower",
    rarity: 2.66,
    description: "218: Allows you to create crystals and shoot them as projectiles at your target, the larger and faster the crystal the more energy you expend."
  },
  {
    name: "Crystal Spikes",
    rarity: 2.21,
    description: "219: Allows you to create durable but brittle crystal spikes that pop out of the ground or any surface you are in contact with to impale your opponents or serve as physical barriers."
  },
  {
    name: "Diamond Skin",
    rarity: 4.39,
    description: "220: One Piece - You can cover your body in a diamond-like texture, massively enhancing your durability and mass against all forms of damage. Even as a base human you can easily take high-calibre bullets and tank shells without feeling much, a car could hit you without knocking you off your feet, and you can walk through fire without feeling a thing. Even a missile cannot kill you even if it would hurt."
  },
  {
    name: "Crystal Creation",
    rarity: 3.77,
    description: "221: Allows you to create crystals on your body or on surfaces you are touching, you can control the shape and size of the crystal while creating but after that, you cannot alter it any further."
  },
  {
    name: "Crystals",
    rarity: 2.11,
    description: "222: Allows you to create and sprout crystals from your body, either making them erupt from your body like spikes, covering your skin with them as armour or just selling them for cash."
  },
  {
    name: "Gem Creation",
    rarity: 3.89,
    description: "223: Allows you to create precious gems that can hold a lot of energy or mana, the larger and more valuable the gem, the more energy you need to consume to create them."
  },
  {
    name: "Pure Gem Creation",
    rarity: 4.99,
    description: "224: Allows you to create pure precious gems that can hold immense energy and serve as vessels for various things. The purer and more potent the gem, the more energy you need to consume to create it."
  },
  {
    name: "Sand Veil",
    rarity: 2.39,
    description: "225: Create a small localized sandstorm on your location that also makes your presence harder to detect inside of it while allowing you to see through it freely."
  },
  {
    name: "Fool Sand",
    rarity: 4.99,
    description: "226: JoJo - Allows you to conjure autonomous sand that can shapeshift, attack and defend without your input to protect you, eliminate enemies or simply provide utility."
  },
  {
    name: "Desert Weaponry",
    rarity: 3.59,
    description: "227: Allows you to create a variety of weapons and attacks made out of sand and wind to unleash as projectiles such as giant sand blades, spears and hammers."
  },
  {
    name: "Sandstorm Body",
    rarity: 4.09,
    description: "228: Allows the user to turn their body into a living cloud of sand and reform at will, the damage inflicted on the sand reflects on the user."
  },
  {
    name: "Dig",
    rarity: 2.89,
    description: "229: Allows you to dig and move incredibly fast through underground like a mole, you can also breathe underground too. You dig faster than you can sprint."
  },
  {
    name: "Dowsing",
    rarity: 1.59,
    description: "230: Allows you to detect metals around you like a mental radar, the more valuable a metal is, the more distinct its presence in your radar."
  },
  {
    name: "View Earth",
    rarity: 3.29,
    description: "231: Allows you to share your vision with the earth, feeling everything the earth feels and seeing all it can see, the default range is 5km which can be increased with training."
  },
  {
    name: "Wire",
    rarity: 3.02,
    description: "232: Allows you to create and control metal wires, once a wire has separated from your body you no longer have control over it. You can also reinforce your wires with energy to make them more durable."
  },
  {
    name: "Pika",
    rarity: 5.29,
    description: "233: One Piece - Allows you to fuse with the earth, allowing you complete control over the terrain, whether it be shaping, moving and reforming it or turning it into a giant golem around yourself."
  },
  {
    name: "Desert Logia",
    rarity: 6.29,
    description: "234: One Piece - Allows the user to create, control and turn into sand. In addition, they can also drain moisture from objects to dry them and turn stone into sand."
  },
  {
    name: "Blackout",
    rarity: 2.49,
    description: "235: Allows you to banish all light from an area, making it nigh impossible to see through mundane means. The larger the area the more energy is needed."
  },
  {
    name: "Shadow Travel",
    rarity: 3.49,
    description: "236: Allows you to sink into shadows and travel inside of them like Black Sabbath from JoJo, if you get hit by sunlight while inside of a shadow you take damage as if you were burnt."
  },
  {
    name: "Shadow Hands",
    rarity: 3.29,
    description: "237: Allows you to manifest floating hands made out of shadows that you can control as your own, they can grip, crush, slash and combine to become large and more powerful."
  },
  {
    name: "Sethan",
    rarity: 4.69,
    description: "238: Sethan from JoJo - Allows you to move your shadow like a living creature that can attack, whenever someone steps on your shadow they rapidly de-age, the de-ageing is dispelled when the user is unconscious or the ability is turned off. Stronger opponents de-age slower."
  },
  {
    name: "Shadow Puppeteer",
    rarity: 3.79,
    description: "239: Naruto - Allows you to extend your shadow and when your shadow touches the target's shadow their movement mimics yours until the ability is dispelled."
  },
  {
    name: "Shadow Tag",
    rarity: 3.04,
    description: "240: Allows you to interact with the shadow of people as tangible objects, you can step on or pin their shadow to prevent them from escaping or grab it and pull them toward you."
  },
  {
    name: "Shadow Dart",
    rarity: 1.88,
    description: "241: Allows you to conjure and launch shadow darts made from energy that make no sound."
  },
  {
    name: "Shadow Cloak",
    rarity: 1.34,
    description: "242: Cloak yourself in shadows to make yourself harder to perceive and muffle the sounds you make to enhance your stealth capabilities."
  },
  {
    name: "Shadow Stalker",
    rarity: 4.79,
    description: "243: Worm - Allows you and your equipment to enter a shadow state, allowing you to phase through solid matter. With training, you can also use phasing on equipment to ignore target durability by unphasing bolts inside of them. While in shadow form you are incredibly vulnerable to electricity and aerosols."
  },
  {
    name: "Shadow Ball",
    rarity: 2.69,
    description: "244: Allows you to conjure and launch a fast-moving orb made of shadows that carries destructive power and deals additional damage to spirits."
  },
  {
    name: "Shadow Blade",
    rarity: 2.88,
    description: "245: Allows you to conjure a blade of shadows that you can use as a weapon, you can adjust the size and shape of the weapon, despite being lightweight it is very sharp and can ignore around 10% of the target's durability, always dealing at least some damage."
  },
  {
    name: "Shadow Scythe",
    rarity: 4.24,
    description: "246: Allows you to conjure a scythe made of shadows that you can alter the size and shape of, the scythe can select what it does and doesn't cut according to your will and it can also ignore a portion of the target durability."
  },
  {
    name: "Reaper's Scythe",
    rarity: 5.07,
    description: "247: Allows you to conjure a scythe made of pure darkness that you can alter the size and shape of, the scythe completely ignores the durability of physical objects and barriers while also preventing regeneration and resurrection from the wounds it causes."
  },
  {
    name: "Death's Instrument",
    rarity: 6.07,
    description: "248: Allows you to call forth death's instrument, a pitch-black scythe that completely ignores all durability, magical or physical. Wounds inflicted affect souls as well as bodies, making them impossible to heal by mundane means."
  },
  {
    name: "Bottomless Swamp",
    rarity: 2.89,
    description: "249: Allows you to transform the ground around you into a bottomless swamp that traps any targets that step on it, making them sink further into the swamp, if they fully submerge they are fully incapacitated and enter a stasis-like state."
  },
  {
    name: "Dark Lance",
    rarity: 2.69,
    description: "250: Allows you to conjure and launch spears made of dark energy that deals additional damage to holy and divine beings."
  },
  {
    name: "Shadow Storage",
    rarity: 4.29,
    description: "251: Your shadow can move and extend across 2d surfaces, allowing you to sink objects into it that are put into a stasis, does not have a weight limit and object inside can be ejected out at any time."
  },
  {
    name: "Shadow Claws",
    rarity: 2.49,
    description: "252: Allows you to conjure sharp and lightweight Shadow Claws on top of your hands that can slash opponents. You can also extend their length and sharpness with training."
  },
  {
    name: "Shadow Chains",
    rarity: 3.99,
    description: "253: Allows you to create and control chains of shadow weaved from your own, once they snare an enemy they quickly start exhausting their energy."
  },
  {
    name: "Blind",
    rarity: 3.29,
    description: "254: Allows you to inflict a curse on your opponents, once applied it blocks off their sense of sight. You can place a curse on someone through touch or throwing a hex, a moderately fast projectile that looks like a rune, duration depends on the target's magic resistance and can be applied permanently on targets who cannot resist."
  },
  {
    name: "Grue",
    rarity: 4.09,
    description: "255: Worm - Allows to create a cloud of darkness that blots out the sense of everyone inside, making it incredibly difficult to perceive anything while inside. The effects can be partially mitigated by strong targets."
  },
  {
    name: "Deafness",
    rarity: 2.69,
    description: "256: Allows you to inflict a curse on your opponents, once applied it blocks off their sense of hearing. You can place a curse on someone through touch or throwing a hex, a moderately fast projectile that looks like a rune, duration depends on the target's magic resistance and can be applied permanently on targets who cannot resist."
  },
  {
    name: "Numbness",
    rarity: 3.66,
    description: "257: Allows you to inflict a curse on your opponents, once applied it blocks off their sense of touch. You can place a curse on someone through touch or throwing a hex, a moderately fast projectile that looks like a rune, duration depends on the target's magic resistance and can be applied permanently on targets who cannot resist."
  },
  {
    name: "Mute",
    rarity: 3.02,
    description: "258: Allows you to inflict a curse on your opponents, once applied it blocks off their ability to speak. You can place a curse on someone through touch or throwing a hex, a moderately fast projectile that looks like a rune, duration depends on the target's magic resistance and can be applied permanently on targets who cannot resist."
  },
  {
    name: "Conjure Shadowbeast",
    rarity: 3.89,
    description: "259: Allows you to conjure a temporary familiar made of shadows that can act autonomously, the power of the familiar depends on the amount of energy used to create them."
  },
  {
    name: "Gate of Nightmares",
    rarity: 5.79,
    description: "260: Allows you to unleash a horde of shadow beasts and darkness monsters under your control by summoning a gigantic 10-meter tall gate made of darkness. The more energy you give to the gate, the more beasts that will be unleashed."
  },
  {
    name: "Dark Lance",
    rarity: 4.29,
    description: "261: Allows you to conjure and unleash lances made of dark energy which are exceptionally lethal against holy beings. In addition, wounds inflicted by dark lances are difficult to heal."
  },
  {
    name: "Abyss",
    rarity: 6.09,
    description: "262: Reality Marbe - Allows you to pull your targets into the Abyss, inside the Abyss all energies and vitality start getting exhausted, rapidly draining your opponents of energy and life. Inside the Abyss, all dark abilities are boosted."
  },
  {
    name: "Void Tendril",
    rarity: 3.44,
    description: "263: Allows you to conjure and control tendrils woven from void, these tendrils can grapple, crush, whip and pierce to your desires. You can also share sensations with the tentacles."
  },
  {
    name: "Shade Cloak",
    rarity: 3.69,
    description: "264: Allows you to temporarily shift your body into a shadow state and phase through attacks and magic, does not have weaknesses other than light and holy magic but you can only turn into a shadow for 1 second at a time before a 3-second cooldown."
  },
  {
    name: "Cursecraft",
    rarity: 4.89,
    description: "265: Allows you to create and apply curses depending on your abilities and abilities. E.g. Light ability becomes blinding, strength ability becomes weakness etc."
  },
  {
    name: "Darkness Devil",
    rarity: 7.89,
    description: "266: Chainsaw Man - You are the fear of darkness incarnate, you have authority over all darkness and shadows, allowing you to control and manipulate them to your will."
  },
  {
    name: "Black Hole",
    rarity: 5.09,
    description: "267: Allows you to conjure and control weaker small-scale virtual black holes. With training, you could even conjure real black holes and make it everyone else's problem."
  },
  {
    name: "Void Dragon's Breath",
    rarity: 4.09,
    description: "268: Allows you to charge and unleash a breath attack of erosive and destructive void energy that exhausts the energy of whatever it touches. The longer you charge for and the more energy you use the stronger the breath is."
  },
  {
    name: "Shadow Mirror",
    rarity: 2.09,
    description: "269: Legendary Mechanic - Conjures a shadow copy of you that can't interact with physical matter but can act as a distraction."
  },
  {
    name: "Void Travel",
    rarity: 3.99,
    description: "270: Legendary Mechanic - Allows you to temporarily slip into the void dimension, while in the void dimension, you can freely traverse space but are unable to interact with the real world, time in the void dimension time is slower than normal. The distance you have covered in the void realm is equal to real life, allowing you to teleport short ranges with it, you can stay in the void dimension for 30 seconds but this can be increased with training. 5 Minute cooldown."
  },
  {
    name: "Chaos Entity Release",
    rarity: 5.19,
    description: "271: Legendary Mechanic - Allows you to release your physical form to turn into a Void Observer, a sentient grey cloud of energy that can slip into the void dimension at will, rendering you completely intangible while still allowing you to observe the real world, staying in the void dimensions slightly drains your energy while inside. While in Chaos Observer form you are mostly immune to physical force. Any damage taken in Chaos Observer form is reflected in the real body."
  },
  {
    name: "Void Path",
    rarity: 6.49,
    description: "272: Legendary Mechanic - Allows the user to directly open gates to the Void Dimension, allowing them to traverse the void, throw entities inside and even bring entities out of the void dimension, use with caution."
  },
  {
    name: "Void Distorter Form",
    rarity: 5.99,
    description: "273: Legendary Mechanic - Transforms the user into a Void Distorter, a being native to the Void whose abilities allow it to distort and destroy the natural world by distorting and shaping the void to cause massive destruction like spatial distortions. Also has the ability to use Void Travel."
  },
  {
    name: "Abyssal Jail",
    rarity: 5.29,
    description: "274: Allows the user to manifest Abyss into the natural world, allowing them to trap entities in a localized Abyss, isolating them from the world and exhausting them of their energy and vitality. Breaking out of the Abyss with raw force is possible but incredibly difficult to accomplish."
  },
  {
    name: "Abyss Skin",
    rarity: 3.89,
    description: "275: Cover your skin in Abyss, while providing no offensive benefits it has potent defensive capability, dissipating energy it comes into contact with including kinetic and heat energy but vulnerable to sudden powerful attacks that can bypass its absorption."
  },
  {
    name: "Yami",
    rarity: 3.24,
    description: "276: Yugioh - When used, an ominous darkness with rouge clouds covers the surroundings, boosting the power of dark abilities and infernal beings while weakening all Holy beings and abilities."
  },
  {
    name: "Darkness Logia",
    rarity: 7.01,
    description: "277: One Piece - Allows the user to create, control and turn into Darkness at will. Their darkness can absorb and store anything but also amplifies the user's sensation of pain."
  },
  {
    name: "Shadow Eyes",
    rarity: 3.07,
    description: "278: Allows you to conjure small eye-shaped shadow familiars that can act autonomously and observe targets, they possess no combat ability but have potent hiding abilities. They can also relay the information they observe to their conjurer."
  },
  {
    name: "Shadow Beast Form",
    rarity: 4.89,
    description: "279: Allows you to turn into a giant amorphous shadow monster like Dark Shadow from MHA, but makes them incredibly vulnerable to holy and light-based effects."
  },
  {
    name: "Shadow Armor",
    rarity: 4.21,
    description: "280: Allows you to create an armour of shadows around themselves that you can freely alter the shape of, the shadows are very durable and lightweight, while the armour is active your physical abilities are boosted and darkness abilities are more potent."
  },
  {
    name: "Umbrakinesis",
    rarity: 4.89,
    description: "281: Allows you to weave shadow and darkness into physical form and exert control over it, like chains made of shadows, spikes erupting from a target's shadow or lances of darkness."
  },
  {
    name: "Abyss Barrier",
    rarity: 5.09,
    description: "282: Allows you to weave the Abyss into a physical barrier, the Abyssal barrier can absorb and dissipate energy, making it a great barrier against any non-holy attack as it is nigh impossible to break without overwhelming force."
  },
  {
    name: "Shadow Monarch",
    rarity: 6.79,
    description: "283: Solo Leveling - Allows you to extract shadows from corpses to turn into minions under your command, the shadows are immortal as long as their bodies are restored by your mana, the level of shadows you can raise and the amount you can store on you at once is dependant on your energy levels."
  },
  {
    name: "Flashlight",
    rarity: 0.49,
    description: "284: You can emit a beam of moderate-intensity light from your hands, a useful replacement for a flashlight but not useful for much else."
  },
  {
    name: "Flash",
    rarity: 1.21,
    description: "285: You can emit a bright blinding light from your hands or use it with less intensity for utility, does not work well outside of close range."
  },
  {
    name: "Illumination",
    rarity: 1.79,
    description: "286: Allows you to conjure bright points of light that you can telekinetically control, you can also consume more energy to make the lights semi-permanent."
  },
  {
    name: "Holy Light",
    rarity: 2.34,
    description: "287: Allows you to conjure and emit holy light, while utterly useless against any normal beings it is incredibly useful against any dark or unholy beings."
  },
  {
    name: "Invisibility",
    rarity: 2.52,
    description: "288: Allows the user to bend light around themself or other object they are touching to render them invisible."
  },
  {
    name: "Flash Grenade",
    rarity: 2.44,
    description: "289: Allows you to conjure a ball of light that explodes into a blinding flash and noise, disorientating enemies and hurting dark enemies greatly."
  },
  {
    name: "Light of Glory",
    rarity: 3.37,
    description: "290: The light of victory and glory shines down from the heavens and bolsters your allies. Bright light shines down from above, slightly increasing all physical stats, increased mental resistance, vigor and courage to everyone touched by its rays."
  },
  {
    name: "Light Grenade",
    rarity: 2.88,
    description: "291: DBZ - Allows you to conjure and launch a grenade of light energy that explodes, it is rather fast and powerful."
  },
  {
    name: "Beam",
    rarity: 3.44,
    description: "292: You can shoot a beam of concentrated light and heat from your fingers that travels almost instantaneously."
  },
  {
    name: "Blessing",
    rarity: 3.09,
    description: "293: Allows you to bless yourself with holy energy, bolstering all attributes for one hour. Also increases resistance to curses and all ailments when active."
  },
  {
    name: "Minor Blessing",
    rarity: 2.69,
    description: "294: Allows you or a target to receive a minor blessing that augments a chosen physical attribute for one hour. The stronger you are the stronger your blessing."
  },
  {
    name: "Greater Blessing",
    rarity: 4.39,
    description: "295: Allows you or a target to receive a greater blessing that augments any chosen physical attribute and minor regeneration and recovery factor for one hour. While greater blessing is active the target is immune to curses and negative status effects below elite rank."
  },
  {
    name: "Divine Blessing",
    rarity: 5.79,
    description: "296: Allows you to bestow a variety of blessings once an hour, Blessing of Recovery gives a target Rare Rank Regeneration and cures all ailments they have that are not inborn, Blessing of Might increases all attributes, Blessing of Warding cleanses all curses and raises all resistances of a target, blessings can also be style after abilities. For example, using Divine Blessing with Ignite would give fire resistance and affinity. The duration of blessings is one hour."
  },
  {
    name: "Law of Regression",
    rarity: 6.39,
    description: "297: Elden Ring - Allows the user to regress causality, turning something into its original form or what it's meant to be and dispelling all negative status effects and effects in the process. The more a target regresses, the more energy is expended."
  },
  {
    name: "Disc of Light",
    rarity: 2.29,
    description: "298: Elden Ring - Allows the user to conjure and launch a disc of sharp searing light that returns to its user in an arc."
  },
  {
    name: "Guidance of Grace",
    rarity: 4.29,
    description: "299: Elden Ring - The light of grace guides you, creating a path of light toward your objective or something to help with your objective that only you can see."
  },
  {
    name: "Barrier of Light",
    rarity: 2.79,
    description: "300: Allows the user to create a barrier of light magic, while not as sturdy it is easy to deploy and is great for defending against curses, spirits and negative effects."
  },
  {
    name: "Hardlight Weaponry",
    rarity: 3.69,
    description: "301: Allows you to create weapons out of hard light, hard light weapons are very strong while also being lightweight for their user, they deal increased damage against dark-aligned opponents, but they are not very durable and fade away when damaged."
  },
  {
    name: "Sky Fracture",
    rarity: 5.29,
    description: "302: Terraria - Allows you to rain down weapons made of holy light from the sky ranging from swords and glaives to skyscraper-sized lances depending on the amount of energy you expend."
  },
  {
    name: "Confessors Light",
    rarity: 3.33,
    description: "303: Allows you to create a spotlight that shines down from the sky, anyone caught in the spotlight is compelled to say the truth to whatever questions they are asked, and the user is immune to this effect."
  },
  {
    name: "Purification",
    rarity: 3.41,
    description: "304: Allows you to bathe a target in purifying light, cleansing them of negative effects or foreign substances, the potency of the purification scales with energy spent."
  },
  {
    name: "Greater Purification",
    rarity: 4.11,
    description: "305: Allows you to bathe a target in powerful purifying light, cleansing them of negative effects or foreign substances, the potency of the purification scales with energy spent."
  },
  {
    name: "Holy Weapon",
    rarity: 2.97,
    description: "306: Coats your armament in holy light, enhancing the power and quality of the weapon and making it deal extra damage to dark-aligned beings."
  },
  {
    name: "Blessing of Arms",
    rarity: 3.69,
    description: "307: Bless an armament, the blessed armament will be upgraded by half a stage(+) and the wielder of the weapon will gain a bonus intermediate skill that corresponds to the weapon, Example: when used on an Uncommon sword, it becomes an Uncommon+ Sword and its user gains Intermediate Swordsmanship for as long as they hold the weapon. Only one of these blessings can be applied at a time."
  },
  {
    name: "Smite",
    rarity: 3.11,
    description: "308: Your next attack is suffused with divine power, amplifying its power and dealing severe damage to unholy beings."
  },
  {
    name: "Golden Fist",
    rarity: 2.88,
    description: "309: Allows you to cover your fists in a deadly golden light that amplifies the power of your punches and punishes evil, it also deals severe damage against the unholy and spirit beings."
  },
  {
    name: "Exorcism",
    rarity: 2.83,
    description: "310: Allows you to bathe a target in golden light that exorcises negative effects, curses and possessions, when used on a spirit form or an unholy being it acts as if they have been doused in holy flame."
  },
  {
    name: "Blade of Light",
    rarity: 3.97,
    description: "311: Infuse your blade with light that reinforces and mimics the properties of your armament, swords can send out slashes of light, hammers produce golden shockwaves etc."
  },
  {
    name: "Resuscitation",
    rarity: 3.74,
    description: "312: Allows you to bring someone back from the dead if it has been less than 10 minutes since they have died or bring someone back to fighting condition by restoring their vitality, you can extend this timeframe by training."
  },
  {
    name: "Swords of Revealing Light",
    rarity: 5.09,
    description: "313: Yugioh - Allows you to create and control swords of light that when impaling a target seals their energy. Stronger targets can resist this effect."
  },
  {
    name: "Minor Healing Light",
    rarity: 2.39,
    description: "314: Allows you to bathe a target in healing light, restoring a portion of their health and vigour. Effect scales with your power level. Stronger targets need more energy to heal."
  },
  {
    name: "Healing Light",
    rarity: 3.59,
    description: "315: Allows you to bathe a target in healing light, capable of healing even severe wounds. Effect scales with your power level. Stronger targets need more energy to heal."
  },
  {
    name: "Greater Healing Light",
    rarity: 4.39,
    description: "316: Allows you to bathe a target in healing light, capable of healing even grievous wounds and lethal damage. Effect scales with your power level. Stronger targets need more energy to heal."
  },
  {
    name: "Divine Healing Light",
    rarity: 5.59,
    description: "317: Allows you to bathe a target in healing light, restoring their bodies from even lethal damage, any wound short of death can be healed. Effect scales with your power level. Stronger targets need more energy to heal."
  },
  {
    name: "Pillar of Light",
    rarity: 3.49,
    description: "318: Allows you to call down a pillar of searing light energy down from the skies to anywhere in your sensory range and deals additional damage against unholy beings."
  },
  {
    name: "Judgement Call",
    rarity: 4.89,
    description: "319: EBF - Allows you to summon a fountain of pure, divine magical light that erupts on a target dealing massive damage like a pillar of destruction. Deals lethal damage against Unholy beings and purifies targets. When used, drains most of the user's energy, in terms of pure power it is stronger than even some Epic abilities but its energy cost and charge time hold it back."
  },
  {
    name: "Genesis",
    rarity: 7.79,
    description: "320: EBF - \"May there be mercy on man and machine for their sins.\" The ultimate light ability, calls forth a gigantic crucifix of absolute holy light that brings judgment down on the world, dealing colossal damage enough to wipe a country off the map, no Unholy being can survive against it, and any allies caught in Genesis are healed of all conditions. Spends all of the user's energy and has a 30-day cooldown."
  },
  {
    name: "Light Trick",
    rarity: 3.49,
    description: "321: Allows the user to bend light to their will, creating optical illusions that can deceive sight, the light can also be solidified for further disguise but touching it will quickly reveal the trickery."
  },
  {
    name: "Light Speed",
    rarity: 4.77,
    description: "322: Allows the user to briefly turn themselves into a ray of light, allowing them to momentarily travel at the speed of light in a straight line before reforming."
  },
  {
    name: "Sanctuary",
    rarity: 5.49,
    description: "323: Allows you to create a large beam of light that shines from above, all allies under the light get healing, regeneration and cleansing. Maintaining sanctuary requires energy."
  },
  {
    name: "Light Logia",
    rarity: 8.09,
    description: "324: One Piece - Allows the user to create, manipulate and transform into light energy at will."
  },
  {
    name: "Claws",
    rarity: 1.49,
    description: "325: Allows you to create durable and sharp claws on your fingertips."
  },
  {
    name: "Horns",
    rarity: 1.19,
    description: "326: Allows you to grow sturdy and pointy horns on your head."
  },
  {
    name: "Tail",
    rarity: 1.29,
    description: "327: Allows you to grow a strong tail on your body that you can manipulate with dexterity."
  },
  {
    name: "Jaw",
    rarity: 1.00,
    description: "328: Allow you to turn your teeth into very sharp and durable fangs."
  },
  {
    name: "Natural Weapons",
    rarity: 2.51,
    description: "329: Allows you to weaponise any part of your body, nails into claws, teeth into fangs etc. only works on biological parts attached to your body."
  },
  {
    name: "Razor Claws",
    rarity: 2.09,
    description: "330: Allows you to turn your nails into razor-sharp claws that can tear through flesh and metal with ease, these claws do not dull."
  },
  {
    name: "Carapace",
    rarity: 2.69,
    description: "331: Allows you to grow a tough carapace over your flesh like an armour to bolster your defences. It's toughness scales with your physical stats."
  },
  {
    name: "Exoskeleton",
    rarity: 3.29,
    description: "332: Allows you to grow a very sturdy exoskeleton armour over your body to give you enhanced endurance and powerful protective armour. The power and durability of the Exoskeleton scales with your physical stats."
  },
  {
    name: "Scales",
    rarity: 2.79,
    description: "333: Allows you to grow scales over your body that are very resistant to damage and can serve as flexible armour over your skin. It's toughness scales with your physical stats."
  },
  {
    name: "Dragon Scales",
    rarity: 4.09,
    description: "334: Allows you to grow incredibly tough dragon scales over your body, due to the nature of dragon scales they also reduce any elemental damage you take while also being more durable than any human material. Its toughness scales with your physical stats."
  },
  {
    name: "Powerful Wings",
    rarity: 2.79,
    description: "335: Allows you to grow a pair of powerful wings that can carry you into the sky regardless of your weight, these wings are more powerful than your basic physical attributes and can easily shatter bones when used as weapons."
  },
  {
    name: "Immunity System",
    rarity: 3.99,
    description: "336: While Immutable is an active ability slot, you are immune to poisons, diseases and negative biological effects."
  },
  {
    name: "Monomolecular Claws",
    rarity: 4.89,
    description: "337: Allows you to transform your nails into a pair of sleek, black claws with edges as thin as a single molecule yet does not suffer from decreased durability or fragility. You can adjust their length up to 1 meter in length."
  },
  {
    name: "Bone Manipulation",
    rarity: 4.89,
    description: "338: Worm - Allows the user to freely manipulate their bones and any bones in their sensory range, when manipulating their own bones, they can alter the size, shape and properties of their bones. While this power is active they also regenerate bones quickly."
  },
  {
    name: "Organ Spikes",
    rarity: 2.19,
    description: "339: Allows the user to sprout biological matter-based spikes from any part of their body, the spikes do not hurt the user when creating or using them."
  },
  {
    name: "Ukaku",
    rarity: 3.39,
    description: "340: Tokyo Ghoul - Allows you to manifest a wing-like biological appendage made of special RC Cells that allow it to freely go from fluid-like water to tough as steel. These wings can release a barrage of high-speed armour piercing feathers at will with good precision or sweep in slicing motions to attack like a steel whip."
  },
  {
    name: "Koukaku",
    rarity: 3.89,
    description: "341: Tokyo Ghoul - Allows you to manifest an arm-like biological appendage made of special RC Cells that act like a super tough and dense material even tougher than steel that is capable of freely morphing. This appendage forms out from the shoulder blade, you can shape into a spear, a claw, a shied etc."
  },
  {
    name: "Rinkaku",
    rarity: 4.09,
    description: "342: Tokyo Ghoul - Allows you to manifest a tentacle-like biological appendage made of special RC Cells that allows it to freely go from fluid-like water to tough as steel. The Rinkaku takes the form of multiple tentacles that emerge from your lower back, they are incredibly flexible and can be used to pierce, whip and even grab opponents or help the user manoeuvre around."
  },
  {
    name: "Bikaku",
    rarity: 3.29,
    description: "343: Tokyo Ghoul - Allows you to manifest a tail-like biological appendage made of special RC Cells that allows it to freely go from fluid-like water to tough as steel. The Bikaku forms the shape of a tail at the location of the tailbone and is capable of defending, whipping, and piercing as a giant super flesh tail would."
  },
  {
    name: "Kakuja",
    rarity: 5.09,
    description: "344: Tokyo Ghoul - Allows you to manifest an armour-like biological appendage made of special RC Cells that allows it to freely go from fluid-like water to tough as steel. The Kakuja forms an armour around the user that massively boosts their stats, the shape of the Kakuja and its abilities are dependant on the user, it can go from building-sized wings to 16 pillar-thick tentacles tougher than titanium and faster than bullets."
  },
  {
    name: "Ghoul Physiology",
    rarity: 4.79,
    description: "345: Tokyo Ghoul - Allows the user to transform themselves into a ghoul, a flesh-eating superhuman creature with a special limb made up of Special RC Cells. In general, Ghouls are mostly immune to conventional weapons below 9mm, as a ghoul you get a random Kagune out of the 4 types. But this form also comes with a ravenous hunger for human flesh and the inability to consume any other food. Even if you turn off the form, if you got hungry in the form you still have to consume human flesh even after turning it off. But consuming human flesh also makes you slightly stronger."
  },
  {
    name: "Hybrid Ghoul Physiology",
    rarity: 5.55,
    description: "346: Tokyo Ghoul - Allows the user to transform themselves into a hybrid ghoul, they are much stronger than the average ghoul with none of the weaknesses. As a hybrid ghoul, your physical attributes are massively amplified, including a very powerful regeneration factor alongside a random Kagune. You also do not need to consume human flesh to survive but get the benefits you would otherwise get for consuming it."
  },
  {
    name: "Dragon Kakuja",
    rarity: 7.00,
    description: "347: Tokyo Ghoul - \"Become a true biological terror.\" Allows the user to take on the shape of a Dragon Kakuja, an over 10km long centipede-like dragon that is made up of purely RC cells stronger than any man-made material, you passively emit high-density RC clouds that transform anything in the vicinity flesh flesh-eating superhuman monsters under your telepathic control, you can also morph your body to attack with tentacles or create superhuman flesh human monster out of your flesh."
  },
  {
    name: "Keratin Manipulation",
    rarity: 3.89,
    description: "348: Allows the user to generate and control Keratin, the main component of body parts like horns and nails. Allowing you to generate keratin constructs like horns, armours and shields or shooting scales and needles of Keratin."
  },
  {
    name: "Fierce Wings",
    rarity: 4.89,
    description: "349: MHA - Allows the user to grow wings that they can freely telekinetically control the feathers of that they can use projectiles, extra limbs or improve weapons. In addition, these feathers are incredibly powerful and scale with their physical stats."
  },
  {
    name: "Stim",
    rarity: 2.66,
    description: "350: Flood your body with natural stem cells that will start rebuilding your body, warning, this consumes a lot of stamina and resources from your body. Doing it without any nutrients to rebuild your body won't work and will only harm you instead. You can also inject these cells into other people through the exchange of fluids."
  },
  {
    name: "Conditioning",
    rarity: 3.59,
    description: "351: While this ability is in an active spot, your body continuously conditions itself, getting stronger as if working out and recovering at the same time. Allowing you to slowly reach the biological peak of your body over time. Also increases the efficiency of working out."
  },
  {
    name: "Bio Armor",
    rarity: 4.69,
    description: "352: Prototype - Allows you to manifest and don a bio armour that can freely shapeshift and autonomously adapt to your body, creating blades, spikes, shields, etc."
  },
  {
    name: "Body Refinement",
    rarity: 3.19,
    description: "353: Allows you to refine bodies, though not precise enough to alter genetics it can help someone build muscles, get rid of impurities, increase body size and alter their body into a more ideal state. Stronger targets consume more energy."
  },
  {
    name: "Absolute Control",
    rarity: 4.49,
    description: "354: You have complete and utter control over aspects of your body and brain down to controlling your hormones and blood flow, this control is instinctual so you won't accidentally do damage to your body, working mostly on intent."
  },
  {
    name: "Shape Altering",
    rarity: 3.19,
    description: "355: Allows you to alter your body to change its shape, but it cannot be used to create biological impossibilities on your body such as turning your head into tentacle whips. The larger the alteration the more energy it takes to do it."
  },
  {
    name: "Shapeshifting",
    rarity: 4.79,
    description: "356: Allows you to freely morph and change your body without breaking the conservation of mass or altering genetics. You are immune to getting damaged by your own shapeshifting as the ability passively makes adjustments to make sure you survive your shapeshifting."
  },
  {
    name: "Gene Refinement",
    rarity: 5.59,
    description: "357: Allows you to alter and improve genetic structures, reinforcing, cutting and even overhauling them. And by proxy improving and altering the body and even the abilities of the target as long as it's based on their biology and genetics."
  },
  {
    name: "Minor Regeneration",
    rarity: 2.79,
    description: "358: Gives you a minor healing factor, good enough to close lacerations and stabs during a fight but not enough to completely bounce back from injuries mid-fight. You can further speed up healing by expending energy."
  },
  {
    name: "Regeneration",
    rarity: 3.69,
    description: "359: Gives you a healing factor, your wounds close at speeds visible to the naked eye, and some wounds you sustain mid-fight may even close by the time the fight ends. You most likely won't die from any non-lethal wounds as long as you have energy. You can further speed up healing by expending energy."
  },
  {
    name: "High Speed Regeneration",
    rarity: 4.89,
    description: "360: Gives you a rapid healing factor, even bullet holes and stabs will close in a few seconds. You can further speed up healing by expending energy."
  },
  {
    name: "Super Regeneration",
    rarity: 5.59,
    description: "361: Gives you an unimaginable Healing Factor on par with someone like the Wolverine minus the immortality. As long as it doesn't instantly kill you, chances are you will survive, as long as you have energy that is. You can further speed up healing by expending energy."
  },
  {
    name: "Regenerative Immortality",
    rarity: 6.99,
    description: "362: Gives you regenerative immortality, you will not die from any mundane wound, even if you were to split in half vertically, you would regenerate from the largest living piece of you left. As long as you have a living tissue sample you can come back like nothing happened. Beware that you can still be incapacitated and running completely out of energy can lead to you dying for real."
  },
  {
    name: "Redundant Physiology",
    rarity: 4.19,
    description: "363: Worm - You are like a cockroach, whenever you are wounded your body makes necessary adjustments to keep you alive so that you can survive even without blood, lungs, or even a heart by altering other parts of your body to serve as substitutes."
  },
  {
    name: "Biological Adaptation",
    rarity: 5.79,
    description: "364: Your body constantly adapts to stimuli, rebuilding itself to counter them, if exposed to fire you will gain fire-resistant skin, if cut you will form plating, if you can't cut you will get sharper claws. the adaptations are strictly biological and will fade over time or you will be reverted to your original form once the ability is dispelled."
  },
  {
    name: "Vampire Physique",
    rarity: 3.79,
    description: "365: You are a classic Vampire, with superhuman physical abilities, morphing into a bat, bloodsucking, etc. but you also have all of the weaknesses of a traditional vampire such as crucifixes, garlic, wooden stakes, sunlight and holy water."
  },
  {
    name: "Animorph",
    rarity: 4.49,
    description: "366: Allows you to freely morph into any mundane animal you are aware of, you can still utilize all of your abilities as an animal but you inherit their physical abilities and characteristics."
  },
  {
    name: "Gills",
    rarity: 1.00,
    description: "367: You have gills. You can breathe underwater but it's inconvenient."
  },
  {
    name: "Hormone Manipulation",
    rarity: 4.09,
    description: "368: One Piece - Allows you to freely create and control your hormones, including designing custom ones. You can also inject hormones into others as long as you are exposed to their bloodstream or exchange fluids with them."
  },
  {
    name: "Tentacles",
    rarity: 3.49,
    description: "369: Allows you to manifest biological tentacles on your body that you can control like extra limbs to smash, grab, whip, molest and operate with."
  },
  {
    name: "Four Arms",
    rarity: 1.74,
    description: "370: Allows you to manifest another set of arms in addition to your current ones. The second set of arms is as easy to control as the first pair."
  },
  {
    name: "Venom",
    rarity: 2.29,
    description: "371: Turns you venomous, you are able to inject your venom into your targets through bite or claws otherwise you can release it from your powers or spray it orally. The potency of the venom is dependent on your physical stats."
  },
  {
    name: "Poisonous",
    rarity: 1.89,
    description: "372: You are poisonous, everything about you. Anything trying to digest anything from you is going to have a bad time. The potency of the poison is dependent on your physical stats."
  },
  {
    name: "Poison Factory",
    rarity: 4.69,
    description: "373: Allows you to design, concoct and expel any poison from your body, also rendering you resistant to poison. You can also use this ability in conjunction with other abilities to make more esoteric poisons. Overuse of poison factory can cause nausea and sickness."
  },
  {
    name: "Poison Breath",
    rarity: 2.59,
    description: "374: Allows you to breathe out a cloud of poisonous gas that also erodes physical matter."
  },
  {
    name: "Doku",
    rarity: 6.79,
    description: "375: One Piece - You are able to freely create and manipulate poisonous substances, the potency of the poison you create is dependent on the amount of energy you expend."
  },
  {
    name: "Paralysis",
    rarity: 3.09,
    description: "376: You are able to create a paralytic agent inside of your body that you can expel through your pores or spray it as a gas via oral means."
  },
  {
    name: "Blood Manipulation",
    rarity: 1.79,
    description: "377: Allows you to telekinetically control your own blood, but you can't generate more blood without regeneration so be wise about spending it."
  },
  {
    name: "Hemokinesis",
    rarity: 3.89,
    description: "378: Allows you to telekinetically control your blood and any blood within your sensory range, you cannot manipulate it in quantities smaller than you can perceive and to control the blood inside of a person you must be stronger than them."
  },
  {
    name: "Greater Hemokinesis",
    rarity: 5.29,
    description: "379: Allows you to exert power over blood, over your own or your enemy's. You can sense all blood within your sensory range and exert telekinetic control over it. To control blood inside of a target to any meaningful level you have to be stronger than them."
  },
  {
    name: "Teleportation",
    rarity: 4.79,
    description: "380: Allows the user to teleport to any location they have been to or have seen with their own eyes. The longer the range the larger the energy consumption and cooldown."
  },
  {
    name: "Blink",
    rarity: 3.44,
    description: "381: Allows the user to instantly teleport a short range in their line of sight that must be normally accessible to them(can't teleport through glass) the basic range is 10 meters but this can be improved with training. There is a slight cooldown between every blink and overuse causes intense vertigo."
  },
  {
    name: "Instant Transmission",
    rarity: 5.09,
    description: "382: Allows the user to instantly teleport to any location they can sense or have been to and bring passengers along with them. Energy consumption scales slightly with the amount of passengers or the distance crossed. Mental focus is required to activate this ability."
  },
  {
    name: "Rewind",
    rarity: 4.39,
    description: "383: Allows you to rewind time on an object, does not affect soul or mind so it cannot bring back the dead. The longer you try to rewind time on a target for, the more strain you feel and the more energy you expend."
  },
  {
    name: "Haste",
    rarity: 4.19,
    description: "384: Allows you to speed up your time and the time of any object you are in contact with, the faster you make time flow, the more strain you feel and the more energy you expend."
  },
  {
    name: "Apport",
    rarity: 3.19,
    description: "385: Allows you to swap the locations of two items that are approximately of equal worth with up to 10% variation in price, you must be touching at least one of the objects and both must be within your sensory range."
  },
  {
    name: "Swap",
    rarity: 5.49,
    description: "386: Worm - Allows you to instantly swap the locations of any targets in your line of sight, swapping more powerful targets requires more energy and powerful enough targets can resist the ability."
  },
  {
    name: "Boogie Woogie",
    rarity: 4.29,
    description: "387: Allows you to swap the location of two targets possessing energy by clapping your hands, both targets must be within your sensory range. Clapping is a necessary condition to activate your power."
  },
  {
    name: "Dismantle",
    rarity: 3.79,
    description: "388: Allows you to send invisible slashes that you direct through hand motions. The more powerful a slash is the more energy you need to expend."
  },
  {
    name: "Cleave",
    rarity: 4.29,
    description: "389: Allows you to cut any object you are touching instantly without any cues. The energy required to cut scales with the durability of the target. Targets with high enough magic resistance may be immune to this ability."
  },
  {
    name: "Reality Slash",
    rarity: 5.69,
    description: "390: Allows you to create and launch a flying slash that severs spacetime, allowing it to ignore all conventional durability and barriers."
  },
  {
    name: "Dimensional Lock",
    rarity: 3.99,
    description: "391: Allows you to dimensional lock an area, preventing the use of spacetime-based abilities like teleportation, portals or time travel inside of the zone you locked. The larger the area the higher the energy consumption. Powerful enough targets may be able to break the lock."
  },
  {
    name: "Stillness",
    rarity: 6.89,
    description: "392: Re:Zero - Allows you to freeze an object's time, rendering them inviolable and forcing them to maintain their current speed and state no matter what. Even a pebble thrown with stillness is an unstoppable and immovable force. Can be used on yourself to render yourself invulnerable but places immense strain on your heart and can only be used for a few seconds at a time."
  },
  {
    name: "Infinity",
    rarity: 5.09,
    description: "393: JJK - Allows you to infinitely divide the space between you and a target, resulting in you manifesting a mathematical impossibility that makes it impossible for them to fully reach you. Places immense strain on the brain and needs manual mental calculation to operate, can liquify your brain with overuse."
  },
  {
    name: "Limitlessness",
    rarity: 6.09,
    description: "394: JuJutsu Kaisen - Allows the user to manipulate distortions in three different applications. First, the neutral form of this ability forms a barrier that infinitely divides space between the opponent and a target, making them unable to reach the user due to mathematical impossibility. Blue allows the user to create distortions in space that pull objects in while Red allows the user to create distortions that repel objects."
  },
  {
    name: "Distortion",
    rarity: 4.99,
    description: "395: Allows you to distort and warp space to deal massive damage."
  },
  {
    name: "Clockblocker",
    rarity: 5.29,
    description: "396: Worm - Allows you to freeze an object in spacetime, while frozen the object is completely inviolable and invulnerable. Duration depends on energy spent and freezing a stronger target requires more energy. Strong enough targets are immune to this effect."
  },
  {
    name: "The Hand",
    rarity: 5.79,
    description: "397: JoJo - Allows you to scrape away space with either of your hands, space scraped away is pulled together and filled in. Although it ignores conventional durability the range is quite short and the energy consumption is rather high."
  },
  {
    name: "Time Manipulation",
    rarity: 6.99,
    description: "398: Unordinary - Allows you to manipulate time in a select area or a target, such as speeding up, slowing down, stopping and reversing time. But those who are sufficiently strong can resist the effects."
  },
  {
    name: "Slow Down",
    rarity: 5.29,
    description: "399: Allows you to slow down time with the exception of yourself, the more energy you expend, the slower you can make time go."
  },
  {
    name: "Superhot",
    rarity: 6.29,
    description: "400: SUPER HOT - Time moves relative to you, the slower you go the slower time moves and the faster you go, the faster time moves, if you stand still, so will the world. Strong enough targets may be able to resist or ignore the effect."
  },
  {
    name: "Doppelganger",
    rarity: 3.76,
    description: "401: Allows you to produce a seamless doppelganger of yourself that you can control with your thoughts but does not possess any of your abilities, the amount of Doppelgangers you can have is equal to your ability slot count."
  },
  {
    name: "Clone",
    rarity: 4.44,
    description: "402: Allows you to clone yourself into several bodies, the clones cannot use your abilities but they share physical stats and can act autonomously even though they share a mind with you."
  },
  {
    name: "Divergent Avatars",
    rarity: 5.22,
    description: "403: Allows you to split yourself into multiple bodies under your direct control, all of your bodies are your real body and you can freely distribute your ability slots and energy between bodies."
  },
  {
    name: "King Crimson",
    rarity: 6.66,
    description: "404: JoJo - Allows you to skip time, during skipped time you are absolutely intangible as you are separated from causality, any actions that would have happened to you during that timeframe are nil but your actions aren't for example, if during the 10-second time skip you were to trade blows with an opponent and you both get injured, at the end of the time skip, you will end up back in real-time with no consequence of anything that has happened to you during those 10 seconds but your opponent will still suffer from their wounds, you can also use time skip to phase through objects and reposition yourself."
  },
  {
    name: "Gold Experience",
    rarity: 5.77,
    description: "405: JoJo - Allows you to imbue objects with life energy, turning them into autonomous living beings or constructs of your choosing, the created being must be of roughly similar mass."
  },
  {
    name: "Anti Gravity",
    rarity: 4.33,
    description: "406: Allows you to remove the influence of gravity on a target or an area in your field of vision, making them act as if they were placed in a zero-gravity environment."
  },
  {
    name: "Zero Gravity",
    rarity: 2.22,
    description: "407: Your body moves as if it is in a zero-gravity environment, allowing you to freely float, although without much control."
  },
  {
    name: "Low Gravity",
    rarity: 2.11,
    description: "408: Allows you to create zones of low gravity in your line of sight, reducing the weight and falling speed of the objects in the area."
  },
  {
    name: "Burden Breaker",
    rarity: 5.33,
    description: "409: Calamity Mod - 'More speed' When Burden Breaker is active, your speed is completely unbound by such frivolous things as physics, you ignore air resistance, gravity and friction. In addition, you will continue gaining momentum until Burden Breaker is deactivated, making you gain speed indefinitely, warning, incredibly uncontrollable and may cause you to end up at the edge of the universe with misuse."
  },
  {
    name: "Nuclear",
    rarity: 6.76,
    description: "410: You are able to create localized nuclear reactions using your energy and control their output, allowing you to become a living nuclear weapon platform of sorts. But the more you use the ability the more you suffer from radiation poisoning that fades over time."
  },
  {
    name: "Radiation Absorption",
    rarity: 4.07,
    description: "411: Allows you to absorb radiation and convert it into energy, and also permanently increase your energy reserves by absorbing large amounts of radiation over time."
  },
  {
    name: "Shrug It Off",
    rarity: 3.23,
    description: "412: Allows you to shrug off your ailments and negative status effects. Blinded? Just shrug it off. Bleeding? Just shrug it off. Cursed? Just shrug it off. Allows you to cure your ailments like a cure spell that scales with your physical stats."
  },
  {
    name: "Vermin Lord",
    rarity: 3.55,
    description: "413: Allows you to sense and telepathically command vermin such as insects and mice in your sensory range."
  },
  {
    name: "Mandom",
    rarity: 5.79,
    description: "414: JoJo - Allows you to rewind time by 6 seconds in a localized 50-meter area, those who are in the range of Mandom will still be aware of the 6 seconds that had occurred during the time."
  },
  {
    name: "Resurrect",
    rarity: 5.88,
    description: "415: DnD - Allows you to revive an entity that hasn't been dead for longer than you have been alive for. To revive a target you have to make appropriate sacrifices like money, valuables or artefacts. The stronger the target the more sacrifices need to be made, an unwilling target needs to double the sacrifice."
  },
  {
    name: "Detonation",
    rarity: 4.88,
    description: "416: Allows you to charge an object with explosive energy that you can use to detonate it at any time. Living beings can resist this effect and the charge fades over time."
  },
  {
    name: "Carbon Manipulation",
    rarity: 6.89,
    description: "417: Legendary Mechanic - Allows you to telekinetically sense and control the carbon element down to a molecular level, controlling the carbon inside other living creatures is harder relative to their power level compared to yours."
  },
  {
    name: "Soul Read",
    rarity: 2.99,
    description: "418: JoJo - Allows you to ask the soul questions that it will answer with yes or no, cannot be used on targets stronger than you. Souls can only answer yes or no questions and cannot lie to you."
  },
  {
    name: "Emergency Exit",
    rarity: 2.55,
    description: "419: Passive, when you are lethally injured you are automatically teleported to the safest area within a 1000-meter radius with a 30 minute cooldown."
  },
  {
    name: "Protean",
    rarity: 4.29,
    description: "420: Your body adapts to your abilities to make them more efficient and stronger, adaptation fades after Protean is disabled, an ability like claws would increase the strength throughout the body, an ability like fire manipulation would give higher heat tolerance etc."
  },
  {
    name: "Sunshine",
    rarity: 7.29,
    description: "421: Nanatsu No Taizai - You are the one blessed by the sun, under sunlight your stats and energy are massively increased and you can create and control intense flames, during noon for one minute you can enter a mode called \"The One\" massively boosting your stats and flame even further and making you borderline invulnerable."
  },
  {
    name: "Draconic Escalation",
    rarity: 4.09,
    description: "422: Worm - When under danger or in a fight you start taking on a draconic form that gets stronger over time or the more danger you are exposed to, and slower the less danger or conflict you are in. As escalation increases you gain basic pyrokinesis and regeneration alongside enhanced physical stats."
  },
  {
    name: "Revengeence",
    rarity: 3.59,
    description: "423: You keep building up energy the more you are hurt, at any time you can charge any ability or spell with that energy to unleash a devastating effect. Every 10% of health lost translates to a 2x increase in power, this additive and at 10% health left, revenge will amplify the next effect by 10x. 8-hour cooldown."
  },
  {
    name: "Metallica",
    rarity: 4.89,
    description: "424: Allows you to precisely manipulate iron in a 10-meter radius around you, you can form iron into elaborate constructs, control it telekinetically or use it to form blades using a target's blood. You can even control the blood inside living beings and can sense all iron in a 10-meter radius."
  },
  {
    name: "Glass Manipulation",
    rarity: 3.19,
    description: "425: Allows you to telekinetically control glass and glass-based objects inside of your sensory range."
  },
  {
    name: "Oil Manipulation",
    rarity: 4.88,
    description: "426: Allows you to exert telekinetic control over oil and oil-based substances. Such as petrol, fuel, asphalt, crude oil and plastic inside your sensory range."
  },
  {
    name: "Silicon Manipulation",
    rarity: 5.77,
    description: "427: Allows you to telekinetically shape and control the element Silicon down to an atomic level, granting you control over objects like glass, sand, quartz, silicone and most electronics inside your sensory range."
  },
  {
    name: "Plastic Manipulation",
    rarity: 3.88,
    description: "428: Allows you to exert telekinetic control over plastic and plastic-based substances and objects inside your sensory range."
  },
  {
    name: "Fabric Manipulation",
    rarity: 4.22,
    description: "429: MHA - Allows you to exert telekinetic control over fabric inside your sensory range and its various forms such as cotton, silk, wool, kevlar. You can even use it to create your own clothes or turn the clothes of enemies against them."
  },
  {
    name: "String Manipulation",
    rarity: 5.69,
    description: "430: Allows you to generate and manipulate supernaturally durable strings with supernatural precision. You lose control over the strings if they lose contact with your body."
  },
  {
    name: "Copper Manipulation",
    rarity: 3.79,
    description: "431: Allows you to telekinetically control copper and copper-based constructs inside your sensory range."
  },
  {
    name: "Rust Inducement",
    rarity: 1.49,
    description: "432: Allows you to induce rust in metals through physical contact."
  },
  {
    name: "Gold Manipulation",
    rarity: 3.23,
    description: "433: Allows you to telekinetically control gold and gold-based constructs inside your sensory range."
  },
  {
    name: "Usurper",
    rarity: 7.45,
    description: "434: When you have defeated an opponent, instead of getting a ticket you can choose to take one of their abilities. Only works once per target."
  },
  {
    name: "Mystic Eyes of Enchantment",
    rarity: 4.27,
    description: "435: Allows you to hypnotise and mind-control those who make eye contact with you. This can be broken out by high willpower targets or targets stronger than the user."
  },
  {
    name: "Conjure Vines",
    rarity: 3.66,
    description: "436: Allows you to conjure energy constructs in the shape of vines that you control, once the vines leave your body you lose control over them and they will start fading over time."
  },
  {
    name: "Hookwolf",
    rarity: 4.99,
    description: "437: Worm - Allows you to assume the form of a large shifting mass of metal needles, hooks and blades that you can alter the shape and size of at the cost of energy. You won't take damage from the metal parts getting damaged but your body is still inside the mass and vulnerable."
  },
  {
    name: "Mystic Eyes of Death Perception",
    rarity: 7.88,
    description: "438: Fate - Allows you to view lines of death as small cracks and lines along objects or people, if you destroy any line along a target, the target instantly and absolutely dies or gets destroyed. Can only be used on targets the concept of death can be applied to. Overuse of this ability can lead to severe brain damage."
  },
  {
    name: "Superpower",
    rarity: 5.51,
    description: "439: You are superpowered, even as a regular human you run faster than a train, punch harder than a missile, and don't flinch from tank shells or missiles, this all scales with your physical stats. and the results you get from training are considerably enhanced."
  },
  {
    name: "Haki",
    rarity: 6.31,
    description: "440: One Piece - Allows you to harness your willpower in physical form such as reinforcing things, giving you extrasensory perception, applying spiritual pressure on people etc. You can also train in all types of Haki."
  },
  {
    name: "Conquerers Haki",
    rarity: 4.85,
    description: "441: One Piece - Allows you to exert your willpower on the physical world as a wave of power that renders those with weaker willpower unconscious."
  },
  {
    name: "Armament Haki",
    rarity: 4.52,
    description: "442: One Piece - Allows you to reinforce your body or an object you are holding with an invisible forcefield that hardens them and allows them to interact with intangibility, and at higher levels can even be projected."
  },
  {
    name: "Observation Haki",
    rarity: 5.62,
    description: "443: One Piece - Allows you to expand an imaginary sensory field that allows you to sense movements and objects inside. At higher levels of mastery, you can accurately distinguish between targets, energy and even emotions."
  },
  {
    name: "Elemental Lungs",
    rarity: 4.45,
    description: "444: Allows the user to charge their lungs with any elemental energy and unleash a variety of elemental breath attacks with it such as acid, darkness, fire, ice, light, etc."
  },
  {
    name: "Vitality Drain",
    rarity: 4.85,
    description: "445: You are able to drain the vitality of targets on touch and use it to heal yourself, the stronger the target is compared to you, the lesser the drain."
  },
  {
    name: "Blood Tax",
    rarity: 3.83,
    description: "446: Whenever someone injures you, they lose a portion of their energy or stamina to you, allowing you to recover your energy and stamina even as you are getting damaged."
  },
  {
    name: "Hook & Line",
    rarity: 3.41,
    description: "447: Allows you to conjure a hook attached to a line out of energy, the hook can be used as a weapon, when you hurt someone with the hook you can instantly teleport them to you with the reel, which can only be used one target at a time."
  },
  {
    name: "Minefield",
    rarity: 4.19,
    description: "448: Unordinary - Allows you to conjure a grid pattern along the terrain and detonate parts of the terrain with the grid as an intermediary."
  },
  {
    name: "Density Manipulation",
    rarity: 4.88,
    description: "449: Allows you to increase and decrease your own density or the density of objects you are wielding, the more you decrease or increase a target's density the more energy you need to expend to keep it that way."
  },
  {
    name: "Star Rage",
    rarity: 6.66,
    description: "450: JJK - Allows the user to increase their mass without incurring any penalties such as lowered speed or change in stature, allowing them to make their physical attacks unimaginably stronger, if the user continues to increase their own mass they can collapse into a black hole. Higher the mass the more energy is required to maintain the state."
  },
  {
    name: "Lock On",
    rarity: 4.23,
    description: "451: Allows you to lock onto targets, when throwing projectiles toward the locked-on target, they start homing in on the target and become nigh impossible to dodge unless you get out of range."
  },
  {
    name: "Absolute Accuracy",
    rarity: 5.23,
    description: "452: Whatever projectile you throw WILL hit the target as long as it is physically possible to hit the target, you could throw a human hair through a 1mm hole 10 kilometres away without difficulty."
  },
  {
    name: "Energy Emission",
    rarity: 4.69,
    description: "453: Unordinary - Allows you to emit energy as beams or as an energy pulse by expending your own energy, the more energy you expend and the longer you charge for, the stronger the emission."
  },
  {
    name: "Kinetic Energy Absorption",
    rarity: 5.44,
    description: "454: Allows you to absorb and store kinetic energy inside of your body that you can release at any time to enhance the power of your blows. If you do not use the kinetic energy for a while it will start fading away."
  },
  {
    name: "Kinetic Energy Manipulation",
    rarity: 7.55,
    description: "455: Allows you to manipulate Kinetic Energy in your sensory range, negating it, applying it, changing it and redirecting it. But you cannot control more kinetic energy than you can exert with your own body."
  },
  {
    name: "Vector Manipulation",
    rarity: 8.86,
    description: "456: Toaru - Allows you to create and control vectors at the level of a level 5 esper, allowing you to control the movements of basically anything, teleporting, stopping, accelerating, moving, anything related to the movement of things you can perform."
  },
  {
    name: "Halt",
    rarity: 4.31,
    description: "457: Allows you to stop all the kinetic energy a target, even a meteor can be brought to a standstill. The larger the amount of force you are stopping, the more energy you expend. It has a 1-second cooldown."
  },
  {
    name: "Lockdown",
    rarity: 6.09,
    description: "458: Allows you to Lockdown an area, during a lockdown nobody can leave or enter and spacetime abilities are disabled, this power is absolute, even a god wouldn't be able to breach lockdown. The lockdown area is centered around the user and needs energy to be maintained, not too much energy but it cannot be maintained indefinitely."
  },
  {
    name: "Stick",
    rarity: 1.29,
    description: "459: Allows you to stick to objects like super glue."
  },
  {
    name: "Fear Gaze",
    rarity: 3.69,
    description: "460: You are able to gaze into people's eyes and make them recall their greatest fear. The stronger a target is, the more energy you have to expend to apply the ability and strong-willed targets may not be affected as much."
  },
  {
    name: "Glide",
    rarity: 1.49,
    description: "461: Allows you to glide 1cm above the ground and move like you are not affected by friction, allowing you to move around as if you are skating."
  },
  {
    name: "Absolute Gateway",
    rarity: 6.09,
    description: "462: Allows you to create a door that can breach any barrier or defence, the door does not teleport the user but allows them to bypass any barrier or limitation it is placed on."
  },
  {
    name: "Pacifists Domain",
    rarity: 5.74,
    description: "463: Allows you to erect a domain with yourself in the middle, inside of that territory no one can perform any acts of violence, not even the user."
  },
  {
    name: "Quake",
    rarity: 6.98,
    description: "464: One Piece - Allows the user to conjure massive vibrations, tremors and quakes that can travel through any medium like air, water or ground. Powerful enough to massive quakes that can devastate entire landmasses. Quake can also be used to shatter objects like glass and bypass durability to an extent."
  },
  {
    name: "Adamantine Skin",
    rarity: 6.78,
    description: "465: Your skin is nigh-invulnerable to all forms of harm, without some form of durability negation it's almost impossible to harm you at a similar level of power. You are also resistant to durability negation, decreasing its efficiency on you, and making it unable to pierce your defenses completely."
  },
  {
    name: "Phoenix Zoan",
    rarity: 7.33,
    description: "466: Allows the user to transform into a Blue Phoenix or a hybrid at will. As a Phoenix, they gain increased physical abilities and flight alongside extreme regenerative abilities. They can also emit powerful flames that can heal people."
  },
  {
    name: "Hydra Form",
    rarity: 6.11,
    description: "467: Allows the user to transform into a Hydra or a hybrid at will. As a hydra, they gain massively increased physical abilities, high-tier poison immunity, poison breath and extreme regeneration that can recover even limbs. They can also survive being beheaded up to 9 times."
  },
  {
    name: "Thunderbird Form",
    rarity: 5.72,
    description: "468: Allows the user to transform into a thunderbird or a hybrid at will. As a thunderbird, they gain increased physical abilities, flight and the ability to emit lightning from their body alongside weather manipulation."
  },
  {
    name: "Portal Creation",
    rarity: 5.55,
    description: "469: Allows you to create portals to anywhere in your sensory range or anywhere you have stepped foot into, the size of the portal can be altered, the portal cannot be closed while something is inside of it."
  },
  {
    name: "Doormaker",
    rarity: 7.65,
    description: "470: Allows you to create portals that can cross even dimensions that you can place anywhere you can perceive or have been to."
  },
  {
    name: "Clairvoyance",
    rarity: 4.45,
    description: "471: Allows you to extend your sight beyond your eyes, allowing you to control it as if it were some free cam or a spectator mode."
  },
  {
    name: "Super Jump",
    rarity: 1.78,
    description: "472: Allows you to jump great distances you would otherwise be unable to. Even a regular person would be able to leap over a building with this. And you are also immune to falling damage as a bonus."
  },
  {
    name: "Shaper",
    rarity: 6.99,
    description: "473: Worm Panacea - Allows you to freely manipulate flesh and biomaterials with perfect precision down to a cellular level though contact. The larger the power level difference between you and the target, the more they can resist your changes."
  },
  {
    name: "Tool Manipulation",
    rarity: 3.49,
    description: "474: Allows you to assign an object weighing less than your lifting strength as a target, you can telekinetically control the target with extreme precision as if it were a limb."
  },
  {
    name: "Energy Drain",
    rarity: 4.55,
    description: "475: Allows you to drain energy from living targets via contact. The larger the power level difference between you and the target, the less energy you can drain from at a time."
  },
  {
    name: "Double Jump",
    rarity: 1.56,
    description: "476: You are able to jump off of thin air for once as if it were a physical surface."
  },
  {
    name: "Sky Jumper",
    rarity: 2.78,
    description: "477: You are able to treat air as a tangible platform to jump off of any time but you can't stand on it for more than a second without falling."
  },
  {
    name: "Clothes Beam",
    rarity: 2.63,
    description: "478: Dragon Ball - You are able to fire off a laser beam that can dress anyone in any mundane clothing of your choice."
  },
  {
    name: "Spirit Gathering",
    rarity: 7.24,
    description: "479: You are able to channel the energy of anyone willing to share their energy with you regardless of distance and use it as your own."
  },
  {
    name: "Power of Destruction",
    rarity: 6.87,
    description: "480: DxD - You are able to conjure and control pure destructive energy that can annihilate anything as long as you have enough magical power."
  },
  {
    name: "Full Counter",
    rarity: 7.12,
    description: "481: Nanatsu no Taizai - If used with precise timing the user can counter any attack thrown at them and throw it back with double the power."
  },
  {
    name: "Destruction Incarnate",
    rarity: 8.12,
    description: "482: You are destruction Incarnate, you can turn your body into a vessel for nigh endless destructive energy that can wipe almost anything out of existence."
  },
  {
    name: "Ice Man",
    rarity: 9.22,
    description: "483: Marvel - Ice, you are everything ice, you can plunge worlds into an ice age, reconstruct your body out of ice, or unleash absolute zero temperatures at will."
  },
  {
    name: "Phoenix Force",
    rarity: 8.55,
    description: "484: Marvel - You are a host of the Phoenix Force, the source of all life and fire in the universe, but the Phoenix cannot exert any control or influence over you, the ability just acts like you are hosting it to channel its abilities."
  },
  {
    name: "Stinger",
    rarity: 8.21,
    description: "485: Imbue any attack with absolute inviolability, no matter what, this projectile cannot be stopped even by dimensional boundaries or reality-warping."
  },
  {
    name: "Rally",
    rarity: 3.32,
    description: "486: Allows you to give a rousing cry that bolsters your allies, giving them the courage of a lion and endless motivation that would turn even a chef into a fearless warrior who can take down a soldier."
  },
  {
    name: "Cybele",
    rarity: 5.45,
    description: "487: Fate Medusa - You possess unimaginably beautiful eyes that can turn anything in your gaze or anything that lays their eyes on you to stone. The larger the power level difference between you and a target, the slower they turn into stone."
  },
  {
    name: "Third Person",
    rarity: 2.52,
    description: "488: You can turn your perspective from seeing through your eyes to viewing the world as if you are operating a camera in an axis around you as if you were in Dark Souls."
  },
  {
    name: "Seek Guidance",
    rarity: 4.33,
    description: "489: When this ability is active, you are able to view commentary of those who were, could have been or would have been. The commentary can be helpful or even deceitful. You might find text written on the ground in front of a treasure informing you it's trapped, or text showing you the location of a hidden wall, or a text telling you to stand in front of a trap. Basically the messages from Eldensoulsborne Games."
  },
  {
    name: "Immune",
    rarity: 5.55,
    description: "490: You are immune, simple as, while Immune is in an active slot you cannot be poisoned, become ill, get cursed, or receive debuffs. You are immune to all negative status effects."
  },
  {
    name: "Animate Undead",
    rarity: 4.31,
    description: "491: You are able to animate corpses into a variety of undead such as skeletons, zombies, ghouls etc. but you cannot transform them into higher forms of undead such as vampires, dullahans, ghosts etc. Undead possess basic intelligence below human level but can understand orders. You can control up to 100 undead at once, this can be increased through training."
  },
  {
    name: "Necromancy",
    rarity: 5.55,
    description: "492: You are able to animate corpses into a variety of undead such as skeletons, zombies, ghouls and even higher forms of undead depending on the quality of the corpses. The higher the quality of the corpse, the higher the intelligence the undead will possess, all undead under your command are naturally loyal and obedient and you can dominate natural undead weaker than you. You can control up to 1000 undead at once, this can be increased through training."
  },
  {
    name: "Authority of Lust",
    rarity: 6.65,
    description: "493: When activated, everyone capable of seeing you treats you as an object of affection, whether that be platonic or romantic, the larger the power difference between you and the target the stronger the effect. You can ask a mundane for their life savings or wife and they will happily give it over to you, but for someone of equal level, they might just treat you like an ordinary friend."
  },
  {
    name: "Steal",
    rarity: 3.34,
    description: "494: Allows you to remotely steal a possession of a target without them noticing, the target must be an object that is not physically or magically bound to them and they must be within 10 meters of you, the more valuable an object the more energy is required."
  },
  {
    name: "Grand Theft",
    rarity: 5.35,
    description: "495: Allows you to steal ALL possessions of a target within a 5-meter range, everything on their body that is not magically or physically bound enters a subspace inventory you have. You can narrow the range of the ability to steal specific targets more easily."
  },
  {
    name: "Record",
    rarity: 2.72,
    description: "496: Trash Count - Allows you to record your sight into your mind, recorded information is engraved in memory even better than photographic memory as you can recall it in absolutely perfect detail at any time as if yo are actively thinking about it all the time."
  },
  {
    name: "Arousal",
    rarity: 3.66,
    description: "497: (Nsfw) Allows you to make targets in your vision aroused or make them climax with enough arousal. The stronger the target the more energy has to be spent and if they are significantly stronger than you they will be able to notice your attempts."
  },
  {
    name: "Audacity",
    rarity: 4.66,
    description: "Allows you to go unnoticed by people, they try to ignore you to the best of their ability, you can pick the lock to someone's house, grab their wallet while they are having dinner, kill their wife and leave without them even commenting on it. Stronger targets are less affected by this and will notice actions that are drastic, this ability consumes energy and stamina to keep active."
  },
  {
    name: "Mind Reading",
    rarity: 4.54,
    description: "499: Allows you to read the mind of a target you are focused on, allowing you to read their surface thoughts, emotions or even deeper thoughts and opinions. The stronger the target, the higher the energy drain."
  },
  {
    name: "Telepathy",
    rarity: 4.99,
    description: "500: Allows you to exchange thoughts with people, the range is dependent on your energy levels. You can either read people's surface thoughts or communicate with them telepathically either both ways or one way. This can be done with multiple people but will strain your mind heavily."
  },
  {
    name: "Crimson Fucker",
    rarity: 6.88,
    description: "501: Hellsing - You are a descendant of Alucard, the Crimson Fucker himself, sharing all of his natural abilities."
  },
  {
    name: "Basilisk Form",
    rarity: 4.19,
    description: "502: You are able to transform into a basilisk at will, partially or fully. Your gaze can petrify and paralyze enemies and your scales grant you natural armor, you are also very resistant to curses."
  },
  {
    name: "Wendigo",
    rarity: 4.23,
    description: "503: Allows you to transform into a Wendigo, either partially or fully. As a Wendigo you have increased ice affinity and enhanced physical stats, you can also summon blizzards at will and possess supernatural tracking skills. Beware that you may also develop an appetite for human flesh."
  },
  {
    name: "Oni",
    rarity: 3.44,
    description: "504: Allows you to transform into an Oni, either partially or fully. As an Oni, you possess enhanced physical stats and a minor healing factor but are vulnerable to holy."
  },
  {
    name: "Pheonix Form",
    rarity: 6.75,
    description: "505: Allows you to transform into a Phoenix, either partially or fully. As a divine bird of flame, you can gain enhanced physical stats, a major boost to fire affinity, and incredible regeneration as well as being able to return from the dead once every 30 days."
  },
  {
    name: "Mirror World",
    rarity: 5.76,
    description: "506: Allows you to appear in a mirrored version of the world with no living beings inside, you can also pull other living creatures into the mirror world."
  },
  {
    name: "Mirror Force",
    rarity: 5.05,
    description: "507: Yugioh - Allows you to reflect magical attacks back with a large forcefield."
  },
  {
    name: "Disguise",
    rarity: 3.15,
    description: "508: Allows you to alter the color and texture of any object by touching them, disguise lasts until the structural integrity of the subject is compromised."
  },
  {
    name: "Fishman",
    rarity: 3.85,
    description: "509: One Piece - Allows you to transform into a fishman, as a fishman you have enhanced strength and water affinity as well as water-breathing."
  },
  {
    name: "Lock",
    rarity: 4.29,
    description: "510: Allows you to place 'locks' onto entities, locked entities cannot be interacted with without being unlocked by either fulfilling a certain condition or opening it with a key. Brute forcing is also an option. You cannot lock living beings that are resisting."
  },
  {
    name: "Unlock",
    rarity: 6.02,
    description: "511: Allows you to unlock entities, this ability is conceptual in nature. The things you can unlock range from locks to someone's inner potential. Imagination and energy costs are your limit, the more abstract and harder the target is to unlock, the more energy is spent."
  },
  {
    name: "Dragon",
    rarity: 5.36,
    description: "512: Allows you to transform into a western dragon either partially or fully, granting you enhanced stats and energy as well as the ability to use your other abilities as breath attacks."
  },
  {
    name: "Energization",
    rarity: 5.53,
    description: "513: Allows you to convert your flesh into mana or energy to become an energy being. The more flesh you convert the more energy you have, but you will be more vulnerable to energy-based attacks."
  },
  {
    name: "Everlasting Dragon Form",
    rarity: 6.55,
    description: "514: Darksouls - Allows you to transform into a giant everlasting dragon either partially or fully. As an Everlasting Dragon with the stone scales of immortality, you have no need for any kind of sustenance and possess regeneration and a powerful breath attack. As long as your scales are intact you are incredibly resistant to all damage but your immortality fades if your scales are destroyed, you are also vulnerable to lightning."
  },
  {
    name: "Lunarian",
    rarity: 5.74,
    description: "515: One Piece - 'No, it doesn't give you the pass' Allows you to transform into a Lunarian from One Piece, as a Lunarian you can freely fly with your wings and manipulate the fire generated in your body in the form of attacks and otherwise. As long as your flame is intact you gain an extreme durability boost, but if you lose it you lose your extra durability but gain a slight speed increase in exchange."
  },
  {
    name: "Six Eyes",
    rarity: 5.65,
    description: "516: JJK - Grants exceptional visual prowess that can even penetrate through solid matter, incredible calculation ability, and energy efficiency, but overuse will strain your eyes heavily."
  },
  {
    name: "Sharingan",
    rarity: 4.09,
    description: "517: Naruto - Grants you exceptional visual prowess and allows you to copy and imitate moves and skills you see. With training, you can reach other levels of the sharingan."
  },
  {
    name: "Byakugan",
    rarity: 4.45,
    description: "518: Naruto - Grants you exceptional visual prowess that can even penetrate through solid matter and allow you to read energy signatures."
  },
  {
    name: "Nine Eyes",
    rarity: 7.19,
    description: "519: Second Coming of Gluttony - Differentiates objects into nine colors, each with their own meanings, such as threat levels and fate. Cannot perceive divine power. More info at the provided link."
  },
  {
    name: "Strength",
    rarity: 3.22,
    description: "520: Grants you super strength, capable of lifting cars, punching through reinforced walls, and bending metal; scales with base strength and can be augmented."
  },
  {
    name: "Speed",
    rarity: 3.83,
    description: "521: Grants you supernatural speed, able to outrun cars and insects; scales with base speed and can be augmented."
  },
  {
    name: "Resistant",
    rarity: 3.66,
    description: "522: Grants you durability, immune to low-caliber bullets and cars; scales with base durability and can be augmented."
  },
  {
    name: "Master of Arms",
    rarity: 3.66,
    description: "523: Grants temporary intermediate mastery of any weapon you hold."
  },
  {
    name: "Atlas",
    rarity: 5.94,
    description: "524: Grants immense strength, capable of moving mountains and carving cities, with energy expenditure. Can release shockwaves."
  },
  {
    name: "Star Toss",
    rarity: 8.01,
    description: "525: Ultimate strength — can pluck stars or shatter planets; strength without limits."
  },
  {
    name: "Extreme Speed",
    rarity: 6.09,
    description: "526: Move at extreme speeds, but difficult to control; can be augmented."
  },
  {
    name: "Godlike Speed",
    rarity: 8.39,
    description: "527: Limitless speed, can surpass sound and light with enough energy."
  },
  {
    name: "Invincible",
    rarity: 5.75,
    description: "528: Almost impervious to harm, even nuclear weapons are ineffective; can be further augmented."
  },
  {
    name: "No Friction",
    rarity: 2.66,
    description: "529: Eliminates friction on touched objects."
  },
  {
    name: "Phase Shift",
    rarity: 4.71,
    description: "530: Switch between defensive and offensive forms, enhancing speed/strength or durability/resistance."
  },
  {
    name: "Hunter",
    rarity: 4.99,
    description: "531: Augments physical stats and sensory abilities, such as hearing and heartbeat detection."
  },
  {
    name: "Mute",
    rarity: 3.88,
    description: "532: Silences targets or abilities, doubling energy cost for muted ones."
  },
  {
    name: "Widen",
    rarity: 3.99,
    description: "533: Extends ability effects' area without decreasing power, at higher energy costs."
  },
  {
    name: "Penetrate",
    rarity: 4.66,
    description: "534: Enhances abilities to bypass resistances and immunities."
  },
  {
    name: "Boost",
    rarity: 4.99,
    description: "535: Raises targeted ability’s rank by one stage below Legendary."
  },
  {
    name: "Delay",
    rarity: 3.88,
    description: "536: Cast abilities with delayed effects."
  },
  {
    name: "Permeation",
    rarity: 4.66,
    description: "537: Phases through objects and attacks, but not selectively; can fall through ground or get head stuck."
  },
  {
    name: "Dress Break",
    rarity: 3.44,
    description: "538: Touch to destroy clothing or armor, with possible delayed effect."
  },
  {
    name: "Multiplicity",
    rarity: 4.77,
    description: "539: Use multiple instances of abilities, e.g., multiple fireballs or lightning strikes."
  },
  {
    name: "Deduction",
    rarity: 4.21,
    description: "540: Deduce information from observation, similar to Sherlock Holmes."
  },
  {
    name: "Condemnation",
    rarity: 7.19,
    description: "541: Cast judgment on targets based on karma, reducing their power or increasing your own."
  },
  {
    name: "Salt King",
    rarity: 6.77,
    description: "542: Turn targets into salt, controlling them over large ranges."
  },
  {
    name: "Gravity",
    rarity: 5.55,
    description: "543: Create and control gravitational fields."
  },
  {
    name: "Gravity Manipulation",
    rarity: 7.73,
    description: "544: Control gravity massively, create black holes, crush objects, or invert gravity with enough training."
  },
  {
    name: "Optimization",
    rarity: 5.25,
    description: "545: Make targets or systems more efficient, reduce energy consumption."
  },
  {
    name: "Perfect Unknowable",
    rarity: 6.89,
    description: "546: Temporarily erase all evidence of your existence; no energy signatures, no perception until you attack."
  },
  {
    name: "Life Share",
    rarity: 3.77,
    description: "547: Share your life force to heal others via touch or remotely."
  },
  {
    name: "Wheel of Mahoraga",
    rarity: 8.29,
    description: "548: Grows and adapts to overcome phenomena, fading after the ability ends but retaining learned skills."
  },
  {
    name: "Decay",
    rarity: 5.35,
    description: "549: Spread decay to destroy objects, resistible but with increasing resistance over time."
  },
  {
    name: "Wither",
    rarity: 5.45,
    description: "550: Emit an aura that withers living beings, disables regeneration, can be made into a tangible attack."
  },
  {
    name: "Overgrowth",
    rarity: 5.89,
    description: "551: Supercharge plants, shape them into constructs, or make effects permanent with training."
  },
  {
    name: "Mark",
    rarity: 2.77,
    description: "552: Mark targets by touch, track their location and condition."
  },
  {
    name: "Future Sight",
    rarity: 6.09,
    description: "553: See several seconds into the future; extend range with training."
  },
  {
    name: "Preognition",
    rarity: 4.36,
    description: "554: Receive visions of impending danger, focus to see a few moments ahead."
  },
  {
    name: "Diagnosis",
    rarity: 1.77,
    description: "555: Touch a target to receive detailed health info."
  },
  {
    name: "Date Scouter",
    rarity: 2.78,
    description: "556: Display target's likes, dislikes, and kinks."
  },
  {
    name: "Absolute Territory",
    rarity: 6.29,
    description: "557: Create a 100m radius zone where all abilities are ranked up, and physical stats are increased; cannot leave while active."
  },
  {
    name: "Branding",
    rarity: 4.11,
    description: "558: Mark unresisting targets, know their location, condition, or summon yourself to them."
  },
  {
    name: "Soul Marriage",
    rarity: 5.59,
    description: "559: Marry a willing target, share energy, teleport, track, and give abilities within cooldowns."
  },
  {
    name: "Mirror",
    rarity: 4.99,
    description: "560: Copy a target's ability for 1 hour; only works on abilities up to Legendary; no cooldown."
  },
  {
    name: "Power Mimicry",
    rarity: 7.78,
    description: "561: Touch a target to add their ability to your mimicry, switch at will; only one ability at a time."
  },
  {
    name: "Ability Drain",
    rarity: 6.67,
    description: "562: Absorb biological-based abilities from targets; does not work on curses or authorities."
  },
  {
    name: "Beast Mimicry",
    rarity: 5.88,
    description: "563: Mimic or manifest aspects of any beast you've consumed within 24 hours, like claws, armor, or regeneration."
  },
  {
    name: "Overhaul",
    rarity: 7.66,
    description: "564: Deconstruct and reconstruct matter at will, down to molecular levels with training."
  },
  {
    name: "Pocket Dimension",
    rarity: 5.49,
    description: "565: Store anything inside a dimension starting at 1km square, expanding over time, accessed via portals."
  },
  {
    name: "Inventory",
    rarity: 3.89,
    description: "566: Store nonliving targets with capacity based on your strength."
  },
  {
    name: "Synthesis",
    rarity: 6.54,
    description: "567: Combine objects to create new ones with desired traits."
  },
  {
    name: "Sonar",
    rarity: 2.67,
    description: "568: Detect surroundings via echolocation."
  },
  {
    name: "Life Radar",
    rarity: 2.88,
    description: "569: Detect all lifeforms in a 100m radius; improve with training."
  },
  {
    name: "Devil Control",
    rarity: 8.32,
    description: "570: Fully control beings weaker than you, with proof of their inferiority."
  },
  {
    name: "Arbor",
    rarity: 4.66,
    description: "571: Create and extend wooden constructs from your body, control and reinforce."
  },
  {
    name: "Contractual Re-creation",
    rarity: 4.06,
    description: "572: Invoke legally binding receipts for effects like summoning or healing."
  },
  {
    name: "Trajectory Manipulation",
    rarity: 6.89,
    description: "573: Control the trajectory of projectiles, curve bullets, reverse fire, etc. Requires energy for large projectiles."
  },
  {
    name: "Hermit Purple",
    rarity: 4.66,
    description: "574: Call upon Hermit Purple vines for divination, improve precision with training."
  },
  {
    name: "Somnabulist",
    rarity: 4.29,
    description: "575: Emit sleeping mist from your skin that induces sleep."
  },
  {
    name: "Phantom Touch",
    rarity: 2.33,
    description: "576: Simulate touch sensations at range, only phantom feelings."
  },
  {
    name: "Collaring",
    rarity: 3.88,
    description: "577: Collar a defeated or submissive target, preventing harm and forcing compliance."
  },
  {
    name: "Material Swim",
    rarity: 2.45,
    description: "578: Move through physical objects as if they are water."
  },
  {
    name: "Kaleidoscope",
    rarity: 9.11,
    description: "579: Manipulate parallel worlds."
  },
  {
    name: "Heaven's Feel",
    rarity: 9.00,
    description: "580: Turn your soul into an immortal high-dimensional energy source."
  },
  {
    name: "Denial of Nothingness",
    rarity: 9.29,
    description: "581: Create anything given enough energy."
  },
  {
    name: "Lycanthropy",
    rarity: 5.86,
    description: "582: Transform into a werewolf, gaining enhanced abilities and spreading it to others."
  },
  {
    name: "Despair Aura I",
    rarity: 1.35,
    description: "583: Emit an aura of despair, making targets uneasy and weak."
  },
  {
    name: "Despair Aura II",
    rarity: 2.46,
    description: "584: Emission of deep fear and despair, overwhelming weaker targets."
  },
  {
    name: "Despair Aura III",
    rarity: 3.11,
    description: "585: Deepest despair aura, crushing morale and spirit, causing panic."
  },
  {
    name: "Despair Aura IV",
    rarity: 4.88,
    description: "586: Massive aura causing fear and despair, can drive armies to knees or kill weaker targets."
  },
  {
    name: "Despair Aura V",
    rarity: 5.66,
    description: "587: Command fear and hopelessness, can outright kill weaker opponents."
  },
  {
    name: "Rubber Body",
    rarity: 3.77,
    description: "588: Body stretches and compresses like rubber, scaling with physical stats."
  },
  {
    name: "Magic Jammer",
    rarity: 4.88,
    description: "589: Disable magical constructs, more energy for stronger constructs."
  },
  {
    name: "Contract Creation",
    rarity: 3.77,
    description: "590: Enforce clauses of a contract, binding target to its terms, can be mutual."
  },
  {
    name: "Binding Vow",
    rarity: 4.55,
    description: "591: Create promises that bind reality; breaking them causes penalties or sacrifices."
  },
  {
    name: "Chop Chop",
    rarity: 3.77,
    description: "592: Telekinetically detach and float parts of your body, immune to slashes while active."
  },
  {
    name: "Lord of Shades",
    rarity: 6.05,
    description: "593: Mold shadows and shades, absorb energy, but not wield it."
  },
  {
    name: "Almighty Push",
    rarity: 4.85,
    description: "594: Exert powerful repulsion force, capable of wiping out streets, with a cooldown."
  },
  {
    name: "Universal Pull",
    rarity: 4.11,
    description: "595: Attract targets or objects with a strong force, with cooldown."
  },
  {
    name: "Operation",
    rarity: 7.25,
    description: "596: Control space within a zone for swapping, amputations, teleportation, etc., with high energy cost."
  },
  {
    name: "Azure Dragon Form",
    rarity: 7.89,
    description: "597: Transform into a giant Azure Dragon, gaining flight, elemental breath attacks, and lifting power."
  },
  {
    name: "Budha Form",
    rarity: 6.86,
    description: "598: Transform into a giant golden Buddha, gaining golden shockwaves and high durability."
  },
  {
    name: "Cow Form",
    rarity: 2.66,
    description: "599: Transform into a cow or hybrid, boosting physical stats, vitality, and stamina."
  },
  {
    name: "Sea Snake Form",
    rarity: 5.86,
    description: "600: Transform into a sea snake for enhanced abilities, water breathing, minor regen, and water mobility."
  },
