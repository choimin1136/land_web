import React, {useEffect, useState} from 'react'
import { useClusterContext } from './Context/Cluster_set'
import Info_list from './Info_list';

const Info = () => {
    const [cluster_all, setAll] = useState(true);
    const [cluster_1, setOne] = useState(false);
    const [cluster_2, setTwo] = useState(false);
    const [cluster_3, setThree] = useState(false);
    const [cluster_4, setFour] = useState(false);
    const {cluster_val, setCluster} = useClusterContext();
    
    const update_cluster = (cluster) => {
        const cluster_list = [setAll, setOne, setTwo, setThree, setFour];
        setCluster((prevCount) => {
            // console.log(prevCount);
            return cluster;
        });
        
        for (let i = 0; i < cluster_list.length; i++) {
            if (i == (cluster + 1)) {
                cluster_list[i](true); // 혹은 true, 적절한 값을 전달하여 호출
            } else {
                cluster_list[i](false);
            };
        };
    };

    // useEffect(() => {
    //     console.log(cluster_val);
    // }, [cluster_val]);

    const allClusterClassName = `clusterAll ${cluster_all ? 'clusterAll-ACTIVE' : 'clusterAll-INACTIVE'}`;
    const oneClusterClassName = `cluster1 ${cluster_1 ? 'cluster1-ACTIVE' : 'cluster1-INACTIVE'}`;
    const twoClusterClassName = `cluster2 ${cluster_2 ? 'cluster2-ACTIVE' : 'cluster2-INACTIVE'}`;
    const threeClusterClassName = `cluster3 ${cluster_3 ? 'cluster3-ACTIVE' : 'cluster3-INACTIVE'}`;
    const fourClusterClassName = `cluster4 ${cluster_4 ? 'cluster4-ACTIVE' : 'cluster4-INACTIVE'}`;
    
    return (
        <div id="info" class="Info">
            <div id="info.header" class="header">
                <div id="info.header.main" class="main">
                    <div role="navigation">
                        <h2 class="screen_out">검색 메뉴</h2>
                        <ul class="menu">
                            <li id="search.tab1" class={allClusterClassName}>
                                <a onClick={() => update_cluster(-1)} class="mainmenutab" title="전체">전체</a>
                            </li>
                            <li id="search.tab2" class={oneClusterClassName}>
                                <a onClick={() => update_cluster(0)} class="mainmenutab" title="입지1">입지1</a>
                            </li>
                            <li id="search.tab3" class={twoClusterClassName}>
                                <a onClick={() => update_cluster(1)} class="mainmenutab" title="입지2">입지2</a>
                            </li>
                            <li id="search.tab4" class={threeClusterClassName}>
                                <a onClick={() => update_cluster(2)} class="mainmenutab" title="입지3">입지3</a>
                            </li>
                            <li id="search.tab5" class={fourClusterClassName}>
                                <a onClick={() => update_cluster(3)} class="mainmenutab" title="입지4">입지4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Info_list />
        </div>
    )
}

export default Info