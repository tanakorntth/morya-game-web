gdjs.S06_95CounsellingCode = {};
gdjs.S06_95CounsellingCode.localVariables = [];
gdjs.S06_95CounsellingCode.idToCallbackMap = new Map();
gdjs.S06_95CounsellingCode.GDBG_9595S06_9595CounsellingObjects1= [];
gdjs.S06_95CounsellingCode.GDBG_9595S06_9595CounsellingObjects2= [];
gdjs.S06_95CounsellingCode.GDSpr_9595YaiSai_9595CounsellingObjects1= [];
gdjs.S06_95CounsellingCode.GDSpr_9595YaiSai_9595CounsellingObjects2= [];
gdjs.S06_95CounsellingCode.GDSpr_9595CounsellingFoodObjects1= [];
gdjs.S06_95CounsellingCode.GDSpr_9595CounsellingFoodObjects2= [];
gdjs.S06_95CounsellingCode.GDPanel_9595CounsellingTrayObjects1= [];
gdjs.S06_95CounsellingCode.GDPanel_9595CounsellingTrayObjects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595TitleObjects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595TitleObjects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595InstructionObjects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595InstructionObjects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595CountObjects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595CountObjects2= [];
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingConfirmObjects1= [];
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingConfirmObjects2= [];
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingResetObjects1= [];
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingResetObjects2= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959501Objects1= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959501Objects2= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959502Objects1= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959502Objects2= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959503Objects1= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959503Objects2= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959504Objects1= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959504Objects2= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959505Objects1= [];
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959505Objects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card01Objects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card01Objects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card02Objects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card02Objects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card03Objects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card03Objects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card04Objects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card04Objects2= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card05Objects1= [];
gdjs.S06_95CounsellingCode.GDTxt_9595Card05Objects2= [];


gdjs.S06_95CounsellingCode.userFunc0x180d318 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S06_95CounsellingCode.eventsList0 = function(runtimeScene) {

{


gdjs.S06_95CounsellingCode.userFunc0x180d318(runtimeScene);

}


};gdjs.S06_95CounsellingCode.userFunc0xe701a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 COUNSELLING - INITIALIZER
//
// CASE001 : ยายสาย
//
// Supports:
// FOOD
// HERBAL_DRINK
// SKIPPED / IRRELEVANT INTERVENTION
//
// Spr_CounsellingFood:
// Animation 0 = ไก่ผัดขิง
// Animation 1 = ผัดกะเพรา
// Animation 2 = น้ำขิง
// Animation 3 = น้ำตะไคร้
// ======================================================

