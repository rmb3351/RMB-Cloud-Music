import styled from "styled-components";
import sprite_footer_01 from "assets/imgs/sprite_footer_01.png";
import sprite_footer_02 from "assets/imgs/sprite_footer_02.png";

const FooterWrapper = styled.div`
  background-color: #f2f2f2;
  height: 172px;
  border-top: 1px solid #d3d3d3;
  .content {
    height: 115px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    &:nth-child(n) {
      color: #666;
      height: 24px;
      line-height: 24px;
    }
  }
`;

const ContentLeft = styled.div`
  padding-top: 15px;
  ul {
    display: flex;
    li {
      transform: translateX(-6px);
      /* 底部li里的每个a标签的样式和hover样式 */
      a {
        color: #999;
        border-right: 1px solid #999;
        padding: 0 6px;
        font-size: 12px;
      }
      &:last-child a {
        border: 0;
      }
      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }
  }
  .sec-line {
    .copyright {
      margin-right: 14px;
    }
    .certificate:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .third-line {
    line-height: 28px;
    .git-icon {
      margin-left: 10px;
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url(https://portrait.gitee.com/uploads/avatars/user/3285/9857196_rmb3351_1640772710.png!avatar30)
        no-repeat;
      background-size: contain;
    }
  }
`;

const ContentRight = styled.div`
  margin-top: 33px;
  width: 420px;
  height: 70px;
  ul {
    display: flex;
    justify-content: space-between;
    li a {
      display: block;
    }
    /* 第一排图片链接样式 */
    &:first-child {
      margin-bottom: 5px;
      li a {
        width: 50px;
        height: 50px;
        background-size: 114px;
      }
    }
    /* 第二排图片链接样式 */
    &:last-child li a {
      width: 50px;
      height: 10px;
      background-size: 170px;
      &:hover {
        cursor: default;
      }
    }
    /* 所有图片链接精灵图 */
    .self-media {
      background: url(${sprite_footer_02}) no-repeat 0 -55px;
    }
    .user-verify {
      background: url(${sprite_footer_02}) no-repeat -65px -110px;
    }
    .independent-musician {
      background: url(${sprite_footer_02}) no-repeat 0 0;
    }
    .like {
      background: url(${sprite_footer_02}) no-repeat -65px -55px;
    }
    .video-reward {
      background: url(${sprite_footer_02}) no-repeat 0 -110px;
    }
    .self-media-text {
      background: url(${sprite_footer_01}) no-repeat 0 -40px;
    }
    .user-verify-text {
      background: url(${sprite_footer_01}) no-repeat 0 -100px;
    }
    .independent-musician-text {
      background: url(${sprite_footer_01}) no-repeat 0 0;
    }
    .like-text {
      background: url(${sprite_footer_01}) no-repeat 0 -60px;
    }
    .video-reward-text {
      background: url(${sprite_footer_01}) no-repeat 0 -80px;
    }
  }
`;
export { FooterWrapper, ContentLeft, ContentRight };
