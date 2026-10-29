gdjs.S04A_95ConsultPathCode = {};
gdjs.S04A_95ConsultPathCode.localVariables = [];
gdjs.S04A_95ConsultPathCode.idToCallbackMap = new Map();
gdjs.S04A_95ConsultPathCode.GDBG_9595ConsultPathObjects1= [];
gdjs.S04A_95ConsultPathCode.GDBG_9595ConsultPathObjects2= [];
gdjs.S04A_95ConsultPathCode.GDSpr_9595ConsultVisualObjects1= [];
gdjs.S04A_95ConsultPathCode.GDSpr_9595ConsultVisualObjects2= [];
gdjs.S04A_95ConsultPathCode.GDPanel_9595ConsultMainObjects1= [];
gdjs.S04A_95ConsultPathCode.GDPanel_9595ConsultMainObjects2= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultEyebrowObjects1= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultEyebrowObjects2= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultTitleObjects1= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultTitleObjects2= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultBodyObjects1= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultBodyObjects2= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryTitleObjects1= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryTitleObjects2= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryObjects1= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryObjects2= [];
gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects1= [];
gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects2= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultContinueObjects1= [];
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultContinueObjects2= [];


gdjs.S04A_95ConsultPathCode.userFunc0x1bebde8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04A_ConsultPath
// CONSULT PATH INITIALIZE
// DIRECT PREVIEW SAFE VERSION
// ======================================================

try {

    // ==================================================
    // 1. GET / CREATE SESSION
    // ==================================================

    let session =
        globalThis.MorYaCaseSession;


    // --------------------------------------------------
    // ถ้า Preview Scene นี้โดยตรง
    // จะยังไม่มี session จาก S02/S03/S04
    // จึงสร้าง dummy session สำหรับทดสอบ
    // --------------------------------------------------

    if (!session) {

        session = {

            case_id:
                "CASE001",

            asked_cue_ids:
                [],

            checked_safety_cue_ids:
                [],

            positive_red_flag_ids:
                [],

            explored_objects:
                [],

            disposition_choice:
                "CONSULT_HEALTH_PROFESSIONAL",

            disposition_route:
                "CONSULT_PATH",

            preview_fallback:
                true
        };


        globalThis.MorYaCaseSession =
            session;


        console.log(
            "S04A: Preview fallback session created"
        );
    }


    // ==================================================
    // 2. ENSURE ARRAYS EXIST
    // ==================================================

    if (
        !Array.isArray(
            session.asked_cue_ids
        )
    ) {

        session.asked_cue_ids = [];
    }


    if (
        !Array.isArray(
            session.checked_safety_cue_ids
        )
    ) {

        session.checked_safety_cue_ids = [];
    }


    if (
        !Array.isArray(
            session.positive_red_flag_ids
        )
    ) {

        session.positive_red_flag_ids = [];
    }


    if (
        !Array.isArray(
            session.explored_objects
        )
    ) {

        session.explored_objects = [];
    }


    // ==================================================
    // 3. HELPERS
    // ==================================================

    const getObjects =
        (name) => {

            return runtimeScene.getObjects(
                name
            );
        };


    const setText =
        (name, value) => {

            getObjects(name)
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


    const show =
        (name) => {

            getObjects(name)
                .forEach(obj => {

                    obj.hide(false);

                    if (
                        typeof obj.setOpacity ===
                            "function"
                    ) {

                        obj.setOpacity(255);
                    }
                });
        };


    // ==================================================
    // 4. READ DATA
    // ==================================================

    const askedCount =
        session
            .asked_cue_ids
            .length;


    const safetyCount =
        session
            .checked_safety_cue_ids
            .length;


    const redFlagCount =
        session
            .positive_red_flag_ids
            .length;


    const exploredCount =
        session
            .explored_objects
            .length;


    // ==================================================
    // 5. PATH STATE
    // ==================================================

    session.disposition_choice =
        "CONSULT_HEALTH_PROFESSIONAL";


    session.disposition_route =
        "CONSULT_PATH";


    session.consult_path_started =
        true;


    session.consult_path_completed =
        false;


    session.consult_started_at =
        Date.now();


    // เก็บ snapshot ของข้อมูลก่อนปรึกษา
    session.consult_package = {

        asked_cue_ids:
            [
                ...session
                    .asked_cue_ids
            ],

        checked_safety_cue_ids:
            [
                ...session
                    .checked_safety_cue_ids
            ],

        positive_red_flag_ids:
            [
                ...session
                    .positive_red_flag_ids
            ],

        explored_objects:
            [
                ...session
                    .explored_objects
            ]
    };


    // ==================================================
    // 6. LOCAL STATE
    // ==================================================

    globalThis.MorYaS04AState = {

        active:
            true,

        phase:
            "READY",

        inputLockedUntil:
            Date.now() + 300
    };


    // ==================================================
    // 7. UI TEXT
    // ==================================================

    setText(
        "Txt_ConsultEyebrow",
        "แนวทางการดูแล"
    );


    setText(
        "Txt_ConsultTitle",
        "ปรึกษาบุคลากรสุขภาพ"
    );


    setText(
        "Txt_ConsultBody",

        "รวบรวมข้อมูลที่ได้จากการพูดคุยและการประเมิน\n" +
        "เพื่อใช้ประกอบการปรึกษาบุคลากรสุขภาพ"
    );


    setText(
        "Txt_ConsultSummaryTitle",
        "ข้อมูลที่เตรียมสำหรับการปรึกษา"
    );


    // ==================================================
    // 8. SUMMARY
    // ==================================================

    let redFlagText = "";


    if (redFlagCount > 0) {

        redFlagText =
            "ข้อมูลสัญญาณเตือนที่พบ: " +
            redFlagCount +
            " ประเด็น";

    } else {

        redFlagText =
            "ข้อมูลสัญญาณเตือนที่พบ: 0 ประเด็น";
    }


    const summaryText =

        "ข้อมูลที่สำรวจแล้ว: " +
        exploredCount +
        " จุด\n\n" +

        "ข้อมูลที่สอบถามแล้ว: " +
        askedCount +
        " ประเด็น\n\n" +

        "ประเด็นด้านความปลอดภัยที่ตรวจสอบแล้ว: " +
        safetyCount +
        " ประเด็น\n\n" +

        redFlagText;


    setText(
        "Txt_ConsultSummary",
        summaryText
    );


    setText(
        "Txt_ConsultContinue",
        "ส่งข้อมูลเพื่อปรึกษา"
    );


    // ==================================================
    // 9. SHOW UI
    // ==================================================

    [
        "Panel_ConsultMain",
        "Txt_ConsultEyebrow",
        "Txt_ConsultTitle",
        "Txt_ConsultBody",
        "Txt_ConsultSummaryTitle",
        "Txt_ConsultSummary",
        "Btn_ConsultContinue",
        "Txt_ConsultContinue",
        "Icon_ConsultCaseFile",
        "Spr_ConsultVisual"
    ]
    .forEach(name => {

        show(name);
    });


    // ==================================================
    // 10. DEBUG
    // ==================================================

    console.log(
        "S04A CONSULT READY",
        {
            previewFallback:
                session.preview_fallback ===
                true,

            explored:
                exploredCount,

            asked:
                askedCount,

            safety:
                safetyCount,

            redFlags:
                redFlagCount
        }
    );


} catch (error) {

    console.error(
        "S04A Consult Init Error:",
        error
    );
}
};
gdjs.S04A_95ConsultPathCode.eventsList0 = function(runtimeScene) {

{


gdjs.S04A_95ConsultPathCode.userFunc0x1bebde8(runtimeScene);

}


};gdjs.S04A_95ConsultPathCode.mapOfGDgdjs_9546S04A_959595ConsultPathCode_9546GDBtn_95959595ConsultContinueObjects1Objects = Hashtable.newFrom({"Btn_ConsultContinue": gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects1});
gdjs.S04A_95ConsultPathCode.userFunc0x139def8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04A - CONSULT CONTINUE
// ======================================================

