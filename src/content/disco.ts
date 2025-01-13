import { ImageSourcePropType } from 'react-native'

type Track = {
  id: string
  slug: string
  bg: string
  color: string
  ui: string
  title: string
  sc: number
  scIdx: number
  lyrics?: string
  spotters?: string
}

type Album = {
  id: string
  slug: string
  title: string
  bg?: string
  ui?: string
  color?: string
  side: string
  bgImage: ImageSourcePropType
  cover: ImageSourcePropType
  scIdx: number
  sc?: number
  spotters?: string
  tracks: Track[]
}

export type AlbumKey = 'tihie' | 'persuasive' | 'foal' | 'fox'

type Discography = {
  [key: string]: Album
}

const albums: Discography = {
  tihie: {
    id: 'tihie',
    slug: 'this-is-how-it-ends',
    title: 'This Is How It Ends',
    side: 'This Is How It Ends',
    cover: require('../assets/covers/tihie.jpg'),
    bgImage: require('../assets/tracks/tihie-bg.jpg'),
    scIdx: 0,
    tracks: [
      {
        id: 'mellow',
        slug: 'the-quick-the-dead',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'The Quick & The Dead',
        sc: 331598063,
        scIdx: 0,
        lyrics:
          "<p>Woke up this morning with a new face<br>As an Adam to a new race<br>As a butterfly in a hurricane<br>You turn to me like you're all alone<br>But I've got the bricks we need to build a home<br>For the quick and the dead</p><p>So shut your eyes, you had me at tragedy<br>We are broken, we are ghosts, we are free<br>We'll take it a day at a time, they haven't caught us yet<br>Look me up when you've found something real.</p>Draw me a picture where you and I<br>Sit as gods in a broken sky<br>Where through your pictures we look at life<br>As long as the wheels keep turning<br>I don't care who turns them<br>And sometimes it just helps not to know.</p><p>So shut your eyes, you had me at tragedy<br>We are broken, we are ghosts, we are free<br>We'll take it a day at a time, they haven't caught us yet<br>Look me up when you've found something real.</p><p>You and I<br>We are ghosts<br>We are broken<br>We are free.</p>",
      },
      {
        id: 'touch',
        slug: 'touch',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Touch',
        sc: 9069116,
        scIdx: 1,
        lyrics:
          "<p>I am fingertips<br>I am fingertips and lines<br>I am animal<br>I'm a step beyond mankind<br>I am God in here<br>I am God of what I see<br>I am God in here<br>And you are nothing to me</p><p>I'm chasing<br>I'm hunting<br>I'm drowning<br>I'm tasting<br><strong>I am touch.</strong></p><p>I let loose my tongue<br>I let loose my tongue when you're near<br>I dance with my feet<br>The floor's on fire when I dance here<br>I clean up for the night<br>I clean up just to get dirty<br>I clean up for the night<br>But you are nothing to me</p><p><em>(I'm aware of the taste of sweat<br>And the bass and the blood<br>How they pound in my head.<br>I'm aware of your body's moves<br>It spikes and it flows<br>As you shake and you moan.<br>Let me stumble<br>Let me make<br>Another mistake.)</em></p><p>Takeitofftakeitofftakeitofftakeitoff<br>Take it off, and let me touch you<br>Slamthedoorslamethedoorslamthedoorslamthedoor<br>Slam the door and light fall, dark rise<br>I'magodI'magodI'magodI'magod<br>I'm a god, so kneel down at my feet<br>IamtouchIamtouchIamtouchIamtouch<br>And you are everything to me.</p><p>I'm chasing<br>I'm hunting<br>I'm drowning<br>I'm tasting<br><strong>I am touch.</strong></p>",
      },
      {
        id: 'smile',
        slug: 'smile',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Smile',
        sc: 331598056,
        scIdx: 2,
        lyrics:
          "<p>Bottles and sad songs<br>I can barely look at myself<br>Need some human contact<br>But I know that you're with someone else</p><p>And the worst part<br>Is your smile.</p><p>My memory won't let me<br>Take back the things that I've said<br>You forget what I look like<br>But you form every thought in my head</p><p>I'm 18<br>I'm alone<br>There ain't no way I'm going home<br>Just gonna drive<br>All night<br>Till there's nothing that I recognise</p><p>And you'll call me<br>When you remember my name.</p><p>We separate at such speed.<br><em>(You fall away from me.)</em></p>",
      },
      {
        id: 'men-her',
        slug: 'men-and-her',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Men and Her',
        sc: 9069360,
        scIdx: 3,
        lyrics:
          "<p>I spent way too long on the wrong side of your room<br>It's like every single night I'm racing the moon<br>I pull right up to the end of your drive<br>Can I show you what I mean tonight?</p><p>If you love me<br>Just say you need me.<br>If you need me<br>Just give in and kiss me.</p><p>We've been here before, but you walked away<br>Just how hard are these three words to say?<br>That's the longest sentence I've heard all day</p><p>We are two people acting out what we think it means to be in love<br>But that's enough.<br><em>(We are two children eating candlelit dinner in our parents' clothes<br>Where no-one knows.)</em></p><p>If you love me<br>Just say you need me.<br>If you need me<br>Just give in and kiss me.</p><p>We're from two different worlds<br>I can't be who you want me to be<br>But I'm cut in the shape<br>Of what you need.</p><p>If you love me<br>Just say you need me.<br>If you need me<br>Just give in and kiss me.</p>",
      },
      {
        id: 'itch',
        slug: 'itch',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Itch',
        sc: 331598049,
        scIdx: 4,
        lyrics:
          "<p>I've got an itch<br>In the front of my brain<br>It hurts like hell<br>But I must not complain<br>I've got some words<br>That I cannot write down<br>Can't open my mouth<br>For fear of spitting them out</p><p>And this feeling in my brain<br>Makes me twitch and go insane<br>And I'm wasting all this time<br>Just not scratching the itch in my mind</p><p>Heretics<br>For my bones<br>My hands are red<br>With the blood of my future clones<br>Half-written letters<br>Conversations I've dreamed<br>I leave hang-up tones<br>On your answering machine</p><p>And this feeling in my brain<br>Makes me twitch and go insane<br>And I'm wasting all this time<br>Just not scratching the itch in my mind</p><p>Let it out.</p>",
      },
      {
        id: 'worst-kind',
        slug: 'the-worst-kind-of-late',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'The Worst Kind of Late',
        sc: 331598048,
        scIdx: 5,
        lyrics:
          "<p><em>(So songbird, songbird, sing me a song<br>No I don't know the words, but that's because you make them up<br>But you sing so sweet that no-one can say it's wrong.)</em></p><p>So some young punk broke your heart last night<br>And it'll take many, many more to make it right<br>Well it never turned out this way in my dreams<br>I don't know what I waited for</p><p>I don't know what I waited for<br>You're the memory I can't ignore<br>I don't know what I waited for</p><p>I'm not sure if you're on my side<br>I'm not sure if you're wasting all my time</p><p>Well all the real men say I've made such a mess<br>They say “Why all this fuss over just a slot in flesh?”<br>But you looked so pretty in that dress<br>I don't know what I waited for</p><p>I don't know what I waited for</p><p>I guess you were half right<br>I guess I was half wrong<br>But sometimes I feel so alone<br>I guess you were half right<br>I guess I was half wrong<br>And now my mama don't know my face</p><p>I'm not sure if you're on my side<br>I'm not sure if you're wasting all my time</p><p>And what the hell are you gunna do now?<br>You're carrying his child<br>And he never did say he felt the same<br>Only he felt bigger in your brain<br>And what the hell are you gunna do now?!<br>You're carrying his child<br>And you never wanted to be a mum<br>You never wanted this for your son<br>And what the hell are you gunna do<br>Now you're this grown up?</p><p>I'm not sure if you're on my side<br>I'm not sure if you're wasting all my time.</p>",
      },
      {
        id: 'london',
        slug: 'london',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'London',
        sc: 331598038,
        scIdx: 6,
        lyrics:
          "<p>Please don't ask me where I'm coming from<br>Just ask me where I'm going to<br>I'm all trussed up in my new suit<br>So I'll get there someday soon</p><p>I rely on graphs and flowcharts<br>Just to keep<br>Track of time<br>In a city that never sleeps</p><p>Love in all its forms is changing my perception<br>Love in all its forms is changing what I see<br>Oh, the neon lights are lit up in deception<br>Oh, the neon lights are lit up for me.</p><p>This is where I find my home<br>And this is where my dreams take hold<br>On London's air-conditioned streets</p><p>One day I will rise up<br>And the whole of this city will grind to a stop<br>As I float up from the chewing gum at my feet</p><p>Love in all its forms is changing my perception<br>Love in all its forms is changing what I see<br>Oh, the neon lights are lit up in deception<br>Oh, the neon lights are lit up for me.</p><p>We are the racing rats<br>We are the racing rats<br>We don't use English<br>We don't do maths<br>We are the ticking bomb<br>We are the underground<br>Cut off our tails</p>",
      },
      {
        id: 'map',
        slug: 'making-a-point',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Making A Point',
        sc: 9068612,
        scIdx: 7,
        lyrics:
          "<p>So here we are again<br>In the same position<br>That I hate so much</p><p>All this indecision<br>She's not here, is she?<br>So make up your mind.</p><p>She's got your tracks covered<br>She's got your mouth smothered</p><p>I'm making a point<br>Not doing this to hurt you<br>But you're not always right<br>I'm doing this to show you<br>You made me wait.</p><p>You know my temper<br>Always to remember<br>Never to forgive</p><p>Tell me is it a sin<br>To revel in revenge<br>Fueled by testosterone?</p><p>You're doing this absent-mindedly<br>I'm doing this purposefully</p><p>I'm making a point<br>Not doing this to hurt you<br>You're not always right<br>I'm doing this to show you<br>You made me wait.</p>",
      },
      {
        id: 'scotch',
        slug: 'scotch-on-the-rocks',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Scotch On The Rocks (At The Holmesdale Gentlemens Club)',
        sc: 331597576,
        scIdx: 8,
        lyrics:
          "<p>Fill my pockets with things I don't need<br>My wife and kid wait at home for me<br>This girl floats around in her evening dress<br>Leaves me at the bar drinking for two<br>(Which I was happy to do)</p><p>We weren't strangers for too long</p><p>Lost my tie in the open sea<br>Walked back like children<br>With sand in our feet<br>She grabbed my arm, stopped me spinning around<br>Told me to cut my sentences down</p><p>We weren't strangers for too long<br>She gave me something no one else could</p><p>Every open door<br>Leads on to more<br>But it's the ones that stay closed<br>That haunt my soul</p><p>Every moment we have<br>Take its place in the past<br>But I won't forget you<br>I can't.</p>",
      },
      {
        id: 'shattered',
        slug: 'shattered-glass',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Shattered Glass',
        sc: 9069669,
        scIdx: 9,
        lyrics:
          "<p>Sylvia, I thought I told you<br>Not to leave the landing light on<br>So we run<br>Because they're coming through the exits<br>Breaking all the doors down<br>Shattering the glass panes<br>Screaming different questions<br>You're whispering in my ear<br>\"I don't want to die here<br>You said they'd never catch us\"</p><p>You are a victim to your superstition<br>Your heavy-middleweight intuition<br>With every footstep hear your heartbeat quicken<br>Screaming \"This is where it stops\"</p><p>That I can't break through<br>To your heart<br>Is my affliction<br>I can't break through<br>To you.</p><p>Sylvia, I thought I told you<br>Not to leave the landing light on<br>Just grab what you can<br>Run for your life<br>Everything that we feared<br>Is coming back to catch us<br>They don't know what we've done<br>And they don't know why we're here<br>They're just trained to hate us</p><p>So we run<br>Because they're coming through the exits<br>Breaking all the doors down<br>Shattering the glass panes<br>Screaming different questions<br>You're whispering in my ear<br>\"I don't want to die here<br>You said they'd never catch us\"</p><p>Just take the money and run for your life<br>Your hopes and fears are standing staring you in your eyes<br>We never could have made a habit just getting by<br>Because I know it was never quite enough</p><p>That I can't break through<br>To your heart<br>Is my affliction<br>From my sad, lonely tower<br>Where your soul is my addiction<br>I can't break through<br>To you.</p>",
      },
      {
        id: 'ordeal',
        slug: 'ordeal',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Ordeal',
        sc: 331598039,
        scIdx: 10,
        lyrics:
          "<p>So you went to the edge<br>To see how it feels<br>And in the words that you spoke<br>The truth was revealed - <br>But never was it real.<br>You hurt like you've seen too much<br>I've seen the scars on your arms<br>But it was nothing<br>Compared to my ordeal</p><p>The world as you know it started with a car crash<br>The world as I know it ended with a car crash.</p><p>Two fists, two beautiful fists<br>Dragged me out from behind the wheel<br>Two hearts beating stronger than mine<br>Was all that I could feel<br>Waking up in a hospital bed<br>To pull the IV out of my arm<br>Was just the start<br>The start of my ordeal.</p><p>The world as you know it started with a car crash<br>The world as I know it ended with a car crash.</p><p>Looking at you now<br>Just takes me back to that night<br>I try<br>But I can never walk away.</p><p>And now we can't escape<br>And now I can't escape.</p>",
      },
      {
        id: 'spanish',
        slug: 'pistols-and-petticoats',
        bg: 'ffffff',
        color: 'fa1178',
        ui: '111820',
        title: 'Pistols & Petticoats',
        sc: 331598038,
        scIdx: 11,
        lyrics:
          "<p>A solitary cowboy<br>At the crossing of a road<br>Meets some trigger-happy bastard<br>Talking about lightening his load</p><p>Our brother is dead!<br>Our brother is dead!<br>And a Mexican rides<br>With a price on his head<br>I'll see you on the other side<br>Of the setting Sun</p><p>A streak across the desert<br>Draw your six-gun from your back<br>A lucky shot across the plains<br>Kick his weapon into the sand</p><p>Give him one for me!<br>Give him one for me!<br>And we'll all dance around<br>The hanging tree<br>But I'll see you on other side<br>Of the setting Sun.</p>",
      },
    ],
  },
  persuasive: {
    id: 'persuasive',
    slug: 'persuasive',
    title: 'Someone More Persuasive Than You',
    side: 'Someone More Persuasive Than You',
    cover: require('../assets/covers/persuasive.jpg'),
    bgImage: require('../assets/tracks/persuasive-bg.jpg'),
    bg: 'ffffff',
    color: '0805d5',
    ui: '111820',
    sc: 59244331,
    scIdx: 12,
    tracks: [
      {
        slug: 'someone-more-persuasive-than-you',
        id: 'persuasive',
        bg: 'ffffff',
        color: '0805d5',
        ui: '111820',
        title: 'Someone More Persuasive Than You',
        sc: 59244331,
        scIdx: 12,
        lyrics:
          "<p>He was someone more persuasive than you<br>And he turned around slowly and walked out on you<br>He was trying so hard to be proud of you<br>But this is not your best<br>This is not a test.</p><p>It's not strictly true, I never relied on divine intervention<br>I look at you, and I see a whole other side to perfection</p><p>Now it's all over your face<br>And it's all over the news<br>That I could break your brittle teenage heart in two</p><p>Break away!<br>Let's live our lives unfettered<br>Break away!<br>Let's live our lives unending</p><p>...now it's all over the news.</p><p>Welcome to Hell, let me get you a drink<br>You can stay, if you want to.</p>",
      },
    ],
  },
  foal: {
    id: 'foal',
    title: 'The Foal',
    slug: 'the-foal',
    side: 'Nature As A Mirror I',
    cover: require('../assets/covers/foal.jpg'),
    bgImage: require('../assets/tracks/foal-bg.jpg'),
    bg: '000000',
    color: 'e92076',
    ui: 'cccccc',
    spotters: '6y5jFI4XNmz3UxQS5RH70y',
    sc: 53805400,
    scIdx: 13,
    tracks: [
      {
        id: 'on-your-bones',
        slug: 'on-your-bones',
        bg: 'ffffff',
        color: 'e92076',
        ui: '111820',
        title: 'On Your Bones',
        spotters: '5dMlxNRbHkrUrqj37L8BXm',
        sc: 53805400,
        scIdx: 13,
        lyrics:
          "<p>I've got one pocket of uppers and one of downers<br/>Which do you think I'm taking tonight?<br/>We tend to get caught up in people around us <br/>What do you say we leave them tonight?</p><p>You've got a soul <br/>A heavy load <br/>You've got so much love <br/>On your bones.</p><p>But no, no-one's got it all <br/>Your mind becomes a wall <br/>Your curtain starts to fall, that's all.</p><p>You've got a soul <br/>A heavy load <br/>You've got so much love <br/>On your bones.</p><p>You've got love <br/>For breaking bones <br/>You've come so, so far <br/>From your home.</p><p>But no, no-one's got it all<br/>Your mind becomes a wall <br/>Your curtain starts to fall, that's all.</p><p>No, I can't do this on my own <br/>Cant do this alone <br/>My power is so small.</p><p>Tangle your bones in all that you own <br/>Your head stays where the grass grows <br/>Take me to bed with your eyes <br/>You're crying for help inside <br/>The time of your life <br/>Nothing fits right <br/>Set all in sight alight.",
      },
      {
        id: 'war-horse',
        slug: 'war-horse',
        bg: '000000',
        color: '680002',
        ui: 'eeeeee',
        title: 'War Horse',
        spotters: '7HjdoGx7NgwGWCi3D24tkh',
        sc: 53806088,
        scIdx: 14,
        lyrics:
          "<p>They cut your hair and they broke your crown<br/>Their smiles never faltered as they held you down<br/> They put you in this place<br/> They only want you to be safe<br/> They think you've lost your way<br/>So they lay you<br/>On a body of sleepless sound<br/>Broken rhythm beats, pacing up and down<br/>Endless unrest<br/>In a house of the undead<br/>The itches in your bed<br/>Are all that's left</p><p>And it's you<br/>That could get rid of my blues<br/>It's my head<br/>That kept me in this bed</p><p>But I had a lovely life in this place<br/>I don't think I say that enough<br/>I know I've not been happy lately<br/>But I was when I was young<br/>And all of the fires in my bedroom<br/>All of the love that we ignored<br/>Is still mine for the taking<br/>If I could just get off this ward</p><p>But sometimes I feel like a loaded gun</p><p>The walls<br/>The windows<br/>The chairs<br/>The doors<br/>The worn-out clothes<br/>The stains on the floor<br/>16 years worth of videos and images<br/>And that dirty old cigar box, where you kept all of your secrets, is gone<br/>All of it has gone<br/>It made this house a home<br/>It's left me no more than skin<br/>On my bones</p><p>&#8230;</p><p>But sometimes I feel like a falling bomb.</p>",
      },
      {
        id: 'hunted',
        slug: 'the-hunted',
        bg: '000000',
        color: 'ba9544',
        ui: 'cccccc',
        title: 'The Hunted',
        spotters: '3TtXmVSNyGwljGn09iatnA',
        sc: 53807254,
        scIdx: 15,
        lyrics:
          "<p>Keep your questions to yourself, boy, because no-one here knows -<br/>When they're done with the bodies, where do they go?<br/>These pills are kaleidoscopes<br/>To blur the scene before you choke<br/>There are no faces in the homes<br/>Or under the stones</p><p>All the people in the valley are gathered below<br/>At the scent of your blood - well, they're in for a show<br/>Turn your face towards the Sun<br/>There's no room left to run<br/>But there's no fear that is real<br/>When bones can heal</p><p><em>(Dry your eyes</em><br/><em>Try outside</em><br/><em>Try your life.)</em></p><p>Can I tell you both a secret I've been keeping to myself?<br/>I've got a feeling that this hospital is bad for my health<br/>If it's not broken then it folds<br/>And you're still the only one I've told<br/>If it's not frozen then it's cold<br/>And you're the only one that knows</p><p>Doctor, I'm leaving.</p><p>I should have known - I could leave here all along.</p>",
      },
      {
        id: 'deliverance',
        slug: 'deliverance',
        bg: 'ffffff',
        color: 'e92076',
        ui: '111820',
        title: 'Deliverance',
        spotters: '6VZVXbd35frJTeJ2xSggvv',
        sc: 53809155,
        scIdx: 16,
        lyrics:
          "<p>I'm beginning<br/>To understand what you meant<br/>When you said<br/>That all this was ending</p><p>I've gone on<br/>To lose myself in my head<br/>And convince myself<br/>That I was transcending</p><p>But I saw her as deliverance from you<br/>And now I see you as a miserable excuse<br/>For love.</p><p>I'm beginning<br/>To piece back together<br/>All of the pieces of my teenage body<br/>You said weren't enough</p><p>I'm beginning<br/>To ask for forgiveness<br/>Forgiveness from myself for thinking<br/>I was in love</p><p>Your words set a fire in the Alps, and one in my skull<br/>Your heart belongs in the South, and your head on my wall<br/>My wall</p><p><em>(Pure, arrogant, impotent rage</em><br/><em>Taking hold of my body, at such tender age</em><br/><em>I've given what you want, but at every stage</em><br/><em>You make it easy to hate</em><br/><em> With the weight of the ocean</em><br/><em>The shock of the sea</em><br/><em>And the mountain</em><br/><em>Over me.)</em></p><p>I'm beginning<br/>To understand what you meant<br/>I'm beginning<br/>To understand</p><p>Run until you cannot speak<br/>Till blood is running from your feet<br/>And when your bones, they break anew,<br/>I'll still be running after you<br/>There will no deliverance<br/>From me.</p>",
      },
      {
        id: 'seven',
        slug: 'the-night-we-watched-7-fall',
        bg: 'ffffff',
        color: 'e92076',
        ui: '111820',
        title: 'The Night We Watched 7 Fall',
        spotters: '7rlbw2ehKmn6gjWTvgkTOu',
        sc: 53810326,
        scIdx: 17,
        lyrics:
          "<p>Take heed of the shiver down your spine<br>I'm the one your mother warned you about<br>Desperate violence and endless desire<br>You've been seeking me out</p><p>But I will be there when you least expect it<br>I will be sitting on broken glass<br>I will show you how and where you went wrong<br>And I will take care of the past</p><p>Let go your eyes</p><p>Fighter<br>Lover<br>Killer<br>Or mother<br>You hold me<br>So lonely<br>And still.</p><p><em>(We could fall<br>And eyes could lose their purpose<br>All our senses lost<br>And our bodies worthless<br>Come to me broken and lost and lonely<br>Forgiveness is nothing on what you owe me.)</em></p><p>Fighter<br>Lover<br>Killer<br>Or mother<br>You hold me<br>So lonely<br>And still.</p>",
      },
    ],
  },
  fox: {
    id: 'fox',
    title: 'The Fox',
    slug: 'the-fox',
    side: 'Nature As A Mirror II',
    cover: require('../assets/covers/fox.jpg'),
    bgImage: require('../assets/tracks/fox-bg.jpg'),
    bg: '000000',
    color: 'e92076',
    ui: 'cccccc',
    spotters: '38EQ0oOvcSIrRFxXCcinNZ',
    sc: 125232856,
    scIdx: 18,
    tracks: [
      {
        id: 'interlude',
        slug: 'interlude',
        bg: '000000',
        color: 'e92076',
        ui: 'ffffff',
        title: 'Interlude',
        spotters: '7JQj7KoDxOtDudRLIcGjYM',
        sc: 214780453,
        scIdx: 18,
      },
      {
        id: 'house-of-sin',
        slug: 'this-house-of-sin',
        bg: '000000',
        color: 'e92076',
        ui: 'cccccc',
        title: 'This House of Sin',
        spotters: '6lHyIYFOuBE0A54MyNcLgn',
        sc: 214780158,
        scIdx: 19,
        lyrics:
          "<p>Swallow it all down<br>And then you spit at me<br>Such poetry<br>Such dignity</p><p>You can be so<br>You can be so<br>You can be so cold sometimes.</p><p>I want to know the difference<br>Between the chosen and the damned<br>How did we end up like this?<br>This is never what we planed.</p><p>Any excuse, any excuse<br>You know you'll take any excuse<br>Just to break your silence<br>Baby it's a shame<br>A crying shame<br>You know it's a goddamn shame<br>We could have built something.</p><p>You can be so<br>You can be so<br>You can be so cold sometimes.</p><p>The Devil, he never said a word<br>But he let me in<br>I know nothing, she never felt so good<br>As in this house of sin.</p><p>Lonely, so lonely<br>My eyes are you<br>We could fall and<br>Our eyes could lose their purpose<br>All our senses become worthless<br>You are<br>A son<br>To someone<br>You are<br>A daughter<br>To no one.</p><p>I suffered, and I suffered<br>For you<br>And I came out<br>Brand new<br>I'm so fired up<br>It was so easy just to give it up.</p>",
      },
      {
        id: 'highly-strung',
        slug: 'highly-strung',
        bg: '000000',
        color: 'e92076',
        ui: 'eeeeee',
        title: 'Highly Strung',
        spotters: '25QepYvLhwFMSB8HfCc7Da',
        sc: 214780129,
        scIdx: 20,
        lyrics:
          "<p>My mouth is shaped to form these words<br>Now I'm surrounded by what I'm not<br>One kiss from you says it's over<br>But I'm in the mood to be right</p><p>I spent so long working out<br>Which way's up<br>That now I'm down<br>Can you tell me when enough<br>Will ever be enough?<br>Is that too much to ask<br>Of you?</p><p><p>My mouth is shaped to form these words<br>Now I'm surrounded by what I'm not.</p><p>(These pictures are to show you<br>I'm having a good time)</p><p>I spent so long working out<br>Which way's up<br>That now I'm down<br>Can you tell me when enough<br>Will ever be enough?<br>Is that too much to ask<br>Of you?</p>",
      },
      {
        id: 'grace',
        slug: 'grace',
        bg: '000000',
        color: 'e92076',
        ui: 'cccccc',
        title: 'Grace',
        spotters: '1w5iQ6GK30c0YTQvkk1o2B',
        sc: 214779802,
        scIdx: 21,
        lyrics:
          "<p>Call me when you're down<br>And I'll make sure your legs are broken<br>Call me when you're down<br>And make sure your heart is open<br>Come up, come around<br>And I'll make sure your words are spoken<br>Fall into the ground<br>And let all the earth pour over.</p><p>Defined by the Northern Lights<br>We set fire to the first pyre<br>Push it out into the water<br>You know it's alright<br>To watch him take flight is helping you see<br>That what you had<br>And what you lost<br>Are not the same thing.</p><p>It's bigger than us<br>So raise both of your hands above us<br>Angels into dust<br>So place both of your hands upon the cross<br>All that love, all that love<br>I've seen empires fallen for less<br>Call me when you're down<br>Oh baby, what a terrible mess.</p><p>Defined by the Northern Lights<br>We set fire to the first pyre<br>Push it out into the water<br>You know it's alright<br>To watch him take flight is helping you see<br>That what you had<br>And what you lost<br>Are not the same thing<br>They're not the same thing.</p><p>Alright, alright<br>Baby come home with me tonight<br>Where what I give<br>And what you gain<br>Could be the same thing.<br>They'd be the same thing.</p>",
      },
      {
        id: 'pact',
        slug: 'pact',
        bg: '000000',
        color: 'e92076',
        ui: 'cccccc',
        title: 'Pact',
        spotters: '66VBOe2iNz7ROnJTYedbxb',
        sc: 214779656,
        scIdx: 22,
        lyrics:
          "<p>You never listen to a word I say<br>You never touch me, only push me away<br>Another meeting ran on late<br>When you get home, the kids are crying</p><p>I never touched him, but yes we spoke<br>Our tongues curled heavy around the coffee and smoke<br>I guess he's laughing at my jokes<br>A little more than you do lately</p><p>Now it's all over the news</p><p>This is the way we love<br>Like it's not good enough</p><p>Stop making fires<br>Stop making fun out of me<br>It was never the music, baby<br>It was you who led me to drugs</p><p>If I'm a selfish lover once<br>Then I'm a selfless liar twice<br>Because I have tried<br>And I know neither was enough.</p><p>When I met you<br>I first broke that old pact with myself<br>To never love anyone else<br>Except for me<br>But now I see you're not unique<br>Because I'd break it again<br>When she looks at me</p><p>When I met her<br>I first broke that old pact that we share<br>To never let anyone else<br>Compare<br>But now I see you're not unique<br>I don't know where I'll be.</p><p>And they say<br>Everything has gone to waste<br>Everything we cherish fades<br>Gone away<br>And they say<br>Everything we had in this space<br>Everything we can't replace<br>Gone away</p>",
      },
      {
        id: 'getting-gone',
        slug: 'i-guess-i-better-be-getting-gone',
        bg: '000000',
        color: 'e92076',
        ui: '111820',
        title: 'I Guess I Better Be Getting Gone',
        spotters: '7JQj7KoDxOtDudRLIcGjYM',
        sc: 214779387,
        scIdx: 23,
        lyrics:
          "<p>Like waking up from a violent dream<br>With open eyes and child's scream<br>They walk out one me<br>They come to me so lonely</p><p>You never really know what to say<br>Just take their hand and you lead the way<br>They come to me so lonely<br>They come to me so lonely and still</p><p>Mama, I cut my tongue out<br>In the hope I'd never find home<br>Mama, I ripped my heart out<br>Just to feel a little love<br>Mama, I set this fire<br>So I guess I better be getting myself gone.</p><p>Mama, am I still a child in your eyes?<br>When I've touched so much<br>I know that I'm alive.</p><p><em>(Go on alone<br>and don't impart<br>The horrors that you've seen<br>Between the stars.<br>When I went down<br>I went out alone<br>I guess I better be getting myself gone.)</em></p><p><em>(Go on alone<br>without your heart<br>They've been watching me<br>Since the light turned to a spark.)</em></p>",
      },
    ],
  },
}

export const albumKeys = ['tihie', 'persuasive', 'foal', 'fox']
export const allTracks = albumKeys.map(album => albums[album].tracks).flat()

export default albums
