gdjs.S03_95ClinicalEncounter_95LegacyCode = {};
gdjs.S03_95ClinicalEncounter_95LegacyCode.localVariables = [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.idToCallbackMap = new Map();
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595EncounterTitleObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595EncounterTitleObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595NPCNameObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595NPCNameObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595AnswerObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595AnswerObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue1Objects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue1Objects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue2Objects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue2Objects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue3Objects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue3Objects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue4Objects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue4Objects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595NextCuePageObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595NextCuePageObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595PrevCuePageObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595PrevCuePageObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionQuotaObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionQuotaObjects2= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595MakeDecisionObjects1= [];
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595MakeDecisionObjects2= [];


gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x1bebde8 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =========================================================
    // MorYa Demo0.1
    // S03_ClinicalEncounter
    // INITIALIZE + RENDER QUESTION MENU + QUESTION BUDGET
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
            "ไม่พบข้อมูล Case: " +
            String(session.case_id)
        );
    }

    if (
        currentCase.case_type !==
        "CLINICAL_ENCOUNTER"
    ) {
        throw new Error(
            "Case นี้ไม่ใช่ Clinical Encounter"
        );
    }


    // =========================================================
    // 2. HELPER
    // =========================================================

    const getObj = (name) => {

        const objects =
            runtimeScene.getObjects(name);

        return objects.length > 0
            ? objects[0]
            : null;
    };


    // =========================================================
    // 3. SCENE OBJECTS
    // =========================================================

    const titleText =
        getObj("Txt_EncounterTitle");

    const npcText =
        getObj("Txt_NPCName");

    const questionText =
        getObj("Txt_Question");

    const answerText =
        getObj("Txt_Answer");

    const quotaText =
        getObj("Txt_QuestionQuota");

    const oldAskButton =
        getObj("Btn_AskCue");


    // ปุ่มระบบเก่าไม่ใช้แล้ว
    if (oldAskButton) {
        oldAskButton.hide(true);
    }


    // =========================================================
    // 4. PATIENT
    // =========================================================

    const patient =
        currentCase.patient_id
            ? gameData.indexes
                ?.patient_by_id
                ?.[currentCase.patient_id]
            : null;

    const npcName =
        patient?.display_name ||
        currentCase.npc_display_name ||
        "ผู้รับบริการ";


    // =========================================================
    // 5. HEADER
    // =========================================================

    if (titleText) {

        titleText.setText(
            currentCase.case_title_th || ""
        );
    }

    if (npcText) {

        npcText.setText(
            "ผู้รับบริการ: " +
            npcName
        );
    }

    if (questionText) {

        questionText.setText(
            "เลือกคำถามที่ต้องการถาม"
        );
    }

    if (answerText) {

        answerText.setText(
            "ยังไม่ได้เลือกคำถาม"
        );
    }


    // =========================================================
    // 6. SESSION DEFAULTS
    // =========================================================

    session.cue_page = 0;

    session.cues_per_page = 4;


    // ---------------------------------------------------------
    // Array ต่าง ๆ
    // ---------------------------------------------------------

    if (
        !Array.isArray(
            session.asked_cue_ids
        )
    ) {

        session.asked_cue_ids = [];
    }


    if (
        !Array.isArray(
            session.discovered_concepts
        )
    ) {

        session.discovered_concepts = [];
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
            session.unlocked_fact_ids
        )
    ) {

        session.unlocked_fact_ids = [];
    }


    session.visible_cue_ids =
        [null, null, null, null];


    if (
        typeof session.last_answered_cue_id
        !== "string"
    ) {

        session.last_answered_cue_id = "";
    }


    // =========================================================
    // 7. QUESTION BUDGET INITIALIZATION
    // =========================================================
    //
    // ในอนาคตเราจะย้ายค่าเหล่านี้เข้า case_master.json
    // แต่ตอนนี้รองรับทั้งค่าจาก Data และ fallback
    //
    // CASE001 = 7
    // CASE004 = 6
    // CASE005 = 9
    // =========================================================

    const fallbackBudgetByCase = {

        CASE001: 7,

        CASE004: 6,

        CASE005: 9
    };


    // ถ้าในอนาคต case_master มี question_budget
    // จะอ่านค่าจากฐานก่อน
    const dataBudget =
        currentCase
            ?.question_budget
            ?.max_questions;


    const fallbackBudget =
        fallbackBudgetByCase[
            session.case_id
        ] ?? 7;


    const resolvedBudget =
        Number.isFinite(
            Number(dataBudget)
        )
            ? Number(dataBudget)
            : fallbackBudget;


    // ---------------------------------------------------------
    // ตั้งค่าเฉพาะเมื่อยังไม่มี
    // เพื่อไม่ reset ทุกครั้งที่ renderer ทำงาน
    // ---------------------------------------------------------

    if (
        !Number.isFinite(
            Number(
                session.question_budget_max
            )
        ) ||
        Number(
            session.question_budget_max
        ) <= 0
    ) {

        session.question_budget_max =
            resolvedBudget;
    }


    if (
        !Number.isFinite(
            Number(
                session.question_budget_used
            )
        )
    ) {

        session.question_budget_used = 0;
    }


    // ป้องกัน used เกิน max
    session.question_budget_used =
        Math.max(
            0,
            Math.min(
                Number(
                    session.question_budget_used
                ),
                Number(
                    session.question_budget_max
                )
            )
        );


    // คำนวณ remaining จาก max - used
    // เพื่อให้ state สอดคล้องกันเสมอ
    session.question_budget_remaining =
        Math.max(
            0,
            Number(
                session.question_budget_max
            ) -
            Number(
                session.question_budget_used
            )
        );


    session.question_budget_exhausted =
        session.question_budget_remaining <= 0;


    // =========================================================
    // 8. FUNCTION: RENDER QUESTION MENU
    // =========================================================

    globalThis.MorYaRenderCueMenu =
        function(runtimeScene) {

            const gameData =
                globalThis.MorYaGameData;

            const session =
                globalThis.MorYaCaseSession;


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


            // =================================================
            // 8.1 UPDATE QUESTION BUDGET
            // =================================================

            session.question_budget_remaining =
                Math.max(
                    0,
                    Number(
                        session
                            .question_budget_max
                    ) -
                    Number(
                        session
                            .question_budget_used
                    )
                );


            session.question_budget_exhausted =
                session
                    .question_budget_remaining
                <= 0;


            // =================================================
            // 8.2 QUESTION BUDGET DISPLAY
            // =================================================

            const quotaObjects =
                runtimeScene.getObjects(
                    "Txt_QuestionQuota"
                );


            if (
                quotaObjects.length > 0
            ) {

                const quotaText =
                    quotaObjects[0];


                const remaining =
                    session
                        .question_budget_remaining;


                const maximum =
                    session
                        .question_budget_max;


                if (remaining > 0) {

                    quotaText.setText(
                        "โควต้าคำถาม: " +
                        remaining +
                        " / " +
                        maximum
                    );

                } else {

                    quotaText.setText(
                        "โควต้าคำถาม: 0 / " +
                        maximum +
                        "\nเลือกตัดสินใจ หรือทบทวนคำถามที่ถามแล้ว"
                    );
                }
            }


            // =================================================
            // 8.3 CUE PAGINATION
            // =================================================

            const cueIds =
                currentCase.cue_ids || [];


            const pageSize =
                session.cues_per_page || 4;


            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        cueIds.length /
                        pageSize
                    )
                );


            // -------------------------------------------------
            // Clamp page
            // -------------------------------------------------

            if (
                !Number.isInteger(
                    session.cue_page
                )
            ) {

                session.cue_page = 0;
            }


            if (
                session.cue_page < 0
            ) {

                session.cue_page = 0;
            }


            if (
                session.cue_page >=
                totalPages
            ) {

                session.cue_page =
                    totalPages - 1;
            }


            const page =
                session.cue_page;


            const startIndex =
                page * pageSize;


            const buttonNames = [

                "Btn_Cue1",

                "Btn_Cue2",

                "Btn_Cue3",

                "Btn_Cue4"
            ];


            // =================================================
            // 8.4 RESET BUTTON → CUE MAPPING
            // =================================================

            session.visible_cue_ids = [

                null,

                null,

                null,

                null
            ];


            // =================================================
            // 8.5 RENDER QUESTION BUTTONS
            // =================================================

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

                    console.warn(
                        "ไม่พบ Object:",
                        buttonNames[i]
                    );

                    continue;
                }


                const button =
                    objects[0];


                const cueId =
                    cueIds[
                        startIndex + i
                    ];


                // ---------------------------------------------
                // หน้าสุดท้ายอาจมีไม่ครบ 4 ข้อ
                // ---------------------------------------------

                if (!cueId) {

                    button.setText("");

                    button.hide(true);

                    continue;
                }


                const cue =
                    gameData.indexes
                        ?.cue_by_id
                        ?.[cueId];


                if (!cue) {

                    button.setText(
                        "ไม่พบข้อมูล " +
                        cueId
                    );

                    button.hide(false);

                    continue;
                }


                // ---------------------------------------------
                // mapping ปุ่มปัจจุบันกับ cue
                // ---------------------------------------------

                session.visible_cue_ids[i] =
                    cueId;


                const alreadyAsked =
                    session
                        .asked_cue_ids
                        .includes(cueId);


                const quotaExhausted =
                    session
                        .question_budget_remaining
                    <= 0;


                // ---------------------------------------------
                // Prefix
                //
                // ✓ = ถามแล้ว
                // × = ยังไม่ได้ถาม แต่โควต้าหมด
                // ว่าง = ยังถามได้
                // ---------------------------------------------

                let prefix = "";


                if (alreadyAsked) {

                    prefix = "✓ ";

                } else if (
                    quotaExhausted
                ) {

                    prefix = "× ";
                }


                button.setText(
                    prefix +
                    cue.question_th
                );


                button.hide(false);
            }


            // =================================================
            // 8.6 PREVIOUS BUTTON
            // =================================================

            const prevObjects =
                runtimeScene.getObjects(
                    "Btn_PrevCuePage"
                );


            if (
                prevObjects.length > 0
            ) {

                const prevButton =
                    prevObjects[0];


                if (
                    page <= 0
                ) {

                    prevButton.hide(true);

                } else {

                    prevButton.setText(
                        "< ก่อนหน้า"
                    );

                    prevButton.hide(false);
                }
            }


            // =================================================
            // 8.7 NEXT BUTTON
            // =================================================

            const nextObjects =
                runtimeScene.getObjects(
                    "Btn_NextCuePage"
                );


            if (
                nextObjects.length > 0
            ) {

                const nextButton =
                    nextObjects[0];


                if (
                    page >=
                    totalPages - 1
                ) {

                    nextButton.hide(true);

                } else {

                    nextButton.setText(
                        "คำถามอื่น >  " +
                        (page + 1) +
                        "/" +
                        totalPages
                    );

                    nextButton.hide(false);
                }
            }


            // =================================================
            // 8.8 DEBUG
            // =================================================

            console.log(
                "Cue page rendered:",
                {

                    caseId:
                        session.case_id,

                    page:
                        page + 1,

                    totalPages:
                        totalPages,

                    visibleCueIds:
                        session
                            .visible_cue_ids,

                    askedCueIds:
                        session
                            .asked_cue_ids,

                    questionBudget: {

                        max:
                            session
                                .question_budget_max,

                        used:
                            session
                                .question_budget_used,

                        remaining:
                            session
                                .question_budget_remaining,

                        exhausted:
                            session
                                .question_budget_exhausted
                    }
                }
            );
        };


    // =========================================================
    // 9. RENDER FIRST PAGE
    // =========================================================

    globalThis.MorYaRenderCueMenu(
        runtimeScene
    );


    // =========================================================
    // 10. DEBUG INITIALIZATION
    // =========================================================

    console.log(
        "Clinical Encounter initialized:",
        {

            caseId:
                session.case_id,

            patient:
                npcName,

            totalCues:
                currentCase
                    .cue_ids
                    ?.length || 0,

            questionBudget: {

                max:
                    session
                        .question_budget_max,

                used:
                    session
                        .question_budget_used,

                remaining:
                    session
                        .question_budget_remaining
            }
        }
    );


} catch (error) {

    // =========================================================
    // ERROR HANDLING
    // =========================================================

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const questionObjects =
        runtimeScene.getObjects(
            "Txt_Question"
        );


    if (
        questionObjects.length > 0
    ) {

        questionObjects[0].setText(
            "เกิดข้อผิดพลาด\n" +
            message
        );
    }


    const answerObjects =
        runtimeScene.getObjects(
            "Txt_Answer"
        );


    if (
        answerObjects.length > 0
    ) {

        answerObjects[0].setText(
            "ไม่สามารถเริ่ม Clinical Encounter ได้"
        );
    }


    console.error(
        "MorYa ClinicalEncounter Init Error:",
        error
    );
}
};
gdjs.S03_95ClinicalEncounter_95LegacyCode.eventsList0 = function(runtimeScene) {

{


gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x1bebde8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x139def8 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
const askObjects =
    runtimeScene.getObjects("Btn_AskCue");

const answerObjects =
    runtimeScene.getObjects("Txt_Answer");

const questionObjects =
    runtimeScene.getObjects("Txt_Question");

const askButton =
    askObjects.length > 0
        ? askObjects[0]
        : null;

const answerText =
    answerObjects.length > 0
        ? answerObjects[0]
        : null;

const questionText =
    questionObjects.length > 0
        ? questionObjects[0]
        : null;

if (askButton) {

    const cursorOnButton =
        askButton.cursorOnObject();

    const mouseReleased =
        gdjs.evtTools.input.isMouseButtonReleased(
            runtimeScene,
            "Left"
        );

    if (cursorOnButton && mouseReleased) {

        try {

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
                    "ไม่พบข้อมูล Case"
                );
            }

            const cueIds =
                currentCase.cue_ids || [];

            const cueIndex =
                session.cue_index || 0;

            const cueId =
                cueIds[cueIndex];

            const cue =
                gameData.indexes
                    ?.cue_by_id
                    ?.[cueId];

            if (!cue) {
                throw new Error(
                    "ไม่พบ Cue " + cueId
                );
            }

            // -------------------------
            // ค้นหาคำตอบของ NPC
            // -------------------------

            const caseResponses =
                gameData.indexes
                    ?.case_cue_responses_by_case
                    ?.[session.case_id] || [];

            const response =
                caseResponses.find(
                    item =>
                        item.cue_id === cueId
                );

            if (!response) {
                throw new Error(
                    "ไม่พบคำตอบสำหรับ " +
                    cueId
                );
            }

            // -------------------------
            // ป้องกันการถามซ้ำแล้วได้ข้อมูลซ้ำ
            // -------------------------

            const alreadyAsked =
                session.asked_cue_ids.includes(
                    cueId
                );

            if (!alreadyAsked) {

                session.asked_cue_ids.push(
                    cueId
                );

                // เก็บ concept
                if (
                    cue.concept_key &&
                    !session.discovered_concepts.includes(
                        cue.concept_key
                    )
                ) {
                    session.discovered_concepts.push(
                        cue.concept_key
                    );
                }

                // เก็บ Red Flag ที่ค้นพบ
                const positiveFlags =
                    response
                        .positive_red_flag_ids
                        || [];

                for (
                    const redFlagId
                    of positiveFlags
                ) {

                    if (
                        !session
                            .positive_red_flag_ids
                            .includes(redFlagId)
                    ) {
                        session
                            .positive_red_flag_ids
                            .push(redFlagId);
                    }
                }

                // เก็บ fact ที่ปลดล็อก
                if (!session.unlocked_fact_ids) {
                    session.unlocked_fact_ids = [];
                }

                if (
                    response.unlocked_fact_id &&
                    !session.unlocked_fact_ids.includes(
                        response.unlocked_fact_id
                    )
                ) {
                    session.unlocked_fact_ids.push(
                        response.unlocked_fact_id
                    );
                }
            }

            // -------------------------
            // แสดงคำตอบ NPC
            // -------------------------

            if (answerText) {
                answerText.setText(
                    "ยายสาย: " +
                    response.answer_text_th
                );
            }

            if (askButton) {
                askButton.setText(
                    "ถามแล้ว"
                );
            }

            console.log(
                "Cue discovered:",
                {
                    cueId,
                    concept:
                        cue.concept_key,
                    positiveRedFlags:
                        response
                            .positive_red_flag_ids,
                    session
                }
            );

        } catch (error) {

            const message =
                error instanceof Error
                    ? error.message
                    : String(error);

            if (answerText) {
                answerText.setText(
                    "เกิดข้อผิดพลาด\n" +
                    message
                );
            }

            console.error(
                "MorYa AskCue Error:",
                error
            );
        }
    }
}
};
gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x2241390 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S03_ClinicalEncounter
// QUESTION BUTTON CLICK HANDLER
// + QUESTION BUDGET
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


