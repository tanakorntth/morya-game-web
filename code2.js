gdjs.S01_95TutorialGuideCode = {};
gdjs.S01_95TutorialGuideCode.localVariables = [];
gdjs.S01_95TutorialGuideCode.idToCallbackMap = new Map();
gdjs.S01_95TutorialGuideCode.GDBG_9595TutorialObjects1= [];
gdjs.S01_95TutorialGuideCode.GDBG_9595TutorialObjects2= [];
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialDimObjects1= [];
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialDimObjects2= [];
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialMainObjects1= [];
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialMainObjects2= [];
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialVisualObjects1= [];
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialVisualObjects2= [];
gdjs.S01_95TutorialGuideCode.GDSpr_9595TutorialVisualObjects1= [];
gdjs.S01_95TutorialGuideCode.GDSpr_9595TutorialVisualObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialVisualCaptionObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialVisualCaptionObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialEyebrowObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialEyebrowObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialTitleObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialTitleObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBodyObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBodyObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialFooterObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialFooterObjects2= [];
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialNextObjects1= [];
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialNextObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialNextObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialNextObjects2= [];
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialBackObjects1= [];
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialBackObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBackObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBackObjects2= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialPageObjects1= [];
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialPageObjects2= [];


gdjs.S01_95TutorialGuideCode.userFunc0xb15940 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S01_TutorialGuide
// TUTORIAL INITIALIZER
// ======================================================

// ------------------------------------------------------
// PAGE CONTENT
// ------------------------------------------------------

globalThis.MorYaTutorialPages = {

    1: {

        eyebrow:
            "บทนำ",

        title:
            "ยินดีต้อนรับสู่\n“เรือน หมอ ยา”",

        body:
            "ณ ชุมชนเล็ก ๆ แห่งหนึ่ง มีเรือนสมุนไพรที่ผู้คนในชุมชนแวะเวียนมาขอคำปรึกษาเรื่องสุขภาพ\n\nที่นี่คือ “เรือนหมอยา” สถานที่ที่ความรู้เรื่องสมุนไพร อาหาร และการดูแลสุขภาพ ถูกนำมาใช้ร่วมกับการสังเกตและการตัดสินใจอย่างเหมาะสม",

        footer:
            "วันนี้...\nคุณจะเป็นผู้ดูแลเรือนแห่งนี้",

        caption:
            "เรือนสมุนไพรเล็ก ๆ\nท่ามกลางชุมชน",

        visualAnimation:
            0
    },


    2: {

        eyebrow:
            "บทบาทของคุณ",

        title:
            "คุณคือผู้ดูแล\n“เรือนหมอยา”",

        body:
            "ในแต่ละวัน ผู้รับบริการจะมาพร้อมอาการ เรื่องราว และความต้องการที่แตกต่างกัน\n\nหน้าที่ของคุณไม่ใช่เพียงเลือกสมุนไพรให้ตรงกับอาการ แต่ต้องพูดคุย สังเกต ค้นหาข้อมูลสำคัญ และประเมินความปลอดภัย ก่อนตัดสินใจว่าจะดูแลอย่างไร",

        footer:
            "ฟังให้ครบ สังเกตให้ดี\nแล้วค่อยตัดสินใจ",

        caption:
            "ดูแลผู้คนในชุมชน\nด้วยความรู้และความปลอดภัย",

        visualAnimation:
            1
    },
        3: {

        eyebrow:
            "วิธีเล่น",

        title:
            "สำรวจฉาก\nเพื่อค้นหาข้อมูล",

        body:
            "ระหว่างพูดคุยกับผู้รับบริการ ลองสังเกตคนและสิ่งของรอบตัว\n\nสิ่งของบางอย่าง เช่น อาหาร ยาประจำ น้ำ หรือสิ่งของที่เกี่ยวข้องกับอาการ สามารถกดเพื่อเปิดคำถามและค้นหาข้อมูลเพิ่มเติมได้\n\nข้อมูลที่ค้นพบจะช่วยให้คุณเข้าใจสถานการณ์ และตัดสินใจได้เหมาะสมมากขึ้น",

        footer:
            "เมื่อเห็นแสงหรือขอบเน้น\nลองกดดูเพื่อค้นหาข้อมูล",

        caption:
            "สังเกตสิ่งรอบตัว\nแล้วเลือกค้นหาข้อมูลที่สำคัญ",

        visualAnimation:
            2
    },
        4: {

        eyebrow:
            "ความรู้สมุนไพร",

        title:
            "ไม่จำเป็นต้องรู้จัก\nสมุนไพรทุกชนิดมาก่อน",

        body:
            "เมื่อถึงขั้นตอนเลือกสมุนไพร คุณสามารถเปิดดูข้อมูลพื้นฐานของสมุนไพรแต่ละชนิดได้ก่อนตัดสินใจ\n\nข้อมูลที่แสดงจะช่วยให้คุณรู้จักสรรพคุณโดยสังเขป ส่วนของพืชที่ใช้ และรูปแบบการนำไปใช้ เช่น อาหาร เครื่องดื่มสมุนไพร หรือผลิตภัณฑ์สมุนไพร\n\nนำข้อมูลเหล่านี้มาใช้ร่วมกับสิ่งที่คุณค้นพบจากผู้รับบริการ เพื่อเลือกแนวทางที่เหมาะสมกับสถานการณ์",

        footer:
            "เกมนี้ไม่ได้วัดว่าคุณจำสมุนไพรได้มากแค่ไหน\nแต่ให้คุณใช้ข้อมูลเพื่อคิดและตัดสินใจ",

        caption:
            "กดดูข้อมูลสมุนไพร\nก่อนเลือกส่วนที่ใช้และวิธีนำไปใช้",

        visualAnimation:
            3
    },
        5: {

        eyebrow:
            "ก่อนตัดสินใจ",

        title:
            "สมุนไพรหนึ่งชนิด\nใช้ได้หลายรูปแบบ",

        body:
            "เมื่อเลือกสมุนไพรแล้ว คุณยังต้องพิจารณาว่าควรใช้ส่วนใดของพืช และนำไปใช้อย่างไรให้เหมาะกับผู้รับบริการ\n\nสมุนไพรบางชนิดอาจนำมาใช้เป็นอาหาร เครื่องดื่มสมุนไพร หรือผลิตภัณฑ์สมุนไพรได้\n\nดังนั้นอย่ารีบตัดสินใจจากชื่อสมุนไพรเพียงอย่างเดียว ให้พิจารณาข้อมูลของผู้รับบริการ ส่วนที่ใช้ วิธีใช้ และความปลอดภัยร่วมกันเสมอ",

        footer:
            "เลือกสมุนไพร ≠ เลือกยา\nเลือกให้เหมาะทั้ง “ส่วนที่ใช้” และ “วิธีนำไปใช้”",

        caption:
            "สมุนไพร → ส่วนที่ใช้ → วิธีใช้\nแล้วจึงให้คำแนะนำที่เหมาะสม",

        visualAnimation:
            4
    }

};


