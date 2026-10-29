gdjs.S00_95BootCode = {};
gdjs.S00_95BootCode.localVariables = [];
gdjs.S00_95BootCode.idToCallbackMap = new Map();
gdjs.S00_95BootCode.GDTxt_9595LoadStatusObjects1= [];
gdjs.S00_95BootCode.GDTxt_9595LoadStatusObjects2= [];
gdjs.S00_95BootCode.GDBgBObjects1= [];
gdjs.S00_95BootCode.GDBgBObjects2= [];
gdjs.S00_95BootCode.GDlogoObjects1= [];
gdjs.S00_95BootCode.GDlogoObjects2= [];
gdjs.S00_95BootCode.GDPanel_9595BootOverlayObjects1= [];
gdjs.S00_95BootCode.GDPanel_9595BootOverlayObjects2= [];
gdjs.S00_95BootCode.GDBar_9595BootProgressObjects1= [];
gdjs.S00_95BootCode.GDBar_9595BootProgressObjects2= [];
gdjs.S00_95BootCode.GDTxt_9595BootVersionObjects1= [];
gdjs.S00_95BootCode.GDTxt_9595BootVersionObjects2= [];
gdjs.S00_95BootCode.GDSpr_9595LoadHerbIconObjects1= [];
gdjs.S00_95BootCode.GDSpr_9595LoadHerbIconObjects2= [];


