import { Button } from 'components';
import { ChangeEvent, useState } from 'react';
import * as S from './RatingFeedback.styles';

/**
 * Rating component where user can give a score between 1 to 5 based on his or her experience
 */
export default function RatingFeedback() {
  const [rating, setRating] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(event.target.value));
  };

  const inputProps = (value: number) => ({
    type: 'radio',
    name: 'rating',
    value: value.toString(),
    onChange: handleChange
  });

  const handleSubmit = () => {
    alert(`Submit fake, o rating enviado seria de ${rating}`);
  };

  return (
    <S.Wrapper>
      <S.Heading>How did we do?</S.Heading>

      <S.Description>
        Please let us know how good was your experience buying with us. All feedback is appreciated
        to help us improve our services!
      </S.Description>

      <S.ScoreButtonsRow>
        <S.ScoreButton>
          <input {...inputProps(1)} />
          <span className='checkmark'>1</span>
        </S.ScoreButton>

        <S.ScoreButton>
          <input {...inputProps(2)} />
          <span className='checkmark'>2</span>
        </S.ScoreButton>

        <S.ScoreButton>
          <input {...inputProps(3)} />
          <span className='checkmark'>3</span>
        </S.ScoreButton>

        <S.ScoreButton>
          <input {...inputProps(4)} />
          <span className='checkmark'>4</span>
        </S.ScoreButton>

        <S.ScoreButton>
          <input {...inputProps(5)} />
          <span className='checkmark'>5</span>
        </S.ScoreButton>
      </S.ScoreButtonsRow>

      <Button fullWidth onClick={handleSubmit}>
        SEND FEEDBACK
      </Button>
    </S.Wrapper>
  );
}
