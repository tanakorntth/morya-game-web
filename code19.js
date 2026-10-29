gdjs.S06_95Counselling_95LegacyCode = {};
gdjs.S06_95Counselling_95LegacyCode.localVariables = [];
gdjs.S06_95Counselling_95LegacyCode.idToCallbackMap = new Map();
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingTitleObjects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingTitleObjects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingSummaryObjects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingSummaryObjects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingStatusObjects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingStatusObjects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel1Objects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel1Objects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel2Objects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel2Objects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel3Objects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel3Objects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel4Objects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel4Objects2= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595ConfirmCounsellingObjects1= [];
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595ConfirmCounsellingObjects2= [];


gdjs.S06_95Counselling_95LegacyCode.userFunc0xdc0e00 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =========================================================
    // MorYa Demo0.1
    // S06_Counselling
    // INITIALIZE COUNSELLING CHOICE ENGINE
    // =========================================================

    const gameData =
        globalThis.MorYaGameData;

    const session =
        globalThis.MorYaCaseSession;


    // =========================================================
    // 1. VALIDATE
    // =========================================================

    if (!gameData) {
        throw new Error(
            "MorYaGameData ไม่พร้อมใช้งาน"
        );
    }


    if (!session) {
        throw new Error(
            "MorYaCaseSession ไม่พร้อมใช้งาน"
        );
    }


    const currentCase =
        gameData.indexes
            ?.case_by_id
            ?.[session.case_id];


    if (!currentCase) {
        throw new Error(
            "ไม่พบ Case: " +
            String(session.case_id)
        );
    }


    // =========================================================
    // 2. HELPER
    // =========================================================

    const getObj =
        function(name) {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    // =========================================================
    // 3. OBJECTS
    // =========================================================

    const titleText =
        getObj(
            "Txt_CounsellingTitle"
        );


    const summaryText =
        getObj(
            "Txt_CounsellingSummary"
        );


    const statusText =
        getObj(
            "Txt_CounsellingStatus"
        );


    // =========================================================
    // 4. SESSION DEFAULTS
    // =========================================================

    if (
        !Array.isArray(
            session
                .counselling_selected_ids
        )
    ) {

        session
            .counselling_selected_ids =
            [];
    }


    session.counselling_selection_limit =
        2;


    // =========================================================
    // 5. COUNSELLING OPTIONS
    // =========================================================
    //
    // Demo0.1 generic competency choices
    //
    // SAFE_USE        = 6
    // FOLLOWUP        = 4
    // BENEFIT_ONLY    = 0
    // NAME_ONLY       = 0
    //
    // ภายหลังสามารถย้าย options เหล่านี้
    // เข้า counselling_option_master.json
    // =========================================================

    const counsellingOptions = [

        {
            id:
                "COUNSEL_SAFE_USE",

            text:
                "อธิบายวิธีใช้หรือบริบทการใช้ที่เหมาะสม " +
                "พร้อมข้อควรระวังที่เกี่ยวข้อง",

            score:
                6,

            competency:
                "SAFE_USE"
        },

        {
            id:
                "COUNSEL_FOLLOWUP",

            text:
                "แนะนำการติดตามอาการ และบอกว่าเมื่อใดควรหยุดดูแลตนเอง " +
                "หรือกลับมารับการประเมิน",

            score:
                4,

            competency:
                "FOLLOWUP"
        },

        {
            id:
                "COUNSEL_BENEFIT_ONLY",

            text:
                "อธิบายเฉพาะประโยชน์ของสิ่งที่เลือก " +
                "โดยไม่กล่าวถึงข้อจำกัดหรือข้อควรระวัง",

            score:
                0,

            competency:
                "INCOMPLETE_COUNSELLING"
        },

        {
            id:
                "COUNSEL_NAME_ONLY",

            text:
                "บอกเพียงชื่อสิ่งที่เลือก " +
                "แล้วให้ผู้รับบริการไปลองใช้เอง",

            score:
                0,

            competency:
                "INCOMPLETE_COUNSELLING"
        }
    ];


    globalThis.MorYaCounsellingOptions =
        counsellingOptions;


    // =========================================================
    // 6. TITLE
    // =========================================================

    if (titleText) {

        titleText.setText(
            currentCase
                .case_title_th +
            "\n\n" +
            "การให้คำแนะนำ"
        );
    }


    // =========================================================
    // 7. SUMMARY
    // =========================================================

    if (summaryText) {

        summaryText.setText(
            "สิ่งที่คุณเลือก:\n" +
            (
                session
                    .selected_intervention_name
                || "-"
            ) +
            "\n\n" +
            "เลือกประเด็นที่คุณจะอธิบายแก่ผู้รับบริการ"
        );
    }


    // =========================================================
    // 8. RENDER FUNCTION
    // =========================================================

    globalThis.MorYaRenderCounselling =
        function(runtimeScene) {

            const session =
                globalThis.MorYaCaseSession;


            if (!session) {
                return;
            }


            const options =
                globalThis
                    .MorYaCounsellingOptions
                || [];


            const buttonNames = [

                "Btn_Counsel1",

                "Btn_Counsel2",

                "Btn_Counsel3",

                "Btn_Counsel4"
            ];


            // ---------------------------------------------
            // Render buttons
            // ---------------------------------------------

            for (
                let i = 0;
                i < buttonNames.length;
                i++
            ) {

                const objects =
                    runtimeScene.getObjects(
                        buttonNames[i]
                    );


                if (
                    objects.length === 0
                ) {
                    continue;
                }


                const button =
                    objects[0];


                const option =
                    options[i];


                if (!option) {

                    button.setText("");

                    button.hide(true);

                    continue;
                }


                const selected =
                    session
                        .counselling_selected_ids
                        .includes(
                            option.id
                        );


                button.setText(
                    (
                        selected
                            ? "✓ "
                            : ""
                    )
                    +
                    option.text
                );


                button.hide(false);
            }


            // ---------------------------------------------
            // Status
            // ---------------------------------------------

            const statusObjects =
                runtimeScene.getObjects(
                    "Txt_CounsellingStatus"
                );


            if (
                statusObjects.length > 0
            ) {

                const count =
                    session
                        .counselling_selected_ids
                        .length;


                statusObjects[0].setText(
                    "เลือกได้ไม่เกิน " +
                    session
                        .counselling_selection_limit +
                    " ประเด็น  •  เลือกแล้ว " +
                    count +
                    " / " +
                    session
                        .counselling_selection_limit
                );
            }


            console.log(
                "Counselling rendered:",
                {
                    selected:
                        session
                            .counselling_selected_ids
                }
            );
        };


    // =========================================================
    // 9. INITIAL RENDER
    // =========================================================

    globalThis
        .MorYaRenderCounselling(
            runtimeScene
        );


    console.log(
        "Counselling engine initialized:",
        {
            caseId:
                session.case_id,

            intervention:
                session
                    .selected_intervention_id,

            interventionName:
                session
                    .selected_intervention_name,

            phase2Score:
                session
                    .phase2_score
        }
    );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const objects =
        runtimeScene.getObjects(
            "Txt_CounsellingSummary"
        );


    if (
        objects.length > 0
    ) {

        objects[0].setText(
            "เกิดข้อผิดพลาด\n" +
            message
        );
    }


    console.error(
        "MorYa Counselling Init Error:",
        error
    );
}
};
gdjs.S06_95Counselling_95LegacyCode.eventsList0 = function(runtimeScene) {

{


gdjs.S06_95Counselling_95LegacyCode.userFunc0xdc0e00(runtimeScene);

}


};gdjs.S06_95Counselling_95LegacyCode.userFunc0x1280bb0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S06_Counselling
// COUNSELLING OPTION CLICK
// =========================================================

