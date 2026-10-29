gdjs.S06_95FoodPreparationCode = {};
gdjs.S06_95FoodPreparationCode.localVariables = [];
gdjs.S06_95FoodPreparationCode.idToCallbackMap = new Map();
gdjs.S06_95FoodPreparationCode.GDBG_9595S06_9595FoodPrep_9595MainObjects1= [];
gdjs.S06_95FoodPreparationCode.GDBG_9595S06_9595FoodPrep_9595MainObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595WashBowlObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595WashBowlObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CuttingBoardObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CuttingBoardObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595KnifeObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595KnifeObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595IngredientBowlObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595IngredientBowlObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CookingPotObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CookingPotObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595SpoonObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595SpoonObjects2= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595ServingBowlObjects1= [];
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595ServingBowlObjects2= [];
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595IngredientObjects1= [];
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595IngredientObjects2= [];
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595FoodResultObjects1= [];
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595FoodResultObjects2= [];
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SteamObjects1= [];
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SteamObjects2= [];
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SuccessObjects1= [];
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SuccessObjects2= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595TitleObjects1= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595TitleObjects2= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595InstructionObjects1= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595InstructionObjects2= [];
gdjs.S06_95FoodPreparationCode.GDNewSpriteObjects1= [];
gdjs.S06_95FoodPreparationCode.GDNewSpriteObjects2= [];
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595StepObjects1= [];
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595StepObjects2= [];
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595SelectedIngredientObjects1= [];
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595SelectedIngredientObjects2= [];
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595BackObjects1= [];
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595BackObjects2= [];
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595ContinueObjects1= [];
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595ContinueObjects2= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595StepObjects1= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595StepObjects2= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595SelectedIngredientObjects1= [];
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595SelectedIngredientObjects2= [];
gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects1= [];
gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects2= [];
gdjs.S06_95FoodPreparationCode.GDZone_9595S06_9595TimingTargetObjects1= [];
gdjs.S06_95FoodPreparationCode.GDZone_9595S06_9595TimingTargetObjects2= [];


