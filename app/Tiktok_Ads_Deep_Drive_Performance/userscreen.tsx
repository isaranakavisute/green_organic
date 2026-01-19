'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
//import MainScreen from '../mainpage/userscreen';
import tsubakimoto_logo from "./images/tsubakimoto_logo.svg";
//import Image from "next/image";
import RegisterScreen from  '../register/userscreen';
import tiktok_logo from "./images/tiktok_logo.jpg";
import shopee_logo3 from "./images/shopee_logo3.svg";
import lazada_logo from "./images/lazada_logo1.jpeg";
import facebook_logo from "./images/facebook_logo3.png";
//import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Chart, LinearScale, CategoryScale, LineController, LineElement, PointElement } from 'chart.js';
// Register the necessary components
Chart.register(LinearScale, CategoryScale, LineController, LineElement, PointElement);
import { Line } from "react-chartjs-2";
//import Chart from 'chart.js/auto';

export default function UserScreen() {

  const router = useRouter;

  const data1 = {
        labels: ['Oct 1', 'Oct 3', 'Oct 7', 'Oct 9', 'Oct 11', 'Oct 13', 'Oct 17', 'Oct 21', 'Oct 25, Oct 27, Oct 29, Oct 31'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1.2, 1.5, 1.3, 1.7, 1.4, 1.2, 1.5, 1.3, 1.4, 1.2, 1.5, 1.3],
            },
        ],
    };

    const data2 = {
        labels: ['Oct 1', 'Oct 3', 'Oct 7', 'Oct 9', 'Oct 11', 'Oct 13', 'Oct 17', 'Oct 21', 'Oct 25', 'Oct 27', 'Oct 29', 'Oct 31','Sep 1', ' Sep 3', 'Sep 5', 'Sep 7', 'Sep 9', 'Sep 11', 'Sep 13', 'Sep 15', 'Sep 17', 'Sep 19', 'Sep 21', 'Sep 23', 'Sep 25', 'Sep 27', 'Sep 29'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0.2, 0.5, 0.3, 0.7, 0.4, 0.2, 0.5, 0.3, 0.4, 0.2, 0.5, 0.3,0.4, 0.2, 0.5, 0.3, 0.4, 0.1, 0.3, 0.5 , 0.7, 0.2, 0.3, 0.5, 0.7, 0.9, 0.2],
                //data: [{0.2, 0.5, 0.3, 0.7, 0.4, 0.2, 0.5, 0.3, 0.4, 0.2, 0.5, 0.3},{1.2, 1.5, 1.3, 1.7, 1.4, 1.2, 1.5, 1.3, 1.4, 1.2, 1.5, 1.3}],
            },
            {
                label: 'My Second dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [2.2, 2.5, 4.3, 2.7, 2.4, 1.2, 2.5, 2.3, 5.4, 2.2, 1.5, 2.3,2.4,3.2,2.5,3.3,2.4, 1.2, 2.5, 1.3, 4.4, 1.1, 3.1, 5.2, 4.2, 2.4, 2.2],
                //data: [{0.2, 0.5, 0.3, 0.7, 0.4, 0.2, 0.5, 0.3, 0.4, 0.2, 0.5, 0.3},{1.2, 1.5, 1.3, 1.7, 1.4, 1.2, 1.5, 1.3, 1.4, 1.2, 1.5, 1.3}],
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false, 
    };
 
  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) 
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const access = formData.get('access');

    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/login",
     headers: {
      "Content-Type": "application/json"
     },
     data: {
      usr: username,
      pwd: password,
      access: access
    },
   })
   .then(res => {
    var std_json_res = res.data;
    //alert(std_json_res.login.result);
    console.log(std_json_res.login.result);
    if (std_json_res.login.result=="pass")
     {
      if (std_json_res.login.username=="admin")
       {
        console.log("admin page");
        window.location.href = "/adminpage";
       }
      else
       {
        alert('only admin mode is supported');
       }
     }
    else
     {
      alert('login failed');
     }
    })
    .catch(err => {
   });
 }

 

 

  const blurDataURL = (color) =>
  `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='www.w3.org' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='${color}'/%3E%3C/svg%3E`;


  return (
      <form onSubmit={handleOnSubmit}>
       <div className="flex flex-row"> 
        <div className="flex flex-col h-[95vh] w-full bg-yellow-200">    
          <div className="flex flex-row h-1/10 w-full bg-blue">
            <div className="flex flex-row w-1/2 h-full bg-white justify-start items-center">
             <div   
                  style={{
                    position: "relative",
                    width: "5%",
                    height: "100%",
                  }}
              >
              {/* <div className="flex flex-row w-1/10 h-full bg-white justify-start items-center"> */}
              <Image
              src={tiktok_logo}
              alt="shopee_logo"
              fill = {true}
              />
              </div>
              <div className="text-4xl font-extrabold pl-2">Tiktok Ads Deep Dive Performance</div>
            </div>
            <div className="flex flex-row w-1/2 h-full bg-white justify-end items-center pr-2">
              <select name="access" className="h-2/4 w-2/8 border border-solid border-yellow mr-10">
               <option value="Store Selector">Store Selector: All Stores</option>
              </select>
              <select name="access" className="h-2/4 w-2/8 border border-solid border-yellow mr-10">
               <option value="Date Range">Date Range: MTD</option>
              </select>
            </div>
          </div>   
          <div className="flex flex-row h-full w-full bg-gray-300">
           <div className="flex flex-col h-full w-3/4 bg-gray-300">
            <div className="flex flex-row h-[20vh] w-full bg-gray-300">
             <div className="flex flex-row w-full h-full bg-gray-300 justify-start items-center">
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 ml-5 rounded-xl">
               <div className="flex flex-row bg-blue-300 w-full items-center justify-center text-4xl font-bold font-black">GMV</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">$8,500,000</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">12.5%(vs. Prev MTD)</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 rounded-xl">
               <div className="flex flex-row bg-purple-400 w-full items-center justify-center text-4xl font-bold font-black">Impression</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">15,200,00</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">8.2%</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 rounded-xl">
               <div className="flex flex-row bg-blue-300 w-full items-center justify-center text-4xl font-bold font-black">CTR</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">2.5%</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">0.3%</div>
               <div className="flex flex-row bg-white w-full justify-center text-xs text-black">Total Clicks: 45,200</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 rounded-xl">
               <div className="flex flex-row bg-orange-300 w-full items-center justify-center text-4xl font-bold font-black">CVR</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">1.25%</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">-0.1%</div>
               <div className="flex flex-row bg-white w-full justify-center text-xs text-black">Total Clicks: 45,200</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 rounded-xl">
               <div className="flex flex-row bg-pink-400 w-full items-center justify-center text-4xl font-bold font-black">AOV</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">$68.00</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">+1.5%</div>
               <div className="flex flex-row bg-white w-full justify-center text-xs text-black">Total Orders: 1,250</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 rounded-xl">
               <div className="flex flex-row bg-red-400 w-full items-center justify-center text-4xl font-bold font-black">Ad Spend</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">$425,000</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">5.0%</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white mr-5 rounded-xl">
               <div className="flex flex-row bg-green-600 w-full items-center justify-center text-4xl font-bold font-black">ROAS</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-4xl font-bold font-black">20.0x</div>
               <div className="flex flex-row bg-white w-full pt-5 justify-center text-xl text-green-600">+7.0%</div>
              </div>
             </div>
            </div>
            <div className="flex flex-row h-[40vh] w-full bg-white pb-2 pt-2 pl-2 pr-2 items-center justify-center">
              {/* <div className="flex flex-row h-full w-full bg-white justify-center items-center"> */}
                {/* <Line data={data1} options={options} /> */}
                <Line data={data2} options={options} />
              {/* </div> */}
            </div>
            <div className="flex flex-row h-[30vh] w-full pb-2 pt-2 pl-2 pr-2  bg-gray-300">
              <div className="flex flex-col h-full w-full bg-white mr-2 justify-start items-start">
               <div className="font-bold ml-2 mt-2 text-2xl">Campaign Performance Matrix</div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-gray-200">
                  <div className="flex flex-row w-1/4 justify-start items-center">Campaign Name</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">Spend</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">Conversion (Value/Qty)</div>
                  <div className="flex flex-row w-1/4 justify-center items-center">ROAS</div>
                </div>
               </div>
              <div className="flex flex-row w-full pt-2">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/4 justify-start items-center">Double Day Sale</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">%150,000</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$4,500,000/6,000</div>
                  <div className="flex flex-row w-1/8 justify-center items-center bg-green-300 ml-25">30.0x</div>
                </div>
               </div>
               <div className="flex flex-row w-full pt-2">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/4 justify-start items-center">New Arrival Promo</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">%80,000</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$1,800,000/2,500</div>
                  <div className="flex flex-row w-1/8 justify-center items-center bg-yellow-300 ml-25">30.0x</div>
                </div>
               </div>
               <div className="flex flex-row w-full pt-2">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/4 justify-start items-center">Retargeting</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">%100,000</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$2,500,000/3,800</div>
                  <div className="flex flex-row w-1/8 justify-center items-center bg-green-300 ml-25">25.0x</div>
                </div>
               </div>
               <div className="flex flex-row w-full pt-2">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/4 justify-start items-center">Brand Awareness</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$50,000</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$4,00,000/700</div>
                  <div className="flex flex-row w-1/8 justify-center items-center bg-red-300 ml-25">8.0x</div>
                </div>
               </div>
               <div className="flex flex-row w-full pt-2">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/4 justify-start items-center">Weekend Flash Sale</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$45,000</div>
                  <div className="flex flex-row w-1/4 justify-end items-center">$1,350,000/2,000</div>
                  <div className="flex flex-row w-1/8 justify-center items-center bg-green-300 ml-25">30.0x</div>
                </div>
               </div>

               {/* <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">Traffic</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">$4,200,000</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">$3,500,000</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">0</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">
                   <div className="flex flex-row w-1/2 h-1/2 rounded-2xl bg-orange-600 justify-center items-center">Critical</div>
                  </div>
                </div>
               </div> */}

               {/* <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">CVR</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">3.15%</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">2.95%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">0.05%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">
                   <div className="flex flex-row w-1/2 h-1/2 rounded-2xl bg-blue-300 justify-center items-center">Good</div>
                  </div>
                </div>
               </div> */}

               {/* <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">AOV</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">$38.50</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">$38.50</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">$0</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">
                   <div className="flex flex-row w-1/2 h-1/2 rounded-2xl bg-blue-300  justify-center items-center">Critical</div>
                  </div>
                </div>
               </div> */}

               {/* <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">ROAS</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">6.5x</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">6.2x</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">-0.3x</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">
                   <div className="flex flex-row w-1/2 h-1/2 rounded-2xl bg-yellow-300  justify-center items-center">Critical</div>
                  </div>
                </div>
               </div> */}

              </div>
              {/* <div className="flex flex-row h-full w-1/2 bg-white justify-center items-center">
               <Line data={data2} options={options} />
              </div> */}
            </div>
           </div>
           <div className="flex flex-col h-full w-1/4 bg-gray-300 justify-center items-center mr-1">
             <div className="flex flex-col h-[90vh] w-full bg-white border-b border-2 mt-6 mb-14 justify-start items-start">
              <div className="font-bold ml-2">AI Recommendations</div>

              <div className="flex flex-col w-full pr-5">
               <div className="ml-2 bg-orange-200 w-full text-4xl mt-5">Critial Issue</div>
               <div className="ml-2 bg-white pt-2">High CPA in 'Brand Awareness campaign. Consider pausing or optimizing audience targeting'</div>
              </div>

              <div className="flex flex-col w-full pr-5">
               <div className="ml-2 bg-orange-200 w-full text-4xl mt-5">Performance Watchlist</div>
               <div className="ml-2 bg-white pt-2">ROAS for 'Retargeting' campaingn is slightly below target. Monitor closely and test new ad creatives</div>
              </div>

              <div className="flex flex-col w-full pr-5">
               <div className="ml-2 bg-orange-200 w-full text-4xl mt-5">Opportunities</div>
               <div className="ml-2 bg-white pt-2">Scale 'Double Day Sale' campaign; shows strong performance and high ROAS. Increase daily budget by 20%</div>
              </div>

              <div className="flex flex-col w-full pr-5">
               <div className="ml-2 bg-orange-200 w-full text-4xl mt-5">Recommendation Actions</div>
               <div className="ml-2 bg-white pt-2">Create lookalike audiences based on 'New Arrival Promo' high-value customers. Refresh ad creatives for 'Retargeting' every 7 days.</div>
              </div>


              {/* <div className="flex flex-row w-full">
                <div className="font-bold w-1/2 items-start border border-b ml-2 mr-2 pl-2 rounded-xl">฿20,000</div>
                <div className="font-bold w-1/2 items-start border border-b mr-2 pl-2 rounded-xl">1,200,000</div>
              </div>
              <div className="flex flex-row w-full">
                <div className="font-bold w-1/2 items-start ml-2">Current CVR</div>
                <div className="font-bold w-1/2 items-start">Current AOV</div>
              </div>
              <div className="flex flex-row w-full">
                <div className="font-bold w-1/2 items-start border border-b ml-2 mr-2 pl-2 rounded-xl">3.8%</div>
                <div className="font-bold w-1/2 items-start border border-b mr-2 pl-2 rounded-xl">฿1,150</div>
              </div>
              <div className="flex flex-row w-full">
               <div className="rounded-xl bg-green-400 w-full flex flex-row border border-b mt-2 rounded-2xl items-center justify-center pt-3 pb-3 ml-2 mr-2">
                <div>Calculate Scenarios</div>
               </div>
              </div> */}

              {/* <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2 bg-yellow-300">
                <div>Traffic Focus</div>
                <div>Need 65,000</div>
                <div>Visitors(+30%)</div>
                <div className="bg-white w-9/10">Recommendation:</div>
                <div className="bg-white w-9/10">Scale CPAS Ads</div>
               </div>
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2 bg-green-300">
                <div>CVR Focus</div>
                <div>Need 65,000</div>
                <div>Visitors(+30%)</div>
                <div className="bg-white w-9/10">Recommendation:</div>
                <div className="bg-white w-9/10">Improve Product Images</div>
               </div>
              </div> */}

              {/* <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2 bg-purple-500">
                <div>AOV Focus</div>
                <div>Need $1,200 AOV</div>
                <div className="bg-white w-9/10">Recommendation:</div>
                <div className="bg-white w-9/10">Create Bundle Deals</div> 
               </div>
              <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>Balanced Approach</div>
                <div>Traffic +10%, CVR + 0.5%, AOV+$100</div>
                <div className="bg-gray-400 w-9/10">Recommendation:</div>
                <div className="bg-gray-400 w-9/10">Mixed Strategy</div> 
               </div>
              </div> */}
              
              {/* <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>AOV Focus</div>
                <div>Need ฿1,200 AOV(+฿50)</div>
                <div>Add Add-on Deals, Promote Bundles</div>
               </div>
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>AOV Focus</div>
                <div>Need ฿1,200 AOV(+฿50)</div>
                <div>Add Add-on Deals, Promote Bundles</div>
               </div>
              </div>
              <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>Balanced Approach</div>
                <div>Traffic +10%, CVR+0.5%,AOV+฿100</div>
                <div>Mixed Strategy: Increase Traffic, Optimize Conversion, Promote Higher Value Items</div>
               </div>
               <div className="rounded-xl bg-gray-100 w-1/2 flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>Balanced Approach</div>
                <div>Traffic +10%, CVR+0.5%,AOV+฿100</div>
                <div>Mixed Strategy: Increase Traffic, Optimize Conversion, Promote Higher Value Items</div>
               </div>
              </div> */}
              
             </div>
           </div>
          </div>         
        </div>
      </div>
     </form> 
    );

}
