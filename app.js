const sprites = [
  { id: "water_basic", name: "Water", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "water_gold", name: "Gold Water", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "water_candy", name: "Gummy Water", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "water_galaxy", name: "Galaxy Water", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "water_gem", name: "Gem Water", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "water_holofoil", name: "Holofoil Water", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "earth_basic", name: "Earth", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "earth_gold", name: "Gold Earth", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "earth_candy", name: "Gummy Earth", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "earth_galaxy", name: "Galaxy Earth", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "earth_gem", name: "Gem Earth", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "fire_basic", name: "Fire", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "fire_gold", name: "Gold Fire", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "fire_candy", name: "Gummy Fire", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "fire_galaxy", name: "Galaxy Fire", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "fire_holofoil", name: "Holofoil Fire", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "duck_basic", name: "Duck", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "duck_gold", name: "Gold Duck", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "duck_candy", name: "Gummy Duck", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "duck_galaxy", name: "Galaxy Duck", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "duck_gem", name: "Gem Duck", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "ghost_basic", name: "Ghost", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "ghost_gold", name: "Gold Ghost", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "ghost_candy", name: "Gummy Ghost", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "ghost_galaxy", name: "Galaxy Ghost", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "ghost_holofoil", name: "Holofoil Ghost", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "dream_basic", name: "Dream", theme: "Basic", rarity: "Legendary", unreleased: false },
  { id: "dream_gold", name: "Gold Dream", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "dream_candy", name: "Gummy Dream", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "dream_galaxy", name: "Galaxy Dream", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "dream_rift", name: "Rift Dream", theme: "Rift", rarity: "Special", unreleased: true },
  { id: "demon_basic", name: "Demon", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "demon_gold", name: "Gold Demon", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "demon_candy", name: "Gummy Demon", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "demon_galaxy", name: "Galaxy Demon", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "demon_gem", name: "Gem Demon", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "punk_basic", name: "Punk", theme: "Basic", rarity: "Legendary", unreleased: false },
  { id: "punk_gold", name: "Gold Punk", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "punk_candy", name: "Gummy Punk", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "punk_galaxy", name: "Galaxy Punk", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "punk_gem", name: "Gem Punk", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "punk_rift", name: "Rift Punk", theme: "Rift", rarity: "Special", unreleased: true },
  { id: "king_basic", name: "King", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "king_gold", name: "Gold King", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "king_candy", name: "Gummy King", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "king_galaxy", name: "Galaxy King", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "king_holofoil", name: "Holofoil King", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "zeropoint_basic", name: "Zero Point", theme: "Basic", rarity: "Mythic", unreleased: false },
  { id: "zeropoint_gold", name: "Gold Zero Point", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "zeropoint_candy", name: "Gummy Zero Point", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "zeropoint_galaxy", name: "Galaxy Zero Point", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "zeropoint_gem", name: "Gem Zero Point", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "zeropoint_holofoil", name: "Holofoil Zero Point", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "theburntpeanut_basic", name: "Burnt Peanut", theme: "Basic", rarity: "Mythic", unreleased: false },
  { id: "aura_basic", name: "Aura", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "boss_basic", name: "Boss", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "fishy_basic", name: "Fishy", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "striker_basic", name: "Striker", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "reaper_basic", name: "Grim Reaper", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "reaper_galaxy", name: "Galaxy Grim Reaper", theme: "Galaxy", rarity: "Special", unreleased: true },
  { id: "wick_basic", name: "John Wick", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "drifter_basic", name: "Drifter", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "ice_basic", name: "Ice", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "seven_basic", name: "Seven", theme: "Basic", rarity: "Rare", unreleased: true }
];

const storageKey = "cool_fn_sprite_tracker_v1";
const themeOrder = ["All", "Basic", "Gold", "Candy", "Galaxy", "Gem", "Holofoil", "Rift"];
const el = {
  grid: document.querySelector("#grid"),
  empty: document.querySelector("#empty"),
  search: document.querySelector("#search"),
  theme: document.querySelector("#theme"),
  statusTabs: document.querySelector("#statusTabs"),
  hideMastered: document.querySelector("#hideMastered"),
  showUnreleased: document.querySelector("#showUnreleased"),
  ownedText: document.querySelector("#ownedText"),
  masteredText: document.querySelector("#masteredText"),
  ownedBar: document.querySelector("#ownedBar"),
  masteredBar: document.querySelector("#masteredBar"),
  resultCount: document.querySelector("#resultCount"),
  copyShare: document.querySelector("#copyShare"),
  markVisible: document.querySelector("#markVisible"),
  resetAll: document.querySelector("#resetAll")
};

let state = {
  owned: [],
  mastered: [],
  search: "",
  theme: "All",
  status: "all",
  hideMastered: false,
  showUnreleased: false
};

function unique(values) {
  return [...new Set(values)];
}