try {

    // ==================================================
    // ONE-TIME GUARD
    // ==================================================

    if (
        runtimeScene.__morYaCounsellingInitialized ===
        true
    ) {

        return;
    }


    // ==================================================
    // SESSION
    // ==================================================

    const session =
        globalThis.MorYaCaseSession;


    if (!session) {

        console.error(
            "COUNSELLING INIT: MorYaCaseSession not found"
        );

        return;
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


    const setTextSafe =
        (
            name,
            value
        ) => {

            const obj =
                getObj(
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


    const setAnimationSafe =
        (
            name,
            animationIndex
        ) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setAnimation ===
                        "function"
                    ) {

                        obj.setAnimation(
                            animationIndex
                        );
                    }
                });
        };


    const hideObject =
        (
            name,
            hidden
        ) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    obj.hide(
                        hidden
                    );
                });
        };


    const normalize =
        (value) => {

            return String(
                value || ""
            )
                .trim()
                .toUpperCase();
        };


    // ==================================================
    // COUNSELLING CARD CONFIG
    //
    // SAFE_USE_COUNSELLING = 10 points
    //
    // CARD_01 = 3
    // CARD_02 = 3
    // CARD_03 = 4
    //
    // CARD_04 / CARD_05 = 0
    // ==================================================

    const CARD_CONFIG = {

        CARD_01: {

            objectName:
                "Card_Counselling_01",

            textObjectName:
                "Txt_Card01",

            text:
                "กินในปริมาณพอเหมาะ",

            category:
                "SAFE_USE",

            score:
                3,

            isUnsafe:
                false
        },


        CARD_02: {

            objectName:
                "Card_Counselling_02",

            textObjectName:
                "Txt_Card02",

            text:
                "สังเกตอาการหลังรับประทาน",

            category:
                "MONITORING",

            score:
                3,

            isUnsafe:
                false
        },


        CARD_03: {

            objectName:
                "Card_Counselling_03",

            textObjectName:
                "Txt_Card03",

            text:
                "หากอาการรุนแรงขึ้นหรือมีสัญญาณเตือน\nควรไปพบเจ้าหน้าที่สาธารณสุข",

            category:
                "ESCALATION",

            score:
                4,

            isUnsafe:
                false
        },


        CARD_04: {

            objectName:
                "Card_Counselling_04",

            textObjectName:
                "Txt_Card04",

            text:
                "ใช้สมุนไพรนี้แทนยาประจำทั้งหมด",

            category:
                "MEDICATION_REPLACEMENT",

            score:
                0,

            isUnsafe:
                true
        },


        CARD_05: {

            objectName:
                "Card_Counselling_05",

            textObjectName:
                "Txt_Card05",

            text:
                "ยิ่งรับประทานมาก\nยิ่งช่วยให้อาการดีขึ้นเร็ว",

            category:
                "EXCESS_USE",

            score:
                0,

            isUnsafe:
                true
        }
    };


    // ==================================================
    // CREATE STATE
    // ==================================================

    globalThis.MorYaCounsellingState = {

        active:
            true,


        phase:
            "SELECT_CARDS",


        maxCards:
            3,


        selectedCards:
            [],


        draggingCardId:
            "",


        dragOffsetX:
            0,


        dragOffsetY:
            0,


        inputLockedUntil:
            Date.now() + 250,


        cardConfig:
            CARD_CONFIG,


        cardHomePositions:
            {}
    };


    const state =
        globalThis.MorYaCounsellingState;


    // ==================================================
    // STORE CARD HOME POSITIONS
    // ==================================================

    Object.keys(
        CARD_CONFIG
    )
    .forEach(cardId => {

        const config =
            CARD_CONFIG[
                cardId
            ];


        const card =
            getObj(
                config.objectName
            );


        const text =
            getObj(
                config.textObjectName
            );


        if (card) {

            state.cardHomePositions[
                cardId
            ] = {

                cardX:
                    card.getX(),

                cardY:
                    card.getY(),

                textX:
                    text
                        ? text.getX()
                        : 0,

                textY:
                    text
                        ? text.getY()
                        : 0
            };
        }


        setTextSafe(
            config.textObjectName,
            config.text
        );
    });


    // ==================================================
    // INITIAL UI
    // ==================================================

    setTextSafe(
        "Txt_Counselling_Title",
        "ก่อนกลับ คุณจะแนะนำยายสายอย่างไร?"
    );


    setTextSafe(
        "Txt_Counselling_Instruction",
        "เลือกคำแนะนำที่เหมาะสมไม่เกิน 3 ข้อ แล้วลากลงในถาด"
    );


    setTextSafe(
        "Txt_Counselling_Count",
        "คำแนะนำที่เลือก 0 / 3"
    );


    // ==================================================
    // READ PREPARATION CONTEXT
    // ==================================================

    let preparationRoute =
        normalize(
            session.selected_preparation_route ||
            session.s05_preparation_route ||
            ""
        );


    // ==================================================
    // FALLBACK ROUTE DETECTION
    //
    // เผื่อ session รุ่นเก่าไม่มี route
    // ==================================================

    if (
        preparationRoute === ""
    ) {

        if (
            session.s06b_recipe_id ||
            session.s06b_completed === true
        ) {

            preparationRoute =
                "HERBAL_DRINK";

        } else if (
            session.selected_food_recipe_id ||
            session.s06_food_recipe_id
        ) {

            preparationRoute =
                "FOOD";
        }
    }


    // รองรับ alias เก่า
    if (
        preparationRoute ===
        "DRINK"
    ) {

        preparationRoute =
            "HERBAL_DRINK";
    }


    // ==================================================
    // READ HERB
    // ==================================================

    const herbId =
        normalize(
            session.selected_herb_id ||
            session.s05_basket_herb_id ||
            session.s05_harvest_herb_id ||
            ""
        );


    const herbName =
        String(
            session.selected_herb_name_th ||
            session.s05_basket_herb_name_th ||
            session.s05_harvest_herb_name_th ||
            ""
        )
        .trim();


    // ==================================================
    // READ PLANT PART
    // ==================================================

    const partId =
        normalize(
            session.selected_plant_part_id ||
            session.s05_basket_part_id ||
            session.s05_harvest_part_id ||
            ""
        );


    const partName =
        String(
            session.selected_plant_part_name_th ||
            session.s05_basket_part_name_th ||
            session.s05_harvest_part_name_th ||
            ""
        )
        .trim();


    // ==================================================
    // FOOD RECIPE
    // ==================================================

    const foodRecipeId =
        normalize(
            session.selected_food_recipe_id ||
            session.s06_food_recipe_id ||
            ""
        );


    // ==================================================
    // DRINK RECIPE
    // ==================================================

    const drinkRecipeId =
        normalize(
            session.s06b_recipe_id ||
            (
                session.s06b_final_summary &&
                session.s06b_final_summary.recipeId
            ) ||
            ""
        );


    // ==================================================
    // WAS MINIGAME SKIPPED?
    // ==================================================

    const minigameSkipped =
        (
            session.s06_minigame_skipped ===
                true ||

            (
                preparationRoute ===
                    "FOOD" &&

                session.s06_food_skipped ===
                    true
            ) ||

            (
                preparationRoute ===
                    "HERBAL_DRINK" &&

                session.s06b_skipped ===
                    true
            )
        );


    // ==================================================
    // RESULT VISUAL
    //
    // Always hide first.
    // Prevents stale/default image.
    // ==================================================

    hideObject(
        "Spr_CounsellingFood",
        true
    );


    let resultAnimation =
        -1;


    let resultId =
        "NONE";


    // ==================================================
    // ONLY SHOW RESULT IF MINIGAME / ROUTE IS VALID
    // ==================================================

    if (
        minigameSkipped !==
        true
    ) {

        // ==============================================
        // FOOD
        // ==============================================

        if (
            preparationRoute ===
            "FOOD"
        ) {

            // ------------------------------------------
            // HOLY BASIL + LEAF
            // Animation 1
            // ------------------------------------------

            const isHolyBasilFood =
                (
                    foodRecipeId ===
                        "HOLY_BASIL_PORK" ||

                    foodRecipeId.includes(
                        "HOLY_BASIL"
                    ) ||

                    foodRecipeId.includes(
                        "BASIL"
                    ) ||

                    (
                        herbId ===
                            "HERB_HOLY_BASIL" &&

                        partId ===
                            "LEAF"
                    )
                );


            // ------------------------------------------
            // GINGER + RHIZOME
            // Animation 0
            // ------------------------------------------

            const isGingerFood =
                (
                    foodRecipeId ===
                        "GINGER_CHICKEN" ||

                    (
                        foodRecipeId.includes(
                            "GINGER"
                        ) &&
                        !foodRecipeId.includes(
                            "DRINK"
                        )
                    ) ||

                    (
                        herbId ===
                            "HERB_GINGER" &&

                        partId ===
                            "RHIZOME"
                    )
                );


            if (
                isHolyBasilFood ===
                true
            ) {

                resultAnimation =
                    1;


                resultId =
                    "HOLY_BASIL_FOOD";

            } else if (
                isGingerFood ===
                true
            ) {

                resultAnimation =
                    0;


                resultId =
                    "GINGER_FOOD";
            }
        }


        // ==============================================
        // HERBAL DRINK
        // ==============================================

        else if (
            preparationRoute ===
            "HERBAL_DRINK"
        ) {

            // ------------------------------------------
            // GINGER DRINK
            // Animation 2
            // ------------------------------------------

            const isGingerDrink =
                (
                    drinkRecipeId ===
                        "GINGER_DRINK" ||

                    (
                        herbId ===
                            "HERB_GINGER" &&

                        partId ===
                            "RHIZOME"
                    )
                );


            // ------------------------------------------
            // LEMONGRASS DRINK
            // Animation 3
            // ------------------------------------------

            const isLemongrassDrink =
                (
                    drinkRecipeId ===
                        "LEMONGRASS_DRINK" ||

                    (
                        herbId ===
                            "HERB_LEMONGRASS" &&

                        partId ===
                            "BASE"
                    )
                );


            if (
                isGingerDrink ===
                true
            ) {

                resultAnimation =
                    2;


                resultId =
                    "GINGER_DRINK";

            } else if (
                isLemongrassDrink ===
                true
            ) {

                resultAnimation =
                    3;


                resultId =
                    "LEMONGRASS_DRINK";
            }
        }
    }


    // ==================================================
    // APPLY RESULT VISUAL
    // ==================================================

    if (
        resultAnimation >=
        0
    ) {

        setAnimationSafe(
            "Spr_CounsellingFood",
            resultAnimation
        );


        hideObject(
            "Spr_CounsellingFood",
            false
        );

    } else {

        // ----------------------------------------------
        // Invalid herb / part
        // Product route
        // Skipped minigame
        // Unknown result
        //
        // Do NOT display unrelated food/drink.
        // ----------------------------------------------

        hideObject(
            "Spr_CounsellingFood",
            true
        );
    }


    // ==================================================
    // SAVE RESULT VISUAL CONTEXT
    // ==================================================

    session.s06_counselling_result_visual =
        resultId;


    session.s06_counselling_result_animation =
        resultAnimation;


    // ==================================================
    // BUTTON STATE
    // ==================================================

    // ยังไม่มีการ์ดในถาด
    // จึงยังไม่ให้ Confirm

    hideObject(
        "Btn_CounsellingConfirm",
        true
    );


    hideObject(
        "Btn_CounsellingReset",
        false
    );


    // ==================================================
    // SAVE BASIC CONTEXT
    // ==================================================

    session.counselling_started =
        true;


    session.counselling_preparation_route =
        preparationRoute;


    // ==================================================
    // INITIALIZATION COMPLETE
    // ==================================================

    runtimeScene.__morYaCounsellingInitialized =
        true;


    // ==================================================
    // DEBUG
    // ==================================================

    console.log(
        "COUNSELLING READY:",
        {
            route:
                preparationRoute,

            herb:
                herbId,

            herbName:
                herbName,

            part:
                partId,

            partName:
                partName,

            foodRecipe:
                foodRecipeId,

            drinkRecipe:
                drinkRecipeId,

            minigameSkipped:
                minigameSkipped,

            result:
                resultId,

            animation:
                resultAnimation,

            timing:
                session.food_timing_grade
        }
    );


} catch (error) {

    runtimeScene.__morYaCounsellingInitialized =
        false;


    console.error(
        "Counselling Initializer Error:",
        error
    );
}
};
gdjs.S06_95CounsellingCode.eventsList1 = function(runtimeScene) {

{


gdjs.S06_95CounsellingCode.userFunc0xe701a0(runtimeScene);

}


};gdjs.S06_95CounsellingCode.userFunc0xb7e2c8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 COUNSELLING - CARD DRAG ROUTER
//
// - Drag card + its text together
// - Drop inside tray -> select
// - Snap selected cards into 3 slots
// - Maximum 3 cards
// - Drag selected card out -> remove and return home
// ======================================================

