gdjs.S05A_95HarvestMinigameCode = {};
gdjs.S05A_95HarvestMinigameCode.localVariables = [];
gdjs.S05A_95HarvestMinigameCode.idToCallbackMap = new Map();
gdjs.S05A_95HarvestMinigameCode.GDBG_9595HarvestDigObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDBG_9595HarvestDigObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerPlantDigObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerPlantDigObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigSoilObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigSoilObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects2= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects2= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects2= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects2= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects2= [];
gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestTitleObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestTitleObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestInstructionObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestInstructionObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestProgressObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestProgressObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestFeedbackObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestFeedbackObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDNewSpriteObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDNewSpriteObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595BasketDropObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDZone_9595BasketDropObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRootObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRootObjects2= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRhizomeObjects1= [];
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRhizomeObjects2= [];


gdjs.S05A_95HarvestMinigameCode.userFunc0x94c6e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05A_HarvestMinigame
// GENERIC UNDERGROUND HARVEST
//
// DIG = ROOT / RHIZOME
// ======================================================

try {

    // ==================================================
    // SESSION
    // ==================================================

    let session =
        globalThis.MorYaCaseSession;


    // รองรับ Preview Scene โดยตรง
    if (!session) {

        session = {};

        globalThis.MorYaCaseSession =
            session;
    }


    // ==================================================
    // DIRECT PREVIEW FALLBACK
    //
    // Preview ตรง scene โดยไม่ผ่าน S05
    // ใช้ RHIZOME เป็นค่าเริ่มต้น
    // ==================================================

    if (
        !session.s05_harvest_herb_id
    ) {

        session.s05_harvest_herb_id =
            "HERB_GINGER";

        session.s05_harvest_herb_name_th =
            "ขิง";

        session.s05_harvest_part_id =
            "RHIZOME";

        session.s05_harvest_part_name_th =
            "เหง้า";

        session.s05_harvest_mode =
            "DIG";
    }


    // ==================================================
    // HELPERS
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


    const setText =
        (name, value) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setText ===
                        "function"
                    ) {

                        obj.setText(
                            String(value)
                        );

                    } else if (
                        typeof obj.setString ===
                        "function"
                    ) {

                        obj.setString(
                            String(value)
                        );
                    }
                });
        };


    const hide =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(
                        hidden
                    );
                });
        };


    // ==================================================
    // SESSION VALUES
    // ==================================================

    const herbId =
        session.s05_harvest_herb_id ||
        "";

    const herbNameTh =
        session.s05_harvest_herb_name_th ||
        "สมุนไพร";

    const partId =
        session.s05_harvest_part_id ||
        "";

    const partNameTh =
        session.s05_harvest_part_name_th ||
        "ส่วนใต้ดิน";


    // ==================================================
    // STATE
    // ==================================================

    const state = {

        active:
            true,

        mode:
            "DIG",

        herbId:
            herbId,

        herbNameTh:
            herbNameTh,

        partId:
            partId,

        partNameTh:
            partNameTh,

        digProgress:
            0,

        usedZones:
            [],

        diggingComplete:
            false,

        // ชื่อใหม่เชิงความหมาย
        partCollected:
            false,

        // เก็บไว้เพื่อ compatibility
        // กับ Event เดิมที่อาจยังอ้าง rhizomeCollected
        rhizomeCollected:
            false,

        inputLockedUntil:
            Date.now() + 300,

        startedAt:
            Date.now()
    };


    globalThis.MorYaHarvestState =
        state;
    // ==================================================
// HARVESTED PART VISUAL ROUTER
// ==================================================

const harvestedPart =
    getObj(
        "Spr_GingerRhizomeHarvested"
    );


