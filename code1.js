gdjs.S01_95MainMenuCode = {};
gdjs.S01_95MainMenuCode.localVariables = [];
gdjs.S01_95MainMenuCode.idToCallbackMap = new Map();
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileObjects2= [];
gdjs.S01_95MainMenuCode.GDTxt_9595StartObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595StartObjects2= [];
gdjs.S01_95MainMenuCode.GDTxt_9595SubtitleObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595SubtitleObjects2= [];
gdjs.S01_95MainMenuCode.GDTxt_9595HerbariumObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595HerbariumObjects2= [];
gdjs.S01_95MainMenuCode.GDTxt_9595AchievementsObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595AchievementsObjects2= [];
gdjs.S01_95MainMenuCode.GDTxt_9595HowToPlayObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595HowToPlayObjects2= [];
gdjs.S01_95MainMenuCode.GDBG_9595MainMenuObjects1= [];
gdjs.S01_95MainMenuCode.GDBG_9595MainMenuObjects2= [];
gdjs.S01_95MainMenuCode.GDlogoObjects1= [];
gdjs.S01_95MainMenuCode.GDlogoObjects2= [];
gdjs.S01_95MainMenuCode.GDPanel_9595MainMenu_9595ProfileObjects1= [];
gdjs.S01_95MainMenuCode.GDPanel_9595MainMenu_9595ProfileObjects2= [];
gdjs.S01_95MainMenuCode.GDBtn_9595StartObjects1= [];
gdjs.S01_95MainMenuCode.GDBtn_9595StartObjects2= [];
gdjs.S01_95MainMenuCode.GDBtn_9595HerbariumObjects1= [];
gdjs.S01_95MainMenuCode.GDBtn_9595HerbariumObjects2= [];
gdjs.S01_95MainMenuCode.GDBtn_9595AchievementsObjects1= [];
gdjs.S01_95MainMenuCode.GDBtn_9595AchievementsObjects2= [];
gdjs.S01_95MainMenuCode.GDBtn_9595HowToPlayObjects1= [];
gdjs.S01_95MainMenuCode.GDBtn_9595HowToPlayObjects2= [];
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileProgressObjects1= [];
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileProgressObjects2= [];


gdjs.S01_95MainMenuCode.userFunc0x133b038 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// GLOBAL - APPLY THAI FONT
//
// Applies one Thai font to every normal Text object
// in the current scene.
// ======================================================

try {

    const FONT_RESOURCE_NAME =
        "MorYaThaiFont"; // <-- เปลี่ยนให้ตรง Resource ของคุณ


    const THAI_PADDING =
        12;


    // ==================================================
    // GET ALL OBJECT INSTANCES IN CURRENT SCENE
    // ==================================================

    const objects =
        runtimeScene.getAdhocListOfAllInstances();


    let changedCount =
        0;


    // ==================================================
    // APPLY FONT
    // ==================================================

    objects.forEach(obj => {

        // Normal GDevelop Text object only
        if (
            obj instanceof gdjs.TextRuntimeObject
        ) {

            // ------------------------------------------
            // FONT
            // ------------------------------------------

            if (
                typeof obj.setFontName === "function"
            ) {

                obj.setFontName(
                    FONT_RESOURCE_NAME
                );
            }


            // ------------------------------------------
            // THAI GLYPH PADDING
            // ------------------------------------------

            if (
                typeof obj.setPadding === "function"
            ) {

                obj.setPadding(
                    THAI_PADDING
                );
            }


            changedCount +=
                1;
        }
    });


    console.log(
        "GLOBAL THAI FONT APPLIED:",
        {
            scene:
                runtimeScene.getName(),

            font:
                FONT_RESOURCE_NAME,

            padding:
                THAI_PADDING,

            textObjectsChanged:
                changedCount
        }
    );


} catch (error) {

    console.error(
        "GLOBAL THAI FONT ERROR:",
        error
    );
}
};
gdjs.S01_95MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.S01_95MainMenuCode.userFunc0x133b038(runtimeScene);

}


};gdjs.S01_95MainMenuCode.userFunc0x1bebde8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S01 - MAIN MENU INITIALIZER
//
// Responsibilities:
// - initialize menu state
// - set menu texts
// - prepare fade-in
// - keep input locked briefly after Boot
// ======================================================

