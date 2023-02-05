import { useState } from 'react';
import ReactModal from 'react-modal';
import * as S from './style';
import { IoCloseSharp } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import { colors } from '../../../common/color';
import {
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import {
  authService,
  GitHubProvider,
  GoogleProvider,
} from '../../../common/firebase';

const LoginModal = ({ isOpen, setIsOpen }: isOpenPropsP) => {
  const [dp, setDp] = useState(0);
  const [nickName, setNickName] = useState('');

  const closeModal = () => {
    setIsOpen(false);
    setDp(0);
  };

  const changeTimeHandler = (date: any) => {
    const arr = date?.slice(5, 25).split(' ');
    if (arr[1] === 'Jan') {
      arr[1] = '01';
    }
    const arr3 = arr[3].replaceAll(':', '');
    const time = parseInt(arr[2] + arr[1] + arr[0] + arr3);
    return time;
  };

  const logInHandler = (social: string) => {
    let provider: any;

    if (social === 'github') {
      provider = GitHubProvider;
    } else {
      provider = GoogleProvider;
    }

    // 유저 안에 닉네임이

    //setPersistence => 로그인 시 세션스토리지에 유저 정보 저장
    setPersistence(authService, browserSessionPersistence).then(() => {
      signInWithPopup(authService, provider).then(() => {
        const createdAt = authService.currentUser?.metadata.creationTime;
        const lastLoginAt = authService.currentUser?.metadata.lastSignInTime;

        changeTimeHandler(createdAt) < changeTimeHandler(lastLoginAt)
          ? closeModal()
          : setDp(1);
      });
    });
  };

  const changeNickNameHandler = async () => {
    if (authService.currentUser) {
      await updateProfile(authService.currentUser, {
        displayName: nickName,
      }).then(() => setDp(2));
    }
  };
  return (
    <>
      <ReactModal isOpen={isOpen} style={customStyle}>
        {dp === 0 && (
          <S.Modal>
            <S.Btn onClick={closeModal}>
              <IoCloseSharp />
            </S.Btn>
            <S.GuideBox>
              <img
                src={require('../../../assets/Logo.png')}
                style={{ height: 50, marginRight: -20 }}
                alt="logo"
              />
              에 오신것을 환영합니다!
            </S.GuideBox>
            <S.IconBox>
              <S.IconDiv>
                <S.Icon
                  style={{ padding: 10, width: 80, height: 80 }}
                  src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                  onClick={() => {
                    logInHandler('google');
                  }}
                />
                <S.IconText>Google 로그인</S.IconText>
              </S.IconDiv>
              <S.IconDiv>
                <S.Icon
                  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                  onClick={() => {
                    logInHandler('github');
                  }}
                />
                <S.IconText>Github 로그인</S.IconText>
              </S.IconDiv>
              <S.IconDiv>
                <S.Icon
                  src="https://t1.daumcdn.net/crms/symbol_img/symbol_%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1.png"
                  onClick={() => {
                    alert('준비중입니다. 다른 방법을 이용해주세요.');
                  }}
                />
                <S.IconText>Kakao 로그인</S.IconText>
              </S.IconDiv>
            </S.IconBox>
          </S.Modal>
        )}
        {/* 모달 닉네임 설정 페이지 */}
        {dp === 1 && (
          <S.Modal>
            <S.ModalDiv>
              <S.Btn
                onClick={() => {
                  setDp(0);
                }}
              >
                <IoIosArrowBack />
              </S.Btn>
              <S.Btn onClick={closeModal}>
                <IoCloseSharp />
              </S.Btn>
            </S.ModalDiv>
            <S.GuideBox>
              <img
                src={require('../../../assets/Logo.png')}
                style={{ height: 50, marginRight: -20 }}
                alt="logo"
              />
              에서 활동할
            </S.GuideBox>
            <S.GuideBox style={{ marginTop: -120 }}>
              닉네임을 정해주세요.
            </S.GuideBox>
            <S.InputBox>
              <S.InputTitle>닉네임</S.InputTitle>
              <S.InputText onChange={(e) => setNickName(e.target.value)} />
            </S.InputBox>
            <div style={{ textAlign: 'center' }}>
              <S.CompleteBtn
                backgroudColor={`${colors.RED}`}
                onClick={() => {
                  setDp(2);
                }}
              >
                건너뛰기
              </S.CompleteBtn>
              <S.CompleteBtn
                backgroudColor={`${colors.BLUE}`}
                onClick={changeNickNameHandler}
              >
                가입완료
              </S.CompleteBtn>
            </div>
          </S.Modal>
        )}
        {dp === 2 && (
          <S.Modal>
            <S.ModalDiv>
              <S.Btn
                onClick={() => {
                  setDp(1);
                }}
              >
                <IoIosArrowBack />
              </S.Btn>
              <S.Btn onClick={closeModal}>
                <IoCloseSharp />
              </S.Btn>
            </S.ModalDiv>

            <S.GuideBox>가입이 완료 되었습니다.</S.GuideBox>
            <S.GuideBox style={{ marginTop: -100 }}>
              <img
                src={require('../../../assets/Logo.png')}
                style={{ height: 60, marginRight: -30 }}
                alt="logo"
              />
              가 당신의 고민을 해결해드릴게요!
            </S.GuideBox>

            <div style={{ textAlign: 'center' }}>
              <S.CompleteBtn
                onClick={closeModal}
                style={{ backgroundColor: colors.RED }}
              >
                시작하기
              </S.CompleteBtn>
            </div>
          </S.Modal>
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
