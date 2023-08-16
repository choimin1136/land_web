import React, {useState, useEffect} from 'react'
import { useMapCenterContext } from './Context/Map_center'

const ListCard = (props) => {
    const {map_center, setCenter, circle_on, setCircle_on} = useMapCenterContext();
    const [focus, setFocus] = useState(map_center.center);
    // const [circle_on, setCircle_on] = useState(false);
    const [level, setLevel] = useState(8);


    const marker_click_on = (data) => {
        console.log(data)
        if (map_center.center != ({ lat: parseFloat(data.y), lng: parseFloat(data.x) })){
            // console.log(data.latlng);
            setLevel(5)
            setCircle_on(true);
            setFocus({ lat: parseFloat(data.y), lng: parseFloat(data.x) })
        }else if (map_center.center == ({ lat: parseFloat(data.y), lng: parseFloat(data.x) })) {
            console.log(map_center);
            setLevel((prev) => prev == 8 ? 3 : 8)
            setCircle_on(!circle_on);
        }
    }

    useEffect (() => {
        setCenter(
            {
                center : focus,
            });
    }, [focus])

    return (
        <li className='PlaceItem clickArea PlaceItem-DUP' style={{borderTop:1+'px solid #eee'}} onClick={() => marker_click_on(props.apt_data)}>
            <div data-id='btnsWrap' className='utile_item'>
                <a data-id='fav' className='fav'>
                    <span className='ico_fav'>즐겨찾기</span>
                    <span className='num'></span>
                </a>
                <a data-id='roadview' className='roadview'>로드뷰</a>
                {/* <button data-id='routBtn' type='button'
                className='DirectionItemInfoBtn'>길찾기</button> */}
            </div>
            <div className='head_item clickArea'>
                <strong className='tit_name'>
                    <a data-id='icon' className='link_order clickArea' style={{marginLeft : 1 + 'px'}}>
                        |
                    </a>
                    <a data-id='name' className='link_name' title='서울역' style={{marginLeft:5+'px'}}>
                        <strong>{props.apt_data.name}</strong>
                    </a>
                </strong>
                <span data-id='subcategory' className='subcategory clickable'>
                    {props.apt_data.apt_const}
                </span>
            </div>
            <div data-id='wrapAddress' className='addr'>
                <p data-id='address' title='도로명 주소'>
                    {props.apt_data.road_addr}
                </p>
                <p data-id='otherAddr' className='lot_number' title='구 주소(지번)'>
                    (지번) {props.apt_data.local2+' '+props.apt_data.local3+' '+props.apt_data.local4}
                </p>
            </div>
            <hr/>
            <div className='DupListView'>
                <div className='dupTitleWrap'>
                    <div className='dupBig' data-id='dupToggle'>
                        <h3>아파트정보</h3>
                    </div>
                    <div className='dupTitle'>
                        세대 수 : 
                        <em data-id='dup_cnt'> {parseInt(props.apt_data.apt_gene)}세대</em>
                    </div>
                    <div className='dupTitle' data-id='dupToggle'>
                        주차가능 수 : 
                        <em data-id='dup_cnt'> {parseInt(props.apt_data.apt_parking)}대</em>
                    </div>
                    <div className='dupTitle' data-id='dupToggle'>
                        전용면적 : 
                        <em data-id='dup_cnt'> {parseInt(props.apt_data.apt_area)}㎡</em>
                    </div>
                </div>
                <div className='dupTitleWrap'>
                    <div className='dupBig' data-id='dupToggle'>
                        <h3>교통정보</h3>
                    </div>
                    <div className='dupTitle'>
                        버스정류장 : 
                        <em data-id='dup_cnt'> {props.apt_data.bus_n == 0 ? 0 : parseInt(props.apt_data.bus_n)}개</em>
                    </div>
                    <div className='dupTitle' data-id='dupToggle'>
                        지하철역 : 
                        <em data-id='dup_cnt'> {props.apt_data.train_n == 0 ? 0 : parseInt(props.apt_data.train_n)}개</em>
                    </div>
                    <div className='dupTitle' data-id='dupToggle'>
                        인접주요도로 : 
                        <em data-id='dup_cnt'> {props.apt_data.car_road == 0 ? 0 : parseInt(props.apt_data.car_road)}개</em>
                    </div>
                </div>
                <div className='dupTitleWrap'>
                    <div className='dupBig' data-id='dupToggle'>
                        <h3>주변시설정보</h3>
                    </div>
                    <div className='dupTitle'>
                        관공서 : 
                        <em data-id='dup_cnt'> {props.apt_data.admin == 0 ? 0 : parseInt(props.apt_data.admin)}개</em>
                    </div>
                    <div className='dupTitle' data-id='dupToggle'>
                        초등학교 : 
                        <em data-id='dup_cnt'> {props.apt_data.eschool_n == 0 ? 0 : parseInt(props.apt_data.eschool_n)}개</em>
                    </div>
                    <div className='dupTitle' data-id='dupToggle'>
                        대형마트 : 
                        <em data-id='dup_cnt'> {props.apt_data.mart == 0 ? 0 : parseInt(props.apt_data.mart)}개</em>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ListCard