function loadState() {
  const share = new URLSearchParams(location.search).get("s");
  if (share) {
    try {
      const shared = JSON.parse(atob(share));
      state.owned = unique(shared.o || []);
      state.mastered = unique(shared.m || []).filter(id => state.owned.includes(id));
      return;
    } catch {
      history.replaceState(null, "", location.pathname);
    }
  }

  try {
    state = { ...state, ...JSON.parse(localStorage.getItem(storageKey)) };
    state.owned = unique(state.owned || []);
    state.mastered = unique(state.mastered || []).filter(id => state.owned.includes(id));
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function spriteImage(id) {
  return `https://staticvacant.github.io/fnsprites/sprites/${id}.png`;
}

function releasedSprites() {
  return sprites.filter(sprite => !sprite.unreleased);
}

function currentList() {
  const query = state.search.trim().toLowerCase();
  return sprites
    .filter(sprite => state.showUnreleased || !sprite.unreleased)
    .filter(sprite => state.theme === "All" || sprite.theme === state.theme)
    .filter(sprite => !query || `${sprite.name} ${sprite.theme} ${sprite.rarity}`.toLowerCase().includes(query))
    .filter(sprite => {
      const owned = state.owned.includes(sprite.id);
      const mastered = state.mastered.includes(sprite.id);
      if (state.hideMastered && mastered) return false;
      if (state.status === "owned") return owned;
      if (state.status === "missing") return !owned;
      if (state.status === "mastered") return mastered;
      return true;
    })
    .sort((a, b) => themeOrder.indexOf(a.theme) - themeOrder.indexOf(b.theme) || a.name.localeCompare(b.name));
}

function updateProgress() {
  const released = releasedSprites();
  const ownedCount = released.filter(sprite => state.owned.includes(sprite.id)).length;
  const masteredCount = released.filter(sprite => state.mastered.includes(sprite.id)).length;
  const total = released.length;

  el.ownedText.textContent = `${ownedCount} / ${total}`;
  el.masteredText.textContent = `${masteredCount} / ${total}`;
  el.ownedBar.style.width = `${total ? (ownedCount / total) * 100 : 0}%`;
  el.masteredBar.style.width = `${total ? (masteredCount / total) * 100 : 0}%`;
}

function renderCard(sprite) {
  const owned = state.owned.includes(sprite.id);
  const mastered = state.mastered.includes(sprite.id);
  const card = document.createElement("article");
  card.className = ["card", owned ? "owned" : "", mastered ? "mastered" : "", sprite.unreleased ? "unreleased" : ""].join(" ");
  card.dataset.id = sprite.id;
  card.dataset.rarity = sprite.rarity;
  card.innerHTML = `
    <div class="art">
      <span class="badge">${mastered ? "Mastered" : owned ? "Owned" : sprite.unreleased ? "Unreleased" : "Missing"}</span>
      <img src="${spriteImage(sprite.id)}" alt="${sprite.name}" loading="lazy">
      <span class="rarity">${sprite.rarity}</span>
      <button class="master-button" type="button">${mastered ? "Unmaster" : "Master"}</button>
    </div>
    <div class="title">${sprite.name}</div>
  `;

  card.addEventListener("click", () => toggleOwned(sprite.id));
  card.querySelector(".master-button").addEventListener("click", event => {
    event.stopPropagation();
    toggleMastered(sprite.id);
  });
  return card;
}

function render() {
  updateProgress();
  const list = currentList();
  el.grid.replaceChildren(...list.map(renderCard));
  el.resultCount.textContent = `${list.length} ${list.length === 1 ? "sprite" : "sprites"}`;
  el.empty.hidden = list.length !== 0;

  el.search.value = state.search;
  el.theme.value = state.theme;
  el.hideMastered.checked = state.hideMastered;
  el.showUnreleased.checked = state.showUnreleased;
  el.statusTabs.querySelectorAll("button").forEach(button => {
    button.classList.toggle("active", button.dataset.status === state.status);
  });
}

function toggleOwned(id) {
  if (state.owned.includes(id)) {
    state.owned = state.owned.filter(item => item !== id);
    state.mastered = state.mastered.filter(item => item !== id);
  } else {
    state.owned = [...state.owned, id];
  }
  saveState();
  render();
}

function toggleMastered(id) {
  if (!state.owned.includes(id)) state.owned = [...state.owned, id];
  state.mastered = state.mastered.includes(id)
    ? state.mastered.filter(item => item !== id)
    : [...state.mastered, id];
  saveState();
  render();
}

function initControls() {
  el.theme.replaceChildren(...themeOrder.map(theme => new Option(theme, theme)));
  el.search.addEventListener("input", event => {
    state.search = event.target.value;
    saveState();
    render();
  });
  el.theme.addEventListener("change", event => {
    state.theme = event.target.value;
    saveState();
    render();
  });
  el.statusTabs.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    state.status = button.dataset.status;
    saveState();
    render();
  });
  el.hideMastered.addEventListener("change", event => {
    state.hideMastered = event.target.checked;
    saveState();
    render();
  });
  el.showUnreleased.addEventListener("change", event => {
    state.showUnreleased = event.target.checked;
    saveState();
    render();
  });
  el.markVisible.addEventListener("click", () => {
    state.owned = unique([...state.owned, ...currentList().map(sprite => sprite.id)]);
    saveState();
    render();
  });
  el.resetAll.addEventListener("click", () => {
    if (!confirm("Reset owned and mastered sprites?")) return;
    state.owned = [];
    state.mastered = [];
    saveState();
    render();
  });
  el.copyShare.addEventListener("click", async () => {
    const code = btoa(JSON.stringify({ o: state.owned, m: state.mastered }));
    const url = `${location.origin}${location.pathname}?s=${code}`;
    await navigator.clipboard.writeText(url);
    el.copyShare.textContent = "Copied";
    setTimeout(() => {
      el.copyShare.textContent = "Copy share link";
    }, 1100);
  });
}

loadState();
initControls();
render();
