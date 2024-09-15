import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import { FromLanguage, Language } from "../types"

type Props = 
  | {type: 'from', value: FromLanguage, onChange: (Language: FromLanguage) => void}
  | {type: 'to', value: Language, onChange: (Language: Language) => void}

const LanguageSelector = ({onChange, type, value}:Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  console.log(value)

  return (
    <select onChange={handleChange} value={value}>
      {type === 'from' && <option value={AUTO_LANGUAGE}>Detected</option>}


      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector