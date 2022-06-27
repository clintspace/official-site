import { OUR_STORY_PARAGRAPH } from "./content"

const Index = () => {
  return (
    <>
      <div className="row" id="about">

        <div className="imgRow ">
          <img src="./RocketImge.png" alt="" />
        </div>
        <div className="textRow col">
          <h2 className="text-hero"> Our Stories </h2>
          {OUR_STORY_PARAGRAPH}
        </div>

      </div>
    </>
  )
}
export default Index