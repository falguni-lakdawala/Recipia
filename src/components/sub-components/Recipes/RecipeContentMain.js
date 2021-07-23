import React from "react";
import reactDom from "react-dom";
import favoriteIcon from "../../../assets/icons/favorite.svg";
import RecipeContentMainInstructions from "./RecipeContentMainInstructions";

const RecipeContentMain = ({ recipeData }) => {
  const favRecipe = () => {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    let fav = document.querySelector(".recipe-fav-btn > svg");
    fav.classList.toggle("active");
    const handlelike = () => {
      if (user && (fav.classList.contains("active"))) {
        const res = fetch("http://44.238.74.165:3000/recipe/updaterecipelike", {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            recipeID: recipeData.id,
            userID: user.uid,
          }),
        })
          .then((r) => r.json())
          .then((d) => alert("Succesfully added to your favorites!"))
          .catch((e) => console.log(e));
      } 
      if(!user){
        // console.log("Not logged in");
        alert("Not logged in");
      }
    };
    handlelike();
  };

  return (
    <div className="recipe-main">
      <div className="recipe-data-cont">
        <div className="recipe-heading">{recipeData.title}</div>
        <div className="recipe-subheading-cont">
          <div className="recipe-author">
            {/* <img src={recipeContentMainData.authorPictureURL} alt="author pic" className="recipe-author-picture" /> */}
            <div className="recipe-author-name">{recipeData.sourceName}</div>
          </div>
          <div className="recipe-fav-btn-cont">
            <button
              role="button"
              aria-label="Favourite button"
              title="fav"
              type="button"
              className="recipe-fav-btn"
              onClick={() => favRecipe()}
            >
              <svg
                width="49"
                height="45"
                viewBox="0 0 49 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.8243 18.071L35.7795 27.7974L38.5966 42.2289L24.6987 34.9412L10.9738 41.1786L13.4306 26.9485L2.12646 16.3803L17.5445 14.8696L24.2809 2.09277L31.3559 15.3947L46.8243 18.071Z"
                  fill="white"
                />
                <path
                  d="M45.333 16.5816C43.3805 18.301 41.428 20.0204 39.4828 21.7326C38.2075 22.8548 36.9323 23.9771 35.6571 25.0994C34.9871 25.6893 34 26.3152 33.7478 27.2361C33.5101 28.0922 33.9352 29.3008 34.1009 30.1425C34.4251 31.8043 34.7493 33.4734 35.0735 35.1352C35.4436 37.0311 35.8136 38.9309 36.1837 40.8287C36.3589 41.7271 37.417 42.1293 38.1432 41.5722C38.8549 41.0261 38.7599 39.9274 37.9655 39.5109C36.1489 38.5582 34.3345 37.6078 32.5158 36.6532C30.9164 35.8115 29.317 34.9769 27.7175 34.1352C26.9755 33.7468 26.0965 33.0993 25.2607 32.8979C24.2233 32.6533 23.1786 33.3151 22.2564 33.7324C20.6281 34.4734 18.9999 35.2144 17.3716 35.9554C15.4787 36.8155 13.5817 37.6798 11.6868 38.5419C10.8807 38.9087 10.7545 40.0003 11.4572 40.5394C12.1596 41.0782 13.187 40.6801 13.3375 39.8077C13.6736 37.8594 14.0096 35.911 14.3457 33.9626C14.6266 32.3223 14.9148 30.6749 15.1958 29.0346C15.3903 27.8908 15.7794 26.7037 15.0805 25.6606C13.7333 23.6534 11.1828 21.9556 9.42485 20.3153C7.92691 18.9141 6.42897 17.5129 4.93103 16.1117C4.29245 15.5143 3.25341 15.7392 2.91823 16.5468C2.55605 17.4195 3.255 18.3624 4.19537 18.2703C6.07292 18.0863 7.9487 17.9022 9.82832 17.7182C12.386 17.4664 15.3255 17.5815 17.8183 16.9269C20.1022 16.3298 21.3342 12.1716 22.314 10.3155C23.2923 8.46228 24.2706 6.60907 25.2488 4.75587C25.6337 4.02683 25.1051 3.1501 24.2807 3.1501C23.4547 3.1501 22.9262 4.02994 23.3139 4.75927C24.3111 6.63517 25.3082 8.51349 26.3054 10.3874C27.0979 11.8766 27.8904 13.373 28.683 14.8622C29.1657 15.7758 29.5403 16.8477 30.5346 17.3153C31.2911 17.6679 32.3069 17.6823 33.121 17.8261C34.8502 18.1283 36.5721 18.4233 38.3012 18.7254C40.9525 19.1858 43.6038 19.6463 46.2552 20.0995C48.9065 20.5599 50.052 16.5024 47.3791 16.0348C42.4627 15.1846 37.5528 14.3344 32.637 13.4842C32.4486 13.4516 32.3428 13.6919 32.4945 13.8084C32.6512 13.9288 32.8632 13.7499 32.7704 13.5754C30.5482 9.39451 28.3255 5.20799 26.0965 1.02786C25.3688 -0.339022 23.1786 -0.346216 22.4581 1.02786C20.3474 5.02691 18.2367 9.02597 16.132 13.025C16.0123 13.2525 16.261 13.4955 16.4839 13.3674C16.7249 13.2287 16.6079 12.8532 16.3311 12.8803C11.5986 13.3433 6.86563 13.8011 2.12652 14.265C0.426213 14.4305 -0.805787 16.5096 0.635148 17.8621C4.1809 21.1793 7.72664 24.4964 11.2724 27.8136C11.4652 27.994 11.7738 27.8097 11.7066 27.5544C11.6345 27.2812 11.2412 27.2981 11.1931 27.5766C10.4414 31.9221 9.6948 36.2726 8.94214 40.6172C8.61793 42.502 10.311 43.7826 12.0402 42.9984C16.2725 41.075 20.5048 39.1516 24.7371 37.2226C24.9772 37.1132 24.899 36.7539 24.6352 36.7539C24.3789 36.7539 24.2943 37.0975 24.5213 37.2167C28.86 39.494 33.1988 41.7709 37.5375 44.0416C39.2306 44.9336 40.9885 43.4732 40.6355 41.6603C39.776 37.2435 38.9104 32.8326 38.0498 28.4168C37.9935 28.1279 37.5851 28.1146 37.5101 28.3991C37.4404 28.6637 37.7557 28.8584 37.961 28.6775C41.415 25.6343 44.8689 22.5967 48.3229 19.5528C50.3546 17.7686 47.3575 14.7974 45.333 16.5816Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="recipe-main-cont">
          <div className="recipe-image-main-cont">
            <img
              role="img"
              aria-label="Recipe image"
              src={recipeData.image}
              alt="recipe main image"
              className="recipe-image-main"
            />
          </div>
          <div className="recipe-about-cont">
            <div className="recipe-about-heading">About the Dish</div>
            <div
              className="recipe-about-text"
              dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeContentMain;
