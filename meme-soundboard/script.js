// ============================================================================
// MEMEVAULT 50 // ULTIMATE 50-BUTTON VIRAL MEME SOUNDBOARD ENGINE
// Hybrid Web Audio API Custom Meme Synthesizer + Vocal FX + Online Audio Engine
// ============================================================================

const MEME_SOUNDS = [
  // --- CLASSIC VIRAL ---
  { id: 1, title: "VINE BOOM", desc: "Iconic 808 sub-bass shock drop", emoji: "🗿", cat: "viral", color: "#ff2a85", shake: true, preset: "vine_boom", mp3: "https://www.myinstants.com/media/sounds/vine-boom.mp3" },
  { id: 2, title: "METAL PIPE FALLING", desc: "Ear-shattering industrial steel clatter", emoji: "🔩", cat: "viral", color: "#00f5d4", shake: true, preset: "metal_pipe", mp3: "https://www.myinstants.com/media/sounds/metal-pipe-clang.mp3" },
  { id: 3, title: "BRUH", desc: "Certified Bruh Moment #2", emoji: "😑", cat: "viral", color: "#fee440", preset: "bruh", voice: "Bruh", voicePitch: 0.55, voiceRate: 0.75, mp3: "https://www.myinstants.com/media/sounds/movie_1.mp3" },
  { id: 4, title: "EMOTIONAL DAMAGE", desc: "Steven He's legendary slipper slam", emoji: "💔", cat: "viral", color: "#ff6b00", shake: true, preset: "emotional_damage", voice: "Emotional Damage!", voicePitch: 0.8, voiceRate: 0.85, mp3: "https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3" },
  { id: 5, title: "MLG AIRHORN", desc: "Triple-stacked sniper montage horn", emoji: "📢", cat: "viral", color: "#ff2a85", shake: true, preset: "airhorn", mp3: "https://www.myinstants.com/media/sounds/mlg-airhorn.mp3" },
  { id: 6, title: "TACO BELL BONG", desc: "Deep resonant midnight tubular bell", emoji: "🔔", cat: "viral", color: "#9b5de5", preset: "taco_bell", mp3: "https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3" },
  { id: 7, title: "FBI OPEN UP!", desc: "Three heavy knocks, breach & siren", emoji: "🚓", cat: "viral", color: "#00bbf9", shake: true, preset: "fbi_open_up", voice: "F B I, Open up!", voicePitch: 0.7, voiceRate: 1.15, mp3: "https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3" },
  { id: 8, title: "FART WITH EXTRA REVERB", desc: "Cinematic bass-boosted echo chamber", emoji: "💨", cat: "viral", color: "#00f566", shake: true, preset: "reverb_fart", mp3: "https://www.myinstants.com/media/sounds/dry-fart.mp3" },
  { id: 9, title: "WHAT DA DOG DOIN", desc: "The eternal philosophical question", emoji: "🐕", cat: "viral", color: "#fee440", preset: "what_da_dog", voice: "What the dog doin?", voicePitch: 0.9, voiceRate: 1.05, mp3: "https://www.myinstants.com/media/sounds/what-the-dog-doin.mp3" },
  { id: 10, title: "ANIME WOW!", desc: "Sparkly fairy chime + kawaii Wow!", emoji: "✨", cat: "viral", color: "#ff7ab8", preset: "anime_wow", voice: "Woooow!", voicePitch: 1.6, voiceRate: 0.9, mp3: "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3" },

  // --- BRAINROT & PHONK ---
  { id: 11, title: "SIGMA PHONK COWBELL", desc: "Drift phonk 808 cowbell sigma walk", emoji: "🐺", cat: "brainrot", color: "#9b5de5", shake: true, preset: "sigma_phonk", mp3: "https://www.myinstants.com/media/sounds/phonk.mp3" },
  { id: 12, title: "GIGACHAD THEME", desc: "Can You Feel My Heart synth lead", emoji: "🧔", cat: "brainrot", color: "#00f5d4", shake: true, preset: "gigachad", mp3: "https://www.myinstants.com/media/sounds/gigachad-theme.mp3" },
  { id: 13, title: "BOMBASTIC SIDE EYE", desc: "Criminal offensive side eye boom", emoji: "👀", cat: "brainrot", color: "#ff2a85", preset: "side_eye", voice: "Bombastic side eye. Criminal offensive side eye.", voicePitch: 1.25, voiceRate: 0.95 },
  { id: 14, title: "SKIBIDI DOP DOP", desc: "Viral chaotic synth bass bounce", emoji: "🚽", cat: "brainrot", color: "#fee440", preset: "skibidi", voice: "Brrr Skibidi Dop Dop Dop Yes Yes!", voicePitch: 0.9, voiceRate: 1.2 },
  { id: 15, title: "GOOFY AHH UNCLE", desc: "Sirens, boings, whistles & chaos", emoji: "🤪", cat: "brainrot", color: "#00f566", shake: true, preset: "goofy_ahh", mp3: "https://www.myinstants.com/media/sounds/goofy-ahh-sounds.mp3" },
  { id: 16, title: "BING CHILLING 🍦", desc: "Fast high-energy ice cream chime", emoji: "🍦", cat: "brainrot", color: "#00bbf9", preset: "bing_chilling", voice: "Zao shang hao zhong guo, xian zai wo you Bing Chilling!", voicePitch: 1.0, voiceRate: 1.15, mp3: "https://www.myinstants.com/media/sounds/bing-chilling_fcdH62K.mp3" },
  { id: 17, title: "OMEGA BASS DROP", desc: "Subwoofer test 1000dB nuke drop", emoji: "☢️", cat: "brainrot", color: "#ff6b00", shake: true, preset: "nuke_drop" },
  { id: 18, title: "OHIO FINAL BOSS", desc: "Dark distorted boss encounter brass", emoji: "👹", cat: "brainrot", color: "#ff2a85", shake: true, preset: "ohio_boss", voice: "Only in Ohio!", voicePitch: 0.5, voiceRate: 0.9 },

  // --- GAMING & ANIME ---
  { id: 19, title: "MEGALOVANIA RIFF", desc: "Sans Undertale iconic 10-note intro", emoji: "💀", cat: "gaming", color: "#00bbf9", preset: "megalovania", mp3: "https://www.myinstants.com/media/sounds/undertale-megalovania.mp3" },
  { id: 20, title: "AMONG US DRIP", desc: "Trap remix of the sus impostor melody", emoji: "📮", cat: "gaming", color: "#ff2a85", shake: true, preset: "among_us_drip", mp3: "https://www.myinstants.com/media/sounds/among-us-trap-remix.mp3" },
  { id: 21, title: "EMERGENCY MEETING", desc: "Among Us buzzer alarm + crew alert", emoji: "🚨", cat: "gaming", color: "#fee440", preset: "emergency_meeting", mp3: "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3" },
  { id: 22, title: "CLASH ROYALE HEHEHEHA", desc: "Laughing King emote vocal + trumpet", emoji: "👑", cat: "gaming", color: "#00f5d4", preset: "heheheha", voice: "He he he ha!", voicePitch: 0.75, voiceRate: 1.1, mp3: "https://www.myinstants.com/media/sounds/clash-royale-hog-rider.mp3" },
  { id: 23, title: "HOG RIDAAA!", desc: "High-pitched battle cry across the river", emoji: "🔨", cat: "gaming", color: "#ff6b00", shake: true, preset: "hog_rider", voice: "Hoooog Ridaaaaa!", voicePitch: 1.65, voiceRate: 0.95 },
  { id: 24, title: "ROBLOX OOF", desc: "Classic retro character elimination ugh", emoji: "🧱", cat: "gaming", color: "#fee440", preset: "roblox_oof", voice: "Oof!", voicePitch: 1.3, voiceRate: 1.3, mp3: "https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3" },
  { id: 25, title: "MINECRAFT HURT / XP", desc: "Classic hit crunch + level-up chime", emoji: "⛏️", cat: "gaming", color: "#00f566", preset: "minecraft_xp", mp3: "https://www.myinstants.com/media/sounds/minecraft-xp-sound.mp3" },
  { id: 26, title: "GTA WASTED", desc: "Slow-motion mission failed thud", emoji: "💸", cat: "gaming", color: "#ff2a85", shake: true, preset: "gta_wasted", mp3: "https://www.myinstants.com/media/sounds/gta-v-wasted-busted.mp3" },
  { id: 27, title: "GOKU DRIP INSTINCT", desc: "Single terrifying Ultra Instinct orchestra hit", emoji: "⚡", cat: "gaming", color: "#9b5de5", shake: true, preset: "goku_drip", mp3: "https://www.myinstants.com/media/sounds/ultra-instinct.mp3" },
  { id: 28, title: "OMAe WA MOU SHINDEIRU", desc: "NANI?! High-frequency anime laser screech", emoji: "🗡️", cat: "gaming", color: "#ff2a85", shake: true, preset: "nani", voice: "Omae wa mou shindeiru. Nani?!", voicePitch: 0.85, voiceRate: 1.1, mp3: "https://www.myinstants.com/media/sounds/nani_mk2.mp3" },
  { id: 29, title: "MARIO COIN & 1-UP", desc: "8-bit retro coin grab + extra life", emoji: "🍄", cat: "gaming", color: "#00f566", preset: "mario_1up" },

  // --- MEME ANTHEMS ---
  { id: 30, title: "COFFIN DANCE (ASTRONOMIA)", desc: "Ghana pallbearers EDM synth melody", emoji: "⚰️", cat: "music", color: "#00f5d4", preset: "coffin_dance", mp3: "https://www.myinstants.com/media/sounds/coffindance.mp3" },
  { id: 31, title: "RICKROLL (NEVER GONNA)", desc: "You just got Rickrolled in 8-bit synth", emoji: "🕺", cat: "music", color: "#ff6b00", preset: "rickroll", mp3: "https://www.myinstants.com/media/sounds/rick-roll.mp3" },
  { id: 32, title: "CURB YOUR ENTHUSIASM", desc: "Frolic tuba melody for instant regret", emoji: "🎺", cat: "music", color: "#fee440", preset: "curb_theme", mp3: "https://www.myinstants.com/media/sounds/curb-your-enthusiasm-tune.mp3" },
  { id: 33, title: "TO BE CONTINUED...", desc: "JoJo Roundabout acoustic bass riff", emoji: "⬅️", cat: "music", color: "#ff6b00", preset: "to_be_continued", mp3: "https://www.myinstants.com/media/sounds/untitled_1071.mp3" },
  { id: 34, title: "JOHN CENA TRUMPETS", desc: "AND HIS NAME IS JOHN CENA brass fanfare", emoji: "🎺", cat: "music", color: "#00f566", shake: true, preset: "john_cena", voice: "And his name is John Cena!", voicePitch: 0.8, voiceRate: 1.15, mp3: "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3" },
  { id: 35, title: "ILLUMINATI (X-FILES)", desc: "Eerie whistle arpeggio confirmed", emoji: "👁️", cat: "music", color: "#00f5d4", preset: "illuminati", mp3: "https://www.myinstants.com/media/sounds/x-files-theme-song-copy.mp3" },
  { id: 36, title: "SAD VIOLIN (AIRHORN)", desc: "World's smallest violin tragic melody", emoji: "🎻", cat: "music", color: "#9b5de5", preset: "sad_violin", mp3: "https://www.myinstants.com/media/sounds/tf_nemesis.mp3" },
  { id: 37, title: "NOKIA ARABIC RINGTONE", desc: "Legendary 3310 polyphonic synth lead", emoji: "📱", cat: "music", color: "#00bbf9", preset: "nokia_arabic", mp3: "https://www.myinstants.com/media/sounds/arabic-nokia.mp3" },
  { id: 38, title: "WII SPORTS THEME", desc: "Nostalgic Mii Plaza upbeat brass hook", emoji: "🎳", cat: "music", color: "#00f5d4", preset: "wii_theme" },

  // --- GOOFY & FAILS ---
  { id: 39, title: "SPONGEBOB BOOWOMP", desc: "Sad trombone slide of utter disappointment", emoji: "🧽", cat: "cartoon", color: "#fee440", preset: "boowomp", mp3: "https://www.myinstants.com/media/sounds/spongebob-fail.mp3" },
  { id: 40, title: "CARTOON SLIP & FALL", desc: "Slide whistle up + banana peel crash", emoji: "🍌", cat: "cartoon", color: "#ff6b00", preset: "cartoon_slip", mp3: "https://www.myinstants.com/media/sounds/cartoon-slip.mp3" },
  { id: 41, title: "BONK! (HORNY JAIL)", desc: "Hollow coconut head bonk impact", emoji: "🏏", cat: "cartoon", color: "#00f566", preset: "bonk", mp3: "https://www.myinstants.com/media/sounds/bonk_7zPAD7C.mp3" },
  { id: 42, title: "CARTOON BOING SPRING", desc: "Elastic jaw-harp bouncy spring", emoji: "🌀", cat: "cartoon", color: "#ff2a85", preset: "boing" },
  { id: 43, title: "CRICKETS (AWKWARD)", desc: "Dead silence after a terrible joke", emoji: "🦗", cat: "cartoon", color: "#00f566", preset: "crickets", mp3: "https://www.myinstants.com/media/sounds/crickets.mp3" },
  { id: 44, title: "BA DUM TSS!", desc: "Classic rimshot punchline drum fill", emoji: "🥁", cat: "cartoon", color: "#fee440", preset: "badumtss", mp3: "https://www.myinstants.com/media/sounds/badumtss.swf.mp3" },

  // --- ALERTS & SFX ---
  { id: 45, title: "DISCORD PING", desc: "Phantom notification that makes you check", emoji: "💬", cat: "alerts", color: "#9b5de5", preset: "discord_ping", mp3: "https://www.myinstants.com/media/sounds/discord-notification.mp3" },
  { id: 46, title: "WINDOWS XP ERROR", desc: "Nostalgic system crash chord + startup", emoji: "💻", cat: "alerts", color: "#00bbf9", preset: "win_xp", mp3: "https://www.myinstants.com/media/sounds/erro.mp3" },
  { id: 47, title: "NETFLIX TUDUM", desc: "Double anvil bass hit + cinematic swell", emoji: "🎬", cat: "alerts", color: "#ff2a85", shake: true, preset: "netflix_tudum", mp3: "https://www.myinstants.com/media/sounds/netflix-tudum-sfx-n-o-v-o.mp3" },
  { id: 48, title: "LAW & ORDER DUN-DUN", desc: "Courtroom gavel + double bassclang", emoji: "⚖️", cat: "alerts", color: "#fee440", preset: "law_order", mp3: "https://www.myinstants.com/media/sounds/law-and-order-dun-dun.mp3" },
  { id: 49, title: "DRAMATIC DUN DUN DUN!", desc: "Plot twist orchestral shock stabs", emoji: "😱", cat: "alerts", color: "#ff6b00", shake: true, preset: "dun_dun_dun", mp3: "https://www.myinstants.com/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3" },
  { id: 50, title: "IPHONE RADAR ALARM", desc: "PTSD morning wake-up chime loop", emoji: "⏰", cat: "alerts", color: "#00f5d4", preset: "iphone_radar" }
];

