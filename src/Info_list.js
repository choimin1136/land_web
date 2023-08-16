import React, {useEffect, useState} from 'react'
import { useAptData } from './Context/apt_context';
import ListCard from './ListCard';
import Around from './Around';
import { useClusterContext } from './Context/Cluster_set'

const Info_list = () => {
    const apt_data = useAptData();
    const {cluster_val, setCluster} = useClusterContext();

    const [datas, setDatas] = useState([]);

    useEffect(()=> {
        setDatas([])
        apt_data.map((item, index) => (
            cluster_val == -1 ? setDatas((prevItems) => [...prevItems, item]) :
                item.cluster == cluster_val ? setDatas((prevItems) => [...prevItems, item]) : null
        ))
    },[apt_data,cluster_val]);

    return (
        <div id='info.body' className='body' style={{height: 850 + 'px'}}>
            <div id='info.main' className='Main INFOLEFT'>
                <Around />
                <div id='info.search' className='keywordSearch'>
                    <div id='info.search.place' className='section places'>
                        <div className='sectiontitle'>
                            <h5 className='placetit'>아파트</h5>
                            <span className='cntwrap'>
                                <em id='info.search.place.cnt' className='cnt'>
                                    {datas.length.toLocaleString()} 단지
                                </em>
                            </span>
                            <ol id='info.search.place.sort' className='Sort'>
                                <li className='first'>
                                    <a className='label ACTIVE'>정확도순</a>
                                </li>
                                <li>
                                    <a className='label'>인기도순</a>
                                </li>
                            </ol>
                        </div>
                        <ul id='info.search.place.list' className='placelist'>
                            {apt_data.map((item, index) => (
                                cluster_val == -1 ? <ListCard key={index} apt_data={item}/> :
                                    item.cluster == cluster_val ? <ListCard key={index} apt_data={item}/> : null
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info_list