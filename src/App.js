import './App.css';
import styled from 'styled-components';
import IntroPage from './pages/IntroPage';
import ArticlesPage from './pages/ArticlesPage';
import StaffPage from './pages/StaffPage';

const PageWrapper = styled.div`
  background-color: #1F2925; 
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    
    <div>
      <PageWrapper>
        <IntroPage></IntroPage>
        <ArticlesPage></ArticlesPage>
        <StaffPage></StaffPage>
      </PageWrapper>
    </div>
    

  );
}
export default App;