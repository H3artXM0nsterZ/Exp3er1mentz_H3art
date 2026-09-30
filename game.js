/* =====================================================
   GAME LOGIC — Scene management, typewriter, effects
   ===================================================== */

let currentScene = null;
let currentBg = "office";
let currentChars = [];
let typeTimer = null;
let afterTypeCallback = null;

const BG_LOCATIONS = {
    "office": "AGENCY OFFICE",
    "lab": "LABORATORY 07",
    "lab-dark": "LABORATORY 07",
    "black": "CLASSIFIED"
};

/* === START === */

function startGame() {
    document.getElementById("titleScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "flex";
    showScene("office1");
}

/* === TYPEWRITER === */

function typewriter(el, text, callback) {
    if (typeTimer) clearInterval(typeTimer);
    el.textContent = "";
    el.classList.add("typing");
    let i = 0;
    typeTimer = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
        } else {
            clearInterval(typeTimer);
            typeTimer = null;
            el.classList.remove("typing");
            if (callback) callback();
        }
    }, 35);
}

function skipTypewriter() {
    if (typeTimer) {
        clearInterval(typeTimer);
        typeTimer = null;
        const scene = story[currentScene];
        const dialogue = document.getElementById("dialogue");
        dialogue.textContent = scene.text;
        dialogue.classList.remove("typing");
        if (afterTypeCallback) {
            const cb = afterTypeCallback;
            afterTypeCallback = null;
            cb();
        }
        return true;
    }
    return false;
}

/* === SHOW SCENE === */

function showScene(sceneName) {
    if (sceneName === "restart") {
        location.reload();
        return;
    }

    currentScene = sceneName;
    const scene = story[sceneName];
    if (!scene) return;

    /* Update background */
    if (scene.bg) currentBg = scene.bg;
    updateBackground(currentBg);

    /* Update location */
    document.getElementById("locationName").textContent =
        BG_LOCATIONS[currentBg] || "CLASSIFIED";

    /* Update status */
    if (scene.status) {
        document.getElementById("status").textContent = scene.status;
    }

    /* Update characters */
    if (scene.chars) currentChars = scene.chars;
    updateCharacters(currentChars);

    /* Clear and update FX layer */
    const fxLayer = document.getElementById("fxLayer");
    fxLayer.innerHTML = "";
    if (scene.fx === "bed") {
        const bed = document.createElement("div");
        bed.className = "hospital-bed";
        fxLayer.appendChild(bed);
    } else if (scene.fx === "body") {
        const body = document.createElement("div");
        body.className = "body-on-bed";
        fxLayer.appendChild(body);
    }

    /* Screen shake */
    if (scene.shake) {
        const screen = document.querySelector(".screen");
        screen.classList.remove("shake");
        void screen.offsetWidth;
        screen.classList.add("shake");
    }

    /* Dialogue */
    const speaker = document.getElementById("speaker");
    const dialogue = document.getElementById("dialogue");
    const choices = document.getElementById("choices");
    const continueText = document.getElementById("continue");
    const dialogueBox = document.getElementById("dialogueBox");

    speaker.textContent = scene.speaker;
    choices.innerHTML = "";
    continueText.style.display = "none";

    /* Fade transition */
    dialogueBox.classList.remove("fade-in");
    void dialogueBox.offsetWidth;
    dialogueBox.classList.add("fade-in");

    /* Click to skip typewriter */
    dialogueBox.onclick = function () {
        skipTypewriter();
    };

    /* Show choices / continue / interactive FX after text */
    afterTypeCallback = function () {
        if (scene.fx === "computer") {
            showComputerFiles(scene);
        } else if (scene.fx === "email") {
            showEmail(scene);
        } else if (scene.choices) {
            scene.choices.forEach(choice => {
                const button = document.createElement("button");
                button.className = "choice";
                button.textContent = choice.text;
                button.onclick = () => showScene(choice.next);
                choices.appendChild(button);
            });
        } else if (scene.next) {
            continueText.style.display = "block";
            continueText.textContent = "▼ CLICK";
            continueText.onclick = () => showScene(scene.next);
            continueText.style.cursor = "pointer";
        }
    };

    typewriter(dialogue, scene.text, afterTypeCallback);
}