gdjs.S00_95BootCode.userFunc0x20ea008 = function GDJSInlineCode(runtimeScene) {
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
gdjs.S00_95BootCode.eventsList0 = function(runtimeScene) {

{


gdjs.S00_95BootCode.userFunc0x20ea008(runtimeScene);

}


};gdjs.S00_95BootCode.userFunc0x1278678 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S00 - BOOT INITIALIZER
//
// Responsibilities:
// 1. Initialize boot visuals.
// 2. Resolve GAME_DATA resource.
// 3. Load and parse game_data.json.
// 4. Perform basic structural validation.
// 5. Expose loaded data globally.
// 6. Hand off to Boot Visual Engine.
// ======================================================

try {

    // ==================================================
    // ONE-TIME GUARD
    // ==================================================

    if (
        runtimeScene.__morYaBootInitialized === true
    ) {
        return;
    }


    runtimeScene.__morYaBootInitialized =
        true;


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


    const setOpacitySafe =
        (name, value) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setOpacity ===
                        "function"
                    ) {

                        obj.setOpacity(
                            value
                        );
                    }
                });
        };


    const setAngleSafe =
        (name, value) => {

            const obj =
                getObj(name);


            if (
                obj &&
                typeof obj.setAngle === "function"
            ) {

                obj.setAngle(
                    value
                );
            }
        };


    const setProgress =
        (value) => {

            const progress =
                Math.max(
                    0,
                    Math.min(
                        100,
                        Number(value) || 0
                    )
                );


            runtimeScene
                .getVariables()
                .get("BootProgress")
                .setNumber(
                    progress
                );


            if (
                globalThis.MorYaBootState
            ) {

                globalThis.MorYaBootState.progress =
                    progress;
            }
        };


    // ==================================================
    // FIND RESOURCE FILE
    //
    // Prefer the GDevelop resource named GAME_DATA.
    // Fallback to game_data.json.
    // ==================================================

    const findGameDataResourceFile =
        () => {

            let resources =
                null;


            // ------------------------------------------
            // Runtime game data
            // ------------------------------------------

            try {

                const game =
                    runtimeScene.getGame();


                if (
                    game &&
                    typeof game.getGameData ===
                    "function"
                ) {

                    const gameData =
                        game.getGameData();


                    if (
                        gameData &&
                        gameData.resources &&
                        Array.isArray(
                            gameData.resources.resources
                        )
                    ) {

                        resources =
                            gameData.resources.resources;
                    }
                }

            } catch (error) {

                console.warn(
                    "BOOT: Runtime resource lookup unavailable",
                    error
                );
            }


            // ------------------------------------------
            // Project data fallback
            // ------------------------------------------

            if (
                !Array.isArray(resources)
            ) {

                try {

                    if (
                        gdjs.projectData &&
                        gdjs.projectData.resources &&
                        Array.isArray(
                            gdjs.projectData.resources.resources
                        )
                    ) {

                        resources =
                            gdjs.projectData.resources.resources;
                    }

                } catch (error) {

                    // Safe fallback below.
                }
            }


            // ------------------------------------------
            // Find GAME_DATA
            // ------------------------------------------

            if (
                Array.isArray(resources)
            ) {

                const resource =
                    resources.find(
                        item =>
                            item &&
                            item.name === "GAME_DATA"
                    );


                if (
                    resource &&
                    resource.file
                ) {

                    return resource.file;
                }
            }


            // ------------------------------------------
            // Final fallback
            // ------------------------------------------

            return "game_data.json";
        };


    // ==================================================
    // BASIC DATA VALIDATION
    //
    // This is intentionally structural.
    // Detailed content validation remains in data layer.
    // ==================================================

    const validateGameData =
        (data) => {

            const errors =
                [];


            const warnings =
                [];


            if (
                !data ||
                typeof data !== "object"
            ) {

                errors.push(
                    "GAME_DATA is not a valid object."
                );


                return {
                    valid:
                        false,

                    errors:
                        errors,

                    warnings:
                        warnings
                };
            }


            // Empty object check
            if (
                Object.keys(data).length === 0
            ) {

                errors.push(
                    "GAME_DATA is empty."
                );
            }


            // Known project references.
            // Missing refs are warnings here rather than
            // fatal errors because some builds may inline
            // the data instead.
            const serialized =
                JSON.stringify(
                    data
                );


            const knownRefs =
                [

                    "case_master",
                    "herb_master",
                    "scoring_rubric",
                    "outcome_master",
                    "progression_master"

                ];


            knownRefs.forEach(
                ref => {

                    if (
                        !serialized.includes(
                            ref
                        )
                    ) {

                        warnings.push(
                            "Reference not detected: " +
                            ref
                        );
                    }
                }
            );


            return {

                valid:
                    errors.length === 0,

                errors:
                    errors,

                warnings:
                    warnings
            };
        };


    // ==================================================
    // BOOT STATE
    // ==================================================

    globalThis.MorYaBootState = {

        active:
            true,

        phase:
            "INTRO",

        startedAt:
            Date.now(),

        phaseStartedAt:
            Date.now(),

        minimumBootMs:
            1500,

        readyHoldMs:
            450,

        progress:
            0,

        loadStarted:
            false,

        loadComplete:
            false,

        loadFailed:
            false,

        transitionStarted:
            false,

        resourceFile:
            "",

        errorMessage:
            "",

        validationWarnings:
            []
    };


    const state =
        globalThis.MorYaBootState;


    // ==================================================
    // INITIAL VISUAL STATE
    // ==================================================

    setOpacitySafe(
        "logo",
        0
    );


    setOpacitySafe(
        "Spr_LoadHerbIcon",
        0
    );


    setOpacitySafe(
        "Txt_LoadStatus",
        0
    );


    setOpacitySafe(
        "Bar_BootProgress",
        0
    );


    setOpacitySafe(
        "Txt_BootVersion",
        0
    );


    setAngleSafe(
        "Spr_LoadHerbIcon",
        0
    );


    setTextSafe(
        "Txt_LoadStatus",
        "กำลังเตรียมเรือนหมอยา..."
    );


    setTextSafe(
        "Txt_BootVersion",
        "v0.1-D.8"
    );


    setProgress(
        0
    );


    // ==================================================
    // RESOLVE RESOURCE
    // ==================================================

    const resourceFile =
        findGameDataResourceFile();


    state.resourceFile =
        resourceFile;


    console.log(
        "BOOT GAME_DATA RESOURCE:",
        resourceFile
    );


    // ==================================================
    // START LOADING
    // ==================================================

    state.loadStarted =
        true;


    state.phase =
        "LOADING";


    state.phaseStartedAt =
        Date.now();


    setProgress(
        12
    );


    setTextSafe(
        "Txt_LoadStatus",
        "กำลังเตรียมข้อมูลสมุนไพร..."
    );


    // ==================================================
    // FETCH GAME DATA
    // ==================================================

    fetch(
        resourceFile,
        {
            cache:
                "no-store"
        }
    )

    .then(response => {

        if (
            !response.ok
        ) {

            throw new Error(
                "HTTP " +
                response.status +
                " while loading " +
                resourceFile
            );
        }


        setProgress(
            45
        );


        return response.json();
    })

    .then(data => {

        setProgress(
            72
        );


        // ==============================================
        // VALIDATE
        // ==============================================

        const validation =
            validateGameData(
                data
            );


        if (
            validation.valid !== true
        ) {

            throw new Error(
                validation.errors.join(
                    " | "
                )
            );
        }


        state.validationWarnings =
            validation.warnings;


        // ==============================================
        // EXPOSE DATA
        // ==============================================

        globalThis.MorYaGameData =
            data;


        // Alias retained for convenience / future
        // compatibility with data-driven systems.
        globalThis.GAME_DATA =
            data;


        setProgress(
            92
        );


        // ==============================================
        // READY
        // ==============================================

        state.loadComplete =
            true;


        state.phase =
            "READY";


        state.phaseStartedAt =
            Date.now();


        setProgress(
            100
        );


        setTextSafe(
            "Txt_LoadStatus",
            "พร้อมเข้าสู่เรือนหมอยา"
        );


        console.log(
            "BOOT GAME_DATA READY:",
            {
                resource:
                    resourceFile,

                warnings:
                    validation.warnings,

                topLevelKeys:
                    Object.keys(data)
            }
        );
    })

    .catch(error => {

        state.loadFailed =
            true;


        state.phase =
            "ERROR";


        state.phaseStartedAt =
            Date.now();


        state.errorMessage =
            String(
                error &&
                error.message
                    ? error.message
                    : error
            );


        setTextSafe(
            "Txt_LoadStatus",
            "ไม่สามารถเตรียมข้อมูลเกมได้"
        );


        console.error(
            "BOOT GAME_DATA LOAD ERROR:",
            error
        );
    });


    console.log(
        "S00 BOOT INITIALIZED"
    );


} catch (error) {

    runtimeScene.__morYaBootInitialized =
        false;


    console.error(
        "S00 Boot Initializer Error:",
        error
    );
}
};
gdjs.S00_95BootCode.eventsList1 = function(runtimeScene) {

{


gdjs.S00_95BootCode.userFunc0x1278678(runtimeScene);

}


};gdjs.S00_95BootCode.userFunc0x1368998 = function GDJSInlineCode(runtimeScene) {
"use strict";
// ======================================================
// เรือน หมอ ยา
// S00 - BOOT VISUAL ENGINE
//
// Handles:
// - Logo fade in
// - Loading icon fade + rotation
// - Status / progress visibility
// - Minimum boot duration
// - READY hold
// - Scene transition
// ======================================================

try {

    const state =
        globalThis.MorYaBootState;


    if (
        !state ||
        state.active !== true
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


    const clamp01 =
        (value) => {

            return Math.max(
                0,
                Math.min(
                    1,
                    value
                )
            );
        };


    const lerp =
        (
            start,
            end,
            t
        ) => {

            return (
                start +
                (end - start) * t
            );
        };


    const setOpacitySafe =
        (
            name,
            opacity
        ) => {

            runtimeScene
                .getObjects(name)
                .forEach(obj => {

                    if (
                        typeof obj.setOpacity ===
                        "function"
                    ) {

                        obj.setOpacity(
                            Math.round(
                                Math.max(
                                    0,
                                    Math.min(
                                        255,
                                        opacity
                                    )
                                )
                            )
                        );
                    }
                });
        };


    // ==================================================
    // TIME
    // ==================================================

    const now =
        Date.now();


    const elapsed =
        now -
        state.startedAt;


    // ==================================================
    // LOGO FADE
    //
    // 100 ms -> 650 ms
    // ==================================================

    const logoT =
        clamp01(
            (
                elapsed -
                100
            ) /
            550
        );


    setOpacitySafe(
        "logo",
        lerp(
            0,
            255,
            logoT
        )
    );


    // ==================================================
    // LOADING ICON FADE
    //
    // 450 ms -> 800 ms
    // ==================================================

    const iconT =
        clamp01(
            (
                elapsed -
                450
            ) /
            350
        );


    setOpacitySafe(
        "Spr_LoadHerbIcon",
        lerp(
            0,
            255,
            iconT
        )
    );


    // ==================================================
    // STATUS / BAR FADE
    //
    // 600 ms -> 950 ms
    // ==================================================

    const uiT =
        clamp01(
            (
                elapsed -
                600
            ) /
            350
        );


    setOpacitySafe(
        "Txt_LoadStatus",
        lerp(
            0,
            255,
            uiT
        )
    );


    setOpacitySafe(
        "Bar_BootProgress",
        lerp(
            0,
            255,
            uiT
        )
    );


    // ==================================================
    // VERSION FADE
    // ==================================================

    const versionT =
        clamp01(
            (
                elapsed -
                800
            ) /
            400
        );


    setOpacitySafe(
        "Txt_BootVersion",
        lerp(
            0,
            150,
            versionT
        )
    );


    // ==================================================
    // HERBAL LOADING ICON ROTATION
    //
    // ~42 degrees / second
    // ==================================================

    const icon =
        getObj(
            "Spr_LoadHerbIcon"
        );


    if (
        icon &&
        typeof icon.setAngle === "function"
    ) {

        const angle =
            (
                elapsed *
                0.042
            ) % 360;


        icon.setAngle(
            angle
        );
    }


    // ==================================================
    // ERROR
    //
    // Stay on Boot screen.
    // Do NOT enter game with invalid/unloaded data.
    // ==================================================

    if (
        state.phase === "ERROR"
    ) {

        return;
    }


    // ==================================================
    // WAIT UNTIL DATA READY
    // ==================================================

    if (
        state.loadComplete !== true
    ) {

        return;
    }


    // ==================================================
    // MINIMUM BOOT DISPLAY TIME
    // ==================================================

    if (
        elapsed <
        state.minimumBootMs
    ) {

        return;
    }


    // ==================================================
    // READY HOLD
    // ==================================================

    const readyElapsed =
        now -
        state.phaseStartedAt;


    if (
        readyElapsed <
        state.readyHoldMs
    ) {

        return;
    }


    // ==================================================
    // TRANSITION GUARD
    // ==================================================

    if (
        state.transitionStarted === true
    ) {

        return;
    }


    state.transitionStarted =
        true;


    state.active =
        false;


    console.log(
        "BOOT COMPLETE -> S01_MainMenu"
    );


    // ==================================================
    // MAIN MENU
    // ==================================================

    gdjs.evtTools.runtimeScene.replaceScene(
        runtimeScene,
        "S01_MainMenu",
        false
    );


} catch (error) {

    console.error(
        "S00 Boot Visual Engine Error:",
        error
    );
}
};
gdjs.S00_95BootCode.eventsList2 = function(runtimeScene) {

{


gdjs.S00_95BootCode.userFunc0x1368998(runtimeScene);

}


};gdjs.S00_95BootCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S00_95BootCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.S00_95BootCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.S00_95BootCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bar_BootProgress"), gdjs.S00_95BootCode.GDBar_9595BootProgressObjects1);
{for(var i = 0, len = gdjs.S00_95BootCode.GDBar_9595BootProgressObjects1.length ;i < len;++i) {
    gdjs.S00_95BootCode.GDBar_9595BootProgressObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), null);
}
}
}

}


};

