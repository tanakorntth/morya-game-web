gdjs.S04_95DispositionCode = {};
gdjs.S04_95DispositionCode.localVariables = [];
gdjs.S04_95DispositionCode.idToCallbackMap = new Map();
gdjs.S04_95DispositionCode.GDBG_9595DispositionDeskObjects1= [];
gdjs.S04_95DispositionCode.GDBG_9595DispositionDeskObjects2= [];
gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects1= [];
gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects2= [];
gdjs.S04_95DispositionCode.GDSmallLightGreyButtonObjects1= [];
gdjs.S04_95DispositionCode.GDSmallLightGreyButtonObjects2= [];
gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects1= [];
gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects2= [];
gdjs.S04_95DispositionCode.GDZone_9595SelfCareObjects1= [];
gdjs.S04_95DispositionCode.GDZone_9595SelfCareObjects2= [];
gdjs.S04_95DispositionCode.GDZone_9595ConsultObjects1= [];
gdjs.S04_95DispositionCode.GDZone_9595ConsultObjects2= [];
gdjs.S04_95DispositionCode.GDZone_9595UrgentObjects1= [];
gdjs.S04_95DispositionCode.GDZone_9595UrgentObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595SelfCareObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595SelfCareObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ConsultObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ConsultObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595UrgentObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595UrgentObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595DispositionInstructionObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595DispositionInstructionObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595CaseFileTitleObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595CaseFileTitleObjects2= [];
gdjs.S04_95DispositionCode.GDPanel_9595DispositionConfirmObjects1= [];
gdjs.S04_95DispositionCode.GDPanel_9595DispositionConfirmObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmTitleObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmTitleObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmBodyObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmBodyObjects2= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects1= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects2= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionChangeObjects1= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionChangeObjects2= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionReviewObjects1= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionReviewObjects2= [];
gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects1= [];
gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects2= [];
gdjs.S04_95DispositionCode.GDPanel_9595ClueBookObjects1= [];
gdjs.S04_95DispositionCode.GDPanel_9595ClueBookObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueBookTitleObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueBookTitleObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralHeaderObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralHeaderObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralBodyObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralBodyObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyHeaderObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyHeaderObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyBodyObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyBodyObjects2= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueProgressObjects1= [];
gdjs.S04_95DispositionCode.GDTxt_9595ClueProgressObjects2= [];
gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects1= [];
gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects2= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects1= [];
gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects2= [];


gdjs.S04_95DispositionCode.userFunc0xa23038 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S04_95DispositionCode.eventsList0 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0xa23038(runtimeScene);

}


};gdjs.S04_95DispositionCode.userFunc0x1278678 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04 - MINIMAL STABLE INITIALIZER
// ======================================================