gdjs.S06_95FoodPreparationCode.userFunc0x14b9e08 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S06_95FoodPreparationCode.eventsList0 = function(runtimeScene) {

{


gdjs.S06_95FoodPreparationCode.userFunc0x14b9e08(runtimeScene);

}


};gdjs.S06_95FoodPreparationCode.eventsList1 = function(runtimeScene) {

};gdjs.S06_95FoodPreparationCode.userFunc0x1141f68 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06_FoodPreparation
// 00_VALIDATE_FOOD_ENTRY
//
// Safety guard before food minigame.
//
// VALID FOOD:
// - Ginger + Rhizome
// - Holy Basil + Leaf
//
// Anything else:
// -> skip food minigame
// -> S06_Counselling
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
    // HELPERS
    // ==================================================

    const normalize =
        (value) => {

            return String(
                value || ""
            )
                .trim()
                .toUpperCase();
        };


    // ==================================================
    // READ CURRENT HERB + PART
    //
    // Priority:
    // selected -> basket -> harvest
    // ==================================================

    const herbId =
        normalize(
            session.selected_herb_id ||
            session.s05_basket_herb_id ||
            session.s05_harvest_herb_id
        );


    const herbNameTh =
        String(
            session.selected_herb_name_th ||
            session.s05_basket_herb_name_th ||
            session.s05_harvest_herb_name_th ||
            ""
        )
        .trim();


    const partId =
        normalize(
            session.selected_plant_part_id ||
            session.s05_basket_part_id ||
            session.s05_harvest_part_id
        );


    const partNameTh =
        String(
            session.selected_plant_part_name_th ||
            session.s05_basket_part_name_th ||
            session.s05_harvest_part_name_th ||
            ""
        )
        .trim();


    // ==================================================
    // VALID FOOD COMBINATIONS
    // ==================================================

    const isGingerRhizome =
        (
            herbId ===
                "HERB_GINGER" &&

            partId ===
                "RHIZOME"
        );


    const isHolyBasilLeaf =
        (
            herbId ===
                "HERB_HOLY_BASIL" &&

            partId ===
                "LEAF"
        );


    const validFood =
        (
            isGingerRhizome ||
            isHolyBasilLeaf
        );


    // ==================================================
    // SAVE SCENE VALIDATION VARIABLE
    // ==================================================

    runtimeScene
        .getVariables()
        .get(
            "S06_FoodEntryValid"
        )
        .setNumber(
            validFood
                ? 1
                : 0
        );


    // ==================================================
    // VALID
    //
    // Let normal food minigame continue.
    // ==================================================

    if (
        validFood ===
        true
    ) {

        session.s06_food_skipped =
            false;


        session.s06_food_skip_reason =
            "";


        console.log(
            "S06 FOOD ENTRY VALID:",
            {
                herb:
                    herbId,

                herbName:
                    herbNameTh,

                part:
                    partId,

                partName:
                    partNameTh
            }
        );


        return;
    }


    // ==================================================
    // INVALID / NOT RELEVANT
    //
    // Never allow player to remain trapped
    // in food minigame.
    // ==================================================

    session.s06_food_skipped =
        true;


    session.s06_food_completed =
        false;


    session.s06_food_skip_reason =
        "IRRELEVANT_HERB_PART_FOR_CASE";


    session.s06_food_skip_herb_id =
        herbId;


    session.s06_food_skip_herb_name_th =
        herbNameTh;


    session.s06_food_skip_part_id =
        partId;


    session.s06_food_skip_part_name_th =
        partNameTh;


    // ==================================================
    // GENERIC MINIGAME SKIP STATE
    // ==================================================

    session.s06_minigame_skipped =
        true;


    session.s06_minigame_skip_reason =
        "IRRELEVANT_HERB_PART_FOR_CASE";


    session.s06_minigame_skip_route =
        "FOOD";


    // ==================================================
    // INTERVENTION RESULT
    // ==================================================

    session.s06_intervention_outcome =
        "NOT_CASE_RELEVANT";


    session.s06_intervention_feedback_th =
        "สมุนไพรหรือส่วนพืชที่เลือกไม่สัมพันธ์กับการดูแลในเคสนี้";


    session.intervention_selection_score =
        0;


    session.s05_intervention_score =
        0;


    // ==================================================
    // NEXT PHASE
    // ==================================================

    session.next_intervention_phase =
        "COUNSELLING";


    session.next_care_phase =
        "COUNSELLING";


    // ==================================================
    // DEBUG
    // ==================================================

    console.log(
        "S06 FOOD ENTRY BLOCKED -> COUNSELLING:",
        {
            herb:
                herbId,

            herbName:
                herbNameTh,

            part:
                partId,

            partName:
                partNameTh,

            reason:
                session.s06_food_skip_reason
        }
    );


    // ==================================================
    // GO DIRECTLY TO COUNSELLING
    // ==================================================

    gdjs.evtTools.runtimeScene
        .replaceScene(
            runtimeScene,
            "S06_Counselling",
            false
        );


} catch (error) {

    console.error(
        "S06 FOOD ENTRY VALIDATION ERROR:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.eventsList2 = function(runtimeScene) {

{


gdjs.S06_95FoodPreparationCode.userFunc0x1141f68(runtimeScene);

}


};gdjs.S06_95FoodPreparationCode.eventsList3 = function(runtimeScene) {

};gdjs.S06_95FoodPreparationCode.userFunc0xe4faf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 - FOOD PREPARATION INITIALIZER
// VERSION: STABLE FOOD MINIGAME
//
// Supported Demo:
// 1) GINGER + RHIZOME + FOOD
// 2) HOLY BASIL + LEAF + FOOD
//
// Ingredient animations:
// 0 Ginger Whole
// 1 Ginger Washed
// 2 Ginger Sliced
// 3 Ginger Ready
//
// 4 Holy Basil Cluster
// 5 Holy Basil Washed
// 6 Holy Basil Picked Leaves
// 7 Holy Basil Ready
//
// Food Result animations:
// 0 Ginger Chicken
// 1 Holy Basil Pork
// ======================================================

try {

    // ==================================================
    // ONE-TIME GUARD
    // ป้องกัน Initializer ซ้ำ
    // ==================================================

    if (
        runtimeScene.__morYaS06Initialized === true
    ) {
        return;
    }


    const session =
        globalThis.MorYaCaseSession;


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

            if (!obj) {
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


    const hideObject =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(hidden);
                });
        };


    const setAnimationSafe =
        (name, animationIndex) => {

            const obj =
                getObj(name);

            if (!obj) {
                return;
            }

            if (
                typeof obj.setAnimation ===
                "function"
            ) {

                obj.setAnimation(
                    animationIndex
                );
            }
        };


    // ==================================================
    // SESSION CHECK
    // ==================================================

    if (!session) {

        setTextSafe(
            "Txt_S06_Step",
            "ไม่พบข้อมูลจากขั้นตอนก่อนหน้า"
        );

        console.error(
            "S06 INIT: MorYaCaseSession not found"
        );

        return;
    }


    // ==================================================
    // READ S05 DATA
    // ==================================================

    const herbId =
        String(
            session.selected_herb_id || ""
        );

    const herbName =
        String(
            session.selected_herb_name_th || ""
        );

    const partId =
        String(
            session.selected_plant_part_id || ""
        );

    const partName =
        String(
            session.selected_plant_part_name_th || ""
        );

    const route =
        String(
            session.selected_preparation_route || ""
        );


    // ==================================================
    // NORMALIZE
    // ==================================================

    const herbKey =
        (
            herbId +
            " " +
            herbName
        ).toUpperCase();


    const partKey =
        (
            partId +
            " " +
            partName
        ).toUpperCase();


    const routeKey =
        route.toUpperCase();


    const isGinger =
        herbKey.includes("GINGER") ||
        herbKey.includes("ขิง");


    const isHolyBasil =
        herbKey.includes("HOLY_BASIL") ||
        herbKey.includes("HOLY BASIL") ||
        herbKey.includes("BASIL") ||
        herbKey.includes("กะเพรา");


    const isRhizome =
        partKey.includes("RHIZOME") ||
        partKey.includes("เหง้า");


    const isLeaf =
        partKey.includes("LEAF") ||
        partKey.includes("ใบ");


    // ==================================================
    // STATE
    // ==================================================

    globalThis.MorYaS06State = {

        active:
            true,

        herbId:
            herbId,

        herbNameTh:
            herbName,

        partId:
            partId,

        partNameTh:
            partName,

        preparationRoute:
            routeKey,

        recipeId:
            "",

        phase:
            "ENTER",

        // ----------------------------------------------
        // WASH
        // ----------------------------------------------

        washCompleted:
            false,

        ingredientDragging:
            false,

        ingredientHomeX:
            null,

        ingredientHomeY:
            null,

        dragOffsetX:
            0,

        dragOffsetY:
            0,

        // ----------------------------------------------
        // PREPARATION
        // ----------------------------------------------

        preparationCompleted:
            false,

        prepareDragging:
            false,

        prepareHomeX:
            null,

        prepareHomeY:
            null,

        prepareOffsetX:
            0,

        prepareOffsetY:
            0,

        // Ginger cutting
        knifeDragging:
            false,

        knifeHomeX:
            null,

        knifeHomeY:
            null,

        knifeOffsetX:
            0,

        knifeOffsetY:
            0,

        cutCount:
            0,

        cutRegisteredForDrag:
            false,

        // Holy basil picking
        basilPickDragging:
            false,

        basilPickCount:
            0,

        // ----------------------------------------------
        // COOK
        // ----------------------------------------------

        cookingCompleted:
            false,

        cookIngredientDragging:
            false,

        cookIngredientHomeX:
            null,

        cookIngredientHomeY:
            null,

        cookDragOffsetX:
            0,

        cookDragOffsetY:
            0,

        cookStartedAt:
            0,

        // เร็วขึ้นจากเดิม 4500 ms
        cookDurationMs:
            1800,

        cookTargetStart:
            0,

        cookTargetEnd:
            0,

        cookTimingResolved:
            false,

        cookTimingValue:
            0,

        cookTimingGrade:
    "",

cookInputLockedUntil:
    0,

// ----------------------------------------------
// RESULT REVEAL
// ----------------------------------------------

resultRevealStartedAt:
    0,

resultRevealStage:
    0,

resultRevealGrade:
    "",

servingCompleted:
    false,

inputLockedUntil:
    Date.now() + 250    };


    const state =
        globalThis.MorYaS06State;


    // ==================================================
    // INITIAL UI
    // ==================================================

    setTextSafe(
        "Txt_S06_Title",
        "เตรียมอาหาร"
    );


    setTextSafe(
        "Txt_S06_Instruction",
        "เตรียมวัตถุดิบให้พร้อมก่อนนำไปประกอบอาหาร"
    );


    setTextSafe(
        "Txt_S06_SelectedIngredient",

        herbName +
        (
            partName
                ? " — " + partName
                : ""
        )
    );


    setTextSafe(
        "Txt_S06_Step",
        "ขั้นที่ 1: ล้างวัตถุดิบ"
    );


    // ==================================================
    // INITIAL VISIBILITY
    // ==================================================

    hideObject(
        "Spr_S06_FoodResult",
        true
    );

    hideObject(
        "FX_S06_Steam",
        true
    );

    hideObject(
        "FX_S06_Success",
        true
    );

    hideObject(
        "Btn_S06_Continue",
        true
    );

    hideObject(
    "Bar_S06_Timing",
    true
);

