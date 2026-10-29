gdjs.S05B_95PluckHarvestCode = {};
gdjs.S05B_95PluckHarvestCode.localVariables = [];
gdjs.S05B_95PluckHarvestCode.idToCallbackMap = new Map();
gdjs.S05B_95PluckHarvestCode.GDBG_9595HarvestDigObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDBG_9595HarvestDigObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595BasketObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595BasketObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDBar_9595HarvestProgressObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDBar_9595HarvestProgressObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestTitleObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestTitleObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestInstructionObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestInstructionObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestCountObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestCountObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestFeedbackObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestFeedbackObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDNewSpriteObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDNewSpriteObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595BasketObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595BasketObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilPlantPluckObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilPlantPluckObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilLeafHarvestObjects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilLeafHarvestObjects2= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects2= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects1= [];
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects2= [];


gdjs.S05B_95PluckHarvestCode.eventsList0 = function(runtimeScene) {

};gdjs.S05B_95PluckHarvestCode.userFunc0x1ec87d8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05B_PluckHarvest
// 01_INIT - PLUCK HARVEST ENGINE
// DYNAMIC HERB / PART TEXT VERSION
// ======================================================

try {

    // ==================================================
    // SESSION
    // ==================================================

    const session =
        globalThis.MorYaCaseSession || {};

    globalThis.MorYaCaseSession =
        session;


    // ==================================================
    // HARVEST TARGET TEXT
    // ==================================================

    const herbNameTh =
        session.s05_harvest_herb_name_th ||
        "สมุนไพร";

    const partNameTh =
        session.s05_harvest_part_name_th ||
        "ใบ";

    const harvestTargetText =
        partNameTh +
        herbNameTh;


    // ==================================================
    // ENGINE
    // ==================================================

    const engine = {

        active:
            true,

        requiredCount:
            5,

        pluckCount:
            0,

        herbNameTh:
            herbNameTh,

        partNameTh:
            partNameTh,

        harvestTargetText:
            harvestTargetText,

        activeSlot:
            0,

        dragging:
            false,

        dragOffsetX:
            0,

        dragOffsetY:
            0,

        harvestComplete:
            false,

        collected: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false
        },

        spawnPositions: {}
    };


    globalThis.MorYaS05B =
        engine;


    // ==================================================
    // HELPER : GET OBJECT
    // ==================================================

    engine.getObj =
        function(name) {

            const objects =
                runtimeScene.getObjects(name);

            return objects.length > 0
                ? objects[0]
                : null;
        };


    // ==================================================
    // HELPER : SET TEXT
    // ==================================================

    engine.setText =
        function(
            name,
            value
        ) {

            const obj =
                engine.getObj(name);

            if (!obj) {
                return;
            }


            if (
                typeof obj.setString ===
                "function"
            ) {

                obj.setString(
                    String(value)
                );

                return;
            }


            if (
                typeof obj.setText ===
                "function"
            ) {

                obj.setText(
                    String(value)
                );
            }
        };


    // ==================================================
    // HELPER : SET SCENE VARIABLE
    // ==================================================

    engine.setSceneNumber =
        function(
            name,
            value
        ) {

            runtimeScene
                .getVariables()
                .get(name)
                .setNumber(value);
        };


    // ==================================================
    // HELPER : CURSOR X
    // ==================================================

    engine.getCursorX =
        function(obj) {

            const layerName =
                (
                    obj &&
                    typeof obj.getLayer ===
                        "function"
                )
                    ? obj.getLayer()
                    : "";


            return gdjs.evtTools.input
                .getCursorX(
                    runtimeScene,
                    layerName,
                    0
                );
        };


    // ==================================================
    // HELPER : CURSOR Y
    // ==================================================

    engine.getCursorY =
        function(obj) {

            const layerName =
                (
                    obj &&
                    typeof obj.getLayer ===
                        "function"
                )
                    ? obj.getLayer()
                    : "";


            return gdjs.evtTools.input
                .getCursorY(
                    runtimeScene,
                    layerName,
                    0
                );
        };


    // ==================================================
    // SELECT LEAF
    // Zone_LeafX -> Spr_PluckLeafX appears
    // ==================================================

    engine.selectLeaf =
        function(slot) {

            if (
                engine.harvestComplete === true
            ) {
                return;
            }


            if (
                slot < 1 ||
                slot > engine.requiredCount
            ) {
                return;
            }


            if (
                engine.collected[slot] === true
            ) {
                return;
            }


            // มีใบอื่นกำลังใช้งานอยู่
            if (
                engine.activeSlot !== 0
            ) {
                return;
            }


            const leaf =
                engine.getObj(
                    "Spr_PluckLeaf" + slot
                );


            if (!leaf) {

                console.warn(
                    "S05B SELECT: leaf not found",
                    slot
                );

                return;
            }


            // ------------------------------------------
            // RESET POSITION
            // ------------------------------------------

            const spawn =
                engine.spawnPositions[slot];


            if (spawn) {

                leaf.setPosition(
                    spawn.x,
                    spawn.y
                );
            }


            // ------------------------------------------
            // SHOW
            // ------------------------------------------

            leaf.hide(false);


            engine.activeSlot =
                slot;

            engine.dragging =
                false;


            engine.setText(
                "Txt_HarvestFeedback",

                "ลาก" +
                engine.harvestTargetText +
                "ไปใส่ตะกร้า"
            );


            console.log(
                "S05B SELECT LEAF:",
                {
                    slot:
                        slot,

                    herb:
                        engine.herbNameTh,

                    part:
                        engine.partNameTh
                }
            );
        };


    // ==================================================
    // START DRAG
    // ==================================================

    engine.startDrag =
        function(slot) {

            if (
                engine.harvestComplete === true
            ) {
                return;
            }


            if (
                engine.activeSlot !== slot
            ) {
                return;
            }


            if (
                engine.collected[slot] === true
            ) {
                return;
            }


            if (
                engine.dragging === true
            ) {
                return;
            }


            const leaf =
                engine.getObj(
                    "Spr_PluckLeaf" + slot
                );


            if (!leaf) {

                console.warn(
                    "S05B START DRAG: leaf not found",
                    slot
                );

                return;
            }


            const cursorX =
                engine.getCursorX(
                    leaf
                );


            const cursorY =
                engine.getCursorY(
                    leaf
                );


            // ------------------------------------------
            // SAVE OFFSET
            // ป้องกัน Sprite กระโดดเข้ากลาง cursor
            // ------------------------------------------

            engine.dragOffsetX =
                leaf.getX() -
                cursorX;


            engine.dragOffsetY =
                leaf.getY() -
                cursorY;


            engine.dragging =
                true;


            engine.setText(
                "Txt_HarvestFeedback",

                "ลาก" +
                engine.harvestTargetText +
                "ไปยังตะกร้า"
            );


            console.log(
                "S05B START DRAG:",
                slot
            );
        };


    // ==================================================
    // UPDATE DRAG
    // ==================================================

    engine.updateDrag =
        function() {

            if (
                engine.dragging !== true
            ) {
                return;
            }


            if (
                engine.activeSlot === 0
            ) {
                return;
            }


            const leaf =
                engine.getObj(
                    "Spr_PluckLeaf" +
                    engine.activeSlot
                );


            if (!leaf) {
                return;
            }


            const cursorX =
                engine.getCursorX(
                    leaf
                );


            const cursorY =
                engine.getCursorY(
                    leaf
                );


            leaf.setPosition(

                cursorX +
                    engine.dragOffsetX,

                cursorY +
                    engine.dragOffsetY
            );
        };


    // ==================================================
    // DROP LEAF
    // ==================================================

    engine.dropLeaf =
        function() {

            if (
                engine.dragging !== true
            ) {
                return;
            }


            if (
                engine.activeSlot === 0
            ) {

                engine.dragging =
                    false;

                return;
            }


            const slot =
                engine.activeSlot;


            const leaf =
                engine.getObj(
                    "Spr_PluckLeaf" + slot
                );


            const basket =
                engine.getObj(
                    "Zone_Basket"
                );


            // หยุดลากทันทีเมื่อปล่อย
            engine.dragging =
                false;


            if (
                !leaf ||
                !basket
            ) {

                console.warn(
                    "S05B DROP: leaf or basket missing"
                );

                return;
            }


            // ------------------------------------------
            // CENTER OF LEAF
            // ------------------------------------------

            const leafCenterX =
                leaf.getX() +
                leaf.getWidth() / 2;


            const leafCenterY =
                leaf.getY() +
                leaf.getHeight() / 2;


            // ------------------------------------------
            // BASKET RECTANGLE
            // ------------------------------------------

            const basketLeft =
                basket.getX();


            const basketRight =
                basket.getX() +
                basket.getWidth();


            const basketTop =
                basket.getY();


            const basketBottom =
                basket.getY() +
                basket.getHeight();


            // ------------------------------------------
            // CHECK DROP
            // ------------------------------------------

            const droppedInBasket =
                (
                    leafCenterX >=
                        basketLeft &&

                    leafCenterX <=
                        basketRight &&

                    leafCenterY >=
                        basketTop &&

                    leafCenterY <=
                        basketBottom
                );


            // ==================================================
            // FAILED
            // ==================================================

            if (
                droppedInBasket !== true
            ) {

                engine.setText(
                    "Txt_HarvestFeedback",

                    "ลาก" +
                    engine.harvestTargetText +
                    "ไปวางในตะกร้า"
                );


                console.log(
                    "S05B DROP MISSED:",
                    slot
                );


                // activeSlot ไม่ถูกล้าง
                // จึงสามารถลากใบเดิมใหม่ได้
                return;
            }


            // ==================================================
            // SUCCESS
            // ==================================================

            engine.collected[slot] =
                true;


            leaf.hide(true);


            engine.activeSlot =
                0;


            engine.pluckCount +=
                1;


            const progress =
                Math.round(
                    (
                        engine.pluckCount /
                        engine.requiredCount
                    ) * 100
                );


            // ------------------------------------------
            // SCENE VARIABLES
            // ------------------------------------------

            engine.setSceneNumber(
                "PluckCount",
                engine.pluckCount
            );


            engine.setSceneNumber(
                "LeafCollected",
                engine.pluckCount
            );


            engine.setSceneNumber(
                "HarvestProgress",
                progress
            );


            // ------------------------------------------
            // UI
            // ------------------------------------------

            engine.setText(
                "Txt_HarvestCount",

                "เด็ดแล้ว " +
                engine.pluckCount +
                " / " +
                engine.requiredCount
            );


            engine.setText(
                "Txt_HarvestFeedback",

                "เก็บ" +
                engine.harvestTargetText +
                "สำเร็จ " +
                engine.pluckCount +
                " / " +
                engine.requiredCount
            );


            console.log(
                "S05B DROP SUCCESS:",
                {
                    slot:
                        slot,

                    count:
                        engine.pluckCount,

                    progress:
                        progress
                }
            );


            // ==================================================
            // COMPLETE
            // ==================================================

            if (
                engine.pluckCount >=
                engine.requiredCount
            ) {

                engine.harvestComplete =
                    true;


                engine.setSceneNumber(
                    "HarvestComplete",
                    1
                );


                engine.setSceneNumber(
                    "HarvestProgress",
                    100
                );


                engine.setText(
                    "Txt_HarvestFeedback",

                    "เก็บ" +
                    engine.harvestTargetText +
                    "ครบแล้ว"
                );


                session.s05_harvest_completed =
                    true;


                // ------------------------------------------
                // SHOW CONTINUE BUTTON
                // ------------------------------------------

                const continueButton =
                    engine.getObj(
                        "Btn_HarvestContinue"
                    );


                if (continueButton) {

                    continueButton.hide(false);
                }


                console.log(
                    "S05B HARVEST COMPLETE:",
                    {
                        herb:
                            engine.herbNameTh,

                        part:
                            engine.partNameTh
                    }
                );
            }
        };


    // ==================================================
    // RESET SCENE VARIABLES
    // ==================================================

    engine.setSceneNumber(
        "PluckCount",
        0
    );


    engine.setSceneNumber(
        "LeafCollected",
        0
    );


    engine.setSceneNumber(
        "HarvestProgress",
        0
    );


    engine.setSceneNumber(
        "HarvestComplete",
        0
    );


    // ==================================================
    // PREPARE LEAVES
    // ==================================================

    for (
        let slot = 1;
        slot <= engine.requiredCount;
        slot++
    ) {

        const leaf =
            engine.getObj(
                "Spr_PluckLeaf" + slot
            );


        if (leaf) {

            engine.spawnPositions[slot] = {

                x:
                    leaf.getX(),

                y:
                    leaf.getY()
            };


            leaf.hide(true);
        }


        // ----------------------------------------------
        // INVISIBLE CLICK ZONE
        // ----------------------------------------------

        const zone =
            engine.getObj(
                "Zone_Leaf" + slot
            );


        if (
            zone &&
            typeof zone.setOpacity ===
                "function"
        ) {

            zone.setOpacity(0);
        }
    }


    // ==================================================
    // BASKET ZONE
    // ==================================================

    const basket =
        engine.getObj(
            "Zone_Basket"
        );


    if (
        basket &&
        typeof basket.setOpacity ===
            "function"
    ) {

        basket.setOpacity(0);
    }


    // ==================================================
    // INITIAL UI
    // ==================================================

    engine.setText(
        "Txt_HarvestTitle",

        "เก็บ" +
        engine.harvestTargetText
    );


    engine.setText(
        "Txt_HarvestInstruction",

        "สมุนไพร: " +
        engine.herbNameTh +
        "\n" +

        "ส่วนที่เลือก: " +
        engine.partNameTh +
        "\n\n" +

        "เลือกเด็ดทีละส่วน แล้วลากไปใส่ตะกร้า"
    );


    engine.setText(
        "Txt_HarvestCount",

        "เด็ดแล้ว 0 / " +
        engine.requiredCount
    );


    engine.setText(
        "Txt_HarvestFeedback",

        "เลือกเด็ด" +
        engine.harvestTargetText +
        "ทีละส่วน"
    );


    // ==================================================
    // HARVEST CONTINUE BUTTON
    // ==================================================

    const continueButton =
        engine.getObj(
            "Btn_HarvestContinue"
        );


    if (continueButton) {

        continueButton.hide(true);
    }


    // ==================================================
    // READY
    // ==================================================

    console.log(
        "S05B PLUCK ENGINE READY:",
        {
            requiredCount:
                engine.requiredCount,

            basketReady:
                !!basket,

            herb:
                engine.herbNameTh,

            part:
                engine.partNameTh,

            target:
                engine.harvestTargetText
        }
    );


} catch (error) {

    console.error(
        "S05B INIT ERROR:",
        error
    );
}
};
gdjs.S05B_95PluckHarvestCode.eventsList1 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x1ec87d8(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.eventsList2 = function(runtimeScene) {

};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf1Objects1Objects = Hashtable.newFrom({"Zone_Leaf1": gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xe4faf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.selectLeaf(1);
};
gdjs.S05B_95PluckHarvestCode.eventsList3 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xe4faf8(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf2Objects1Objects = Hashtable.newFrom({"Zone_Leaf2": gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0x15dd500 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.selectLeaf(2);

};
gdjs.S05B_95PluckHarvestCode.eventsList4 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x15dd500(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf3Objects1Objects = Hashtable.newFrom({"Zone_Leaf3": gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xc03dc0 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.selectLeaf(3);
};
gdjs.S05B_95PluckHarvestCode.eventsList5 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xc03dc0(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf4Objects1Objects = Hashtable.newFrom({"Zone_Leaf4": gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xaba9e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.selectLeaf(4);
};
gdjs.S05B_95PluckHarvestCode.eventsList6 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xaba9e8(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf5Objects1Objects = Hashtable.newFrom({"Zone_Leaf5": gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0x119b7b0 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.selectLeaf(5);
};
gdjs.S05B_95PluckHarvestCode.eventsList7 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x119b7b0(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.eventsList8 = function(runtimeScene) {

};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf1Objects1Objects = Hashtable.newFrom({"Spr_PluckLeaf1": gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0x1261700 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.startDrag(1);
};
gdjs.S05B_95PluckHarvestCode.eventsList9 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x1261700(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf2Objects1Objects = Hashtable.newFrom({"Spr_PluckLeaf2": gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xf067d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.startDrag(2);
};
gdjs.S05B_95PluckHarvestCode.eventsList10 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xf067d0(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf3Objects1Objects = Hashtable.newFrom({"Spr_PluckLeaf3": gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0x1141f68 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.startDrag(3);
};
gdjs.S05B_95PluckHarvestCode.eventsList11 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x1141f68(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf4Objects1Objects = Hashtable.newFrom({"Spr_PluckLeaf4": gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xf02ad8 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.startDrag(4);

};
gdjs.S05B_95PluckHarvestCode.eventsList12 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xf02ad8(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf5Objects1Objects = Hashtable.newFrom({"Spr_PluckLeaf5": gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xed7fa0 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.startDrag(5);
};
gdjs.S05B_95PluckHarvestCode.eventsList13 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xed7fa0(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.eventsList14 = function(runtimeScene) {

};gdjs.S05B_95PluckHarvestCode.userFunc0x15957e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.updateDrag();
};
gdjs.S05B_95PluckHarvestCode.eventsList15 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x15957e8(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.eventsList16 = function(runtimeScene) {

};gdjs.S05B_95PluckHarvestCode.userFunc0x9fdd80 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaS05B.dropLeaf();
};
gdjs.S05B_95PluckHarvestCode.eventsList17 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0x9fdd80(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.eventsList18 = function(runtimeScene) {

};gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDBtn_95959595HarvestContinueObjects1Objects = Hashtable.newFrom({"Btn_HarvestContinue": gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects1});
gdjs.S05B_95PluckHarvestCode.userFunc0xb468e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05B_PluckHarvest
// 06_HARVEST_CONTINUE
// ======================================================

try {

    const engine =
        globalThis.MorYaS05B;


    const session =
        globalThis.MorYaCaseSession;


    if (
        !engine ||
        !session
    ) {

        return;
    }


    // ------------------------------------------
    // ต้องเก็บครบก่อน
    // ------------------------------------------

    if (
        engine.harvestComplete !== true ||
        engine.pluckCount <
            engine.requiredCount
    ) {

        return;
    }


    // ==================================================
    // HARVEST COMPLETE
    // ==================================================

    session.s05_harvest_completed =
        true;


    session.s05_harvest_completed_at =
        Date.now();


    // ==================================================
    // MOVE HARVEST RESULT INTO BASKET
    //
    // เพื่อให้ระบบขั้นต่อไปอ่านจาก field เดิม
    // ==================================================

    session.s05_basket_herb_id =
        session.s05_harvest_herb_id;


    session.s05_basket_herb_name_th =
        session.s05_harvest_herb_name_th;


    session.s05_basket_part_id =
        session.s05_harvest_part_id;


    session.s05_basket_part_name_th =
        session.s05_harvest_part_name_th;


    // ==================================================
    // NEXT ROUTE
    // ==================================================

    session.next_care_phase =
        "PREPARATION_SELECT";


    session.s05_open_preparation_on_return =
        true;


    console.log(
        "S05B -> PREPARATION:",
        {
            herb:
                session.s05_basket_herb_id,

            part:
                session.s05_basket_part_id,

            harvestMode:
                session.s05_harvest_mode
        }
    );


    // ==================================================
    // RETURN TO S05
    // ==================================================

    gdjs.evtTools.runtimeScene
        .replaceScene(
            runtimeScene,
            "S05_Intervention",
            false
        );


} catch (error) {

    console.error(
        "S05B HARVEST CONTINUE ERROR:",
        error
    );
}
};
gdjs.S05B_95PluckHarvestCode.eventsList19 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.userFunc0xb468e0(runtimeScene);

}


};gdjs.S05B_95PluckHarvestCode.eventsList20 = function(runtimeScene) {

{


gdjs.S05B_95PluckHarvestCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.S05B_95PluckHarvestCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Leaf1"), gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39579460);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Leaf2"), gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39580588);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Leaf3"), gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39581572);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Leaf4"), gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39582972);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Leaf5"), gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDZone_95959595Leaf5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39584092);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.S05B_95PluckHarvestCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_PluckLeaf1"), gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39585836);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_PluckLeaf2"), gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39580388);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_PluckLeaf3"), gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39583964);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_PluckLeaf4"), gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39589276);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_PluckLeaf5"), gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDSpr_95959595PluckLeaf5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39590564);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.S05B_95PluckHarvestCode.eventsList14(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.S05B_95PluckHarvestCode.eventsList16(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


gdjs.S05B_95PluckHarvestCode.eventsList18(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_HarvestContinue"), gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05B_95PluckHarvestCode.mapOfGDgdjs_9546S05B_959595PluckHarvestCode_9546GDBtn_95959595HarvestContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39594756);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05B_95PluckHarvestCode.eventsList19(runtimeScene);} //End of subevents
}

}


};

gdjs.S05B_95PluckHarvestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S05B_95PluckHarvestCode.GDBG_9595HarvestDigObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBG_9595HarvestDigObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595BasketObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595BasketObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBar_9595HarvestProgressObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBar_9595HarvestProgressObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestTitleObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestTitleObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestInstructionObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestInstructionObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestCountObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestCountObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestFeedbackObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestFeedbackObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDNewSpriteObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDNewSpriteObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595BasketObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595BasketObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilPlantPluckObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilPlantPluckObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilLeafHarvestObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilLeafHarvestObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects2.length = 0;

gdjs.S05B_95PluckHarvestCode.eventsList20(runtimeScene);
gdjs.S05B_95PluckHarvestCode.GDBG_9595HarvestDigObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBG_9595HarvestDigObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595BasketObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595BasketObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBar_9595HarvestProgressObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBar_9595HarvestProgressObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDBtn_9595HarvestContinueObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestTitleObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestTitleObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestInstructionObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestInstructionObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestCountObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestCountObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestFeedbackObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDTxt_9595HarvestFeedbackObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDNewSpriteObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDNewSpriteObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595BasketObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595BasketObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilPlantPluckObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilPlantPluckObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilLeafHarvestObjects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595HolyBasilLeafHarvestObjects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf1Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf2Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf3Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf4Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDZone_9595Leaf5Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf1Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf2Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf3Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf4Objects2.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects1.length = 0;
gdjs.S05B_95PluckHarvestCode.GDSpr_9595PluckLeaf5Objects2.length = 0;


return;

}

gdjs['S05B_95PluckHarvestCode'] = gdjs.S05B_95PluckHarvestCode;