const session =
    globalThis.MorYaCaseSession;


const state =
    globalThis.MorYaS04AState;


// ======================================================
// VALIDATE
// ======================================================

if (!session) {

    console.error(
        "S04A Continue: session missing"
    );

    return;
}


if (!state) {

    console.error(
        "S04A Continue: state missing"
    );

    return;
}


// ======================================================
// INPUT LOCK
// ======================================================

if (
    state.active !== true ||
    state.phase !== "READY"
) {
    return;
}


if (
    Date.now() <
    state.inputLockedUntil
) {
    return;
}


// ======================================================
// LOCK BUTTON
// ======================================================

state.active =
    false;


state.phase =
    "LEAVING";


// ======================================================
// SAVE RESULT
// ======================================================

session.consult_path_completed =
    true;


session.consult_completed_at =
    Date.now();


session.consult_action =
    "CASE_INFORMATION_SHARED";


session.next_phase =
    "REFLECTION";


// ======================================================
// DEBUG
// ======================================================

console.log(
    "S04A CONSULT COMPLETED",
    {
        caseId:
            session.case_id,

        disposition:
            session.disposition_choice,

        action:
            session.consult_action,

        next:
            session.next_phase
    }
);


// ======================================================
// GO TO REFLECTION
// ======================================================

gdjs.evtTools.runtimeScene.replaceScene(
    runtimeScene,
    "S07_Reflection",
    false
);
};
gdjs.S04A_95ConsultPathCode.eventsList1 = function(runtimeScene) {

{


gdjs.S04A_95ConsultPathCode.userFunc0x139def8(runtimeScene);

}


};gdjs.S04A_95ConsultPathCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04A_95ConsultPathCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_ConsultContinue"), gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04A_95ConsultPathCode.mapOfGDgdjs_9546S04A_959595ConsultPathCode_9546GDBtn_95959595ConsultContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04A_95ConsultPathCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.S04A_95ConsultPathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S04A_95ConsultPathCode.GDBG_9595ConsultPathObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDBG_9595ConsultPathObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDSpr_9595ConsultVisualObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDSpr_9595ConsultVisualObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDPanel_9595ConsultMainObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDPanel_9595ConsultMainObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultEyebrowObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultEyebrowObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultTitleObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultTitleObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultBodyObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultBodyObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryTitleObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryTitleObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultContinueObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultContinueObjects2.length = 0;

gdjs.S04A_95ConsultPathCode.eventsList2(runtimeScene);
gdjs.S04A_95ConsultPathCode.GDBG_9595ConsultPathObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDBG_9595ConsultPathObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDSpr_9595ConsultVisualObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDSpr_9595ConsultVisualObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDPanel_9595ConsultMainObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDPanel_9595ConsultMainObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultEyebrowObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultEyebrowObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultTitleObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultTitleObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultBodyObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultBodyObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryTitleObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryTitleObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultSummaryObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDBtn_9595ConsultContinueObjects2.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultContinueObjects1.length = 0;
gdjs.S04A_95ConsultPathCode.GDTxt_9595ConsultContinueObjects2.length = 0;


return;

}

gdjs['S04A_95ConsultPathCode'] = gdjs.S04A_95ConsultPathCode;