// ------------------------------------------------------
// STATE
// ------------------------------------------------------

globalThis.MorYaTutorialState = {

    active:
        true,

    page:
        1,

    maxPage:
        5,

    inputLockedUntil:
        Date.now() + 400
};


runtimeScene
    .getScene()
    .getVariables()
    .get("TutorialPage")
    .setNumber(1);


// ======================================================
// RENDER FUNCTION
// ======================================================

globalThis.MorYaTutorialRenderPage =
    function(runtimeScene, pageNumber) {

        const pages =
            globalThis.MorYaTutorialPages;

        const state =
            globalThis.MorYaTutorialState;


        if (
            !pages ||
            !pages[pageNumber]
        ) {

            return;
        }


        const page =
            pages[pageNumber];


        state.page =
            pageNumber;


        runtimeScene
            .getScene()
            .getVariables()
            .get("TutorialPage")
            .setNumber(pageNumber);


        // ------------------------------------------------
        // TEXT HELPER
        // ------------------------------------------------

        const setText =
            (name, value) => {

                runtimeScene
                    .getObjects(name)
                    .forEach(obj => {

                        if (
                            obj &&
                            typeof obj.setText ===
                            "function"
                        ) {

                            obj.setText(
                                String(value)
                            );
                        }
                    });
            };


        // ------------------------------------------------
        // TEXT CONTENT
        // ------------------------------------------------

        setText(
            "Txt_TutorialEyebrow",
            page.eyebrow
        );


        setText(
            "Txt_TutorialTitle",
            page.title
        );


        setText(
            "Txt_TutorialBody",
            page.body
        );


        setText(
            "Txt_TutorialFooter",
            page.footer
        );


        setText(
            "Txt_TutorialVisualCaption",
            page.caption
        );


        setText(
            "Txt_TutorialPage",
            pageNumber + " / 5"
        );


        setText(
            "Txt_TutorialBack",
            "ย้อนกลับ"
        );


        if (pageNumber === 5) {

    setText(
        "Txt_TutorialNext",
        "เริ่มดูแลผู้รับบริการ"
    );

} else {

    setText(
        "Txt_TutorialNext",
        "ถัดไป"
    );
}


        // ------------------------------------------------
        // LEFT VISUAL
        // ------------------------------------------------

       // ------------------------------------------------
// LEFT VISUAL
// Change animation + fit inside tutorial frame
// ------------------------------------------------

runtimeScene
    .getObjects(
        "Spr_TutorialVisual"
    )
    .forEach(obj => {

        if (!obj) {
            return;
        }


        // -----------------------------------------
        // CHANGE PAGE IMAGE
        // -----------------------------------------

        if (
            typeof obj.setAnimation ===
            "function"
        ) {

            obj.setAnimation(
                page.visualAnimation
            );
        }


        // -----------------------------------------
        // RESET SCALE
        // Important because each animation may use
        // a different source image size.
// -----------------------------------------

        if (
            typeof obj.setScale ===
            "function"
        ) {

            obj.setScale(1);
        }


        // -----------------------------------------
        // VISUAL FRAME AREA
        // ปรับ 4 ค่านี้ให้ตรงกรอบจริงของคุณ
        // -----------------------------------------

        const BOX_X = 125;
        const BOX_Y = 145;

        const BOX_W = 425;
        const BOX_H = 445;


        // -----------------------------------------
        // CURRENT IMAGE SIZE
        // -----------------------------------------

        const imageW =
            obj.getWidth();

        const imageH =
            obj.getHeight();


        if (
            imageW <= 0 ||
            imageH <= 0
        ) {

            return;
        }


        // -----------------------------------------
        // FIT INSIDE
        // Preserve original aspect ratio
        // -----------------------------------------

        const scale =
            Math.min(
                BOX_W / imageW,
                BOX_H / imageH
            );


        if (
            typeof obj.setScale ===
            "function"
        ) {

            obj.setScale(scale);
        }


        // -----------------------------------------
        // CENTER IMAGE INSIDE FRAME
        // -----------------------------------------

        const finalW =
            obj.getWidth();

        const finalH =
            obj.getHeight();


        const finalX =
    BOX_X +
    (BOX_W - finalW) / 2;

// ขยับภาพขึ้นเล็กน้อย
const VISUAL_OFFSET_Y = -18;

const finalY =
    BOX_Y +
    (BOX_H - finalH) / 2 +
    VISUAL_OFFSET_Y;

obj.setPosition(
    finalX,
    finalY
);    });


        // ------------------------------------------------
        // BACK BUTTON
        // PAGE 1 = HIDDEN
        // ------------------------------------------------

        const showBack =
            pageNumber > 1;


        runtimeScene
            .getObjects(
                "Btn_TutorialBack"
            )
            .forEach(obj =>
                obj.hide(!showBack)
            );


        runtimeScene
            .getObjects(
                "Txt_TutorialBack"
            )
            .forEach(obj =>
                obj.hide(!showBack)
            );
    };


