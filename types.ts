export enum GameStep {
  START = 0,
  CONFIRM = 1,
  UNLOCK = 2,
  FINAL = 3
}

export interface ScreenProps {
  onNext: () => void;
  onReset?: () => void;
}