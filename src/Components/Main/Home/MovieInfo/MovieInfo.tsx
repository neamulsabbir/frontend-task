import Image from "next/image";
import styled from "styled-components";
import SideMenu from "@/Components/SharedFile/SideMenu/SideMenu";
import tamasha from "../../../../assets/image1.png";
import imdb from "../../../../assets/imdb.png";
import vector from "../../../../assets/vector.png";
import plus from "../../../../assets/plus.png";

const MovieInfo = () => {
  return (
    <MovieInfoContainer>
      <SideMenu />
      <Details>
        <ImageDiv>
          <Image src={tamasha} alt="" />
        </ImageDiv>
        <DetailP>
          Ved and Tara fall in love while on a holiday in Corsica and decide to
          keep their real identities undisclosed. Tara returns to Delhi and
          meets a new Ved, who is trying to discover his true self.
        </DetailP>
        <Genres>
          <span className="highlight">
            GENRES <br />
          </span>
          Romance, Drama
        </Genres>
        <Buttons>
          <Watch>
            <BtnTxt>WATCH</BtnTxt>
            <Image style={{ marginLeft: "20px" }} src={vector} alt="" />
          </Watch>
          <List>
            <BtnTxt>MY LIST</BtnTxt>
            <Image style={{ marginLeft: "20px" }} src={plus} alt="" />
          </List>
        </Buttons>
        <Imdb>
          <Image src={imdb} alt="" width={54} height={27} />
          <Ratings>7.3</Ratings>
          <Ua4K>U/A</Ua4K>
          <Ua4K>4K</Ua4K>
          <H5>2015</H5>
        </Imdb>
      </Details>
    </MovieInfoContainer>
  );
};

export default MovieInfo;

const MovieInfoContainer = styled.div`
  display: flex;
`;
const Details = styled.div`
  margin-left: 38px;
`;
const ImageDiv = styled.div`
  padding-top: 45px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 24px;
`;
const Watch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background: #5436a9;
  padding: 13px 25px;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21px;
  padding: 13px 25px;
  border-radius: 30px;
  background: #5c5c5c;
`;
const BtnTxt = styled.p`
  font-family: Montserrat;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
const Imdb = styled.div`
  display: flex;
  align-items: center;
`;
const Ratings = styled.h5`
  color: #ffc907;
  font-size: 20px;
  font-weight: 700;
  margin-left: 7.3px;
  font-family: Montserrat;
`;
const Ua4K = styled.h5`
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 2px 5px;
  margin-left: 13px;
`;
const H5 = styled.h5`
  color: #959595;
  font-size: 20px;
  font-weight: 700;
  margin-left: 17px;
  font-family: Montserrat;
`;
const DetailP = styled.p`
  font-family: Montserrat;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  width: 560px;
  font-style: normal;
  margin-top: 32px;
`;
const Genres = styled.p`
  font-family: Montserrat;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 18px;
  font-family: Montserrat;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
    font-family: Montserrat;
  }
`;
