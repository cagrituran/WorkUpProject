import React from 'react';
import styled from 'styled-components';

export default function BasePageLeftSide() {
  return (
    <div className='baseLeftSideContainer'>
      <div className='baseLeftSideArtcard'>
        <div className='baseLeftSideAnalizler'>
            <div className='header'>
              <div>Analizler</div>
              <div className='headertext'>Son 30 Gündeki Faaliyetler</div>
            </div>
            <hr/>
            <div className='headerbody'>
              <div className='headerbodytext'>1</div>
              <div> <a>Yeni Takipçiler</a></div>
            </div>
            <hr/>
            <div className='headerbody'>
              <div className='headerbodytext'>3</div>
              <div> <a>Tekil Ziyaretçiler</a></div>
            </div>
            <hr/>
            <div className='headerbody'>
              <div className='headerbodytext'>47</div>
              <div> <a>Yayın Görüntülemeleri</a></div>
            </div>
            <hr/>
            <div className='headerbody'>
              <div className='headerbodytext'>47</div>
              <div><a>Yayın Görüntülemeleri</a></div>
            </div>
        </div>
      </div>
    </div>
  )
}

