import { Action, State } from '@/types/Context';
import { actions } from './actions';

export function chartsLabelReducer(state: State, action: Action) {
  switch (action.type) {
    case actions.EFFICIENCY_CLICK:
    case actions.DOWNTIME_CLICK:
    case actions.SHIFT_CLICK:
      if (state.label !== action.payload) {
        return { ...state, label: action.payload };
      } else {
        return { ...state, label: '' };
      }
    default:
      return state;
  }
}
