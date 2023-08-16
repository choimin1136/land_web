import React, { useState, useEffect } from 'react'
import { useAptData } from './Context/apt_context'
import { useMapCenterContext } from './Context/Map_center'
import Info from './Info'

const Sidebar = () => {
    const apt_data= useAptData()
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
                level : 5
            });
    }, [focus])

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 제출 동작을 막음
        // 여기에 폼 제출 처리를 추가하세요
        // console.log('Form submitted with value:', inputValue);
        apt_data.map((item, idx) => {
            if (item.name == inputValue){
                marker_click_on(item);
            }
        })
    };

    // const inputClassName = isFocused ? 'query tf_keyword' : 'query tf_keyword bg_on'; // 클래스 이름 동적으로 설정
    const inputClassName = `input ${isFocused || inputValue ? 'query tf_keyword' : 'query tf_keyword bg_on'}`; // 클래스 이름 동적으로 설정


    return (
        <>
            <div class="IE6MIN"><div id="header" class="Header" role="banner">
                    <h1 class="Title">
                        <a id="local" class="local" href="?nil_profile=title&amp;nil_src=local">kakaomap</a>
                    </h1>
                    <button type="button" class="btn_menu">더보기 메뉴 열기</button>

                    <strong class="screen_out">검색</strong>
                    <div id="search" class="Search">
                        <form  id="search.keyword" class="KeywordSearch"
                                                onSubmit={handleSubmit}>
                            <fieldset class="fld_inside">
                                <legend class="screen_out">검색어 입력폼</legend>
                                <h2 class="screen_out"><label for="search.keyword.query">지도 검색</label></h2>
                                <div class="box_searchbar">
                                    <input type="text" id="search.keyword.query" name="q" class={inputClassName}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        maxlength="100" autocomplete="off" accesskey="s"/>
                                    <button type="submit" id="search.keyword.submit" class="go ico_search btn_search">검색</button>
                                </div>
                                <div class="choice_currentmap">
                                    <input type="checkbox" id="boundscheck" class="screen_out"/>
                                    <label id="search.keyword.bounds" for="boundscheck" class="lab_currentmap INACTIVE"><span id="search.keyword.currentmap" class="ico_currentmap"></span>현 지도 내 장소검색</label>
                                </div>
                                <blockquote id="search.keyword.querySuggest" class="suggest"></blockquote>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <Info/>
            <div id='shadow' className='Shadow' style={{height : 1041 + 'px'}}>
                <div className='bar'></div>
                <span id='shadow.toggle' className='toggle'></span>
            </div>
        </>
  )
}

function search_submit(value) {
    alert(value)
}

export default Sidebar