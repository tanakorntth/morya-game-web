gdjs.S07_95ReflectionCode = {};
gdjs.S07_95ReflectionCode.localVariables = [];
gdjs.S07_95ReflectionCode.idToCallbackMap = new Map();
gdjs.S07_95ReflectionCode.GDBG_9595S07_9595ReflectionObjects1= [];
gdjs.S07_95ReflectionCode.GDBG_9595S07_9595ReflectionObjects2= [];
gdjs.S07_95ReflectionCode.GDPanel_9595S07_9595NotebookObjects1= [];
gdjs.S07_95ReflectionCode.GDPanel_9595S07_9595NotebookObjects2= [];
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959501Objects1= [];
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959501Objects2= [];
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959502Objects1= [];
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959502Objects2= [];
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959503Objects1= [];
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959503Objects2= [];
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959501Objects1= [];
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959501Objects2= [];
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959502Objects1= [];
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959502Objects2= [];
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959503Objects1= [];
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959503Objects2= [];
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595TitleObjects1= [];
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595TitleObjects2= [];
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595InstructionObjects1= [];
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595InstructionObjects2= [];
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595SummaryObjects1= [];
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595SummaryObjects2= [];
gdjs.S07_95ReflectionCode.GDBtn_9595S07_9595ContinueObjects1= [];
gdjs.S07_95ReflectionCode.GDBtn_9595S07_9595ContinueObjects2= [];


gdjs.S07_95ReflectionCode.userFunc0x2241390 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S07_95ReflectionCode.eventsList0 = function(runtimeScene) {

{


gdjs.S07_95ReflectionCode.userFunc0x2241390(runtimeScene);

}


};gdjs.S07_95ReflectionCode.userFunc0x1bebde8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S07 - REFLECTION INITIALIZER
//
// Reflection is completion/engagement based.
// There is no "wrong" reflection choice.
//
// LEARNING_REFLECTION = 5 points
// ======================================================

try {

    // ==================================================
    // ONE-TIME GUARD
    // ==================================================

    if (
        runtimeScene.__morYaS07Initialized === true
    ) {
        return;
    }


    const session =
        globalThis.MorYaCaseSession;


    if (!session) {

        console.error(
            "S07 INIT: MorYaCaseSession not found"
        );

        return;
    }


    // ==================================================
    // HELPERS
    // ==================================================

    const getObj =
        (name) => {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    const setTextSafe =
        (name, value) => {

            const obj =
                getObj(name);

            if (
                obj &&
                typeof obj.setText === "function"
            ) {

                obj.setText(
                    String(value)
                );
            }
        };


    const hideObject =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(hidden);
                });
        };


    const setOpacitySafe =
        (name, opacity) => {

            const obj =
                getObj(name);

            if (
                obj &&
                typeof obj.setOpacity === "function"
            ) {

                obj.setOpacity(
                    opacity
                );
            }
        };


    // ==================================================
    // REFLECTION CONFIG
    // ==================================================

    const REFLECTIONS = {

        REFLECTION_01: {

            cardObject:
                "Card_Reflection_01",

            textObject:
                "Txt_Reflection_01",

            text:
                "ก่อนแนะนำสมุนไพร\nควรคัดกรองสัญญาณอันตรายก่อน"
        },


        REFLECTION_02: {

            cardObject:
                "Card_Reflection_02",

            textObject:
                "Txt_Reflection_02",

            text:
                "การเลือกสมุนไพรต้องดูทั้งชนิด\nส่วนที่ใช้ และวิธีนำไปใช้"
        },


        REFLECTION_03: {

            cardObject:
                "Card_Reflection_03",

            textObject:
                "Txt_Reflection_03",

            text:
                "แม้ดูแลตนเองได้\nก็ควรสังเกตอาการและรู้ว่าเมื่อไรควรไปพบเจ้าหน้าที่"
        }
    };


    // ==================================================
    // STATE
    // ==================================================

    globalThis.MorYaS07State = {

        active:
            true,

        selectedReflectionId:
            "",

        reflections:
            REFLECTIONS,

        inputLockedUntil:
            Date.now() + 250
    };


    // ==================================================
    // UI
    // ==================================================

    setTextSafe(
        "Txt_S07_Title",
        "บันทึกบทเรียนจากเคส"
    );


    setTextSafe(
        "Txt_S07_Instruction",
        "เลือก 1 ข้อที่คุณอยากจดจำจากการดูแลยายสายในครั้งนี้"
    );


    setTextSafe(
        "Txt_S07_Summary",
        ""
    );


    // ==================================================
    // CARD TEXT
    // ==================================================

    Object.keys(
        REFLECTIONS
    ).forEach(id => {

        const config =
            REFLECTIONS[id];


        setTextSafe(
            config.textObject,
            config.text
        );


        // ทุกใบเริ่มต้นเหมือนกัน
        setOpacitySafe(
            config.cardObject,
            255
        );


        setOpacitySafe(
            config.textObject,
            255
        );
    });


    // ยังไม่เลือก -> ยังไปต่อไม่ได้
    hideObject(
        "Btn_S07_Continue",
        true
    );


    // ==================================================
    // SESSION
    // ==================================================

    session.reflection_started =
        true;


    runtimeScene.__morYaS07Initialized =
        true;


    console.log(
        "S07 REFLECTION READY"
    );


} catch (error) {

    runtimeScene.__morYaS07Initialized =
        false;


    console.error(
        "S07 Reflection Initializer Error:",
        error
    );
}
};
gdjs.S07_95ReflectionCode.eventsList1 = function(runtimeScene) {

{


gdjs.S07_95ReflectionCode.userFunc0x1bebde8(runtimeScene);

}


};gdjs.S07_95ReflectionCode.userFunc0x139def8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S07 - REFLECTION INPUT ROUTER
//
// Click one reflection card
// → highlight selection
// → show notebook summary
// → unlock Continue
//
// Continue
// → save LEARNING_REFLECTION 5/5
// → go to S08_Result
// ======================================================

