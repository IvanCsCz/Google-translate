import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = typeof Language | AutoLanguage


export interface LanguageState {
  fromLanguage: FromLanguage
  toLanguage: Language
  formText: string
  result: string
  loading: boolean
}

export type LanguageActions = 
  | {type: 'SET_FROM_LANGUAGE', payload: FromLanguage}
  | {type: 'INTERCHANGE_LANGUAGES'}
  | {type: 'SET_TO_LANGUAGE', payload: Language}
  | {type: 'SET_FROM_TEXT', payload: string}
  | {type: 'SET_RESULT', payload: string}
  