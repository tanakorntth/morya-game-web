gdjs.S11_95KnowledgeResultCode = {};
gdjs.S11_95KnowledgeResultCode.localVariables = [];
gdjs.S11_95KnowledgeResultCode.idToCallbackMap = new Map();
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultTitleObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultTitleObjects2= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultScoreObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultScoreObjects2= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultBreakdownObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultBreakdownObjects2= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNPCObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNPCObjects2= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNarrationObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNarrationObjects2= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultLearningObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultLearningObjects2= [];
gdjs.S11_95KnowledgeResultCode.GDBtn_9595KResultContinueObjects1= [];
gdjs.S11_95KnowledgeResultCode.GDBtn_9595KResultContinueObjects2= [];


gdjs.S11_95KnowledgeResultCode.userFunc0x139def8 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =========================================================
    // MorYa Demo0.1
    // S11_KnowledgeResult
    // =========================================================

    const gameData =
        globalThis.MorYaGameData;

    const session =
        globalThis.MorYaCaseSession;

    const gameState =
        globalThis.MorYaGameState;


    if (
        !gameData ||
        !session ||
        !gameState
    ) {

        throw new Error(
            "Game Data / Session / State ไม่พร้อม"
        );
    }


    const currentCase =
        gameData.indexes
            ?.case_by_id
            ?.[session.case_id];


    const outcome =
        gameData.indexes
            ?.outcome_by_id
            ?.[session.final_outcome_id];


    if (
        !currentCase ||
        !outcome
    ) {

        throw new Error(
            "ไม่พบ Case หรือ Outcome"
        );
    }


    const getObj =
        function(name) {

            const objects =
                runtimeScene.getObjects(
                    name
                );

            return objects.length > 0
                ? objects[0]
                : null;
        };


    const titleText =
        getObj(
            "Txt_KResultTitle"
        );

    const scoreText =
        getObj(
            "Txt_KResultScore"
        );

    const breakdownText =
        getObj(
            "Txt_KResultBreakdown"
        );

    const npcText =
        getObj(
            "Txt_KResultNPC"
        );

    const narrationText =
        getObj(
            "Txt_KResultNarration"
        );

    const learningText =
        getObj(
            "Txt_KResultLearning"
        );

    const continueButton =
        getObj(
            "Btn_KResultContinue"
        );


    // =========================================================
    // Title
    // =========================================================

    if (titleText) {

        titleText.setText(
            currentCase.case_title_th +
            "\n\nผลการเรียนรู้"
        );
    }


    // =========================================================
    // Score
    // =========================================================

    const finalScore =
        Number(
            session.final_case_score
            || 0
        );


    if (scoreText) {

        scoreText.setText(
            "คะแนน " +
            finalScore +
            " / 100"
        );
    }


    // =========================================================
    // Breakdown
    // =========================================================

    const rubric =
        gameData.indexes
            ?.rubric_by_case
            ?.[session.case_id];


    const details =
        session
            .knowledge_scoring_details
        || [];


    const breakdownLines =
        details.map(
            detail => {

                const criterion =
                    (
                        rubric?.criteria
                        || []
                    )
                    .find(
                        item =>
                            item.criterion_id ===
                                detail.criterion_id
                    );


                return (
                    (
                        criterion
                            ?.label_th
                        ||
                        detail.criterion_id
                    )
                    +
                    "  " +
                    detail.score +
                    " / " +
                    detail.max_score
                );
            }
        );


    if (breakdownText) {

        breakdownText.setText(
            breakdownLines.join(
                "\n"
            )
        );
    }


    // =========================================================
    // Outcome
    // =========================================================

    if (npcText) {

        npcText.setText(
            outcome.patient_dialogue_th
            || ""
        );
    }


    if (narrationText) {

        narrationText.setText(
            outcome.narration_th
            || ""
        );
    }


    if (learningText) {

        learningText.setText(
            "บทเรียนสำคัญ:\n" +
            (
                outcome.learning_feedback_th
                || ""
            )
        );
    }


    if (continueButton) {

        continueButton.setText(
            "กลับหน้าหลัก"
        );
    }


    console.log(
        "Knowledge Result:",
        {
            score:
                finalScore,

            outcome:
                session.final_outcome_id,

            completed:
                gameState
                    .completed_case_ids,

            unlocked:
                gameState
                    .unlocked_case_ids
        }
    );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const objects =
        runtimeScene.getObjects(
            "Txt_KResultNarration"
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
        "Knowledge Result Error:",
        error
    );
}
};
gdjs.S11_95KnowledgeResultCode.eventsList0 = function(runtimeScene) {

{


gdjs.S11_95KnowledgeResultCode.userFunc0x139def8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.S11_95KnowledgeResultCode.userFunc0x28b3e30 = function GDJSInlineCode(runtimeScene) {
"use strict";
const objects =
    runtimeScene.getObjects(
        "Btn_KResultContinue"
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
gdjs.S11_95KnowledgeResultCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S11_95KnowledgeResultCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S11_95KnowledgeResultCode.userFunc0x28b3e30(runtimeScene);

}


};

gdjs.S11_95KnowledgeResultCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultTitleObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultTitleObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultScoreObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultScoreObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultBreakdownObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultBreakdownObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNPCObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNPCObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNarrationObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNarrationObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultLearningObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultLearningObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDBtn_9595KResultContinueObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDBtn_9595KResultContinueObjects2.length = 0;

gdjs.S11_95KnowledgeResultCode.eventsList1(runtimeScene);
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultTitleObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultTitleObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultScoreObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultScoreObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultBreakdownObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultBreakdownObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNPCObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNPCObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNarrationObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultNarrationObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultLearningObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDTxt_9595KResultLearningObjects2.length = 0;
gdjs.S11_95KnowledgeResultCode.GDBtn_9595KResultContinueObjects1.length = 0;
gdjs.S11_95KnowledgeResultCode.GDBtn_9595KResultContinueObjects2.length = 0;


return;

}

gdjs['S11_95KnowledgeResultCode'] = gdjs.S11_95KnowledgeResultCode;