try {

    // ==================================================
    // ONE-TIME GUARD
    // ==================================================

    if (
        runtimeScene.__morYaS01Initialized === true
    ) {
        return;
    }


    // ==================================================
    // HELPERS
    // ==================================================

    const getObj =
        (name) => {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    const setTextSafe =
        (name, value) => {

            const obj =
                getObj(name);


            if (
                obj &&
                typeof obj.setText === "function"
            ) {

                obj.setText(
                    String(value)
                );
            }
        };


    const setOpacitySafe =
        (name, opacity) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setOpacity ===
                        "function"
                    ) {

                        obj.setOpacity(
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(opacity)
                                )
                            )
                        );
                    }
                });
        };


    // ==================================================
    // STATE
    // ==================================================

    globalThis.MorYaS01State = {

        active:
            true,

        phase:
            "ENTER",

        startedAt:
            Date.now(),

        inputLockedUntil:
            Date.now() + 850,

        transitionStarted:
            false,

        transitionStartedAt:
            0,

        transitionDurationMs:
            350,

        selectedAction:
            ""
    };


    // ==================================================
    // STATIC TEXT
    // ==================================================

    setTextSafe(
        "Txt_Subtitle",
        "เรียนรู้สมุนไพรใกล้ตัว ผ่านสถานการณ์\nการสังเกต และการตัดสินใจอย่างปลอดภัย"
    );


    setTextSafe(
        "Txt_Profile",
        "ผู้เรียนสมุนไพร"
    );


    // ตอนนี้ CASE001 พร้อมเล่นแล้ว
    setTextSafe(
        "Txt_ProfileProgress",
        "พร้อมเริ่มการเรียนรู้"
    );


    setTextSafe(
        "Txt_Start",
        "เริ่มเล่น"
    );


    // ==================================================
    // INITIAL OPACITY
    //
    // BG remains fully visible.
    // UI fades in after entering from Boot.
    // ==================================================

    const fadeObjects = [

        "logo",
        "Txt_Subtitle",

        "Panel_MainMenu_Profile",
        "Txt_Profile",
        "Txt_ProfileProgress",

        "Btn_Start",
        "Txt_Start",

        "Btn_Herbarium",
        "Btn_Achievements",
        "Btn_HowToPlay"
    ];


    fadeObjects.forEach(
        name => {

            setOpacitySafe(
                name,
                0
            );
        }
    );


    // ==================================================
    // FINISH INIT
    // ==================================================

    runtimeScene.__morYaS01Initialized =
        true;


    console.log(
        "S01 MAIN MENU READY"
    );


} catch (error) {

    runtimeScene.__morYaS01Initialized =
        false;


    console.error(
        "S01 Main Menu Initializer Error:",
        error
    );
}
};
gdjs.S01_95MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.S01_95MainMenuCode.userFunc0x1bebde8(runtimeScene);

}


};gdjs.S01_95MainMenuCode.userFunc0x179dc60 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S01 - MAIN MENU VISUAL ENGINE
//
// Handles:
// - staggered fade-in
// - fade-out before entering RPG
// ======================================================

