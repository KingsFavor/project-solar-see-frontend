import sample from "../assets/image_4_2 1.jpg";
import Game from "../components/Game";

function GamePage() {
    const panel = 
    {
      polygon:[
        {
          all_points_x: [
            141,
            141,
            210,
            210
          ],
          all_points_y: [
            202,
            216,
            216,
            202
          ],
        },
        {
          all_points_x: [
            141,
            141,
            210,
            210
          ],
          all_points_y: [
            228,
            241,
            241,
            228
          ],
        },
        {
          all_points_x: [
            160,
            160,
            210,
            210
          ],
          all_points_y: [
            255,
            268,
            268,
            255
          ],
        },
        {
          all_points_x: [
            160,
            160,
            210,
            210
          ],
          all_points_y: [
            279,
            292,
            292,
            279
          ],
        },
        {
          all_points_x: [
            160,
            160,
            210,
            210
          ],
          all_points_y: [
            305,
            318,
            318,
            305
          ],
        },
        {
          all_points_x: [
            160,
            160,
            210,
            210
          ],
          all_points_y: [
            330,
            343,
            343,
            330
          ],
        },
        {
          all_points_x: [
            230,
            230,
            250,
            250
          ],
          all_points_y: [
            101,
            147,
            147,
            101
          ],
        },
        {
          all_points_x: [
            303,
            303,
            353,
            353
          ],
          all_points_y: [
            175,
            188,
            188,
            175
          ],
        },
        {
          all_points_x: [
            303,
            303,
            353,
            353
          ],
          all_points_y: [
            200,
            213,
            213,
            200
          ],
        },
        {
          all_points_x: [
            303,
            303,
            353,
            353
          ],
          all_points_y: [
            225,
            238,
            238,
            225
          ],
        },
      ]
    }

  return (
    <div className='static'>
      <div className='flex flex-row'>
        <p>태양광 패널 찾기</p>
        <div className='flex flex-row'>
          <p>지도</p>
          <p>게임</p>
        </div>
      </div>
      <Game
        round={1}
        score={9}
        image={sample}
        panels={panel}
        life={5}
      />
    </div>
  );
}

export default GamePage;
