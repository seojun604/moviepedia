import { useEffect, useRef } from 'react';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import useTranslate from '../hooks/useTranslate';
import styles from './ReviewForm.module.css';
import FileInput from './FileInput';

function ReviewForm({
  review = {
    title: '',
    imgUrl: '',
    rating: 1,
    content: '',
  },
  onSubmit,
}) {
  const inputRef = useRef(null);
  const t = useTranslate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} action={onSubmit}>
      <FileInput name="imgFile" initialPreview={review.imgUrl} />
      <div className={styles.content}>
        <div className={styles.titleRating}>
          <Input
            name="title"
            defaultValue={review.title}
            placeholder={t('review title placeholder')}
            ref={inputRef}
          />
          <Select
            name="rating"
            defaultValue={review.rating}
            placeholder={t('review rating placeholder')}
          >
            <option value={1}>★</option>
            <option value={2}>★★</option>
            <option value={3}>★★★</option>
            <option value={4}>★★★★</option>
            <option value={5}>★★★★★</option>
          </Select>
        </div>
        <Textarea
          className={styles.textarea}
          name="content"
          defaultValue={review.content}
          placeholder={t('review content placeholder')}
        />
        <Button className={styles.button}>{t('submit button')}</Button>
      </div>
    </form>
  );
}

export default ReviewForm;