// ============================================================================
// WEB AUDIO API ENGINE & VISUALIZER
// ============================================================================
let audioCtx = null;
let masterGain = null;
let bassBoostFilter = null;
let reverbConvolver = null;
let dryGain = null;
let wetGain = null;
let analyser = null;

let activeNodes = [];
let activeHtmlAudios = [];
let chaosInterval = null;

const state = {
  volume: 0.9,
  pitch: 1.0,
  bassBoost: false,
  reverb: false,
  overlap: true,
  category: "all",
  search: ""
};

function initAudioEngine() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContextClass();

  masterGain = audioCtx.createGain();
  masterGain.gain.value = state.volume;

  // Bass Boost Filter (Low-shelf + distortion punch)
  bassBoostFilter = audioCtx.createBiquadFilter();
  bassBoostFilter.type = "lowshelf";
  bassBoostFilter.frequency.value = 140;
  bassBoostFilter.gain.value = state.bassBoost ? 18 : 0;

  // Reverb Impulse Generator
  reverbConvolver = audioCtx.createConvolver();
  reverbConvolver.buffer = createReverbImpulse(2.4, 2.8);

  dryGain = audioCtx.createGain();
  wetGain = audioCtx.createGain();
  dryGain.gain.value = 1.0;
  wetGain.gain.value = state.reverb ? 0.65 : 0.0;

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 128;

  // Routing: bassBoostFilter -> dry/wet -> masterGain -> analyser -> destination
  bassBoostFilter.connect(dryGain);
  bassBoostFilter.connect(reverbConvolver);
  reverbConvolver.connect(wetGain);

  dryGain.connect(masterGain);
  wetGain.connect(masterGain);
  masterGain.connect(analyser);
  analyser.connect(audioCtx.destination);
}

