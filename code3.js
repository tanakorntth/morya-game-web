gdjs.S02_95CaseIntroCode = {};
gdjs.S02_95CaseIntroCode.localVariables = [];
gdjs.S02_95CaseIntroCode.idToCallbackMap = new Map();
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTitleObjects1= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTitleObjects2= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTypeObjects1= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTypeObjects2= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseStoryObjects1= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseStoryObjects2= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595EnterCaseObjects1= [];
gdjs.S02_95CaseIntroCode.GDTxt_9595EnterCaseObjects2= [];
gdjs.S02_95CaseIntroCode.GDBG_9595S02_9595CaseIntroObjects1= [];
gdjs.S02_95CaseIntroCode.GDBG_9595S02_9595CaseIntroObjects2= [];
gdjs.S02_95CaseIntroCode.GDSpr_9595YaiSai_9595IntroObjects1= [];
gdjs.S02_95CaseIntroCode.GDSpr_9595YaiSai_9595IntroObjects2= [];
gdjs.S02_95CaseIntroCode.GDPanel_9595S02_9595CaseFileObjects1= [];
gdjs.S02_95CaseIntroCode.GDPanel_9595S02_9595CaseFileObjects2= [];
gdjs.S02_95CaseIntroCode.GDBtn_9595EnterCaseObjects1= [];
gdjs.S02_95CaseIntroCode.GDBtn_9595EnterCaseObjects2= [];


gdjs.S02_95CaseIntroCode.userFunc0x94c6e0 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S02_95CaseIntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.S02_95CaseIntroCode.userFunc0x94c6e0(runtimeScene);

}


};gdjs.S02_95CaseIntroCode.userFunc0xb15940 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S02_CaseIntro
// CASE INTRO INITIALIZER
//
// CASE001:
// ยายสายมีอาการหลังมื้อกลางวัน
// ======================================================