try {

    const state =
        globalThis.MorYaS01State;


    if (
        !state ||
        state.active !== true
    ) {
        return;
    }


    // ==================================================
    // HELPERS
    // ==================================================

    const clamp01 =
        (value) => {

            return Math.max(
                0,
                Math.min(
                    1,
                    value
                )
            );
        };


    const lerp =
        (
            start,
            end,
            t
        ) => {

            return (
                start +
                (
                    end -
                    start
                ) * t
            );
        };


    const setOpacitySafe =
        (name, opacity) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setOpacity ===
                        "function"
                    ) {

                        obj.setOpacity(
                            Math.round(
                                Math.max(
                                    0,
                                    Math.min(
                                        255,
                                        opacity
                                    )
                                )
                            )
                        );
                    }
                });
        };


    const setGroupOpacity =
        (
            objectNames,
            opacity
        ) => {

            objectNames.forEach(
                name => {

                    setOpacitySafe(
                        name,
                        opacity
                    );
                }
            );
        };


    // ==================================================
    // GROUPS
    // ==================================================

    const logoGroup = [

        "logo",
        "Txt_Subtitle"
    ];


    const profileGroup = [

        "Panel_MainMenu_Profile",
        "Txt_Profile",
        "Txt_ProfileProgress"
    ];


    const primaryGroup = [

        "Btn_Start",
        "Txt_Start"
    ];


    const secondaryGroup = [

        "Btn_Herbarium",
        "Btn_Achievements",
        "Btn_HowToPlay"
    ];


    // ==================================================
    // ENTER ANIMATION
    // ==================================================

    if (
        state.phase === "ENTER"
    ) {

        const elapsed =
            Date.now() -
            state.startedAt;


        const logoT =
            clamp01(
                elapsed / 450
            );


        setGroupOpacity(
            logoGroup,
            lerp(
                0,
                255,
                logoT
            )
        );


        const profileT =
            clamp01(
                (
                    elapsed -
                    150
                ) /
                450
            );


        setGroupOpacity(
            profileGroup,
            lerp(
                0,
                255,
                profileT
            )
        );


        const primaryT =
            clamp01(
                (
                    elapsed -
                    300
                ) /
                400
            );


        setGroupOpacity(
            primaryGroup,
            lerp(
                0,
                255,
                primaryT
            )
        );


        const secondaryT =
            clamp01(
                (
                    elapsed -
                    450
                ) /
                400
            );


        setGroupOpacity(
            secondaryGroup,
            lerp(
                0,
                255,
                secondaryT
            )
        );


        if (
            elapsed >= 850
        ) {

            state.phase =
                "READY";

            state.inputLockedUntil =
                Date.now();


            console.log(
                "S01 STATE -> READY"
            );
        }


        return;
    }


    // ==================================================
    // EXIT TO RPG
    // ==================================================

    if (
        state.phase === "EXIT_TO_RPG"
    ) {

        const elapsed =
            Date.now() -
            state.transitionStartedAt;


        const t =
            clamp01(
                elapsed /
                state.transitionDurationMs
            );


        const opacity =
            lerp(
                255,
                0,
                t
            );


        setGroupOpacity(
            logoGroup,
            opacity
        );


        setGroupOpacity(
            profileGroup,
            opacity
        );


        setGroupOpacity(
            primaryGroup,
            opacity
        );


        setGroupOpacity(
            secondaryGroup,
            opacity
        );


        if (
            t >= 1
        ) {

            state.active =
                false;


            // ==========================================
            // RESET CASE BRIDGE
            // ==========================================

            globalThis.MorYaCaseBridge = {

                enteredFromRPG:
                    false,

                caseActive:
                    false,

                activeCaseId:
                    "",

                returnScene:
                    "",

                returnEntryPoint:
                    "",

                lastCaseId:
                    "",

                lastCaseResult:
                    "",

                lastCaseScore:
                    0,

                lastCaseScoreMax:
                    100,

                startedAt:
                    0
            };


            // ==========================================
            // RPG ENTRY POINT
            // ==========================================

            const gameVariables =
                runtimeScene
                    .getGame()
                    .getVariables();


            const world =
                gameVariables.get(
                    "MorYaWorld"
                );


            world
                .getChildNamed(
                    "EntryPoint"
                )
                .setString(
                    "Default"
                );


            console.log(
                "S01 -> SC_HerbalHouse"
            );


            // ==========================================
            // ENTER RPG
            // ==========================================

            gdjs.evtTools.runtimeScene.replaceScene(
                runtimeScene,
                "SC_HerbalHouse",
                false
            );
        }


        return;
    }


} catch (error) {

    console.error(
        "S01 Main Menu Visual Engine Error:",
        error
    );
}
};
gdjs.S01_95MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.S01_95MainMenuCode.userFunc0x179dc60(runtimeScene);

}


};gdjs.S01_95MainMenuCode.userFunc0x14bcaf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S01 - MAIN MENU INPUT ROUTER
//
// Handles:
// - Start RPG
// - Herbarium
// - Achievements
// - How to Play
// ======================================================