/* === BACKGROUND === */

function updateBackground(bg) {
    document.getElementById("mainArea").className = "mainArea bg-" + bg;
}

/* === CHARACTERS === */

function updateCharacters(chars) {
    const charLayer = document.getElementById("charLayer");
    charLayer.innerHTML = "";

    const isMobile = window.innerWidth <= 650;
    const scale = isMobile ? 3 : 4;

    chars.forEach(char => {
        const canvas = document.createElement("canvas");
        canvas.className = "sprite char-" + char.pos;

        let spriteName = char.id;
        if (char.id === "patient" && char.variant === "clothed") {
            spriteName = "patient_clothed";
        }

        drawSprite(canvas, spriteName, scale);
        charLayer.appendChild(canvas);
    });
}

/* === COMPUTER FILES === */

function showComputerFiles(scene) {
    const fxLayer = document.getElementById("fxLayer");

    const computer = document.createElement("div");
    computer.className = "computer";

    const monitor = document.createElement("div");
    monitor.className = "monitor";

    /* Tab bar */
    const tabBar = document.createElement("div");
    tabBar.className = "tab-bar";

    scene.files.forEach(file => {
        const tab = document.createElement("div");
        tab.className = "tab";
        tab.textContent = file.title;
        tabBar.appendChild(tab);
    });

    for (let i = 0; i < 8; i++) {
        const tab = document.createElement("div");
        tab.className = "tab";
        tab.textContent = "...";
        tabBar.appendChild(tab);
    }

    const tabCount = document.createElement("span");
    tabCount.className = "tab-count";
    tabCount.textContent = "50 tabs";
    tabBar.appendChild(tabCount);

    /* File list */
    const fileList = document.createElement("div");
    fileList.className = "file-list";

    let viewedCount = 0;

    scene.files.forEach(file => {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";
        fileItem.textContent = file.title;

        fileItem.onclick = () => {
            if (fileItem.classList.contains("viewed")) return;
            fileItem.classList.add("viewed");
            showFileContent(file.text);
            viewedCount++;
            if (viewedCount === scene.files.length) {
                const continueText = document.getElementById("continue");
                continueText.style.display = "block";
                continueText.textContent = "▼ CLICK";
                continueText.onclick = () => {
                    fxLayer.innerHTML = "";
                    showScene(scene.next);
                };
                continueText.style.cursor = "pointer";
            }
        };

        fileList.appendChild(fileItem);
    });

    monitor.appendChild(tabBar);
    monitor.appendChild(fileList);
    computer.appendChild(monitor);
    fxLayer.appendChild(computer);
}

function showFileContent(text) {
    const popup = document.createElement("div");
    popup.className = "file-popup";
    popup.textContent = text;
    popup.onclick = () => popup.remove();
    document.getElementById("fxLayer").appendChild(popup);
}

/* === EMAIL === */

function showEmail(scene) {
    const fxLayer = document.getElementById("fxLayer");

    const emailPopup = document.createElement("div");
    emailPopup.className = "email-popup";

    const header = document.createElement("div");
    header.className = "email-header";
    header.innerHTML =
        "<div>FROM: " + scene.email.from + "</div>" +
        "<div>SUBJECT: " + scene.email.subject + "</div>";

    const body = document.createElement("div");
    body.className = "email-body";
    body.textContent = scene.email.body;

    emailPopup.appendChild(header);
    emailPopup.appendChild(body);
    fxLayer.appendChild(emailPopup);

    const continueText = document.getElementById("continue");
    continueText.style.display = "block";
    continueText.textContent = "▼ CLICK";
    continueText.onclick = () => {
        fxLayer.innerHTML = "";
        showScene(scene.next);
    };
    continueText.style.cursor = "pointer";
}

/* === KEYBOARD === */

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (skipTypewriter()) return;
        const scene = story[currentScene];
        if (scene && scene.next && !scene.choices &&
            scene.fx !== "computer" && scene.fx !== "email") {
            showScene(scene.next);
        }
    }
});
