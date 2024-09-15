import { useReducer } from "react"
import { AUTO_LANGUAGE } from "../constants"
import { FromLanguage, Language, LanguageActions, LanguageState } from "../types"

const initialState: LanguageState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: LanguageState, action: LanguageActions) => {
  const { type } = action

  if(type === 'INTERCHANGE_LANGUAGES'){
    if(state.fromLanguage === AUTO_LANGUAGE) return state
    
    return {
      ...state,
      toLanguage: state.fromLanguage,
      fromLanguage: state.toLanguage,
    }
  }

  if(type === 'SET_FROM_LANGUAGE'){
    return {
      ...state,
      fromLanguage: action.payload,
    }
  }

  if(type === 'SET_TO_LANGUAGE'){
    return {
      ...state,
      toLanguage: action.payload,
    }
  }

  if(type === 'SET_FROM_TEXT'){
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT'){
    return {
      ...state,
      loading: false,
      result: action.payload,
    }
  }

  return state
}

export function useLanguage (){
  const [{fromLanguage, toLanguage, fromText, result, loading}, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({type: 'INTERCHANGE_LANGUAGES'})
  }

  const setFormLanguage = (payload: FromLanguage) => {
    dispatch({type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage, toLanguage, fromText, result, loading, interchangeLanguages, setFormLanguage, setToLanguage, setFromText,setResult
  }
}