try {

    const state =
        globalThis.MorYaS01State;


    if (
        !state ||
        state.active !== true
    ) {
        return;
    }


    if (
        state.phase !== "READY"
    ) {
        return;
    }


    if (
        Date.now() <
        (state.inputLockedUntil || 0)
    ) {
        return;
    }


    // ==================================================
    // HELPERS
    // ==================================================

    const getObj =
        (name) => {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    const setTextSafe =
        (name, value) => {

            const obj =
                getObj(name);


            if (
                obj &&
                typeof obj.setText ===
                    "function"
            ) {

                obj.setText(
                    String(value)
                );
            }
        };


    const getBounds =
        (obj) => {

            const x =
                typeof obj.getDrawableX ===
                    "function"
                    ? obj.getDrawableX()
                    : obj.getX();


            const y =
                typeof obj.getDrawableY ===
                    "function"
                    ? obj.getDrawableY()
                    : obj.getY();


            return {

                left:
                    x,

                top:
                    y,

                right:
                    x +
                    obj.getWidth(),

                bottom:
                    y +
                    obj.getHeight()
            };
        };


    const pointInside =
        (
            x,
            y,
            bounds,
            padding = 0
        ) => {

            return (

                x >=
                    bounds.left -
                    padding &&

                x <=
                    bounds.right +
                    padding &&

                y >=
                    bounds.top -
                    padding &&

                y <=
                    bounds.bottom +
                    padding
            );
        };


    // ==================================================
    // UI POINTER
    // ==================================================

    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "UI",
            0
        );


    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "UI",
            0
        );


    // ==================================================
    // START RPG
    // ==================================================

    const btnStart =
        getObj(
            "Btn_Start"
        );


    if (
        btnStart &&
        pointInside(
            mouseX,
            mouseY,
            getBounds(btnStart),
            12
        )
    ) {

        state.phase =
            "EXIT_TO_RPG";


        state.transitionStarted =
            true;


        state.transitionStartedAt =
            Date.now();


        state.inputLockedUntil =
            Date.now() + 500;


        state.selectedAction =
            "START_RPG";


        console.log(
            "S01 START RPG CLICKED"
        );


        return;
    }


    // ==================================================
    // HERBARIUM
    // ==================================================

    const btnHerbarium =
        getObj(
            "Btn_Herbarium"
        );


    if (
        btnHerbarium &&
        pointInside(
            mouseX,
            mouseY,
            getBounds(btnHerbarium),
            10
        )
    ) {

        setTextSafe(
            "Txt_ProfileProgress",
            "สมุดสมุนไพรจะเปิดให้ใช้งานในลำดับถัดไป"
        );


        state.inputLockedUntil =
            Date.now() + 250;


        console.log(
            "S01 HERBARIUM CLICKED"
        );


        return;
    }


    // ==================================================
    // ACHIEVEMENTS
    // ==================================================

    const btnAchievements =
        getObj(
            "Btn_Achievements"
        );


    if (
        btnAchievements &&
        pointInside(
            mouseX,
            mouseY,
            getBounds(btnAchievements),
            10
        )
    ) {

        setTextSafe(
            "Txt_ProfileProgress",
            "ระบบความสำเร็จจะเปิดให้ใช้งานในลำดับถัดไป"
        );


        state.inputLockedUntil =
            Date.now() + 250;


        console.log(
            "S01 ACHIEVEMENTS CLICKED"
        );


        return;
    }


    // ==================================================
    // HOW TO PLAY
    // ==================================================

    const btnHowToPlay =
        getObj(
            "Btn_HowToPlay"
        );


    if (
        btnHowToPlay &&
        pointInside(
            mouseX,
            mouseY,
            getBounds(btnHowToPlay),
            10
        )
    ) {

        setTextSafe(
            "Txt_ProfileProgress",
            "คู่มือการเล่นจะเพิ่มเป็นหน้าต่างแนะนำภายหลัง"
        );


        state.inputLockedUntil =
            Date.now() + 250;


        console.log(
            "S01 HOW TO PLAY CLICKED"
        );


        return;
    }


} catch (error) {

    console.error(
        "S01 Main Menu Input Router Error:",
        error
    );
}
};
gdjs.S01_95MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.S01_95MainMenuCode.userFunc0x14bcaf8(runtimeScene);

}


};gdjs.S01_95MainMenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S01_95MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S01_95MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.S01_95MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S01_95MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.S01_95MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S01_95MainMenuCode.GDTxt_9595ProfileObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595StartObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595StartObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595SubtitleObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595SubtitleObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HerbariumObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HerbariumObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595AchievementsObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595AchievementsObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HowToPlayObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HowToPlayObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBG_9595MainMenuObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBG_9595MainMenuObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDlogoObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDlogoObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDPanel_9595MainMenu_9595ProfileObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDPanel_9595MainMenu_9595ProfileObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595StartObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595StartObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HerbariumObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HerbariumObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595AchievementsObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595AchievementsObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HowToPlayObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HowToPlayObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileProgressObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileProgressObjects2.length = 0;

gdjs.S01_95MainMenuCode.eventsList4(runtimeScene);
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595StartObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595StartObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595SubtitleObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595SubtitleObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HerbariumObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HerbariumObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595AchievementsObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595AchievementsObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HowToPlayObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595HowToPlayObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBG_9595MainMenuObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBG_9595MainMenuObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDlogoObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDlogoObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDPanel_9595MainMenu_9595ProfileObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDPanel_9595MainMenu_9595ProfileObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595StartObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595StartObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HerbariumObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HerbariumObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595AchievementsObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595AchievementsObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HowToPlayObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDBtn_9595HowToPlayObjects2.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileProgressObjects1.length = 0;
gdjs.S01_95MainMenuCode.GDTxt_9595ProfileProgressObjects2.length = 0;


return;

}

gdjs['S01_95MainMenuCode'] = gdjs.S01_95MainMenuCode;
