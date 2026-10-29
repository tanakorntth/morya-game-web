gdjs.S05C_95CutHarvestCode = {};
gdjs.S05C_95CutHarvestCode.localVariables = [];
gdjs.S05C_95CutHarvestCode.idToCallbackMap = new Map();
gdjs.S05C_95CutHarvestCode.GDBG_9595HarvestDigObjects1= [];
gdjs.S05C_95CutHarvestCode.GDBG_9595HarvestDigObjects2= [];
gdjs.S05C_95CutHarvestCode.GDBar_9595HarvestProgressObjects1= [];
gdjs.S05C_95CutHarvestCode.GDBar_9595HarvestProgressObjects2= [];
gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects1= [];
gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects2= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestTitleObjects1= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestTitleObjects2= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestInstructionObjects1= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestInstructionObjects2= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestCountObjects1= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestCountObjects2= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestFeedbackObjects1= [];
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestFeedbackObjects2= [];
gdjs.S05C_95CutHarvestCode.GDNewSpriteObjects1= [];
gdjs.S05C_95CutHarvestCode.GDNewSpriteObjects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantCutObjects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantCutObjects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantAfterCutObjects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantAfterCutObjects2= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut1Objects1= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut1Objects2= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut2Objects1= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut2Objects2= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut3Objects1= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut3Objects2= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut4Objects1= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut4Objects2= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut5Objects1= [];
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut5Objects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk1Objects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk1Objects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk2Objects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk2Objects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk3Objects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk3Objects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk4Objects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk4Objects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk5Objects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk5Objects2= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595HarvestedBundleObjects1= [];
gdjs.S05C_95CutHarvestCode.GDSpr_9595HarvestedBundleObjects2= [];


gdjs.S05C_95CutHarvestCode.eventsList0 = function(runtimeScene) {

};gdjs.S05C_95CutHarvestCode.userFunc0x1bebde8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05C_CutHarvest
// 01_INIT - CUT HARVEST ENGINE
//
// Dynamic herb / plant-part text version
//
// CUT = STEM / PSEUDOSTEM / BASE
//
// หมายเหตุ:
// - ภาพยังใช้ชุดตะไคร้เดิม
// - ข้อความเปลี่ยนตามสมุนไพรและส่วนพืชที่เลือก
// ======================================================

try {

    // ==================================================
    // SESSION
    // ==================================================

    const session =
        globalThis.MorYaCaseSession ||
        {};

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
        "ส่วนลำต้น";


    const herbId =
        session.s05_harvest_herb_id ||
        "";


    const partId =
        session.s05_harvest_part_id ||
        "";


    // ตัวอย่าง:
    //
    // BASE + ตะไคร้
    // -> โคนต้นตะไคร้
    //
    // STEM + กะเพรา
    // -> ลำต้นกะเพรา

    const harvestTargetText =
        partNameTh +
        herbNameTh;


    // ==================================================
    // ENGINE STATE
    // ==================================================

    const engine = {

        runtimeScene:
            runtimeScene,

        requiredCount:
            5,

        cutCount:
            0,

        harvestComplete:
            false,


        // ----------------------------------------------
        // HARVEST TARGET
        // ----------------------------------------------

        herbId:
            herbId,

        herbNameTh:
            herbNameTh,

        partId:
            partId,

        partNameTh:
            partNameTh,

        harvestTargetText:
            harvestTargetText,


        // ----------------------------------------------
        // KNIFE DRAG STATE
        // ----------------------------------------------

        draggingKnife:
            false,

        knifeOffsetX:
            0,

        knifeOffsetY:
            0,

        knifeStartX:
            0,

        knifeStartY:
            0,

        knifeStartAngle:
            0,


        // ----------------------------------------------
        // CUT COOLDOWN
        // ----------------------------------------------

        cutCooldownUntil:
            0,


        // ----------------------------------------------
        // CUT SLOT STATE
        // ----------------------------------------------

        cutSlots: {

            1: false,
            2: false,
            3: false,
            4: false,
            5: false
        }
    };


    // ==================================================
    // EXPOSE ENGINE
    // ==================================================

    globalThis.MorYaS05C =
        engine;


    // ==================================================
    // HELPER : GET FIRST OBJECT
    // ==================================================

    engine.getObj =
        function(name) {

            const objects =
                runtimeScene.getObjects(
                    name
                );


            return objects.length > 0
                ? objects[0]
                : null;
        };


    // ==================================================
    // HELPER : SHOW / HIDE OBJECT
    //
    // hidden = true  -> hide
    // hidden = false -> show
    // ==================================================

    engine.hideObj =
        function(
            name,
            hidden
        ) {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(
                        hidden
                    );
                });
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
                engine.getObj(
                    name
                );


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
    // HELPER : SET SCENE NUMBER
    // ==================================================

    engine.setSceneNumber =
        function(
            name,
            value
        ) {

            runtimeScene
                .getVariables()
                .get(name)
                .setNumber(
                    value
                );
        };


    // ==================================================
    // HELPER : CURSOR X
    //
    // ใช้ layer ของ object เอง
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
    // START KNIFE DRAG
    // ==================================================

    engine.startKnifeDrag =
        function() {

            // เกมจบแล้ว
            if (
                engine.harvestComplete ===
                    true
            ) {

                return;
            }


            // กำลังลากอยู่แล้ว
            if (
                engine.draggingKnife ===
                    true
            ) {

                return;
            }


            // ------------------------------------------
            // GET KNIFE
            // ------------------------------------------

            const knife =
                engine.getObj(
                    "Spr_KnifeTool"
                );


            if (!knife) {

                console.warn(
                    "S05C START KNIFE DRAG: Spr_KnifeTool not found"
                );

                return;
            }


            // ------------------------------------------
            // CURRENT CURSOR POSITION
            // ------------------------------------------

            const cursorX =
                engine.getCursorX(
                    knife
                );


            const cursorY =
                engine.getCursorY(
                    knife
                );


            // ------------------------------------------
            // SAVE OFFSET
            //
            // ป้องกันมีดกระโดดเข้ากลาง cursor
            // ------------------------------------------

            engine.knifeOffsetX =
                knife.getX() -
                cursorX;


            engine.knifeOffsetY =
                knife.getY() -
                cursorY;


            // ------------------------------------------
            // START DRAG
            // ------------------------------------------

            engine.draggingKnife =
                true;


            // ------------------------------------------
            // DYNAMIC FEEDBACK
            // ------------------------------------------

            engine.setText(
                "Txt_HarvestFeedback",

                "ลากมีดผ่านบริเวณ" +
                engine.harvestTargetText
            );


            console.log(
                "S05C START KNIFE DRAG:",
                {
                    herb:
                        engine.herbNameTh,

                    part:
                        engine.partNameTh
                }
            );
        };


    // ==================================================
    // UPDATE KNIFE DRAG
    // ==================================================

    engine.updateKnifeDrag =
        function() {

            if (
                engine.draggingKnife !==
                    true
            ) {

                return;
            }


            if (
                engine.harvestComplete ===
                    true
            ) {

                return;
            }


            const knife =
                engine.getObj(
                    "Spr_KnifeTool"
                );


            if (!knife) {

                return;
            }


            const cursorX =
                engine.getCursorX(
                    knife
                );


            const cursorY =
                engine.getCursorY(
                    knife
                );


            // ------------------------------------------
            // MOVE KNIFE
            // ------------------------------------------

            knife.setPosition(

                cursorX +
                    engine.knifeOffsetX,

                cursorY +
                    engine.knifeOffsetY
            );
        };


    // ==================================================
    // STOP KNIFE DRAG
    // ==================================================

    engine.stopKnifeDrag =
        function() {

            if (
                engine.draggingKnife !==
                    true
            ) {

                return;
            }


            engine.draggingKnife =
                false;


            const knife =
                engine.getObj(
                    "Spr_KnifeTool"
                );


            if (!knife) {

                return;
            }


            // ------------------------------------------
            // RETURN KNIFE TO START POSITION
            // ------------------------------------------

            knife.setPosition(
                engine.knifeStartX,
                engine.knifeStartY
            );


            // ------------------------------------------
            // RESTORE ANGLE
            // ------------------------------------------

            if (
                typeof knife.setAngle ===
                    "function"
            ) {

                knife.setAngle(
                    engine.knifeStartAngle
                );
            }


            // ------------------------------------------
            // FEEDBACK
            // ------------------------------------------

            if (
                engine.harvestComplete !==
                    true
            ) {

                engine.setText(
                    "Txt_HarvestFeedback",

                    "กดค้างที่มีดแล้วลากไปยัง" +
                    engine.harvestTargetText
                );
            }


            console.log(
                "S05C STOP KNIFE DRAG"
            );
        };


    // ==================================================
    // CHECK CUT ZONES
    // ==================================================

    engine.checkCutZones =
        function() {

            // ต้องกำลังลากมีดอยู่
            if (
                engine.draggingKnife !==
                    true
            ) {

                return;
            }


            // เกมจบแล้ว
            if (
                engine.harvestComplete ===
                    true
            ) {

                return;
            }


            // ------------------------------------------
            // CUT COOLDOWN
            // ------------------------------------------

            if (
                Date.now() <
                engine.cutCooldownUntil
            ) {

                return;
            }


            const knife =
                engine.getObj(
                    "Spr_KnifeTool"
                );


            if (!knife) {

                return;
            }


            // ==================================================
            // KNIFE CUT POINT
            //
            // ตำแหน่งปลายใบมีด
            // ==================================================

            const knifeX =
                typeof knife.getDrawableX ===
                    "function"
                    ? knife.getDrawableX()
                    : knife.getX();


            const knifeY =
                typeof knife.getDrawableY ===
                    "function"
                    ? knife.getDrawableY()
                    : knife.getY();


            const cutPointX =
                knifeX +
                knife.getWidth() *
                    0.18;


            const cutPointY =
                knifeY +
                knife.getHeight() *
                    0.22;


            // ==================================================
            // CHECK CUT ZONE 1 - 5
            // ==================================================

            for (
                let slot = 1;
                slot <=
                    engine.requiredCount;
                slot++
            ) {

                // จุดนี้ถูกตัดแล้ว
                if (
                    engine.cutSlots[slot] ===
                        true
                ) {

                    continue;
                }


                const zone =
                    engine.getObj(
                        "Zone_Cut" +
                        slot
                    );


                if (!zone) {

                    continue;
                }


                const zoneX =
                    typeof zone.getDrawableX ===
                        "function"
                        ? zone.getDrawableX()
                        : zone.getX();


                const zoneY =
                    typeof zone.getDrawableY ===
                        "function"
                        ? zone.getDrawableY()
                        : zone.getY();


                const inside =
                    (
                        cutPointX >=
                            zoneX &&

                        cutPointX <=
                            zoneX +
                            zone.getWidth() &&

                        cutPointY >=
                            zoneY &&

                        cutPointY <=
                            zoneY +
                            zone.getHeight()
                    );


                if (!inside) {

                    continue;
                }


                // ==================================================
                // CUT SUCCESS
                // ==================================================

                engine.cutSlots[slot] =
                    true;


                engine.cutCount +=
                    1;


                engine.cutCooldownUntil =
                    Date.now() + 180;


                // ------------------------------------------
                // SCENE VARIABLES
                // ------------------------------------------

                engine.setSceneNumber(
                    "CutCount",
                    engine.cutCount
                );


                const progress =
                    Math.round(
                        (
                            engine.cutCount /
                            engine.requiredCount
                        ) * 100
                    );


                engine.setSceneNumber(
                    "HarvestProgress",
                    progress
                );


                // ------------------------------------------
                // SHOW HARVESTED STALK
                // ------------------------------------------

                engine.hideObj(
                    "Spr_CutStalk" +
                        slot,
                    false
                );


                // ------------------------------------------
                // COUNT
                // ------------------------------------------

                engine.setText(
                    "Txt_HarvestCount",

                    "ตัดแล้ว " +
                    engine.cutCount +
                    " / " +
                    engine.requiredCount
                );


                // ------------------------------------------
                // DYNAMIC FEEDBACK
                // ------------------------------------------

                engine.setText(
                    "Txt_HarvestFeedback",

                    "ตัด" +
                    engine.harvestTargetText +
                    "สำเร็จ " +
                    engine.cutCount +
                    " / " +
                    engine.requiredCount
                );


                console.log(
                    "S05C CUT SUCCESS:",
                    {
                        slot:
                            slot,

                        count:
                            engine.cutCount,

                        progress:
                            progress,

                        herb:
                            engine.herbNameTh,

                        part:
                            engine.partNameTh
                    }
                );


                // ==================================================
                // CHECK HARVEST COMPLETE
                // ==================================================

                if (
                    engine.cutCount >=
                    engine.requiredCount
                ) {

                    engine.completeHarvest();

                    return;
                }


                // หนึ่ง frame ตัดได้เพียง 1 จุด
                break;
            }
        };


    // ==================================================
    // COMPLETE HARVEST
    // ==================================================

    engine.completeHarvest =
        function() {

            // ทำงานครั้งเดียว
            if (
                engine.harvestComplete ===
                    true
            ) {

                return;
            }


            // ต้องครบจริง
            if (
                engine.cutCount <
                engine.requiredCount
            ) {

                return;
            }


            // ==================================================
            // ENGINE STATE
            // ==================================================

            engine.harvestComplete =
                true;


            engine.draggingKnife =
                false;


            // ==================================================
            // SCENE VARIABLES
            // ==================================================

            engine.setSceneNumber(
                "CutCount",
                engine.requiredCount
            );


            engine.setSceneNumber(
                "HarvestComplete",
                1
            );


            engine.setSceneNumber(
                "HarvestProgress",
                100
            );


            // ==================================================
            // RETURN KNIFE TO START
            // ==================================================

            const knife =
                engine.getObj(
                    "Spr_KnifeTool"
                );


            if (knife) {

                knife.setPosition(
                    engine.knifeStartX,
                    engine.knifeStartY
                );


                if (
                    typeof knife.setAngle ===
                        "function"
                ) {

                    knife.setAngle(
                        engine.knifeStartAngle
                    );
                }
            }


            // ==================================================
            // CHANGE PLANT VISUAL
            //
            // ตอนนี้ยังคงใช้ asset ตะไคร้เดิม
            // ==================================================

            engine.hideObj(
                "Spr_LemongrassPlantCut",
                true
            );


            engine.hideObj(
                "Spr_LemongrassPlantAfterCut",
                false
            );


            // ==================================================
            // HIDE INDIVIDUAL CUT STALKS
            // ==================================================

            for (
                let slot = 1;
                slot <=
                    engine.requiredCount;
                slot++
            ) {

                engine.hideObj(
                    "Spr_CutStalk" +
                        slot,
                    true
                );
            }


            // ==================================================
            // SHOW FINAL HARVEST
            // ==================================================

            engine.hideObj(
                "Spr_HarvestedBundle",
                false
            );


            // ==================================================
            // SHOW CONTINUE BUTTON
            // ==================================================

            engine.hideObj(
                "Btn_HarvestContinue",
                false
            );


            // ==================================================
            // TEXT
            // ==================================================

            engine.setText(
                "Txt_HarvestCount",

                "ตัดแล้ว " +
                engine.requiredCount +
                " / " +
                engine.requiredCount
            );


            engine.setText(
                "Txt_HarvestFeedback",

                "เก็บ" +
                engine.harvestTargetText +
                "ครบแล้ว"
            );


            engine.setText(
                "Txt_HarvestInstruction",

                "เก็บส่วนที่เลือกสำเร็จ\n" +
                engine.herbNameTh +
                " — " +
                engine.partNameTh
            );


            // ==================================================
            // SESSION
            // ==================================================

            session.s05_harvest_completed =
                true;


            session.s05_harvest_completed_at =
                Date.now();


            console.log(
                "S05C CUT HARVEST COMPLETE:",
                {
                    herb:
                        engine.herbId,

                    herbName:
                        engine.herbNameTh,

                    part:
                        engine.partId,

                    partName:
                        engine.partNameTh,

                    count:
                        engine.cutCount
                }
            );
        };


    // ==================================================
    // RESET ENGINE STATE
    // ==================================================

    engine.cutCount =
        0;


    engine.harvestComplete =
        false;


    engine.draggingKnife =
        false;


    engine.cutCooldownUntil =
        0;


    engine.cutSlots = {

        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    };


    // ==================================================
    // RESET SCENE VARIABLES
    // ==================================================

    engine.setSceneNumber(
        "CutCount",
        0
    );


    engine.setSceneNumber(
        "HarvestComplete",
        0
    );


    engine.setSceneNumber(
        "HarvestProgress",
        0
    );


    // ==================================================
    // STORE KNIFE START POSITION
    // ==================================================

    const knife =
        engine.getObj(
            "Spr_KnifeTool"
        );


    if (knife) {

        engine.knifeStartX =
            knife.getX();


        engine.knifeStartY =
            knife.getY();


        engine.knifeStartAngle =
            (
                typeof knife.getAngle ===
                    "function"
            )
                ? knife.getAngle()
                : 0;


        knife.hide(
            false
        );

    } else {

        console.warn(
            "S05C INIT: Spr_KnifeTool not found"
        );
    }


    // ==================================================
    // INITIAL PLANT STATE
    //
    // ยังใช้ภาพตะไคร้เดิมตามที่ตกลงกัน
    // ==================================================

    engine.hideObj(
        "Spr_LemongrassPlantCut",
        false
    );


    engine.hideObj(
        "Spr_LemongrassPlantAfterCut",
        true
    );


    // ==================================================
    // CUT STALKS
    // ==================================================

    for (
        let slot = 1;
        slot <= engine.requiredCount;
        slot++
    ) {

        engine.hideObj(
            "Spr_CutStalk" +
                slot,
            true
        );
    }


    // ==================================================
    // HARVESTED BUNDLE
    // ==================================================

    engine.hideObj(
        "Spr_HarvestedBundle",
        true
    );


    // ==================================================
    // CONTINUE BUTTON
    // ==================================================

    engine.hideObj(
        "Btn_HarvestContinue",
        true
    );


    // ==================================================
    // PREPARE CUT ZONES
    // ==================================================

    for (
        let slot = 1;
        slot <= engine.requiredCount;
        slot++
    ) {

        const zone =
            engine.getObj(
                "Zone_Cut" +
                slot
            );


        if (!zone) {

            console.warn(
                "S05C INIT: Zone_Cut" +
                slot +
                " not found"
            );

            continue;
        }


        if (
            typeof zone.setOpacity ===
                "function"
        ) {

            zone.setOpacity(
                0
            );
        }
    }


    // ==================================================
    // INITIAL TEXT
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

        "ลากมีดผ่านบริเวณส่วนที่ต้องการตัด"
    );


    engine.setText(
        "Txt_HarvestCount",

        "ตัดแล้ว 0 / " +
        engine.requiredCount
    );


    engine.setText(
        "Txt_HarvestFeedback",

        "กดค้างที่มีดแล้วลากไปยัง" +
        engine.harvestTargetText
    );


    // ==================================================
    // SESSION
    // ==================================================

    session.s05_harvest_mode =
        "CUT";


    session.s05_harvest_completed =
        false;


    // ==================================================
    // DEBUG
    // ==================================================

    console.log(
        "S05C CUT HARVEST READY:",
        {
            requiredCount:
                engine.requiredCount,

            cutCount:
                engine.cutCount,

            startKnifeDrag:
                typeof engine
                    .startKnifeDrag,

            herb:
                engine.herbId,

            herbName:
                engine.herbNameTh,

            part:
                engine.partId,

            partName:
                engine.partNameTh,

            target:
                engine.harvestTargetText
        }
    );


} catch (error) {

    console.error(
        "S05C INIT ERROR:",
        error
    );
}
};
gdjs.S05C_95CutHarvestCode.eventsList1 = function(runtimeScene) {

{


gdjs.S05C_95CutHarvestCode.userFunc0x1bebde8(runtimeScene);

}


};gdjs.S05C_95CutHarvestCode.eventsList2 = function(runtimeScene) {

};gdjs.S05C_95CutHarvestCode.mapOfGDgdjs_9546S05C_959595CutHarvestCode_9546GDSpr_95959595KnifeToolObjects1Objects = Hashtable.newFrom({"Spr_KnifeTool": gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects1});
gdjs.S05C_95CutHarvestCode.userFunc0x139def8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const engine =
    globalThis.MorYaS05C;