// ------------------------------------------------------
// SHOW PAGE 1
// ------------------------------------------------------

globalThis.MorYaTutorialRenderPage(
    runtimeScene,
    1
);
};
gdjs.S01_95TutorialGuideCode.eventsList0 = function(runtimeScene) {

{


gdjs.S01_95TutorialGuideCode.userFunc0xb15940(runtimeScene);

}


};gdjs.S01_95TutorialGuideCode.userFunc0x1280bb0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S01T - TUTORIAL VISUAL ENGINE
// ======================================================

const state =
    globalThis.MorYaTutorialState;


if (
    !state ||
    !state.active
) {

    return;
}


const now =
    Date.now();


const clamp01 =
    value =>
        Math.max(
            0,
            Math.min(
                1,
                value
            )
        );


const setOpacity =
    (name, opacity) => {

        runtimeScene
            .getObjects(name)
            .forEach(obj => {

                if (
                    obj &&
                    typeof obj.setOpacity ===
                    "function"
                ) {

                    obj.setOpacity(
                        opacity
                    );
                }
            });
    };


// ======================================================
// ENTER
// ======================================================

if (
    state.phase === "ENTER"
) {

    const elapsed =
        now -
        state.sceneStartedAt;


    const panelT =
        clamp01(
            elapsed / 450
        );


    const visualT =
        clamp01(
            (elapsed - 100) / 500
        );


    const titleT =
        clamp01(
            (elapsed - 250) / 450
        );


    const bodyT =
        clamp01(
            (elapsed - 400) / 450
        );


    const buttonT =
        clamp01(
            (elapsed - 600) / 300
        );


    setOpacity(
        "Panel_TutorialMain",
        255 * panelT
    );


    setOpacity(
        "Panel_TutorialVisual",
        255 * visualT
    );


    setOpacity(
        "Spr_TutorialLogo",
        255 * visualT
    );


    setOpacity(
        "Txt_TutorialVisualCaption",
        255 * visualT
    );


    setOpacity(
        "Txt_TutorialEyebrow",
        255 * titleT
    );


    setOpacity(
        "Txt_TutorialTitle",
        255 * titleT
    );


    setOpacity(
        "Txt_TutorialBody",
        255 * bodyT
    );


    setOpacity(
        "Txt_TutorialFooter",
        255 * bodyT
    );


    setOpacity(
        "Btn_TutorialNext",
        255 * buttonT
    );


    setOpacity(
        "Txt_TutorialNext",
        255 * buttonT
    );


    setOpacity(
        "Txt_TutorialPage",
        255 * buttonT
    );


    if (
        elapsed >= 900
    ) {

        state.phase =
            "READY";
    }
}
};
gdjs.S01_95TutorialGuideCode.eventsList1 = function(runtimeScene) {

{


gdjs.S01_95TutorialGuideCode.userFunc0x1280bb0(runtimeScene);

}


};gdjs.S01_95TutorialGuideCode.userFunc0xe4faf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// S01T - TUTORIAL INPUT ROUTER
// ======================================================

