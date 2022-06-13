import { OUR_STORY_PARAGRAPH } from "./paragraph"

const Index = () => {
  return (
    <>
      <div className="row" id="about">

        <div className="imgRow ">
          <img src="./RocketImge.png" alt="" />
        </div>
        <div className="textRow col">
          <h2> Our Stories </h2>
          {OUR_STORY_PARAGRAPH}
        </div>

      </div>
    </>
  )
}
export default Index