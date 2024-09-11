import { ReactElement } from 'react'
import style from './App.module.css'
import InterchangeIcon from './components/InterchangeIcon'
import { AUTO_LANGUAGE } from './constants'
import { useLanguage } from './hooks/useLanguage'

function App (): ReactElement {
  const {fromLanguage, toLanguage, formText, result, loading, interchangeLanguages, setFormLanguage, setToLanguage, setFormText,setResult} = useLanguage()

  return (
    <div className={style.mainWrapper}>
      <h1>Google translate</h1>

      <div className={style.languageWrapper}>
        <div className={style.translateWrapper}>
          <h2>From</h2>
          <p>{fromLanguage}</p>
        </div>

        <button disabled={fromLanguage === AUTO_LANGUAGE} className={style.changeButton} onClick={interchangeLanguages}>
          <InterchangeIcon />
        </button>

        <div className={style.translateWrapper}>
          <h2>To</h2>
          <p>{toLanguage}</p>
        </div>
      </div>
    </div>
  )
}

export default App
