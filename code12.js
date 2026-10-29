gdjs.S05_95Intervention_95LegacyCode = {};
gdjs.S05_95Intervention_95LegacyCode.localVariables = [];
gdjs.S05_95Intervention_95LegacyCode.idToCallbackMap = new Map();
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionTitleObjects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionTitleObjects2= [];
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionSummaryObjects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionSummaryObjects2= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention1Objects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention1Objects2= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention2Objects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention2Objects2= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention3Objects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention3Objects2= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention4Objects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention4Objects2= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention5Objects1= [];
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention5Objects2= [];


gdjs.S05_95Intervention_95LegacyCode.eventsList0 = function(runtimeScene) {

};gdjs.S05_95Intervention_95LegacyCode.userFunc0x94c6e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05 - ROUTE CHECK
// TEMPORARY DIAGNOSTIC
// ======================================================

try {

    const session =
        globalThis.MorYaCaseSession;

    if (!session) {

        console.error(
            "S05: MorYaCaseSession unavailable"
        );

        return;
    }


    const disposition =
        session.disposition_choice ||
        session.selected_disposition_key ||
        "";


    const nextPhase =
        session.next_care_phase ||
        "";


    console.log(
        "S05 ROUTE RECEIVED:",
        {
            disposition:
                disposition,

            nextCarePhase:
                nextPhase
        }
    );


    // ใช้ Text เดิมใน S05 เป็น debug ชั่วคราว
    const objects =
        runtimeScene.getObjects(
            "Txt_InterventionSummary"
        );


    if (objects.length > 0) {

        objects[0].setText(
            "แนวทางที่คุณเลือก: " +
            disposition +
            "\nRoute: " +
            nextPhase
        );
    }


} catch (error) {

    console.error(
        "S05 Route Check Error:",
        error
    );
}
};
gdjs.S05_95Intervention_95LegacyCode.eventsList1 = function(runtimeScene) {

{


gdjs.S05_95Intervention_95LegacyCode.userFunc0x94c6e0(runtimeScene);

}


};gdjs.S05_95Intervention_95LegacyCode.userFunc0x1280bb0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S05_Intervention
// INTERVENTION SELECTION ENGINE
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


// =========================================================
// 2. MOUSE RELEASE
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
// 3. INTERVENTION BUTTONS
// =========================================================

const buttonNames = [

    "Btn_Intervention1",

    "Btn_Intervention2",

    "Btn_Intervention3",

    "Btn_Intervention4",

    "Btn_Intervention5"
];


let selectedInterventionId = null;


// =========================================================
// 4. ตรวจว่าผู้เล่นกดปุ่มไหน
// =========================================================

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
        button.isHidden()
    ) {
        continue;
    }


    if (
        !button.cursorOnObject()
    ) {
        continue;
    }


    selectedInterventionId =
        session
            .visible_intervention_ids
            ?.[i];


    break;
}


// ไม่ได้กด Intervention
if (!selectedInterventionId) {
    return;
}