hideObject(
    "Zone_S06_TimingTarget",
    true
);


    // ขั้นล้างยังไม่ต้องเห็นมีด/ถ้วยเตรียม
    hideObject(
        "PROP_S06_Knife",
        true
    );

    hideObject(
        "PROP_S06_IngredientBowl",
        true
    );


    // ==================================================
    // ROUTE CHECK
    // ==================================================

    if (
        routeKey !== "FOOD"
    ) {

        state.active =
            false;

        state.phase =
            "INVALID_ROUTE";


        setTextSafe(
            "Txt_S06_Step",
            "เส้นทางนี้ไม่ใช่การเตรียมอาหาร"
        );


        runtimeScene.__morYaS06Initialized =
            true;


        console.warn(
            "S06 INVALID ROUTE:",
            routeKey
        );

        return;
    }


    // ==================================================
    // GINGER + RHIZOME
    // ==================================================

    if (
        isGinger &&
        isRhizome
    ) {

        state.recipeId =
            "GINGER_CHICKEN";

        state.phase =
            "WASH";


        setAnimationSafe(
            "Spr_S06_Ingredient",
            0
        );


        setAnimationSafe(
            "Spr_S06_FoodResult",
            0
        );


        setTextSafe(
            "Txt_S06_SelectedIngredient",
            "ขิง — เหง้า"
        );


        setTextSafe(
            "Txt_S06_Step",
            "ขั้นที่ 1: ล้างเหง้าขิง"
        );


        setTextSafe(
            "Txt_S06_Instruction",
            "ลากเหง้าขิงไปยังชามน้ำ"
        );


        runtimeScene.__morYaS06Initialized =
            true;


        console.log(
            "S06 READY:",
            {
                recipe:
                    "GINGER_CHICKEN",

                phase:
                    state.phase,

                animation:
                    0
            }
        );


        return;
    }


    // ==================================================
    // HOLY BASIL + LEAF
    // ==================================================

    if (
        isHolyBasil &&
        isLeaf
    ) {

        state.recipeId =
            "HOLY_BASIL_PORK";

        state.phase =
            "WASH";


        setAnimationSafe(
            "Spr_S06_Ingredient",
            4
        );


        setAnimationSafe(
            "Spr_S06_FoodResult",
            1
        );


        setTextSafe(
            "Txt_S06_SelectedIngredient",
            "กะเพรา — ใบ"
        );


        setTextSafe(
            "Txt_S06_Step",
            "ขั้นที่ 1: ล้างใบกะเพรา"
        );


        setTextSafe(
            "Txt_S06_Instruction",
            "ลากกะเพราไปยังชามน้ำ"
        );


        runtimeScene.__morYaS06Initialized =
            true;


        console.log(
            "S06 READY:",
            {
                recipe:
                    "HOLY_BASIL_PORK",

                phase:
                    state.phase,

                animation:
                    4
            }
        );


        return;
    }


    // ==================================================
    // NOT IMPLEMENTED
    // ==================================================

    state.active =
        false;

    state.phase =
        "NOT_IMPLEMENTED";


    setTextSafe(
        "Txt_S06_Step",
        "เส้นทางนี้ยังไม่เปิดในเวอร์ชันสาธิต"
    );


    setTextSafe(
        "Txt_S06_Instruction",

        "คุณเลือก " +
        herbName +
        (
            partName
                ? " — " + partName
                : ""
        ) +
        " สำหรับประกอบอาหาร"
    );


    runtimeScene.__morYaS06Initialized =
        true;


    console.log(
        "S06 NOT IMPLEMENTED:",
        {
            herbId,
            herbName,
            partId,
            partName,
            routeKey
        }
    );


} catch (error) {

    // ถ้า Initializer ทำไม่สำเร็จ
    // อนุญาตให้เริ่มใหม่ในการ Preview ครั้งถัดไป
    runtimeScene.__morYaS06Initialized =
        false;


    console.error(
        "S06 Initializer Error:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.eventsList4 = function(runtimeScene) {

{


gdjs.S06_95FoodPreparationCode.userFunc0xe4faf8(runtimeScene);

}


};gdjs.S06_95FoodPreparationCode.userFunc0xdc0e00 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 - WASH DRAG ENGINE
//
// Phase:
// WASH
//
// Gameplay:
// Drag ingredient -> Wash Bowl
// ======================================================

try {

    const state =
        globalThis.MorYaS06State;


    // ==================================================
    // STATE GUARD
    // ==================================================

    if (!state) {
        return;
    }


    if (
        state.active !== true
    ) {
        return;
    }


    if (
        state.phase !== "WASH"
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
    // OBJECT HELPERS
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

            if (!obj) {
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


    const ingredient =
        getObj(
            "Spr_S06_Ingredient"
        );


    const washBowl =
        getObj(
            "PROP_S06_WashBowl"
        );


    if (
        !ingredient ||
        !washBowl
    ) {

        return;
    }


    // ==================================================
    // INITIAL DRAG DATA
    // เก็บตำแหน่งเดิมของวัตถุดิบครั้งแรก
    // ==================================================

    if (
        typeof state.ingredientHomeX !==
        "number"
    ) {

        state.ingredientHomeX =
            ingredient.getX();

        state.ingredientHomeY =
            ingredient.getY();

        state.dragOffsetX =
            0;

        state.dragOffsetY =
            0;
    }


    // ==================================================
    // CURSOR
    // ==================================================

    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "WORLD",
            0
        );


    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "WORLD",
            0
        );


    // ==================================================
    // OBJECT BOUNDS
    // ==================================================

    const getBounds =
        (obj) => {

            const x =
                typeof obj.getDrawableX ===
                    "function"
                    ? obj.getDrawableX()
                    : obj.getX();


            const y =
                typeof obj.getDrawableY ===
                    "function"
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
        (x, y, bounds, padding = 0) => {

            return (

                x >=
                    bounds.left -
                    padding &&

                x <=
                    bounds.right +
                    padding &&

                y >=
                    bounds.top -
                    padding &&

                y <=
                    bounds.bottom +
                    padding
            );
        };


    const ingredientBounds =
        getBounds(
            ingredient
        );


    // ==================================================
    // INPUT STATE
    // ==================================================

    const mousePressed =
        gdjs.evtTools.input
            .isMouseButtonPressed(
                runtimeScene,
                "Left"
            );


    const mouseReleased =
        gdjs.evtTools.input
            .isMouseButtonReleased(
                runtimeScene,
                "Left"
            );


    // ==================================================
    // START DRAG
    // ==================================================

    if (
        state.ingredientDragging !== true &&
        mousePressed === true &&
        pointInside(
            mouseX,
            mouseY,
            ingredientBounds,
            12
        )
    ) {

        state.ingredientDragging =
            true;


        // ----------------------------------------------
        // เก็บ offset เพื่อไม่ให้วัตถุดิบกระโดด
        // ไปเอาจุดกลางตรงเมาส์ทันที
        // ----------------------------------------------

        state.dragOffsetX =
            mouseX -
            ingredient.getX();


        state.dragOffsetY =
            mouseY -
            ingredient.getY();


        console.log(
            "S06 DRAG START"
        );
    }


    // ==================================================
    // DRAGGING
    // ==================================================

    if (
        state.ingredientDragging === true &&
        mousePressed === true
    ) {

        ingredient.setPosition(

            mouseX -
                state.dragOffsetX,

            mouseY -
                state.dragOffsetY
        );


        return;
    }


    // ==================================================
    // DROP
    // ==================================================

    if (
        state.ingredientDragging === true &&
        mouseReleased === true
    ) {

        state.ingredientDragging =
            false;


        // ----------------------------------------------
        // ใช้จุดกึ่งกลางวัตถุดิบตรวจว่า
        // อยู่ภายใน Wash Bowl หรือไม่
        // ----------------------------------------------

        const ingredientCenterX =
            ingredient.getCenterXInScene();


        const ingredientCenterY =
            ingredient.getCenterYInScene();


        const bowlBounds =
            getBounds(
                washBowl
            );


        const droppedInWashBowl =
            pointInside(
                ingredientCenterX,
                ingredientCenterY,
                bowlBounds,
                25
            );


        // ==================================================
        // SUCCESSFUL WASH
        // ==================================================

        if (
            droppedInWashBowl === true
        ) {

            state.washCompleted =
                true;

            state.phase =
                "PREPARE";

            state.inputLockedUntil =
                Date.now() + 350;


            // ----------------------------------------------
            // GINGER
            // Animation 1 = Washed
            // ----------------------------------------------

            if (
                state.recipeId ===
                "GINGER_CHICKEN"
            ) {

                ingredient.setAnimation(
                    1
                );


                setTextSafe(
                    "Txt_S06_Step",
                    "ขั้นที่ 2: นำขิงที่ล้างแล้วไปเตรียมบนเขียง"
                );


                setTextSafe(
                    "Txt_S06_Instruction",
                    "ลากขิงที่ล้างแล้วไปวางบนเขียง"
                );
            }


            // ----------------------------------------------
            // HOLY BASIL
            // Animation 5 = Washed
            // ----------------------------------------------

            else if (
                state.recipeId ===
                "HOLY_BASIL_PORK"
            ) {

                ingredient.setAnimation(
                    5
                );


                setTextSafe(
                    "Txt_S06_Step",
                    "ขั้นที่ 2: เตรียมใบกะเพรา"
                );


                setTextSafe(
                    "Txt_S06_Instruction",
                    "ลากกะเพราที่ล้างแล้วไปวางบนเขียง"
                );
            }


            // ----------------------------------------------
            // วางวัตถุดิบไว้เหนือชามล้างชั่วคราว
            // เพื่อให้เห็นว่าล้างสำเร็จ
            // ----------------------------------------------

            ingredient.setPosition(

                washBowl.getX() +
                (
                    washBowl.getWidth() -
                    ingredient.getWidth()
                ) / 2,

                washBowl.getY() -
                ingredient.getHeight() *
                    0.25
            );


            console.log(
                "S06 WASH COMPLETE:",
                {
                    recipe:
                        state.recipeId,

                    nextPhase:
                        state.phase
                }
            );


            return;
        }


        // ==================================================
        // FAILED DROP
        // กลับตำแหน่งเดิม
        // ==================================================

        ingredient.setPosition(

            state.ingredientHomeX,

            state.ingredientHomeY
        );


        setTextSafe(
            "Txt_S06_Instruction",
            "ลองลากวัตถุดิบไปยังชามน้ำ"
        );


        console.log(
            "S06 WASH DROP MISSED"
        );


        return;
    }


} catch (error) {

    console.error(
        "S06 Wash Drag Engine Error:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.userFunc0xe77cb0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 - INGREDIENT PREPARATION ENGINE
//
// PREPARE:
// washed ingredient -> cutting board
//
// GINGER:
// drag knife through ginger 3 times
//
// HOLY BASIL:
// pluck leaves into ingredient bowl 4 times
// ======================================================

try {

    const state =
        globalThis.MorYaS06State;


    // ==================================================
    // GUARD
    // ==================================================

    if (!state) {
        return;
    }


    if (
        state.active !== true
    ) {
        return;
    }


    const allowedPhases = [
        "PREPARE",
        "GINGER_CUT",
        "BASIL_PICK"
    ];


    if (
        !allowedPhases.includes(
            state.phase
        )
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

            if (!obj) {
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


    const setHidden =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(hidden);
                });
        };


    const getBounds =
        (obj) => {

            const x =
                typeof obj.getDrawableX ===
                    "function"
                    ? obj.getDrawableX()
                    : obj.getX();


            const y =
                typeof obj.getDrawableY ===
                    "function"
                    ? obj.getDrawableY()
                    : obj.getY();


            return {

                left:
                    x,

                top:
                    y,

                right:
                    x + obj.getWidth(),

                bottom:
                    y + obj.getHeight()
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

                x >=
                    bounds.left -
                    padding &&

                x <=
                    bounds.right +
                    padding &&

                y >=
                    bounds.top -
                    padding &&

                y <=
                    bounds.bottom +
                    padding
            );
        };


    const centerObjectOn =
        (
            obj,
            target
        ) => {

            obj.setPosition(

                target.getX() +
                (
                    target.getWidth() -
                    obj.getWidth()
                ) / 2,

                target.getY() +
                (
                    target.getHeight() -
                    obj.getHeight()
                ) / 2
            );
        };


    // ==================================================
    // OBJECTS
    // ==================================================

    const ingredient =
        getObj(
            "Spr_S06_Ingredient"
        );


    const cuttingBoard =
        getObj(
            "PROP_S06_CuttingBoard"
        );


    const knife =
        getObj(
            "PROP_S06_Knife"
        );


    const ingredientBowl =
        getObj(
            "PROP_S06_IngredientBowl"
        );


    if (
        !ingredient ||
        !cuttingBoard
    ) {
        return;
    }


    // ==================================================
    // CURSOR
    // ==================================================

    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "WORLD",
            0
        );


    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "WORLD",
            0
        );


    const mousePressed =
        gdjs.evtTools.input
            .isMouseButtonPressed(
                runtimeScene,
                "Left"
            );


    const mouseReleased =
        gdjs.evtTools.input
            .isMouseButtonReleased(
                runtimeScene,
                "Left"
            );


    // ==================================================
    // PHASE 1
    // PREPARE
    //
    // Drag washed ingredient -> cutting board
    // ==================================================

    if (
        state.phase === "PREPARE"
    ) {

        // ----------------------------------------------
        // PROP VISIBILITY
        // ----------------------------------------------

        if (
            state.recipeId ===
            "GINGER_CHICKEN"
        ) {

            setHidden(
                "PROP_S06_Knife",
                false
            );

            setHidden(
                "PROP_S06_IngredientBowl",
                true
            );
        }


        else if (
            state.recipeId ===
            "HOLY_BASIL_PORK"
        ) {

            setHidden(
                "PROP_S06_Knife",
                true
            );

            setHidden(
                "PROP_S06_IngredientBowl",
                false
            );
        }


        // ----------------------------------------------
        // Remember washed ingredient position
        // ----------------------------------------------

        if (
            state.prepareHomeX === null
        ) {

            state.prepareHomeX =
                ingredient.getX();

            state.prepareHomeY =
                ingredient.getY();
        }


        const ingredientBounds =
            getBounds(
                ingredient
            );


        // ----------------------------------------------
        // START DRAG
        // ----------------------------------------------

        if (
            state.prepareDragging !== true &&
            mousePressed === true &&
            pointInside(
                mouseX,
                mouseY,
                ingredientBounds,
                12
            )
        ) {

            state.prepareDragging =
                true;


            state.prepareOffsetX =
                mouseX -
                ingredient.getX();


            state.prepareOffsetY =
                mouseY -
                ingredient.getY();
        }


        // ----------------------------------------------
        // DRAGGING
        // ----------------------------------------------

        if (
            state.prepareDragging === true &&
            mousePressed === true
        ) {

            ingredient.setPosition(

                mouseX -
                state.prepareOffsetX,

                mouseY -
                state.prepareOffsetY
            );


            return;
        }


        // ----------------------------------------------
        // DROP
        // ----------------------------------------------

        if (
            state.prepareDragging === true &&
            mouseReleased === true
        ) {

            state.prepareDragging =
                false;


            const boardBounds =
                getBounds(
                    cuttingBoard
                );


            const centerX =
                ingredient.getCenterXInScene();


            const centerY =
                ingredient.getCenterYInScene();


            const onBoard =
                pointInside(
                    centerX,
                    centerY,
                    boardBounds,
                    30
                );


            // ==========================================
            // SUCCESS
            // ==========================================

            if (onBoard) {

                centerObjectOn(
                    ingredient,
                    cuttingBoard
                );


                // --------------------------------------
                // GINGER
                // --------------------------------------

                if (
                    state.recipeId ===
                    "GINGER_CHICKEN"
                ) {

                    state.phase =
                        "GINGER_CUT";

                    state.cutCount =
                        0;

                    state.inputLockedUntil =
                        Date.now() + 250;


                    setTextSafe(
                        "Txt_S06_Step",
                        "ขั้นที่ 2: หั่นขิง 0/3"
                    );


                    setTextSafe(
                        "Txt_S06_Instruction",
                        "ลากมีดผ่านขิงให้ครบ 3 ครั้ง"
                    );


                    console.log(
                        "S06 -> GINGER CUTTING"
                    );
                }


                // --------------------------------------
                // HOLY BASIL
                // --------------------------------------

                else if (
                    state.recipeId ===
                    "HOLY_BASIL_PORK"
                ) {

                    state.phase =
                        "BASIL_PICK";

                    state.basilPickCount =
                        0;

                    state.inputLockedUntil =
                        Date.now() + 250;


                    setTextSafe(
                        "Txt_S06_Step",
                        "ขั้นที่ 2: เด็ดใบกะเพรา 0/4"
                    );


                    setTextSafe(
                        "Txt_S06_Instruction",
                        "ลากใบกะเพราจากกิ่งไปใส่ถ้วยให้ครบ 4 ครั้ง"
                    );


                    console.log(
                        "S06 -> BASIL PICKING"
                    );
                }


                return;
            }


            // ==========================================
            // MISS -> RETURN
            // ==========================================

            ingredient.setPosition(

                state.prepareHomeX,

                state.prepareHomeY
            );


            setTextSafe(
                "Txt_S06_Instruction",
                "ลองนำวัตถุดิบไปวางบนเขียง"
            );


            return;
        }


        return;
    }


    // ==================================================
    // PHASE 2A
    // GINGER CUT
    // ==================================================

    if (
        state.phase === "GINGER_CUT"
    ) {

        if (!knife) {
            return;
        }


        setHidden(
            "PROP_S06_Knife",
            false
        );


        // ----------------------------------------------
        // Save knife home position once
        // ----------------------------------------------

        if (
            state.knifeHomeX === null
        ) {

            state.knifeHomeX =
                knife.getX();

            state.knifeHomeY =
                knife.getY();
        }


        const knifeBounds =
            getBounds(
                knife
            );


        // ----------------------------------------------
        // START KNIFE DRAG
        // ----------------------------------------------

        if (
            state.knifeDragging !== true &&
            mousePressed === true &&
            pointInside(
                mouseX,
                mouseY,
                knifeBounds,
                15
            )
        ) {

            state.knifeDragging =
                true;

            state.cutRegisteredForDrag =
                false;


            state.knifeDragStartX =
                mouseX;

            state.knifeDragStartY =
                mouseY;


            state.knifeOffsetX =
                mouseX -
                knife.getX();


            state.knifeOffsetY =
                mouseY -
                knife.getY();
        }


        // ----------------------------------------------
        // KNIFE DRAGGING
        // ----------------------------------------------

        if (
            state.knifeDragging === true &&
            mousePressed === true
        ) {

            knife.setPosition(

                mouseX -
                state.knifeOffsetX,

                mouseY -
                state.knifeOffsetY
            );


            // ------------------------------------------
            // Has knife crossed ginger?
            // ------------------------------------------

            const ingredientBounds =
                getBounds(
                    ingredient
                );


            const knifeCenterX =
                knife.getCenterXInScene();


            const knifeCenterY =
                knife.getCenterYInScene();


            const knifeOverGinger =
                pointInside(
                    knifeCenterX,
                    knifeCenterY,
                    ingredientBounds,
                    15
                );


            const deltaX =
                mouseX -
                state.knifeDragStartX;


            const deltaY =
                mouseY -
                state.knifeDragStartY;


            const travelDistance =
                Math.sqrt(
                    deltaX * deltaX +
                    deltaY * deltaY
                );


            if (
                knifeOverGinger === true &&
                travelDistance >= 45 &&
                state.cutRegisteredForDrag !== true
            ) {

                state.cutRegisteredForDrag =
                    true;


                state.cutCount =
                    Math.min(
                        3,
                        state.cutCount + 1
                    );


                setTextSafe(
                    "Txt_S06_Step",

                    "ขั้นที่ 2: หั่นขิง " +
                    state.cutCount +
                    "/3"
                );


                console.log(
                    "GINGER CUT:",
                    state.cutCount
                );
            }


            return;
        }


        // ----------------------------------------------
        // RELEASE KNIFE
        // ----------------------------------------------

        if (
            state.knifeDragging === true &&
            mouseReleased === true
        ) {

            state.knifeDragging =
                false;


            knife.setPosition(

                state.knifeHomeX,

                state.knifeHomeY
            );


            // ==========================================
            // CUTTING COMPLETE
            // ==========================================

            if (
                state.cutCount >= 3
            ) {

                ingredient.setAnimation(
                    2
                );


                state.preparationCompleted =
                    true;


                state.phase =
                    "COOK_READY";


                state.inputLockedUntil =
                    Date.now() + 300;


                setHidden(
                    "PROP_S06_Knife",
                    true
                );


                setTextSafe(
                    "Txt_S06_Step",
                    "ขั้นที่ 3: ขิงพร้อมปรุง"
                );


                setTextSafe(
                    "Txt_S06_Instruction",
                    "ขิงถูกหั่นเรียบร้อยแล้ว เตรียมนำลงหม้อ"
                );


                console.log(
                    "S06 GINGER PREPARATION COMPLETE"
                );
            }


            return;
        }


        return;
    }


    // ==================================================
    // PHASE 2B
    // HOLY BASIL PICKING
    //
    // Gesture:
    // Start on basil -> release inside bowl
    // ==================================================

    if (
        state.phase === "BASIL_PICK"
    ) {

        if (!ingredientBowl) {
            return;
        }


        setHidden(
            "PROP_S06_Knife",
            true
        );


        setHidden(
            "PROP_S06_IngredientBowl",
            false
        );


        const ingredientBounds =
            getBounds(
                ingredient
            );


        // ----------------------------------------------
        // START PICK GESTURE
        // ----------------------------------------------

        if (
            state.basilPickDragging !== true &&
            mousePressed === true &&
            pointInside(
                mouseX,
                mouseY,
                ingredientBounds,
                15
            )
        ) {

            state.basilPickDragging =
                true;


            state.basilPickStartX =
                mouseX;

            state.basilPickStartY =
                mouseY;


            return;
        }


        // ----------------------------------------------
        // RELEASE INTO BOWL
        // ----------------------------------------------

        if (
            state.basilPickDragging === true &&
            mouseReleased === true
        ) {

            state.basilPickDragging =
                false;


            const bowlBounds =
                getBounds(
                    ingredientBowl
                );


            const releasedInBowl =
                pointInside(
                    mouseX,
                    mouseY,
                    bowlBounds,
                    25
                );


            const dx =
                mouseX -
                state.basilPickStartX;


            const dy =
                mouseY -
                state.basilPickStartY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            // ==========================================
            // SUCCESSFUL PICK
            // ==========================================

            if (
                releasedInBowl === true &&
                distance >= 50
            ) {

                state.basilPickCount =
                    Math.min(
                        4,
                        state.basilPickCount + 1
                    );


                setTextSafe(
                    "Txt_S06_Step",

                    "ขั้นที่ 2: เด็ดใบกะเพรา " +
                    state.basilPickCount +
                    "/4"
                );


                console.log(
                    "BASIL PICK:",
                    state.basilPickCount
                );


                // ======================================
                // PICKING COMPLETE
                // ======================================

                if (
                    state.basilPickCount >= 4
                ) {

                    ingredient.setAnimation(
                        6
                    );


                    centerObjectOn(
                        ingredient,
                        ingredientBowl
                    );


                    state.preparationCompleted =
                        true;


                    state.phase =
                        "COOK_READY";


                    state.inputLockedUntil =
                        Date.now() + 300;


                    setTextSafe(
                        "Txt_S06_Step",
                        "ขั้นที่ 3: ใบกะเพราพร้อมปรุง"
                    );


                    setTextSafe(
                        "Txt_S06_Instruction",
                        "เด็ดใบกะเพราเรียบร้อยแล้ว เตรียมนำไปปรุง"
                    );


                    console.log(
                        "S06 BASIL PREPARATION COMPLETE"
                    );
                }


                return;
            }


            // ==========================================
            // BAD GESTURE
            // ==========================================

            setTextSafe(
                "Txt_S06_Instruction",
                "เริ่มลากจากกะเพรา แล้วปล่อยลงในถ้วย"
            );


            return;
        }


        return;
    }


} catch (error) {

    console.error(
        "S06 Ingredient Preparation Engine Error:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.userFunc0x1807de8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 - COOKING TIMING ENGINE
// RESOURCE BAR + RESULT REVEAL HANDOFF
//
// COOK_READY
// → drag prepared ingredient into pot
//
// COOK_TIMING
// → bar runs 0-100
// → click timing bar
//
// RESULT_REVEAL
// → handled by separate Result Reveal Engine
// ======================================================

try {

    const state =
        globalThis.MorYaS06State;

    const session =
        globalThis.MorYaCaseSession;


    // ==================================================
    // GUARD
    // ==================================================

    if (!state) {
        return;
    }


    if (
        state.active !== true
    ) {
        return;
    }


    if (
        state.phase !== "COOK_READY" &&
        state.phase !== "COOK_TIMING"
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

            if (!obj) {
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


    const setHidden =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(hidden);
                });
        };


    const getBounds =
        (obj) => {

            const x =
                typeof obj.getDrawableX ===
                    "function"
                    ? obj.getDrawableX()
                    : obj.getX();


            const y =
                typeof obj.getDrawableY ===
                    "function"
                    ? obj.getDrawableY()
                    : obj.getY();


            return {

                left:
                    x,

                top:
                    y,

                right:
                    x + obj.getWidth(),

                bottom:
                    y + obj.getHeight()
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


    const setTimingPercent =
        (value) => {

            const safeValue =
                Math.max(
                    0,
                    Math.min(
                        100,
                        value
                    )
                );


            runtimeScene
                .getVariables()
                .get("S06TimingPercent")
                .setValue(
                    safeValue
                );
        };


    // ==================================================
    // OBJECTS
    // ==================================================

    const ingredient =
        getObj(
            "Spr_S06_Ingredient"
        );


    const cookingPot =
        getObj(
            "PROP_S06_CookingPot"
        );


    const timingBar =
        getObj(
            "Bar_S06_Timing"
        );


    const targetZone =
        getObj(
            "Zone_S06_TimingTarget"
        );


    if (
        !ingredient ||
        !cookingPot
    ) {
        return;
    }


    // ==================================================
    // WORLD POINTER
    // ใช้ตอนลากวัตถุดิบลงหม้อ
    // ==================================================

    const worldMouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "WORLD",
            0
        );


    const worldMouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "WORLD",
            0
        );


    // ==================================================
    // UI POINTER
    // ใช้ตอนคลิก Timing Bar
    // ==================================================

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


    const mousePressed =
        gdjs.evtTools.input
            .isMouseButtonPressed(
                runtimeScene,
                "Left"
            );


    const mouseReleased =
        gdjs.evtTools.input
            .isMouseButtonReleased(
                runtimeScene,
                "Left"
            );


    // ==================================================
    // PHASE: COOK_READY
    // ==================================================

    if (
        state.phase === "COOK_READY"
    ) {

        setTimingPercent(
            0
        );


        setHidden(
            "Bar_S06_Timing",
            true
        );


        setHidden(
            "Zone_S06_TimingTarget",
            true
        );


        // ----------------------------------------------
        // Remember home position
        // ----------------------------------------------

        if (
            state.cookIngredientHomeX === null
        ) {

            state.cookIngredientHomeX =
                ingredient.getX();

            state.cookIngredientHomeY =
                ingredient.getY();
        }


        const ingredientBounds =
            getBounds(
                ingredient
            );


        // ----------------------------------------------
        // START DRAG
        // ----------------------------------------------

        if (
            state.cookIngredientDragging !== true &&
            mousePressed === true &&
            pointInside(
                worldMouseX,
                worldMouseY,
                ingredientBounds,
                15
            )
        ) {

            state.cookIngredientDragging =
                true;


            state.cookDragOffsetX =
                worldMouseX -
                ingredient.getX();


            state.cookDragOffsetY =
                worldMouseY -
                ingredient.getY();


            return;
        }


        // ----------------------------------------------
        // DRAGGING
        // ----------------------------------------------

        if (
            state.cookIngredientDragging === true &&
            mousePressed === true
        ) {

            ingredient.setPosition(

                worldMouseX -
                    state.cookDragOffsetX,

                worldMouseY -
                    state.cookDragOffsetY
            );


            return;
        }


        // ----------------------------------------------
        // RELEASE INTO POT
        // ----------------------------------------------

        if (
            state.cookIngredientDragging === true &&
            mouseReleased === true
        ) {

            state.cookIngredientDragging =
                false;


            const potBounds =
                getBounds(
                    cookingPot
                );


            const centerX =
                ingredient.getCenterXInScene();


            const centerY =
                ingredient.getCenterYInScene();


            const droppedIntoPot =
                pointInside(
                    centerX,
                    centerY,
                    potBounds,
                    40
                );


            // ==========================================
            // SUCCESSFUL DROP
            // ==========================================

            if (
                droppedIntoPot === true
            ) {

                setHidden(
                    "Spr_S06_Ingredient",
                    true
                );


                setHidden(
                    "FX_S06_Steam",
                    false
                );


                state.phase =
                    "COOK_TIMING";


                state.cookStartedAt =
                    Date.now();


                // เวลารวมของ timing bar
                state.cookDurationMs =
                    1800;


                state.cookTimingResolved =
                    false;


                state.cookTimingValue =
                    0;


                state.cookTimingGrade =
                    "";


                state.cookInputLockedUntil =
                    Date.now() + 180;


                // ======================================
                // GAMEPLAY TARGET
                // ======================================

                if (
                    state.recipeId ===
                    "GINGER_CHICKEN"
                ) {

                    state.cookTargetStart =
                        0.34;

                    state.cookTargetEnd =
                        0.58;
                }


                else if (
                    state.recipeId ===
                    "HOLY_BASIL_PORK"
                ) {

                    state.cookTargetStart =
                        0.64;

                    state.cookTargetEnd =
                        0.86;
                }


                // ======================================
                // POSITION TARGET ZONE
                // ======================================

                if (
                    timingBar &&
                    targetZone
                ) {

                    const barX =
                        timingBar.getX();


                    const barY =
                        timingBar.getY();


                    const barWidth =
                        timingBar.getWidth();


                    const barHeight =
                        timingBar.getHeight();


                    const targetX =
                        barX +
                        (
                            barWidth *
                            state.cookTargetStart
                        );


                    const targetWidth =
                        barWidth *
                        (
                            state.cookTargetEnd -
                            state.cookTargetStart
                        );


                    targetZone.setPosition(
                        targetX,
                        barY
                    );


                    if (
                        typeof targetZone.setWidth ===
                        "function"
                    ) {

                        targetZone.setWidth(
                            targetWidth
                        );
                    }


                    if (
                        typeof targetZone.setHeight ===
                        "function"
                    ) {

                        targetZone.setHeight(
                            barHeight
                        );
                    }
                }


                setTimingPercent(
                    0
                );


                setHidden(
                    "Bar_S06_Timing",
                    false
                );


                setHidden(
                    "Zone_S06_TimingTarget",
                    false
                );


                setTextSafe(
                    "Txt_S06_Step",
                    "ขั้นที่ 3: จับจังหวะปรุง"
                );


                setTextSafe(
                    "Txt_S06_Instruction",
                    "คลิกที่แถบเมื่อเข้าสู่ช่วงเป้าหมาย"
                );


                console.log(
                    "S06 COOK TIMING START:",
                    state.recipeId
                );


                return;
            }


            // ==========================================
            // MISSED POT
            // ==========================================

            ingredient.setPosition(

                state.cookIngredientHomeX,

                state.cookIngredientHomeY
            );


            setTextSafe(
                "Txt_S06_Instruction",
                "ลากวัตถุดิบที่เตรียมแล้วลงในหม้อ"
            );


            return;
        }


        return;
    }


    // ==================================================
    // PHASE: COOK_TIMING
    // ==================================================

    if (
        state.phase === "COOK_TIMING"
    ) {

        const now =
            Date.now();


        const elapsed =
            now -
            state.cookStartedAt;


        let progress =
            elapsed /
            state.cookDurationMs;


        progress =
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );


        state.cookTimingValue =
            progress;


        setTimingPercent(
            progress * 100
        );


        // ==================================================
        // RESOLVE TIMING
        // ==================================================

        const resolveTiming =
            (value) => {

                if (
                    state.cookTimingResolved === true
                ) {
                    return;
                }


                state.cookTimingResolved =
                    true;


                let grade =
                    "OK";


                // ======================================
                // PERFECT
                // ======================================

                if (
                    value >= state.cookTargetStart &&
                    value <= state.cookTargetEnd
                ) {

                    grade =
                        "PERFECT";
                }


                // ======================================
                // GOOD
                // ======================================

                else {

                    let distance =
                        0;


                    if (
                        value <
                        state.cookTargetStart
                    ) {

                        distance =
                            state.cookTargetStart -
                            value;

                    } else {

                        distance =
                            value -
                            state.cookTargetEnd;
                    }


                    if (
                        distance <= 0.10
                    ) {

                        grade =
                            "GOOD";
                    }
                }


                state.cookTimingValue =
                    value;


                state.cookTimingGrade =
                    grade;


                state.resultRevealGrade =
                    grade;


                // ======================================
                // FREEZE RESOURCE BAR
                // ======================================

                setTimingPercent(
                    value * 100
                );


                // ======================================
                // HAND OFF TO RESULT REVEAL
                // ======================================

                state.resultRevealStartedAt =
                    Date.now();


                state.resultRevealStage =
                    0;


                state.phase =
                    "RESULT_REVEAL";


                // ======================================
                // TEMPORARY FEEDBACK
                // ======================================

                if (
                    grade === "PERFECT"
                ) {

                    setTextSafe(
                        "Txt_S06_Instruction",
                        "จังหวะพอดี!"
                    );

                } else if (
                    grade === "GOOD"
                ) {

                    setTextSafe(
                        "Txt_S06_Instruction",
                        "เกือบพอดี!"
                    );

                } else {

                    setTextSafe(
                        "Txt_S06_Instruction",
                        "ปรุงต่อจนเสร็จ..."
                    );
                }


                console.log(
                    "S06 TIMING RESOLVED:",
                    {
                        recipe:
                            state.recipeId,

                        value:
                            value,

                        grade:
                            grade
                    }
                );
            };


        // ==================================================
        // CLICK TIMING BAR
        // ==================================================

        if (
            now >=
                state.cookInputLockedUntil &&

            mouseReleased === true
        ) {

            if (timingBar) {

                const barBounds =
                    getBounds(
                        timingBar
                    );


                const clickedBar =
                    pointInside(
                        uiMouseX,
                        uiMouseY,
                        barBounds,
                        20
                    );


                if (
                    clickedBar === true
                ) {

                    resolveTiming(
                        progress
                    );


                    return;
                }
            }
        }


        // ==================================================
        // TIME OUT
        // ==================================================

        if (
            progress >= 1
        ) {

            resolveTiming(
                1
            );


            return;
        }


        return;
    }


} catch (error) {

    console.error(
        "S06 Cooking Timing Engine Error:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.userFunc0x9d6018 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 - RESULT REVEAL ENGINE
//
// Timeline:
//
// 0–250 ms
// → freeze timing result
//
// 250–500 ms
// → hide timing UI
// → show steam
//
// 500–900 ms
// → reveal finished dish
//
// 900+ ms
// → success FX
// → continue button
// → COMPLETE
// ======================================================

try {

    const state =
        globalThis.MorYaS06State;

    const session =
        globalThis.MorYaCaseSession;


    // ==================================================
    // GUARD
    // ==================================================

    if (!state) {
        return;
    }


    if (
        state.phase !== "RESULT_REVEAL"
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


    const setHidden =
        (name, hidden) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(hidden);
                });
        };


    const setTextSafe =
        (name, value) => {

            const obj =
                getObj(name);

            if (!obj) {
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


    const setOpacitySafe =
        (name, opacity) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setOpacity ===
                        "function"
                    ) {

                        obj.setOpacity(
                            opacity
                        );
                    }
                });
        };


    // ==================================================
    // TIME
    // ==================================================

    const elapsed =
        Date.now() -
        state.resultRevealStartedAt;


    // ==================================================
    // STAGE 0
    // 0 - 250 ms
    //
    // Timing bar remains frozen briefly.
    // ==================================================

    if (
        elapsed < 250
    ) {

        if (
            state.resultRevealStage < 1
        ) {

            state.resultRevealStage =
                1;


            setHidden(
                "Bar_S06_Timing",
                false
            );


            setHidden(
                "Zone_S06_TimingTarget",
                false
            );


            setHidden(
                "Spr_S06_FoodResult",
                true
            );


            setHidden(
                "FX_S06_Success",
                true
            );


            setHidden(
                "Btn_S06_Continue",
                true
            );
        }


        return;
    }


    // ==================================================
    // STAGE 1
    // 250 - 500 ms
    //
    // Timing UI disappears.
    // Steam remains.
    // ==================================================

    if (
        elapsed < 500
    ) {

        if (
            state.resultRevealStage < 2
        ) {

            state.resultRevealStage =
                2;


            setHidden(
                "Bar_S06_Timing",
                true
            );


            setHidden(
                "Zone_S06_TimingTarget",
                true
            );


            setHidden(
                "FX_S06_Steam",
                false
            );


            setTextSafe(
                "Txt_S06_Step",
                "กำลังปรุง..."
            );
        }


        return;
    }


    // ==================================================
    // STAGE 2
    // 500 - 900 ms
    //
    // Fade finished dish in.
    // ==================================================

    if (
        elapsed < 900
    ) {

        if (
            state.resultRevealStage < 3
        ) {

            state.resultRevealStage =
                3;


            setHidden(
                "Spr_S06_FoodResult",
                false
            );


            setOpacitySafe(
                "Spr_S06_FoodResult",
                0
            );
        }


        // ----------------------------------------------
        // Fade 0 -> 255
        // over roughly 400 ms
        // ----------------------------------------------

        const fadeProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    (
                        elapsed -
                        500
                    ) / 400
                )
            );


        setOpacitySafe(
            "Spr_S06_FoodResult",
            Math.round(
                fadeProgress * 255
            )
        );


        return;
    }


    // ==================================================
    // STAGE 3
    // COMPLETE
    // ==================================================

    if (
        state.resultRevealStage < 4
    ) {

        state.resultRevealStage =
            4;


        // ----------------------------------------------
        // Ensure result fully visible
        // ----------------------------------------------

        setHidden(
            "Spr_S06_FoodResult",
            false
        );


        setOpacitySafe(
            "Spr_S06_FoodResult",
            255
        );


        // Steam ends
        setHidden(
            "FX_S06_Steam",
            true
        );


        // Success FX
        setHidden(
            "FX_S06_Success",
            false
        );


        // Continue appears
        setHidden(
            "Btn_S06_Continue",
            false
        );


        // ----------------------------------------------
        // FINAL STATE
        // ----------------------------------------------

        state.cookingCompleted =
            true;


        state.servingCompleted =
            true;


        state.phase =
            "COMPLETE";


        // ----------------------------------------------
        // SAVE SESSION
        // ----------------------------------------------

        if (session) {

            session.s06_food_recipe_id =
                state.recipeId;


            session.s06_food_timing_value =
                state.cookTimingValue;


            session.s06_food_timing_grade =
                state.cookTimingGrade;


            session.s06_food_minigame_completed =
                true;
        }


        // ----------------------------------------------
        // RESULT TEXT
        // ----------------------------------------------

        if (
            state.cookTimingGrade ===
            "PERFECT"
        ) {

            setTextSafe(
                "Txt_S06_Step",
                "ปรุงอาหารสำเร็จ!"
            );


            setTextSafe(
                "Txt_S06_Instruction",
                "จังหวะดีมาก อาหารพร้อมเสิร์ฟ"
            );

        } else if (
            state.cookTimingGrade ===
            "GOOD"
        ) {

            setTextSafe(
                "Txt_S06_Step",
                "ปรุงอาหารสำเร็จ"
            );


            setTextSafe(
                "Txt_S06_Instruction",
                "จังหวะเกือบพอดี อาหารพร้อมเสิร์ฟ"
            );

        } else {

            setTextSafe(
                "Txt_S06_Step",
                "ปรุงอาหารสำเร็จ"
            );


            setTextSafe(
                "Txt_S06_Instruction",
                "อาหารพร้อมเสิร์ฟ ลองจับจังหวะให้แม่นขึ้นครั้งหน้า"
            );
        }


        console.log(
            "S06 RESULT REVEAL COMPLETE:",
            {
                recipe:
                    state.recipeId,

                grade:
                    state.cookTimingGrade
            }
        );
    }


} catch (error) {

    console.error(
        "S06 Result Reveal Engine Error:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.eventsList5 = function(runtimeScene) {

{


gdjs.S06_95FoodPreparationCode.userFunc0xdc0e00(runtimeScene);

}


{


gdjs.S06_95FoodPreparationCode.userFunc0xe77cb0(runtimeScene);

}


{


gdjs.S06_95FoodPreparationCode.userFunc0x1807de8(runtimeScene);

}


{


gdjs.S06_95FoodPreparationCode.userFunc0x9d6018(runtimeScene);

}


};gdjs.S06_95FoodPreparationCode.userFunc0x15dd500 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 - CONTINUE INPUT ROUTER
// Food Preparation -> Counselling
// ======================================================

try {

    const state =
        globalThis.MorYaS06State;

    const session =
        globalThis.MorYaCaseSession;


    if (
        !state ||
        !session
    ) {
        return;
    }


    // ต้องทำ mini game จบก่อน
    if (
        state.phase !== "COMPLETE" ||
        state.cookingCompleted !== true
    ) {
        return;
    }


    const objects =
        runtimeScene.getObjects(
            "Btn_S06_Continue"
        );


    if (
        objects.length === 0
    ) {
        return;
    }


    const button =
        objects[0];


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


    const x =
        typeof button.getDrawableX ===
            "function"
            ? button.getDrawableX()
            : button.getX();


    const y =
        typeof button.getDrawableY ===
            "function"
            ? button.getDrawableY()
            : button.getY();


    const clicked =
        mouseX >= x &&
        mouseX <= x + button.getWidth() &&
        mouseY >= y &&
        mouseY <= y + button.getHeight();


    if (!clicked) {
        return;
    }


    // ==================================================
    // SAVE FOOD MINI GAME RESULT
    // ==================================================

    session.s06_completed =
        true;

    session.food_preparation_completed =
        true;

    session.selected_food_recipe_id =
        state.recipeId;

    session.food_timing_grade =
        state.cookTimingGrade;

    session.food_timing_value =
        state.cookTimingValue;

    session.next_intervention_phase =
        "COUNSELLING";


    console.log(
        "S06 FOOD -> COUNSELLING:",
        {
            recipe:
                session.selected_food_recipe_id,

            timingGrade:
                session.food_timing_grade,

            timingValue:
                session.food_timing_value
        }
    );


    // ==================================================
    // GO TO COUNSELLING
    // ==================================================

    gdjs.evtTools.runtimeScene.replaceScene(
        runtimeScene,
        "S06_Counselling",
        false
    );


} catch (error) {

    console.error(
        "S06 Continue Router Error:",
        error
    );
}
};
gdjs.S06_95FoodPreparationCode.eventsList6 = function(runtimeScene) {

{


gdjs.S06_95FoodPreparationCode.userFunc0x15dd500(runtimeScene);

}


};gdjs.S06_95FoodPreparationCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95FoodPreparationCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.S06_95FoodPreparationCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95FoodPreparationCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.S06_95FoodPreparationCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}