try {

    const state =
        globalThis.MorYaS07State;

    const session =
        globalThis.MorYaCaseSession;


    // ==================================================
    // GUARD
    // ==================================================

    if (
        !state ||
        !session
    ) {
        return;
    }


    if (
        state.active !== true
    ) {
        return;
    }


    if (
        Date.now() <
        (state.inputLockedUntil || 0)
    ) {
        return;
    }


    // ==================================================
    // HELPERS
    // ==================================================

    const getObj =
        (name) => {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    const setTextSafe =
        (name, value) => {

            const obj =
                getObj(name);

            if (
                obj &&
                typeof obj.setText === "function"
            ) {

                obj.setText(
                    String(value)
                );
            }
        };


    const setHidden =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(hidden);
                });
        };


    const setOpacitySafe =
        (name, opacity) => {

            const obj =
                getObj(name);

            if (
                obj &&
                typeof obj.setOpacity === "function"
            ) {

                obj.setOpacity(
                    opacity
                );
            }
        };


    const getBounds =
        (obj) => {

            const x =
                typeof obj.getDrawableX === "function"
                    ? obj.getDrawableX()
                    : obj.getX();


            const y =
                typeof obj.getDrawableY === "function"
                    ? obj.getDrawableY()
                    : obj.getY();


            return {

                left:
                    x,

                top:
                    y,

                right:
                    x +
                    obj.getWidth(),

                bottom:
                    y +
                    obj.getHeight()
            };
        };


    const pointInside =
        (
            x,
            y,
            bounds,
            padding = 0
        ) => {

            return (

                x >= bounds.left - padding &&
                x <= bounds.right + padding &&

                y >= bounds.top - padding &&
                y <= bounds.bottom + padding
            );
        };


    // ==================================================
    // CARD LAYER POINTER
    // ==================================================

    const cardMouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "CARD",
            0
        );


    const cardMouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "CARD",
            0
        );


    // ==================================================
    // CARD SELECTION
    // ==================================================

    for (
        const reflectionId of
        Object.keys(
            state.reflections
        )
    ) {

        const config =
            state.reflections[
                reflectionId
            ];


        const card =
            getObj(
                config.cardObject
            );


        if (!card) {
            continue;
        }


        const clicked =
            pointInside(
                cardMouseX,
                cardMouseY,
                getBounds(card),
                8
            );


        if (
            clicked !== true
        ) {
            continue;
        }


        // ==================================================
        // SAVE CURRENT SELECTION
        // ==================================================

        state.selectedReflectionId =
            reflectionId;


        session.reflection_selected_id =
            reflectionId;


        session.reflection_selected_text =
            config.text;


        // ==================================================
        // VISUAL FEEDBACK
        //
        // Selected = full opacity
        // Other cards = slightly faded
        // ==================================================

        Object.keys(
            state.reflections
        ).forEach(id => {

            const other =
                state.reflections[id];


            const selected =
                id === reflectionId;


            setOpacitySafe(
                other.cardObject,
                selected
                    ? 255
                    : 150
            );


            setOpacitySafe(
                other.textObject,
                selected
                    ? 255
                    : 150
            );
        });


        // ==================================================
        // NOTEBOOK SUMMARY
        // ==================================================

        const summaryText =
            config.text.replace(
                /\n/g,
                " "
            );


        setTextSafe(
            "Txt_S07_Summary",
            "บันทึกแล้ว: " +
            summaryText
        );


        setTextSafe(
            "Txt_S07_Instruction",
            "คุณสามารถเลือกข้ออื่นได้ก่อนดำเนินการต่อ"
        );


        // ==================================================
        // UNLOCK CONTINUE
        // ==================================================

        setHidden(
            "Btn_S07_Continue",
            false
        );


        state.inputLockedUntil =
            Date.now() + 180;


        console.log(
            "S07 REFLECTION SELECTED:",
            reflectionId
        );


        return;
    }


    // ==================================================
    // CONTINUE
    // ==================================================

    if (
        state.selectedReflectionId === ""
    ) {
        return;
    }


    const continueButton =
        getObj(
            "Btn_S07_Continue"
        );


    if (!continueButton) {
        return;
    }


    const uiMouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "UI",
            0
        );


    const uiMouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "UI",
            0
        );


    const clickedContinue =
        pointInside(
            uiMouseX,
            uiMouseY,
            getBounds(
                continueButton
            ),
            10
        );


    if (
        clickedContinue !== true
    ) {
        return;
    }


    // ==================================================
    // REFLECTION COMPLETED
    //
    // คะแนนเกิดจากการ reflection สำเร็จ
    // ไม่ใช่การเลือก "คำตอบที่ถูก"
    // ==================================================

    session.learning_reflection_score =
        5;


    session.learning_reflection_max =
        5;


    session.reflection_completed =
        true;


    session.s07_completed =
        true;


    session.next_intervention_phase =
        "RESULT";


    state.active =
        false;


    console.log(
        "S07 REFLECTION COMPLETE:",
        {
            reflection:
                session.reflection_selected_id,

            score:
                session.learning_reflection_score
        }
    );


    // ==================================================
    // GO TO RESULT
    // ==================================================

    gdjs.evtTools.runtimeScene.replaceScene(
        runtimeScene,
        "S08_Result",
        false
    );


} catch (error) {

    console.error(
        "S07 Reflection Router Error:",
        error
    );
}
};
gdjs.S07_95ReflectionCode.eventsList2 = function(runtimeScene) {

{


gdjs.S07_95ReflectionCode.userFunc0x139def8(runtimeScene);

}


};gdjs.S07_95ReflectionCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S07_95ReflectionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S07_95ReflectionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S07_95ReflectionCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.S07_95ReflectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S07_95ReflectionCode.GDBG_9595S07_9595ReflectionObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDBG_9595S07_9595ReflectionObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDPanel_9595S07_9595NotebookObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDPanel_9595S07_9595NotebookObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959501Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959501Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959502Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959502Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959503Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959503Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959501Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959501Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959502Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959502Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959503Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959503Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595TitleObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595TitleObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595InstructionObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595InstructionObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595SummaryObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595SummaryObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDBtn_9595S07_9595ContinueObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDBtn_9595S07_9595ContinueObjects2.length = 0;

gdjs.S07_95ReflectionCode.eventsList3(runtimeScene);
gdjs.S07_95ReflectionCode.GDBG_9595S07_9595ReflectionObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDBG_9595S07_9595ReflectionObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDPanel_9595S07_9595NotebookObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDPanel_9595S07_9595NotebookObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959501Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959501Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959502Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959502Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959503Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDCard_9595Reflection_959503Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959501Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959501Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959502Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959502Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959503Objects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595Reflection_959503Objects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595TitleObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595TitleObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595InstructionObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595InstructionObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595SummaryObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDTxt_9595S07_9595SummaryObjects2.length = 0;
gdjs.S07_95ReflectionCode.GDBtn_9595S07_9595ContinueObjects1.length = 0;
gdjs.S07_95ReflectionCode.GDBtn_9595S07_9595ContinueObjects2.length = 0;


return;

}

gdjs['S07_95ReflectionCode'] = gdjs.S07_95ReflectionCode;
