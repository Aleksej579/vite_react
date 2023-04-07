import React from 'react'
import fontSizeState from "../state/atomBtn"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function RecoilBtn() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return (
        <button 
            onClick={() => setFontSize((size) => size + 1)} 
            className='p-2 mx-2 border rounded text-white !bg-indigo-500 hover:!bg-indigo-800'
        >
            Click to Enlarge
        </button>
    )
}

export default RecoilBtn
