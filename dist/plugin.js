"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withExtendedShadows = void 0;
const tailwind_merge_1 = require("tailwind-merge");
const withExtendedShadows = (prevConfig) => {
    return (0, tailwind_merge_1.mergeConfigs)(prevConfig, {
        extend: {
            classGroups: {
                // x-axis shadow offsets
                "extendedShadows.offset-x": [
                    {
                        "shadow-x": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // y-axis shadow offsets
                "extendedShadows.offset-y": [
                    {
                        "shadow-y": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // shadow blur
                "extendedShadows.blur": [
                    {
                        "shadow-blur": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // shadow spread
                "extendedShadows.spread": [
                    {
                        "shadow-spread": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // shadow opacity
                "extendedShadows.opacity": [
                    {
                        "shadow-opacity": [
                            tailwind_merge_1.validators.isInteger,
                            tailwind_merge_1.validators.isArbitraryNumber,
                        ],
                    },
                ],
                // shadows (layers)
                "extendedShadows.shadows": [
                    {
                        shadows: [tailwind_merge_1.validators.isInteger],
                    },
                ],
                // shadows scale multiplier
                "extendedShadows.shadows-scale": [
                    {
                        "shadows-scale": [tailwind_merge_1.validators.isNumber],
                    },
                ],
                // shadows easings
                "extendedShadows.shadows-ease": [
                    {
                        "shadows-ease": ["in", "out"],
                    },
                ],
                // inset shadow sizes (v4 polyfill: bare, 2xs, xs, sm, none)
                "extendedShadows.inset-shadow": [
                    {
                        "inset-shadow": [
                            "",
                            "2xs",
                            "xs",
                            "sm",
                            "none",
                            tailwind_merge_1.validators.isArbitraryValue,
                        ],
                    },
                ],
                // inset shadow color
                "extendedShadows.inset-shadow-color": [
                    {
                        "inset-shadow": [tailwind_merge_1.validators.isAny],
                    },
                ],
                // inset x-axis shadow offsets
                "extendedShadows.inset-offset-x": [
                    {
                        "inset-shadow-x": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // inset y-axis shadow offsets
                "extendedShadows.inset-offset-y": [
                    {
                        "inset-shadow-y": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // inset shadow blur
                "extendedShadows.inset-blur": [
                    {
                        "inset-shadow-blur": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // inset shadow spread
                "extendedShadows.inset-spread": [
                    {
                        "inset-shadow-spread": [
                            "px",
                            tailwind_merge_1.validators.isNumber,
                            tailwind_merge_1.validators.isArbitraryLength,
                        ],
                    },
                ],
                // inset shadow opacity
                "extendedShadows.inset-opacity": [
                    {
                        "inset-shadow-opacity": [
                            tailwind_merge_1.validators.isInteger,
                            tailwind_merge_1.validators.isArbitraryNumber,
                        ],
                    },
                ],
                // inset shadows (layers)
                "extendedShadows.inset-shadows": [
                    {
                        "inset-shadows": [tailwind_merge_1.validators.isInteger],
                    },
                ],
                // inset shadows scale multiplier
                "extendedShadows.inset-shadows-scale": [
                    {
                        "inset-shadows-scale": [tailwind_merge_1.validators.isNumber],
                    },
                ],
                // inset shadows easings
                "extendedShadows.inset-shadows-ease": [
                    {
                        "inset-shadows-ease": ["in", "out"],
                    },
                ],
            },
        },
    });
};
exports.withExtendedShadows = withExtendedShadows;
