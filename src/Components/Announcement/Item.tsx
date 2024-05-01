import { Content, Wrapper } from 'Components/styles/Common';

interface ItemProps {
  usedCoin: string;
  usedAt: string;
}

function Item({ usedCoin, usedAt }: ItemProps) {
  return (
    <Wrapper width="100%" border="1px solid lightGray" padding="10px">
      <Content textAlign="left" fonstWeight="600" fontSize="2vh">
        사용 일시 : {new Date(usedAt).toLocaleString()}
      </Content>
      <Content margin="1vh 0 0 0" textAlign="left" fontSize="2vh">
        사용 코인 개수 : {usedCoin}
      </Content>
    </Wrapper>
  );
}

export default Item;