function createReverbImpulse(duration, decay) {
  const rate = audioCtx.sampleRate;
  const length = rate * duration;
  const impulse = audioCtx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

function createNoiseBuffer(duration = 1.0) {
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

// Helper to play a musical note with envelope
function playTone(freq, startTime, duration, type = "sawtooth", peakGain = 0.35, slideToFreq = null) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;

  const p = state.pitch * (state.reverb ? 0.85 : 1.0);
  osc.frequency.setValueAtTime(freq * p, startTime);
  if (slideToFreq) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideToFreq * p), startTime + duration);
  }

  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0008, startTime + duration);

  osc.connect(gain);
  gain.connect(bassBoostFilter);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
  activeNodes.push(osc);
}

// Helper to play percussion / noise burst
function playNoiseBurst(startTime, duration, filterFreq = 1200, filterType = "bandpass", peakGain = 0.4, q = 1.5) {
  const src = audioCtx.createBufferSource();
  src.buffer = createNoiseBuffer(duration + 0.1);

  const filter = audioCtx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.setValueAtTime(filterFreq * state.pitch, startTime);
  filter.Q.value = q;

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(peakGain, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  src.connect(filter);
  filter.connect(gain);
  gain.connect(bassBoostFilter);

  src.start(startTime);
  src.stop(startTime + duration + 0.02);
  activeNodes.push(src);
}

// Helper to play a melody sequence of [midiNote, durationSec, gapSec]
function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function playMelody(notes, type = "square", gain = 0.3) {
  const now = audioCtx.currentTime;
  let t = now;
  const speed = 1 / state.pitch;
  for (const [midi, dur, gap = 0.02] of notes) {
    if (midi > 0) {
      playTone(midiToFreq(midi), t, dur * speed, type, gain);
    }
    t += (dur + gap) * speed;
  }
}

// ============================================================================
// 50 BESPOKE PROCEDURAL MEME SOUND SYNTHESIZERS
// Guarantees instant, hilarious, unmistakable audio for every single button!
// ============================================================================
function triggerSynthPreset(meme) {
  initAudioEngine();
  const now = audioCtx.currentTime;
  const p = meme.preset;

  switch (p) {
    case "vine_boom": {
      // Iconic sub-bass 808 impact + low distortion punch
      playTone(135, now, 1.35, "sine", 0.95, 26);
      playTone(95, now, 0.9, "triangle", 0.65, 22);
      playNoiseBurst(now, 0.12, 300, "lowpass", 0.5);
      break;
    }
    case "metal_pipe": {
      // Inharmonic metallic pipe resonances clanging repeatedly
      const pipeFreqs = [587, 880, 1318, 1760, 2489, 3135, 3951];
      const hits = [0, 0.18, 0.31, 0.52, 0.68];
      hits.forEach((offset, idx) => {
        const decay = 1.2 - idx * 0.15;
        pipeFreqs.forEach((f, i) => {
          playTone(f * (1 + (i % 2) * 0.03), now + offset, decay, "sine", 0.22 / (i + 1));
        });
        playNoiseBurst(now + offset, 0.08, 2800, "bandpass", 0.45, 6);
      });
      break;
    }
    case "bruh": {
      playTone(150, now, 0.55, "sawtooth", 0.35, 95);
      playTone(300, now, 0.55, "triangle", 0.25, 180);
      break;
    }
    case "emotional_damage": {
      // Dramatic low impact hit + vocal
      playTone(110, now, 0.7, "sawtooth", 0.6, 35);
      playNoiseBurst(now, 0.2, 800, "lowpass", 0.6);
      break;
    }
    case "airhorn": {
      // Triple MLG horn blast!
      const blasts = [0, 0.16, 0.32, 0.52];
      const durs = [0.12, 0.12, 0.15, 0.65];
      blasts.forEach((b, i) => {
        playTone(466.16, now + b, durs[i], "sawtooth", 0.35);
        playTone(698.46, now + b, durs[i], "sawtooth", 0.35);
        playTone(932.33, now + b, durs[i], "sawtooth", 0.28);
      });
      break;
    }
    case "taco_bell": {
      // FM Tubular bell chord
      const bellFreqs = [220, 440, 659.25, 880, 1174.66];
      bellFreqs.forEach((f, i) => {
        playTone(f, now, 2.2 - i * 0.25, i % 2 === 0 ? "sine" : "triangle", 0.35 / (i + 1));
      });
      break;
    }
    case "fbi_open_up": {
      // 3 heavy door slams + glass crash + police siren
      [0, 0.22, 0.44].forEach(t => {
        playTone(120, now + t, 0.15, "sine", 0.85, 30);
        playNoiseBurst(now + t, 0.12, 400, "lowpass", 0.7);
      });
      playNoiseBurst(now + 0.75, 0.5, 2200, "highpass", 0.6);
      playTone(650, now + 0.75, 0.45, "sawtooth", 0.3, 1200);
      playTone(1200, now + 1.2, 0.45, "sawtooth", 0.3, 650);
      break;
    }
    case "reverb_fart": {
      // Low squelchy FM flutter + massive reverb tail
      for (let i = 0; i < 16; i++) {
        playTone(65 + (i % 4) * 18, now + i * 0.035, 0.08, "sawtooth", 0.55, 42);
      }
      playNoiseBurst(now, 0.65, 260, "bandpass", 0.65, 3.5);
      break;
    }
    case "what_da_dog": {
      playMelody([[60, 0.12], [63, 0.12], [65, 0.12], [66, 0.25]], "triangle", 0.35);
      break;
    }
    case "anime_wow": {
      // Shimmering harp arpeggio
      const arp = [72, 76, 79, 84, 88, 91, 96];
      arp.forEach((m, i) => {
        playTone(midiToFreq(m), now + i * 0.055, 0.6, "sine", 0.25);
      });
      break;
    }
    case "sigma_phonk": {
      // Drift Phonk 808 Cowbell Riff
      const cowbellNotes = [
        [66, 0.14], [66, 0.14], [69, 0.14], [66, 0.14],
        [71, 0.14], [69, 0.14], [66, 0.14], [64, 0.18]
      ];
      let t = now;
      cowbellNotes.forEach(([m, d]) => {
        const f = midiToFreq(m);
        playTone(f, t, d, "square", 0.32);
        playTone(f * 1.48, t, d, "square", 0.22);
        playTone(55, t, d * 0.9, "sine", 0.55, 35); // 808 kick underneath
        t += d + 0.02;
      });
      break;
    }
    case "gigachad": {
      // Can You Feel My Heart synth lead
      playMelody([
        [76, 0.22], [74, 0.22], [72, 0.22], [71, 0.22],
        [69, 0.45], [64, 0.22], [69, 0.45]
      ], "sawtooth", 0.35);
      break;
    }
    case "side_eye": {
      playTone(130, now + 0.3, 0.9, "sine", 0.85, 28);
      break;
    }
    case "skibidi": {
      playMelody([
        [60, 0.14], [60, 0.14], [63, 0.14], [60, 0.14],
        [67, 0.2], [65, 0.2], [63, 0.25]
      ], "sawtooth", 0.35);
      break;
    }
    case "goofy_ahh": {
      // Siren + slide whistle + boing + honk combo
      playTone(400, now, 0.25, "sine", 0.4, 1400);
      playTone(1400, now + 0.25, 0.25, "sine", 0.4, 300);
      playTone(180, now + 0.5, 0.35, "sawtooth", 0.4, 520);
      playTone(300, now + 0.85, 0.15, "square", 0.4, 150);
      playTone(850, now + 1.0, 0.3, "triangle", 0.45, 220);
      break;
    }
    case "bing_chilling": {
      playMelody([[72, 0.12], [76, 0.12], [79, 0.12], [84, 0.3]], "triangle", 0.3);
      break;
    }
    case "nuke_drop": {
      // Massive distorted bass sweep
      playTone(190, now, 1.8, "sawtooth", 0.75, 20);
      playTone(140, now, 1.8, "sine", 0.95, 18);
      playNoiseBurst(now, 1.5, 500, "lowpass", 0.7);
      break;
    }
    case "ohio_boss": {
      playTone(73.42, now, 1.1, "sawtooth", 0.55);
      playTone(77.78, now, 1.1, "sawtooth", 0.55); // Dissonant minor 2nd brass
      playTone(36.71, now, 1.2, "sine", 0.8);
      break;
    }
    case "megalovania": {
      // D4 D4 D5 A4 Ab4 G4 F4 D4 F4 G4
      playMelody([
        [62, 0.11, 0.02], [62, 0.11, 0.02], [74, 0.22, 0.03], [69, 0.32, 0.04],
        [68, 0.22, 0.03], [67, 0.22, 0.03], [65, 0.22, 0.02], [62, 0.11, 0.02],
        [65, 0.11, 0.02], [67, 0.15, 0.02]
      ], "square", 0.32);
      break;
    }
    case "among_us_drip": {
      // C5 Eb5 F5 F#5 F5 Eb5 C5 ... Bb4 D5 C5
      playMelody([
        [72, 0.18], [75, 0.18], [77, 0.18], [78, 0.18],
        [77, 0.18], [75, 0.18], [72, 0.35],
        [70, 0.12], [74, 0.12], [72, 0.4]
      ], "sawtooth", 0.34);
      playTone(90, now, 0.6, "sine", 0.7, 30);
      break;
    }
    case "emergency_meeting": {
      // Alarm klaxon pulses
      [0, 0.28, 0.56].forEach(t => {
        playTone(523.25, now + t, 0.2, "sawtooth", 0.42);
        playTone(740.0, now + t, 0.2, "square", 0.38);
      });
      break;
    }
    case "heheheha": {
      playMelody([[67, 0.1], [71, 0.1], [74, 0.1], [79, 0.25]], "sawtooth", 0.3);
      break;
    }
    case "hog_rider": {
      playTone(440, now, 0.6, "sawtooth", 0.3, 880);
      break;
    }
    case "roblox_oof": {
      playTone(320, now, 0.25, "sawtooth", 0.45, 175);
      break;
    }
    case "minecraft_xp": {
      [76, 79, 83, 88, 91].forEach((m, i) => {
        playTone(midiToFreq(m), now + i * 0.05, 0.3, "sine", 0.3);
      });
      break;
    }
    case "gta_wasted": {
      // Heavy low boom + metallic camera shutter slow-down
      playTone(110, now, 1.3, "sine", 0.9, 25);
      playNoiseBurst(now, 0.15, 1800, "bandpass", 0.6, 2);
      playTone(220, now + 0.4, 0.8, "triangle", 0.4, 55);
      break;
    }
    case "goku_drip": {
      // Single shocking orchestral trumpet/violin stab
      [55, 67, 74, 79, 86].forEach(m => {
        playTone(midiToFreq(m), now, 0.85, "sawtooth", 0.28);
      });
      playNoiseBurst(now, 0.2, 1200, "bandpass", 0.45);
      break;
    }
    case "nani": {
      // High-pitched anime tension screech + explosion
      playTone(1400, now + 0.5, 0.65, "sawtooth", 0.35, 3200);
      playTone(120, now + 0.9, 0.7, "sine", 0.85, 25);
      break;
    }
    case "mario_1up": {
      // Coin (B5 -> E6) + 1-Up melody (E6 G6 E7 C7 D7 G7)
      playMelody([
        [76, 0.1], [79, 0.1], [88, 0.1], [84, 0.1], [86, 0.1], [91, 0.22]
      ], "square", 0.3);
      break;
    }
    case "coffin_dance": {
      // Astronomia lead hook
      playMelody([
        [65, 0.18], [65, 0.18], [72, 0.18], [70, 0.18],
        [69, 0.18], [67, 0.18], [67, 0.18], [70, 0.18],
        [69, 0.18], [67, 0.18], [65, 0.25]
      ], "sawtooth", 0.32);
      break;
    }
    case "rickroll": {
      // Never Gonna Give You Up chorus notes
      playMelody([
        [62, 0.12], [64, 0.12], [67, 0.12], [64, 0.12],
        [71, 0.28], [71, 0.28], [69, 0.42]
      ], "sawtooth", 0.32);
      break;
    }
    case "curb_theme": {
      // Frolic tuba melody
      playMelody([
        [71, 0.16], [70, 0.16], [69, 0.16], [67, 0.2],
        [66, 0.2], [67, 0.2], [64, 0.35]
      ], "triangle", 0.42);
      break;
    }
    case "to_be_continued": {
      // JoJo Roundabout bass slide & riff
      playMelody([
        [52, 0.15], [54, 0.15], [55, 0.15], [57, 0.2],
        [59, 0.2], [57, 0.15], [55, 0.15], [52, 0.35]
      ], "sawtooth", 0.38);
      break;
    }
    case "john_cena": {
      // G4 A4 F4 G4 ... Bb4 A4 F4 G4
      playMelody([
        [67, 0.18], [69, 0.14], [65, 0.18], [67, 0.45],
        [70, 0.18], [69, 0.14], [65, 0.18], [67, 0.45]
      ], "sawtooth", 0.38);
      break;
    }
    case "illuminati": {
      // X-Files eerie whistle theme (A4 E5 D5 E5 G5 E5)
      playMelody([
        [69, 0.22], [76, 0.22], [74, 0.22], [76, 0.22], [79, 0.22], [76, 0.5]
      ], "sine", 0.38);
      break;
    }
    case "sad_violin": {
      playMelody([
        [74, 0.35], [72, 0.35], [70, 0.35], [69, 0.65]
      ], "sawtooth", 0.28);
      break;
    }
    case "nokia_arabic": {
      playMelody([
        [76, 0.12], [74, 0.12], [66, 0.22], [68, 0.22],
        [73, 0.12], [71, 0.12], [62, 0.22], [64, 0.22],
        [71, 0.12], [69, 0.12], [61, 0.22], [64, 0.22], [69, 0.4]
      ], "square", 0.3);
      break;
    }
    case "wii_theme": {
      playMelody([
        [66, 0.18], [69, 0.18], [73, 0.22], [69, 0.18],
        [66, 0.18], [62, 0.14], [62, 0.14], [62, 0.25]
      ], "triangle", 0.36);
      break;
    }
    case "boowomp": {
      // Spongebob sad slide down
      playTone(360, now, 0.55, "triangle", 0.55, 85);
      playTone(180, now, 0.55, "sine", 0.5, 45);
      break;
    }
    case "cartoon_slip": {
      // Fast slide whistle up + crash
      playTone(300, now, 0.32, "sine", 0.45, 1900);
      playNoiseBurst(now + 0.32, 0.35, 900, "bandpass", 0.65);
      playTone(140, now + 0.32, 0.35, "triangle", 0.6, 40);
      break;
    }
    case "bonk": {
      // Hollow wooden coconut knock
      playTone(480, now, 0.11, "sine", 0.7, 720);
      playTone(960, now, 0.08, "triangle", 0.35, 600);
      break;
    }
    case "boing": {
      for (let i = 0; i < 8; i++) {
        playTone(160 + i * 55, now + i * 0.05, 0.08, "sawtooth", 0.35, 320);
      }
      break;
    }
    case "crickets": {
      // High frequency chirps
      [0, 0.45, 0.9].forEach(b => {
        for (let i = 0; i < 4; i++) {
          playTone(4200, now + b + i * 0.045, 0.03, "sine", 0.22);
        }
      });
      break;
    }
    case "badumtss": {
      // Tom 1 -> Tom 2 -> Cymbal splash
      playTone(145, now, 0.16, "sine", 0.65, 90);
      playTone(110, now + 0.18, 0.22, "sine", 0.65, 65);
      playNoiseBurst(now + 0.42, 0.65, 4500, "highpass", 0.5);
      break;
    }
    case "discord_ping": {
      // Exact two-tone Discord notification chime
      playTone(783.99, now, 0.11, "sine", 0.42);
      playTone(1046.50, now + 0.09, 0.28, "sine", 0.42);
      break;
    }
    case "win_xp": {
      // Windows XP Error chord
      [58, 65, 70, 74].forEach(m => {
        playTone(midiToFreq(m), now, 0.45, "sawtooth", 0.25);
      });
      break;
    }
    case "netflix_tudum": {
      // Two deep anvil hits + rising chord swell
      playTone(95, now, 0.25, "sine", 0.85, 45);
      playTone(130, now + 0.22, 0.35, "sine", 0.85, 55);
      [62, 69, 74, 78].forEach(m => {
        playTone(midiToFreq(m), now + 0.45, 1.1, "sawtooth", 0.22);
      });
      break;
    }
    case "law_order": {
      // Classic Dun-Dun
      playTone(110, now, 0.22, "triangle", 0.75, 65);
      playNoiseBurst(now, 0.08, 1200, "bandpass", 0.4);
      playTone(98, now + 0.28, 0.45, "triangle", 0.75, 55);
      playNoiseBurst(now + 0.28, 0.1, 1000, "bandpass", 0.4);
      break;
    }
    case "dun_dun_dun": {
      // Dramatic 3 orchestral minor stabs
      const chords = [
        [0, [60, 63, 67]],
        [0.32, [59, 62, 67]],
        [0.64, [56, 60, 63]]
      ];
      chords.forEach(([t, notes], idx) => {
        const d = idx === 2 ? 0.85 : 0.26;
        notes.forEach(m => playTone(midiToFreq(m), now + t, d, "sawtooth", 0.28));
      });
      break;
    }
    case "iphone_radar": {
      // Rapid alarm marimba pattern
      const notes = [73, 76, 80, 85, 73, 76, 80, 85];
      notes.forEach((m, i) => {
        playTone(midiToFreq(m), now + i * 0.11, 0.1, "sine", 0.38);
      });
      break;
    }
  }

  // Trigger optional vocal catchphrase via Web Speech API
  if (meme.voice && "speechSynthesis" in window) {
    try {
      if (!state.overlap) window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(meme.voice);
      utter.pitch = Math.min(2, Math.max(0.1, (meme.voicePitch || 1.0) * state.pitch));
      utter.rate = Math.min(2.5, Math.max(0.4, (meme.voiceRate || 1.0) * state.pitch));
      utter.volume = state.volume;
      window.speechSynthesis.speak(utter);
    } catch (e) {}
  }

  // Optional online MP3 layer (plays alongside if reachable, silent fallback if offline/CORS)
  if (meme.mp3) {
    try {
      const audio = new Audio(meme.mp3);
      audio.volume = Math.min(1, state.volume * 0.85);
      audio.playbackRate = state.pitch;
      activeHtmlAudios.push(audio);
      audio.play().catch(() => {});
    } catch (e) {}
  }
}

// ============================================================================
// UI INTERACTION, PARTICLES & VISUALIZER LOOP
// ============================================================================
function stopAllSounds() {
  if (chaosInterval) {
    clearInterval(chaosInterval);
    chaosInterval = null;
  }
  activeNodes.forEach(node => {
    try { node.stop(); } catch (e) {}
  });
  activeNodes = [];

  activeHtmlAudios.forEach(a => {
    try {
      a.pause();
      a.currentTime = 0;
    } catch (e) {}
  });
  activeHtmlAudios = [];

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  document.querySelectorAll(".meme-pad.is-playing").forEach(el => {
    el.classList.remove("is-playing");
  });
  document.getElementById("nowPlayingText").textContent = "ALL SOUNDS SILENCED 🛑";
}

function spawnParticles(x, y, emoji) {
  const layer = document.getElementById("particleLayer");
  const count = 7;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "meme-particle";
    span.textContent = emoji;
    const dx = (Math.random() - 0.5) * 220;
    const dy = -70 - Math.random() * 140;
    const rot = (Math.random() - 0.5) * 90;
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.style.setProperty("--dx", `${dx}px`);
    span.style.setProperty("--dy", `${dy}px`);
    span.style.setProperty("--rot", `${rot}deg`);
    layer.appendChild(span);
    setTimeout(() => span.remove(), 1100);
  }
}