// =========================================================
// 2. SCENE OBJECTS
// =========================================================

const answerObjects =
    runtimeScene.getObjects(
        "Txt_Answer"
    );

const answerText =
    answerObjects.length > 0
        ? answerObjects[0]
        : null;


const buttonNames = [

    "Btn_Cue1",

    "Btn_Cue2",

    "Btn_Cue3",

    "Btn_Cue4"
];


// =========================================================
// 3. ตรวจ Mouse Release
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
// 4. ตรวจว่ากดปุ่ม Cue ไหน
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


    // ข้ามปุ่มที่ถูกซ่อน
    if (
        button.isHidden()
    ) {
        continue;
    }


    // ไม่ได้กดปุ่มนี้
    if (
        !button.cursorOnObject()
    ) {
        continue;
    }


    // =====================================================
    // 5. หา Cue ที่ปุ่มนี้กำลังแสดง
    // =====================================================

    const cueId =
        session
            .visible_cue_ids
            ?.[i];


    if (!cueId) {
        continue;
    }


    try {

        const cue =
            gameData.indexes
                ?.cue_by_id
                ?.[cueId];


        if (!cue) {

            throw new Error(
                "ไม่พบ Cue: " +
                cueId
            );
        }


        // =================================================
        // 6. ตรวจว่าเคยถามแล้วหรือยัง
        // =================================================

        const alreadyAsked =
            session
                .asked_cue_ids
                .includes(cueId);


        // =================================================
        // 7. ถ้าเป็นคำถามใหม่ แต่โควต้าหมด
        // =================================================

        if (
            !alreadyAsked &&
            session
                .question_budget_remaining
                <= 0
        ) {

            session
                .question_budget_exhausted =
                true;


            if (answerText) {

                answerText.setText(
                    "โควต้าคำถามหมดแล้ว\n" +
                    "ไม่สามารถถามคำถามใหม่เพิ่มได้\n" +
                    "คุณยังสามารถเปิดดูคำตอบของคำถามที่ถามแล้วได้"
                );
            }


            if (
                typeof globalThis
                    .MorYaRenderCueMenu ===
                "function"
            ) {

                globalThis
                    .MorYaRenderCueMenu(
                        runtimeScene
                    );
            }


            console.log(
                "Question budget exhausted:",
                {
                    attemptedCueId:
                        cueId,

                    max:
                        session
                            .question_budget_max,

                    used:
                        session
                            .question_budget_used,

                    remaining:
                        session
                            .question_budget_remaining
                }
            );


            break;
        }


        // =================================================
        // 8. หา NPC Response ของ Cue นี้
        // =================================================

        const responses =
            gameData.indexes
                ?.case_cue_responses_by_case
                ?.[session.case_id]
                || [];


        const response =
            responses.find(
                item =>
                    item.cue_id ===
                    cueId
            );


        if (!response) {

            throw new Error(
                "ไม่พบคำตอบสำหรับ " +
                cueId
            );
        }


        // =================================================
        // 9. ถ้าเป็นคำถามใหม่
        //    → หักโควต้า
        //    → บันทึกข้อมูล
        // =================================================

        if (!alreadyAsked) {

            // ---------------------------------------------
            // 9.1 บันทึกว่า Cue นี้ถูกถามแล้ว
            // ---------------------------------------------

            session
                .asked_cue_ids
                .push(cueId);


            // ---------------------------------------------
            // 9.2 หัก Question Budget
            // ---------------------------------------------

            session
                .question_budget_used =
                Number(
                    session
                        .question_budget_used
                    || 0
                ) + 1;


            session
                .question_budget_used =
                Math.min(
                    session
                        .question_budget_used,

                    session
                        .question_budget_max
                );


            session
                .question_budget_remaining =
                Math.max(
                    0,

                    session
                        .question_budget_max
                    -
                    session
                        .question_budget_used
                );


            session
                .question_budget_exhausted =
                session
                    .question_budget_remaining
                <= 0;


            // ---------------------------------------------
            // 9.3 บันทึก Concept
            // ---------------------------------------------

            if (
                cue.concept_key &&
                !session
                    .discovered_concepts
                    .includes(
                        cue.concept_key
                    )
            ) {

                session
                    .discovered_concepts
                    .push(
                        cue.concept_key
                    );
            }


            // ---------------------------------------------
            // 9.4 บันทึก Positive Red Flags
            // ---------------------------------------------

            const positiveFlags =
                response
                    .positive_red_flag_ids
                    || [];


            for (
                const redFlagId
                of positiveFlags
            ) {

                if (
                    !session
                        .positive_red_flag_ids
                        .includes(
                            redFlagId
                        )
                ) {

                    session
                        .positive_red_flag_ids
                        .push(
                            redFlagId
                        );
                }
            }


            // ---------------------------------------------
            // 9.5 บันทึก Fact
            // ---------------------------------------------

            if (
                response
                    .unlocked_fact_id
            ) {

                if (
                    !Array.isArray(
                        session
                            .unlocked_fact_ids
                    )
                ) {

                    session
                        .unlocked_fact_ids =
                        [];
                }


                if (
                    !session
                        .unlocked_fact_ids
                        .includes(
                            response
                                .unlocked_fact_id
                        )
                ) {

                    session
                        .unlocked_fact_ids
                        .push(
                            response
                                .unlocked_fact_id
                        );
                }
            }
        }


        // =================================================
        // 10. หาชื่อ NPC แบบ Dynamic
        // =================================================

        const currentCase =
            gameData.indexes
                ?.case_by_id
                ?.[session.case_id];


        let npcName =
            currentCase
                ?.npc_display_name
            ||
            "ผู้รับบริการ";


        if (
            currentCase
                ?.patient_id
        ) {

            const patient =
                gameData.indexes
                    ?.patient_by_id
                    ?.[
                        currentCase
                            .patient_id
                    ];


            if (
                patient
                    ?.display_name
            ) {

                npcName =
                    patient
                        .display_name;
            }
        }


        // =================================================
        // 11. แสดงคำตอบ
        // =================================================

        if (answerText) {

            answerText.setText(
                npcName +
                ": " +
                response
                    .answer_text_th
            );
        }


        session
            .last_answered_cue_id =
            cueId;


        // =================================================
        // 12. Refresh Question Menu
        //     → ✓ คำถามที่ถามแล้ว
        //     → × คำถามใหม่เมื่อโควต้าหมด
        //     → Update quota display
        // =================================================

        if (
            typeof globalThis
                .MorYaRenderCueMenu ===
            "function"
        ) {

            globalThis
                .MorYaRenderCueMenu(
                    runtimeScene
                );
        }


        // =================================================
        // 13. DEBUG
        // =================================================

        console.log(
            "Question processed:",
            {

                cueId:
                    cueId,

                alreadyAsked:
                    alreadyAsked,

                concept:
                    cue
                        .concept_key,

                redFlagsFromResponse:
                    response
                        .positive_red_flag_ids,

                questionBudget: {

                    max:
                        session
                            .question_budget_max,

                    used:
                        session
                            .question_budget_used,

                    remaining:
                        session
                            .question_budget_remaining,

                    exhausted:
                        session
                            .question_budget_exhausted
                },

                askedCueIds:
                    session
                        .asked_cue_ids,

                discoveredConcepts:
                    session
                        .discovered_concepts,

                discoveredRedFlags:
                    session
                        .positive_red_flag_ids
            }
        );


    } catch (error) {

        // =================================================
        // ERROR
        // =================================================

        const message =
            error instanceof Error
                ? error.message
                : String(error);


        if (answerText) {

            answerText.setText(
                "เกิดข้อผิดพลาด\n" +
                message
            );
        }


        console.error(
            "MorYa Question Click Error:",
            error
        );
    }


    // =====================================================
    // กดได้ครั้งละหนึ่งปุ่มต่อ frame
    // =====================================================

    break;
}
};
gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x1e3ac18 = function GDJSInlineCode(runtimeScene) {
"use strict";
const gameData =
    globalThis.MorYaGameData;

const session =
    globalThis.MorYaCaseSession;

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

const cueIds =
    currentCase.cue_ids || [];

const pageSize =
    session.cues_per_page || 4;

const totalPages =
    Math.max(
        1,
        Math.ceil(
            cueIds.length /
            pageSize
        )
    );

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
// NEXT PAGE
// =========================================================

const nextObjects =
    runtimeScene.getObjects(
        "Btn_NextCuePage"
    );

if (nextObjects.length > 0) {

    const nextButton =
        nextObjects[0];

    // ตรวจด้วยว่าปุ่มไม่ได้ถูกซ่อน
    if (
        !nextButton.isHidden() &&
        nextButton.cursorOnObject() &&
        session.cue_page <
            totalPages - 1
    ) {

        session.cue_page += 1;

        if (
            typeof globalThis
                .MorYaRenderCueMenu ===
            "function"
        ) {

            globalThis
                .MorYaRenderCueMenu(
                    runtimeScene
                );
        }

        return;
    }
}

// =========================================================
// PREVIOUS PAGE
// =========================================================

const prevObjects =
    runtimeScene.getObjects(
        "Btn_PrevCuePage"
    );

if (prevObjects.length > 0) {

    const prevButton =
        prevObjects[0];

    if (
        !prevButton.isHidden() &&
        prevButton.cursorOnObject() &&
        session.cue_page > 0
    ) {

        session.cue_page -= 1;

        if (
            typeof globalThis
                .MorYaRenderCueMenu ===
            "function"
        ) {

            globalThis
                .MorYaRenderCueMenu(
                    runtimeScene
                );
        }
    }
}
};
gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x14bcaf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S03_ClinicalEncounter
// MAKE DECISION BUTTON
// =========================================================

