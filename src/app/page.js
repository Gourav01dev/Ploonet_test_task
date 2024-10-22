"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import BannerImage from "../assets/Banner.svg";
import Img1 from "../assets/01.svg";
import Img2 from "../assets/02.svg";
import Img3 from "../assets/03.svg";
import Img4 from "../assets/04.svg";
import Img5 from "../assets/05.svg";
import Img6 from "../assets/06.svg";
import Img7 from "../assets/07.svg";
import Img8 from "../assets/08.svg";
import Img9 from "../assets/09.svg";
import Img10 from "../assets/10.svg";
import Img11 from "../assets/11.svg";
import Img12 from "../assets/12.svg";
import PloonetImage from "../assets/Ploonet.svg";
import StepImage from "../assets/step.svg";
import MenuImage from "../assets/Menu.svg";

export default function Home() {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
  ];


  const [isOpen, setIsOpen] = useState(false);

  // Close the drawer when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // Adjust based on your breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <header className="flex justify-between items-center bg-black text-white px-5 py-4 md:px-[140px] md:py-[30px]">
        <h1 className="font-black text-2xl">PLOONET</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={MenuImage.src} alt="Menu" className="w-8 h-8" />
          </button>
        </div>
        <ul
          className={`flex gap-8 text-sm ${
            isOpen ? "flex-col md:flex-row" : "hidden md:flex"
          }`}
        >
          <li>스튜디오</li>
          <li>워크센터</li>
          <li>손비서</li>
          <li>메타휴먼</li>
          <li>영상제작소</li>
          <li>공지사항</li>
          <li>제휴문의</li>
        </ul>
        <p className={`hidden md:block`}>로그인</p>
      </header>

      {/* Drawer for mobile view */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div
          className={`absolute top-0 right-0 w-2/3 h-full bg-black text-white p-5 transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-lg font-bold">Menu</h2>
          <ul className="flex flex-col mt-4 space-y-2">
            <li>스튜디오</li>
            <li>워크센터</li>
            <li>손비서</li>
            <li>메타휴먼</li>
            <li>영상제작소</li>
            <li>공지사항</li>
            <li>제휴문의</li>
          </ul>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm underline"
          >
            Close
          </button>
        </div>
      </div>

      <main>
        <Image
          src={BannerImage}
          alt="this is banner image"
          className="w-full h-auto"
          layout="responsive" // Optional for Next.js Image component
        />
      </main>

      <div className="bg-black text-white flex flex-col items-center gap-14 px-[38px] md:px-[200px]  py-[50px] md:py-[100px] ">
        <div className="flex flex-col items-center gap-[15px]">
          <p className="hidden md:block">
            영상 <span>제작소</span>
          </p>

          <p className="text-xl text-center md:text-4xl">
            당장 내일 <span className="font-extrabold">‘고품질 맞춤 영상’</span>
            을 받아보세요.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-20 md:w-40 md:h-40 h-20 border border-[#FFBB54] bfg-[#141414] rounded-full p-4 gap-4 md:p-6 lg:p-8 md:gap-4">
            <p className="text-center">FAST</p>
            <p className="hidden text-center md:block">X2</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20 md:w-40 md:h-40 h-20 border border-[#FFBB54] bfg-[#141414] rounded-full p-4 gap-4 md:p-6 lg:p-8 md:gap-4">
            <p className="text-center">QUALITY</p>
            <p className="hidden md:block">A++</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20 md:w-40 md:h-40 h-20 border border-[#FFBB54] bfg-[#141414] rounded-full p-4 gap-4 md:p-6 lg:p-8 md:gap-4">
            <p className="text-center">LOW PRICE</p>
            <p className="hidden md:block">1 / 2</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20 md:w-40 md:h-40 h-20 border border-[#FFBB54] bfg-[#141414] rounded-full p-4 gap-4 md:p-6 lg:p-8 md:gap-4">
            <p className="text-center">HIGH TECH</p>
            <p className="hidden md:block">GEN AI</p>
          </div>
        </div>

        <div className="flex flex-col items-center  gap-3 md:gap-5">
          <h2 className="text-[18px] font-extrabold md:text-[32px] md:text-center">
            AI VIDEO ON YOUR DEMAND
          </h2>
          <p className="text-center text-[16px] md:text-[20px]">
            가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
            기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는
            보장된 영상을 만듭니다.
          </p>
          <p className="text-center text-[16px] md:text-[20px]">
            가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품 소개,
            교육 및 행사, 정보 및 안내 영상 등 당신이 필요한 '그 영상'을 플루닛
            영상제작소에 맡겨주세요.
          </p>
        </div>

        <div className="relative w-full h-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h2 className="text-xl font-extrabold text-center md:text-center md:text-5xl">
          PREVIOUS WORKS
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="bg-black flex flex-col items-center gap-14  text-white px-[20px] py-[50px]">
        <h2 className="font-bold text-xl md:text-[40px]">MAKING PROCESS</h2>

        <div className="flex flex-col items-center gap-20 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:bg-[#141414] md:py-[10px] md:px-[40px] md:rounded-[20px]">
            <div className="text-center flex flex-col gap-[10px] md:gap-[7px]">
              <h2 className="text-xl font-bold md:text-[30px]">일반 제작</h2>
              <p className="text-[16px] md:text-[24px]">
                제작 시작 후 5영업일 이내
              </p>
            </div>

            <div className="flex flex-col items-center gap-[12px]">
              <div
                className="flex border
               px-[10px] gap-[16px] rounded-2xl border-[#F05F82] py-[24px]
               md:gap-[25px] md:px-[46px] md:rounded-[52px] md:py-[16px]
               "
              >
                <div>
                  <p className="text-xs text-[#F05F82]">STEP1</p>
                  <p className="text-[16px]">사전 논의</p>
                </div>
                <div className="pr-6">
                  <p className="text-[14px] text-[#AAAAAA]">
                    영상 제작 문의를 통해 의뢰 확인 후
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">
                    상담을 통해 방향 설정 및 내용 협의
                  </p>
                </div>
              </div>

              <div
                className="flex border
               px-[10px] gap-[16px] rounded-2xl border-[#F05F82] py-[24px]
               md:gap-[25px] md:px-[46px] md:rounded-[52px] md:py-[16px]
               "
              >
                <div>
                  <p className="text-xs text-[#F05F82]">STEP1</p>
                  <p className="text-[16px]">사전 논의</p>
                </div>
                <div className="pr-6">
                  <p className="text-[14px] text-[#AAAAAA]">
                    영상 제작 문의를 통해 의뢰 확인 후
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">
                    상담을 통해 방향 설정 및 내용 협의
                  </p>
                </div>
              </div>

              <div
                className="flex border
               px-[10px] gap-[16px] rounded-2xl border-[#F05F82] py-[24px]
               md:gap-[25px] md:px-[46px] md:rounded-[52px] md:py-[16px]
               "
              >
                <div>
                  <p className="text-xs text-[#F05F82]">STEP1</p>
                  <p className="text-[16px]">사전 논의</p>
                </div>
                <div className="pr-6">
                  <p className="text-[14px] text-[#AAAAAA]">
                    영상 제작 문의를 통해 의뢰 확인 후
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">
                    상담을 통해 방향 설정 및 내용 협의
                  </p>
                </div>
              </div>

              <div
                className="flex border
               px-[10px] gap-[16px] rounded-2xl border-[#F05F82] py-[24px]
               md:gap-[25px] md:px-[46px] md:rounded-[52px] md:py-[16px]
               "
              >
                <div>
                  <p className="text-xs text-[#F05F82]">STEP1</p>
                  <p className="text-[16px]">사전 논의</p>
                </div>
                <div className="pr-6">
                  <p className="text-[14px] text-[#AAAAAA]">
                    영상 제작 문의를 통해 의뢰 확인 후
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">
                    상담을 통해 방향 설정 및 내용 협의
                  </p>
                </div>
              </div>

              <div
                className="flex border
               px-[10px] gap-[16px] rounded-2xl border-[#F05F82] py-[24px]
               md:gap-[25px] md:px-[46px] md:rounded-[52px] md:py-[16px]
               "
              >
                <div>
                  <p className="text-xs text-[#F05F82]">STEP1</p>
                  <p className="text-[16px]">사전 논의</p>
                </div>
                <div className="pr-6">
                  <p className="text-[14px] text-[#AAAAAA]">
                    영상 제작 문의를 통해 의뢰 확인 후
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">
                    상담을 통해 방향 설정 및 내용 협의
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 md:border md:gap-2 md:py-[20px] md:px-[60px] border-[#FF4E83] md:rounded-[20px] md:bg-[#141414]">
            <div className="flex flex-col items-center gap-3">
              <Image src={PloonetImage} alt="IMAGE" className="w-full h-auto" />
              <p className="text-center">제작 시작 후 12~48시간 이내</p>
            </div>

            <div className="flex flex-col gap-4 border-2 border-[#FFBB54] md:border-0  rounded-[20px] px-[25px] py-[45px]">
              <div className="flex items-center gap-2">
                <Image src={StepImage} alt="step1" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-bold">제작 안내</p>
                  <p className="text-[14px] text-[#CCCCCC]">
                    영상 제작 문의를 통해 의뢰
                  </p>
                  <p className="text-[14px] text-[#CCCCCC]">
                    확인 후 견적 및 진행 순서 안내
                  </p>
                  <div className="border border-white mt-5"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Image src={StepImage} alt="step1" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-bold">제작 안내</p>
                  <p className="text-[14px] text-[#CCCCCC]">
                    영상 제작 문의를 통해 의뢰
                  </p>
                  <p className="text-[14px] text-[#CCCCCC]">
                    확인 후 견적 및 진행 순서 안내
                  </p>
                  <div className="border border-white mt-5"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Image src={StepImage} alt="step1" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-bold">제작 안내</p>
                  <p className="text-[14px] text-[#CCCCCC]">
                    영상 제작 문의를 통해 의뢰
                  </p>
                  <p className="text-[14px] text-[#CCCCCC]">
                    확인 후 견적 및 진행 순서 안내
                  </p>
                  <div className="border border-white mt-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center gap-1 px-7">
        <p className="text-[10px] text-[#999999] text-center">
            * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p className="text-[10px] text-[#999999] text-center">
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>

      <div className="bg-black text-white flex flex-col items-center gap-5 py-10">
        <div className="flex flex-col items-center gap-[18px]">
          <p className="text-[18px] text-[#FFBB54]">영상 제작 문의</p>
          <p className="text-2xl flex flex-col items-center font-bold">
            영상 제작이 필요하다면,{" "}
            <span className="font-light">지금 문의 주세요.</span>
          </p>
        </div>

        <div className="text-[#999999] text-[16px] flex flex-col items-center px-4">
          <p className="text-center">{`여러분이 필요한 영상을 빠르게 제작하기 위해`}</p>
          <p className="text-center">{`플루닛 영상제작소가 즉시 연락 드리겠습니다.`}</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[16px] text-[#666666] font-bold">EMAIL</p>

          <p className="font-[16px]">henry.lim@saltlux.com</p>
        </div>

        <form className="flex flex-col gap-[15px] px-[20px]">
          <select className=" bg-[#141414] rounded-[10px] px-[30px] py-[20px] text-[#666666] px">
            <option>영상 유형 선택</option>
          </select>

          <input
            defaultValue={"연락 받으실 담당자 성함"}
            className=" bg-[#141414] rounded-[10px] px-[30px] py-[20px] text-[#666666]"
          />
          <input
            defaultValue={"이메일"}
            className=" bg-[#141414] rounded-[10px] px-[30px] py-[20px] text-[#666666]"
          />
          <input
            defaultValue={"휴대폰 번호"}
            className=" bg-[#141414] rounded-[10px] px-[30px] py-[20px] text-[#666666]"
          />
         
          <input
            defaultValue={"참고 영상"}
            className=" bg-[#141414] rounded-[10px] px-[30px] py-[20px] text-[#666666]"
          />
          <p className="text-xs text-[#FF6D51]">{`* 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.`}</p>
        </form>

        <div className="flex">
          <button className="text-[16px] bg-[#FF6D51] font-bold  px-[130px] py-[12px] rounded-[8px]">
            문의 보내기
          </button>
        </div>
      </div>
    </div>
  );
}
