import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
  Btn,
  Modal,
  GuideBox,
  IconBox,
  Icon,
  IconDiv,
  IconText,
  ModalDiv,
  InputBox,
  InputTitle,
  InputText,
  CompleteBtn,
} from './style';

import { IoCloseSharp } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [dp, setDp] = useState(0);
  const closeModal = () => {
    setIsOpen(false);
    setDp(0);
  };
  return (
    <>
      <ReactModal isOpen={isOpen} style={customStyle}>
        {dp === 0 && (
          <Modal>
            <Btn setIsOpen={setIsOpen} onClick={closeModal}>
              <IoCloseSharp />
            </Btn>
            <GuideBox>
              <img
                src={require('../../../assets/Logo.png')}
                style={{ height: 50, marginRight: -20 }}
              />
              에 오신것을 환영합니다!
            </GuideBox>
            <IconBox>
              <IconDiv>
                <Icon
                  style={{ padding: 10, width: 80, height: 80 }}
                  src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                  onClick={() => {
                    setDp(1);
                  }}
                />
                <IconText>Google 로그인</IconText>
              </IconDiv>
              <IconDiv>
                <Icon src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />
                <IconText>Github 로그인</IconText>
              </IconDiv>
              <IconDiv>
                <Icon src="https://t1.daumcdn.net/crms/symbol_img/symbol_%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1.png" />
                <IconText>Kakao 로그인</IconText>
              </IconDiv>
            </IconBox>
          </Modal>
        )}
        {/* 모달 닉네임 설정 페이지 */}
        {dp === 1 && (
          <Modal>
            <ModalDiv>
              <Btn
                onClick={() => {
                  setDp(0);
                }}
              >
                <IoIosArrowBack />
              </Btn>
              <Btn setIsOpen={setIsOpen} onClick={closeModal}>
                <IoCloseSharp />
              </Btn>
            </ModalDiv>
            <GuideBox>
              <img
                src={require('../../../assets/Logo.png')}
                style={{ height: 50, marginRight: -20 }}
              />
              에서 활동할
            </GuideBox>
            <GuideBox style={{ marginTop: -120 }}>
              닉네임을 정해주세요.
            </GuideBox>
            <InputBox>
              <InputTitle>닉네임</InputTitle>
              <InputText />
            </InputBox>
            <div style={{ textAlign: 'center' }}>
              <CompleteBtn
                onClick={() => {
                  setDp(2);
                }}
              >
                가입완료
              </CompleteBtn>
            </div>
          </Modal>
        )}
        {dp === 2 && (
          <Modal>
            <ModalDiv>
              <Btn
                onClick={() => {
                  setDp(1);
                }}
              >
                <IoIosArrowBack />
              </Btn>
              <Btn setIsOpen={setIsOpen} onClick={closeModal}>
                <IoCloseSharp />
              </Btn>
            </ModalDiv>

            <GuideBox>가입이 완료 되었습니다.</GuideBox>
            <GuideBox style={{ marginTop: -100 }}>
              <img
                src={require('../../../assets/Logo.png')}
                style={{ height: 60, marginRight: -30 }}
              />
              가 당신의 고민을 해결해드릴게요!
            </GuideBox>

            <div style={{ textAlign: 'center' }}>
              <CompleteBtn
                onClick={closeModal}
                style={{ backgroundColor: '#EC5858' }}
              >
                시작하기
              </CompleteBtn>
            </div>
          </Modal>
        )}
      </ReactModal>
    </>
  );
};

export default LoginModal;

const customStyle = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
