gdjs.S10_95HerbCardCode = {};
gdjs.S10_95HerbCardCode.localVariables = [];
gdjs.S10_95HerbCardCode.idToCallbackMap = new Map();
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects1= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects2= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects3= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects1= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects2= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects3= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects1= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects2= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects3= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects1= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects2= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects3= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects1= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects2= [];
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects3= [];
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects1= [];
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects2= [];
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects3= [];


gdjs.S10_95HerbCardCode.userFunc0x180d318 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =========================================================
    // MorYa Demo0.1
    // S10_HerbCard
    // DATA-DRIVEN HERB CARD
    // =========================================================

    const gameData =
        globalThis.MorYaGameData;

    const session =
        globalThis.MorYaCaseSession;


    if (
        !gameData ||
        !session
    ) {

        throw new Error(
            "Game Data หรือ Case Session ไม่พร้อม"
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
    // 1. Featured Herb
    // =========================================================

    const herbId =
        currentCase
            .featured_herb_ids
            ?.[0];


    if (!herbId) {

        throw new Error(
            "Case นี้ไม่มี featured_herb_ids"
        );
    }


    const herb =
        gameData.indexes
            ?.herb_by_id
            ?.[herbId];


    if (!herb) {

        throw new Error(
            "ไม่พบ Herb: " +
            herbId
        );
    }


    session.current_herb_card_id =
        herbId;


    // =========================================================
    // 2. Helper
    // =========================================================

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
            "Txt_HerbCardTitle"
        );

    const taxonomyText =
        getObj(
            "Txt_HerbCardTaxonomy"
        );

    const contextText =
        getObj(
            "Txt_HerbCardContext"
        );

    const claimsText =
        getObj(
            "Txt_HerbCardClaims"
        );

    const evidenceText =
        getObj(
            "Txt_HerbCardEvidence"
        );

    const finishButton =
        getObj(
            "Btn_HerbCardFinish"
        );


    // =========================================================
    // 3. Dictionaries
    // =========================================================

    const partLabels = {

        RHIZOME:
            "เหง้า",

        LEAF:
            "ใบ",

        AERIAL_PARTS:
            "ส่วนเหนือดิน",

        FRUIT:
            "ผล",

        POD:
            "ฝัก",

        CULM_PSEUDOSTEM:
            "ลำต้น/ลำต้นเทียม"
    };


    const categoryLabels = {

        FOOD:
            "ใช้ในบริบทอาหาร",

        MEDICINAL_HERB:
            "ใช้ในบริบทยา/ผลิตภัณฑ์สมุนไพร",

        BOTH:
            "ใช้ได้ทั้งในบริบทอาหารและสมุนไพร โดยต้องแยกบริบท"
    };


    // =========================================================
    // 4. Title
    // =========================================================

    if (titleText) {

        titleText.setText(
            "Herb Card\n" +
            herb.thai_name
        );
    }


    // =========================================================
    // 5. Taxonomy
    // =========================================================

    const partNames =
        (
            herb.part_used_ids
            || []
        )
        .map(
            partId =>
                partLabels[partId]
                || partId
        )
        .join(", ");


    if (taxonomyText) {

        taxonomyText.setText(
            "ชื่อไทย: " +
            (
                herb.thai_name
                || "-"
            ) +
            "\n" +

            "ชื่ออังกฤษ: " +
            (
                herb.english_name
                || "-"
            ) +
            "\n" +

            "ชื่อวิทยาศาสตร์: " +
            (
                herb.scientific_name
                || "-"
            ) +
            "\n" +

            "วงศ์: " +
            (
                herb.family
                || "-"
            ) +
            "\n" +

            "ส่วนที่ใช้: " +
            (
                partNames
                || "-"
            )
        );
    }


    // =========================================================
    // 6. Context
    // =========================================================

    if (contextText) {

        contextText.setText(
            "บริบทการเรียนรู้:\n" +
            (
                categoryLabels[
                    herb.category
                ]
                ||
                herb.category
                ||
                "-"
            )
        );
    }


    // =========================================================
    // 7. Approved Game Claims
    // =========================================================
    //
    // จงใช้เฉพาะ approved_game_claims
    // เพื่อไม่ดึงข้อความที่ไม่ได้อนุมัติสำหรับ gameplay
    // =========================================================

    const approvedClaims =
        herb.approved_game_claims
        || [];


    const claimLines =
        approvedClaims
            .map(
                claim =>
                    "• " +
                    claim.text_th
            )
            .join("\n");


    if (claimsText) {

        claimsText.setText(
            "สิ่งที่ควรรู้:\n" +
            (
                claimLines
                ||
                "ยังไม่มีข้อความสำหรับแสดง"
            )
        );
    }


    // =========================================================
    // 8. Evidence Status
    // =========================================================

    let evidenceMessage =
        "ระดับข้อมูลในฐานเกม: " +
        (
            herb.evidence_status
            || "-"
        );


    if (
        Array.isArray(
            herb.evidence_supported_use_th
        )
        &&
        herb
            .evidence_supported_use_th
            .length === 0
    ) {

        evidenceMessage +=
            "\nไม่มี clinical-use claim ที่บันทึกไว้ใน Herb Card นี้";
    }


    if (evidenceText) {

        evidenceText.setText(
            evidenceMessage
        );
    }


    // =========================================================
    // 9. Learning Action
    // =========================================================

    if (
        !Array.isArray(
            session.learning_actions
        )
    ) {

        session.learning_actions = [];
    }


    // อ่าน action ที่ rubric ต้องการ
    // ไม่ hard-code OPEN_HERB_CARD_HOLY_BASIL

    const rubric =
        gameData.indexes
            ?.rubric_by_case
            ?.[session.case_id];


    const cardCriterion =
        (
            rubric?.criteria
            || []
        )
        .find(
            criterion =>
                criterion.trigger_type ===
                    "LEARNING_ACTION"
        );


    const cardAction =
        cardCriterion
            ?.trigger
            ?.value;


    if (
        cardAction &&
        !session
            .learning_actions
            .includes(
                cardAction
            )
    ) {

        session
            .learning_actions
            .push(
                cardAction
            );
    }


    session.herb_card_opened =
        true;


    // =========================================================
    // 10. Button
    // =========================================================

    if (finishButton) {

        finishButton.setText(
            "อ่านแล้ว ดูผลลัพธ์"
        );
    }


    console.log(
        "Herb Card opened:",
        {
            herbId:
                herbId,

            herb:
                herb.thai_name,

            learningActions:
                session.learning_actions
        }
    );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const objects =
        runtimeScene.getObjects(
            "Txt_HerbCardClaims"
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
        "MorYa Herb Card Error:",
        error
    );
}
};
gdjs.S10_95HerbCardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.S10_95HerbCardCode.userFunc0x180d318(runtimeScene);

}


};gdjs.S10_95HerbCardCode.userFunc0x18243e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S10_HerbCard
// FINALIZE KNOWLEDGE CASE
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
    return;
}