if (
    harvestedPart &&
    typeof harvestedPart.setAnimation ===
        "function"
) {

    if (
        state.partId === "ROOT"
    ) {

        harvestedPart.setAnimation(
            0
        );

    } else if (
        state.partId === "RHIZOME"
    ) {

        harvestedPart.setAnimation(
            1
        );
    }
}



    // ==================================================
    // SCENE VARIABLES
    // ==================================================

    runtimeScene
        .getVariables()
        .get("DigProgress")
        .setNumber(0);


    runtimeScene
        .getVariables()
        .get("HarvestComplete")
        .setNumber(0);


    // ชื่อเดิมเก็บไว้เพื่อ compatibility
    runtimeScene
        .getVariables()
        .get("RhizomeCollected")
        .setNumber(0);


    // ==================================================
    // UNDERGROUND VISUAL ROUTER
    // ==================================================

    hide(
        "Spr_UndergroundPlantRoot",
        true
    );


    hide(
        "Spr_UndergroundPlantRhizome",
        true
    );


    if (
        partId === "ROOT"
    ) {

        hide(
            "Spr_UndergroundPlantRoot",
            false
        );

    } else if (
        partId === "RHIZOME"
    ) {

        hide(
            "Spr_UndergroundPlantRhizome",
            false
        );

    } else {

        // fallback สำหรับส่วนใต้ดินชนิดใหม่ในอนาคต
        hide(
            "Spr_UndergroundPlantRoot",
            false
        );
    }


    // ==================================================
    // INITIAL VISIBILITY
    // ==================================================

    // Object นี้ยังใช้เป็นชิ้นที่ลากลงตะกร้า
    // เพื่อไม่ให้ Event เดิมพัง
    hide(
        "Spr_GingerRhizomeHarvested",
        true
    );


    hide(
        "Btn_HarvestContinue",
        true
    );


    // ==================================================
    // DIG ZONES
    // ==================================================

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        hide(
            "Zone_Dig" + i,
            false
        );
    }


    // ==================================================
    // INITIAL SOIL
    // ==================================================

    const soil =
        getObj(
            "Spr_DigSoil"
        );


    if (
        soil &&
        typeof soil.setAnimation ===
            "function"
    ) {

        soil.setAnimation(
            0
        );
    }


    // ==================================================
    // INITIAL UI
    // ==================================================

    setText(
        "Txt_HarvestTitle",
        "เก็บส่วนใต้ดิน"
    );


    setText(
        "Txt_HarvestInstruction",

        "สมุนไพร: " +
        herbNameTh +

        "\nส่วนที่เลือก: " +
        partNameTh +

        "\n\nขุดดินบริเวณรอบส่วนใต้ดินอย่างระมัดระวัง"
    );


    setText(
        "Txt_HarvestProgress",
        "ขุดแล้ว 0%"
    );


    setText(
        "Txt_HarvestFeedback",
        "เลือกจุดขุดบริเวณรอบส่วนใต้ดิน"
    );


    setText(
        "Btn_HarvestContinue",
        "[ ดำเนินการต่อ ]"
    );


    // ==================================================
    // DIG FUNCTION
    // ==================================================

    globalThis.MorYaHarvestDig =
        function(
            runtimeScene,
            zoneIndex
        ) {

            const state =
                globalThis
                    .MorYaHarvestState;


            if (
                !state ||
                state.active !== true ||
                state.mode !== "DIG"
            ) {

                return;
            }


            if (
                state.diggingComplete ===
                    true
            ) {

                return;
            }


            if (
                Date.now() <
                state.inputLockedUntil
            ) {

                return;
            }


            // ------------------------------------------
            // จุดนี้ถูกขุดแล้ว
            // ------------------------------------------

            if (
                state.usedZones.includes(
                    zoneIndex
                )
            ) {

                return;
            }


            // ==================================================
            // MARK ZONE USED
            // ==================================================

            state.usedZones.push(
                zoneIndex
            );


            state.inputLockedUntil =
                Date.now() + 180;


            // ซ่อนจุดที่ขุดแล้ว
            runtimeScene
                .getObjects(
                    "Zone_Dig" +
                    zoneIndex
                )
                .forEach(obj => {

                    obj.hide(
                        true
                    );
                });


            // ==================================================
            // PROGRESS
            // ==================================================

            state.digProgress =
                Math.min(
                    100,
                    state.usedZones.length *
                    20
                );


            runtimeScene
                .getVariables()
                .get("DigProgress")
                .setNumber(
                    state.digProgress
                );


            setText(
                "Txt_HarvestProgress",

                "ขุดแล้ว " +
                state.digProgress +
                "%"
            );


            // ==================================================
            // FEEDBACK DURING DIG
            // ==================================================

            if (
                state.digProgress < 100
            ) {

                setText(
                    "Txt_HarvestFeedback",

                    "ขุดดินออกแล้ว " +
                    state.usedZones.length +
                    " / 5 จุด"
                );
            }


            // ==================================================
            // SOIL STAGE
            // ==================================================

            let stage =
                0;


            if (
                state.digProgress >= 80
            ) {

                stage =
                    3;

            } else if (
                state.digProgress >= 60
            ) {

                stage =
                    2;

            } else if (
                state.digProgress >= 20
            ) {

                stage =
                    1;
            }


            const soil =
                getObj(
                    "Spr_DigSoil"
                );


            if (
                soil &&
                typeof soil.setAnimation ===
                    "function"
            ) {

                soil.setAnimation(
                    stage
                );
            }


            // ==================================================
            // COMPLETE DIGGING
            // ==================================================

            if (
                state.digProgress >= 100
            ) {

                state.diggingComplete =
                    true;


                runtimeScene
                    .getVariables()
                    .get("HarvestComplete")
                    .setNumber(1);


                // ------------------------------------------
                // HIDE ALL DIG ZONES
                // ------------------------------------------

                for (
                    let i = 1;
                    i <= 5;
                    i++
                ) {

                    hide(
                        "Zone_Dig" + i,
                        true
                    );
                }


                // ------------------------------------------
                // SHOW COLLECTABLE PART
                //
                // ใช้ object เดิมไว้ก่อน
                // เพื่อ compatibility กับ Event drag
                // ------------------------------------------

                hide(
                    "Spr_GingerRhizomeHarvested",
                    false
                );


                // ------------------------------------------
                // DYNAMIC TEXT
                // ------------------------------------------

                setText(
                    "Txt_HarvestInstruction",

                    "พบ" +
                    state.partNameTh +
                    "แล้ว\n" +

                    "ลาก" +
                    state.partNameTh +
                    "ไปใส่ตะกร้า"
                );


                setText(
                    "Txt_HarvestFeedback",
                    "ขุดสำเร็จ"
                );


                console.log(
                    "S05A DIG COMPLETE:",
                    {
                        herb:
                            state.herbId,

                        part:
                            state.partId
                    }
                );
            }
        };


    // ==================================================
    // COLLECT FUNCTION
    // ==================================================

    globalThis.MorYaHarvestCollect =
        function(runtimeScene) {

            const state =
                globalThis
                    .MorYaHarvestState;


            if (
                !state ||
                state.diggingComplete !==
                    true ||
                state.partCollected ===
                    true
            ) {

                return;
            }


            // ==================================================
            // COLLECT STATE
            // ==================================================

            state.partCollected =
                true;


            // compatibility
            state.rhizomeCollected =
                true;


            runtimeScene
                .getVariables()
                .get("RhizomeCollected")
                .setNumber(1);


            // ==================================================
            // SAVE RESULT
            // ==================================================

            session.s05_harvest_completed =
                true;


            session.s05_harvest_mode =
                "DIG";


            session.s05_harvest_duration_ms =
                Date.now() -
                state.startedAt;


            // ==================================================
            // SAVE INTO BASKET SESSION
            // ==================================================

            session.s05_basket_herb_id =
                state.herbId;


            session.s05_basket_herb_name_th =
                state.herbNameTh;


            session.s05_basket_part_id =
                state.partId;


            session.s05_basket_part_name_th =
                state.partNameTh;


            // ==================================================
            // UI AFTER COLLECTION
            // ==================================================

            hide(
                "Spr_GingerRhizomeHarvested",
                true
            );


            setText(
                "Txt_HarvestFeedback",

                "เก็บ" +
                state.partNameTh +
                "ลงตะกร้าแล้ว"
            );


            setText(
                "Txt_HarvestInstruction",

                "เก็บส่วนใต้ดินสำเร็จ\n" +

                state.herbNameTh +
                " — " +
                state.partNameTh
            );


            hide(
                "Btn_HarvestContinue",
                false
            );


            console.log(
                "S05A HARVEST COMPLETE:",
                {
                    herb:
                        state.herbId,

                    herbName:
                        state.herbNameTh,

                    part:
                        state.partId,

                    partName:
                        state.partNameTh,

                    mode:
                        state.mode,

                    duration:
                        session
                            .s05_harvest_duration_ms
                }
            );
        };


    // ==================================================
    // READY
    // ==================================================

    console.log(
        "S05A GENERIC UNDERGROUND HARVEST READY:",
        {
            herb:
                state.herbId,

            part:
                state.partId,

            visual:
                state.partId === "ROOT"
                    ? "ROOT"
                    : state.partId === "RHIZOME"
                        ? "RHIZOME"
                        : "FALLBACK"
        }
    );


} catch (error) {

    console.error(
        "S05A DIG INIT ERROR:",
        error
    );
}
};
gdjs.S05A_95HarvestMinigameCode.eventsList0 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0x94c6e0(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig1Objects1Objects = Hashtable.newFrom({"Zone_Dig1": gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0xe59ff8 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaHarvestDig(
    runtimeScene,
    1
);
};
gdjs.S05A_95HarvestMinigameCode.eventsList1 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0xe59ff8(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig2Objects1Objects = Hashtable.newFrom({"Zone_Dig2": gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0x14b9e08 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaHarvestDig(
    runtimeScene,
    2
);
};
gdjs.S05A_95HarvestMinigameCode.eventsList2 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0x14b9e08(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig3Objects1Objects = Hashtable.newFrom({"Zone_Dig3": gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0x1d12d18 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaHarvestDig(
    runtimeScene,
    3
);
};
gdjs.S05A_95HarvestMinigameCode.eventsList3 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0x1d12d18(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig4Objects1Objects = Hashtable.newFrom({"Zone_Dig4": gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0xe33de0 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaHarvestDig(
    runtimeScene,
    4
);
};
gdjs.S05A_95HarvestMinigameCode.eventsList4 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0xe33de0(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig5Objects1Objects = Hashtable.newFrom({"Zone_Dig5": gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0xb0c960 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaHarvestDig(
    runtimeScene,
    5
);
};
gdjs.S05A_95HarvestMinigameCode.eventsList5 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0xb0c960(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDSpr_95959595GingerRhizomeHarvestedObjects1Objects = Hashtable.newFrom({"Spr_GingerRhizomeHarvested": gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects1});
gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDSpr_95959595BasketObjects1Objects = Hashtable.newFrom({"Spr_Basket": gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0xac15a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
globalThis.MorYaHarvestCollect(
    runtimeScene
);
};
gdjs.S05A_95HarvestMinigameCode.eventsList6 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0xac15a0(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDBtn_95959595HarvestContinueObjects1Objects = Hashtable.newFrom({"Btn_HarvestContinue": gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects1});
gdjs.S05A_95HarvestMinigameCode.userFunc0x15e5388 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S05A - HARVEST COMPLETE -> RETURN TO GARDEN
// ======================================================

try {

    const state =
        globalThis.MorYaHarvestState;


    const session =
        globalThis.MorYaCaseSession;


    if (
        !state ||
        !session
    ) {

        console.error(
            "Harvest Continue: state/session missing"
        );

        return;
    }


    // ==================================================
    // MUST HAVE COLLECTED THE HERB
    // ==================================================

    if (
        state.rhizomeCollected !== true
    ) {

        console.warn(
            "Harvest Continue: herb not collected yet"
        );

        return;
    }


    // ==================================================
    // SAVE RETURN STATE
    // ==================================================

    session.s05_harvest_completed =
        true;


    session.s05_harvest_returned =
        true;


    session.s05_harvest_completed_at =
        Date.now();


    session.next_care_phase =
        "INTERVENTION_SELECTION";


    console.log(
        "HARVEST -> RETURN TO S05:",
        {
            herb:
                session
                    .s05_basket_herb_id,

            part:
                session
                    .s05_basket_part_id
        }
    );


    // ==================================================
    // RETURN TO HERBAL GARDEN
    // ==================================================

    gdjs.evtTools.runtimeScene
        .replaceScene(
            runtimeScene,
            "S05_Intervention",
            false
        );


} catch (error) {

    console.error(
        "Harvest Continue Error:",
        error
    );
}
};
gdjs.S05A_95HarvestMinigameCode.eventsList7 = function(runtimeScene) {

{


gdjs.S05A_95HarvestMinigameCode.userFunc0x15e5388(runtimeScene);

}


};gdjs.S05A_95HarvestMinigameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Dig1"), gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spr_DigTool"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1);
/* Reuse gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1 */
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setX((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1[0].getCenterXInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("Tip")));
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setY((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1[0].getCenterYInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("Tip")));
}
}

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Dig2"), gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spr_DigTool"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1);
/* Reuse gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1 */
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setX((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1[0].getCenterXInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("Tip")));
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setY((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1[0].getCenterYInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("Tip")));
}
}

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Dig3"), gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spr_DigTool"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1);
/* Reuse gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1 */
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setX((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1[0].getCenterXInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("Tip")));
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setY((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1[0].getCenterYInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("Tip")));
}
}

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Dig4"), gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spr_DigTool"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1);
/* Reuse gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1 */
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setX((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1[0].getCenterXInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("Tip")));
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setY((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1[0].getCenterYInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("Tip")));
}
}

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zone_Dig5"), gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDZone_95959595Dig5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spr_DigTool"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1);
/* Reuse gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1 */
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setX((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1[0].getCenterXInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointX("Tip")));
}
}
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].setY((gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("")) + (( gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1.length === 0 ) ? 0 :gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1[0].getCenterYInScene()) - (gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1[i].getPointY("Tip")));
}
}

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bar_HarvestProgress"), gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects1);
{for(var i = 0, len = gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects1.length ;i < len;++i) {
    gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spr_Basket"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spr_GingerRhizomeHarvested"), gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDSpr_95959595GingerRhizomeHarvestedObjects1Objects, gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDSpr_95959595BasketObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_HarvestContinue"), gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S05A_95HarvestMinigameCode.mapOfGDgdjs_9546S05A_959595HarvestMinigameCode_9546GDBtn_95959595HarvestContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S05A_95HarvestMinigameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.S05A_95HarvestMinigameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S05A_95HarvestMinigameCode.GDBG_9595HarvestDigObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBG_9595HarvestDigObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerPlantDigObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerPlantDigObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigSoilObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigSoilObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestTitleObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestTitleObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestInstructionObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestInstructionObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestProgressObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestProgressObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestFeedbackObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestFeedbackObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDNewSpriteObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDNewSpriteObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595BasketDropObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595BasketDropObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRootObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRootObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRhizomeObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRhizomeObjects2.length = 0;

gdjs.S05A_95HarvestMinigameCode.eventsList8(runtimeScene);
gdjs.S05A_95HarvestMinigameCode.GDBG_9595HarvestDigObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBG_9595HarvestDigObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerPlantDigObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerPlantDigObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigSoilObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigSoilObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595DigToolObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595GingerRhizomeHarvestedObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595BasketObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig1Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig2Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig3Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig4Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595Dig5Objects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBar_9595HarvestProgressObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDBtn_9595HarvestContinueObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestTitleObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestTitleObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestInstructionObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestInstructionObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestProgressObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestProgressObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestFeedbackObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDTxt_9595HarvestFeedbackObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDNewSpriteObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDNewSpriteObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595BasketDropObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDZone_9595BasketDropObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRootObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRootObjects2.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRhizomeObjects1.length = 0;
gdjs.S05A_95HarvestMinigameCode.GDSpr_9595UndergroundPlantRhizomeObjects2.length = 0;


return;

}

gdjs['S05A_95HarvestMinigameCode'] = gdjs.S05A_95HarvestMinigameCode;
