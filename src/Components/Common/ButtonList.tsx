import { ItemBtn, ItemContainer } from 'Components/styles/Common';
import React from 'react';

interface Mood {
  mood_id: number;
  mood: string;
  clicked?: boolean;
}

interface Hobby {
  hobby_id: number;
  hobby: string;
  clicked?: boolean;
}

interface Themes {
  theme_id: number;
  theme: string;
  clicked?: boolean;
}

type ButtonListProps = {
  items: Array<Mood | Hobby | Themes>;
  onClick: (id: number) => void;
};

const ButtonList = ({ items, onClick }: ButtonListProps) => {
  return (
    <ItemContainer>
      {items?.map((item) => {
        if ('mood_id' in item) {
          return (
            <ItemBtn
              key={item.mood_id}
              onClick={() => onClick(item.mood_id)}
              clicked={item.clicked}
            >
              {item.mood}
            </ItemBtn>
          );
        }
        if ('hobby_id' in item) {
          return (
            <ItemBtn
              key={item.hobby_id}
              onClick={() => onClick(item.hobby_id)}
              clicked={item.clicked}
            >
              {item.hobby}
            </ItemBtn>
          );
        }
        return (
          <ItemBtn
            key={item.theme_id}
            onClick={() => onClick(item.theme_id)}
            clicked={item.clicked}
          >
            {item.theme}
          </ItemBtn>
        );
      })}
    </ItemContainer>
  );
};

export default React.memo(ButtonList);
