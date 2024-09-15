type Props = 
  | {type: 'from', loading?: undefined, value: string, onChange: (value: string) => void}
  | {type: 'to', loading?: boolean, value: string, onChange: (value: string) => void}

const commonStyles = { border: 0, height: '200px' }

const getPlaceholder = ({ type, loading }: { type: string, loading?: boolean }) => {
  if (type === 'from') return 'Type to translate'
  if (loading === true) return 'Loading...'
  return 'Translation'
}

const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles = type === 'from'
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#656565' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <textarea 
      name="toLanguage" 
      autoFocus={type === 'from'}
      disabled={type === 'to'} 
      value={value}
      onChange={handleChange} 
      placeholder={getPlaceholder({ type, loading })} 
      style={styles}
    />
  )
}

export default TextArea