const session =
    globalThis.MorYaCaseSession;


const options =
    globalThis.MorYaCounsellingOptions;


if (
    !session ||
    !Array.isArray(options)
) {
    return;
}


const mouseReleased =
    gdjs.evtTools.input
        .isMouseButtonReleased(
            runtimeScene,
            "Left"
        );


if (!mouseReleased) {
    return;
}


const buttonNames = [

    "Btn_Counsel1",

    "Btn_Counsel2",

    "Btn_Counsel3",

    "Btn_Counsel4"
];


for (
    let i = 0;
    i < buttonNames.length;
    i++
) {

    const objects =
        runtimeScene.getObjects(
            buttonNames[i]
        );


    if (
        objects.length === 0
    ) {
        continue;
    }


    const button =
        objects[0];


    if (
        button.isHidden() ||
        !button.cursorOnObject()
    ) {
        continue;
    }


    const option =
        options[i];


    if (!option) {
        continue;
    }


    const selectedIds =
        session
            .counselling_selected_ids;


    const existingIndex =
        selectedIds.indexOf(
            option.id
        );


    // =====================================================
    // ถ้าเลือกอยู่แล้ว → กดซ้ำเพื่อลบ
    // =====================================================

    if (
        existingIndex >= 0
    ) {

        selectedIds.splice(
            existingIndex,
            1
        );
    }


    // =====================================================
    // ถ้ายังไม่ได้เลือก
    // =====================================================

    else {

        if (
            selectedIds.length >=
            session
                .counselling_selection_limit
        ) {

            const statusObjects =
                runtimeScene.getObjects(
                    "Txt_CounsellingStatus"
                );


            if (
                statusObjects.length > 0
            ) {

                statusObjects[0].setText(
                    "เลือกได้สูงสุด " +
                    session
                        .counselling_selection_limit +
                    " ประเด็น\n" +
                    "หากต้องการเปลี่ยน ให้กดตัวเลือกที่เลือกไว้เพื่อลบก่อน"
                );
            }


            break;
        }


        selectedIds.push(
            option.id
        );
    }


    if (
        typeof globalThis
            .MorYaRenderCounselling ===
        "function"
    ) {

        globalThis
            .MorYaRenderCounselling(
                runtimeScene
            );
    }


    console.log(
        "Counselling option toggled:",
        {
            option:
                option.id,

            selected:
                session
                    .counselling_selected_ids
        }
    );


    break;
}
};
gdjs.S06_95Counselling_95LegacyCode.userFunc0xf31a10 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S06_Counselling
// CONFIRM COUNSELLING + SCORE
// =========================================================

const session =
    globalThis.MorYaCaseSession;


const options =
    globalThis.MorYaCounsellingOptions;


if (
    !session ||
    !Array.isArray(options)
) {
    return;
}


const buttonObjects =
    runtimeScene.getObjects(
        "Btn_ConfirmCounselling"
    );


if (
    buttonObjects.length === 0
) {
    return;
}


const button =
    buttonObjects[0];


const mouseReleased =
    gdjs.evtTools.input
        .isMouseButtonReleased(
            runtimeScene,
            "Left"
        );


if (!mouseReleased) {
    return;
}


if (
    button.isHidden() ||
    !button.cursorOnObject()
) {
    return;
}


// =========================================================
// 1. CALCULATE COUNSELLING SCORE
// =========================================================

let counsellingScore = 0;


const selectedDetails = [];


for (
    const optionId
    of session
        .counselling_selected_ids
) {

    const option =
        options.find(
            item =>
                item.id ===
                optionId
        );


    if (!option) {
        continue;
    }


    counsellingScore +=
        Number(
            option.score
            || 0
        );


    selectedDetails.push(
        {
            id:
                option.id,

            text:
                option.text,

            score:
                Number(
                    option.score
                    || 0
                ),

            competency:
                option.competency
        }
    );
}


// Domain max = 10
counsellingScore =
    Math.max(
        0,
        Math.min(
            10,
            counsellingScore
        )
    );


// =========================================================
// 2. SAVE DOMAIN SCORE
// =========================================================

if (
    !session.domain_scores ||
    typeof session.domain_scores
        !== "object"
) {

    session.domain_scores = {};
}


session
    .domain_scores
    .SAFE_USE_COUNSELLING =
    counsellingScore;


// =========================================================
// 3. SAVE ACTIONS
// =========================================================

session.counselling_actions =
    [
        ...session
            .counselling_selected_ids
    ];


session.counselling_details =
    selectedDetails;


// =========================================================
// 4. SCORE AFTER COUNSELLING
// =========================================================

const phase2 =
    Number(
        session.phase2_score
        || 0
    );


session.phase3_score =
    phase2 +
    counsellingScore;


session.current_case_score =
    session.phase3_score;


// =========================================================
// 5. SNAPSHOT
// =========================================================

session.counselling_snapshot = {

    selected_ids:
        [
            ...session
                .counselling_selected_ids
        ],

    selected_details:
        selectedDetails,

    counselling_score:
        counsellingScore,

    phase2_score:
        phase2,

    phase3_score:
        session.phase3_score
};


// =========================================================
// 6. DEBUG
// =========================================================

console.log(
    "Counselling confirmed:",
    session
        .counselling_snapshot
);


console.log(
    "Current domain scores:",
    session.domain_scores
);


// =========================================================
// 7. GO TO REFLECTION
// =========================================================

gdjs.evtTools.runtimeScene
    .replaceScene(
        runtimeScene,
        "S07_Reflection",
        false
    );
};
gdjs.S06_95Counselling_95LegacyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95Counselling_95LegacyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S06_95Counselling_95LegacyCode.userFunc0x1280bb0(runtimeScene);

}


{


gdjs.S06_95Counselling_95LegacyCode.userFunc0xf31a10(runtimeScene);

}


};

gdjs.S06_95Counselling_95LegacyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingTitleObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingTitleObjects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingSummaryObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingSummaryObjects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingStatusObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingStatusObjects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel1Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel1Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel2Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel2Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel3Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel3Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel4Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel4Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595ConfirmCounsellingObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595ConfirmCounsellingObjects2.length = 0;

gdjs.S06_95Counselling_95LegacyCode.eventsList1(runtimeScene);
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingTitleObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingTitleObjects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingSummaryObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingSummaryObjects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingStatusObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDTxt_9595CounsellingStatusObjects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel1Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel1Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel2Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel2Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel3Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel3Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel4Objects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595Counsel4Objects2.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595ConfirmCounsellingObjects1.length = 0;
gdjs.S06_95Counselling_95LegacyCode.GDBtn_9595ConfirmCounsellingObjects2.length = 0;


return;

}

gdjs['S06_95Counselling_95LegacyCode'] = gdjs.S06_95Counselling_95LegacyCode;