{ //Subevents
gdjs.S06_95FoodPreparationCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.S06_95FoodPreparationCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bar_S06_Timing"), gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects1);
{for(var i = 0, len = gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects1.length ;i < len;++i) {
    gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95FoodPreparationCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.S06_95FoodPreparationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S06_95FoodPreparationCode.GDBG_9595S06_9595FoodPrep_9595MainObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBG_9595S06_9595FoodPrep_9595MainObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595WashBowlObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595WashBowlObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CuttingBoardObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CuttingBoardObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595KnifeObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595KnifeObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595IngredientBowlObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595IngredientBowlObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CookingPotObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CookingPotObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595SpoonObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595SpoonObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595ServingBowlObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595ServingBowlObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595IngredientObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595IngredientObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595FoodResultObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595FoodResultObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SteamObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SteamObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SuccessObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SuccessObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595TitleObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595TitleObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595InstructionObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595InstructionObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDNewSpriteObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDNewSpriteObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595StepObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595StepObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595SelectedIngredientObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595SelectedIngredientObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595BackObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595BackObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595ContinueObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595ContinueObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595StepObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595StepObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595SelectedIngredientObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595SelectedIngredientObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDZone_9595S06_9595TimingTargetObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDZone_9595S06_9595TimingTargetObjects2.length = 0;

gdjs.S06_95FoodPreparationCode.eventsList7(runtimeScene);
gdjs.S06_95FoodPreparationCode.GDBG_9595S06_9595FoodPrep_9595MainObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBG_9595S06_9595FoodPrep_9595MainObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595WashBowlObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595WashBowlObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CuttingBoardObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CuttingBoardObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595KnifeObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595KnifeObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595IngredientBowlObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595IngredientBowlObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CookingPotObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595CookingPotObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595SpoonObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595SpoonObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595ServingBowlObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDPROP_9595S06_9595ServingBowlObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595IngredientObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595IngredientObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595FoodResultObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDSpr_9595S06_9595FoodResultObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SteamObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SteamObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SuccessObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFX_9595S06_9595SuccessObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595TitleObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595TitleObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595InstructionObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595InstructionObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDNewSpriteObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDNewSpriteObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595StepObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595StepObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595SelectedIngredientObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDFrame_9595S06_9595SelectedIngredientObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595BackObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595BackObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595ContinueObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBtn_9595S06_9595ContinueObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595StepObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595StepObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595SelectedIngredientObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDTxt_9595S06_9595SelectedIngredientObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDBar_9595S06_9595TimingObjects2.length = 0;
gdjs.S06_95FoodPreparationCode.GDZone_9595S06_9595TimingTargetObjects1.length = 0;
gdjs.S06_95FoodPreparationCode.GDZone_9595S06_9595TimingTargetObjects2.length = 0;


return;

}

gdjs['S06_95FoodPreparationCode'] = gdjs.S06_95FoodPreparationCode;