try {

    const state =
        globalThis.MorYaCounsellingState;


    // ==================================================
    // GUARD
    // ==================================================

    if (!state) {
        return;
    }


    if (
        state.active !== true ||
        state.phase !== "SELECT_CARDS"
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

                x >= bounds.left - padding &&
                x <= bounds.right + padding &&

                y >= bounds.top - padding &&
                y <= bounds.bottom + padding
            );
        };


    const isSelected =
        (cardId) => {

            return state.selectedCards.includes(
                cardId
            );
        };


    // ==================================================
    // POINTER ON CARD LAYER
    // ==================================================

    const mouseX =
        gdjs.evtTools.input.getCursorX(
            runtimeScene,
            "CARD",
            0
        );


    const mouseY =
        gdjs.evtTools.input.getCursorY(
            runtimeScene,
            "CARD",
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
    // TRAY
    // ==================================================

    const tray =
        getObj(
            "Panel_CounsellingTray"
        );


    if (!tray) {
        return;
    }


    const trayBounds =
        getBounds(
            tray
        );


    // ==================================================
    // MOVE CARD + TEXT TOGETHER
    // ==================================================

    const moveCard =
        (
            cardId,
            x,
            y
        ) => {

            const config =
                state.cardConfig[
                    cardId
                ];


            if (!config) {
                return;
            }


            const card =
                getObj(
                    config.objectName
                );


            const text =
                getObj(
                    config.textObjectName
                );


            if (!card) {
                return;
            }


            const oldX =
                card.getX();

            const oldY =
                card.getY();


            const dx =
                x - oldX;

            const dy =
                y - oldY;


            card.setPosition(
                x,
                y
            );


            if (text) {

                text.setPosition(

                    text.getX() + dx,

                    text.getY() + dy
                );
            }
        };


    // ==================================================
    // RETURN CARD HOME
    // ==================================================

    const returnHome =
        (cardId) => {

            const config =
                state.cardConfig[
                    cardId
                ];


            const home =
                state.cardHomePositions[
                    cardId
                ];


            if (
                !config ||
                !home
            ) {
                return;
            }


            const card =
                getObj(
                    config.objectName
                );


            const text =
                getObj(
                    config.textObjectName
                );


            if (card) {

                card.setPosition(
                    home.cardX,
                    home.cardY
                );
            }


            if (text) {

                text.setPosition(
                    home.textX,
                    home.textY
                );
            }
        };


    // ==================================================
    // SNAP SELECTED CARDS
    // ==================================================

    const snapSelectedCards =
        () => {

            const count =
                state.selectedCards.length;


            if (count === 0) {
                return;
            }


            const trayX =
                tray.getX();

            const trayY =
                tray.getY();

            const trayW =
                tray.getWidth();

            const trayH =
                tray.getHeight();


            // ใช้พื้นที่ภายในถาด 90%
            const usableWidth =
                trayW * 0.90;


            const startX =
                trayX +
                (
                    trayW -
                    usableWidth
                ) / 2;


            const slotWidth =
                usableWidth / 3;


            state.selectedCards
                .forEach(
                    (
                        cardId,
                        index
                    ) => {

                        const config =
                            state.cardConfig[
                                cardId
                            ];


                        if (!config) {
                            return;
                        }


                        const card =
                            getObj(
                                config.objectName
                            );


                        if (!card) {
                            return;
                        }


                        const slotCenterX =
                            startX +
                            slotWidth *
                            index +
                            slotWidth / 2;


                        const targetX =
                            slotCenterX -
                            card.getWidth() / 2;


                        const targetY =
                            trayY +
                            (
                                trayH -
                                card.getHeight()
                            ) / 2;


                        moveCard(
                            cardId,
                            targetX,
                            targetY
                        );
                    }
                );
        };


    // ==================================================
    // UPDATE UI
    // ==================================================

    const updateUI =
        () => {

            const count =
                state.selectedCards.length;


            setTextSafe(
                "Txt_Counselling_Count",

                "คำแนะนำที่เลือก " +
                count +
                " / " +
                state.maxCards
            );


            // ให้ Confirm ปรากฏเมื่อมีการ์ดอย่างน้อย 1 ใบ
            setHidden(
                "Btn_CounsellingConfirm",
                count === 0
            );
        };


    // ==================================================
    // START DRAG
    // ==================================================

    if (
        state.draggingCardId === "" &&
        mousePressed === true
    ) {

        const cardIds =
            Object.keys(
                state.cardConfig
            );


        // ตรวจจากใบหลังสุดย้อนขึ้นมา
        // เผื่อมีการ overlap
        for (
            let i =
                cardIds.length - 1;

            i >= 0;

            i--
        ) {

            const cardId =
                cardIds[i];


            const config =
                state.cardConfig[
                    cardId
                ];


            const card =
                getObj(
                    config.objectName
                );


            if (!card) {
                continue;
            }


            const bounds =
                getBounds(
                    card
                );


            if (
                pointInside(
                    mouseX,
                    mouseY,
                    bounds,
                    8
                )
            ) {

                state.draggingCardId =
                    cardId;


                state.dragOffsetX =
                    mouseX -
                    card.getX();


                state.dragOffsetY =
                    mouseY -
                    card.getY();


                // จำว่าก่อนลาก
                // การ์ดใบนี้อยู่ในถาดหรือไม่
                state.draggingCardWasSelected =
                    isSelected(
                        cardId
                    );


                console.log(
                    "COUNSELLING DRAG START:",
                    cardId
                );


                break;
            }
        }
    }


    // ==================================================
    // DRAGGING
    // ==================================================

    if (
        state.draggingCardId !== "" &&
        mousePressed === true
    ) {

        moveCard(

            state.draggingCardId,

            mouseX -
                state.dragOffsetX,

            mouseY -
                state.dragOffsetY
        );


        return;
    }


    // ==================================================
    // RELEASE
    // ==================================================

    if (
        state.draggingCardId !== "" &&
        mouseReleased === true
    ) {

        const cardId =
            state.draggingCardId;


        const config =
            state.cardConfig[
                cardId
            ];


        const card =
            getObj(
                config.objectName
            );


        state.draggingCardId =
            "";


        if (!card) {
            return;
        }


        const cardCenterX =
            card.getCenterXInScene();


        const cardCenterY =
            card.getCenterYInScene();


        const droppedInTray =
            pointInside(
                cardCenterX,
                cardCenterY,
                trayBounds,
                20
            );


        // ==================================================
        // DROP INTO TRAY
        // ==================================================

        if (
            droppedInTray === true
        ) {

            // ----------------------------------------------
            // Card already selected
            // → simply re-snap
            // ----------------------------------------------

            if (
                isSelected(
                    cardId
                )
            ) {

                snapSelectedCards();

                updateUI();

                return;
            }


            // ----------------------------------------------
            // Tray full
            // ----------------------------------------------

            if (
                state.selectedCards.length >=
                state.maxCards
            ) {

                returnHome(
                    cardId
                );


                setTextSafe(
                    "Txt_Counselling_Instruction",
                    "เลือกคำแนะนำได้สูงสุด 3 ข้อ หากต้องการเปลี่ยนให้ลากการ์ดในถาดออกก่อน"
                );


                state.inputLockedUntil =
                    Date.now() + 180;


                return;
            }


            // ----------------------------------------------
            // Add card
            // ----------------------------------------------

            state.selectedCards.push(
                cardId
            );


            snapSelectedCards();

            updateUI();


            setTextSafe(
                "Txt_Counselling_Instruction",
                "คุณสามารถเลือกเพิ่ม เปลี่ยน หรือลากการ์ดออกจากถาดได้ก่อนยืนยัน"
            );


            console.log(
                "COUNSELLING CARD ADDED:",
                state.selectedCards
            );


            return;
        }


        // ==================================================
        // DROP OUTSIDE TRAY
        // ==================================================

        if (
            isSelected(
                cardId
            )
        ) {

            // เอาออกจาก selectedCards
            state.selectedCards =
                state.selectedCards.filter(
                    id =>
                        id !== cardId
                );


            returnHome(
                cardId
            );


            // จัดใบที่เหลือใหม่
            snapSelectedCards();

            updateUI();


            setTextSafe(
                "Txt_Counselling_Instruction",
                "นำคำแนะนำออกจากถาดแล้ว คุณสามารถเลือกใบอื่นแทนได้"
            );


            console.log(
                "COUNSELLING CARD REMOVED:",
                state.selectedCards
            );


            return;
        }


        // ==================================================
        // Unselected card dropped elsewhere
        // → return home
        // ==================================================

        returnHome(
            cardId
        );


        return;
    }


} catch (error) {

    console.error(
        "Counselling Card Drag Router Error:",
        error
    );
}
};
gdjs.S06_95CounsellingCode.eventsList2 = function(runtimeScene) {

{


gdjs.S06_95CounsellingCode.userFunc0xb7e2c8(runtimeScene);

}


};gdjs.S06_95CounsellingCode.userFunc0xbb6e58 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S06 COUNSELLING - CONTROL ROUTER
//
// Handles:
// - RESET
// - CONFIRM
//
// Confirm:
// - saves selected cards
// - calculates counselling score /10
// - records unsafe advice selections
// - continues to S07_Reflection
// ======================================================