if (
    engine &&
    typeof engine.startKnifeDrag ===
        "function"
) {

    engine.startKnifeDrag();

} else {

    console.error(
        "S05C startKnifeDrag not ready:",
        engine
    );
}
};
gdjs.S05C_95CutHarvestCode.eventsList3 = function(runtimeScene) {

{


gdjs.S05C_95CutHarvestCode.userFunc0x139def8(runtimeScene);

}


};gdjs.S05C_95CutHarvestCode.eventsList4 = function(runtimeScene) {

};gdjs.S05C_95CutHarvestCode.userFunc0x2241390 = function GDJSInlineCode(runtimeScene) {
"use strict";
const engine =
    globalThis.MorYaS05C;


if (!engine) {
    return;
}


if (
    typeof engine.updateKnifeDrag ===
        "function"
) {

    engine.updateKnifeDrag();
}


if (
    typeof engine.checkCutZones ===
        "function"
) {

    engine.checkCutZones();
}
};
gdjs.S05C_95CutHarvestCode.eventsList5 = function(runtimeScene) {

{


gdjs.S05C_95CutHarvestCode.userFunc0x2241390(runtimeScene);

}


};gdjs.S05C_95CutHarvestCode.eventsList6 = function(runtimeScene) {

};gdjs.S05C_95CutHarvestCode.userFunc0x2206488 = function GDJSInlineCode(runtimeScene) {
"use strict";
const engine =
    globalThis.MorYaS05C;


if (
    engine &&
    typeof engine.stopKnifeDrag ===
        "function"
) {

    engine.stopKnifeDrag();
}
};
gdjs.S05C_95CutHarvestCode.eventsList7 = function(runtimeScene) {

{


gdjs.S05C_95CutHarvestCode.userFunc0x2206488(runtimeScene);

}


};gdjs.S05C_95CutHarvestCode.eventsList8 = function(runtimeScene) {

};gdjs.S05C_95CutHarvestCode.mapOfGDgdjs_9546S05C_959595CutHarvestCode_9546GDBtn_95959595HarvestContinueObjects1Objects = Hashtable.newFrom({"Btn_HarvestContinue": gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects1});
gdjs.S05C_95CutHarvestCode.userFunc0x1ab5e80 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05C - HARVEST CONTINUE
//
// CUT HARVEST
// -> S05 INTERVENTION
// -> OPEN PREPARATION
// ======================================================

