allData.traits = [
  window.allData = window.allData || {};

const allData = [
  {
    name: "Poisonous",
    rarity: 0.24,
    isNSFW: false,
    description: "You are poisonous, meaning if anyone eats your flesh they are going to have a mildly bad time."
  },
  {
    name: "Minty Breath",
    rarity: 0.27,
    isNSFW: false,
    description: "No more bad breath, your breath always smells fresh and minty regardless of what you ate beforehand."
  },
  {
    name: "Digestive Expulsion Independence",
    rarity: 0.53,
    isNSFW: false,
    description: "You never piss or shit. Don't ask where all the waste in your body goes."
  },
  {
    name: "Blind Eye",
    rarity: 1.13,
    isNSFW: false,
    description: "You just disappear in a crowd, as long as you shouldn't stand out you won't."
  },
  {
    name: "Perfumer",
    rarity: 1.28,
    isNSFW: false,
    description: "You smell nice, that's about it, you have no distinct, your smell like what the person that's smelling you likes."
  },
  {
    name: "Charming Smile",
    rarity: 1.34,
    isNSFW: false,
    description: "Your smile is really charming, helping people feel more at ease and comfortable with you. Or more attractive to your preferred partners."
  },
  {
    name: "Blood Pack",
    rarity: 1.46,
    isNSFW: false,
    description: "Your body holds inordinate amounts of blood, approximately 5 times the average person, this does not affect your body in any noticeable way... somehow."
  },
  {
    name: "Child Friendly",
    rarity: 1.87,
    isNSFW: false,
    description: "Let's keep it PG, allows you to activate a filter that makes you more presentable to a younger audience, placing a censor on your privates, getting rid of gore on your body, etc."
  },
  {
    name: "Hygienic",
    rarity: 1.92,
    isNSFW: false,
    description: "You are almost always hygienic, no bad breath or germs for you."
  },
  {
    name: "Animal Lover",
    rarity: 1.95,
    isNSFW: false,
    description: "All mundane animals like you, and non-mundane ones like you more easily."
  },
  {
    name: "Whats monogamy",
    rarity: 3.04,
    isNSFW: false,
    description: "Your potential partners are very accepting of any delusions of harem or a woman loving you you might have. They tend not to question the logistics or logic of having multiple people as lovers."
  },
  {
    name: "Loveable Pervert",
    rarity: 2.27,
    isNSFW: true,
    description: "When others are perverts they get beat up and/or charged. When you are a pervert it's charming or at most exasperating. As long as you don't cross the line people don't mind you being a perv."
  },
  {
    name: "Bitch Breaker",
    rarity: 2.95,
    isNSFW: true,
    description: "(NSFW) Sometimes all a bad attitude needs is a good fucking, you are an expert at correcting attitudes through sex correction."
  },
  {
    name: "Taming specialist",
    rarity: 2.61,
    isNSFW: false,
    description: "You are skilled at the art of turning a wild animal into a domesticated one."
  },
  {
    name: "Raphael Ambrosius Costeau",
    rarity: 2.63,
    isNSFW: false,
    description: "Disco Elysium - Listen to your inner detective, your deductive reasoning and ability to read cues have increased, you are basically a detective already! Albeit with none of the training of a real detective."
  },
  {
    name: "Enhanced Endurance",
    rarity: 2.64,
    isNSFW: false,
    description: "Your endurance is beyond the norm, your body is more durable and resistant, allowing you to resist more damage and be harder to damage than normal. You are very hardy."
  },
  {
    name: "Cardboard World",
    rarity: 2.52,
    isNSFW: false,
    description: "You have complete and perfect control over your own strength and the power you exert, even with enough power to shatter a planet you can still easily punch with low enough force to not hurt a foam brick."
  },
  {
    name: "Mountman",
    rarity: 2.57,
    isNSFW: false,
    description: "You are a master rider, whatever vehicle you get on, you know how to ride as if you have been riding it for years."
  },
  {
    name: "Kakyoin's Gift",
    rarity: 2.58,
    isNSFW: false,
    description: "Married women and milfs find themselves more attracted to you and consider you a potential romantic interest more easily."
  },
  {
    name: "Enhanced Vitality",
    rarity: 2.54,
    isNSFW: false,
    description: "Your vitality is beyond the norm, you recover from ailments and wounds faster than what most consider normal. In addition, your life force has been enhanced, giving you an increased lifespan."
  },
  {
    name: "Efficient Physique",
    rarity: 2.71,
    isNSFW: false,
    description: "Your body is incredibly efficient, you are naturally able to digest and gain more energy from breathing, eating and sleeping. In addition, abilities consume slightly less energy to use."
  },
  {
    name: "Antibody",
    rarity: 2.72,
    isNSFW: false,
    description: "You are very resistant to most diseases."
  },
  {
    name: "Emphaty",
    rarity: 2.75,
    isNSFW: false,
    description: "Some say this is a basic human trait but you would be surprised how many people just don't have it. You are able to emphasize with and understand people's emotions much better to the degree of a savant."
  },
  {
    name: "Enhanced Agility",
    rarity: 2.76,
    isNSFW: false,
    description: "Your agility is beyond the norm, your natural speed and reflexes are greater than what most would consider normal."
  },
  {
    name: "Venomous",
    rarity: 2.84,
    isNSFW: false,
    description: "You are venomous, and your bite contains paralyzing venom. The power of the paralysis scales with your physical abilities."
  },
  {
    name: "In Shining Armor",
    rarity: 2.88,
    isNSFW: false,
    description: "Whenever you save a damsel in distress they are almost guaranteed to develop romantic feelings for you."
  },
  {
    name: "Sartorial Savant",
    rarity: 2.85,
    isNSFW: false,
    description: "Your clothes are, for some reason, always clean and tidy, even your wardrobe, and small damages seem to even mend themselves."
  },
  {
    name: "Chameleon",
    rarity: 2.89,
    isNSFW: false,
    description: "When you stand still for long periods of time, you start blending into the surroundings, after 10 minutes, people don't even detect your breathing or be able to acknowledge you there. This effect is dispelled when you make any major movements like attacking or fleeing."
  },
  {
    name: "Receptive Body",
    rarity: 2.87,
    isNSFW: false,
    description: "Your body is incredibly receptive and open to change without getting damaged and curbing negative side effects. Healing is more effective on you and you are less likely to suffer from negative effects from changes like super soldier serum or abilities that cause physical instability."
  },
  {
    name: "Lady Killer",
    rarity: 2.82,
    isNSFW: false,
    description: "You are a natural lady killer, women always find you at least a little attractive regardless of their preferences, and a decent chunk of women would consider you handsome."
  },
  {
    name: "Golden Rule",
    rarity: 3.73,
    isNSFW: false,
    description: "You can spot treasure from a mile away, and you can just sniff opportunities when they are near you. You gain a sixth sense of obtaining wealth and treasure."
  },
  {
    name: "Heroes Reward",
    rarity: 3.81,
    isNSFW: false,
    description: "Every Hero deserves, that whenever you save someone, they will feel very indebted to you and feel compelled to repay you."
  },
  {
    name: "Mmmm Milk",
    rarity: 3.84,
    isNSFW: false,
    description: "Drinking milk replenishes Energy."
  },
  {
    name: "Steady",
    rarity: 3.91,
    isNSFW: false,
    description: "Easy does it, you are incredibly steady, those small those small shakes your body makes are no more, and you do not lose your footing either, even if you are hopped up on adrenaline you could hold a gun like it was on a tripod."
  },
  {
    name: "Efficient Cells",
    rarity: 3.93,
    isNSFW: false,
    description: "Your cells are supernaturally efficient at converting sustenance into energy, you regain your energy significantly faster."
  },
  {
    name: "Disney Princess",
    rarity: 4.03,
    isNSFW: false,
    description: "All animals naturally adore you and are friendly toward you, even supernatural animals quickly take a liking to you."
  },
  {
    name: "Salt Detection",
    rarity: 0.15,
    isNSFW: false,
    description: "You can tell where salt is; only salt is ready for human consumption."
  },
  {
    name: "One Size Fits All",
    rarity: 1.05,
    isNSFW: true,
    description: "Your partners no longer feel any discomfort with your physical features. This extends to your phallus somehow fitting inside them, even if it reaches ludicrous sizes."
  },
  {
    name: "Golden Shot",
    rarity: 1.34,
    isNSFW: true,
    description: "Your semen is extremely potent; any partner you inseminate WILL become pregnant. Equipment requirements are assumed to be in place; otherwise, reroll."
  },
  {
    name: "Nothing Wrong Here",
    rarity: 4.14,
    isNSFW: false,
    description: "A weaker normality, people instinctively try to rationalize your actions and find things more accepting about you."
  },
  {
    name: "Inland Empire",
    rarity: 4.18,
    isNSFW: false,
    description: "Disco Elysium - You are unusually attuned to your supernatural instincts, to the point where you randomly hear supernatural insights and even get flashes of the future that you need to decipher. Honing this sense can allow you to get insights into the world around you that you otherwise wouldn't get. On the other hand, not having control over this trait can make a schizophrenic unable to distinguish reality from intuition."
  },
  {
    name: "Magician",
    rarity: 4.12,
    isNSFW: false,
    description: "You are a natural-born Magician, making you naturally talented in the mystical arts, allowing you to learn, understand, and develop magic far faster and you have a unique intuition when it comes to matters of magic."
  },
  {
    name: "Protection From Arrows",
    rarity: 4.23,
    isNSFW: false,
    description: "You have a natural instinct to avoid projectiles, you always have a sense of where they are coming from and instinctually try to dodge them like a sixth sense."
  },
  {
    name: "Esper",
    rarity: 4.31,
    isNSFW: false,
    description: "You are a naturally born Esper, abilities are second nature to you. You understand, develop, and master abilities far faster and you possess a unique intuition when it comes to your abilities. Ability cooldowns are halved."
  },
  {
    name: "Gambler",
    rarity: 4.33,
    isNSFW: false,
    description: "Lets go gambling! Ah dangit. Every time you would roll the ticket, you roll a D20 first, depending on the roll you get, {20}= Ticket Rank Up, {19 - 17}= Advantage, {16 - 13}= Change Ticket Type, {12 - 8}= Nothing happens, {7 - 2}= Ticket rank down, {1}= Ticket is destroyed. This trait can be rerolled or toggled."
  },
  {
    name: "Reactive Precognition",
    rarity: 4.36,
    isNSFW: false,
    description: "You've got a bad feeling about this. Sometimes, you will receive short precognition before stumbling into danger, like receiving a vision of stepping on a trap just before you enter a room or being shot by an assassin when walking through the street. This won't always trigger but is more likely to trigger the higher the danger to your life."
  },
  {
    name: "Pugilist",
    rarity: 4.41,
    isNSFW: false,
    description: "You are natural in martial arts, how to move your body efficiently and powerfully comes as second nature to you. You learn and develop martial arts far faster and have a unique intuition when it comes to combat."
  },
  {
    name: "Energy Acceleration",
    rarity: 4.44,
    isNSFW: false,
    description: "All of your abilities and spells are way faster because your energy moves way faster than it should."
  },
  {
    name: "Magic resistance",
    rarity: 4.51,
    isNSFW: false,
    description: "You are naturally resistant to magic and all magical effects, effects scale with your energy level."
  },
  {
    name: "Longevity",
    rarity: 4.56,
    isNSFW: false,
    description: "You will live for a long time, 100 times longer, on top of that, even if your lifespan were to be drained or destroyed you also regenerate your own lifespan."
  },
  {
    name: "Battle Continuation",
    rarity: 4.62,
    isNSFW: false,
    description: "You are an unstoppable machine. You can power through wounds, exhaustion, and injuries and still keep fighting. This does not dull the pain but the chances are, if the wound isn't lethal and you can still stand, you will be fine."
  },
  {
    name: "Quantum Disentanglement",
    rarity: 4.64,
    isNSFW: false,
    description: "You are an anomaly, whenever you are bound or restrained you somehow find yourself untangled."
  },
  {
    name: "Volition",
    rarity: 4.69,
    isNSFW: false,
    description: "Disco Elysium - You are unnaturally connected to your own inner morale. The voice that pushes you to move forward, your determination and will to keep going. Honing this sense can allow you not to lose your will even against extreme adversity and pull off feats of tremendous willpower with ease. But losing control over your volition can also lead to overconfidence."
  },
  {
    name: "I know a guy",
    rarity: 5.01,
    isNSFW: false,
    description: "Your car broke down? You know a guy. Your friend is sealed in a rune array? You know a guy. Once every 30 days you can retroactively rewrite reality to have known a person that can help you with your current situation."
  },
  {
    name: "Winner Takes All",
    rarity: 5.05,
    isNSFW: false,
    description: "When you win against someone, you can extract a reward from them forcefully. The reward you extract must be proportional to the victory you have achieved. Minor victories equal minor rewards while winning a fight to the death would be a reward equal in value to their life. The reward must be something they are capable of granting you."
  },
  {
    name: "Blessing of Fae",
    rarity: 5.64,
    isNSFW: false,
    description: "You are blessed by the fae, you have an increased energy capacity and all fairies start off with at least neutral to you, fae won't try to trick you and spirits like you."
  },
  {
    name: "High Specs",
    rarity: 6.42,
    isNSFW: false,
    description: "You are incredibly intelligent, you learn, process, and utilize knowledge far far faster than anyone of your caliber should be able to. You can outpace most computers."
  },
  {
    name: "Prophecy",
    rarity: 6.71,
    isNSFW: false,
    description: "You are able to see the future in your dreams, with or without your consent."
  },
  {
    name: "Esgod",
    rarity: 7.42,
    isNSFW: false,
    description: "You are an esper beyond all espers, the potency in your blood is monstrous. Using your abilities comes as naturally to you as breathing, you develop and master abilities with much greater and abilities cost much less energy to cast. You can even train out the hardcoded effects of abilities such as cooldowns and limits."
  },
  {
    name: "Master Pugilist",
    rarity: 7.51,
    isNSFW: false,
    description: "Your talent in martial arts is inhuman. Learning and developing martial arts is as natural to you as breathing, you can pick up martial arts and understand them just with simple glances, your talent in combat is unrivaled. What would take 100 years to master would take barely a year for you."
  },
  {
    name: "Grand Mage",
    rarity: 7.77,
    isNSFW: false,
    description: "Your talent in magic cannot be surpassed, you are one in 3000 years talent, learning, understanding, and developing magic is as natural to you as breathing, what would take the average mage a hundred years to learn, you can learn in one."
  },
  {
    name: "Tinker Supreme",
    rarity: 7.92,
    isNSFW: false,
    description: "(Tech)You are the supreme Tinker, capable of building constructs of scientific and mechanical wonder that would leave all other scientists foaming at the mouth. You don't even need specializations anymore, you are able to innovate and come up with tinker mechanisms on your own with your merits, the tinker specializations are boosts to your natural prowess now but you cannot utilize Tinker abilities not from your native world."
  },
  {
    name: "Endbringer Physiology",
    rarity: 8.34,
    isNSFW: false,
    description: "(Parahuman)You are an Endbringer, a monstrous being made of unfathomable power and energy."
  },
  {
    name: "Parahuman Physiology",
    rarity: 8.43,
    isNSFW: false,
    description: "(Parahuman)You are a Parahuman, gaining powers beyond mortal comprehension."
  },
  {
    name: "Sage",
    rarity: 8.51,
    isNSFW: false,
    description: "Your wisdom and knowledge are unmatched, your insights into magic and energy are unparalleled, and you can guide civilizations with your wisdom."
  },
  {
    name: "Superman",
    rarity: 8.63,
    isNSFW: false,
    description: "You are Superman, Man of Steel, Last Son of Krypton. You gain all the powers of Superman including flight, superstrength, heat vision, frost breath, etc. But beware, you have his weaknesses too, including Kryptonite."
  },
  {
    name: "Unknowable",
    rarity: 8.81,
    isNSFW: false,
    description: "You are unknowable, your power is beyond the comprehension of mortals. Your existence alone bends reality and your abilities are beyond imagination."
  },
  {
    name: "God Emperor",
    rarity: 9.24,
    isNSFW: false,
    description: "You are a God Emperor, your dominion stretches across galaxies, your power is godlike, and your will bends worlds."
  },
  {
    name: "Cosmic Horror",
    rarity: 9.52,
    isNSFW: false,
    description: "You are a Cosmic Horror, your very existence terrifies gods, you are incomprehensible and your presence alone drives mortals mad."
  },
  {
    name: "True God",
    rarity: 9.83,
    isNSFW: false,
    description: "You are a True God, your power is supreme, you are the peak of existence, your abilities are limitless, and no mortal or immortal can rival you."
  },
  {
    name: "Cat's Feet",
    rarity: 2.03,
    isNSFW: false,
    description: "You almost always land on your feet when falling, in addition, you are immune to all fall damage, even falling down from space to Earth will not hurt your legs."
  },
  {
    name: "Thick Skin",
    rarity: 2.14,
    isNSFW: false,
    description: "Your skin is denser and tougher than average, very smooth to touch. Toughness scales with your physical stats, serving as natural armor at higher levels."
  },
  {
    name: "Cuddle King",
    rarity: 2.15,
    isNSFW: false,
    description: "You are the king of cuddling. Whoever you are cuddling with will feel comfortable; you are the best cuddling partner. Good for building relationships."
  },
  {
    name: "Scholar",
    rarity: 2.18,
    isNSFW: false,
    description: "You are an expert at reading, learning, and retaining information. You could read 50 books in a day and still retain all the information."
  },
  {
    name: "Herbalist",
    rarity: 2.16,
    isNSFW: false,
    description: "You have vast knowledge related to plants. You can identify the function and origin of a plant just by looking at it and can also make basic medicines."
  },
  {
    name: "Free Flier",
    rarity: 2.19,
    isNSFW: false,
    description: "You are a master of flight, you are almost more comfortable flying than walking."
  },
  {
    name: "Feline Friend",
    rarity: 2.21,
    isNSFW: false,
    description: "All felines and feline-related beings are more favorable toward you, and it is easier to earn their affection. In addition, you are extraordinarily flexible."
  },
  {
    name: "Eagle Eyes",
    rarity: 2.26,
    isNSFW: false,
    description: "Your sense of sight and visual acuity are far beyond the norm. You can see much farther and clearer than the average person."
  },
  {
    name: "Sexual Calibration",
    rarity: 2.35,
    isNSFW: true,
    description: "All minor sexual inconveniences are eliminated. You can adjust interactions with STDs, hygiene, or unwanted pregnancies. Highly skilled in tantric arts."
  },
  {
    name: "Lucky Sukebe",
    rarity: 2.37,
    isNSFW: true,
    description: "You are lucky in ways you wouldn't expect, often stumbling into lewd or perverted situations. Chaos of reality itself bends slightly to favor your encounters."
  },
  {
    name: "Strong Legs",
    rarity: 2.42,
    isNSFW: false,
    description: "Your legs are stronger and tougher than average, slightly enhancing speed and substantially increasing the power behind kicks."
  },
  {
    name: "Goth Magnet",
    rarity: 2.46,
    isNSFW: false,
    description: "Goths and emos are drawn to you. Favor and affection are easier to gain; minor misbehavior often overlooked."
  },
  {
    name: "Pacifism",
    rarity: 2.48,
    isNSFW: false,
    description: "With pacifism, you are able to turn off your killing potential. Even a deadly attack on a serf will leave them alive, albeit barely."
  },
  {
    name: "Tough Claws",
    rarity: 2.52,
    isNSFW: false,
    description: "Your claws are exceptionally sharp and durable, more than they should be. All claw-based attacks and abilities are stronger, and you can turn your nails into simple claws whenever."
  },
  {
    name: "Enhanced Strength",
    rarity: 2.57,
    isNSFW: false,
    description: "Enhances the user's existing strength, increasing the physical force they can exert proportional to their own strength."
  },
  {
    name: "Sharp Hearing",
    rarity: 2.51,
    isNSFW: false,
    description: "Your sense of hearing is far beyond the norm. You can distinguish many quieter sounds, differentiate between sounds easily, and automatically adjust your hearing depending on noise levels."
  },
  {
    name: "Avian Friend",
    rarity: 2.62,
    isNSFW: false,
    description: "Birds and other flying creatures are friendlier toward you. Flying is more natural to you."
  },
  {
    name: "Persuasive",
    rarity: 2.63,
    isNSFW: false,
    description: "You are very persuasive; it is easier to make people see your perspective and agree with you."
  },
  {
    name: "Background NPC",
    rarity: 2.64,
    isNSFW: false,
    description: "You fade into the background easily. Unless specifically sought, people overlook you. Stranger-class abilities slightly stronger."
  },
  {
    name: "Manager",
    rarity: 2.71,
    isNSFW: false,
    description: "You are really good at organizing and managing things, distributing tasks, and prioritizing."
  },
  {
    name: "Bloodbank",
    rarity: 2.72,
    isNSFW: false,
    description: "Your body can hold ten times the normal amount of blood and regenerate it ten times faster. Perfect for a hemokinetic or vampire."
  },
  {
    name: "Iron Nerves",
    rarity: 2.81,
    isNSFW: false,
    description: "Your nerves are made of iron; you don't flinch or get startled, and this does not affect your reflexes."
  },
  {
    name: "Bloodhound",
    rarity: 2.83,
    isNSFW: false,
    description: "Your sense of smell is far beyond the norm, comparable to canines. You can differentiate smells with great accuracy."
  },
  {
    name: "Aware",
    rarity: 3.21,
    isNSFW: false,
    description: "You have an enhanced sense of awareness, far beyond the average. You can easily tell when there is something wrong with your body, and can more easily tell what is going on around you."
  },
  {
    name: "Nature's Child",
    rarity: 3.23,
    isNSFW: false,
    description: "Nature subtly favors you. You tend to find fresh and healthy fruit, can grow a garden with minimal care, and animals aligned with nature are favorable toward you. Energy recovery increases near nature."
  },
  {
    name: "My Master",
    rarity: 3.25,
    isNSFW: false,
    description: "You are an excellent master; any servant or submissive under you is more favorable toward you and it is easier to earn their affection."
  },
  {
    name: "Hero Candidate",
    rarity: 3.32,
    isNSFW: false,
    description: "You are a Hero in training. All Holy and Light abilities are slightly enhanced and the strength and duration of blessings are extended."
  },
  {
    name: "Helltaker",
    rarity: 3.33,
    isNSFW: false,
    description: "Infernally aligned beings find themselves more attracted to you and it is easier to earn their affection."
  },
  {
    name: "Commander",
    rarity: 3.61,
    isNSFW: false,
    description: "You are a commander. You are better at exerting your authority and receiving obedience from subordinates, and better at organizing, managing, and maintaining morale."
  },
  {
    name: "Demon Scion",
    rarity: 3.63,
    isNSFW: false,
    description: "You are a Demon Lord to be. Darkness and Unholy abilities are slightly enhanced, but you are more vulnerable to holy and light abilities."
  },
  {
    name: "Peerless",
    rarity: 3.64,
    isNSFW: false,
    description: "You are peerless in bed. You can quickly adapt to partners' preferences and learn their weak spots; improvement in tantric arts is accelerated, leaving no one unsatisfied."
  },
  {
    name: "Free Bird",
    rarity: 3.65,
    isNSFW: false,
    description: "You are a perfect flyer. Flight comes as naturally as walking or breathing; all flight abilities are more precise, potent, and cost less energy."
  },
  {
    name: "Talented",
    rarity: 3.71,
    isNSFW: false,
    description: "You are a talent in every field of experience. You pick up any skill considerably faster than the average person and improve faster too."
  },
  {
    name: "Healing... Fluids",
    rarity: 3.72,
    isNSFW: false,
    description: "Your sweat, saliva, and cum heal. Effects scale with your physical stats. Others can lick your sweat off to heal themselves."
  },
  {
    name: "Gym Nut",
    rarity: 3.73,
    isNSFW: false,
    description: "Your body recovers from exercise far quicker and training efficiency is increased considerably. You could achieve peak human fitness in months."
  },
  {
    name: "Untraceable",
    rarity: 3.81,
    isNSFW: false,
    description: "You are very hard to track. Cameras stop recording, footprints vanish, and normal people cannot recall your direction. Excellent for the paranoid or serial killers."
  },
  {
    name: "Immutable",
    rarity: 3.91,
    isNSFW: false,
    description: "Your body refuses to change. You resist abilities like rot, sickness inducement, or biokinesis automatically."
  },
  {
    name: "Undeniable",
    rarity: 3.92,
    isNSFW: false,
    description: "Your senses cannot be hindered. You can't be blinded or deafened except by physically removing the organ."
  },
  {
    name: "In Time of Need",
    rarity: 4.01,
    isNSFW: false,
    description: "Once every 120 hours you can restore stamina and energy to full. Hours afterward, you are extremely exhausted."
  },
  {
    name: "Necromancy",
    rarity: 4.02,
    isNSFW: false,
    description: "You are a natural-born necromancer. Death and soul-related abilities are easier to master and cost less energy."
  },
  {
    name: "Mana Substitution",
    rarity: 4.03,
    isNSFW: false,
    description: "You can substitute blood, food, water, or air with mana. Running out of mana for too long may cause instant death."
  },
  {
    name: "Curse Devouring Physique",
    rarity: 4.21,
    isNSFW: false,
    description: "Your physique devours curses. Strength scales with maximum energy. Completely devouring a curse slightly increases your max mana."
  },
  {
    name: "Vengeful",
    rarity: 4.22,
    isNSFW: false,
    description: "When fighting a target you lost to before, all abilities and traits you possess are increased by a stage."
  },
  {
    name: "Plaugemaster",
    rarity: 4.23,
    isNSFW: false,
    description: "You are a natural-born contagion, spreading disease, poison, and decay. Related abilities are easier to master and cost less energy."
  },
  {
    name: "Master Rider",
    rarity: 4.24,
    isNSFW: false,
    description: "You are a master at riding any mount. When mounted, your senses are linked and you can communicate intentions instantly."
  },
  {
    name: "Masochism",
    rarity: 4.51,
    isNSFW: false,
    description: "Whenever you are hurt or damaged, you recover energy proportional to the damage you receive."
  },
  {
    name: "Lord Death of Murder Mountain",
    rarity: 4.52,
    isNSFW: false,
    description: "Murder and maiming are instinctive. You were born with blood on your hands and will spill many more."
  },
  {
    name: "Hero",
    rarity: 4.53,
    isNSFW: false,
    description: "You are a Hero, a child blessed by light and holy. All Light and Holy abilities are strengthened alongside your physical abilities."
  },
  {
    name: "Boundless Stamina",
    rarity: 4.41,
    isNSFW: false,
    description: "Your stamina is boundless. Even a regular person could run a marathon with ease and recover incredibly fast."
  },
  {
    name: "Polymath",
    rarity: 4.42,
    isNSFW: false,
    description: "You are a polymath, a once-in-a-generation talent. You improve in all areas of expertise far faster than average."
  },
  {
    name: "Dragon Rider",
    rarity: 4.43,
    isNSFW: false,
    description: "You are destined to ride dragons. Dragons view you more favorably, and it is easier to earn their affection."
  },
  {
    name: "Thinker",
    rarity: 4.81,
    isNSFW: false,
    description: "All thinker abilities are more potent and cost less to use. Thinker headaches are mitigated."
  },
  {
    name: "Pyromaniac",
    rarity: 4.82,
    isNSFW: false,
    description: "You are a natural pyromancer. Fire abilities cost less energy and your fire/heat resistance is increased."
  },
  {
    name: "Ygdar Orus Li Ox",
    rarity: 4.91,
    isNSFW: false,
    description: "At the moment of your death, you are resuscitated with all lethal wounds healed and some energy restored. Trait is deleted afterward."
  },
  {
    name: "Surging Magic Power",
    rarity: 4.92,
    isNSFW: false,
    description: "Your connection to the mystical is far more potent. Any magic you use is stronger and you can overload spells without breaking them."
  },
  {
    name: "Hero",
    rarity: 4.93,
    isNSFW: false,
    description: "All holy and light abilities are enhanced, along with a basic boost to all physical stats. Related abilities increase by half a rank if below elite rank."
  },
  {
    name: "Hero Time",
    rarity: 4.71,
    isNSFW: false,
    description: "Can only be activated once a week. While protecting someone, all enhancement abilities receive a full rank boost."
  },
  {
    name: "Zenkai Boost",
    rarity: 5.31,
    isNSFW: false,
    description: "Whenever you return from near death, you get a substantial boost to all basic stats."
  },
  {
    name: "Ex Nihilo",
    rarity: 5.32,
    isNSFW: false,
    description: "Your emitter abilities produce actual matter now, not just energy constructs but permanent new matter."
  },
  {
    name: "Constant",
    rarity: 5.33,
    isNSFW: false,
    description: "Your body cannot be changed by outside influences without your consent. You are immune to paradoxes and cannot be cloned or replicated."
  },
  {
    name: "Mana Heart",
    rarity: 5.81,
    isNSFW: false,
    description: "Your heart pumps mana instead of blood, massively increasing energy capacity and regeneration."
  },
  {
    name: "Golden Goose",
    rarity: 5.71,
    isNSFW: false,
    description: "People want you on their side and will dote on you. Higher-ups in organizations favor you, and royalty may take a liking."
  },
  {
    name: "Living Nightmare",
    rarity: 5.72,
    isNSFW: false,
    description: "You can recover energy by converting fear held toward you into energy. Enough fear may grant permanent stat increases."
  },
  {
    name: "Wrath Made Manifest",
    rarity: 6.61,
    isNSFW: false,
    description: "All of your physical stats increase the angrier you get. Caps at Epic Rank."
  },
  {
    name: "Pride King",
    rarity: 6.62,
    isNSFW: false,
    description: "Your existence oppresses. Creatures below Epic rank have energy lowered by one rank; those more than two ranks below cannot breathe without permission."
  },
  {
    name: "Gluttonous Abyss",
    rarity: 6.63,
    isNSFW: false,
    description: "You can extract energy from any object you eat to permanently increase your own energy reserves."
  },
  {
    name: "Lord of Fear",
    rarity: 6.64,
    isNSFW: false,
    description: "You are the ruler of fear. Feared opponents drain energy to you, and you can interact with fear to absorb it into your energy."
  },
  {
    name: "Fireborn",
    rarity: 6.71,
    isNSFW: false,
    description: "You were born in the flames. Completely immune to all fire-based attacks; higher body temperature accelerates recovery up to 500%."
  },
  {
    name: "Ice Monarch",
    rarity: 7.21,
    isNSFW: false,
    description: "You are the Ice Monarch. Immense resistance to all elements; ice/frost abilities below Mythical Tier are increased and cost less energy."
  },
  {
    name: "Fire Monarch",
    rarity: 7.31,
    isNSFW: false,
    description: "You are the Fire Monarch. Energy is massively enhanced; Fire/Plasma abilities below Mythical Tier are stronger and cost less energy."
  },
  {
    name: "Earth Monarch",
    rarity: 7.41,
    isNSFW: false,
    description: "You are the Earth Monarch. Durability massively enhanced; Earth/Metal abilities below Mythical Tier are stronger and cost less energy."
  },
  {
    name: "Nine Lives",
    rarity: 7.42,
    isNSFW: false,
    description: "You have nine lives. Each time you die, one life is consumed and you return with permanent resistance to that fatal attack."
  },
  {
    name: "Sea Monarch",
    rarity: 7.11,
    isNSFW: false,
    description: "You are the Sea Monarch. Vitality massively increased; Water abilities below Mythical Tier are stronger and cost less energy."
  },
  {
    name: "Sky Monarch",
    rarity: 7.91,
    isNSFW: false,
    description: "You are the Sky Monarch. Agility massively enhanced; Wind/Lightning abilities below Mythical Tier are stronger and cost less energy."
  },
  {
    name: "Mind Palace",
    rarity: 6.21,
    isNSFW: false,
    description: "Your mind is a palace. Absolute control over it; immune to all mind abilities below Mythical level. Enhanced thought speed, perfect memory, and accelerated learning."
  },
  {
    name: "Black Heart",
    rarity: 6.31,
    isNSFW: false,
    description: "You have a second metaphysical heart that massively increases mana capacity and regeneration while boosting all necromancy abilities significantly."
  },
  {
    name: "Denied from Oblivion",
    rarity: 6.41,
    isNSFW: false,
    description: "Even if all the universe collapses, your consciousness survives, slightly augmenting regeneration and learning from the void."
  },
  {
    name: "Voidborn Resilience",
    rarity: 7.81,
    isNSFW: false,
    description: "You can survive in space. Sadly, that includes your emotions."
  },
  {
    name: "Laughs in the Face of Gods",
    rarity: 9.31,
    isNSFW: false,
    description: "Your laughter echoes across planes, deeply upsetting at least 3 pantheons."
  },
  {
    name: "Battery Saver",
    rarity: 4.6,
    isNSFW: false,
    description: "Whenever you have an ability slot you aren't using, the other abilities cost less energy. If you have 3 slots and only use one, the ability in the first slot is 3x cheaper."
},
{
    name: "Rule 63",
    rarity: 3.3,
    isNSFW: false,
    description: "\"Where Banana?\" Reality across all of existence has been twisted, warped, retconned and remade to make some men women. Or women men."
},
{
    name: "Monster Mater",
    rarity: 2.8,
    isNSFW: true,
    description: "(NSFW)\"I really shouldn't have sex with that, buuut-\" The more monstrous a member of the opposite sex is, the more they are attracted to you. Only works on things you yourself would be attracted to."
},
{
    name: "Musk",
    rarity: 2.0,
    isNSFW: true,
    description: "(NSFW)Your smell is really good, a bit arousing even."
},
{
    name: "No Enemies",
    rarity: 4.8,
    isNSFW: false,
    description: "\"You really don't\" Everyone you meet has a good impression of you, even evil dictators, violent murderers or mindless beasts have a decent liking of you as soon as they get to know about you. Only works on named characters."
},
{
    name: "My Friend Now",
    rarity: 5.5,
    isNSFW: false,
    description: "Everyone you meet starts off friendly to you as long as they don't have a preconceived opinion of you. You can walk up to Thanos and open a can of beer with him. Even death seems to like the cut of your gib."
},
{
    name: "Uchiha",
    rarity: 5.4,
    isNSFW: false,
    description: "Naruto - You are a member of the Uchiha Clan, granting you increased martial talent, energy reserves, fire affinity and a natural sharingan that does not take up an ability slot."
},
{
    name: "Uzumaki",
    rarity: 5.9,
    isNSFW: false,
    description: "Naruto - You are a member of the Uzumaki clan, granting you increased life force and endurance. You can heal yourself and others with your blood infused with energy. With training, you can create sealing adamantine chains capable of suppressing and sealing energy."
},
{
    name: "Hyuga",
    rarity: 5.1,
    isNSFW: false,
    description: "Naruto - You are a member of the Hyuga clan, granting increased dexterity, energy reserves and fine control over body and energy. You also possess a natural Byakugan that does not take up an ability slot."
},
{
    name: "Senju",
    rarity: 6.0,
    isNSFW: false,
    description: "Naruto - You are a direct descendant of Hashirama Senju, granting greatly increased lifeforce and energy reserves as well as martial prowess. You also possess a natural Wood Release and increased Nature Affinity."
},
{
    name: "Hanma",
    rarity: 2.8,
    isNSFW: false,
    description: "Baki - You are a Hanma, incredibly genetically gifted, possessing increased resistance to poisons and faster physical growth. If male, you have overwhelming testosterone; if female, you are still a genetically gifted freak. Martial talent is greatly increased."
},
{
    name: "Lesser Undead",
    rarity: 2.5,
    isNSFW: false,
    description: "Race - You are a lesser undead, choosing between zombie or skeleton. As an undead, you have no stamina and consume energy instead, gaining unique bonuses and demerits."
},
{
    name: "Greater Undead",
    rarity: 3.8,
    isNSFW: false,
    description: "Race - You are a greater Undead, transforming into a Death Knight or Lich depending on your stats. No stamina, energy consumption instead, with unique bonuses and demerits."
},
{
    name: "Fishman",
    rarity: 4.6,
    isNSFW: false,
    description: "Race (One Piece) - You are a Fishman or hybrid. Stronger than humans with enhanced physical stats, underwater breathing, water affinity, Fishman Karate, and communication with sea creatures."
},
{
    name: "Lunarian",
    rarity: 6.2,
    isNSFW: false,
    description: "Race (One Piece) - You are a Lunarian, a legendary race. Massively increased physical stats, wings, natural fire manipulation; durability massively increased while fire on back is lit."
},
{
    name: "Nightkin",
    rarity: 4.9,
    isNSFW: false,
    description: "Race (Fate) - Vampire derived from a dead apostle. Superhuman physical and magical abilities, rewinding regeneration with blood. Can evolve by consuming enough blood."
},
{
    name: "Nightmare",
    rarity: 5.2,
    isNSFW: false,
    description: "Race (Tsukihime) - High-rank vampire with superhuman stats and rewinding regeneration. Can create ghouls and has unique Elite ability without slot. Evolves with blood consumption."
},
{
    name: "Dead Apostle",
    rarity: 6.7,
    isNSFW: false,
    description: "Race (Tsukihime) - Fully realized Dead Apostle with epic ranked ability that does not take up an ability slot. Vastly superior physical stats and regenerative immortality with blood."
},
{
    name: "Dead Apostle Ancestor",
    rarity: 8.6,
    isNSFW: false,
    description: "Race (Tsukihime) - True Dead Apostle Ancestor, immense physical and magical power, body rewinds injuries with blood. Owns Idea Blood, Legendary Ability usable without slot. Can turn others into vampires instantly."
},
{
    name: "Beastmen",
    rarity: 3.5,
    isNSFW: false,
    description: "Race - Beastkin hybrid (bear, cat, wolf, etc.) with enhanced physical stats, night vision, and unique traits depending on hybrid type."
},
{
    name: "Ghoul",
    rarity: 4.2,
    isNSFW: false,
    description: "Race (Tokyo Ghoul) - Flesh-eating superhuman with Kagune organ of choice. Great regeneration. Must consume human flesh or risk feral state."
},
{
    name: "One-Eyed Ghoul",
    rarity: 5.3,
    isNSFW: false,
    description: "Race (Tokyo Ghoul) - More powerful than average ghoul. Superhuman stats, flexible Kagune, stronger by consuming human flesh but can survive on normal food."
},
{
    name: "Vampire",
    rarity: 3.7,
    isNSFW: false,
    description: "Race (JoJo) - Born of Stone Mask created by Kars. Enhanced physical stats, can create ghouls/vampires, manipulate flesh, vulnerable to sunlight."
},
{
    name: "Pillar Men",
    rarity: 4.6,
    isNSFW: false,
    description: "Race (JoJo) - Stone Mask unlocked potential. Self-bio kinesis, flesh absorption, thrall creation, massive physical stats, vulnerable to sunlight."
},
{
    name: "Perfect Lifeform",
    rarity: 5.8,
    isNSFW: false,
    description: "Race (JoJo) - Pillar Man with true potential unlocked. Enhanced physical/magical stats, can manipulate own biology and body shape freely."
},
{
    name: "Viltrumite",
    rarity: 7.5,
    isNSFW: false,
    description: "Race (Invincible) - One of the fiercest warrior races. Incredible body, flight, near invulnerability; weak to a specific sound frequency."
},
{
    name: "Kryptonian",
    rarity: 8.8,
    isNSFW: false,
    description: "Race (DC) - Gains power from sunlight: heat vision, ice breath, flight, tactile telekinesis, X-ray vision, near-godlike."
},
{
    name: "Saiyan",
    rarity: 6.2,
    isNSFW: false,
    description: "Race (Dragon Ball) - Great physique, monkey tail as weakness, turns into giant monkey under full moon."
},
{
    name: "Child of Man",
    rarity: 8.4,
    isNSFW: false,
    description: "Warhammer 40k - Child of God Emperor, gifted physique, charisma, martial prowess, science, Psyker mastery. Can eventually destroy planets with power."
},
{
    name: "Majin",
    rarity: 7.3,
    isNSFW: false,
    description: "Race (Dragon Ball) - Descendant of Majin Buu. Malleable, gum-like body, regenerates from small parts, can absorb objects/people to strengthen."
},
{
    name: "Forever Alone",
    rarity: 2.0,
    isNSFW: false,
    description: "Humans and monsters alike avoid you. Even your best friends do not want to deal with you."
},
{
    name: "Musk",
    rarity: 2.0,
    isNSFW: true,
    description: "(NSFW)Your smell is really good, a bit arousing even."
},
{
    name: "Lucky Penny",
    rarity: 2.2,
    isNSFW: false,
    description: "You find coins and small valuables more often. Slight increase in minor luck checks."
},
{
    name: "Scavenger",
    rarity: 2.4,
    isNSFW: false,
    description: "Better chance of finding useful items when scavenging."
},
{
    name: "Pacifist",
    rarity: 2.4,
    isNSFW: false,
    description: "Cannot actively harm living beings. Gains unique defensive and diplomatic bonuses."
},
{
    name: "Student",
    rarity: 2.4,
    isNSFW: false,
    description: "Learn faster when taught personally by someone more skilled."
},
{
    name: "Blood Mana",
    rarity: 2.6,
    isNSFW: false,
    description: "Can treat own vitality as secondary mana at 1:1 rate. Vitality spent cannot be healed, only restored through rest."
},
{
    name: "Monster of God",
    rarity: 2.5,
    isNSFW: false,
    description: "Hellsing - Monster of God transformed by Helena's Nail. Monstrous stats, holy energy, control thorned vines, immortal as long as heart intact."
},
{
    name: "Monstergirl Enthusiast",
    rarity: 2.5,
    isNSFW: true,
    description: "(NSFW)Hybrid girls or opposite gender with monster traits favor you more; some monsters are oddly compatible."
},
{
    name: "Lesser Undead",
    rarity: 2.5,
    isNSFW: false,
    description: "Race - You are a lesser undead, choosing between zombie or skeleton. As an undead, you have no stamina and consume energy instead, gaining unique bonuses and demerits."
},
{
    name: "Rodrigues",
    rarity: 2.7,
    isNSFW: false,
    description: "Descendant of Jetstream Sam. Brazilian, double jump, swordsmanship and swordsmithing talent."
},
{
    name: "Monster Mater",
    rarity: 2.8,
    isNSFW: true,
    description: "(NSFW)\"I really shouldn't have sex with that, buuut-\" The more monstrous a member of the opposite sex is, the more they are attracted to you. Only works on things you yourself would be attracted to."
},
{
    name: "Meet Cute",
    rarity: 2.8,
    isNSFW: false,
    description: "More likely to encounter romantic interests in favorable situations."
},
{
    name: "Sensor",
    rarity: 2.9,
    isNSFW: false,
    description: "Ability to sense and locate energy/mana/chakra. Thinker abilities enhanced."
},
{
    name: "Lone Wolf",
    rarity: 3.1,
    isNSFW: false,
    description: "Prefers solitude; increased stats when no allies are nearby. Penalty when in groups."
},
{
    name: "Disciple",
    rarity: 3.2,
    isNSFW: false,
    description: "Learn faster and gain favor with teachers when taught by someone more skilled."
},
{
    name: "Rule 63",
    rarity: 3.3,
    isNSFW: false,
    description: "\"Where Banana?\" Reality across all of existence has been twisted, warped, retconned and remade to make some men women. Or women men."
},
{
    name: "Angel",
    rarity: 3.4,
    isNSFW: false,
    description: "Race Change - Slightly increased stats, natural flight, boosted Holy/Light abilities; weaker to Darkness/Unholy."
},
{
    name: "Beastmen",
    rarity: 3.5,
    isNSFW: false,
    description: "Race - Beastkin hybrid (bear, cat, wolf, etc.) with enhanced physical stats, night vision, and unique traits depending on hybrid type."
},
{
    name: "Plaguebearer",
    rarity: 3.6,
    isNSFW: false,
    description: "Carry a disease constantly. People avoid contact. Slight damage aura to enemies over time."
},
{
    name: "Pyromaniac",
    rarity: 3.8,
    isNSFW: false,
    description: "You gain power when around fire or burning objects. Fire resistance increased."
},
{
    name: "Greater Undead",
    rarity: 3.8,
    isNSFW: false,
    description: "Race - You are a greater Undead, transforming into a Death Knight or Lich depending on your stats. No stamina, energy consumption instead, with unique bonuses and demerits."
},
{
    name: "Tepes",
    rarity: 3.8,
    isNSFW: false,
    description: "Descendant of Tepes bloodline. Vampirism, Unholy, Hemokinetic abilities stronger; undead/vampires more respectful."
},
{
    name: "Druidic",
    rarity: 4.9,
    isNSFW: false,
    description: "Can communicate and manipulate nature. Enhanced herbalism, small animal summoning."
},
{
    name: "Man vs World",
    rarity: 4.8,
    isNSFW: false,
    description: "You gain strength when outnumbered in combat. 1 vs 1000 max; effect halved per ally."
},
{
    name: "No Enemies",
    rarity: 4.8,
    isNSFW: false,
    description: "\"You really don't\" Everyone you meet has a good impression of you, even evil dictators, violent murderers or mindless beasts have a decent liking of you as soon as they get to know about you. Only works on named characters."
},
{
    name: "Hydromancer",
    rarity: 4.0,
    isNSFW: false,
    description: "Manipulate water elements; enhance aquatic mobility and defense."
},
{
    name: "Duelist",
    rarity: 4.1,
    isNSFW: false,
    description: "Stats increased in one-on-one combat; effect ends if others intervene. Duels are less likely to be interrupted."
},
{
    name: "Mithril Skeleton",
    rarity: 4.1,
    isNSFW: false,
    description: "Skeleton unusually durable and flexible, conducts energy better; scales with physical stats."
},
{
    name: "Principality",
    rarity: 4.2,
    isNSFW: false,
    description: "Race Change - Higher-tier angel with two pairs of wings. Increased stats, energy, flight; boosted Holy/Light, weakened Darkness/Unholy."
},
{
    name: "Aerokinetic",
    rarity: 4.2,
    isNSFW: false,
    description: "Manipulate air and wind; can glide or push with gusts."
},
{
    name: "Geokinetic",
    rarity: 4.3,
    isNSFW: false,
    description: "Manipulate earth and stone; increased defense and strength."
},
{
    name: "Animal Friend",
    rarity: 4.3,
    isNSFW: false,
    description: "Animals are unusually friendly. Useful for scouting, companions, and transportation."
},
{
    name: "Reapers Presence",
    rarity: 4.4,
    isNSFW: false,
    description: "Terrifying presence; instills fear, every gesture seems like a death threat."
},
{
    name: "Adamantium Bonding",
    rarity: 4.2,
    isNSFW: false,
    description: "Marvel - Skeleton bonded with Adamantium: borderline unbreakable but severely poisons. Wait before activating unless countermeasures ready."
},
{
    name: "Summoner",
    rarity: 4.5,
    isNSFW: false,
    description: "Summoning creatures, familiars, spirits comes naturally. Summons have enhanced stats and consume less energy; easier loyalty/affection."
},
{
    name: "Masochism",
    rarity: 4.5,
    isNSFW: false,
    description: "Whenever you are hurt or damaged, you recover energy proportional to the damage you receive."
},
{
    name: "Brand of Slaneesh",
    rarity: 4.6,
    isNSFW: false,
    description: "Warhammer 40k - Brand of Slaanesh. Increases understanding of others, naturally charismatic and alluring."
},
{
    name: "Fishman",
    rarity: 4.6,
    isNSFW: false,
    description: "Race (One Piece) - You are a Fishman or hybrid. Stronger than humans with enhanced physical stats, underwater breathing, water affinity, Fishman Karate, and communication with sea creatures."
},
{
    name: "Pyrokinetic",
    rarity: 4.9,
    isNSFW: false,
    description: "Manipulate fire; offense and defense enhanced."
},
{
    name: "Shadow Walker",
    rarity: 5.0,
    isNSFW: false,
    description: "Manipulate shadows; stealth and teleportation abilities enhanced."
},
{
    name: "Hyuga",
    rarity: 5.1,
    isNSFW: false,
    description: "Naruto - You are a member of the Hyuga clan, granting increased dexterity, energy reserves and fine control over body and energy. You also possess a natural Byakugan that does not take up an ability slot."
},
{
    name: "Lightbringer",
    rarity: 5.2,
    isNSFW: false,
    description: "Manipulate light; blinding enemies and healing allies."
},
{
    name: "One-Eyed Ghoul",
    rarity: 5.3,
    isNSFW: false,
    description: "Race (Tokyo Ghoul) - More powerful than average ghoul. Superhuman stats, flexible Kagune, stronger by consuming human flesh but can survive on normal food."
},
{
    name: "Dominion",
    rarity: 5.4,
    isNSFW: false,
    description: "Race Change - High-tier angel with three pairs of wings. Increased magical/physical abilities; boosted Holy/Light, weakened Darkness/Unholy."
},
{
    name: "Uchiha",
    rarity: 5.4,
    isNSFW: false,
    description: "Naruto - You are a member of the Uchiha Clan, granting you increased martial talent, energy reserves, fire affinity and a natural sharingan that does not take up an ability slot."
},
{
    name: "Brand of Khorne",
    rarity: 5.3,
    isNSFW: false,
    description: "Warhammer 40k - Brand of Khorne. Heightened combat instincts, intuition with weapons/skills, tracks blood, senses killing intent."
},
{
    name: "Adamantium Skeleton",
    rarity: 5.7,
    isNSFW: false,
    description: "\"Suck it Wolverine\" - Skeleton nigh unbreakable, non-poisonous, scales with physical stats."
},
{
    name: "Mystic Scholar",
    rarity: 5.7,
    isNSFW: false,
    description: "Enhanced understanding of magical theory; can craft unique spells."
},
{
    name: "Senju",
    rarity: 6.0,
    isNSFW: false,
    description: "Naruto - You are a direct descendant of Hashirama Senju, granting greatly increased lifeforce and energy reserves as well as martial prowess. You also possess a natural Wood Release and increased Nature Affinity."
},
{
    name: "Necromancer",
    rarity: 6.0,
    isNSFW: false,
    description: "Can summon and control the dead; requires energy to maintain control."
},
{
    name: "Throne",
    rarity: 6.5,
    isNSFW: false,
    description: "Race Change - High-ranking angel with four pairs of wings. Great physical/magical abilities; boosted Holy/Light, weakened Darkness/Unholy, convert energy to holy light."
},
{
    name: "Vibranium Skeleton",
    rarity: 6.6,
    isNSFW: false,
    description: "Skeleton resembles Vibranium: unbreakable, stores kinetic energy to enhance strength temporarily; scales with physical stats."
},
{
    name: "Time Traveler",
    rarity: 6.8,
    isNSFW: false,
    description: "You can occasionally jump brief moments back in time, usually only seconds. Can avoid fatal accidents."
},
{
    name: "Dimensional Traveler",
    rarity: 7.5,
    isNSFW: false,
    description: "You can move between dimensions unpredictably. Enhances survival and exploration, can be inconvenient."
},
{
    name: "Titan Form",
    rarity: 7.0,
    isNSFW: false,
    description: "Can temporarily grow into a gigantic form with immense strength."
},
{
    name: "Dragonblood",
    rarity: 7.3,
    isNSFW: false,
    description: "Partially draconic; fire resistance, enhanced strength, and breath attack."
},
{
    name: "Seraphim",
    rarity: 7.2,
    isNSFW: false,
    description: "Race Change - Strongest angel with 5 pairs of wings. Incredible magical/physical power; boosted Holy/Light abilities, cannot use Darkness/Unholy."
},
{
    name: "Majin",
    rarity: 7.3,
    isNSFW: false,
    description: "Race (Dragon Ball) - Descendant of Majin Buu. Malleable, gum-like body, regenerates from small parts, can absorb objects/people to strengthen."
},
{
    name: "Monster of God",
    rarity: 7.2,
    isNSFW: false,
    description: "Hellsing - Monster of God transformed by Helena's Nail. Monstrous stats, holy energy, control thorned vines, immortal as long as heart intact."
},
{
    name: "Viltrumite",
    rarity: 7.5,
    isNSFW: false,
    description: "Race (Invincible) - One of the fiercest warrior races. Incredible body, flight, near invulnerability; weak to a specific sound frequency."
},
{
    name: "Phoenix Heart",
    rarity: 7.6,
    isNSFW: false,
    description: "Can resurrect once upon death; minor fire abilities granted."
},
{
    name: "Celestial Being",
    rarity: 8.0,
    isNSFW: false,
    description: "Gain minor god-like powers; enhanced stats and abilities."
},
{
    name: "Chaos Avatar",
    rarity: 8.1,
    isNSFW: false,
    description: "You are a living embodiment of Chaos. Random abilities appear and disappear at random intervals."
},
{
    name: "Child of Man",
    rarity: 8.4,
    isNSFW: false,
    description: "Warhammer 40k - Child of God Emperor, gifted physique, charisma, martial prowess, science, Psyker mastery. Can eventually destroy planets with power."
},
{
    name: "Dead Apostle Ancestor",
    rarity: 8.6,
    isNSFW: false,
    description: "Race (Tsukihime) - True Dead Apostle Ancestor, immense physical and magical power, body rewinds injuries with blood. Owns Idea Blood, Legendary Ability usable without slot. Can turn others into vampires instantly."
},
{
    name: "King of the Monsters",
    rarity: 8.8,
    isNSFW: false,
    description: "Godzilla - Giant monster, nearly indestructible, capable of colossal destruction, radiation abilities."
},
{
    name: "Infinite Potential",
    rarity: 9.0,
    isNSFW: false,
    description: "Stat growth never caps; extremely rare potential."
},
{
    name: "Reality Bender",
    rarity: 9.5,
    isNSFW: false,
    description: "Can alter reality slightly; high difficulty and energy cost."
},
{
    name: "Spiral",
    rarity: 9.9,
    isNSFW: false,
    description: "Tengen Toppa Gurren Lagann - If there is a will there is a way."
}
];







