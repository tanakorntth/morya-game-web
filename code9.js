gdjs.S04B_95UrgentReferralCode = {};
gdjs.S04B_95UrgentReferralCode.localVariables = [];
gdjs.S04B_95UrgentReferralCode.idToCallbackMap = new Map();
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentEyebrowObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentEyebrowObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentTitleObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentTitleObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentBodyObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentBodyObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryTitleObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryTitleObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentContinueObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentContinueObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDPanel_9595UrgentMainObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDPanel_9595UrgentMainObjects2= [];
gdjs.S04B_95UrgentReferralCode.GDBG_9595UrgentReferralObjects1= [];
gdjs.S04B_95UrgentReferralCode.GDBG_9595UrgentReferralObjects2= [];


gdjs.S04B_95UrgentReferralCode.userFunc0x1278678 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04B_UrgentReferral
// URGENT REFERRAL INITIALIZE
// DIRECT PREVIEW SAFE VERSION
// ======================================================

try {

    // ==================================================
    // 1. GET / CREATE SESSION
    // ==================================================

    let session =
        globalThis.MorYaCaseSession;


    // รองรับ Preview Scene โดยตรง
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
                "REFER_URGENT",

            disposition_route:
                "URGENT_REFERRAL_PATH",

            preview_fallback:
                true
        };


        globalThis.MorYaCaseSession =
            session;
    }


    // ==================================================
    // 2. NORMALIZE ARRAYS
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
        (name) =>
            runtimeScene.getObjects(name);


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
    // 4. COUNTS
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


    // ==================================================
    // 5. PATH STATE
    // ==================================================

    session.disposition_choice =
        "REFER_URGENT";


    session.disposition_route =
        "URGENT_REFERRAL_PATH";


    session.urgent_referral_started =
        true;


    session.urgent_referral_completed =
        false;


    session.urgent_referral_started_at =
        Date.now();


    // snapshot ของข้อมูลที่มีตอนส่งต่อ
    session.urgent_referral_package = {

        asked_cue_ids:
            [
                ...session.asked_cue_ids
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
            ]
    };


    globalThis.MorYaS04BState = {

        active:
            true,

        phase:
            "READY",

        inputLockedUntil:
            Date.now() + 300
    };


    // ==================================================
    // 6. TEXT
    // ==================================================

    setText(
        "Txt_UrgentEyebrow",
        "แนวทางการดูแล"
    );


    setText(
        "Txt_UrgentTitle",
        "ส่งต่อเพื่อประเมินเร่งด่วน"
    );


    setText(
        "Txt_UrgentBody",

        "คุณเลือกดำเนินการส่งต่อผู้รับบริการ " +
        "เพื่อให้ได้รับการประเมินเพิ่มเติมอย่างเร่งด่วน\n\n" +

        "ข้อมูลที่รวบรวมไว้จะถูกจัดเตรียม " +
        "เพื่อประกอบการส่งต่อ"
    );


    setText(
        "Txt_UrgentSummaryTitle",
        "ข้อมูลประกอบการส่งต่อ"
    );


    const summaryText =

        "ข้อมูลที่สอบถามแล้ว: " +
        askedCount +
        " ประเด็น\n\n" +

        "ประเด็นด้านความปลอดภัยที่ตรวจสอบแล้ว: " +
        safetyCount +
        " ประเด็น\n\n" +

        "ข้อมูลสัญญาณเตือนที่พบ: " +
        redFlagCount +
        " ประเด็น";


    setText(
        "Txt_UrgentSummary",
        summaryText
    );


    setText(
        "Txt_UrgentContinue",
        "ดำเนินการส่งต่อ"
    );


    // ==================================================
    // 7. SHOW UI
    // ==================================================

    [
        "Panel_UrgentMain",
        "Txt_UrgentEyebrow",
        "Txt_UrgentTitle",
        "Txt_UrgentBody",
        "Txt_UrgentSummaryTitle",
        "Txt_UrgentSummary",
        "Btn_UrgentContinue",
        "Txt_UrgentContinue",
        "Icon_UrgentCaseFile",
        "Spr_UrgentVisual"
    ]
    .forEach(name => {

        show(name);
    });


    console.log(
        "S04B URGENT REFERRAL READY:",
        {
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
        "S04B Urgent Init Error:",
        error
    );
}
};
gdjs.S04B_95UrgentReferralCode.eventsList0 = function(runtimeScene) {

{


gdjs.S04B_95UrgentReferralCode.userFunc0x1278678(runtimeScene);

}


};gdjs.S04B_95UrgentReferralCode.mapOfGDgdjs_9546S04B_959595UrgentReferralCode_9546GDBtn_95959595UrgentContinueObjects1Objects = Hashtable.newFrom({"Btn_UrgentContinue": gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects1});
gdjs.S04B_95UrgentReferralCode.userFunc0xbb6e58 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04B - COMPLETE URGENT REFERRAL
// ======================================================

try {

    const session =
        globalThis.MorYaCaseSession;

    const state =
        globalThis.MorYaS04BState;


    if (
        !session ||
        !state
    ) {
        return;
    }


    // ==================================================
    // INPUT LOCK
    // ==================================================

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


    // ==================================================
    // LOCK
    // ==================================================

    state.active =
        false;


    state.phase =
        "LEAVING";


    // ==================================================
    // SAVE
    // ==================================================

    session.urgent_referral_completed =
        true;


    session.urgent_referral_completed_at =
        Date.now();


    session.urgent_referral_action =
        "REFERRAL_INITIATED";


    session.next_phase =
        "REFLECTION";


    console.log(
        "S04B URGENT REFERRAL COMPLETED:",
        {
            caseId:
                session.case_id,

            disposition:
                session.disposition_choice,

            action:
                session.urgent_referral_action
        }
    );


    // ==================================================
    // NEXT
    // ==================================================

    gdjs.evtTools.runtimeScene.replaceScene(
        runtimeScene,
        "S07_Reflection",
        false
    );


} catch (error) {

    console.error(
        "S04B Continue Error:",
        error
    );
}
};
gdjs.S04B_95UrgentReferralCode.eventsList1 = function(runtimeScene) {

{


gdjs.S04B_95UrgentReferralCode.userFunc0xbb6e58(runtimeScene);

}


};gdjs.S04B_95UrgentReferralCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04B_95UrgentReferralCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_UrgentContinue"), gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04B_95UrgentReferralCode.mapOfGDgdjs_9546S04B_959595UrgentReferralCode_9546GDBtn_95959595UrgentContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04B_95UrgentReferralCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.S04B_95UrgentReferralCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentEyebrowObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentEyebrowObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentTitleObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentTitleObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentBodyObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentBodyObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryTitleObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryTitleObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentContinueObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentContinueObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDPanel_9595UrgentMainObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDPanel_9595UrgentMainObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBG_9595UrgentReferralObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBG_9595UrgentReferralObjects2.length = 0;

gdjs.S04B_95UrgentReferralCode.eventsList2(runtimeScene);
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentEyebrowObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentEyebrowObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentTitleObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentTitleObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentBodyObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentBodyObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryTitleObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryTitleObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentSummaryObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBtn_9595UrgentContinueObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentContinueObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDTxt_9595UrgentContinueObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDPanel_9595UrgentMainObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDPanel_9595UrgentMainObjects2.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBG_9595UrgentReferralObjects1.length = 0;
gdjs.S04B_95UrgentReferralCode.GDBG_9595UrgentReferralObjects2.length = 0;


return;

}

gdjs['S04B_95UrgentReferralCode'] = gdjs.S04B_95UrgentReferralCode;
