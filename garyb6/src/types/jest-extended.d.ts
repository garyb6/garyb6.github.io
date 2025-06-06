import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeVisible(): R;
      toBeRequired(): R;
      toBeValid(): R;
      toBeInvalid(): R;
      toHaveValue(value: string | string[] | number): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveClass(...classNames: string[]): R;
      toHaveStyle(style: Record<string, any>): R;
      toHaveFocus(): R;
      toBeDisabled(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveLength(length: number): R;
      toSatisfyAll(predicate: (value: any) => boolean): R;
      not: Matchers<R>;
    }

    interface Expect {
      <T = any>(actual: T): Matchers<T>;
    }
  }
}

declare module '@testing-library/jest-dom' {
  export interface Matchers<R = unknown> {
    not: Matchers<R>;
  }
}

export {}; 