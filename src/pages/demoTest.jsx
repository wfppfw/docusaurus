import React from 'react';
import Layout from '@theme/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
/**
 * 和风
 * 开发版https://devapi.qweather.com/v7/weather/now?[请求参数]
 * 常用参数：location=101010100&key=你的KEY c6a83f36103c408393354aa201e86b2a
 * 
 * 高德
 * key 5afa55f6529e3a1c72fda771d3969fb3
 * https://restapi.amap.com/v3/weather/weatherInfo?
 * 
 *     let noticeUrl = 'https://restapi.amap.com/v3/assistant/inputtips?output=xml&city=010&keywords=招商银行&key=5afa55f6529e3a1c72fda771d3969fb3';
 * ip = https://restapi.amap.com/v3/ip?
 * https://restapi.amap.com/v3/staticmap?
 * https://restapi.amap.com/v3/staticmap?location=113.101737,22.9321225&zoom=10&key=5afa55f6529e3a1c72fda771d3969fb3
 */
// 开发版https://devapi.qweather.com/v7/weather/now?[请求参数]
function Demo(){
    let weatherUrl = 'https://restapi.amap.com/v3/weather/weatherInfo?';
    weatherUrl += 'key=5afa55f6529e3a1c72fda771d3969fb3&city=440224';
    let noticeUrl = 'https://restapi.amap.com/v3/staticmap?location=113.101737,22.9321225&zoom=17&key=5afa55f6529e3a1c72fda771d3969fb3';
    let [cityName,setCityName] = useState(null);
    useEffect(()=>{
        axios({
            url:noticeUrl,
            method:'get',

        }).then((res)=>{
            setCityName(res);
            console.log(res)
        })
    },[])
    // useEffect(()=>{
    //     console.log(cityName)
    // },cityName)
    return (
        <Layout title='Demo'>
            <div
            style={{
                dispaly:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontSize:'20px'
            }}>
            <div>
            <span>输入城市</span>
                <input type={'text'}></input>
                <div >

                    <img></img>
                </div>
            </div>
            

            </div>
        </Layout>
    )
}

export default Demo;