// =========================================================
// 1. Button
// =========================================================

const objects =
    runtimeScene.getObjects(
        "Btn_HerbCardFinish"
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


try {

    // =====================================================
    // 2. Case + Rubric
    // =====================================================

    const currentCase =
        gameData.indexes
            ?.case_by_id
            ?.[session.case_id];


    if (!currentCase) {

        throw new Error(
            "ไม่พบ Case"
        );
    }


    const rubric =
        gameData.indexes
            ?.rubric_by_case
            ?.[session.case_id];


    if (!rubric) {

        throw new Error(
            "ไม่พบ Rubric สำหรับ " +
            session.case_id
        );
    }


    // =====================================================
    // 3. Calculate every rubric criterion
    // =====================================================

    let totalScore = 0;


    const scoringDetails = [];


    for (
        const criterion
        of rubric.criteria || []
    ) {

        let criterionScore = 0;

        let resultValue = null;

        let met = false;


        // =============================================
        // KNOWLEDGE_TASK_RESULT
        // =============================================

        if (
            criterion.trigger_type ===
            "KNOWLEDGE_TASK_RESULT"
        ) {

            const taskId =
                criterion
                    .trigger
                    ?.task_id;


            resultValue =
                session
                    .knowledge_task_results
                    ?.[taskId]
                || "INCORRECT";


            const logic =
                criterion
                    .scoring_logic
                || {};


            criterionScore =
                Number(
                    logic[
                        resultValue
                    ]
                    ?? 0
                );


            met =
                criterionScore > 0;
        }


        // =============================================
        // LEARNING_ACTION
        // =============================================

        else if (
            criterion.trigger_type ===
            "LEARNING_ACTION"
        ) {

            const requiredAction =
                criterion
                    .trigger
                    ?.value;


            met =
                Boolean(
                    requiredAction
                )
                &&
                Array.isArray(
                    session
                        .learning_actions
                )
                &&
                session
                    .learning_actions
                    .includes(
                        requiredAction
                    );


            const logic =
                criterion
                    .scoring_logic
                || {};


            criterionScore =
                met
                    ? Number(
                        logic.met_score
                        ??
                        criterion.max_score
                        ??
                        0
                    )
                    : Number(
                        logic.missed_score
                        ?? 0
                    );


            resultValue =
                met
                    ? "COMPLETED"
                    : "NOT_COMPLETED";
        }


        // =============================================
        // Clamp criterion
        // =============================================

        criterionScore =
            Math.max(
                0,
                Math.min(
                    Number(
                        criterion.max_score
                        || 0
                    ),
                    Number(
                        criterionScore
                    ) || 0
                )
            );


        totalScore +=
            criterionScore;


        scoringDetails.push(
            {
                criterion_id:
                    criterion
                        .criterion_id,

                domain:
                    criterion.domain,

                result:
                    resultValue,

                score:
                    criterionScore,

                max_score:
                    criterion
                        .max_score,

                met:
                    met
            }
        );
    }


    // =====================================================
    // 4. Final score
    // =====================================================

    totalScore =
        Math.max(
            0,
            Math.min(
                100,
                totalScore
            )
        );


    session.knowledge_score =
        totalScore;


    session.raw_case_score =
        totalScore;


    session.final_case_score =
        totalScore;


    session.current_case_score =
        totalScore;


    gameState.current_case_score =
        totalScore;


    session.knowledge_scoring_details =
        scoringDetails;


    // =====================================================
    // 5. Domain totals
    // =====================================================

    const knowledgeDomains = {};


    for (
        const detail
        of scoringDetails
    ) {

        const domain =
            detail.domain
            || "OTHER";


        knowledgeDomains[domain] =
            Number(
                knowledgeDomains[
                    domain
                ]
                || 0
            )
            +
            Number(
                detail.score
                || 0
            );
    }


    session.knowledge_domain_scores =
        knowledgeDomains;


    // =====================================================
    // 6. Select outcome from rubric thresholds
    // =====================================================

    const thresholds =
        [
            ...(
                rubric
                    .knowledge_outcome_thresholds
                || []
            )
        ]
        .sort(
            (a, b) =>
                Number(
                    b.min_score
                    || 0
                )
                -
                Number(
                    a.min_score
                    || 0
                )
        );


    let finalOutcomeId = "";


    for (
        const threshold
        of thresholds
    ) {

        if (
            totalScore >=
            Number(
                threshold.min_score
                || 0
            )
        ) {

            finalOutcomeId =
                threshold.outcome_id;

            break;
        }
    }


    if (!finalOutcomeId) {

        throw new Error(
            "ไม่พบ Knowledge Outcome"
        );
    }


    const outcome =
        gameData.indexes
            ?.outcome_by_id
            ?.[finalOutcomeId];


    if (!outcome) {

        throw new Error(
            "ไม่พบ Outcome: " +
            finalOutcomeId
        );
    }


    session.final_outcome_id =
        finalOutcomeId;


    session.last_outcome_id =
        finalOutcomeId;


    gameState.last_outcome_id =
        finalOutcomeId;


    // =====================================================
    // 7. Completion
    // =====================================================

    if (
        !Array.isArray(
            gameState.completed_case_ids
        )
    ) {

        gameState.completed_case_ids =
            [];
    }


    const firstClear =
        !gameState
            .completed_case_ids
            .includes(
                session.case_id
            );


    if (firstClear) {

        gameState
            .completed_case_ids
            .push(
                session.case_id
            );
    }


    // =====================================================
    // 8. Best Score
    // =====================================================

    if (
        !gameState.best_case_scores ||
        typeof gameState.best_case_scores
            !== "object"
    ) {

        gameState.best_case_scores = {};
    }


    const previousBest =
        Number(
            gameState
                .best_case_scores[
                    session.case_id
                ]
            || 0
        );


    gameState
        .best_case_scores[
            session.case_id
        ] =
        Math.max(
            previousBest,
            totalScore
        );


    // =====================================================
    // 9. Statistics
    // =====================================================

    if (
        !gameState.statistics ||
        typeof gameState.statistics
            !== "object"
    ) {

        gameState.statistics = {};
    }


    const firstTaskResult =
        session
            .knowledge_task_results
            ?.KT_CASE002_01;


    if (
        firstTaskResult ===
        "CORRECT_FIRST_TRY"
    ) {

        gameState
            .statistics
            .herbs_identified_first_try =
            Number(
                gameState
                    .statistics
                    .herbs_identified_first_try
                || 0
            ) + 1;
    }


    gameState
        .statistics
        .hints_used_total =
        Number(
            gameState
                .statistics
                .hints_used_total
            || 0
        )
        +
        Number(
            session.hints_used
            || 0
        );


    // =====================================================
    // 10. Unlock next cases
    // =====================================================

    if (
        !Array.isArray(
            gameState.unlocked_case_ids
        )
    ) {

        gameState.unlocked_case_ids =
            [];
    }


    const unlockRules =
        gameData.systems
            ?.progression
            ?.case_unlock_rules
        || [];


    for (
        const unlockRule
        of unlockRules
    ) {

        const targetCaseId =
            unlockRule
                .target_case_id;


        if (!targetCaseId) {
            continue;
        }


        const requirements =
            unlockRule
                .requirements
            || [];


        let requirementsMet =
            true;


        for (
            const requirement
            of requirements
        ) {

            if (
                requirement.type ===
                "CASE_COMPLETED"
            ) {

                if (
                    !gameState
                        .completed_case_ids
                        .includes(
                            requirement.case_id
                        )
                ) {

                    requirementsMet =
                        false;

                    break;
                }
            }


            else if (
                requirement.type ===
                "CASE_SET_COMPLETED"
            ) {

                const requiredCases =
                    requirement
                        .case_ids
                    || [];


                const completed =
                    requiredCases.every(
                        caseId =>
                            gameState
                                .completed_case_ids
                                .includes(
                                    caseId
                                )
                    );


                if (!completed) {

                    requirementsMet =
                        false;

                    break;
                }
            }
        }


        if (
            requirementsMet &&
            !gameState
                .unlocked_case_ids
                .includes(
                    targetCaseId
                )
        ) {

            gameState
                .unlocked_case_ids
                .push(
                    targetCaseId
                );
        }
    }


    // =====================================================
    // 11. Final snapshot
    // =====================================================

    session.final_result = {

        case_id:
            session.case_id,

        case_type:
            currentCase.case_type,

        final_score:
            totalScore,

        domain_scores:
            {
                ...knowledgeDomains
            },

        knowledge_task_results:
            {
                ...session
                    .knowledge_task_results
            },

        learning_actions:
            [
                ...(
                    session
                        .learning_actions
                    || []
                )
            ],

        outcome_id:
            finalOutcomeId,

        first_clear:
            firstClear
    };


    console.log(
        "KNOWLEDGE CASE COMPLETE:",
        session.final_result
    );


    console.log(
        "Unlocked cases:",
        gameState
            .unlocked_case_ids
    );


    // =====================================================
    // 12. Go result
    // =====================================================

    gdjs.evtTools.runtimeScene
        .replaceScene(
            runtimeScene,
            "S11_KnowledgeResult",
            false
        );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const textObjects =
        runtimeScene.getObjects(
            "Txt_HerbCardEvidence"
        );


    if (
        textObjects.length > 0
    ) {

        textObjects[0].setText(
            "เกิดข้อผิดพลาด\n" +
            message
        );
    }


    console.error(
        "MorYa Knowledge Finalization Error:",
        error
    );
}
};
gdjs.S10_95HerbCardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S10_95HerbCardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S10_95HerbCardCode.userFunc0x18243e0(runtimeScene);

}


};

gdjs.S10_95HerbCardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects3.length = 0;

gdjs.S10_95HerbCardCode.eventsList1(runtimeScene);
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTitleObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardTaxonomyObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardContextObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardClaimsObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDTxt_9595HerbCardEvidenceObjects3.length = 0;
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects1.length = 0;
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects2.length = 0;
gdjs.S10_95HerbCardCode.GDBtn_9595HerbCardFinishObjects3.length = 0;


return;

}

gdjs['S10_95HerbCardCode'] = gdjs.S10_95HerbCardCode;
