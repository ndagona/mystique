const useTextStyles = () => {
  return {
    textStyles: {
      display: {
        display1: {
          fontSize: "4.5rem",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        },
        display2: {
          fontSize: "4rem",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        },
        display3: {
          fontSize: "3.5rem",
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        },
      },
      heading: {
        h1: {
          fontSize: "3rem",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        },
        h2: {
          fontSize: "2.5rem",
          fontWeight: 600,
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        },
        h3: {
          fontSize: "2rem",
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: "0em",
        },
        h4: {
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: "0em",
        },
        h5: {
          fontSize: "1.25rem",
          fontWeight: 600,
          lineHeight: 1.5,
          letterSpacing: "0em",
        },
        h6: {
          fontSize: "1.125rem",
          fontWeight: 600,
          lineHeight: 1.5,
          letterSpacing: "0em",
        },
      },
      body: {
        large: {
          fontSize: "1.125rem",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "0em",
        },
        base: {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "0em",
        },
        small: {
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: "0em",
        },
        xsmall: {
          fontSize: "0.75rem",
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: "0em",
        },
      },
      label: {
        large: {
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
        },
        base: {
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
        },
        small: {
          fontSize: "0.75rem",
          fontWeight: 500,
          lineHeight: 1.3,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        },
      },
      button: {
        large: {
          fontSize: "1.125rem",
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "0.02em",
          textTransform: "none",
        },
        base: {
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "0.02em",
          textTransform: "none",
        },
        small: {
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "0.02em",
          textTransform: "none",
        },
      },
      utility: {
        caption: {
          fontSize: "0.75rem",
          fontWeight: 400,
          lineHeight: 1.3,
          letterSpacing: "0.02em",
          fontStyle: "italic",
        },
        code: {
          fontFamily: "monospace",
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: "0em",
        },
        quote: {
          fontSize: "1.125rem",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "0em",
          fontStyle: "italic",
        },
      },
      weights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      fontFamilies: {
        sans: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        serif: "Georgia, 'Times New Roman', Times, serif",
        mono: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      },
    },
  };
};

export default useTextStyles;