gdjs.S00_95BootCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S00_95BootCode.GDTxt_9595LoadStatusObjects1.length = 0;
gdjs.S00_95BootCode.GDTxt_9595LoadStatusObjects2.length = 0;
gdjs.S00_95BootCode.GDBgBObjects1.length = 0;
gdjs.S00_95BootCode.GDBgBObjects2.length = 0;
gdjs.S00_95BootCode.GDlogoObjects1.length = 0;
gdjs.S00_95BootCode.GDlogoObjects2.length = 0;
gdjs.S00_95BootCode.GDPanel_9595BootOverlayObjects1.length = 0;
gdjs.S00_95BootCode.GDPanel_9595BootOverlayObjects2.length = 0;
gdjs.S00_95BootCode.GDBar_9595BootProgressObjects1.length = 0;
gdjs.S00_95BootCode.GDBar_9595BootProgressObjects2.length = 0;
gdjs.S00_95BootCode.GDTxt_9595BootVersionObjects1.length = 0;
gdjs.S00_95BootCode.GDTxt_9595BootVersionObjects2.length = 0;
gdjs.S00_95BootCode.GDSpr_9595LoadHerbIconObjects1.length = 0;
gdjs.S00_95BootCode.GDSpr_9595LoadHerbIconObjects2.length = 0;

