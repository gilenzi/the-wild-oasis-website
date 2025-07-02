'use client';

import {useState} from 'react';
import styles from './TextExpander.module.css';

export default function TextExpander({linesToShow, text, classes}) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <p
        style={{'--line-clamp': !readMore ? linesToShow : 'none'}}
        className={`${styles.textClamp} ${classes}`}
      >
        {text}
      </p>
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setReadMore((prev) => !prev)}
      >
        {!readMore ? 'Show more' : 'Show less'}
      </button>
    </>
  );
}
