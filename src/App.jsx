import "./App.css";
import { LuMenu, LuMapPin } from "react-icons/lu";
import { GoAlertFill } from "react-icons/go";
import { MdCloud } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import { PiSunFill, PiSunHorizonFill } from "react-icons/pi";
import { FaWind } from "react-icons/fa";
import { TbDashboard } from "react-icons/tb";
import { GiPollenDust } from "react-icons/gi";
import { IoCar } from "react-icons/io5";
import { RiRunFill } from "react-icons/ri";
import "./myStyle.css";

function App() {
  return (
    <div className="flex justify-center h-screen bg-[url('./assets/bgr.jpg')]" style={{ backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="w-96 p-3 bg-opacity-20 bg-white backdrop-blur-lg">
        <div className="">
          <div className="flex text-white">
            <LuMenu size={30}/>
            {/* <h3 className='flex items-center ml-3'>Montreuil <span className='ml-1'><LuMapPin size={11} /></span></h3> */}
          </div>

          <div className="text-white">
            <h2 className="mt-8 text-7xl text-white">21°</h2>
            <h3 className="mt-3 mb-3">Cloudy</h3>
            <h3 className="flex items-center">
              Montreuil{" "}
              <span className="ml-1">
                <LuMapPin size={11} />
              </span>
            </h3>
            <h3>
              22° / 14° <span>Feels like 21°</span>
            </h3>
          </div>
        </div>

        <div className="overflow-y-auto overflow-hidden customscrollbar" style={{ height: '452px'}}>
          <div className="bg-blue-500 text-white rounded-2xl p-3 mt-10">
            <h3 className="flex items-center">
              <span className="mr-1">
                <GoAlertFill />
              </span>
              <span className="text-xl font-bold">Sever weather alert</span>
            </h3>
            <p>
              Disruption due to thunderstorms from FRI 2:00 AM CEST until 12:00 AM
              CEST
            </p>
          </div>

          <div className="bg-blue-400 text-white rounded-2xl p-3 mt-3">
            <h3 className="text-xl font-bold">Hourly forecast</h3>
            <hr className="mt-2 mb-2" />
            <div>
              <div className="flex gap-x-3 overflow-x-auto customscrollbar">
                <div className="flex flex-col items-center gap-y-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3>18:00</h3>
                  <h3>
                    <MdCloud size={25} />
                  </h3>
                  <h3>21°</h3>
                  <h3 className="flex items-center justify-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-400 text-white rounded-2xl p-3 mt-3">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold">Don&apos;t miss the sunset</h3>
              <p>Sunset will be at 8:47 PM</p>
            </div>
            <div className="flex gap-x-2 justify-center mt-3">
              <div className="bg-white rounded-full w-2 h-2"></div>
              <div className="bg-gray-300 rounded-full w-2 h-2"></div>
              <div className="bg-gray-300 rounded-full w-2 h-2"></div>
            </div>
          </div>

          <div className="bg-blue-400 text-white rounded-2xl p-4 mt-3">
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Yesterday</span>
                <span className="font-bold text-lg">26° 20°</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Today</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Saturday</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Sunday</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Monday</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Tuesday</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Wednesday</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold text-lg">Thursday</span>
                <div className="flex items-center gap-x-3">
                  <h3 className="flex items-center">
                    <GiWaterDrop />
                    <span>1%</span>
                  </h3>
                  <MdCloud/>
                  <MdCloud/>
                  <span className="font-bold text-lg">22° 14°</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 text-white">
            <div className="flex flex-col items-center bg-blue-400 rounded-2xl p-2 w-44">
              <PiSunFill size={50} />
              <h2 className="font-bold">UV index</h2>
              <h2>Low</h2>
            </div>
            <div className="flex flex-col items-center bg-blue-400 rounded-2xl p-2 w-44">
              <GiWaterDrop size={47} />
              <h2 className="font-bold">Humidity</h2>
              <h2>68%</h2>
            </div>
            <div className="flex flex-col items-center bg-blue-400 rounded-2xl p-2 w-44">
              <FaWind size={40} />
              <h2 className="font-bold">Wind</h2>
              <h2>14 km/h</h2>
            </div>
            <div className="flex flex-col items-center bg-blue-400 rounded-2xl p-2 w-44">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-center">
                  <h2 className="font-bold">Sunrise</h2>
                  <h2>06:56</h2>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="font-bold">Sunset</h2>
                  <h2>20:47</h2>
                </div>
              </div>
              <PiSunHorizonFill size={50} />
            </div>
          </div>

          <div className="bg-blue-400 text-white rounded-2xl p-3 mt-3">
            <ul>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-x-1">
                  <TbDashboard /> AQI
                </span>{" "}
                <span>Goof (34)</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-x-1">
                  <GiPollenDust /> Pollen
                </span>{" "}
                <span>Low</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-x-1">
                  <IoCar />
                  Driving difficulty
                </span>{" "}
                <span>Wet</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-x-1">
                  <RiRunFill />
                  Running
                </span>{" "}
                <span>Goof</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