gdjs.S00_95BootCode.eventsList3(runtimeScene);
gdjs.S00_95BootCode.GDTxt_9595LoadStatusObjects1.length = 0;
gdjs.S00_95BootCode.GDTxt_9595LoadStatusObjects2.length = 0;
gdjs.S00_95BootCode.GDBgBObjects1.length = 0;
gdjs.S00_95BootCode.GDBgBObjects2.length = 0;
gdjs.S00_95BootCode.GDlogoObjects1.length = 0;
gdjs.S00_95BootCode.GDlogoObjects2.length = 0;
gdjs.S00_95BootCode.GDPanel_9595BootOverlayObjects1.length = 0;
gdjs.S00_95BootCode.GDPanel_9595BootOverlayObjects2.length = 0;
gdjs.S00_95BootCode.GDBar_9595BootProgressObjects1.length = 0;
gdjs.S00_95BootCode.GDBar_9595BootProgressObjects2.length = 0;
gdjs.S00_95BootCode.GDTxt_9595BootVersionObjects1.length = 0;
gdjs.S00_95BootCode.GDTxt_9595BootVersionObjects2.length = 0;
gdjs.S00_95BootCode.GDSpr_9595LoadHerbIconObjects1.length = 0;
gdjs.S00_95BootCode.GDSpr_9595LoadHerbIconObjects2.length = 0;


return;

}

gdjs['S00_95BootCode'] = gdjs.S00_95BootCode;
