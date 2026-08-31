import { type Config, mergeConfigs, validators } from "tailwind-merge";
import type { TwExtendedShadowsMergeGroupIds } from "./types";

export const withExtendedShadows = (
  prevConfig: Config<TwExtendedShadowsMergeGroupIds, string>
): Config<TwExtendedShadowsMergeGroupIds, string> => {
  return mergeConfigs<TwExtendedShadowsMergeGroupIds>(prevConfig, {
    extend: {
      classGroups: {
        // x-axis shadow offsets
        "extendedShadows.offset-x": [
          {
            "shadow-x": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // y-axis shadow offsets
        "extendedShadows.offset-y": [
          {
            "shadow-y": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // shadow blur
        "extendedShadows.blur": [
          {
            "shadow-blur": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // shadow spread
        "extendedShadows.spread": [
          {
            "shadow-spread": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // shadow opacity
        "extendedShadows.opacity": [
          {
            "shadow-opacity": [
              validators.isInteger,
              validators.isArbitraryNumber,
            ],
          },
        ],
        // shadows (layers)
        "extendedShadows.shadows": [
          {
            shadows: [validators.isInteger],
          },
        ],
        // shadows scale multiplier
        "extendedShadows.shadows-scale": [
          {
            "shadows-scale": [validators.isNumber],
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
              validators.isArbitraryValue,
            ],
          },
        ],
        // inset shadow color
        "extendedShadows.inset-shadow-color": [
          {
            "inset-shadow": [validators.isAny],
          },
        ],
        // inset x-axis shadow offsets
        "extendedShadows.inset-offset-x": [
          {
            "inset-shadow-x": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // inset y-axis shadow offsets
        "extendedShadows.inset-offset-y": [
          {
            "inset-shadow-y": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // inset shadow blur
        "extendedShadows.inset-blur": [
          {
            "inset-shadow-blur": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // inset shadow spread
        "extendedShadows.inset-spread": [
          {
            "inset-shadow-spread": [
              "px",
              validators.isNumber,
              validators.isArbitraryLength,
            ],
          },
        ],
        // inset shadow opacity
        "extendedShadows.inset-opacity": [
          {
            "inset-shadow-opacity": [
              validators.isInteger,
              validators.isArbitraryNumber,
            ],
          },
        ],
        // inset shadows (layers)
        "extendedShadows.inset-shadows": [
          {
            "inset-shadows": [validators.isInteger],
          },
        ],
        // inset shadows scale multiplier
        "extendedShadows.inset-shadows-scale": [
          {
            "inset-shadows-scale": [validators.isNumber],
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
