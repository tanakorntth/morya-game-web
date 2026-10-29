gdjs.S08_95Result_95LegacyCode = {};
gdjs.S08_95Result_95LegacyCode.localVariables = [];
gdjs.S08_95Result_95LegacyCode.idToCallbackMap = new Map();
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultTitleObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultTitleObjects2= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultScoreObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultScoreObjects2= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultDomainsObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultDomainsObjects2= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultPatientObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultPatientObjects2= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultNarrationObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultNarrationObjects2= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultLearningObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultLearningObjects2= [];
gdjs.S08_95Result_95LegacyCode.GDBtn_9595ResultContinueObjects1= [];
gdjs.S08_95Result_95LegacyCode.GDBtn_9595ResultContinueObjects2= [];


gdjs.S08_95Result_95LegacyCode.userFunc0xf31a10 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =========================================================
    // MorYa Demo0.1
    // S08_Result
    // RENDER FINAL RESULT
    // =========================================================

    const gameData =
        globalThis.MorYaGameData;

    const session =
        globalThis.MorYaCaseSession;

    const gameState =
        globalThis.MorYaGameState;


    // =========================================================
    // 1. VALIDATE
    // =========================================================

    if (
        !gameData ||
        !session ||
        !gameState
    ) {

        throw new Error(
            "Game Data / Session / Game State ไม่พร้อม"
        );
    }


    const currentCase =
        gameData.indexes
            ?.case_by_id
            ?.[session.case_id];


    if (!currentCase) {

        throw new Error(
            "ไม่พบ Case: " +
            String(
                session.case_id
            )
        );
    }


    const outcomeId =
        session.final_outcome_id
        ||
        session.last_outcome_id
        ||
        "";


    if (!outcomeId) {

        throw new Error(
            "ไม่พบ final_outcome_id"
        );
    }


    const outcome =
        gameData.indexes
            ?.outcome_by_id
            ?.[outcomeId];


    if (!outcome) {

        throw new Error(
            "ไม่พบ Outcome: " +
            outcomeId
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
            "Txt_ResultTitle"
        );


    const scoreText =
        getObj(
            "Txt_ResultScore"
        );


    const domainsText =
        getObj(
            "Txt_ResultDomains"
        );


    const patientText =
        getObj(
            "Txt_ResultPatient"
        );


    const narrationText =
        getObj(
            "Txt_ResultNarration"
        );


    const learningText =
        getObj(
            "Txt_ResultLearning"
        );


    const continueButton =
        getObj(
            "Btn_ResultContinue"
        );


    // =========================================================
    // 4. TITLE
    // =========================================================

    if (titleText) {

        titleText.setText(
            currentCase
                .case_title_th +
            "\n\n" +
            "ผลลัพธ์ของเคส"
        );
    }


    // =========================================================
    // 5. FINAL SCORE
    // =========================================================

    let finalScore =
        Number(
            session
                .final_case_score
            ?? 0
        );


    if (
        !Number.isFinite(
            finalScore
        )
    ) {

        finalScore = 0;
    }


    // ป้องกันค่าหลุดช่วง
    finalScore =
        Math.max(
            0,
            Math.min(
                100,
                finalScore
            )
        );


    // =========================================================
    // 6. VALID SCORE CAP
    // =========================================================
    //
    // ห้ามใช้แค่ Number.isFinite(Number(null))
    // เพราะ Number(null) = 0
    // =========================================================

    const hasValidScoreCap =
        session.score_cap !== null
        &&
        session.score_cap !== undefined
        &&
        session.score_cap !== ""
        &&
        Number.isFinite(
            Number(
                session.score_cap
            )
        );


    if (scoreText) {

        let scoreMessage =
            "คะแนน " +
            finalScore +
            " / 100";


        if (hasValidScoreCap) {

            scoreMessage +=

                "\nคะแนนถูกจำกัดสูงสุดที่ " +

                Number(
                    session.score_cap
                ) +

                " เนื่องจากเหตุการณ์ด้านความปลอดภัย";
        }


        scoreText.setText(
            scoreMessage
        );
    }


    // =========================================================
    // 7. DOMAIN SCORES
    // =========================================================

    const scores =
        session.domain_scores
        || {};


    const safetyScore =
        Number(
            scores
                .SAFETY_SCREENING
            || 0
        );


    const informationScore =
        Number(
            scores
                .INFO_GATHERING
            || 0
        );


    const dispositionScore =
        Number(
            scores
                .DISPOSITION
            || 0
        );


    const interventionScore =
        Number(
            scores
                .INTERVENTION_SELECTION
            || 0
        );


    const counsellingScore =
        Number(
            scores
                .SAFE_USE_COUNSELLING
            || 0
        );


    const reflectionScore =
        Number(
            scores
                .LEARNING_REFLECTION
            || 0
        );


    const displayedDomainTotal =

        safetyScore
        +
        informationScore
        +
        dispositionScore
        +
        interventionScore
        +
        counsellingScore
        +
        reflectionScore;


    if (domainsText) {

        domainsText.setText(

            "การคัดกรองความปลอดภัย  " +
            safetyScore +
            " / 30\n" +

            "การเก็บข้อมูล  " +
            informationScore +
            " / 20\n" +

            "การเลือกระดับการดูแล  " +
            dispositionScore +
            " / 15\n" +

            "การเลือกแนวทาง  " +
            interventionScore +
            " / 20\n" +

            "การให้คำแนะนำ  " +
            counsellingScore +
            " / 10\n" +

            "การทบทวนการเรียนรู้  " +
            reflectionScore +
            " / 5"
        );
    }


    // =========================================================
    // 8. PATIENT DIALOGUE
    // =========================================================

    if (patientText) {

        patientText.setText(
            outcome.patient_dialogue_th
            ||
            ""
        );
    }


    // =========================================================
    // 9. OUTCOME NARRATION
    // =========================================================

    if (narrationText) {

        narrationText.setText(
            outcome.narration_th
            ||
            ""
        );
    }


    // =========================================================
    // 10. LEARNING FEEDBACK
    // =========================================================

    if (learningText) {

        const learningFeedback =
            outcome
                .learning_feedback_th
            ||
            "";


        learningText.setText(
            learningFeedback
                ? (
                    "บทเรียนสำคัญ:\n" +
                    learningFeedback
                )
                : ""
        );
    }


    // =========================================================
    // 11. CONTINUE BUTTON
    // =========================================================

    if (continueButton) {

        continueButton.setText(
            "กลับหน้าหลัก"
        );
    }


    // =========================================================
    // 12. CONSISTENCY CHECK
    // =========================================================

    if (
        displayedDomainTotal !==
        Number(
            session.raw_case_score
            || 0
        )
    ) {

        console.warn(
            "Domain total does not match raw score:",
            {
                displayedDomainTotal:
                    displayedDomainTotal,

                rawCaseScore:
                    session
                        .raw_case_score
            }
        );
    }


    // =========================================================
    // 13. DEBUG
    // =========================================================

    console.log(
        "======================================"
    );


    console.log(
        "RESULT SCREEN"
    );


    console.log(
        {
            caseId:
                session.case_id,

            rawScore:
                session
                    .raw_case_score,

            finalScore:
                finalScore,

            displayedDomainTotal:
                displayedDomainTotal,

            scoreCap:
                hasValidScoreCap
                    ? Number(
                        session.score_cap
                    )
                    : null,

            outcomeId:
                outcomeId,

            criticalSafetyError:
                session
                    .critical_safety_error,

            completed:
                gameState
                    .completed_case_ids,

            unlocked:
                gameState
                    .unlocked_case_ids
        }
    );


    console.log(
        "======================================"
    );


} catch (error) {

    // =========================================================
    // ERROR HANDLING
    // =========================================================

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const narrationObjects =
        runtimeScene.getObjects(
            "Txt_ResultNarration"
        );


    if (
        narrationObjects.length > 0
    ) {

        narrationObjects[0].setText(
            "เกิดข้อผิดพลาด\n" +
            message
        );
    }


    const scoreObjects =
        runtimeScene.getObjects(
            "Txt_ResultScore"
        );


    if (
        scoreObjects.length > 0
    ) {

        scoreObjects[0].setText(
            "ไม่สามารถคำนวณคะแนนได้"
        );
    }


    console.error(
        "MorYa Result Render Error:",
        error
    );
}
};
gdjs.S08_95Result_95LegacyCode.eventsList0 = function(runtimeScene) {

{


gdjs.S08_95Result_95LegacyCode.userFunc0xf31a10(runtimeScene);

}


};gdjs.S08_95Result_95LegacyCode.userFunc0x1160968 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S08_Result
// RETURN TO MAIN MENU
// =========================================================