const gameData =
    globalThis.MorYaGameData;

const session =
    globalThis.MorYaCaseSession;

if (!gameData || !session) {
    return;
}


// =========================================================
// 1. หา Btn_MakeDecision
// =========================================================

const decisionObjects =
    runtimeScene.getObjects(
        "Btn_MakeDecision"
    );

if (
    decisionObjects.length === 0
) {
    return;
}

const decisionButton =
    decisionObjects[0];


// =========================================================
// 2. ตรวจ Mouse Release
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
// 3. ตรวจว่ากดปุ่มจริง
// =========================================================

if (
    decisionButton.isHidden() ||
    !decisionButton.cursorOnObject()
) {
    return;
}


// =========================================================
// 4. บันทึกสถานะเมื่อจบการซักประวัติ
// =========================================================

session.interview_completed = true;

session.interview_question_count =
    Array.isArray(
        session.asked_cue_ids
    )
        ? session.asked_cue_ids.length
        : 0;

session.interview_budget_unused =
    Math.max(
        0,
        Number(
            session.question_budget_remaining
            || 0
        )
    );


// snapshot ไว้สำหรับ debug / scoring ภายหลัง
session.interview_snapshot = {

    asked_cue_ids:
        [
            ...(
                session.asked_cue_ids
                || []
            )
        ],

    discovered_concepts:
        [
            ...(
                session.discovered_concepts
                || []
            )
        ],

    positive_red_flag_ids:
        [
            ...(
                session.positive_red_flag_ids
                || []
            )
        ],

    question_budget_max:
        Number(
            session.question_budget_max
            || 0
        ),

    question_budget_used:
        Number(
            session.question_budget_used
            || 0
        ),

    question_budget_remaining:
        Number(
            session.question_budget_remaining
            || 0
        )
};


