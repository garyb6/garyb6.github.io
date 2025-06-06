// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-extended';

// Custom assertions
expect.extend({
  toBeVisible(element) {
    const isVisible = element.offsetParent !== null;
    return {
      message: () => `expected ${element} to be visible`,
      pass: isVisible,
    };
  },
  toHaveClass(element, className) {
    const hasClass = element.classList.contains(className);
    return {
      message: () => `expected ${element} to have class ${className}`,
      pass: hasClass,
    };
  },
  toHaveStyle(element, style) {
    const computedStyle = window.getComputedStyle(element);
    const hasStyle = Object.entries(style).every(
      ([property, value]) => computedStyle[property as keyof CSSStyleDeclaration] === value
    );
    return {
      message: () => `expected ${element} to have style ${JSON.stringify(style)}`,
      pass: hasStyle,
    };
  },
}); 