try {

    const getObj = (name) => {
        const objects = runtimeScene.getObjects(name);
        return objects.length > 0
            ? objects[0]
            : null;
    };

    // Helper สำหรับ Drag เดิม
    globalThis.MorYaS04GetObj =
        function(runtimeScene, name) {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    // ==================================================
    // HIDE MODAL
    // ==================================================

    [
        "Panel_DispositionConfirm",
        "Txt_DispositionConfirmTitle",
        "Txt_DispositionConfirmBody",
        "Btn_DispositionConfirm",
        "Btn_DispositionChange",
        "Btn_DispositionReview",
        "Btn_DispositionContinue"
    ].forEach(name => {

        runtimeScene
            .getObjects(name)
            .forEach(obj => {
                obj.hide(true);
            });
    });


    // ==================================================
    // HIDE CLUE BOOK
    // ==================================================

    [
        "Panel_ClueBook",
        "Txt_ClueBookTitle",
        "Txt_ClueGeneralHeader",
        "Txt_ClueGeneralBody",
        "Txt_ClueSafetyHeader",
        "Txt_ClueSafetyBody",
        "Txt_ClueProgress",
        "Btn_ClueBookClose"
    ].forEach(name => {

        runtimeScene
            .getObjects(name)
            .forEach(obj => {
                obj.hide(true);
            });
    });


    // ==================================================
    // STATE
    // ==================================================

    const card =
        getObj("Card_CaseFile");

    globalThis.MorYaS04State = {

        dragging: false,

        pointerOffsetX: 0,
        pointerOffsetY: 0,

        hoveredZoneName: "",
        pendingZoneName: "",

        modalOpen: false,
        modalInputLockedUntil: 0,

        clueBookOpen: false,
        clueBookReturnMode: "DESK",
        clueBookInputLockedUntil: 0,

        cardStartX:
            card ? card.getX() : 0,

        cardStartY:
            card ? card.getY() : 0,

        zoneMeta: {

            Zone_SelfCare: {
                key:
                    "SELF_CARE_MONITOR",
                title:
                    "ดูแลตนเองและเฝ้าสังเกต"
            },

            Zone_Consult: {
                key:
                    "CONSULT_HEALTH_PROFESSIONAL",
                title:
                    "ขอคำแนะนำจากบุคลากรสุขภาพ"
            },

            Zone_Urgent: {
                key:
                    "REFER_URGENT",
                title:
                    "ส่งต่อเพื่อประเมินเร่งด่วน"
            }
        }
    };


    console.log(
        "S04 MINIMAL INIT PASS"
    );

} catch (error) {

    console.error(
        "S04 INIT ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList1 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0x1278678(runtimeScene);

}


};gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDCard_95959595CaseFileObjects1Objects = Hashtable.newFrom({"Card_CaseFile": gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects1});
gdjs.S04_95DispositionCode.userFunc0xbb6e58 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S04 - START DRAG
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    if (!state) {
        return;
    }

    if (
        state.modalOpen === true
    ) {
        return;
    }

    if (
        state.dragging === true
    ) {
        return;
    }


    const card =
        globalThis.MorYaS04GetObj(
            runtimeScene,
            "Card_CaseFile"
        );

    if (!card) {
        return;
    }


    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "UI",
            0
        );

    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "UI",
            0
        );


    state.pointerOffsetX =
        mouseX -
        card.getX();

    state.pointerOffsetY =
        mouseY -
        card.getY();


    state.dragging =
        true;

    state.hoveredZoneName =
        "";

    state.pendingZoneName =
        "";


    console.log(
        "S04 DRAG START"
    );

} catch (error) {

    console.error(
        "S04 START DRAG ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList2 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0xbb6e58(runtimeScene);

}


};gdjs.S04_95DispositionCode.userFunc0x135c8e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S04 - DRAG UPDATE
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    if (
        !state ||
        state.dragging !== true
    ) {
        return;
    }


    const card =
        globalThis.MorYaS04GetObj(
            runtimeScene,
            "Card_CaseFile"
        );

    if (!card) {
        return;
    }


    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "UI",
            0
        );

    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "UI",
            0
        );


    // ==================================================
    // MOVE CARD
    // ==================================================

    card.setPosition(

        mouseX -
        state.pointerOffsetX,

        mouseY -
        state.pointerOffsetY
    );


    // ==================================================
    // CARD CENTER
    // ==================================================

    const cardCenterX =
        card.getX() +
        card.getWidth() / 2;

    const cardCenterY =
        card.getY() +
        card.getHeight() / 2;


    // ==================================================
    // DETECT ZONE
    // ==================================================

    const zoneNames = [
        "Zone_SelfCare",
        "Zone_Consult",
        "Zone_Urgent"
    ];

    let detectedZone =
        "";


    for (
        const zoneName
        of zoneNames
    ) {

        const zone =
            globalThis.MorYaS04GetObj(
                runtimeScene,
                zoneName
            );

        if (!zone) {
            continue;
        }


        const left =
            zone.getX();

        const top =
            zone.getY();

        const right =
            left +
            zone.getWidth();

        const bottom =
            top +
            zone.getHeight();


        const inside =
            cardCenterX >= left &&
            cardCenterX <= right &&
            cardCenterY >= top &&
            cardCenterY <= bottom;


        if (inside) {

            detectedZone =
                zoneName;

            break;
        }
    }


    // ==================================================
    // SAVE HOVER
    // ==================================================

    if (
        state.hoveredZoneName !==
        detectedZone
    ) {

        state.hoveredZoneName =
            detectedZone;

        console.log(
            "S04 HOVER:",
            detectedZone ||
            "NONE"
        );
    }


} catch (error) {

    console.error(
        "S04 DRAG UPDATE ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.userFunc0x1368998 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S04 - DROP + OPEN CONFIRM DIRECTLY
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;

    if (
        !state ||
        state.dragging !== true
    ) {
        return;
    }


    state.dragging = false;

    const targetZone =
        state.hoveredZoneName || "";


    // ==================================================
    // DROP OUTSIDE ZONE
    // ==================================================

    if (!targetZone) {

        const cardObjects =
            runtimeScene.getObjects(
                "Card_CaseFile"
            );

        if (cardObjects.length > 0) {

            cardObjects[0].setPosition(
                state.cardStartX,
                state.cardStartY
            );
        }

        state.pendingZoneName = "";
        state.hoveredZoneName = "";

        return;
    }


    const getObj = (name) => {

        const objects =
            runtimeScene.getObjects(name);

        return objects.length > 0
            ? objects[0]
            : null;
    };


    const card =
        getObj("Card_CaseFile");

    const zone =
        getObj(targetZone);

    const selected =
        state.zoneMeta[
            targetZone
        ];


    if (
        !card ||
        !zone ||
        !selected
    ) {

        console.error(
            "S04 DROP INVALID:",
            targetZone
        );

        return;
    }


    // ==================================================
    // SNAP
    // ==================================================

    const snapX =
        zone.getX() +
        (
            zone.getWidth() -
            card.getWidth()
        ) / 2;

    const snapY =
        zone.getY() +
        (
            zone.getHeight() -
            card.getHeight()
        ) / 2;


    card.setPosition(
        snapX,
        snapY
    );


    // ==================================================
    // PENDING CHOICE
    // ==================================================

    state.pendingZoneName =
        targetZone;

    state.modalOpen =
        true;

    state.modalInputLockedUntil =
        Date.now() + 300;


    if (session) {

        session.pending_disposition_choice =
            selected.key;

        session.selected_disposition_confirmed =
            false;
    }


    // ==================================================
    // COUNT INFORMATION
    // ==================================================

    const cueIds = [
        "CUE_GI_001",
        "CUE_GI_002",
        "CUE_GI_003",
        "CUE_GI_009",
        "CUE_GI_006",
        "CUE_GI_007",
        "CUE_GI_008"
    ];


    const asked =
        Array.isArray(
            session?.asked_cue_ids
        )
            ? session.asked_cue_ids
            : [];


    const foundCount =
        cueIds.filter(
            id =>
                asked.includes(id)
        ).length;


    // ==================================================
    // SHOW MODAL DIRECTLY
    // ==================================================

    [
        "Panel_DispositionConfirm",
        "Txt_DispositionConfirmTitle",
        "Txt_DispositionConfirmBody",
        "Btn_DispositionConfirm",
        "Btn_DispositionChange",
        "Btn_DispositionReview"
    ].forEach(name => {

        runtimeScene
            .getObjects(name)
            .forEach(obj => {
                obj.hide(false);
            });
    });


    runtimeScene
        .getObjects(
            "Btn_DispositionContinue"
        )
        .forEach(obj => {
            obj.hide(true);
        });


    const title =
        getObj(
            "Txt_DispositionConfirmTitle"
        );

    const body =
        getObj(
            "Txt_DispositionConfirmBody"
        );

    const confirm =
        getObj(
            "Btn_DispositionConfirm"
        );

    const change =
        getObj(
            "Btn_DispositionChange"
        );

    const review =
        getObj(
            "Btn_DispositionReview"
        );


    if (title) {

        title.setText(
            "แนวทางที่เลือก"
        );
    }


    if (body) {

        body.setText(
            selected.title +
            "\n\n" +
            "ข้อมูลที่รวบรวม " +
            foundCount +
            "/7 ประเด็น\n\n" +
            "ต้องการยืนยันแนวทางนี้หรือไม่?"
        );
    }


    if (confirm) {

        confirm.setText(
            "[ ยืนยันแนวทางนี้ ]"
        );

        confirm.hide(false);
    }


    if (change) {

        change.setText(
            "[ เปลี่ยนการตัดสินใจ ]"
        );

        change.hide(false);
    }


    if (review) {

        review.setText(
            "[ เปิดสมุดเคส ]"
        );

        review.hide(false);
    }


    console.log(
        "S04 DROP + MODAL:",
        targetZone
    );


} catch (error) {

    console.error(
        "S04 DROP ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.userFunc0x9cf2a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04 - MODAL INPUT ROUTER
// STABLE DIRECT VERSION
//
// Handles:
// 1. เปิดสมุดเคส
// 2. เปลี่ยนการตัดสินใจ
// 3. ยืนยัน disposition
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;

    const gameData =
        globalThis.MorYaGameData;


    // ==================================================
    // BASIC GUARD
    // ==================================================

    if (
        !state ||
        !session
    ) {
        return;
    }


    // Confirmation Modal ต้องกำลังเปิดอยู่
    if (
        state.modalOpen !== true
    ) {
        return;
    }


    // ถ้าสมุดเปิดอยู่
    // Modal ด้านหลังห้ามรับ input
    if (
        state.clueBookOpen === true
    ) {
        return;
    }


    // ป้องกัน mouse release จากตอน Drop แฟ้ม
    // ไปกดปุ่ม Modal ต่อใน release เดียวกัน
    if (
        Date.now() <
        (state.modalInputLockedUntil || 0)
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


    const inside =
        (x, y, obj) => {

            if (!obj) {
                return false;
            }

            return (
                x >= obj.getX() &&
                x <=
                    obj.getX() +
                    obj.getWidth() &&

                y >= obj.getY() &&
                y <=
                    obj.getY() +
                    obj.getHeight()
            );
        };


    // ==================================================
    // POINTER POSITION
    // ปุ่มทั้งหมดอยู่ Layer MODAL
    // ==================================================

    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "MODAL",
            0
        );


    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "MODAL",
            0
        );


    // ==================================================
    // MODAL BUTTONS
    // ==================================================

    const btnConfirm =
        getObj(
            "Btn_DispositionConfirm"
        );


    const btnChange =
        getObj(
            "Btn_DispositionChange"
        );


    const btnReview =
        getObj(
            "Btn_DispositionReview"
        );


    // ==================================================
    // 1. OPEN CLUE BOOK
    // ==================================================

    if (
        inside(
            mouseX,
            mouseY,
            btnReview
        )
    ) {

        // --------------------------------------------------
        // ตรวจ Book Objects ก่อน
        // ห้ามซ่อน Modal ก่อนแน่ใจว่าสมุดเปิดได้
        // --------------------------------------------------

        const bookObjectNames = [

            "Panel_ClueBook",

            "Txt_ClueBookTitle",

            "Txt_ClueGeneralHeader",
            "Txt_ClueGeneralBody",

            "Txt_ClueSafetyHeader",
            "Txt_ClueSafetyBody",

            "Txt_ClueProgress",

            "Btn_ClueBookClose"
        ];


        const missingBookObjects =
            bookObjectNames.filter(
                name =>
                    runtimeScene
                        .getObjects(name)
                        .length === 0
            );


        if (
            missingBookObjects.length > 0
        ) {

            console.error(
                "S04 BOOK OBJECT MISSING:",
                missingBookObjects
            );

            const body =
                getObj(
                    "Txt_DispositionConfirmBody"
                );

            if (body) {

                body.setText(
                    "ไม่สามารถเปิดสมุดเคสได้\n\n" +
                    "ไม่พบ Object:\n" +
                    missingBookObjects.join("\n")
                );
            }

            return;
        }


        if (!gameData) {

            console.error(
                "S04 BOOK: MorYaGameData unavailable"
            );

            return;
        }


        // --------------------------------------------------
        // CASE DATA
        // --------------------------------------------------

        const asked =
            Array.isArray(
                session.asked_cue_ids
            )
                ? session.asked_cue_ids
                : [];


        const responses =
            gameData.indexes
                ?.case_cue_responses_by_case
                ?.[session.case_id]
            || [];


        const getResponse =
            (cueId) => {

                return responses.find(
                    item =>
                        item.cue_id === cueId
                );
            };


        // --------------------------------------------------
        // GENERAL INFORMATION
        // --------------------------------------------------

        const generalItems = [

            {
                cueId:
                    "CUE_GI_001",

                label:
                    "เวลาเริ่มอาการ"
            },

            {
                cueId:
                    "CUE_GI_002",

                label:
                    "ความสัมพันธ์กับอาหาร"
            },

            {
                cueId:
                    "CUE_GI_003",

                label:
                    "ความรุนแรงและผลต่อกิจวัตร"
            },

            {
                cueId:
                    "CUE_GI_009",

                label:
                    "ประวัติการใช้ยา"
            }
        ];


        // --------------------------------------------------
        // SAFETY INFORMATION
        // --------------------------------------------------

        const safetyItems = [

            {
                cueId:
                    "CUE_GI_006",

                label:
                    "อาเจียนเป็นเลือดหรือถ่ายดำ"
            },

            {
                cueId:
                    "CUE_GI_007",

                label:
                    "การกินและการกลืน"
            },

            {
                cueId:
                    "CUE_GI_008",

                label:
                    "น้ำหนักลดโดยไม่ตั้งใจ"
            }
        ];


        // --------------------------------------------------
        // BUILD BOOK TEXT
        // --------------------------------------------------

        const buildSection =
            (items) => {

                const lines = [];


                items.forEach(item => {

                    if (
                        !asked.includes(
                            item.cueId
                        )
                    ) {

                        lines.push(

                            "○ " +
                            item.label +
                            "\n   ยังไม่ได้สอบถาม"

                        );

                        return;
                    }


                    const response =
                        getResponse(
                            item.cueId
                        );


                    const answer =
                        response
                            ?.answer_text_th
                        ||
                        "มีการบันทึกข้อมูลแล้ว";


                    lines.push(

                        "✓ " +
                        item.label +
                        "\n   " +
                        answer

                    );
                });


                return lines.join(
                    "\n\n"
                );
            };


        const generalText =
            buildSection(
                generalItems
            );


        const safetyText =
            buildSection(
                safetyItems
            );


        // --------------------------------------------------
        // PROGRESS
        // --------------------------------------------------

        const allCueIds = [

            "CUE_GI_001",
            "CUE_GI_002",
            "CUE_GI_003",
            "CUE_GI_009",

            "CUE_GI_006",
            "CUE_GI_007",
            "CUE_GI_008"
        ];


        const foundCount =
            allCueIds.filter(
                cueId =>
                    asked.includes(
                        cueId
                    )
            ).length;


        // --------------------------------------------------
        // GET BOOK OBJECTS
        // --------------------------------------------------

        const bookTitle =
            getObj(
                "Txt_ClueBookTitle"
            );


        const generalHeader =
            getObj(
                "Txt_ClueGeneralHeader"
            );


        const generalBody =
            getObj(
                "Txt_ClueGeneralBody"
            );


        const safetyHeader =
            getObj(
                "Txt_ClueSafetyHeader"
            );


        const safetyBody =
            getObj(
                "Txt_ClueSafetyBody"
            );


        const progress =
            getObj(
                "Txt_ClueProgress"
            );


        const bookClose =
            getObj(
                "Btn_ClueBookClose"
            );


        // --------------------------------------------------
        // FILL BOOK
        // --------------------------------------------------

        if (bookTitle) {

            bookTitle.setText(
                "สมุดเคส : ยายสาย"
            );
        }


        if (generalHeader) {

            generalHeader.setText(
                "ข้อมูลที่รวบรวม"
            );
        }


        if (generalBody) {

            generalBody.setText(
                generalText
            );
        }


        if (safetyHeader) {

            safetyHeader.setText(
                "ข้อมูลด้านความปลอดภัย"
            );
        }


        if (safetyBody) {

            safetyBody.setText(
                safetyText
            );
        }


        if (progress) {

            progress.setText(
                "พบข้อมูล " +
                foundCount +
                "/7 ประเด็น"
            );
        }


        if (bookClose) {

            bookClose.setText(
                "[ กลับไปยังโต๊ะตัดสินใจ ]"
            );
        }


        // --------------------------------------------------
        // IMPORTANT:
        // จำไว้ว่าสมุดถูกเปิดจาก Confirmation
        //
        // modalOpen ต้องยังเป็น true
        // เพราะเมื่อปิดสมุดต้องกลับ Modal เดิม
        // --------------------------------------------------

        state.clueBookReturnMode =
            "CONFIRM";


        // --------------------------------------------------
        // SHOW BOOK FIRST
        // --------------------------------------------------

        bookObjectNames.forEach(name => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(false);
                });
        });


        // --------------------------------------------------
        // THEN HIDE CONFIRM VISUALLY
        //
        // ห้ามเปลี่ยน state.modalOpen เป็น false
        // --------------------------------------------------

        [

            "Panel_DispositionConfirm",

            "Txt_DispositionConfirmTitle",
            "Txt_DispositionConfirmBody",

            "Btn_DispositionConfirm",
            "Btn_DispositionChange",
            "Btn_DispositionReview",

            "Btn_DispositionContinue"

        ].forEach(name => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(true);
                });
        });


        // --------------------------------------------------
        // BOOK STATE
        // --------------------------------------------------

        state.clueBookOpen =
            true;


        state.clueBookInputLockedUntil =
            Date.now() + 250;


        console.log(
            "S04 BOOK OPEN FROM CONFIRM:",
            foundCount + "/7"
        );


        return;
    }


    // ==================================================
    // 2. CHANGE DECISION
    // ==================================================

    if (
        inside(
            mouseX,
            mouseY,
            btnChange
        )
    ) {

        // --------------------------------------------------
        // HIDE CONFIRM
        // --------------------------------------------------

        [

            "Panel_DispositionConfirm",

            "Txt_DispositionConfirmTitle",
            "Txt_DispositionConfirmBody",

            "Btn_DispositionConfirm",
            "Btn_DispositionChange",
            "Btn_DispositionReview",

            "Btn_DispositionContinue"

        ].forEach(name => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(true);
                });
        });


        // --------------------------------------------------
        // RETURN CASE FILE
        // --------------------------------------------------

        const card =
            getObj(
                "Card_CaseFile"
            );


        if (card) {

            card.setPosition(
                state.cardStartX,
                state.cardStartY
            );
        }


        // --------------------------------------------------
        // RESET STATE
        // --------------------------------------------------

        state.modalOpen =
            false;

        state.pendingZoneName =
            "";

        state.hoveredZoneName =
            "";

        state.dragging =
            false;


        session.pending_disposition_choice =
            "";

        session.selected_disposition_confirmed =
            false;


        console.log(
            "S04 CHANGE DECISION"
        );


        return;
    }


    // ==================================================
    // 3. CONFIRM DISPOSITION
    // ==================================================

    if (
        inside(
            mouseX,
            mouseY,
            btnConfirm
        )
    ) {

        // ถ้ายืนยันไปแล้ว
        // hidden BtnConfirm ห้ามทำงานซ้ำ
        if (
            session.selected_disposition_confirmed
            === true
        ) {
            return;
        }


        const zoneName =
            state.pendingZoneName;


        if (!zoneName) {

            console.error(
                "S04 CONFIRM: pendingZoneName empty"
            );

            return;
        }


        const selected =
            state.zoneMeta?.[
                zoneName
            ];


        if (!selected) {

            console.error(
                "S04 CONFIRM: invalid zone",
                zoneName
            );

            return;
        }


        // --------------------------------------------------
        // SAVE FINAL CHOICE
        // --------------------------------------------------

        session.disposition_choice =
            selected.key;


        session.selected_disposition_key =
            selected.key;


        session.selected_disposition_label_th =
            selected.title;


        session.selected_disposition_confirmed =
            true;


        session.pending_disposition_choice =
            "";


        // --------------------------------------------------
        // UPDATE CONFIRM PANEL
        // --------------------------------------------------

        const title =
            getObj(
                "Txt_DispositionConfirmTitle"
            );


        const body =
            getObj(
                "Txt_DispositionConfirmBody"
            );


        if (title) {

            title.setText(
                "บันทึกแนวทางการดูแลแล้ว"
            );
        }


        if (body) {

            body.setText(

                "คุณเลือก\n\n" +

                selected.title +

                "\n\n" +

                "การตัดสินใจนี้ถูกบันทึกไว้ในแฟ้มเคสแล้ว"

            );
        }


        // --------------------------------------------------
        // CONFIRM BUTTON OFF
        // --------------------------------------------------

        if (btnConfirm) {

            btnConfirm.hide(true);
        }


        // --------------------------------------------------
        // CHANGE REMAINS AVAILABLE
        // --------------------------------------------------

        if (btnChange) {

            btnChange.setText(
                "[ กลับไปจัดแฟ้มใหม่ ]"
            );

            btnChange.hide(false);
        }


        // --------------------------------------------------
        // BOOK REMAINS AVAILABLE
        // --------------------------------------------------

        if (btnReview) {

            btnReview.setText(
                "[ เปิดสมุดเคส ]"
            );

            btnReview.hide(false);
        }


        // --------------------------------------------------
// CONTINUE
// --------------------------------------------------

const btnContinue =
    getObj(
        "Btn_DispositionContinue"
    );


if (btnContinue) {

    btnContinue.setText(
        "[ ดำเนินการต่อ ]"
    );

    btnContinue.hide(false);
}
        // --------------------------------------------------
        // PREVENT DOUBLE INPUT
        // --------------------------------------------------

        state.modalInputLockedUntil =
            Date.now() + 250;


        console.log(
            "S04 DISPOSITION CONFIRMED:",
            selected.key
        );


        return;
    }


} catch (error) {

    console.error(
        "S04 MODAL INPUT ROUTER ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList3 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0x1368998(runtimeScene);

}


{


gdjs.S04_95DispositionCode.userFunc0x9cf2a0(runtimeScene);

}


};gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDPROP_95959595NOTEBOOKObjects1Objects = Hashtable.newFrom({"PROP_NOTEBOOK": gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects1});
gdjs.S04_95DispositionCode.userFunc0x123d0b0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S04 - OPEN CLUE BOOK DIRECTLY
// FROM NOTEBOOK ICON
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;

    const gameData =
        globalThis.MorYaGameData;


    if (!state) {
        return;
    }


    if (state.clueBookOpen === true) {
        return;
    }


    const getObj = (name) => {

        const objects =
            runtimeScene.getObjects(name);

        return objects.length > 0
            ? objects[0]
            : null;
    };


    // ==================================================
    // DATA
    // ==================================================

    const asked =
        Array.isArray(
            session?.asked_cue_ids
        )
            ? session.asked_cue_ids
            : [];


    const responses =
        gameData
            ?.indexes
            ?.case_cue_responses_by_case
            ?.[session?.case_id]
        || [];


    const getResponse =
        (cueId) => {

            return responses.find(
                item =>
                    item.cue_id === cueId
            );
        };


    const generalItems = [

        {
            cueId: "CUE_GI_001",
            label: "เวลาเริ่มอาการ"
        },

        {
            cueId: "CUE_GI_002",
            label: "ความสัมพันธ์กับอาหาร"
        },

        {
            cueId: "CUE_GI_003",
            label: "ความรุนแรงและผลต่อกิจวัตร"
        },

        {
            cueId: "CUE_GI_009",
            label: "ประวัติการใช้ยา"
        }
    ];


    const safetyItems = [

        {
            cueId: "CUE_GI_006",
            label:
                "อาเจียนเป็นเลือดหรือถ่ายดำ"
        },

        {
            cueId: "CUE_GI_007",
            label:
                "การกินและการกลืน"
        },

        {
            cueId: "CUE_GI_008",
            label:
                "น้ำหนักลดโดยไม่ตั้งใจ"
        }
    ];


    const buildSection =
        (items) => {

            return items
                .map(item => {

                    if (
                        !asked.includes(
                            item.cueId
                        )
                    ) {

                        return (
                            "○ " +
                            item.label +
                            "\n   ยังไม่ได้สอบถาม"
                        );
                    }


                    const response =
                        getResponse(
                            item.cueId
                        );


                    return (
                        "✓ " +
                        item.label +
                        "\n   " +
                        (
                            response
                                ?.answer_text_th
                            ||
                            "มีการบันทึกข้อมูลแล้ว"
                        )
                    );
                })
                .join("\n\n");
        };


    const allCueIds = [
        "CUE_GI_001",
        "CUE_GI_002",
        "CUE_GI_003",
        "CUE_GI_009",
        "CUE_GI_006",
        "CUE_GI_007",
        "CUE_GI_008"
    ];


    const foundCount =
        allCueIds.filter(
            id =>
                asked.includes(id)
        ).length;


    // ==================================================
    // RETURN MODE
    // ==================================================

    state.clueBookReturnMode =
        state.modalOpen === true
            ? "CONFIRM"
            : "DESK";


    // ==================================================
    // SET TEXT
    // ==================================================

    const title =
        getObj(
            "Txt_ClueBookTitle"
        );

    const generalHeader =
        getObj(
            "Txt_ClueGeneralHeader"
        );

    const generalBody =
        getObj(
            "Txt_ClueGeneralBody"
        );

    const safetyHeader =
        getObj(
            "Txt_ClueSafetyHeader"
        );

    const safetyBody =
        getObj(
            "Txt_ClueSafetyBody"
        );

    const progress =
        getObj(
            "Txt_ClueProgress"
        );

    const close =
        getObj(
            "Btn_ClueBookClose"
        );


    if (title) {
        title.setText(
            "สมุดเคส : ยายสาย"
        );
    }

    if (generalHeader) {
        generalHeader.setText(
            "ข้อมูลที่รวบรวม"
        );
    }

    if (generalBody) {
        generalBody.setText(
            buildSection(
                generalItems
            )
        );
    }

    if (safetyHeader) {
        safetyHeader.setText(
            "ข้อมูลด้านความปลอดภัย"
        );
    }

    if (safetyBody) {
        safetyBody.setText(
            buildSection(
                safetyItems
            )
        );
    }

    if (progress) {
        progress.setText(
            "พบข้อมูล " +
            foundCount +
            "/7 ประเด็น"
        );
    }

    if (close) {
        close.setText(
            "[ กลับไปยังโต๊ะตัดสินใจ ]"
        );
    }


    // ==================================================
    // SHOW BOOK
    // ==================================================

    [
        "Panel_ClueBook",
        "Txt_ClueBookTitle",
        "Txt_ClueGeneralHeader",
        "Txt_ClueGeneralBody",
        "Txt_ClueSafetyHeader",
        "Txt_ClueSafetyBody",
        "Txt_ClueProgress",
        "Btn_ClueBookClose"
    ].forEach(name => {

        runtimeScene
            .getObjects(name)
            .forEach(obj => {
                obj.hide(false);
            });
    });


    // ==================================================
    // HIDE CONFIRM IF NEEDED
    // ==================================================

    if (
        state.clueBookReturnMode ===
        "CONFIRM"
    ) {

        [
            "Panel_DispositionConfirm",
            "Txt_DispositionConfirmTitle",
            "Txt_DispositionConfirmBody",
            "Btn_DispositionConfirm",
            "Btn_DispositionChange",
            "Btn_DispositionReview",
            "Btn_DispositionContinue"
        ].forEach(name => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {
                    obj.hide(true);
                });
        });
    }


    state.clueBookOpen =
        true;

    state.clueBookInputLockedUntil =
        Date.now() + 250;


} catch (error) {

    console.error(
        "S04 NOTEBOOK ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList4 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0x123d0b0(runtimeScene);

}


};gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595ClueBookCloseObjects1Objects = Hashtable.newFrom({"Btn_ClueBookClose": gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects1});
gdjs.S04_95DispositionCode.userFunc0x1a67c70 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04 - CLOSE CLUE BOOK
// WORKING BASELINE VERSION
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;

    if (
        !state ||
        !session
    ) {
        return;
    }


    if (
        state.clueBookOpen !== true
    ) {
        return;
    }


    // ป้องกัน release เดียวกับที่ใช้เปิดสมุด
    if (
        Date.now() <
        (state.clueBookInputLockedUntil || 0)
    ) {
        return;
    }


    // ==================================================
    // HIDE BOOK
    // ==================================================

    [
        "Panel_ClueBook",
        "Txt_ClueBookTitle",
        "Txt_ClueGeneralHeader",
        "Txt_ClueGeneralBody",
        "Txt_ClueSafetyHeader",
        "Txt_ClueSafetyBody",
        "Txt_ClueProgress",
        "Btn_ClueBookClose"
    ].forEach(name => {

        runtimeScene
            .getObjects(name)
            .forEach(obj => {

                obj.hide(true);
            });
    });


    state.clueBookOpen =
        false;


    // ==================================================
    // RETURN TO CONFIRM MODAL
    // ==================================================

    if (
        state.clueBookReturnMode ===
            "CONFIRM" &&
        state.modalOpen === true
    ) {

        [
            "Panel_DispositionConfirm",
            "Txt_DispositionConfirmTitle",
            "Txt_DispositionConfirmBody",
            "Btn_DispositionChange",
            "Btn_DispositionReview"
        ].forEach(name => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(false);
                });
        });


        // ------------------------------------------------
        // CONFIRM BUTTON
        // ------------------------------------------------

        if (
            session
                ?.selected_disposition_confirmed
            !== true
        ) {

            runtimeScene
                .getObjects(
                    "Btn_DispositionConfirm"
                )
                .forEach(obj => {

                    obj.hide(false);
                });

        } else {

            runtimeScene
                .getObjects(
                    "Btn_DispositionConfirm"
                )
                .forEach(obj => {

                    obj.hide(true);
                });
        }


        // ป้องกัน release ตอนปิดสมุด
        // ไปกดปุ่ม Modal ต่อทันที
        state.modalInputLockedUntil =
            Date.now() + 300;
    }


    state.clueBookReturnMode =
        "DESK";


} catch (error) {

    console.error(
        "S04 CLOSE BOOK ERROR:",
        error
    );
}
};
gdjs.S04_95DispositionCode.userFunc0x11ec198 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04 - RESTORE CONTINUE AFTER BOOK
//
// ทำงานหลัง CLOSE CLUE BOOK baseline
// ไม่แก้ state ของสมุดหรือ Modal
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;


    if (
        !state ||
        !session
    ) {
        return;
    }


    // ==================================================
    // ต้องเป็นกรณี:
    // 1. ปิดสมุดแล้ว
    // 2. กลับมาอยู่ Confirmation
    // 3. disposition ถูกยืนยันแล้ว
    // ==================================================

    if (
        state.clueBookOpen === false &&
        state.modalOpen === true &&
        session.selected_disposition_confirmed === true
    ) {

        const continueObjects =
            runtimeScene.getObjects(
                "Btn_DispositionContinue"
            );


        continueObjects.forEach(obj => {

            if (
                typeof obj.setText ===
                "function"
            ) {

                obj.setText(
                    "[ ดำเนินการต่อ ]"
                );
            }

            obj.hide(false);
        });


        console.log(
            "S04 CONTINUE RESTORED AFTER BOOK"
        );
    }


} catch (error) {

    console.error(
        "S04 Restore Continue Error:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList5 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0x1a67c70(runtimeScene);

}


{


gdjs.S04_95DispositionCode.userFunc0x11ec198(runtimeScene);

}


};gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595DispositionConfirmObjects1Objects = Hashtable.newFrom({"Btn_DispositionConfirm": gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects1});
gdjs.S04_95DispositionCode.userFunc0xc0b7a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04 - CONFIRM DISPOSITION
// CANONICAL BRANCHING VERSION
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;


    // ==================================================
    // 1. VALIDATE
    // ==================================================

    if (
        !state ||
        !session
    ) {

        console.error(
            "S04 Confirm: state/session missing"
        );

        return;
    }


    // ==================================================
    // 2. MODAL MUST BE OPEN
    // ==================================================

    if (
        state.modalOpen !== true
    ) {

        console.error(
            "S04 Confirm: modal is not open"
        );

        return;
    }


    // ==================================================
    // 3. INPUT LOCK
    // ==================================================

    if (
        Date.now() <
        (state.modalInputLockedUntil || 0)
    ) {
        return;
    }


    // ==================================================
    // 4. GET PENDING ZONE
    // ==================================================

    const zoneName =
        String(
            state.pendingZoneName || ""
        ).trim();


    if (!zoneName) {

        console.error(
            "S04 Confirm: pendingZoneName empty"
        );

        return;
    }


    const meta =
        state.zoneMeta
            ?.[zoneName];


    if (
        !meta ||
        !meta.key
    ) {

        console.error(
            "S04 Confirm: invalid zone",
            zoneName
        );

        return;
    }


    // ==================================================
    // 5. SAVE FINAL DISPOSITION
    // สำคัญ: เก็บทั้ง session และ state
    // ==================================================

    session.disposition_choice =
        meta.key;


    session.selected_disposition_key =
        meta.key;


    session.selected_disposition_label_th =
        meta.title || "";


    session.selected_disposition_confirmed =
        true;


    session.disposition_confirmed =
        true;


    session.disposition_zone =
        zoneName;


    session.disposition_confirmed_at =
        Date.now();


    // เก็บใน state อีกชั้น
    state.confirmedZoneName =
        zoneName;


    state.confirmedDisposition =
        meta.key;


    state.confirmedDispositionTitle =
        meta.title || "";


    // ==================================================
    // 6. LOCK INPUT
    // ==================================================

    state.modalInputLockedUntil =
        Date.now() + 250;


    // ==================================================
    // 7. GET UI OBJECTS
    // ==================================================

    const getObj =
        (name) => {

            const objects =
                runtimeScene.getObjects(
                    name
                );

            return objects.length > 0
                ? objects[0]
                : null;
        };


    const title =
        getObj(
            "Txt_DispositionConfirmTitle"
        );


    const body =
        getObj(
            "Txt_DispositionConfirmBody"
        );


    const btnConfirm =
        getObj(
            "Btn_DispositionConfirm"
        );


    const btnChange =
        getObj(
            "Btn_DispositionChange"
        );


    const btnReview =
        getObj(
            "Btn_DispositionReview"
        );


    const btnContinue =
        getObj(
            "Btn_DispositionContinue"
        );


    // ==================================================
    // 8. UPDATE RESULT MODAL
    // ยังไม่เฉลยถูก/ผิด
    // ==================================================

    if (title) {

        title.setText(
            "บันทึกแนวทางการดูแลแล้ว"
        );

        title.hide(false);
    }


    if (body) {

        body.setText(
            "คุณเลือก\n\n" +
            meta.title +
            "\n\n" +
            "การตัดสินใจนี้ถูกบันทึกไว้ในแฟ้มเคสแล้ว"
        );

        body.hide(false);
    }


    // ==================================================
    // 9. BUTTON STATES
    // ==================================================

    if (btnConfirm) {

        btnConfirm.hide(true);
    }


    if (btnChange) {

        btnChange.setText(
            "[ กลับไปจัดแฟ้มใหม่ ]"
        );

        btnChange.hide(false);
    }


    if (btnReview) {

        btnReview.setText(
            "[ เปิดสมุดเคส ]"
        );

        btnReview.hide(false);
    }


    // สำคัญมาก:
    // Initializer ซ่อนปุ่มนี้ไว้ตั้งแต่เริ่ม
    if (btnContinue) {

        btnContinue.setText(
            "[ ดำเนินการต่อ ]"
        );

        btnContinue.hide(false);
    }


    // ==================================================
    // 10. DEBUG
    // ==================================================

    console.log(
        "S04 DISPOSITION CONFIRMED:",
        {
            zone:
                zoneName,

            disposition:
                meta.key,

            title:
                meta.title,

            sessionChoice:
                session.disposition_choice,

            confirmedState:
                state.confirmedDisposition
        }
    );


} catch (error) {

    console.error(
        "S04 Confirm Error:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList6 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0xc0b7a0(runtimeScene);

}


};gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595BackToEncounterObjects1Objects = Hashtable.newFrom({"Btn_BackToEncounter": gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects1});
gdjs.S04_95DispositionCode.userFunc0xe5ec28 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S04 - BACK TO S03
// ======================================================

