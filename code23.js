gdjs.S09_95KnowledgeEncounterCode = {};
gdjs.S09_95KnowledgeEncounterCode.localVariables = [];
gdjs.S09_95KnowledgeEncounterCode.idToCallbackMap = new Map();
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects3= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects1= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects2= [];
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects3= [];


gdjs.S09_95KnowledgeEncounterCode.userFunc0x14bcaf8 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S09_95KnowledgeEncounterCode.eventsList0 = function(runtimeScene) {

{


gdjs.S09_95KnowledgeEncounterCode.userFunc0x14bcaf8(runtimeScene);

}


};gdjs.S09_95KnowledgeEncounterCode.userFunc0x139def8 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {

    // =========================================================
    // MorYa Demo0.1
    // S09_KnowledgeEncounter
    // KNOWLEDGE TASK ENGINE INITIALIZATION
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


    if (
        currentCase.case_type !==
        "KNOWLEDGE_ENCOUNTER"
    ) {

        throw new Error(
            "Case นี้ไม่ใช่ Knowledge Encounter"
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
    // 3. BASIC OBJECTS
    // =========================================================

    const titleText =
        getObj(
            "Txt_KnowledgeTitle"
        );


    const storyText =
        getObj(
            "Txt_KnowledgeStory"
        );


    const statusText =
        getObj(
            "Txt_KnowledgeStatus"
        );


    const backButton =
        getObj(
            "Btn_KnowledgeBack"
        );


    if (titleText) {

        titleText.setText(
            currentCase.case_title_th
        );
    }


    if (storyText) {

        storyText.setText(
            currentCase.initial_story_th
            || ""
        );
    }


    if (backButton) {

        backButton.setText(
            "< กลับหน้าหลัก"
        );
    }


    // =========================================================
    // 4. SESSION DEFAULTS
    // =========================================================

    if (
        !Number.isInteger(
            session.knowledge_task_index
        )
    ) {

        session.knowledge_task_index = 0;
    }


    if (
        !session.knowledge_task_results ||
        typeof session.knowledge_task_results
            !== "object"
    ) {

        session.knowledge_task_results = {};
    }


    if (
        !Array.isArray(
            session.learning_actions
        )
    ) {

        session.learning_actions = [];
    }


    if (
        !Array.isArray(
            session.knowledge_selected_options
        )
    ) {

        session.knowledge_selected_options = [];
    }


    session.current_knowledge_task_answered =
        false;


    session.current_knowledge_task_result =
        "";


    session.current_knowledge_hint_used =
        false;


    session.current_knowledge_option_ids =
        [];


    // =========================================================
    // 5. OPTION BUILDER
    // =========================================================

    globalThis.MorYaBuildKnowledgeOptions =
        function(task) {

            const gameData =
                globalThis.MorYaGameData;


            if (!task || !gameData) {

                return [];
            }


            // =================================================
            // IMAGE IDENTIFICATION
            // =================================================

            if (
                task.type ===
                "IMAGE_IDENTIFICATION"
            ) {

                const targetHerbId =
                    task.target_herb_id;


                const herbs =
                    gameData.tables
                        ?.herbs
                    || [];


                const targetHerb =
                    gameData.indexes
                        ?.herb_by_id
                        ?.[targetHerbId];


                if (!targetHerb) {

                    return [];
                }


                // ---------------------------------------------
                // Distractors:
                // เลือกจากกลุ่มสมุนไพรใกล้ตัว/อาหารก่อน
                // ---------------------------------------------

                const distractors =
                    herbs
                        .filter(
                            herb =>
                                herb.herb_id !==
                                    targetHerbId
                                &&
                                herb.game_use_level ===
                                    "FOOD_LEARNING"
                        )
                        .slice(
                            0,
                            3
                        );


                const options =
                    [
                        targetHerb,
                        ...distractors
                    ]
                    .map(
                        herb => ({

                            option_id:
                                herb.herb_id,

                            herb_id:
                                herb.herb_id,

                            image_asset_id:
                                herb.image_asset_id,

                            // ชื่อใช้เฉพาะ placeholder
                            // เมื่อมี Sprite จริงจะไม่ต้องแสดง
                            placeholder_text:
                                herb.thai_name,

                            correct:
                                herb.herb_id ===
                                    targetHerbId
                        })
                    );


                // ---------------------------------------------
                // deterministic rotation
                // ไม่ให้คำตอบถูกอยู่ช่องแรกตลอด
                // ---------------------------------------------

                if (
                    options.length > 1
                ) {

                    const shift =
                        (
                            task.task_id
                                .length
                            +
                            targetHerbId
                                .length
                        )
                        %
                        options.length;


                    return [
                        ...options.slice(shift),
                        ...options.slice(
                            0,
                            shift
                        )
                    ];
                }


                return options;
            }


            // =================================================
            // CONCEPT CHOICE
            // =================================================

            if (
                task.type ===
                "CONCEPT_CHOICE"
            ) {

                return [

                    {
                        option_id:
                            "FOOD_AND_TRADITIONAL_HERB",

                        text_th:
                            "เป็นได้ทั้งพืชอาหารและพืชที่มีการใช้ตามภูมิปัญญาสมุนไพร",

                        correct:
                            task.target_concept ===
                            "FOOD_AND_TRADITIONAL_HERB"
                    },

                    {
                        option_id:
                            "FOOD_ONLY",

                        text_th:
                            "เป็นเพียงพืชอาหารเท่านั้น ไม่เกี่ยวข้องกับภูมิปัญญาสมุนไพร",

                        correct:
                            task.target_concept ===
                            "FOOD_ONLY"
                    },

                    {
                        option_id:
                            "MEDICINE_ONLY",

                        text_th:
                            "เป็นยาเท่านั้น ไม่ควรใช้เป็นอาหาร",

                        correct:
                            task.target_concept ===
                            "MEDICINE_ONLY"
                    },

                    {
                        option_id:
                            "PROVEN_FOR_ALL_USES",

                        text_th:
                            "ทุกสรรพคุณที่เล่าต่อกันมาได้รับการพิสูจน์ทางคลินิกแล้ว",

                        correct:
                            false
                    }
                ];
            }


            // =================================================
            // EVIDENCE LITERACY
            // =================================================

            if (
                task.type ===
                "EVIDENCE_LITERACY"
            ) {

                return [

                    {
                        option_id:
                            "YES",

                        text_th:
                            "ใช่ การใช้ตามภูมิปัญญาหมายความว่าพิสูจน์ทางคลินิกแล้ว",

                        correct:
                            task.target_answer ===
                            "YES"
                    },

                    {
                        option_id:
                            "NO",

                        text_th:
                            "ไม่ใช่ การใช้ตามภูมิปัญญาและหลักฐานทางคลินิกเป็นคนละประเด็น",

                        correct:
                            task.target_answer ===
                            "NO"
                    }
                ];
            }


            return [];
        };


    // =========================================================
    // 6. RENDER CURRENT TASK
    // =========================================================

    globalThis.MorYaRenderKnowledgeTask =
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


            const tasks =
                currentCase.knowledge_tasks
                || [];


            const taskIndex =
                session.knowledge_task_index;


            const task =
                tasks[taskIndex];


            const progressObjects =
                runtimeScene.getObjects(
                    "Txt_KnowledgeProgress"
                );


            const promptObjects =
                runtimeScene.getObjects(
                    "Txt_KnowledgePrompt"
                );


            const feedbackObjects =
                runtimeScene.getObjects(
                    "Txt_KnowledgeFeedback"
                );


            const nextObjects =
                runtimeScene.getObjects(
                    "Btn_KnowledgeNext"
                );


            const hintObjects =
                runtimeScene.getObjects(
                    "Btn_KnowledgeHint"
                );


            // ---------------------------------------------
            // ไม่มี Task แล้ว
            // ---------------------------------------------

            if (!task) {

                if (
                    promptObjects.length > 0
                ) {

                    promptObjects[0].setText(
                        "ทำกิจกรรมครบแล้ว"
                    );
                }


                return;
            }


            // ---------------------------------------------
            // progress
            // ---------------------------------------------

            if (
                progressObjects.length > 0
            ) {

                progressObjects[0].setText(
                    "กิจกรรม " +
                    (taskIndex + 1) +
                    " / " +
                    tasks.length
                );
            }


            // ---------------------------------------------
            // prompt
            // ---------------------------------------------

            if (
                promptObjects.length > 0
            ) {

                promptObjects[0].setText(
                    task.prompt_th
                    || ""
                );
            }


            // ---------------------------------------------
            // feedback
            // ---------------------------------------------

            if (
                feedbackObjects.length > 0
            ) {

                if (
                    session
                        .current_knowledge_task_answered
                ) {

                    feedbackObjects[0].setText(
                        session
                            .current_knowledge_feedback
                        || ""
                    );

                } else {

                    feedbackObjects[0].setText(
                        "เลือกคำตอบที่เหมาะสมที่สุด"
                    );
                }
            }


            // ---------------------------------------------
            // Build options
            // ---------------------------------------------

            const options =
                globalThis
                    .MorYaBuildKnowledgeOptions(
                        task
                    );


            session.current_knowledge_options =
                options;


            session.current_knowledge_option_ids =
                options.map(
                    option =>
                        option.option_id
                );


            const buttonNames = [

                "Btn_KnowledgeChoice1",

                "Btn_KnowledgeChoice2",

                "Btn_KnowledgeChoice3",

                "Btn_KnowledgeChoice4"
            ];


            // ---------------------------------------------
            // Render options
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


                // =========================================
                // IMAGE IDENTIFICATION
                // =========================================
                //
                // ตอนนี้ใช้ placeholder ก่อน
                // รอบ image integration จะเปลี่ยนส่วนนี้
                // เป็น Sprite โดยไม่แตะ scoring
                // =========================================

                if (
                    task.type ===
                    "IMAGE_IDENTIFICATION"
                ) {

                    button.setText(
                        "ภาพตัวเลือก " +
                        (i + 1) +
                        "\n" +
                        option.placeholder_text
                    );

                } else {

                    button.setText(
                        option.text_th
                        || option.option_id
                    );
                }


                button.hide(false);
            }


            // ---------------------------------------------
            // Hint
            // ---------------------------------------------

            if (
                hintObjects.length > 0
            ) {

                const hintButton =
                    hintObjects[0];


                // Hint ใช้เฉพาะ Task 1
                if (
                    task.task_id ===
                    "KT_CASE002_01"
                    &&
                    !session
                        .current_knowledge_task_answered
                ) {

                    hintButton.setText(
                        "ขอคำใบ้"
                    );

                    hintButton.hide(false);

                } else {

                    hintButton.hide(true);
                }
            }


            // ---------------------------------------------
            // Next
            // ---------------------------------------------

            if (
                nextObjects.length > 0
            ) {

                const nextButton =
                    nextObjects[0];


                if (
                    session
                        .current_knowledge_task_answered
                ) {

                    if (
                        taskIndex <
                        tasks.length - 1
                    ) {

                        nextButton.setText(
                            "ข้อต่อไป >"
                        );

                    } else {

                        nextButton.setText(
                            "สรุปกิจกรรม >"
                        );
                    }


                    nextButton.hide(false);

                } else {

                    nextButton.hide(true);
                }
            }


            // ---------------------------------------------
            // Status
            // ---------------------------------------------

            const statusObjects =
                runtimeScene.getObjects(
                    "Txt_KnowledgeStatus"
                );


            if (
                statusObjects.length > 0
            ) {

                statusObjects[0].setText(
                    "ประเภทกิจกรรม: " +
                    task.type
                );
            }


            console.log(
                "Knowledge task rendered:",
                {

                    task:
                        task,

                    options:
                        options,

                    answered:
                        session
                            .current_knowledge_task_answered
                }
            );
        };


    // =========================================================
    // 7. FIRST RENDER
    // =========================================================

    globalThis
        .MorYaRenderKnowledgeTask(
            runtimeScene
        );


} catch (error) {

    const message =
        error instanceof Error
            ? error.message
            : String(error);


    const objects =
        runtimeScene.getObjects(
            "Txt_KnowledgeStatus"
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
        "MorYa Knowledge Init Error:",
        error
    );
}
};
gdjs.S09_95KnowledgeEncounterCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.S09_95KnowledgeEncounterCode.userFunc0x139def8(runtimeScene);

}


};gdjs.S09_95KnowledgeEncounterCode.userFunc0x28b3e30 = function GDJSInlineCode(runtimeScene) {
"use strict";
const objects =
    runtimeScene.getObjects(
        "Btn_KnowledgeBack"
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
gdjs.S09_95KnowledgeEncounterCode.userFunc0x1d18d78 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S09_KnowledgeEncounter
// KNOWLEDGE ANSWER CLICK
// =========================================================

const gameData =
    globalThis.MorYaGameData;

const session =
    globalThis.MorYaCaseSession;


if (
    !gameData ||
    !session
) {
    return;
}


// ตอบแล้วไม่ให้เปลี่ยนคำตอบ
if (
    session
        .current_knowledge_task_answered
) {
    return;
}


const currentCase =
    gameData.indexes
        ?.case_by_id
        ?.[session.case_id];


if (!currentCase) {
    return;
}


const tasks =
    currentCase.knowledge_tasks
    || [];


const task =
    tasks[
        session.knowledge_task_index
    ];


if (!task) {
    return;
}


const options =
    session.current_knowledge_options
    || [];


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

    "Btn_KnowledgeChoice1",

    "Btn_KnowledgeChoice2",

    "Btn_KnowledgeChoice3",

    "Btn_KnowledgeChoice4"
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


    // =====================================================
    // Determine Result
    // =====================================================

    let result = "INCORRECT";


    if (option.correct) {

        if (
            task.task_id ===
            "KT_CASE002_01"
        ) {

            result =
                session
                    .current_knowledge_hint_used
                    ? "CORRECT_WITH_HINT"
                    : "CORRECT_FIRST_TRY";

        } else {

            result = "CORRECT";
        }
    }


    // =====================================================
    // Store result
    // =====================================================

    session
        .knowledge_task_results[
            task.task_id
        ] =
        result;


    session.current_knowledge_task_result =
        result;


    session.current_knowledge_task_answered =
        true;


    session.current_knowledge_selected_option =
        option.option_id;


    // =====================================================
    // Feedback
    // =====================================================

    if (
        result ===
        "CORRECT_FIRST_TRY"
    ) {

        session.current_knowledge_feedback =
            "ถูกต้อง — คุณจำแนกได้ตั้งแต่ครั้งแรก";

    } else if (
        result ===
        "CORRECT_WITH_HINT"
    ) {

        session.current_knowledge_feedback =
            "ถูกต้อง — คำใบ้ช่วยให้คุณจำแนกได้";

    } else if (
        result ===
        "CORRECT"
    ) {

        session.current_knowledge_feedback =
            "ถูกต้อง";

    } else {

        session.current_knowledge_feedback =
            "คำตอบนี้ยังไม่ตรงกับประเด็นการเรียนรู้ของกิจกรรม";
    }


    // =====================================================
    // Render
    // =====================================================

    if (
        typeof globalThis
            .MorYaRenderKnowledgeTask ===
        "function"
    ) {

        globalThis
            .MorYaRenderKnowledgeTask(
                runtimeScene
            );
    }


    console.log(
        "Knowledge answer:",
        {

            taskId:
                task.task_id,

            selected:
                option.option_id,

            result:
                result,

            results:
                session
                    .knowledge_task_results
        }
    );


    break;
}
};
gdjs.S09_95KnowledgeEncounterCode.userFunc0x2241390 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S09_KnowledgeEncounter
// KNOWLEDGE HINT
// =========================================================

