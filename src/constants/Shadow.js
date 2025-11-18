const useShadowStyles = () => {
  return {
    borders: {
      widths: {
        none: "0",
        hairline: "1px",
        thin: "2px",
        base: "3px",
        thick: "4px",
        xthick: "6px",
      },
      styles: {
        solid: "solid",
        dashed: "dashed",
        dotted: "dotted",
        double: "double",
      },
      radius: {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "50%",
        pill: "9999px",
      },
      presets: {
        none: {
          width: "0",
          style: "solid",
          color: "transparent",
        },
        default: {
          width: "1px",
          style: "solid",
          color: "{colors.border.primary}",
        },
        emphasis: {
          width: "2px",
          style: "solid",
          color: "{colors.border.emphasis}",
        },
        interactive: {
          width: "2px",
          style: "solid",
          color: "{colors.border.interactive}",
        },
        error: {
          width: "2px",
          style: "solid",
          color: "{colors.border.error}",
        },
        success: {
          width: "2px",
          style: "solid",
          color: "{colors.border.success}",
        },
        dashed: {
          width: "1px",
          style: "dashed",
          color: "{colors.border.secondary}",
        },
      },
    },
    shadows: {
      levels: {
        none: {
          boxShadow: "none",
        },
        xs: {
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        },
        sm: {
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },
        base: {
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        md: {
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
        lg: {
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
        xl: {
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        },
        "2xl": {
          boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.25)",
        },
        inner: {
          boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        },
      },
      colors: {
        default: "rgba(0, 0, 0, 0.1)",
        dark: "rgba(0, 0, 0, 0.25)",
        light: "rgba(0, 0, 0, 0.05)",
        colored: {
          primary: "rgba(59, 130, 246, 0.3)",
          success: "rgba(34, 197, 94, 0.3)",
          warning: "rgba(245, 158, 11, 0.3)",
          error: "rgba(239, 68, 68, 0.3)",
        },
      },
      presets: {
        card: {
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },
        dropdown: {
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
        modal: {
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        },
        button: {
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        },
        "button-hover": {
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        "focus-ring": {
          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
        },
        "focus-ring-error": {
          boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.3)",
        },
      },
    },
    outline: {
      none: "0",
      base: "2px solid",
      offset: "2px",
      widths: {
        thin: "1px",
        base: "2px",
        thick: "3px",
      },
      styles: {
        solid: "solid",
        dashed: "dashed",
        dotted: "dotted",
      },
      presets: {
        focus: {
          outline: "2px solid {colors.focus.primary}",
          outlineOffset: "2px",
        },
        "focus-inset": {
          outline: "2px solid {colors.focus.primary}",
          outlineOffset: "-2px",
        },
        "focus-alternative": {
          outline: "2px dashed {colors.focus.secondary}",
          outlineOffset: "2px",
        },
      },
    },
  };
};
export default useShadowStyles;