try {

    // ==================================================
    // CASE
    // ==================================================

    const CASE_ID =
        "CASE001";


    // ==================================================
    // HELPER
    // ==================================================

    const setTextSafe =
        (name, value) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        obj &&
                        typeof obj.setText ===
                            "function"
                    ) {

                        obj.setText(
                            String(value)
                        );
                    }
                });
        };


    // ==================================================
    // CASE INTRO CONTENT
    // ==================================================

    const caseTitle =
        "ยายสายกับมื้อกลางวัน";


    const caseType =
        "สถานการณ์ดูแลเบื้องต้น";


    const caseStory =
        "ช่วงบ่ายวันนี้ ยายสาย อายุ 58 ปี แวะมาที่เรือนหมอยาและเล่าว่า " +
        "หลังรับประทานอาหารกลางวันรู้สึกแน่นท้อง อึดอัด และไม่ค่อยสบายตัว\n\n" +

        "ยายสายจึงอยากทราบว่าควรดูแลตัวเองอย่างไร\n\n" +

        "ก่อนให้คำแนะนำ คุณควรพูดคุยกับยายสาย สังเกตสิ่งรอบตัว " +
        "และค้นหาข้อมูลที่จำเป็นให้ครบถ้วน";


    // ==================================================
    // FRESH CASE SESSION
    // ==================================================

    globalThis.MorYaCaseSession = {

        // ------------------------------------------------
        // CASE
        // ------------------------------------------------

        case_id:
            CASE_ID,

        started_at:
            Date.now(),


        // ------------------------------------------------
        // S03 - EXPLORATION
        // ------------------------------------------------

        explored_objects:
            [],

        asked_cue_ids:
            [],

        discovered_concepts:
            [],

        unlocked_fact_ids:
            [],

        checked_safety_cue_ids:
            [],

        positive_red_flag_ids:
            [],


        current_inspect_target:
            "",

        current_inspect_cue_id:
            "",


        // ------------------------------------------------
        // QUESTION BUDGET
        // ------------------------------------------------

        question_budget_max:
            7,

        question_budget_remaining:
            7,


        cue_page:
            0,

        cues_per_page:
            4,

        visible_cue_ids:
            [
                null,
                null,
                null,
                null
            ],


        last_answered_cue_id:
            "",


        // ------------------------------------------------
        // DISPOSITION
        // ------------------------------------------------

        disposition_choice:
            "",

        disposition_confirmed:
            false,


        // ------------------------------------------------
        // HERB / INTERVENTION
        // ------------------------------------------------

        s05_basket_herb_id:
            "",

        s05_basket_herb_name_th:
            "",

        s05_basket_part_id:
            "",

        s05_basket_part_name_th:
            "",

        s05_preparation:
            "",

        s05_preparation_confirmed:
            false,

        s05_completed:
            false,


        // ------------------------------------------------
        // FOOD PREPARATION
        // ------------------------------------------------

        foodprep_completed:
            false,

        foodprep_recipe_id:
            "",

        foodprep_timing_grade:
            "",

        foodprep_timing_percent:
            0,


        // ------------------------------------------------
        // COUNSELLING
        // ------------------------------------------------

        counselling_selected_cards:
            [],

        counselling_selected_categories:
            [],

        counselling_selected_details:
            [],

        counselling_selected_count:
            0,

        counselling_unsafe_count:
            0,

        counselling_has_unsafe_advice:
            false,

        safe_use_counselling_score:
            0,

        safe_use_counselling_max:
            10,


        // ------------------------------------------------
        // REFLECTION
        // ------------------------------------------------

        reflection_selected:
            "",

        reflection_completed:
            false,

        reflection_score:
            0,


        // ------------------------------------------------
        // CASE RESULT
        // ------------------------------------------------

        case_completed:
            false
    };


    // ==================================================
    // S02 STATE
    //
    // ไม่แตะ opacity
    // ไม่ย้ายตำแหน่ง object
    // ==================================================

    globalThis.MorYaS02State = {

        active:
            true,

        phase:
            "READY",

        inputLockedUntil:
            Date.now() + 300
    };


    // ==================================================
    // DISPLAY
    // ==================================================

    setTextSafe(
        "Txt_CaseTitle",
        caseTitle
    );


    setTextSafe(
        "Txt_CaseType",
        caseType
    );


    setTextSafe(
        "Txt_CaseStory",
        caseStory
    );


    setTextSafe(
        "Txt_EnterCase",
        "เริ่มพูดคุย"
    );


    // ==================================================
    // MAKE SURE OBJECTS ARE VISIBLE
    // ==================================================

    const visibleObjects = [

        "Spr_YaiSai_Intro",

        "Panel_S02_CaseFile",

        "Txt_CaseTitle",

        "Txt_CaseType",

        "Txt_CaseStory",

        "Btn_EnterCase",

        "Txt_EnterCase"
    ];


    visibleObjects.forEach(
        name => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(false);

                    if (
                        typeof obj.setOpacity ===
                            "function"
                    ) {

                        obj.setOpacity(255);
                    }
                });
        }
    );


    // ==================================================
    // DEBUG
    // ==================================================

    console.log(
        "S02 INITIALIZED:",
        {
            caseId:
                CASE_ID,

            title:
                caseTitle,

            meal:
                "LUNCH"
        }
    );


} catch (error) {

    console.error(
        "S02 INITIALIZER ERROR:",
        error
    );
}
};
gdjs.S02_95CaseIntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.S02_95CaseIntroCode.userFunc0xb15940(runtimeScene);

}


};gdjs.S02_95CaseIntroCode.userFunc0x1280bb0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S02 - CASE INTRO VISUAL ENGINE
//
// ENTER:
// - Yai Sai slides gently from left
// - case file slides gently from right
// - content appears progressively
//
// EXIT:
// - fade UI + character
// - enter S03_ClinicalEncounter
// ======================================================

