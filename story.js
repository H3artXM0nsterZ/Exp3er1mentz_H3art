/* =====================================================
   STORY — Branching narrative data
   ===================================================== */

const story = {

    /* === ACT 1: THE OFFICE === */

    office1: {
        speaker: "YOU",
        text: "Another day at the agency. You sit at your computer, staring at the screen. Fifty tabs open. None of them interesting.",
        bg: "office",
        status: "IDLE",
        next: "office2"
    },

    office2: {
        speaker: "YOU",
        text: "You click through experiment files, one by one. Safe. Ethical. Boring. Click on five to move to the next step.",
        bg: "office",
        fx: "computer",
        files: [
            { title: "FILE 01", text: "NUCLEAR WEAPONS TESTING — Status: CLASSIFIED. Clearance: LEVEL 5. 3 active sites." },
            { title: "FILE 02", text: "EXPERIMENTAL MEDICINE TRIALS — Status: ONGOING. 47 formulas. Results: INCONCLUSIVE." },
            { title: "FILE 03", text: "ANIMAL TESTING — BEAUTY PRODUCTS. Status: APPROVED. 14 subjects. 0 fatalities." },
            { title: "FILE 04", text: "EXPERIMENTAL MEDICINE — REVISED FORMULAS. Status: PENDING REVIEW. 12 formulas." },
            { title: "FILE 05", text: "ANIMAL TESTING — MAKEUP PRODUCTS. Status: APPROVED. 8 subjects. 0 fatalities." },
        ],
        next: "phone"
    },

    phone: {
        speaker: "SYSTEM",
        text: "Your phone rings.",
        bg: "office",
        next: "phone2"
    },

    phone2: {
        speaker: "DIRECTOR",
        text: "\"Doctor. We have a new assignment for you. Check your email.\"",
        bg: "office",
        next: "email"
    },

    email: {
        speaker: "SYSTEM",
        text: "New email received.",
        bg: "office",
        fx: "email",
        email: {
            from: "DIRECTOR",
            subject: "CLASSIFIED — Assignment #001",
            body: "Doctor, we need you for a special project. It's not safe. It's not ethical. But it's interesting. You're the only one we trust with this. Report to Lab 07 immediately. — Director"
        },
        next: "lab1"
    },

    /* === ACT 2: THE LAB === */

    lab1: {
        speaker: "YOU",
        text: "Lab 07. Dark. The only light has a pink tint to it. On the table lies a body covered by a white sheet.",
        bg: "lab",
        status: "ACTIVE",
        chars: [{ id: "scientist", pos: "left" }],
        fx: "bed",
        next: "lab2"
    },

    lab2: {
        speaker: "YOU",
        text: "You pull back the sheet. You freeze. This one... this one is beautiful.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "lab3"
    },

    lab3: {
        speaker: "YOU",
        text: "Brown skin. Curly hair. A face that doesn't look like it belongs on a corpse. Stitches all over their body — someone tried to put them back together before they got to you.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "experiment1"
    },

    experiment1: {
        speaker: "SYSTEM",
        text: "EXPERIMENT 001 — BEGIN.",
        bg: "lab",
        status: "CRITICAL",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        shake: true,
        next: "experiment2"
    },

    experiment2: {
        speaker: "YOU",
        text: "You inject the serum. You wait. Nothing happens. You try again. Still nothing.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "experiment3"
    },

    experiment3: {
        speaker: "YOU",
        text: "You try one more time. The heart monitor beeps. Once. Twice. Then steadily.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        shake: true,
        next: "awakening"
    },

    awakening: {
        speaker: "YOU",
        text: "Their eyes open. They look directly at you.",
        bg: "lab",
        status: "ALIVE",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "awakening2"
    },

    awakening2: {
        speaker: "YOU",
        text: "Something stirs inside you. You've never felt this before. You're... obsessed.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "hug"
    },

    hug: {
        speaker: "YOU",
        text: "Before you can stop yourself, you pull them into a hug. They're warm. They're alive. They're yours.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "who"
    },

    who: {
        speaker: "SUBJECT",
        text: "\"Who... who are you?\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        choices: [
            { text: "Tell them your real name.", next: "realname" },
            { text: "\"I'm the one who brought you back.\"", next: "brought_back" }
        ]
    },

    realname: {
        speaker: "YOU",
        text: "You tell them your name. They repeat it quietly, like they're trying to remember if it means something.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "confusion"
    },

    brought_back: {
        speaker: "YOU",
        text: "\"I'm the scientist who brought you back to life.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "confusion"
    },

    confusion: {
        speaker: "SUBJECT",
        text: "\"I don't... remember anything. Where am I? What happened to me?\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "reassure"
    },

    reassure: {
        speaker: "YOU",
        text: "\"There's no reason to be afraid. You're safe here.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "panic"
    },

    panic: {
        speaker: "SUBJECT",
        text: "They start panicking. Their breathing gets faster. They pull at the chains. But you... you look happy.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        shake: true,
        next: "panic2"
    },

    panic2: {
        speaker: "SUBJECT",
        text: "They stop moving. They stare at you. They're not fighting anymore.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "knock"
    },

    /* === ACT 3: THE KNOCK === */

    knock: {
        speaker: "???",
        text: "*KNOCK KNOCK KNOCK* \"Is everything OK in there?\"",
        bg: "lab",
        status: "ALERT",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        shake: true,
        next: "freeze"
    },

    freeze: {
        speaker: "YOU",
        text: "You freeze. You look at the patient. You grab the tape.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "hide"
    },

    hide: {
        speaker: "YOU",
        text: "You tape their mouth shut. You hide them behind the equipment. They can't move. They can't speak.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }],
        next: "open_door"
    },

    open_door: {
        speaker: "YOU",
        text: "You open the door.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "doctor", pos: "right" }],
        next: "inspector"
    },

    inspector: {
        speaker: "DOCTOR",
        text: "\"Just checking in. Everything alright? I heard some noise.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "doctor", pos: "right" }],
        next: "inspector2"
    },

    inspector2: {
        speaker: "YOU",
        text: "\"Just some complications with the patient. Nothing to worry about.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "doctor", pos: "right" }],
        next: "inspector3"
    },

    inspector3: {
        speaker: "DOCTOR",
        text: "The inspector turns their head and looks inside the lab. They nod slowly.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "doctor", pos: "right" }],
        next: "inspector4"
    },

    inspector4: {
        speaker: "DOCTOR",
        text: "\"Alright. Carry on.\" The inspector leaves.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }],
        next: "lock_door"
    },

    lock_door: {
        speaker: "YOU",
        text: "You close the door. You lock it. You take the tape off the patient.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "tests"
    },

    /* === ACT 4: TESTS AND CLOTHES === */

    tests: {
        speaker: "YOU",
        text: "You run more tests. Heart rate — stable. Body parts — responsive. Everything checks out. They're alive. Really alive.",
        bg: "lab",
        status: "STABLE",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "untie"
    },

    untie: {
        speaker: "YOU",
        text: "You untie them. You hand them clothes — a black hoodie, sweatpants, white shoes, and a mask.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "bed", variant: "gown" }],
        fx: "bed",
        next: "clothes"
    },

    clothes: {
        speaker: "SUBJECT",
        text: "They put them on slowly. The hoodie. The sweatpants. The shoes. The mask. They look at you. Still confused. Not willing to fight.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "sit"
    },

    sit: {
        speaker: "YOU",
        text: "You ask them to sit. They sit in the chair in front of your computer. They look at you. Not making a sound.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "bring_body"
    },

    /* === ACT 5: THE SECOND BODY === */

    bring_body: {
        speaker: "YOU",
        text: "You turn to the freezer. You pull out another body. You put it on the testing bed.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "bring_body2"
    },

    bring_body2: {
        speaker: "SUBJECT",
        text: "The patient looks at you. Horrified.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "choice1"
    },

    choice1: {
        speaker: "YOU",
        text: "They're watching. What do you do?",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        choices: [
            { text: "Comfort them. \"It's going to be okay.\"", next: "comfort1" },
            { text: "Stab them to silence them.", next: "stab" }
        ]
    },

    stab: {
        speaker: "YOU",
        text: "You stab them. The light leaves their eyes. Again. You are the monster.",
        bg: "lab-dark",
        status: "FAILED",
        chars: [{ id: "scientist", pos: "left" }],
        shake: true,
        next: "game_over"
    },

    game_over: {
        speaker: "SYSTEM",
        text: "GAME OVER. You chose violence. The experiment is over. There is nothing left.",
        bg: "black",
        status: "FAILED",
        chars: [],
        choices: [
            { text: "Restart", next: "restart" }
        ]
    },

    comfort1: {
        speaker: "YOU",
        text: "You look at them. You smile gently. \"It's going to be okay.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "comfort1b"
    },

    comfort1b: {
        speaker: "SUBJECT",
        text: "They sit there, horrified, looking at you. You smile at them. Then you stop. Your face goes straight.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "experiment2_do"
    },

    experiment2_do: {
        speaker: "YOU",
        text: "You turn back to the body on the bed. You cut it open. You look at the organs inside.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        shake: true,
        next: "experiment2_do2"
    },

    experiment2_do2: {
        speaker: "YOU",
        text: "You replace them with organs from someone who just died. You check the vitals.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "experiment2_do3"
    },

    experiment2_do3: {
        speaker: "SYSTEM",
        text: "Not breathing. No pulse. Cold to the touch. Another failure.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "cup_falls"
    },

    /* === ACT 6: THE CUP === */

    cup_falls: {
        speaker: "YOU",
        text: "You hear a cup fall. The patient. They poked at it and knocked it over.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "cup_falls2"
    },

    cup_falls2: {
        speaker: "SUBJECT",
        text: "They look at you. Scared. Like they did something wrong.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        choices: [
            { text: "Comfort them. \"It's all right.\"", next: "comfort2" },
            { text: "Scream at them. \"Don't do that again!\"", next: "scream" }
        ]
    },

    comfort2: {
        speaker: "YOU",
        text: "\"It's all right. It's just a cup.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "comfort2b"
    },

    comfort2b: {
        speaker: "SUBJECT",
        text: "The patient calms down. They look at you with something almost like gratitude.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "cover_body"
    },

    scream: {
        speaker: "YOU",
        text: "\"If you do that again, I'll hurt you.\"",
        bg: "lab-dark",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        shake: true,
        next: "scream2"
    },

    scream2: {
        speaker: "SUBJECT",
        text: "The patient shakes with fear. They don't look at you anymore.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        fx: "body",
        next: "cover_body"
    },

    /* === ACT 7: THE DECISION === */

    cover_body: {
        speaker: "YOU",
        text: "You turn around and cover the body on the table. You look back at the patient.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "decision"
    },

    decision: {
        speaker: "YOU",
        text: "\"Would you like to come with me? Or... would you want me to turn you in?\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        choices: [
            { text: "\"Come with me.\"", next: "take_home" },
            { text: "\"Should I turn you in?\"", next: "turn_in" }
        ]
    },

    take_home: {
        speaker: "SUBJECT",
        text: "\"Yes... but what would you do with me?\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "explain_take"
    },

    turn_in: {
        speaker: "SUBJECT",
        text: "\"What would they do with me?\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "explain_turn"
    },

    explain_take: {
        speaker: "YOU",
        text: "\"I'll love you. I'll care for you. You're mine. No one will hurt you. But there may be... consequences.\"",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "final_choice_intro"
    },

    explain_turn: {
        speaker: "YOU",
        text: "\"They'll make you a test subject for life. Just like I will. But worse. Much worse.\"",
        bg: "lab-dark",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "final_choice_intro"
    },

    final_choice_intro: {
        speaker: "SUBJECT",
        text: "No matter what... they decide to go with you.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "final_choice"
    },

    /* === ACT 8: FINAL CHOICE === */

    final_choice: {
        speaker: "YOU",
        text: "You have the final say. What do you do?",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        choices: [
            { text: "Tell the agency.", next: "ending_agency" },
            { text: "Take them home without telling.", next: "ending_sneak" }
        ]
    },

    ending_agency: {
        speaker: "YOU",
        text: "You tell the agency. They come. They take your experiment away. You watch them leave. Gone. Forever.",
        bg: "lab-dark",
        status: "COMPLETE",
        chars: [{ id: "scientist", pos: "left" }],
        next: "ending_agency2"
    },

    ending_agency2: {
        speaker: "SYSTEM",
        text: "ENDING: THE GOOD SOLDIER. You did the right thing. You'll never see them again. The lab is quiet. The lab is empty. The lab is cold.",
        bg: "black",
        status: "COMPLETE",
        chars: [],
        choices: [
            { text: "Restart", next: "restart" }
        ]
    },

    ending_sneak: {
        speaker: "YOU",
        text: "You don't tell the agency. You think of a plan. You sneak them out under everyone's nose. They're yours now.",
        bg: "lab",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        next: "ending_sneak2"
    },

    ending_sneak2: {
        speaker: "SYSTEM",
        text: "ENDING: THE YANDERE. They're yours. Forever. No one will ever take them from you. You'll make sure of it.",
        bg: "lab-dark",
        status: "COMPLETE",
        chars: [{ id: "scientist", pos: "left" }, { id: "patient", pos: "right", variant: "clothed" }],
        choices: [
            { text: "Restart", next: "restart" }
        ]
    },
};
