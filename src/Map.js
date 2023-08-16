import React, { useEffect, useState } from 'react'
import {Map, MapMarker, Circle} from 'react-kakao-maps-sdk'
import { useAptData } from './Context/apt_context'
import { useClusterContext } from './Context/Cluster_set'
import { useMapCenterContext } from './Context/Map_center'

const Map_com = () => {
    const apt_data = useAptData()
    const [markers, setMarkers] = useState([]);
    // const [circle_on, setCircle_on] = useState(false);
    const {cluster_val, setCluster} = useClusterContext();
    const {map_center, setCenter , circle_on, setCircle_on} = useMapCenterContext();
    const [focus, setFocus] = useState(map_center.center);
    const [level, setLevel] = useState(8);
    
    const all_markers = apt_data.map(i => {
    //    console.log(i.cluster);
       return {
           id: i.apt_code,
           title: i.name,
           latlng: { lat: i.y, lng: i.x },
           cluster: parseInt(i.cluster),
       };
   });

   useEffect(()=> {
        setMarkers(all_markers)
   },[apt_data]);

   useEffect(() => {
        const updatedMarkers = apt_data.map(i => {
            // console.log(i.cluster);
            return {
                id: i.apt_code,
                title: i.name,
                latlng: { lat: i.y, lng: i.x },
                cluster: parseInt(i.cluster),
            };
        });

        // cluster_val을 기준으로 조건에 맞는 marker만 선택
        const filteredMarkers = updatedMarkers.filter(marker => {
            if (cluster_val === -1) {
                // 전체 클러스터 선택 시 모든 marker 포함
                return true;
            } else {
                // 특정 클러스터 선택 시 해당 클러스터와 일치하는 marker만 선택
                return marker.cluster === cluster_val;
            }
        });

        // filteredMarkers를 상태로 업데이트
        setMarkers(filteredMarkers);

        // console.log(cluster_val);
    }, [cluster_val]);

    
    const marker_click_on = (data) => {
        if (map_center.center != data.latlng){
            console.log(data.latlng);
            setLevel(5)
            setCircle_on(true);
            setFocus(data.latlng)
        }else if (map_center.center == data.latlng) {
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
        <>
        <div className="Map">
            <Map 
                center={map_center.center}   // 지도의 중심 좌표
                style={{ width: '100%', height: '100vh' }} // 지도 크기
                isPanto={true}
                level={parseInt(level)}   // 지도 확대 레벨
            >
                {markers.map((position, index) => (
                    <MapMarker
                        key={position.id}
                        position={position.latlng} // 마커를 표시할 위치
                        clickable={true}
                        onClick={() => marker_click_on(position)}
                        image={{
                            src: getImagePath(position.cluster), // 마커이미지의 주소입니다
                            size: {
                                width: 32,
                                height: 32
                            }, // 마커이미지의 크기입니다
                        }}
                        title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    />
                ))}
                {circle_on ? 
                    <Circle
                        center={map_center.center}
                        radius={1500}
                        strokeColor={"#75B8FA"} // 선의 색깔입니다
                        strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                        fillColor={"#CFE7FF"} // 채우기 색깔입니다
                        fillOpacity={0.3} // 채우기 불투명도 입니다
                    />
                    : null
                }
            </Map>
        </div>
    </>
    )
}

function getImagePath(cluster) {
    switch (cluster) {
      case 0:
        return 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
      case 1:
        return 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png';
      case 2:
        return 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png';
      case 3:
        return 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
      default:
        return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
    }
  }

export default Map_com