const session =
    globalThis.MorYaCaseSession;

const gameData =
    globalThis.MorYaGameData;


if (
    !session ||
    !gameData
) {
    return;
}


if (
    session
        .current_knowledge_task_answered
) {
    return;
}


const currentCase =
    gameData.indexes
        ?.case_by_id
        ?.[session.case_id];


const task =
    currentCase
        ?.knowledge_tasks
        ?.[
            session.knowledge_task_index
        ];


if (
    !task ||
    task.task_id !==
        "KT_CASE002_01"
) {
    return;
}


const objects =
    runtimeScene.getObjects(
        "Btn_KnowledgeHint"
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


// =========================================================
// Record hint
// =========================================================

session.current_knowledge_hint_used =
    true;


session.hints_used =
    Number(
        session.hints_used
        || 0
    ) + 1;


const feedbackObjects =
    runtimeScene.getObjects(
        "Txt_KnowledgeFeedback"
    );


if (
    feedbackObjects.length > 0
) {

    feedbackObjects[0].setText(
        "คำใบ้: ลองสังเกตลักษณะต้นและใบของกะเพรา " +
        "แล้วเปรียบเทียบกับพืชครัวชนิดอื่น"
    );
}


button.hide(true);


console.log(
    "Knowledge hint used:",
    task.task_id
);
};
gdjs.S09_95KnowledgeEncounterCode.userFunc0x16f4348 = function GDJSInlineCode(runtimeScene) {
"use strict";
// =========================================================
// MorYa Demo0.1
// S09_KnowledgeEncounter
// NEXT KNOWLEDGE TASK
// Final task -> S10_HerbCard
// =========================================================

const gameData =
    globalThis.MorYaGameData;

const session =
    globalThis.MorYaCaseSession;


// =========================================================
// 1. VALIDATE
// =========================================================

if (
    !gameData ||
    !session
) {
    return;
}


// ต้องตอบข้อปัจจุบันก่อน
if (
    !session.current_knowledge_task_answered
) {
    return;
}


const currentCase =
    gameData.indexes
        ?.case_by_id
        ?.[session.case_id];


if (!currentCase) {
    return;
}


const tasks =
    currentCase.knowledge_tasks
    || [];


// =========================================================
// 2. BUTTON
// =========================================================

const objects =
    runtimeScene.getObjects(
        "Btn_KnowledgeNext"
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


// =========================================================
// 3. ยังมี Task ถัดไป
// =========================================================

if (
    session.knowledge_task_index <
    tasks.length - 1
) {

    session.knowledge_task_index += 1;


    session.current_knowledge_task_answered =
        false;


    session.current_knowledge_task_result =
        "";


    session.current_knowledge_hint_used =
        false;


    session.current_knowledge_selected_option =
        "";


    session.current_knowledge_feedback =
        "";


    if (
        typeof globalThis
            .MorYaRenderKnowledgeTask ===
        "function"
    ) {

        globalThis
            .MorYaRenderKnowledgeTask(
                runtimeScene
            );
    }


    console.log(
        "Go to next knowledge task:",
        {
            taskIndex:
                session.knowledge_task_index,

            totalTasks:
                tasks.length
        }
    );


    return;
}


// =========================================================
// 4. FINAL TASK COMPLETED
//    -> HERB CARD
// =========================================================

session.knowledge_tasks_completed =
    true;


console.log(
    "All knowledge tasks completed:",
    {
        caseId:
            session.case_id,

        results:
            session.knowledge_task_results,

        hintsUsed:
            session.hints_used
    }
);


// ไป Herb Card ทันที
gdjs.evtTools.runtimeScene
    .replaceScene(
        runtimeScene,
        "S10_HerbCard",
        false
    );
};
gdjs.S09_95KnowledgeEncounterCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S09_95KnowledgeEncounterCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S09_95KnowledgeEncounterCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.S09_95KnowledgeEncounterCode.userFunc0x28b3e30(runtimeScene);

}


{


gdjs.S09_95KnowledgeEncounterCode.userFunc0x1d18d78(runtimeScene);

}


{


gdjs.S09_95KnowledgeEncounterCode.userFunc0x2241390(runtimeScene);

}


{


gdjs.S09_95KnowledgeEncounterCode.userFunc0x16f4348(runtimeScene);

}


};

gdjs.S09_95KnowledgeEncounterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects3.length = 0;

gdjs.S09_95KnowledgeEncounterCode.eventsList2(runtimeScene);
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeTitleObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStoryObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeStatusObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeBackObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeProgressObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgePromptObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDTxt_9595KnowledgeFeedbackObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice1Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice2Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice3Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeChoice4Objects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeNextObjects3.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects1.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects2.length = 0;
gdjs.S09_95KnowledgeEncounterCode.GDBtn_9595KnowledgeHintObjects3.length = 0;


return;

}

gdjs['S09_95KnowledgeEncounterCode'] = gdjs.S09_95KnowledgeEncounterCode;
