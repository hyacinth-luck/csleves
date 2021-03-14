<template>
  <div class="kakao">
    <a id="create-kakao-link-btn" ref="createKakaoLinkBtn" href="javascript:;">
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
      />
    </a>
  </div>
</template>
<script>
export default {
  name:'KAKAO',
  data(){
    return{

    }
  },
  mounted(){

    const kakaoLoadSDK = window.Kakao.isInitialized()
    console.log('kaoako=>',window.Kakao)
    if(!kakaoLoadSDK) {return}
   window.Kakao.Link.createDefaultButton({
    container: this.$refs.createKakaoLinkBtn,
    objectType: 'feed',
    content: {
      title: 'Strawberry cheese cake',
      description: '#cake #strawberry #cafe #atmosphere #blinddate',
      imageUrl:
        'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: 'View on Web',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: 'View on App',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  })
  }
}
</script>
<style scoped lang="less">
.kakao{
  width:100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>