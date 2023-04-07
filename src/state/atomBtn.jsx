import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});

export default fontSizeState;