try {

    gdjs.evtTools.runtimeScene.replaceScene(
        runtimeScene,
        "S03_ClinicalEncounter",
        false
    );

} catch (error) {

    console.error(
        "S04 Back Error:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList7 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0xe5ec28(runtimeScene);

}


};gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595DispositionContinueObjects1Objects = Hashtable.newFrom({"Btn_DispositionContinue": gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects1});
gdjs.S04_95DispositionCode.userFunc0x115c560 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S04_Disposition
// FINAL TOP-LEVEL CONTINUE ROUTER
// ======================================================

try {

    const state =
        globalThis.MorYaS04State;

    const session =
        globalThis.MorYaCaseSession;


    // ==================================================
    // 1. VALIDATE
    // ==================================================

    if (
        !state ||
        !session
    ) {

        console.error(
            "S04 Continue: state/session missing"
        );

        return;
    }


    // ==================================================
    // 2. RESOLVE SELECTED ZONE
    //
    // ใช้ confirmed ก่อน
    // ถ้าไม่มี ใช้ pending เดิม
    // ==================================================

    const zoneName =
        String(
            state.confirmedZoneName ||
            state.pendingZoneName ||
            ""
        ).trim();


    let disposition = "";


    // ==================================================
    // 3. READ FROM ZONE META
    // ==================================================

    if (
        zoneName &&
        state.zoneMeta?.[zoneName]
    ) {

        disposition =
            String(
                state.zoneMeta[
                    zoneName
                ].key || ""
            ).trim();
    }


    // ==================================================
    // 4. SESSION FALLBACK
    // ==================================================

    if (!disposition) {

        disposition =
            String(
                session.disposition_choice ||
                session.selected_disposition_key ||
                ""
            ).trim();
    }


    // ==================================================
    // 5. DEBUG
    // ==================================================

    console.log(
        "S04 FINAL ROUTER:",
        {
            zoneName:
                zoneName,

            pendingZone:
                state.pendingZoneName,

            confirmedZone:
                state.confirmedZoneName,

            disposition:
                disposition
        }
    );


    // ==================================================
    // 6. VALIDATE CHOICE
    // ==================================================

    if (!disposition) {

        console.error(
            "S04 Continue: disposition not found"
        );

        return;
    }


    // ==================================================
    // 7. SAVE CANONICAL RESULT
    // ==================================================

    session.disposition_choice =
        disposition;


    session.disposition_confirmed =
        true;


    session.disposition_zone =
        zoneName;


    session.disposition_confirmed_at =
        Date.now();


    // ==================================================
    // 8. SELF CARE
    // ==================================================

    if (
        disposition ===
        "SELF_CARE_MONITOR"
    ) {

        session.disposition_route =
            "HERBAL_GARDEN";


        session.next_phase =
            "INTERVENTION_SELECTION";


        console.log(
            "S04 ROUTE -> S05_Intervention"
        );


        gdjs.evtTools.runtimeScene.replaceScene(
            runtimeScene,
            "S05_Intervention",
            false
        );

        return;
    }


    // ==================================================
    // 9. CONSULT
    // ==================================================

    if (
        disposition ===
        "CONSULT_HEALTH_PROFESSIONAL"
    ) {

        session.disposition_route =
            "CONSULT_PATH";


        session.next_phase =
            "CONSULT_PATH";


        console.log(
            "S04 ROUTE -> S04A_ConsultPath"
        );


        gdjs.evtTools.runtimeScene.replaceScene(
            runtimeScene,
            "S04A_ConsultPath",
            false
        );

        return;
    }


    // ==================================================
    // 10. URGENT REFERRAL
    // ==================================================

 if (
    disposition ===
    "REFER_URGENT"
) {

    session.disposition_route =
        "URGENT_REFERRAL_PATH";


    session.urgent_referral_selected =
        true;


    session.next_phase =
        "URGENT_REFERRAL";


    console.log(
        "S04 ROUTE -> S04B_UrgentReferral"
    );


    gdjs.evtTools.runtimeScene.replaceScene(
        runtimeScene,
        "S04B_UrgentReferral",
        false
    );

    return;
}


    // ==================================================
    // 11. UNKNOWN
    // ==================================================

    console.error(
        "S04 Continue: unknown disposition:",
        disposition
    );


} catch (error) {

    console.error(
        "S04 Final Router Error:",
        error
    );
}
};
gdjs.S04_95DispositionCode.eventsList8 = function(runtimeScene) {

{


gdjs.S04_95DispositionCode.userFunc0x115c560(runtimeScene);

}


};gdjs.S04_95DispositionCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card_CaseFile"), gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDCard_95959595CaseFileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.S04_95DispositionCode.userFunc0x135c8e8(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PROP_NOTEBOOK"), gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDPROP_95959595NOTEBOOKObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_ClueBookClose"), gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595ClueBookCloseObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_DispositionConfirm"), gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595DispositionConfirmObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_BackToEncounter"), gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595BackToEncounterObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_DispositionContinue"), gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S04_95DispositionCode.mapOfGDgdjs_9546S04_959595DispositionCode_9546GDBtn_95959595DispositionContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S04_95DispositionCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.S04_95DispositionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S04_95DispositionCode.GDBG_9595DispositionDeskObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBG_9595DispositionDeskObjects2.length = 0;
gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects1.length = 0;
gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects2.length = 0;
gdjs.S04_95DispositionCode.GDSmallLightGreyButtonObjects1.length = 0;
gdjs.S04_95DispositionCode.GDSmallLightGreyButtonObjects2.length = 0;
gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects1.length = 0;
gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects2.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595SelfCareObjects1.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595SelfCareObjects2.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595ConsultObjects1.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595ConsultObjects2.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595UrgentObjects1.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595UrgentObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595SelfCareObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595SelfCareObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ConsultObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ConsultObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595UrgentObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595UrgentObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionInstructionObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionInstructionObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595CaseFileTitleObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595CaseFileTitleObjects2.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595DispositionConfirmObjects1.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595DispositionConfirmObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmTitleObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmTitleObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmBodyObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmBodyObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionChangeObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionChangeObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionReviewObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionReviewObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects2.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595ClueBookObjects1.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595ClueBookObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueBookTitleObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueBookTitleObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralHeaderObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralHeaderObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralBodyObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralBodyObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyHeaderObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyHeaderObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyBodyObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyBodyObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueProgressObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueProgressObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects2.length = 0;

