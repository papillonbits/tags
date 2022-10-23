/* eslint-disable no-console, react/destructuring-assignment, class-methods-use-this, react/no-array-index-key, react/require-default-props, react/jsx-no-bind */
import { useState, useRef, useEffect } from 'react'
import { arrayOf, shape, number, string } from 'prop-types'
import { Tag } from '../Info/Tag'
import { Input } from '../../atom/Text/Input'
import styles from './TagList.scss'

export function TagList(props) {
  const [items, setItems] = useState(props.items)
  const [newItemText, setNewItemText] = useState('')
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.getElementsByTagName('input')[0].focus()
  })

  function onChange(e) {
    setNewItemText(e.target.value)
  }

  function onKeyDown(e) {
    if (newItemText.indexOf(',') >= 0 && (e.keyCode === 188 || e.keyCode === 9)) {
      setNewItemText(newItemText.replace(',', ''))
      return
    }

    if (newItemText !== '' && (e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 188)) {
      const newItems = items
      newItems[items.length] = { id: items.length, text: newItemText }

      setItems(newItems)
      setNewItemText('')
    }

    if (e.keyCode === 8) {
      const newItems = items.slice(0, -1)

      setItems(newItems)
    }
  }

  function onMouseDown(id) {
    const newItems = items.filter((item) => item.id !== id)

    setItems(newItems)
  }

  return (
    <div className={styles.tagList}>
      {items && items.length > 0
        ? items.map((item, index) => <Tag key={index} id={item.id} text={item.text} onMouseDown={onMouseDown} />)
        : null}
      <div ref={inputEl} className={styles.tagListNewTag}>
        <Input onChange={onChange} onKeyDown={onKeyDown} borderless val={newItemText} />
      </div>
    </div>
  )
}

TagList.propTypes = {
  items: arrayOf(
    shape({
      id: number,
      text: string,
    }),
  ),
}
