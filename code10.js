gdjs.S04_95Disposition2_95LegacyCode = {};
gdjs.S04_95Disposition2_95LegacyCode.localVariables = [];
gdjs.S04_95Disposition2_95LegacyCode.idToCallbackMap = new Map();
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionTitleObjects1= [];
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionTitleObjects2= [];
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionSummaryObjects1= [];
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionSummaryObjects2= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispSelfCareObjects1= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispSelfCareObjects2= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispConsultObjects1= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispConsultObjects2= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispUrgentObjects1= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispUrgentObjects2= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595BackInterviewObjects1= [];
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595BackInterviewObjects2= [];


gdjs.S04_95Disposition2_95LegacyCode.userFunc0x1278678 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =====================================================
    // MorYa Demo0.1
    // S04_Disposition
    // INITIALIZE
    // =====================================================

    const gameData =
        globalThis.MorYaGameData;

    const session =
        globalThis.MorYaCaseSession;


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


    // =====================================================
    // Helper
    // =====================================================

    const getObj = (name) => {

        const objects =
            runtimeScene.getObjects(name);

        return objects.length > 0
            ? objects[0]
            : null;
    };


    const titleText =
        getObj(
            "Txt_DispositionTitle"
        );

    const summaryText =
        getObj(
            "Txt_DispositionSummary"
        );


    // =====================================================
    // Title
    // =====================================================

    if (titleText) {

        titleText.setText(
            currentCase.case_title_th +
            "\n\n" +
            "ตอนนี้คุณจะทำอย่างไร?"
        );
    }


    // =====================================================
    // Interview summary
    // =====================================================

    const askedCount =
        Array.isArray(
            session.asked_cue_ids
        )
            ? session
                .asked_cue_ids
                .length
            : 0;


    const maxQuestions =
        Number(
            session.question_budget_max
            || 0
        );


    if (summaryText) {

        summaryText.setText(
            "คุณเลือกถามไป " +
            askedCount +
            " จาก " +
            maxQuestions +
            " คำถาม\n" +
            "พิจารณาข้อมูลที่คุณได้ก่อนเลือกแนวทาง"
        );
    }


    // =====================================================
    // ตั้งข้อความปุ่ม
    // =====================================================

    const selfCareButton =
        getObj(
            "Btn_DispSelfCare"
        );

    const consultButton =
        getObj(
            "Btn_DispConsult"
        );

    const urgentButton =
        getObj(
            "Btn_DispUrgent"
        );

    const backButton =
        getObj(
            "Btn_BackInterview"
        );


    if (selfCareButton) {

        selfCareButton.setText(
            "ดูแลตนเองและติดตามอาการ"
        );
    }


    if (consultButton) {

        consultButton.setText(
            "แนะนำให้ปรึกษาบุคลากรสุขภาพ"
        );
    }


    if (urgentButton) {

        urgentButton.setText(
            "ส่งประเมินเร่งด่วน"
        );
    }


    if (backButton) {

        backButton.setText(
            "< กลับไปซักประวัติ"
        );
    }


    console.log(
        "Disposition screen ready:",
        {
            caseId:
                session.case_id,

            asked:
                askedCount,

            remaining:
                session
                    .question_budget_remaining,

            discoveredConcepts:
                session
                    .discovered_concepts,

            redFlagsKnownToPlayer:
                session
                    .positive_red_flag_ids
        }
    );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const summaryObjects =
        runtimeScene.getObjects(
            "Txt_DispositionSummary"
        );


    if (
        summaryObjects.length > 0
    ) {

        summaryObjects[0].setText(
            "เกิดข้อผิดพลาด\n" +
            message
        );
    }


    console.error(
        "MorYa Disposition Init Error:",
        error
    );
}
};
gdjs.S04_95Disposition2_95LegacyCode.eventsList0 = function(runtimeScene) {

{


gdjs.S04_95Disposition2_95LegacyCode.userFunc0x1278678(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.S04_95Disposition2_95LegacyCode.userFunc0xbb6e58 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S04_Disposition
// DISPOSITION CLICK + PHASE 1 SCORING
// =========================================================

const gameData =
    globalThis.MorYaGameData;

const session =
    globalThis.MorYaCaseSession;


// =========================================================
// 1. VALIDATE
// =========================================================

if (!gameData || !session) {
    return;
}


const currentCase =
    gameData.indexes
        ?.case_by_id
        ?.[session.case_id];


if (!currentCase) {
    return;
}


const rubric =
    gameData.indexes
        ?.rubric_by_case
        ?.[session.case_id];


if (!rubric) {

    console.error(
        "ไม่พบ Rubric สำหรับ",
        session.case_id
    );

    return;
}


// =========================================================
// 2. Mouse Release
// =========================================================

const mouseReleased =
    gdjs.evtTools.input
        .isMouseButtonReleased(
            runtimeScene,
            "Left"
        );


if (!mouseReleased) {
    return;
}


// =========================================================
// 3. BUTTON MAPPING
// =========================================================

const dispositionButtons = [

    {
        objectName:
            "Btn_DispSelfCare",

        value:
            "SELF_CARE_MONITOR"
    },

    {
        objectName:
            "Btn_DispConsult",

        value:
            "CONSULT_HEALTH_PRO"
    },

    {
        objectName:
            "Btn_DispUrgent",

        value:
            "REFER_URGENT"
    }
];


let selectedDisposition = null;


// =========================================================
// 4. ตรวจว่ากดปุ่มไหน
// =========================================================

for (
    const item
    of dispositionButtons
) {

    const objects =
        runtimeScene.getObjects(
            item.objectName
        );


    if (
        objects.length === 0
    ) {
        continue;
    }


    const button =
        objects[0];


    if (
        button.isHidden()
    ) {
        continue;
    }


    if (
        button.cursorOnObject()
    ) {

        selectedDisposition =
            item.value;

        break;
    }
}


// ยังไม่ได้กด Disposition
if (!selectedDisposition) {
    return;
}


// =========================================================
// 5. บันทึก Disposition
// =========================================================

session.selected_disposition =
    selectedDisposition;


session.disposition_is_target =
    selectedDisposition ===
    currentCase.target_disposition;


// =========================================================
// 6. เตรียม Domain Scores
// =========================================================

if (
    !session.domain_scores ||
    typeof session.domain_scores !==
        "object"
) {

    session.domain_scores = {};
}


session.domain_scores
    .SAFETY_SCREENING = 0;

session.domain_scores
    .INFO_GATHERING = 0;

session.domain_scores
    .DISPOSITION = 0;


// =========================================================
// 7. เตรียม Scoring Detail
// =========================================================

session.phase1_scoring_details = [];


// เฉพาะ 3 domain ที่ประเมิน ณ จุดนี้
const phase1Domains =
    new Set([

        "SAFETY_SCREENING",

        "INFO_GATHERING",

        "DISPOSITION"
    ]);


// =========================================================
// 8. Function ตรวจ Criterion
// =========================================================

const evaluateCriterion =
    function(criterion) {

        const triggerType =
            criterion.trigger_type;

        const trigger =
            criterion.trigger || {};

        let met = false;


        // ---------------------------------------------
        // CUE_DISCOVERED
        // ---------------------------------------------

        if (
            triggerType ===
            "CUE_DISCOVERED"
        ) {

            met =
                Array.isArray(
                    session.asked_cue_ids
                )
                &&
                session
                    .asked_cue_ids
                    .includes(
                        trigger.cue_id
                    );
        }


        // ---------------------------------------------
        // CONCEPT_DISCOVERED
        // ---------------------------------------------

        else if (
            triggerType ===
            "CONCEPT_DISCOVERED"
        ) {

            met =
                Array.isArray(
                    session
                        .discovered_concepts
                )
                &&
                session
                    .discovered_concepts
                    .includes(
                        trigger
                            .concept_key
                    );
        }


        // ---------------------------------------------
        // POSITIVE_RED_FLAG_DISCOVERED
        // ---------------------------------------------

        else if (
            triggerType ===
            "POSITIVE_RED_FLAG_DISCOVERED"
        ) {

            met =
                Array.isArray(
                    session
                        .positive_red_flag_ids
                )
                &&
                session
                    .positive_red_flag_ids
                    .includes(
                        trigger
                            .red_flag_id
                    );
        }


        // ---------------------------------------------
        // DISPOSITION_EQUALS
        // ---------------------------------------------

        else if (
            triggerType ===
            "DISPOSITION_EQUALS"
        ) {

            met =
                session
                    .selected_disposition
                ===
                trigger.value;
        }


        // ---------------------------------------------
        // Score
        // ---------------------------------------------

        const scoringLogic =
            criterion
                .scoring_logic
                || {};


        const score =
            met
                ? Number(
                    scoringLogic
                        .met_score
                    ??
                    criterion
                        .max_score
                    ??
                    0
                )
                : Number(
                    scoringLogic
                        .missed_score
                    ??
                    0
                );


        return {

            criterion_id:
                criterion
                    .criterion_id,

            domain:
                criterion.domain,

            label_th:
                criterion.label_th,

            trigger_type:
                triggerType,

            met:
                met,

            score:
                score,

            max_score:
                Number(
                    criterion
                        .max_score
                    || 0
                ),

            feedback_th:
                met
                    ? criterion
                        .feedback_met_th
                    : criterion
                        .feedback_missed_th
        };
    };


// =========================================================
// 9. คำนวณ Safety + Info + Disposition
// =========================================================

for (
    const criterion
    of rubric.criteria || []
) {

    if (
        !phase1Domains.has(
            criterion.domain
        )
    ) {
        continue;
    }


    const result =
        evaluateCriterion(
            criterion
        );


    session
        .phase1_scoring_details
        .push(result);


    if (
        !Number.isFinite(
            Number(
                session
                    .domain_scores[
                        criterion.domain
                    ]
            )
        )
    ) {

        session
            .domain_scores[
                criterion.domain
            ] = 0;
    }


    session
        .domain_scores[
            criterion.domain
        ] += result.score;
}


// =========================================================
// 10. รวม Phase 1 Score
// =========================================================

session.phase1_score =

    Number(
        session
            .domain_scores
            .SAFETY_SCREENING
        || 0
    )

    +

    Number(
        session
            .domain_scores
            .INFO_GATHERING
        || 0
    )

    +

    Number(
        session
            .domain_scores
            .DISPOSITION
        || 0
    );


// =========================================================
// 11. ตรวจ Critical Safety Error
// =========================================================
//
// หลักการ:
// หาก case ต้อง REFER_URGENT แต่ผู้เล่นยังเลือก
// SELF_CARE_MONITOR = unsafe disposition
//
// CASE004 จะเข้าเงื่อนไขนี้
// =========================================================

session.critical_safety_error =
    (
        currentCase
            .target_disposition
        ===
        "REFER_URGENT"
    )
    &&
    (
        selectedDisposition
        ===
        "SELF_CARE_MONITOR"
    );


// =========================================================
// 12. บันทึก Score Cap / Forced Outcome
//     แต่ยังไม่ apply คะแนนจนจบเคส
// =========================================================

session.score_cap = null;

session.forced_outcome_id = "";


if (
    session
        .critical_safety_error
) {

    const criticalPolicy =
        rubric
            .critical_fail_policy
            || {};


    const scoreCap =
        criticalPolicy
            .score_cap
        ??
        rubric
            .critical_fail_cap;


    if (
        Number.isFinite(
            Number(scoreCap)
        )
    ) {

        session.score_cap =
            Number(scoreCap);
    }


    if (
        criticalPolicy
            .forced_outcome_id
    ) {

        session.forced_outcome_id =
            criticalPolicy
                .forced_outcome_id;
    }
}


// =========================================================
// 13. เก็บ Snapshot สำหรับใช้ต่อ
// =========================================================

session.disposition_snapshot = {

    selected_disposition:
        selectedDisposition,

    target_disposition:
        currentCase
            .target_disposition,

    is_target:
        session
            .disposition_is_target,

    phase1_score:
        session
            .phase1_score,

    safety_score:
        session
            .domain_scores
            .SAFETY_SCREENING,

    information_score:
        session
            .domain_scores
            .INFO_GATHERING,

    disposition_score:
        session
            .domain_scores
            .DISPOSITION,

    critical_safety_error:
        session
            .critical_safety_error,

    score_cap:
        session
            .score_cap,

    forced_outcome_id:
        session
            .forced_outcome_id
};


// =========================================================
// 14. Debug
// =========================================================

console.log(
    "Disposition selected:",
    session
        .disposition_snapshot
);


console.log(
    "Phase 1 scoring details:",
    session
        .phase1_scoring_details
);


// =========================================================
// 15. ไปหน้า Intervention
// =========================================================

gdjs.evtTools.runtimeScene
    .replaceScene(
        runtimeScene,
        "S05_Intervention",
        false
    );
};
gdjs.S04_95Disposition2_95LegacyCode.userFunc0x135c8e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S04_Disposition
// BACK TO INTERVIEW
// =========================================================

const session =
    globalThis.MorYaCaseSession;


if (!session) {
    return;
}


const objects =
    runtimeScene.getObjects(
        "Btn_BackInterview"
    );


if (
    objects.length === 0
) {
    return;
}


const button =
    objects[0];


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


// ยังไม่ถือว่าจบ interview
session.interview_completed =
    false;


// ล้าง disposition เดิม
session.selected_disposition = "";


// กลับไปถามต่อ
gdjs.evtTools.runtimeScene
    .replaceScene(
        runtimeScene,
        "S03_ClinicalEncounter",
        false
    );
};
gdjs.S04_95Disposition2_95LegacyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95Disposition2_95LegacyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S04_95Disposition2_95LegacyCode.userFunc0xbb6e58(runtimeScene);

}


{


gdjs.S04_95Disposition2_95LegacyCode.userFunc0x135c8e8(runtimeScene);

}


};

gdjs.S04_95Disposition2_95LegacyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionTitleObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionTitleObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionSummaryObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionSummaryObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispSelfCareObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispSelfCareObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispConsultObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispConsultObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispUrgentObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispUrgentObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595BackInterviewObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595BackInterviewObjects2.length = 0;

gdjs.S04_95Disposition2_95LegacyCode.eventsList1(runtimeScene);
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionTitleObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionTitleObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionSummaryObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDTxt_9595DispositionSummaryObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispSelfCareObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispSelfCareObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispConsultObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispConsultObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispUrgentObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595DispUrgentObjects2.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595BackInterviewObjects1.length = 0;
gdjs.S04_95Disposition2_95LegacyCode.GDBtn_9595BackInterviewObjects2.length = 0;


return;

}

gdjs['S04_95Disposition2_95LegacyCode'] = gdjs.S04_95Disposition2_95LegacyCode;
