import React from 'react'

export default function BasePageRightSide() {
  return (
    <div className='baseLeftSideContainer'>
      <div className='baseLeftSideArtcard'>
        <div className='baseLeftSideAnalizler'>
            <div className='header'>
              <div>Takipçilerinizi Arttırın</div>
              <div className='rightsideheaderimg'>
                <img src="/images/linkedin.png" className='imgrightside'></img>
                <img src="/images/linkedin.png" className='imgrightside'></img>
                </div>

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
