/* =====================================================
   SPRITES — Pixel art character data (16x32 grid)
   Rendered on canvas, no image files, no AI art
   ===================================================== */

const PALETTE = {
    '.': null,
    'k': '#1a1a1a',   // black (hair, eyes)
    'K': '#3a3a3a',   // dark gray
    's': '#f0d0b0',   // light skin
    'S': '#d4a880',   // skin shadow
    'b': '#8b5a2b',   // brown skin
    'B': '#6b4520',   // brown skin shadow
    'c': '#2a1a0a',   // dark curly hair
    'C': '#4a2a1a',   // curly hair highlight
    'w': '#f0f0f0',   // white (lab coat)
    'W': '#d0d0d0',   // lab coat shadow
    'd': '#2a2a3a',   // dark shirt
    'p': '#2a2a4a',   // dark pants
    'h': '#1a1a1a',   // shoes
    'r': '#c44569',   // pink (mouth)
    'g': '#4a6a7a',   // hospital gown
    'x': '#c44569',   // stitches
    'H': '#1a1a2a',   // hoodie
    'P': '#2a2a3a',   // sweatpants
    'n': '#e0e0e0',   // white shoes
    'M': '#2a2a2a',   // mask
    'l': '#5a8acc',   // blue eyes (doctor)
    '0': '#1a1a1a',   // black eyes
};

/* Scientist — black hair, black eyes, lab coat */
const SCIENTIST = [
    '....kkkk........',
    '...kkkkkkkk.....',
    '..kkkkkkkkkk....',
    '..kksssskk......',
    '..ksssssssk.....',
    '..kss0ss0sk.....',
    '..ksssssssk.....',
    '..kssrrrrsk.....',
    '..ksssssssk.....',
    '...kssssk.......',
    '....ssss........',
    '..wwwwwwww......',
    '.wwwwwwwwww.....',
    '.sswwwwwwss.....',
    '.sswwwwwwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswwwwwwss.....',
    '.sswwwwwwss.....',
    '..wwwwwwww......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...hhhhhh.......',
    '...hhhhhh.......',
];

/* Patient (gown) — brown skin, curly hair, stitches */
const PATIENT = [
    '...cccccc.......',
    '..cccccccc......',
    '.cccccccccc.....',
    '.ccbbbbbccc.....',
    '.cbbbbbbbbc.....',
    '.cb0bb0bbc......',
    '.cbbbbbbbbc.....',
    '.cbxxbbxxbc.....',
    '.cbbbbbbbbc.....',
    '..cbbbbbc.......',
    '...bbbbb........',
    '..gggggggg......',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '.gggggggggg.....',
    '..gggggggg......',
    '...bbbbbb.......',
    '...bbbbbb.......',
    '...bbbbbb.......',
    '...bbbbbb.......',
    '...bbbbbb.......',
    '...bbbbbb.......',
    '...hhhhhh.......',
    '...hhhhhh.......',
];

/* Patient (clothed) — hoodie, mask, white shoes */
const PATIENT_CLOTHED = [
    '...cccccc.......',
    '..cccccccc......',
    '.cccccccccc.....',
    '.ccbbbbbccc.....',
    '.cbbbbbbbbc.....',
    '.cb0bb0bbc......',
    '.cbbbbbbbbc.....',
    '.cMMMMMMMc......',
    '.cMMMMMMMc......',
    '..cMMMMMc.......',
    '...bbbbb........',
    '..HHHHHHHH......',
    '.HHHHHHHHHH.....',
    '.HHHHHHHHHH.....',
    '.HHHHHHHHHH.....',
    '.HHHHHHHHHH.....',
    '.HHHhhhhHHH.....',
    '.HHHhhhhHHH.....',
    '.HHHhhhhHHH.....',
    '.HHHhhhhHHH.....',
    '.HHHHHHHHHH.....',
    '.HHHHHHHHHH.....',
    '.HHHHHHHHHH.....',
    '..HHHHHHHH......',
    '..PPPPPPPP......',
    '..PPPPPPPP......',
    '..PPPPPPPP......',
    '..PPPPPPPP......',
    '..PPPPPPPP......',
    '..PPPPPPPP......',
    '..nnnnnnnn......',
    '..nnnnnnnn......',
];

/* Doctor — short curly hair, blue eyes, lab coat */
const DOCTOR = [
    '...cccccc.......',
    '..cccccccc......',
    '..cccccccc......',
    '..ccsssscc......',
    '..csssssssc.....',
    '..cslssslsc.....',
    '..csssssssc.....',
    '..cssrrrrsc.....',
    '..csssssssc.....',
    '...cssssc.......',
    '....ssss........',
    '..wwwwwwww......',
    '.wwwwwwwwww.....',
    '.sswwwwwwss.....',
    '.sswwwwwwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswddddwss.....',
    '.sswwwwwwss.....',
    '.sswwwwwwss.....',
    '..wwwwwwww......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...pppppp.......',
    '...hhhhhh.......',
    '...hhhhhh.......',
];

const SPRITES = {
    scientist: SCIENTIST,
    patient: PATIENT,
    patient_clothed: PATIENT_CLOTHED,
    doctor: DOCTOR,
};

function drawSprite(canvas, spriteName, scale) {
    const sprite = SPRITES[spriteName];
    if (!sprite) return;

    const w = sprite[0].length;
    const h = sprite.length;
    canvas.width = w * scale;
    canvas.height = h * scale;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const ch = sprite[y][x];
            const color = PALETTE[ch];
            if (color) {
                ctx.fillStyle = color;
                ctx.fillRect(x * scale, y * scale, scale, scale);
            }
        }
    }
}