try {

    const engine =
        globalThis.MorYaS05C;

    const session =
        globalThis.MorYaCaseSession;


    if (
        !engine ||
        !session
    ) {
        return;
    }


    // ==================================================
    // MUST BE COMPLETED
    // ==================================================

    if (
        engine.harvestComplete !== true ||
        engine.cutCount <
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
    // MOVE HARVEST RESULT INTO BASKET STATE
    //
    // เมื่อกลับ S05
    // engine ใหม่จะอ่านค่าพวกนี้
    // ==================================================

    session.s05_basket_herb_id =
        session.s05_harvest_herb_id ||
        "";


    session.s05_basket_herb_name_th =
        session.s05_harvest_herb_name_th ||
        "";


    session.s05_basket_part_id =
        session.s05_harvest_part_id ||
        "";


    session.s05_basket_part_name_th =
        session.s05_harvest_part_name_th ||
        "";


    // ==================================================
    // RETURN ROUTE
    // ==================================================

    session.s05_open_preparation_on_return =
        true;


    session.next_care_phase =
        "PREPARATION_SELECT";


    console.log(
        "S05C -> S05 PREPARATION:",
        {
            herb:
                session.s05_basket_herb_id,

            part:
                session.s05_basket_part_id,

            mode:
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
        "S05C HARVEST CONTINUE ERROR:",
        error
    );
}
};
gdjs.S05C_95CutHarvestCode.eventsList9 = function(runtimeScene) {

{


gdjs.S05C_95CutHarvestCode.userFunc0x1ab5e80(runtimeScene);

}


};gdjs.S05C_95CutHarvestCode.eventsList10 = function(runtimeScene) {

{


gdjs.S05C_95CutHarvestCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05C_95CutHarvestCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.S05C_95CutHarvestCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_KnifeTool"), gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05C_95CutHarvestCode.mapOfGDgdjs_9546S05C_959595CutHarvestCode_9546GDSpr_95959595KnifeToolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39698436);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05C_95CutHarvestCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.S05C_95CutHarvestCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05C_95CutHarvestCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.S05C_95CutHarvestCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39701788);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05C_95CutHarvestCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.S05C_95CutHarvestCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_HarvestContinue"), gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05C_95CutHarvestCode.mapOfGDgdjs_9546S05C_959595CutHarvestCode_9546GDBtn_95959595HarvestContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39703772);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05C_95CutHarvestCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.S05C_95CutHarvestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S05C_95CutHarvestCode.GDBG_9595HarvestDigObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDBG_9595HarvestDigObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDBar_9595HarvestProgressObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDBar_9595HarvestProgressObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestTitleObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestTitleObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestInstructionObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestInstructionObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestCountObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestCountObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestFeedbackObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestFeedbackObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDNewSpriteObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDNewSpriteObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantCutObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantCutObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantAfterCutObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantAfterCutObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut1Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut1Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut2Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut2Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut3Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut3Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut4Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut4Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut5Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut5Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk1Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk1Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk2Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk2Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk3Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk3Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk4Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk4Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk5Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk5Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595HarvestedBundleObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595HarvestedBundleObjects2.length = 0;

gdjs.S05C_95CutHarvestCode.eventsList10(runtimeScene);
gdjs.S05C_95CutHarvestCode.GDBG_9595HarvestDigObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDBG_9595HarvestDigObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDBar_9595HarvestProgressObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDBar_9595HarvestProgressObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDBtn_9595HarvestContinueObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestTitleObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestTitleObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestInstructionObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestInstructionObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestCountObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestCountObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestFeedbackObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDTxt_9595HarvestFeedbackObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDNewSpriteObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDNewSpriteObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantCutObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantCutObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantAfterCutObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595LemongrassPlantAfterCutObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut1Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut1Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut2Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut2Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut3Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut3Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut4Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut4Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut5Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDZone_9595Cut5Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk1Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk1Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595KnifeToolObjects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk2Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk2Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk3Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk3Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk4Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk4Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk5Objects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595CutStalk5Objects2.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595HarvestedBundleObjects1.length = 0;
gdjs.S05C_95CutHarvestCode.GDSpr_9595HarvestedBundleObjects2.length = 0;


return;

}

gdjs['S05C_95CutHarvestCode'] = gdjs.S05C_95CutHarvestCode;
