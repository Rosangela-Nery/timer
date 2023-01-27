import { Cycle } from './reducer'

export enum ActionTypes {
  AddNewCycle = 'AddNewCycle',
  InterruptCurrentCycle = 'InterruptCurrentCycle',
  MarkCurrentCycleAsFinished = 'MarkCurrentCycleAsFinished',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.AddNewCycle,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MarkCurrentCycleAsFinished,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.InterruptCurrentCycle,
  }
}
