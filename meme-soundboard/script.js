// ============================================================================
// MEMEVAULT 50 // ULTIMATE 50-BUTTON VIRAL MEME MP3 SOUNDBOARD ENGINE
// Pure Original Meme MP3 Playback (No Text-to-Speech or Synth Overlays)
// ============================================================================

const MEME_SOUNDS = [
  // --- CLASSIC VIRAL ---
  { id: 1, title: "VINE BOOM", desc: "Iconic 808 sub-bass shock drop", emoji: "🗿", cat: "viral", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/vine-boom.mp3" },
  { id: 2, title: "METAL PIPE FALLING", desc: "Ear-shattering industrial steel clatter", emoji: "🔩", cat: "viral", color: "#00f5d4", shake: true, mp3: "https://www.myinstants.com/media/sounds/metal-pipe-clang.mp3" },
  { id: 3, title: "BRUH", desc: "Certified Bruh Moment #2", emoji: "😑", cat: "viral", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/movie_1.mp3" },
  { id: 4, title: "EMOTIONAL DAMAGE", desc: "Steven He's legendary slipper slam", emoji: "💔", cat: "viral", color: "#ff6b00", shake: true, mp3: "https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3" },
  { id: 5, title: "MLG AIRHORN", desc: "Triple-stacked sniper montage horn", emoji: "📢", cat: "viral", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/mlg-airhorn.mp3" },
  { id: 6, title: "TACO BELL BONG", desc: "Deep resonant midnight tubular bell", emoji: "🔔", cat: "viral", color: "#9b5de5", mp3: "https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3" },
  { id: 7, title: "FBI OPEN UP!", desc: "Three heavy knocks, breach & siren", emoji: "🚓", cat: "viral", color: "#00bbf9", shake: true, mp3: "https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3" },
  { id: 8, title: "FART WITH EXTRA REVERB", desc: "Cinematic bass-boosted echo chamber", emoji: "💨", cat: "viral", color: "#00f566", shake: true, mp3: "https://www.myinstants.com/media/sounds/dry-fart.mp3" },
  { id: 9, title: "WHAT DA DOG DOIN", desc: "The eternal philosophical question", emoji: "🐕", cat: "viral", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/what-the-dog-doin.mp3" },
  { id: 10, title: "ANIME WOW!", desc: "Sparkly fairy chime + kawaii Wow!", emoji: "✨", cat: "viral", color: "#ff7ab8", mp3: "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3" },

  // --- BRAINROT & PHONK ---
  { id: 11, title: "SIGMA PHONK COWBELL", desc: "Drift phonk 808 cowbell sigma walk", emoji: "🐺", cat: "brainrot", color: "#9b5de5", shake: true, mp3: "https://www.myinstants.com/media/sounds/phonk.mp3" },
  { id: 12, title: "GIGACHAD THEME", desc: "Can You Feel My Heart synth lead", emoji: "🧔", cat: "brainrot", color: "#00f5d4", shake: true, mp3: "https://www.myinstants.com/media/sounds/gigachad-theme.mp3" },
  { id: 13, title: "BOMBASTIC SIDE EYE", desc: "Criminal offensive side eye audio", emoji: "👀", cat: "brainrot", color: "#ff2a85", mp3: "https://www.myinstants.com/media/sounds/bombastic-side-eye.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/vine-boom.mp3" },
  { id: 14, title: "SKIBIDI DOP DOP", desc: "Viral chaotic Skibidi anthem", emoji: "🚽", cat: "brainrot", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/skibidi-toilet.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/brr-skibidi-dop-dop-dop-yes-yes-yes.mp3" },
  { id: 15, title: "GOOFY AHH UNCLE", desc: "Sirens, boings, whistles & chaos", emoji: "🤪", cat: "brainrot", color: "#00f566", shake: true, mp3: "https://www.myinstants.com/media/sounds/goofy-ahh-sounds.mp3" },
  { id: 16, title: "BING CHILLING 🍦", desc: "John Cena ice cream classic", emoji: "🍦", cat: "brainrot", color: "#00bbf9", mp3: "https://www.myinstants.com/media/sounds/bing-chilling_fcdH62K.mp3" },
  { id: 17, title: "OMEGA BASS DROP", desc: "Subwoofer test 1000dB nuke drop", emoji: "☢️", cat: "brainrot", color: "#ff6b00", shake: true, mp3: "https://www.myinstants.com/media/sounds/bass-drop.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/vine-boom.mp3" },
  { id: 18, title: "UNSPOKEN RIZZ", desc: "Sin City lightskin stare rizz sound", emoji: "😏", cat: "brainrot", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/rizz-sound-effect.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/vine-boom.mp3" },

  // --- GAMING & ANIME ---
  { id: 19, title: "MEGALOVANIA RIFF", desc: "Sans Undertale iconic intro", emoji: "💀", cat: "gaming", color: "#00bbf9", mp3: "https://www.myinstants.com/media/sounds/undertale-megalovania.mp3" },
  { id: 20, title: "AMONG US DRIP", desc: "Trap remix of the sus impostor melody", emoji: "📮", cat: "gaming", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/among-us-trap-remix.mp3" },
  { id: 21, title: "EMERGENCY MEETING", desc: "Among Us role reveal & buzzer alert", emoji: "🚨", cat: "gaming", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3" },
  { id: 22, title: "CLASH ROYALE HEHEHEHA", desc: "Laughing King emote original audio", emoji: "👑", cat: "gaming", color: "#00f5d4", mp3: "https://www.myinstants.com/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/clash-royale-hog-rider.mp3" },
  { id: 23, title: "HOG RIDAAA!", desc: "High-pitched battle cry across the river", emoji: "🔨", cat: "gaming", color: "#ff6b00", shake: true, mp3: "https://www.myinstants.com/media/sounds/clash-royale-hog-rider.mp3" },
  { id: 24, title: "ROBLOX OOF", desc: "Classic retro character elimination ugh", emoji: "🧱", cat: "gaming", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3" },
  { id: 25, title: "MINECRAFT XP", desc: "Classic level-up orb chime", emoji: "⛏️", cat: "gaming", color: "#00f566", mp3: "https://www.myinstants.com/media/sounds/minecraft-xp-sound.mp3" },
  { id: 26, title: "GTA WASTED", desc: "Slow-motion mission failed thud", emoji: "💸", cat: "gaming", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/gta-v-wasted-busted.mp3" },
  { id: 27, title: "GOKU DRIP INSTINCT", desc: "Single terrifying Ultra Instinct orchestra hit", emoji: "⚡", cat: "gaming", color: "#9b5de5", shake: true, mp3: "https://www.myinstants.com/media/sounds/ultra-instinct.mp3" },
  { id: 28, title: "OMAE WA MOU SHINDEIRU", desc: "NANI?! High-frequency anime laser screech", emoji: "🗡️", cat: "gaming", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/nani_mk2.mp3" },
  { id: 29, title: "MARIO COIN & 1-UP", desc: "8-bit retro Super Mario extra life", emoji: "🍄", cat: "gaming", color: "#00f566", mp3: "https://www.myinstants.com/media/sounds/mario-1-up.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/coin.mp3" },

  // --- MEME ANTHEMS ---
  { id: 30, title: "COFFIN DANCE (ASTRONOMIA)", desc: "Ghana pallbearers EDM synth melody", emoji: "⚰️", cat: "music", color: "#00f5d4", mp3: "https://www.myinstants.com/media/sounds/coffindance.mp3" },
  { id: 31, title: "RICKROLL (NEVER GONNA)", desc: "You just got Rickrolled", emoji: "🕺", cat: "music", color: "#ff6b00", mp3: "https://www.myinstants.com/media/sounds/rick-roll.mp3" },
  { id: 32, title: "CURB YOUR ENTHUSIASM", desc: "Frolic tuba melody for instant regret", emoji: "🎺", cat: "music", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/curb-your-enthusiasm-tune.mp3" },
  { id: 33, title: "TO BE CONTINUED...", desc: "JoJo Roundabout acoustic guitar riff", emoji: "⬅️", cat: "music", color: "#ff6b00", mp3: "https://www.myinstants.com/media/sounds/untitled_1071.mp3" },
  { id: 34, title: "JOHN CENA TRUMPETS", desc: "AND HIS NAME IS JOHN CENA brass fanfare", emoji: "🎺", cat: "music", color: "#00f566", shake: true, mp3: "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3" },
  { id: 35, title: "ILLUMINATI (X-FILES)", desc: "Eerie whistle arpeggio confirmed", emoji: "👁️", cat: "music", color: "#00f5d4", mp3: "https://www.myinstants.com/media/sounds/x-files-theme-song-copy.mp3" },
  { id: 36, title: "SAD VIOLIN", desc: "World's smallest violin tragic melody", emoji: "🎻", cat: "music", color: "#9b5de5", mp3: "https://www.myinstants.com/media/sounds/tf_nemesis.mp3" },
  { id: 37, title: "NOKIA ARABIC RINGTONE", desc: "Legendary 3310 polyphonic ringtone", emoji: "📱", cat: "music", color: "#00bbf9", mp3: "https://www.myinstants.com/media/sounds/arabic-nokia.mp3" },
  { id: 38, title: "WII MII CHANNEL THEME", desc: "Nostalgic Mii Plaza upbeat hook", emoji: "🎳", cat: "music", color: "#00f5d4", mp3: "https://www.myinstants.com/media/sounds/mii-channel-music.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/curb-your-enthusiasm-tune.mp3" },

  // --- GOOFY & FAILS ---
  { id: 39, title: "SPONGEBOB BOOWOMP", desc: "Sad trombone slide of utter disappointment", emoji: "🧽", cat: "cartoon", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/spongebob-fail.mp3" },
  { id: 40, title: "CARTOON SLIP & FALL", desc: "Slide whistle up + banana peel crash", emoji: "🍌", cat: "cartoon", color: "#ff6b00", mp3: "https://www.myinstants.com/media/sounds/cartoon-slip.mp3" },
  { id: 41, title: "BONK! (HORNY JAIL)", desc: "Hollow coconut head bonk impact", emoji: "🏏", cat: "cartoon", color: "#00f566", mp3: "https://www.myinstants.com/media/sounds/bonk_7zPAD7C.mp3" },
  { id: 42, title: "CARTOON BOING SPRING", desc: "Elastic bouncy cartoon spring", emoji: "🌀", cat: "cartoon", color: "#ff2a85", mp3: "https://www.myinstants.com/media/sounds/boing_1.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/cartoon-slip.mp3" },
  { id: 43, title: "CRICKETS (AWKWARD)", desc: "Dead silence after a terrible joke", emoji: "🦗", cat: "cartoon", color: "#00f566", mp3: "https://www.myinstants.com/media/sounds/crickets.mp3" },
  { id: 44, title: "BA DUM TSS!", desc: "Classic rimshot punchline drum fill", emoji: "🥁", cat: "cartoon", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/badumtss.swf.mp3" },

  // --- ALERTS & SFX ---
  { id: 45, title: "DISCORD PING", desc: "Phantom notification that makes you check", emoji: "💬", cat: "alerts", color: "#9b5de5", mp3: "https://www.myinstants.com/media/sounds/discord-notification.mp3" },
  { id: 46, title: "WINDOWS XP ERROR", desc: "Nostalgic system crash chord", emoji: "💻", cat: "alerts", color: "#00bbf9", mp3: "https://www.myinstants.com/media/sounds/erro.mp3" },
  { id: 47, title: "NETFLIX TUDUM", desc: "Double anvil bass hit + cinematic swell", emoji: "🎬", cat: "alerts", color: "#ff2a85", shake: true, mp3: "https://www.myinstants.com/media/sounds/netflix-tudum-sfx-n-o-v-o.mp3" },
  { id: 48, title: "LAW & ORDER DUN-DUN", desc: "Courtroom gavel + double bass clang", emoji: "⚖️", cat: "alerts", color: "#fee440", mp3: "https://www.myinstants.com/media/sounds/law-and-order-dun-dun.mp3" },
  { id: 49, title: "DRAMATIC DUN DUN DUN!", desc: "Plot twist orchestral shock stabs", emoji: "😱", cat: "alerts", color: "#ff6b00", shake: true, mp3: "https://www.myinstants.com/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3" },
  { id: 50, title: "IPHONE RADAR ALARM", desc: "PTSD morning wake-up chime loop", emoji: "⏰", cat: "alerts", color: "#00f5d4", mp3: "https://www.myinstants.com/media/sounds/iphone-alarm.mp3", fallbackMp3: "https://www.myinstants.com/media/sounds/discord-notification.mp3" }
];

// ============================================================================
// PURE MP3 PLAYBACK ENGINE & STATE
// ============================================================================
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

function applyAudioSettings(audio) {
  // Volume (boosted to max when Bass Boost is enabled)
  audio.volume = state.bassBoost ? 1.0 : Math.min(1.0, Math.max(0, state.volume));

  // Speed & Pitch (Slowed mode drops playback speed to 0.8x and shifts pitch down)
  const effectiveRate = state.pitch * (state.reverb ? 0.8 : 1.0);
  audio.preservesPitch = false;
  audio.mozPreservesPitch = false;
  audio.webkitPreservesPitch = false;
  audio.playbackRate = Math.min(4.0, Math.max(0.25, effectiveRate));
}

function playMp3Only(meme, padElement) {
  const audio = new Audio(meme.mp3);
  applyAudioSettings(audio);
  activeHtmlAudios.push(audio);

  const cleanup = () => {
    activeHtmlAudios = activeHtmlAudios.filter(a => a !== audio);
    if (padElement) {
      padElement.classList.remove("is-playing");
    }
  };

  audio.addEventListener("ended", cleanup);

  audio.play().catch(() => {
    // If primary MP3 URL fails, try fallbackMp3 if available (still MP3 only, never TTS)
    if (meme.fallbackMp3 && audio.src !== meme.fallbackMp3) {
      audio.src = meme.fallbackMp3;
      applyAudioSettings(audio);
      audio.play().catch(cleanup);
    } else {
      cleanup();
    }
  });
}

// ============================================================================
// UI INTERACTION, PARTICLES & VISUALIZER LOOP
// ============================================================================
function stopAllSounds() {
  if (chaosInterval) {
    clearInterval(chaosInterval);
    chaosInterval = null;
  }

  activeHtmlAudios.forEach(a => {
    try {
      a.pause();
      a.currentTime = 0;
    } catch (e) {}
  });
  activeHtmlAudios = [];

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

  // Update Now Playing banner
  document.getElementById("nowPlayingText").textContent = `${meme.emoji} #${meme.id} ${meme.title}`;

  // Pad active glow animation
  if (padElement) {
    padElement.classList.add("is-playing");

    const rect = padElement.getBoundingClientRect();
    const cx = event && event.clientX ? event.clientX : rect.left + rect.width / 2;
    const cy = event && event.clientY ? event.clientY : rect.top + rect.height / 2;
    spawnParticles(cx, cy, meme.emoji);
  }

  // Play ONLY the MP3 audio (no TTS, no synth overlay)
  playMp3Only(meme, padElement);

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
  const barCount = 32;
  const smoothHeights = new Array(barCount).fill(6);

  function draw() {
    requestAnimationFrame(draw);
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const barWidth = (w / barCount) - 3;
    const isPlayingAny = activeHtmlAudios.some(a => !a.paused && !a.ended);

    for (let i = 0; i < barCount; i++) {
      let target = 6;
      if (isPlayingAny) {
        const centerWeight = 1 - Math.abs(i - barCount / 2) / (barCount / 2);
        const boostFactor = state.bassBoost ? 1.35 : 1.0;
        target = Math.min(h - 6, (14 + Math.random() * (h - 18) * (0.45 + 0.55 * centerWeight)) * boostFactor * state.volume);
      }
      smoothHeights[i] += (target - smoothHeights[i]) * 0.28;

      const barHeight = Math.max(5, smoothHeights[i]);
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

  // Chaos Barrage Button (Fires 10 rapid viral meme MP3s!)
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
    }, 220);
  });

  // Stop All Button
  document.getElementById("stopAllBtn").addEventListener("click", stopAllSounds);

  // Volume Slider
  const volSlider = document.getElementById("masterVolume");
  const volVal = document.getElementById("volVal");
  volSlider.addEventListener("input", (e) => {
    state.volume = Number(e.target.value) / 100;
    volVal.textContent = `${e.target.value}%`;
    activeHtmlAudios.forEach(applyAudioSettings);
  });

  // Pitch / Speed Slider
  const pitchSlider = document.getElementById("pitchSlider");
  const pitchVal = document.getElementById("pitchVal");
  pitchSlider.addEventListener("input", (e) => {
    state.pitch = Number(e.target.value);
    pitchVal.textContent = `${state.pitch.toFixed(2)}x`;
    activeHtmlAudios.forEach(applyAudioSettings);
  });

  // Bass Boost Toggle
  const bassBtn = document.getElementById("bassBoostBtn");
  bassBtn.addEventListener("click", () => {
    state.bassBoost = !state.bassBoost;
    bassBtn.classList.toggle("active", state.bassBoost);
    bassBtn.setAttribute("aria-pressed", state.bassBoost);
    activeHtmlAudios.forEach(applyAudioSettings);
  });

  // Slowed + Pitch-Down Toggle
  const revBtn = document.getElementById("reverbBtn");
  revBtn.addEventListener("click", () => {
    state.reverb = !state.reverb;
    revBtn.classList.toggle("active", state.reverb);
    revBtn.setAttribute("aria-pressed", state.reverb);
    activeHtmlAudios.forEach(applyAudioSettings);
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
