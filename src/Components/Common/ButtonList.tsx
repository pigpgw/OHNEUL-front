import React from 'react';
import { ItemContainer } from 'Components/styles/Common';
import Button from 'Components/Common/Button';

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
            <Button
              fontcolor="black"
              fontSize="1.6vh"
              margin="1vh"
              borderradius="10px"
              border="0"
              padding="1.2vh 1.5vh"
              buttoncolor="white"
              boxshadow="0px 2px 2px rgba(0, 0, 0, 0.25);"
              key={item.mood_id}
              onClick={() => onClick(item.mood_id)}
              clicked={item.clicked}
            >
              {item.mood}
            </Button>
          );
        }
        if ('hobby_id' in item) {
          return (
            <Button
              fontcolor="black"
              fontSize="1.6vh"
              margin="1vh"
              borderradius="10px"
              border="0"
              padding="1.2vh 1.5vh"
              buttoncolor="white"
              boxshadow="0px 2px 2px rgba(0, 0, 0, 0.25);"
              key={item.hobby_id}
              onClick={() => onClick(item.hobby_id)}
              clicked={item.clicked}
            >
              {item.hobby}
            </Button>
          );
        }
        return (
          <Button
            fontcolor="black"
            fontSize="1.6vh"
            margin="1vh"
            borderradius="10px"
            border="0"
            padding="1.2vh 1.5vh"
            buttoncolor="white"
            boxshadow="0px 2px 2px rgba(0, 0, 0, 0.25);"
            key={item.theme_id}
            onClick={() => onClick(item.theme_id)}
            clicked={item.clicked}
          >
            {item.theme}
          </Button>
        );
      })}
    </ItemContainer>
  );
};

export default React.memo(ButtonList);