const state =
    globalThis.MorYaTutorialState;

const pages =
    globalThis.MorYaTutorialPages;


if (
    !state ||
    !state.active ||
    !pages
) {
    return;
}


if (
    Date.now() <
    state.inputLockedUntil
) {
    return;
}


// ------------------------------------------------------
// UI CURSOR
// ------------------------------------------------------

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


// ------------------------------------------------------
// HIT TEST
// ------------------------------------------------------

const isInside =
    obj => {

        if (!obj) {
            return false;
        }

        return (
            mouseX >= obj.getX() &&
            mouseX <= obj.getX() + obj.getWidth() &&
            mouseY >= obj.getY() &&
            mouseY <= obj.getY() + obj.getHeight()
        );
    };


// ======================================================
// NEXT / START CASE
// ======================================================

const nextButton =
    runtimeScene
        .getObjects(
            "Btn_TutorialNext"
        )[0];


if (
    nextButton &&
    isInside(nextButton)
) {

    // --------------------------------------------------
    // PAGE 5 → GO TO CASE INTRO
    // --------------------------------------------------

    if (
        state.page === 5
    ) {

        state.active =
            false;


        globalThis.MorYaTutorialCompleted =
            true;


        console.log(
            "TUTORIAL COMPLETE → S02_CaseIntro"
        );


        gdjs.evtTools.runtimeScene.replaceScene(
            runtimeScene,
            "S02_CaseIntro",
            false
        );


        return;
    }


    // --------------------------------------------------
    // NORMAL NEXT PAGE
    // --------------------------------------------------

    const nextPage =
        state.page + 1;


    if (
        pages[nextPage]
    ) {

        globalThis
            .MorYaTutorialRenderPage(
                runtimeScene,
                nextPage
            );


        state.inputLockedUntil =
            Date.now() + 250;


        return;
    }
}


// ======================================================
// BACK
// ======================================================

const backButton =
    runtimeScene
        .getObjects(
            "Btn_TutorialBack"
        )[0];


if (
    backButton &&
    isInside(backButton)
) {

    const previousPage =
        state.page - 1;


    if (
        pages[previousPage]
    ) {

        globalThis
            .MorYaTutorialRenderPage(
                runtimeScene,
                previousPage
            );


        state.inputLockedUntil =
            Date.now() + 250;


        return;
    }
}
};
gdjs.S01_95TutorialGuideCode.eventsList2 = function(runtimeScene) {

{


gdjs.S01_95TutorialGuideCode.userFunc0xe4faf8(runtimeScene);

}


};gdjs.S01_95TutorialGuideCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S01_95TutorialGuideCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.S01_95TutorialGuideCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S01_95TutorialGuideCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.S01_95TutorialGuideCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S01_95TutorialGuideCode.GDBG_9595TutorialObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDBG_9595TutorialObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialDimObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialDimObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialMainObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialMainObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialVisualObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialVisualObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDSpr_9595TutorialVisualObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDSpr_9595TutorialVisualObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialVisualCaptionObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialVisualCaptionObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialEyebrowObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialEyebrowObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialTitleObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialTitleObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBodyObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBodyObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialFooterObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialFooterObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialNextObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialNextObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialNextObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialNextObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialBackObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialBackObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBackObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBackObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialPageObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialPageObjects2.length = 0;

gdjs.S01_95TutorialGuideCode.eventsList3(runtimeScene);
gdjs.S01_95TutorialGuideCode.GDBG_9595TutorialObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDBG_9595TutorialObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialDimObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialDimObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialMainObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialMainObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialVisualObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDPanel_9595TutorialVisualObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDSpr_9595TutorialVisualObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDSpr_9595TutorialVisualObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialVisualCaptionObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialVisualCaptionObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialEyebrowObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialEyebrowObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialTitleObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialTitleObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBodyObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBodyObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialFooterObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialFooterObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialNextObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialNextObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialNextObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialNextObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialBackObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDBtn_9595TutorialBackObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBackObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialBackObjects2.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialPageObjects1.length = 0;
gdjs.S01_95TutorialGuideCode.GDTxt_9595TutorialPageObjects2.length = 0;


return;

}

gdjs['S01_95TutorialGuideCode'] = gdjs.S01_95TutorialGuideCode;
