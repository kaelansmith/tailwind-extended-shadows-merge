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
      },
    },
  });
};
