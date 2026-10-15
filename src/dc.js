import { useReducer, useRef } from 'react';

/**
 * Tiny stand-in for the design tool's DCLogic class, so each page keeps the mockup's own
 * logic (constructor, state, renderVals) unchanged. setState re-renders the page.
 */
export class DCLogic {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(patch) {
    const next = typeof patch === 'function' ? patch(this.state, this.props) : patch;
    this.state = { ...this.state, ...next };
    this._rerender?.();
  }
}

export function useLogic(Cls, props) {
  const [, rerender] = useReducer((n) => n + 1, 0);
  const ref = useRef(null);
  if (!ref.current) ref.current = new Cls(props);
  ref.current._rerender = rerender;
  ref.current.props = props;
  return ref.current;
}