// reset disposition ก่อนเข้าหน้าตัดสินใจ
session.selected_disposition = "";


// =========================================================
// 5. Debug
// =========================================================

console.log(
    "Interview completed:",
    session.interview_snapshot
);


// =========================================================
// 6. ไปหน้า Disposition
// =========================================================

gdjs.evtTools.runtimeScene
    .replaceScene(
        runtimeScene,
        "S04_Disposition",
        false
    );
};
gdjs.S03_95ClinicalEncounter_95LegacyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S03_95ClinicalEncounter_95LegacyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x139def8(runtimeScene);

}


{


gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x2241390(runtimeScene);

}


{


gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x1e3ac18(runtimeScene);

}


{


gdjs.S03_95ClinicalEncounter_95LegacyCode.userFunc0x14bcaf8(runtimeScene);

}


};

gdjs.S03_95ClinicalEncounter_95LegacyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595EncounterTitleObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595EncounterTitleObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595NPCNameObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595NPCNameObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595AnswerObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595AnswerObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue1Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue1Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue2Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue2Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue3Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue3Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue4Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue4Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595NextCuePageObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595NextCuePageObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595PrevCuePageObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595PrevCuePageObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionQuotaObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionQuotaObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595MakeDecisionObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595MakeDecisionObjects2.length = 0;

gdjs.S03_95ClinicalEncounter_95LegacyCode.eventsList1(runtimeScene);
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595EncounterTitleObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595EncounterTitleObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595NPCNameObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595NPCNameObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595AnswerObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595AnswerObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue1Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue1Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue2Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue2Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue3Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue3Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue4Objects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595Cue4Objects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595NextCuePageObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595NextCuePageObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595PrevCuePageObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595PrevCuePageObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionQuotaObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDTxt_9595QuestionQuotaObjects2.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595MakeDecisionObjects1.length = 0;
gdjs.S03_95ClinicalEncounter_95LegacyCode.GDBtn_9595MakeDecisionObjects2.length = 0;


return;

}

gdjs['S03_95ClinicalEncounter_95LegacyCode'] = gdjs.S03_95ClinicalEncounter_95LegacyCode;