gdjs.S04_95DispositionCode.eventsList9(runtimeScene);
gdjs.S04_95DispositionCode.GDBG_9595DispositionDeskObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBG_9595DispositionDeskObjects2.length = 0;
gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects1.length = 0;
gdjs.S04_95DispositionCode.GDCard_9595CaseFileObjects2.length = 0;
gdjs.S04_95DispositionCode.GDSmallLightGreyButtonObjects1.length = 0;
gdjs.S04_95DispositionCode.GDSmallLightGreyButtonObjects2.length = 0;
gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects1.length = 0;
gdjs.S04_95DispositionCode.GDPROP_9595NOTEBOOKObjects2.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595SelfCareObjects1.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595SelfCareObjects2.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595ConsultObjects1.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595ConsultObjects2.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595UrgentObjects1.length = 0;
gdjs.S04_95DispositionCode.GDZone_9595UrgentObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595SelfCareObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595SelfCareObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ConsultObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ConsultObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595UrgentObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595UrgentObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionInstructionObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionInstructionObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595CaseFileTitleObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595CaseFileTitleObjects2.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595DispositionConfirmObjects1.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595DispositionConfirmObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmTitleObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmTitleObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmBodyObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595DispositionConfirmBodyObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionConfirmObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionChangeObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionChangeObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionReviewObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionReviewObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595BackToEncounterObjects2.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595ClueBookObjects1.length = 0;
gdjs.S04_95DispositionCode.GDPanel_9595ClueBookObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueBookTitleObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueBookTitleObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralHeaderObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralHeaderObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralBodyObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueGeneralBodyObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyHeaderObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyHeaderObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyBodyObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueSafetyBodyObjects2.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueProgressObjects1.length = 0;
gdjs.S04_95DispositionCode.GDTxt_9595ClueProgressObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595ClueBookCloseObjects2.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects1.length = 0;
gdjs.S04_95DispositionCode.GDBtn_9595DispositionContinueObjects2.length = 0;


return;

}

gdjs['S04_95DispositionCode'] = gdjs.S04_95DispositionCode;
