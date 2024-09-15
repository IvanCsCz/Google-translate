import { ReactElement } from 'react'
import style from './App.module.css'
import InterchangeIcon from './components/InterchangeIcon'
import LanguageSelector from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { AUTO_LANGUAGE } from './constants'
import { useLanguage } from './hooks/useLanguage'

function App (): ReactElement {
  const {fromLanguage, toLanguage, fromText, result, loading, interchangeLanguages, setFormLanguage, setToLanguage, setFromText, setResult} = useLanguage()

  return (
    <div className={style.mainWrapper}>
      <h1>Google translate</h1>

      <div className={style.languageWrapper}>
        <div className={style.translateWrapper}>
          <LanguageSelector type='from' onChange={setFormLanguage} value={fromLanguage}/>
          <TextArea type='from' value={fromText} onChange={setFromText} />
        </div>

        <button disabled={fromLanguage === AUTO_LANGUAGE} className={style.changeButton} onClick={interchangeLanguages}>
          <InterchangeIcon />
        </button>

        <div className={style.translateWrapper}>
          <LanguageSelector type='to' onChange={setToLanguage} value={toLanguage}/>
          <TextArea type='to' loading={loading} value={result} onChange={setResult} />
        </div>
      </div>
    </div>
  )
}

export default App
