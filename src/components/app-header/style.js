import styled from 'styled-components'
const HeaderWrapper = styled.div`
  background-color: #242424;
  height: 75px;
  font-size: 14px;
  .content {
    height: 70px;
    /* background-color: #0f0; */
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }
      .select-links {
        line-height: 70px;
        display: flex;
        justify-content: space-between;
        .select-item {
          position: relative;
          a {
            display: block;
            padding: 0 20px;
            color: #ccc;
          }

          &:last-of-type a {
            position: relative;
            ::after {
              position: absolute;
              content: '';
              width: 28px;
              height: 19px;
              background-image: url(${require('@/assets/img/sprite_01.png')});
              background-position: -190px 0;
              top: 20px;
              right: -15px;
            }
          }

          &:hover a,
          a.active {
            color: #fff;
            background: #000;
            text-decoration: none;
          }

          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -2px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
        }
      }
    }
    .right {
    }
  }
  .divider {
    height: 5px;
    background-color: rgb(190, 7, 29);
  }
`
export { HeaderWrapper }