const objects =
    runtimeScene.getObjects(
        "Btn_ResultContinue"
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


gdjs.evtTools.runtimeScene
    .replaceScene(
        runtimeScene,
        "S01_MainMenu",
        false
    );
};
gdjs.S08_95Result_95LegacyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S08_95Result_95LegacyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S08_95Result_95LegacyCode.userFunc0x1160968(runtimeScene);

}


};

gdjs.S08_95Result_95LegacyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultTitleObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultTitleObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultScoreObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultScoreObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultDomainsObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultDomainsObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultPatientObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultPatientObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultNarrationObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultNarrationObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultLearningObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultLearningObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDBtn_9595ResultContinueObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDBtn_9595ResultContinueObjects2.length = 0;

gdjs.S08_95Result_95LegacyCode.eventsList1(runtimeScene);
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultTitleObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultTitleObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultScoreObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultScoreObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultDomainsObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultDomainsObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultPatientObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultPatientObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultNarrationObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultNarrationObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultLearningObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDTxt_9595ResultLearningObjects2.length = 0;
gdjs.S08_95Result_95LegacyCode.GDBtn_9595ResultContinueObjects1.length = 0;
gdjs.S08_95Result_95LegacyCode.GDBtn_9595ResultContinueObjects2.length = 0;


return;

}

gdjs['S08_95Result_95LegacyCode'] = gdjs.S08_95Result_95LegacyCode;