function playMeme(meme, padElement, event) {
  if (!state.overlap) {
    stopAllSounds();
  }

  triggerSynthPreset(meme);

  // Update Now Playing banner
  document.getElementById("nowPlayingText").textContent = `${meme.emoji} #${meme.id} ${meme.title}`;

  // Pad active glow animation
  if (padElement) {
    padElement.classList.add("is-playing");
    setTimeout(() => padElement.classList.remove("is-playing"), 950);

    const rect = padElement.getBoundingClientRect();
    const cx = event && event.clientX ? event.clientX : rect.left + rect.width / 2;
    const cy = event && event.clientY ? event.clientY : rect.top + rect.height / 2;
    spawnParticles(cx, cy, meme.emoji);
  }

  // Screen shake for heavy bass / nuke / vine boom / metal pipe memes
  if (meme.shake || state.bassBoost) {
    document.body.classList.remove("screen-shake");
    void document.body.offsetWidth;
    document.body.classList.add("screen-shake");
  }
}

function renderSoundboard() {
  const grid = document.getElementById("soundboardGrid");
  grid.innerHTML = "";

  const filtered = MEME_SOUNDS.filter(m => {
    const matchesCat = state.category === "all" || m.cat === state.category;
    const q = state.search.trim().toLowerCase();
    const matchesSearch = !q || m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) || m.cat.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  filtered.forEach(meme => {
    const btn = document.createElement("button");
    btn.className = "meme-pad";
    btn.dataset.id = meme.id;
    btn.style.setProperty("--pad-color", meme.color);
    btn.style.setProperty("--pad-glow", `${meme.color}44`);

    btn.innerHTML = `
      <div class="pad-top">
        <span class="pad-num">#${String(meme.id).padStart(2, "0")}</span>
        <span class="pad-emoji">${meme.emoji}</span>
      </div>
      <div class="pad-body">
        <div class="pad-title">${meme.title}</div>
        <div class="pad-desc">${meme.desc}</div>
      </div>
      <div class="pad-footer">
        <span class="pad-tag">${meme.cat}</span>
        <div class="pad-wave" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    `;

    btn.addEventListener("click", (e) => playMeme(meme, btn, e));
    grid.appendChild(btn);
  });
}

// ============================================================================
// REAL-TIME SPECTRUM VISUALIZER CANVAS
// ============================================================================
function startVisualizer() {
  const canvas = document.getElementById("audioCanvas");
  const ctx = canvas.getContext("2d");

  function draw() {
    requestAnimationFrame(draw);
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const barCount = 32;
    const barWidth = (w / barCount) - 3;
    let dataArray = null;

    if (analyser) {
      dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);
    }

    for (let i = 0; i < barCount; i++) {
      const val = dataArray ? dataArray[i] : 8;
      const pct = Math.max(0.08, val / 255);
      const barHeight = pct * (h - 8);
      const x = i * (barWidth + 3);
      const y = h - barHeight;

      const grad = ctx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, "#00f5d4");
      grad.addColorStop(0.55, "#fee440");
      grad.addColorStop(1, "#ff2a85");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 3);
      ctx.fill();
    }
  }
  draw();
}

