import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-red-600">Index(Home) Page</h1>
      <h3>해야할 것</h3>
      <p>renovate</p>
      <p>Devops Eslint(next.js config typescript 에러 체크 활성화) 등</p>

      <p>관리자 삭제</p>
      <p>쿠키 및 세션 설정</p>
      <p>차트</p>
      <p>i18n</p>
    </>
  );
};

export default Home;
