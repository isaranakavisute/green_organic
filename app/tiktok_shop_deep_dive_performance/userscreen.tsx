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

 

  return (
      <form onSubmit={handleOnSubmit}>
       <div className="flex flex-row"> 
        <div className="flex flex-col h-[95vh] w-full bg-yellow-200">    
          <div className="flex flex-row h-1/10 w-full bg-blue">
            <div className="flex flex-row w-1/2 h-full bg-white justify-start items-center">
             <div   
                  style={{
                    position: "relative",
                    width: "10%",
                    height: "100%",
                  }}
              >
              <Image
              src={tiktok_logo}
              alt="tiktok_logo"
              fill = {true}
              />
              </div>
              <div className="text-4xl font-extrabold">
               Shopee Deep Dive Performance
              </div>
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
              <div className="flex flex-col w-1/6 h-3/4 bg-white justify-center items-center mr-5 ml-5 rounded-xl">
               <div>GMV</div>
               <div>15,420,000</div>
               <div>+18.5% this month</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white justify-center items-center mr-5 rounded-xl">
               <div>Traffic</div>
               <div>1,200,000</div>
               <div>+10.2% this month</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white justify-center items-center mr-5 rounded-xl">
               <div>CVR</div>
               <div>3.8%</div>
               <div>+0.3% this month</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white justify-center items-center mr-5 rounded-xl">
               <div>AOV</div>
               <div>1,150</div>
               <div>+1.1% this month</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white justify-center items-center mr-5 rounded-xl">
               <div>TikTok Ads Spend</div>
               <div>2,500,000</div>
               <div>+5.4% this month</div>
              </div>
              <div className="flex flex-col w-1/6 h-3/4 bg-white justify-center items-center mr-5 rounded-xl">
               <div>ROAS</div>
               <div>6.17x</div>
               <div>+0.8% this month</div>
              </div>
             </div>
            </div>
            <div className="flex flex-row h-[40vh] w-full bg-white pb-2 pt-2 pl-2 pr-2 items-center justify-center">
              {/* <div className="flex flex-row h-full w-full bg-white justify-center items-center"> */}
                {/* <Line data={data1} options={options} /> */}
                {/* <Line data={data2} options={options} /> */}
              {/* </div> */}
            </div>
            <div className="flex flex-row h-[30vh] w-full pb-2 pt-2 pl-2 pr-2  bg-gray-300">
              <div className="flex flex-col h-full w-1/2 bg-white mr-2 justify-start items-start">
               <div className="font-bold ml-2 mt-2 text-2xl">Performance Matrix</div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-gray-200">
                  <div className="flex flex-row w-1/5 justify-start items-center">Metric</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">This Month</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">Last Month</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">Change</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">ROAS</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">GMV</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">฿15,420,000</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">฿15,420,000</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">18.5%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">฿7.00</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">Traffic</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">1,200,000</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">1,200,000</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">10.2%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">63.3x</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">Orders</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">287</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">287</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">10.2%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">0.8x</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">CVR</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">3.8%</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">3.8%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">0.3%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">38.5x</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">AOV</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">฿1,150</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">฿1,150</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">1.1%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">฿1.5x</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-white">
                  <div className="flex flex-row w-1/5 justify-start items-center">Ads Spend</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">฿2,500,000</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">฿2,500,000</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">5.4%</div>
                  <div className="flex flex-row w-1/5 justify-center items-center">45.7x</div>
                </div>
               </div>
               <div className="flex flex-row w-full">
                <div className="flex flex-row w-full ml-2 mr-2 bg-blue-200">
                  <div className="flex flex-row w-1/5 justify-start items-center">ROAS</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">6.17x</div>
                  <div className="flex flex-row w-1/5 justify-end items-center">6.17x</div>
                  <div className="flex flex-row w-1/5 justify-center items-center"></div>
                  <div className="flex flex-row w-1/5 justify-center items-center">0x</div>
                </div>
               </div>
              </div>
              <div className="flex flex-row h-full w-1/2 bg-white justify-center items-center">
               {/* <Line data={data2} options={options} /> */}
              </div>
            </div>
           </div>
           <div className="flex flex-col h-full w-1/4 bg-gray-300 justify-center items-center mr-1">
             <div className="flex flex-col h-[90vh] w-9/10 bg-white border-b border-2 mt-6 mb-14 justify-start items-start">
              <div className="font-bold ml-2">AI Simulation Tool</div>
              <div className="ml-2">GMV = Traffic x CVR x AOV</div>
              <div className="flex flex-row w-full">
                <div className="font-bold w-1/2 items-start ml-2">Target GMV</div>
                <div className="font-bold w-1/2 items-start">Current Traffic</div>
              </div>
              <div className="flex flex-row w-full">
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
              </div>
              <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-full flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>Traffic Focus</div>
                <div>Need 65,000 Visitors(+30%)</div>
                <div>Boost Live Ads & Increase Audience Reach</div>
               </div>
              </div>
              <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-full flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>CVR Focus</div>
                <div>Need 4.5% CVR(+0.7%)</div>
                <div>Improve Live Script, Optimize Landing Page</div>
               </div>
              </div>
              <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-full flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>AOV Focus</div>
                <div>Need ฿1,200 AOV(+฿50)</div>
                <div>Add Add-on Deals, Promote Bundles</div>
               </div>
              </div>
              <div className="flex flex-row w-full">
               <div className="rounded-xl bg-gray-100 w-full flex flex-col border border-b mt-2 rounded-2xl items-start justify-center pt-3 pb-3 ml-2 mr-2 pl-2">
                <div>Balanced Approach</div>
                <div>Traffic +10%, CVR+0.5%,AOV+฿100</div>
                <div>Mixed Strategy: Increase Traffic, Optimize Conversion, Promote Higher Value Items</div>
               </div>
              </div>
             </div>
           </div>
          </div>         
        </div>
      </div>
     </form> 
    );

}
