import './App.css';
import React from 'react';
import LikePost from './components/LikePost';
import LikeImage from './components/LikeImage';
import HigherOrderComponent from './components/HigherOrderComponent/HigherOrder';
import LikePostHoc from './components/HigherOrderComponent/LikePostHOC';
import LikeImageHoc from './components/HigherOrderComponent/LikeImageHOC';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponents';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';


const LikeImageH = HigherOrderComponent(LikeImageHoc)
const LikePostH = HigherOrderComponent(LikePostHoc)


function App() {
  return (
    <div>
      <h3>Some Blog</h3>


      <div className="render">
        <RenderPropsComponent render={(count, increaseCount)=>(
          <LikeImageRender count={count} increaseCount={increaseCount}/>
        )} />
         <RenderPropsComponent render={(count, increaseCount)=>(
          <LikePostRender count={count} increaseCount={increaseCount} />
        )} />
      </div>

      <h3>Some blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>

      <h3>Some blog</h3>
      <div className="hoc">
        <LikeImageH />
        <LikePostH />
      </div>


    </div>
  );
}

export default App;