try {

    // =====================================================
    // 5. หา Intervention Master
    // =====================================================

    const intervention =
        gameData.indexes
            ?.intervention_by_id
            ?.[selectedInterventionId];


    if (!intervention) {

        throw new Error(
            "ไม่พบ Intervention: " +
            selectedInterventionId
        );
    }


    // =====================================================
    // 6. หา Case Intervention Rule
    // =====================================================

    const caseRules =
        gameData.indexes
            ?.case_intervention_rules_by_case
            ?.[session.case_id]
        || [];


    const rule =
        caseRules.find(
            item =>
                item.intervention_id ===
                    selectedInterventionId
                ||
                item.intervention_id_ref ===
                    selectedInterventionId
                ||
                item.intervention?.id ===
                    selectedInterventionId
        );


    if (!rule) {

        throw new Error(
            "ไม่พบ case_intervention_rule สำหรับ " +
            session.case_id +
            " / " +
            selectedInterventionId
        );
    }


    // =====================================================
    // 7. Normalize Rule Grade
    // =====================================================
    //
    // รองรับชื่อ field หลายแบบ
    // เพื่อให้ engine ไม่ผูกกับ presentation layer
    //
    // ระดับมาตรฐานของ engine:
    //
    // FULL
    // PARTIAL
    // LOW
    // ZERO
    // CRITICAL_FAIL
    //
    // =====================================================

    const rawGrade =
        String(
            rule.score_band
            ??
            rule.grade
            ??
            rule.result_class
            ??
            rule.evaluation
            ??
            rule.appropriateness
            ??
            rule.rating
            ??
            ""
        )
        .trim()
        .toUpperCase();


    let normalizedGrade = rawGrade;


    // -----------------------------------------------------
    // Authoring synonym → Engine grade
    // -----------------------------------------------------

    if (
        [
            "OPTIMAL",
            "BEST",
            "CORRECT",
            "FULL"
        ].includes(rawGrade)
    ) {

        normalizedGrade = "FULL";
    }


    else if (
        [
            "ACCEPTABLE",
            "ACCEPTABLE_OVER_REFERRAL",
            "PARTIAL"
        ].includes(rawGrade)
    ) {

        normalizedGrade = "PARTIAL";
    }


    else if (
        [
            "SUBOPTIMAL",
            "LOW"
        ].includes(rawGrade)
    ) {

        normalizedGrade = "LOW";
    }


    else if (
        [
            "INAPPROPRIATE",
            "NO_BENEFIT",
            "ZERO"
        ].includes(rawGrade)
    ) {

        normalizedGrade = "ZERO";
    }


    else if (
        [
            "UNSAFE",
            "CRITICAL",
            "CRITICAL_FAIL"
        ].includes(rawGrade)
    ) {

        normalizedGrade =
            "CRITICAL_FAIL";
    }


    // =====================================================
    // 8. หา Score ที่ผู้เขียนกำหนดใน Rule ก่อน
    // =====================================================

    let interventionScore =
        Number(
            rule.score
            ??
            rule.score_award
            ??
            rule.intervention_score
            ??
            rule.points
            ??
            rule.score_value
        );


    // =====================================================
    // 9. Compatibility fallback
    // =====================================================
    //
    // ใช้เฉพาะกรณี Rule ไม่มี numeric score
    // เมื่อย้าย scoring เข้า data เต็มรูปแบบแล้ว
    // engine จะใช้ค่าจาก JSON ก่อนเสมอ
    //
    // =====================================================

    if (
        !Number.isFinite(
            interventionScore
        )
    ) {

        const fallbackScoreByGrade = {

            FULL: 20,

            PARTIAL: 12,

            LOW: 6,

            ZERO: 0,

            CRITICAL_FAIL: 0
        };


        interventionScore =
            fallbackScoreByGrade[
                normalizedGrade
            ] ?? 0;
    }


    // คะแนน domain นี้สูงสุด 20
    interventionScore =
        Math.max(
            0,
            Math.min(
                20,
                interventionScore
            )
        );


    // =====================================================
    // 10. บันทึก Intervention Selection
    // =====================================================

    session.selected_intervention_id =
        selectedInterventionId;


    session.selected_intervention_name =
        intervention.display_name_th
        ??
        intervention.name_th
        ??
        selectedInterventionId;


    session.intervention_rule_id =
        rule.rule_id
        ??
        rule.case_intervention_rule_id
        ??
        "";


    session.intervention_grade =
        normalizedGrade;


    session.intervention_rule_raw_grade =
        rawGrade;


    // =====================================================
    // 11. Outcome ที่ Rule ระบุ
    // =====================================================

    session.intervention_outcome_id =
        rule.outcome_id
        ??
        rule.mapped_outcome_id
        ??
        rule.result_outcome_id
        ??
        "";


    // =====================================================
    // 12. Domain Score
    // =====================================================

    if (
        !session.domain_scores ||
        typeof session.domain_scores
            !== "object"
    ) {

        session.domain_scores = {};
    }


    session
        .domain_scores
        .INTERVENTION_SELECTION =
        interventionScore;


    // =====================================================
    // 13. ตรวจ Unsafe / Critical Fail
    // =====================================================

    const safetyEffect =
        String(
            rule.safety_effect
            ??
            rule.effect
            ??
            ""
        )
        .trim()
        .toUpperCase();


    const interventionIsCritical =
        (
            normalizedGrade ===
            "CRITICAL_FAIL"
        )
        ||
        (
            safetyEffect ===
            "UNSAFE"
        );


    if (interventionIsCritical) {

        session
            .critical_safety_error =
            true;
    }


    // =====================================================
    // 14. Forced Outcome จาก Intervention Rule
    // =====================================================

    const ruleForcedOutcome =
        rule.forced_outcome_id
        ??
        (
            interventionIsCritical
                ? session
                    .intervention_outcome_id
                : ""
        );


    if (ruleForcedOutcome) {

        session.forced_outcome_id =
            ruleForcedOutcome;
    }


    // =====================================================
    // 15. Critical Fail Score Cap
    // =====================================================

    if (interventionIsCritical) {

        const rubric =
            gameData.indexes
                ?.rubric_by_case
                ?.[session.case_id];


        const criticalPolicy =
            rubric
                ?.critical_fail_policy
            || {};


        const cap =
            Number(
                criticalPolicy
                    .score_cap
                ??
                rubric
                    ?.critical_fail_cap
            );


        if (
            Number.isFinite(cap)
        ) {

            // ถ้ามี cap เดิมอยู่แล้ว
            // ให้ใช้ค่าที่เข้มกว่าคือค่าต่ำกว่า
            if (
                Number.isFinite(
                    Number(
                        session.score_cap
                    )
                )
            ) {

                session.score_cap =
                    Math.min(
                        Number(
                            session.score_cap
                        ),
                        cap
                    );

            } else {

                session.score_cap =
                    cap;
            }
        }
    }


    // =====================================================
    // 16. รวมคะแนนชั่วคราว
    // =====================================================

    const phase1 =
        Number(
            session.phase1_score
            || 0
        );


    session.phase2_score =
        phase1 +
        Number(
            session
                .domain_scores
                .INTERVENTION_SELECTION
            || 0
        );


    // ตอนนี้คะแนนเต็มที่ประเมินแล้ว = 85
    session.current_case_score =
        session.phase2_score;


    // =====================================================
    // 17. Snapshot
    // =====================================================

    session.intervention_snapshot = {

        intervention_id:
            selectedInterventionId,

        intervention_name:
            session
                .selected_intervention_name,

        rule_id:
            session
                .intervention_rule_id,

        raw_grade:
            rawGrade,

        grade:
            normalizedGrade,

        intervention_score:
            interventionScore,

        phase1_score:
            phase1,

        phase2_score:
            session
                .phase2_score,

        outcome_id:
            session
                .intervention_outcome_id,

        forced_outcome_id:
            session
                .forced_outcome_id,

        critical_safety_error:
            session
                .critical_safety_error,

        score_cap:
            session
                .score_cap
    };


    // =====================================================
    // 18. Debug
    // =====================================================

    console.log(
        "Intervention selected:",
        session
            .intervention_snapshot
    );


    console.log(
        "Current domain scores:",
        session
            .domain_scores
    );


    // =====================================================
    // 19. ไปหน้า Counselling
    // =====================================================

    gdjs.evtTools.runtimeScene
        .replaceScene(
            runtimeScene,
            "S06_Counselling",
            false
        );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const summaryObjects =
        runtimeScene.getObjects(
            "Txt_InterventionSummary"
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
        "MorYa Intervention Selection Error:",
        error
    );
}
};
gdjs.S05_95Intervention_95LegacyCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05_95Intervention_95LegacyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05_95Intervention_95LegacyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.S05_95Intervention_95LegacyCode.userFunc0x1280bb0(runtimeScene);

}


};

gdjs.S05_95Intervention_95LegacyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionTitleObjects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionTitleObjects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionSummaryObjects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionSummaryObjects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention1Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention1Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention2Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention2Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention3Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention3Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention4Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention4Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention5Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention5Objects2.length = 0;

gdjs.S05_95Intervention_95LegacyCode.eventsList2(runtimeScene);
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionTitleObjects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionTitleObjects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionSummaryObjects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDTxt_9595InterventionSummaryObjects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention1Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention1Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention2Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention2Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention3Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention3Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention4Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention4Objects2.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention5Objects1.length = 0;
gdjs.S05_95Intervention_95LegacyCode.GDBtn_9595Intervention5Objects2.length = 0;


return;

}

gdjs['S05_95Intervention_95LegacyCode'] = gdjs.S05_95Intervention_95LegacyCode;
