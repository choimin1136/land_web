import React from 'react'

const Around = () => {
  return (
    <div id='info.main.around' className='infoAround'>
        <h3 className='tit_around'>주변 탐색</h3>
        <ul className='list_around'>
            <li>
                <button type="button" className='btn_around'>
                    <span className='ico_bus'></span>
                    <span className='txt_around'>버스</span>
                </button>
            </li>
            <li>
                <button type="button" className='btn_around'>
                    <span className='ico_sub'></span>
                    <span className='txt_around'>지하철</span>
                </button>
            </li>
            <li>
                <button type="button" className='btn_around'>
                    <span className='ico_bus'></span>
                    <span className='txt_around'>도로</span>
                </button>
            </li>
            <li>
                <button type="button" className='btn_around'>
                    <span className='ico_bank'></span>
                    <span className='txt_around'>관공서</span>
                </button>
            </li>
            <li>
                <button type="button" className='btn_around'>
                    <span className='ico_hotel'></span>
                    <span className='txt_around'>초등학교</span>
                </button>
            </li>
            <li>
                <button type="button" className='btn_around'>
                    <span className='ico_cvs'></span>
                    <span className='txt_around'>대형마트</span>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Around