try {

    const state =
        globalThis.MorYaCounsellingState;

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
        state.active !== true ||
        state.phase !== "SELECT_CARDS"
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
    // UI POINTER
    // ==================================================

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
    // BUTTONS
    // ==================================================

    const btnReset =
        getObj(
            "Btn_CounsellingReset"
        );


    const btnConfirm =
        getObj(
            "Btn_CounsellingConfirm"
        );


    // ==================================================
    // RESET
    // ==================================================

    if (btnReset) {

        const resetBounds =
            getBounds(
                btnReset
            );


        const clickedReset =
            pointInside(
                mouseX,
                mouseY,
                resetBounds,
                10
            );


        if (
            clickedReset === true
        ) {

            // ------------------------------------------
            // Return every card + text home
            // ------------------------------------------

            Object.keys(
                state.cardConfig
            ).forEach(cardId => {

                const config =
                    state.cardConfig[
                        cardId
                    ];


                const home =
                    state.cardHomePositions[
                        cardId
                    ];


                if (
                    !config ||
                    !home
                ) {
                    return;
                }


                const card =
                    getObj(
                        config.objectName
                    );


                const text =
                    getObj(
                        config.textObjectName
                    );


                if (card) {

                    card.setPosition(
                        home.cardX,
                        home.cardY
                    );
                }


                if (text) {

                    text.setPosition(
                        home.textX,
                        home.textY
                    );
                }
            });


            // ------------------------------------------
            // Reset state
            // ------------------------------------------

            state.selectedCards =
                [];

            state.draggingCardId =
                "";

            state.inputLockedUntil =
                Date.now() + 200;


            // ------------------------------------------
            // Reset UI
            // ------------------------------------------

            setTextSafe(
                "Txt_Counselling_Count",
                "คำแนะนำที่เลือก 0 / 3"
            );


            setTextSafe(
                "Txt_Counselling_Instruction",
                "เลือกคำแนะนำที่เหมาะสมไม่เกิน 3 ข้อ แล้วลากลงในถาด"
            );


            setHidden(
                "Btn_CounsellingConfirm",
                true
            );


            console.log(
                "COUNSELLING RESET"
            );


            return;
        }
    }


    // ==================================================
    // CONFIRM
    // ==================================================

    if (btnConfirm) {

        const confirmBounds =
            getBounds(
                btnConfirm
            );


        const clickedConfirm =
            pointInside(
                mouseX,
                mouseY,
                confirmBounds,
                10
            );


        if (
            clickedConfirm !== true
        ) {
            return;
        }


        // ----------------------------------------------
        // Must select at least one card
        // ----------------------------------------------

        if (
            state.selectedCards.length === 0
        ) {

            setTextSafe(
                "Txt_Counselling_Instruction",
                "เลือกคำแนะนำอย่างน้อย 1 ข้อก่อนยืนยัน"
            );


            return;
        }


        // ----------------------------------------------
        // Lock immediately
        // ----------------------------------------------

        state.phase =
            "CONFIRMED";

        state.inputLockedUntil =
            Date.now() + 500;


        // ==================================================
        // CALCULATE SCORE
        // ==================================================

        let counsellingScore =
            0;


        let unsafeCount =
            0;


        const selectedCategories =
            [];


        const selectedDetails =
            [];


        state.selectedCards
            .forEach(cardId => {

                const config =
                    state.cardConfig[
                        cardId
                    ];


                if (!config) {
                    return;
                }


                counsellingScore +=
                    Number(
                        config.score || 0
                    );


                if (
                    config.isUnsafe === true
                ) {

                    unsafeCount +=
                        1;
                }


                selectedCategories.push(
                    config.category
                );


                selectedDetails.push({

                    cardId:
                        cardId,

                    category:
                        config.category,

                    score:
                        Number(
                            config.score || 0
                        ),

                    isUnsafe:
                        config.isUnsafe === true
                });
            });


        // Safety ceiling
        counsellingScore =
            Math.max(
                0,
                Math.min(
                    10,
                    counsellingScore
                )
            );


        // ==================================================
        // SAVE TO SESSION
        // ==================================================

        session.counselling_selected_cards =
            [
                ...state.selectedCards
            ];


        session.counselling_selected_categories =
            [
                ...selectedCategories
            ];


        session.counselling_selected_details =
            selectedDetails;


        session.counselling_selected_count =
            state.selectedCards.length;


        session.counselling_unsafe_count =
            unsafeCount;


        session.counselling_has_unsafe_advice =
            unsafeCount > 0;


        session.safe_use_counselling_score =
            counsellingScore;


        session.safe_use_counselling_max =
            10;


        session.counselling_completed =
            true;


        session.s06_counselling_completed =
            true;


        session.next_intervention_phase =
            "REFLECTION";


        // ==================================================
        // OPTIONAL COMPLETION FX
        // ==================================================

        setHidden(
            "FX_CounsellingComplete",
            false
        );


        // ==================================================
        // LOG
        // ==================================================

        console.log(
            "COUNSELLING CONFIRMED:",
            {
                selectedCards:
                    session.counselling_selected_cards,

                categories:
                    session.counselling_selected_categories,

                score:
                    counsellingScore,

                unsafeCount:
                    unsafeCount
            }
        );


        // ==================================================
        // GO TO REFLECTION
        // ==================================================

        gdjs.evtTools.runtimeScene.replaceScene(
            runtimeScene,
            "S07_Reflection",
            false
        );


        return;
    }


} catch (error) {

    console.error(
        "Counselling Control Router Error:",
        error
    );
}
};
gdjs.S06_95CounsellingCode.eventsList3 = function(runtimeScene) {

{


gdjs.S06_95CounsellingCode.userFunc0xbb6e58(runtimeScene);

}


};gdjs.S06_95CounsellingCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95CounsellingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95CounsellingCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.S06_95CounsellingCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.S06_95CounsellingCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.S06_95CounsellingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S06_95CounsellingCode.GDBG_9595S06_9595CounsellingObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDBG_9595S06_9595CounsellingObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595YaiSai_9595CounsellingObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595YaiSai_9595CounsellingObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595CounsellingFoodObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595CounsellingFoodObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDPanel_9595CounsellingTrayObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDPanel_9595CounsellingTrayObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595TitleObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595TitleObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595InstructionObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595InstructionObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595CountObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595CountObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingConfirmObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingConfirmObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingResetObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingResetObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959501Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959501Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959502Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959502Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959503Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959503Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959504Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959504Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959505Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959505Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card01Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card01Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card02Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card02Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card03Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card03Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card04Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card04Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card05Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card05Objects2.length = 0;

gdjs.S06_95CounsellingCode.eventsList4(runtimeScene);
gdjs.S06_95CounsellingCode.GDBG_9595S06_9595CounsellingObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDBG_9595S06_9595CounsellingObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595YaiSai_9595CounsellingObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595YaiSai_9595CounsellingObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595CounsellingFoodObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDSpr_9595CounsellingFoodObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDPanel_9595CounsellingTrayObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDPanel_9595CounsellingTrayObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595TitleObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595TitleObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595InstructionObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595InstructionObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595CountObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Counselling_9595CountObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingConfirmObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingConfirmObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingResetObjects1.length = 0;
gdjs.S06_95CounsellingCode.GDBtn_9595CounsellingResetObjects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959501Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959501Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959502Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959502Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959503Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959503Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959504Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959504Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959505Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDCard_9595Counselling_959505Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card01Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card01Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card02Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card02Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card03Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card03Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card04Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card04Objects2.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card05Objects1.length = 0;
gdjs.S06_95CounsellingCode.GDTxt_9595Card05Objects2.length = 0;


return;

}

gdjs['S06_95CounsellingCode'] = gdjs.S06_95CounsellingCode;