try {

    const state =
        globalThis.MorYaS02State;


    if (
        !state ||
        state.active !== true
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


    const easeOutCubic =
        (t) => {

            const p =
                1 - t;


            return (
                1 -
                p * p * p
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
            names,
            opacity
        ) => {

            names.forEach(
                name => {

                    setOpacitySafe(
                        name,
                        opacity
                    );
                }
            );
        };


    // ==================================================
    // OBJECT GROUPS
    // ==================================================

    const textGroup = [

        "Txt_CaseTitle",
        "Txt_CaseType",
        "Txt_CaseStory"
    ];


    const buttonGroup = [

        "Btn_EnterCase",
        "Txt_EnterCase"
    ];


    // ==================================================
    // ENTER
    // ==================================================

    if (
        state.phase === "ENTER"
    ) {

        const elapsed =
            Date.now() -
            state.startedAt;


        // ----------------------------------------------
        // CHARACTER
        // 0 -> 550 ms
        // ----------------------------------------------

        const characterT =
            easeOutCubic(

                clamp01(
                    elapsed /
                    550
                )
            );


        const character =
            getObj(
                "Spr_YaiSai_Intro"
            );


        if (character) {

            character.setPosition(

                lerp(
                    state.characterFinalX - 35,
                    state.characterFinalX,
                    characterT
                ),

                state.characterFinalY
            );
        }


        setOpacitySafe(

            "Spr_YaiSai_Intro",

            lerp(
                0,
                255,
                characterT
            )
        );


        // ----------------------------------------------
        // CASE FILE
        // 100 -> 650 ms
        // ----------------------------------------------

        const panelT =
            easeOutCubic(

                clamp01(
                    (
                        elapsed -
                        100
                    ) /
                    550
                )
            );


        const panel =
            getObj(
                "Panel_S02_CaseFile"
            );


        if (panel) {

            panel.setPosition(

                lerp(
                    state.panelFinalX + 35,
                    state.panelFinalX,
                    panelT
                ),

                state.panelFinalY
            );
        }


        setOpacitySafe(

            "Panel_S02_CaseFile",

            lerp(
                0,
                255,
                panelT
            )
        );


        // ----------------------------------------------
        // TEXT
        // 300 -> 750 ms
        // ----------------------------------------------

        const textT =
            clamp01(
                (
                    elapsed -
                    300
                ) /
                450
            );


        setGroupOpacity(

            textGroup,

            lerp(
                0,
                255,
                textT
            )
        );


        // ----------------------------------------------
        // ENTER BUTTON
        // 550 -> 900 ms
        // ----------------------------------------------

        const buttonT =
            clamp01(
                (
                    elapsed -
                    550
                ) /
                350
            );


        setGroupOpacity(

            buttonGroup,

            lerp(
                0,
                255,
                buttonT
            )
        );


        // ----------------------------------------------
        // READY
        // ----------------------------------------------

        if (
            elapsed >= 900
        ) {

            state.phase =
                "READY";


            state.inputLockedUntil =
                Date.now();
        }


        return;
    }


    // ==================================================
    // EXIT TO CLINICAL ENCOUNTER
    // ==================================================

    if (
        state.phase ===
        "EXIT_TO_ENCOUNTER"
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


        setOpacitySafe(
            "Spr_YaiSai_Intro",
            opacity
        );


        setOpacitySafe(
            "Panel_S02_CaseFile",
            opacity
        );


        setGroupOpacity(
            textGroup,
            opacity
        );


        setGroupOpacity(
            buttonGroup,
            opacity
        );


        if (
            t >= 1
        ) {

            state.active =
                false;


            console.log(
                "S02 -> S03_ClinicalEncounter"
            );


            gdjs.evtTools.runtimeScene.replaceScene(

                runtimeScene,

                "S03_ClinicalEncounter",

                false
            );
        }
    }


} catch (error) {

    console.error(
        "S02 Case Intro Visual Engine Error:",
        error
    );
}
};
gdjs.S02_95CaseIntroCode.eventsList2 = function(runtimeScene) {

{


gdjs.S02_95CaseIntroCode.userFunc0x1280bb0(runtimeScene);

}


};gdjs.S02_95CaseIntroCode.userFunc0xe4faf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S02 - CASE INTRO INPUT ROUTER
//
// Btn_EnterCase
// → S03_ClinicalEncounter
// ======================================================

const state =
    globalThis.MorYaS02State;


// ======================================================
// VALIDATE
// ======================================================

if (
    !state ||
    state.active === false
) {
    return;
}


// ------------------------------------------------------
// INPUT LOCK
// ------------------------------------------------------

if (
    Date.now() <
    Number(
        state.inputLockedUntil || 0
    )
) {
    return;
}


// ======================================================
// GET BUTTON
// ======================================================

const buttons =
    runtimeScene.getObjects(
        "Btn_EnterCase"
    );


if (
    buttons.length === 0
) {

    console.error(
        "S02: Btn_EnterCase not found"
    );

    return;
}


const button =
    buttons[0];


// ======================================================
// HIT TEST
// ======================================================

// UI layer
const uiMouseX =
    gdjs.evtTools.input.getCursorX(
        runtimeScene,
        "UI",
        0
    );

const uiMouseY =
    gdjs.evtTools.input.getCursorY(
        runtimeScene,
        "UI",
        0
    );


// Base layer fallback
const baseMouseX =
    gdjs.evtTools.input.getCursorX(
        runtimeScene,
        "",
        0
    );

const baseMouseY =
    gdjs.evtTools.input.getCursorY(
        runtimeScene,
        "",
        0
    );


const isInside =
    (x, y, obj) => {

        return (
            x >= obj.getX() &&
            x <= obj.getX() +
                obj.getWidth() &&

            y >= obj.getY() &&
            y <= obj.getY() +
                obj.getHeight()
        );
    };


const clicked =
    isInside(
        uiMouseX,
        uiMouseY,
        button
    ) ||

    isInside(
        baseMouseX,
        baseMouseY,
        button
    );


if (!clicked) {
    return;
}


// ======================================================
// LOCK INPUT IMMEDIATELY
// ======================================================

state.active =
    false;

state.phase =
    "LEAVING";

state.inputLockedUntil =
    Date.now() + 1000;


// ======================================================
// UPDATE CASE SESSION
// ======================================================

const session =
    globalThis.MorYaCaseSession;


if (session) {

    session.intro_completed =
        true;

    session.encounter_started_at =
        Date.now();

    session.next_phase =
        "CLINICAL_ENCOUNTER";
}


// ======================================================
// DEBUG
// ======================================================

console.log(
    "S02 → S03_ClinicalEncounter",
    {
        caseId:
            session?.case_id || "NO_CASE",

        introCompleted:
            session?.intro_completed
    }
);


// ======================================================
// CHANGE SCENE DIRECTLY
// ======================================================

gdjs.evtTools.runtimeScene.replaceScene(
    runtimeScene,
    "S03_ClinicalEncounter",
    false
);
};
gdjs.S02_95CaseIntroCode.eventsList3 = function(runtimeScene) {

{


gdjs.S02_95CaseIntroCode.userFunc0xe4faf8(runtimeScene);

}


};gdjs.S02_95CaseIntroCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S02_95CaseIntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S02_95CaseIntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.S02_95CaseIntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S02_95CaseIntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.S02_95CaseIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTitleObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTitleObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTypeObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTypeObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseStoryObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseStoryObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595EnterCaseObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595EnterCaseObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDBG_9595S02_9595CaseIntroObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDBG_9595S02_9595CaseIntroObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDSpr_9595YaiSai_9595IntroObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDSpr_9595YaiSai_9595IntroObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDPanel_9595S02_9595CaseFileObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDPanel_9595S02_9595CaseFileObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDBtn_9595EnterCaseObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDBtn_9595EnterCaseObjects2.length = 0;

gdjs.S02_95CaseIntroCode.eventsList4(runtimeScene);
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTitleObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTitleObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTypeObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseTypeObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseStoryObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595CaseStoryObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595EnterCaseObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDTxt_9595EnterCaseObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDBG_9595S02_9595CaseIntroObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDBG_9595S02_9595CaseIntroObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDSpr_9595YaiSai_9595IntroObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDSpr_9595YaiSai_9595IntroObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDPanel_9595S02_9595CaseFileObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDPanel_9595S02_9595CaseFileObjects2.length = 0;
gdjs.S02_95CaseIntroCode.GDBtn_9595EnterCaseObjects1.length = 0;
gdjs.S02_95CaseIntroCode.GDBtn_9595EnterCaseObjects2.length = 0;


return;

}

gdjs['S02_95CaseIntroCode'] = gdjs.S02_95CaseIntroCode;
