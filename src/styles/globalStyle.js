import styled from 'styled-components';
export const StyleSelectAll = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;

  & > div > div {
    width: 100%;
    /* border-color: transparent !important; */
    box-shadow: inset 0 0 0 0 !important;
    margin-top: 4px;
    & > div:nth-child(2) span {
      display: none;
    }
  }
  & > div > div:nth-child(3) > div:nth-child(1) {
    height: 36px;
    cursor: pointer;
  }

  & > div > div:nth-child(4) {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2) !important;
    padding: 8px 4px 8px 4px;
    z-index: 3 !important;
    & > div:nth-child(1) {
      .css-1n7v3ny-option {
        background: #f1f1f1 !important;
        color: #000;
      }
      .css-9gakcf-option {
        background: #f1f1f1 !important;
        color: #000;
      }

      ::-webkit-scrollbar {
        width: 5px;
        margin-right: 15px !important;
      }
      ::-webkit-scrollbar-track {
        // background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #9d9d9d;
        border-radius: 3px;
        margin-right: 40px !important;
      }
    }
  }
  .css-1pahdxg-control {
    /* border: 2px solid #12aae4 !important; */
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  .css-1s2u09g-control {
    /* border: 2px solid #f1f1f1 !important; */
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  &.error > div > div {
    border-color: red !important;
  }
  &.error {
    & div {
      & div {
        border-color: transparent !important;
      }
    }
    .css-1pahdxg-control {
      border-color: transparent !important;
      background-color: #f1f1f1;
    }
  }
`;

export const Title = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #010e31;
  &.form-title {
    font-weight: 600;
    font-size: 18px;
  }
`;
export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #313131;
  &.footer-paragraph {
    color: #777674;
    margin-top: 10px;
  }
`;
export const Error = styled.div`
  color: #d2504d;
  font-size: 12px;
  margin-top: -2px;
  border-radius: 4px;
  padding: 2px 8px;
  &.select-error-tooltip {
    margin-top: 6px;
  }
  &.calendar-error-tooltip {
    margin-top: -2px;
  }
`;

export const MainLayoutProvider = styled.div`
  position: relative;
  width: 100%;
  height: 110vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 11.17px 27.93px #DFD9CE;
  /* backdrop-filter: blur(250px); */
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: calc(100% - 100px);
`;
export const LandingTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 58px;
  text-transform: uppercase;
  text-align: center;
  color: #142e38;
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;
export const CardProvider = styled.div`
  position: relative;
  height: auto;
  margin: 70px 0;
  box-shadow: none !important;
  .button {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 9;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #142E38;
    font-size: 20px;
    background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 5px 12.5px #DFD9CE;
    cursor: pointer;
    bottom: 50%;
    &:hover {
      background-color: #318161;
      color: white;
    }
  }
  .next__btn {
    right: -40px;
  }
  .prev__btn {
    left: -40px;
  }
`;
export const CardWrap = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px; */
  margin-top: 60px;
`;
