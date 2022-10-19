import React from "react";
import {capitalizeFirstLetter} from '../../utils/helpers';//capitalizeFirstLetter() is a helper function
import photo from "../../assets/small/commercial/0.jpg";


function Gallery(){
    const currentCategory = {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
      //capitalizeFirstLetter() is a helper function to capitalize the name value when it's rendered
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.description}</p>
        <div>
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
        </div>
      </section>
    );
}

export default Gallery;