// ============================================================================
// INITIALIZE CONTROLS & LISTENERS
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderSoundboard();
  startVisualizer();

  // Random Meme Button
  document.getElementById("randomBtn").addEventListener("click", () => {
    const randomMeme = MEME_SOUNDS[Math.floor(Math.random() * MEME_SOUNDS.length)];
    const padEl = document.querySelector(`.meme-pad[data-id="${randomMeme.id}"]`);
    playMeme(randomMeme, padEl);
  });

  // Chaos Barrage Button (Fires 8 rapid viral memes!)
  document.getElementById("chaosBtn").addEventListener("click", () => {
    if (chaosInterval) {
      clearInterval(chaosInterval);
      chaosInterval = null;
    }
    let count = 0;
    chaosInterval = setInterval(() => {
      const randomMeme = MEME_SOUNDS[Math.floor(Math.random() * MEME_SOUNDS.length)];
      const padEl = document.querySelector(`.meme-pad[data-id="${randomMeme.id}"]`);
      playMeme(randomMeme, padEl);
      count++;
      if (count >= 10) {
        clearInterval(chaosInterval);
        chaosInterval = null;
      }
    }, 180);
  });

  // Stop All Button
  document.getElementById("stopAllBtn").addEventListener("click", stopAllSounds);

  // Volume Slider
  const volSlider = document.getElementById("masterVolume");
  const volVal = document.getElementById("volVal");
  volSlider.addEventListener("input", (e) => {
    state.volume = Number(e.target.value) / 100;
    volVal.textContent = `${e.target.value}%`;
    if (masterGain) masterGain.gain.value = state.volume;
  });

  // Pitch / Speed Slider
  const pitchSlider = document.getElementById("pitchSlider");
  const pitchVal = document.getElementById("pitchVal");
  pitchSlider.addEventListener("input", (e) => {
    state.pitch = Number(e.target.value);
    pitchVal.textContent = `${state.pitch.toFixed(2)}x`;
  });

  // Bass Boost Toggle
  const bassBtn = document.getElementById("bassBoostBtn");
  bassBtn.addEventListener("click", () => {
    state.bassBoost = !state.bassBoost;
    bassBtn.classList.toggle("active", state.bassBoost);
    bassBtn.setAttribute("aria-pressed", state.bassBoost);
    if (bassBoostFilter) {
      bassBoostFilter.gain.value = state.bassBoost ? 18 : 0;
    }
  });

  // Slowed + Reverb Toggle
  const revBtn = document.getElementById("reverbBtn");
  revBtn.addEventListener("click", () => {
    state.reverb = !state.reverb;
    revBtn.classList.toggle("active", state.reverb);
    revBtn.setAttribute("aria-pressed", state.reverb);
    if (wetGain) {
      wetGain.gain.value = state.reverb ? 0.65 : 0.0;
    }
  });

  // Overlap Toggle
  const overlapBtn = document.getElementById("overlapBtn");
  overlapBtn.addEventListener("click", () => {
    state.overlap = !state.overlap;
    overlapBtn.classList.toggle("active", state.overlap);
    overlapBtn.setAttribute("aria-pressed", state.overlap);
  });

  // Category Tabs
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.category = tab.dataset.cat;
      renderSoundboard();
    });
  });

  // Search Input
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    clearBtn.style.display = state.search ? "block" : "none";
    renderSoundboard();
  });
  clearBtn.addEventListener("click", () => {
    state.search = "";
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderSoundboard();
  });

  // Keyboard Shortcuts (Space = Random, Esc = Stop All)
  window.addEventListener("keydown", (e) => {
    if (document.activeElement === searchInput) return;
    if (e.code === "Space") {
      e.preventDefault();
      document.getElementById("randomBtn").click();
    } else if (e.code === "Escape") {
      stopAllSounds();
    }
  });
});
