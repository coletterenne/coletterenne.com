import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import meet1 from "../images/Kindergarten/Thumb/2022-08-19 10.33.27.jpg";
import meet2 from "../images/Kindergarten/Thumb/2022-08-22 17.58.33.jpg";
import meet3 from "../images/Kindergarten/Thumb/2022-08-25 12.42.31.jpg";
import meet4 from "../images/Kindergarten/Thumb/2022-08-25 12.42.52.jpg";
import meet5 from "../images/Kindergarten/Thumb/2022-08-25 17.24.00.jpg";
import meet6 from "../images/Kindergarten/Thumb/2022-08-25 18.45.29.jpg";
import class1 from "../images/Kindergarten/Thumb/IMG-0863.jpg";
import class2 from "../images/Kindergarten/Thumb/IMG-0864.jpg";
import class3 from "../images/Kindergarten/Thumb/IMG-0865.jpg";
import class4 from "../images/Kindergarten/Thumb/IMG-0866.jpg";
import class5 from "../images/Kindergarten/Thumb/IMG-0867.jpg";
import class6 from "../images/Kindergarten/Thumb/IMG-0868.jpg";
import class7 from "../images/Kindergarten/Thumb/IMG-0869.jpg";
import class8 from "../images/Kindergarten/Thumb/IMG-0870.jpg";
import class9 from "../images/Kindergarten/Thumb/IMG-0871.jpg";
import fun1 from "../images/Kindergarten/Thumb/2022-10-14 11.51.53.jpg";
import fun2 from "../images/Kindergarten/Thumb/2022-10-14 11.53.20.jpg";
import fun3 from "../images/Kindergarten/Thumb/2022-10-14 12.12.16.jpg";
import halloween1 from "../images/Kindergarten/Thumb/2022-10-28 07.56.46.jpg";
import halloween2 from "../images/Kindergarten/Thumb/2022-10-28 14.29.31.jpg";
import halloween3 from "../images/Kindergarten/Thumb/2022-10-28 14.29.31.jpg";
import halloween4 from "../images/Kindergarten/Thumb/2022-10-28 14.29.47.jpg";
import halloween5 from "../images/Kindergarten/Thumb/2022-10-28 14.29.50.jpg";
import halloween6 from "../images/Kindergarten/Thumb/2022-10-28 14.29.55.jpg";
import halloween7 from "../images/Kindergarten/Thumb/2022-10-28 14.29.56.jpg";
import halloween8 from "../images/Kindergarten/Thumb/2022-10-28 14.29.57.jpg";
import halloween9 from "../images/Kindergarten/Thumb/2022-10-31 18.02.43.jpg";
import fall1 from "../images/Kindergarten/Thumb/2022-10-14 15.10.01.jpg";
import fall2 from "../images/Kindergarten/Thumb/2022-10-24 15.13.28.jpg";
import fall3 from "../images/Kindergarten/Thumb/2022-10-24 15.15.28.jpg";
import fall4 from "../images/Kindergarten/Thumb/2022-10-24 15.16.52.jpg";
import fall5 from "../images/Kindergarten/Thumb/2022-10-24 15.18.36.jpg";
import fall6 from "../images/Kindergarten/Thumb/2022-10-25 15.21.56.jpg";
import fall7 from "../images/Kindergarten/Thumb/2022-10-25 18.27.18.jpg";
import fall8 from "../images/Kindergarten/Thumb/2022-11-10 15.16.50.jpg";
import book1 from "../images/Kindergarten/Reading/Colette.jpg";
import winter1 from "../images/Kindergarten/Thumb/2022-11-09 08.05.30.jpg";
import winter2 from "../images/Kindergarten/Thumb/2022-11-09 08.05.32.jpg";
import winter3 from "../images/Kindergarten/Thumb/2022-11-10 15.10.14.jpg";
import winter4 from "../images/Kindergarten/Thumb/2022-11-11 08.02.35.jpg";
import winter5 from "../images/Kindergarten/Thumb/2022-11-15 16.29.26-1.jpg";
import winter6 from "../images/Kindergarten/Thumb/2022-11-15 16.35.15.jpg";
import winter7 from "../images/Kindergarten/Thumb/2022-11-18 15.27.49.jpg";
import winter8 from "../images/Kindergarten/Thumb/2022-11-20 10.59.17.jpg";
import winter9 from "../images/Kindergarten/Thumb/2022-11-26 13.21.07.jpg";
import winter10 from "../images/Kindergarten/Thumb/2022-11-30 16.41.11.jpg";
import winter11 from "../images/Kindergarten/Thumb/2022-12-10 09.35.37.jpg";
import winter12 from "../images/Kindergarten/Thumb/2022-12-10 10.17.03-1.jpg";
import winter13 from "../images/Kindergarten/Thumb/2022-12-23 13.16.05.jpg";
import winter14 from "../images/Kindergarten/Thumb/2022-12-24 17.02.37.jpg";
import winter15 from "../images/Kindergarten/Thumb/2023-01-05 11.02.08.jpg";
import winter16 from "../images/Kindergarten/Thumb/2023-01-05 12.11.36.jpg";
import winter17 from "../images/Kindergarten/Thumb/2023-01-16 17.22.02.jpg";
import winter18 from "../images/Kindergarten/Thumb/2023-01-16 17.32.43.jpg";
import winter19 from "../images/Kindergarten/Thumb/2023-01-21 10.56.12.jpg";
import winter20 from "../images/Kindergarten/Thumb/2023-01-21 10.59.45.jpg";
import winter21 from "../images/Kindergarten/Thumb/2023-01-24 15.29.05.jpg";
import winter22 from "../images/Kindergarten/Thumb/2023-01-27 15.16.04.jpg";
import trip1 from "../images/Kindergarten/Thumb/2023-03-04 18.27.48-1.jpg";
import trip2 from "../images/Kindergarten/Thumb/2023-03-04 18.27.48-2.jpg";
import trip3 from "../images/Kindergarten/Thumb/2023-03-04 18.27.48-3.jpg";
import trip4 from "../images/Kindergarten/Thumb/2023-03-04 18.27.48-4.jpg";
import trip5 from "../images/Kindergarten/Thumb/2023-03-04 18.27.48-5.jpg";
import misc1 from "../images/Kindergarten/Thumb/2022-11-19 14.43.29.jpg";
import misc2 from "../images/Kindergarten/Thumb/2023-02-04 13.26.58.jpg";
import misc3 from "../images/Kindergarten/Thumb/2023-02-04 13.30.51.jpg";
import misc4 from "../images/Kindergarten/Thumb/2023-02-04 13.38.46.jpg";
import misc5 from "../images/Kindergarten/Thumb/2023-03-15 08.41.07.jpg";
import misc6 from "../images/Kindergarten/Thumb/2023-03-15 10.35.56.jpg";
import misc7 from "../images/Kindergarten/Thumb/2023-03-24 14.43.04.jpg";
import hundred_days_1 from "../images/Kindergarten/Thumb/2023-02-11 14.32.34.jpg";
import hundred_days_2 from "../images/Kindergarten/Thumb/2023-02-11 16.17.13.jpg";
import hundred_days_3 from "../images/Kindergarten/Thumb/2023-02-11 17.23.13.jpg";
import hundred_days_4 from "../images/Kindergarten/Thumb/2023-02-16 08.13.28.jpg";
import hundred_days_5 from "../images/Kindergarten/Thumb/2023-02-16 13.18.20.jpg";
import tyktw1 from "../images/Kindergarten/Thumb/IMG_3147.jpg";
import tyktw2 from "../images/Kindergarten/Thumb/IMG_3148.jpg";
import tyktw3 from "../images/Kindergarten/Thumb/IMG_3152.jpg";
import tyktw4 from "../images/Kindergarten/Thumb/IMG_3155.jpg";

const events = [
  {
    eventName: "Meeting Miss Snider",
    imageData: [
      {
        imageUrl: meet1,
        description: "Colette getting a new hair cut for school",
      },
      {
        imageUrl: meet2,
        description: "The bulldog sign outside of the school",
      },
      {
        imageUrl: meet3,
        description: "Miss Snider and Colette",
      },
      {
        imageUrl: meet4,
        description: "Miss Snider and Colette and Chloe",
      },
      {
        imageUrl: meet5,
        description: "The bulldog sign outside of our house",
      },
      {
        imageUrl: meet6,
        description: "Chloe and Colette",
      },
    ],
  },
  {
    eventName: "The Classroom",
    imageData: [
      {
        imageUrl: class1,
        description: "Miss Snider's Desk",
      },
      {
        imageUrl: class2,
        description: "The smart board and carpet area",
      },
      {
        imageUrl: class3,
        description: "A wall of the classroom",
      },
      {
        imageUrl: class4,
        description: "Reading area",
      },
      {
        imageUrl: class5,
        description: "Supplies and expectations",
      },
      {
        imageUrl: class6,
        description: "Wash those hands",
      },
      {
        imageUrl: class7,
        description: "Cubby area",
      },
      {
        imageUrl: class8,
        description: "Play area",
      },
      {
        imageUrl: class9,
        description: "Play area 2",
      },
    ],
  },
  {
    eventName: "The Fun Run!",
    imageData: [
      {
        imageUrl: fun3,
        description: "Drinking water",
      },
      {
        imageUrl: fun1,
        description: "Colette",
      },
      {
        imageUrl: fun2,
        description: "The entire class",
      },
    ],
  },
  {
    eventName: "Hallloween",
    imageData: [
      {
        imageUrl: halloween1,
        description: "Colette",
      },
      {
        imageUrl: halloween2,
        description: "The whole class walking",
      },
      {
        imageUrl: halloween3,
        description: "Miss Snider",
      },
      {
        imageUrl: halloween4,
        description: "Chloe",
      },
      {
        imageUrl: halloween5,
        description: "Colette",
      },
      {
        imageUrl: halloween6,
        description: "Colette",
      },
      {
        imageUrl: halloween7,
        description: "Colette",
      },
      {
        imageUrl: halloween8,
        description: "Colette",
      },
      {
        imageUrl: halloween9,
        description: "Trick or Treating",
      },
    ],
  },
  {
    eventName: "The Fall",
    imageData: [
      {
        imageUrl: fall1,
        description: "The Smiths and Colette",
      },
      {
        imageUrl: fall2,
        description: "Holding Hands",
      },
      {
        imageUrl: fall3,
        description: "Holding Hands",
      },
      {
        imageUrl: fall4,
        description: "Showing off leaves",
      },
      {
        imageUrl: fall5,
        description: "A great pic of Liv throwing leaves at the Church",
      },
      {
        imageUrl: fall6,
        description: "Playing with a caterpillar",
      },
      {
        imageUrl: fall7,
        description: "Playing in the trees",
      },
      {
        imageUrl: fall8,
        description: "Holding hands again",
      },
    ],
  },
  {
    eventName: "Mystery Reader Event",
    imageData: [
      {
        imageUrl: book1,
        description:
          "Dad read 'The Book with No Pictures' and the kids loved it",
      },
    ],
  },
  {
    eventName: "Winter",
    imageData: [
      {
        imageUrl: winter3,
        description: "Chloe and Colette",
      },
      {
        imageUrl: winter1,
        description: "Chloe and Colette",
      },
      {
        imageUrl: winter2,
        description: "Chloe and Colette",
      },
      {
        imageUrl: winter4,
        description: "Colette and Millie",
      },
      {
        imageUrl: winter5,
        description: "Colette, Millie and Amalia @ Brownies",
      },
      {
        imageUrl: winter6,
        description: "Colette showing off her Brownie Vest",
      },
      {
        imageUrl: winter7,
        description: "The ultimate picture",
      },
      {
        imageUrl: winter8,
        description: "Daddy and Colette at the Mall",
      },
      {
        imageUrl: winter9,
        description: "Final Greenfield Village Ride before it closes",
      },
      {
        imageUrl: winter10,
        description: "Chloe and Colette playing stardew valley",
      },
      {
        imageUrl: winter11,
        description: "Chloe and Colette with Santa",
      },
      {
        imageUrl: winter12,
        description: "Lola, Chloe Colette and Mr and Mrs. Claus",
      },
      {
        imageUrl: winter13,
        description: "Sitting in Daddy's computer chair",
      },
      {
        imageUrl: winter14,
        description: "Downtown Rochester Lights",
      },
      {
        imageUrl: winter15,
        description: "Nash's bday party brownies",
      },
      {
        imageUrl: winter16,
        description: "The Crew",
      },
      {
        imageUrl: winter17,
        description: "Birthday Party",
      },
      {
        imageUrl: winter18,
        description: "Birthday Party",
      },
      {
        imageUrl: winter19,
        description: "Brownie dance Event",
      },
      {
        imageUrl: winter20,
        description: "Chloe and Colette",
      },
      {
        imageUrl: winter21,
        description: "Chloe and Colette in the mud pit",
      },
      {
        imageUrl: winter22,
        description: "Chloe and Colette in piles of snow",
      },
    ],
  },
  {
    eventName: "Field Trip @ Dinosaur Hill Nature Preserve",
    imageData: [
      {
        imageUrl: trip1,
        description: "Holding hands",
      },
      {
        imageUrl: trip2,
        description: "Listening nicely",
      },
      {
        imageUrl: trip3,
        description: "Drilling the sap",
      },
      {
        imageUrl: trip4,
        description: "The whole class",
      },
      {
        imageUrl: trip5,
        description: "Learning about nature",
      },
    ],
  },
  {
    eventName: "100 days of school!",
    imageData: [
      {
        imageUrl: hundred_days_2,
        description: "Hugs",
      },
      {
        imageUrl: hundred_days_1,
        description: "Making the shirts",
      },
      {
        imageUrl: hundred_days_3,
        description: "The T-Shirt design",
      },
      {
        imageUrl: hundred_days_4,
        description: "Cold out, but showing off the tees",
      },
      {
        imageUrl: hundred_days_5,
        description: "3 Friends and their shirts",
      },
    ],
  },
  {
    eventName: "Take your kid to work day",
    imageData: [
      {
        imageUrl: tyktw1,
        description: "Excited",
      },
      {
        imageUrl: tyktw2,
        description: "Hugs",
      },
      {
        imageUrl: tyktw3,
        description: "Yum",
      },
      {
        imageUrl: tyktw4,
        description: "Beautiful spring flowers",
      },
    ],
  },
  {
    eventName: "Miscellaneous",
    imageData: [
      {
        imageUrl: misc5,
        description: "Artwork!",
      },
      {
        imageUrl: misc1,
        description: "Donuts with William",
      },
      {
        imageUrl: misc2,
        description: "Amalia and Colette",
      },
      {
        imageUrl: misc3,
        description: "Bowling!",
      },
      {
        imageUrl: misc4,
        description: "Chris getting a strike",
      },
      {
        imageUrl: misc6,
        description: "All the kids are so cute",
      },
      {
        imageUrl: misc7,
        description: "Millie and Colette on a play date",
      },
    ],
  },
];

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Kindergarden() {
  return (
    <section className="section" style={{ marginTop: 85 }}>
      <div className="container">
        <h1 className="title is-2 has-text-centered">Kindergarten 2023</h1>
        <hr />
        {events.map((image, idx) => {
          return (
            <div key={idx}>
              <hr />
              <h1 className="title has-text-centered">{image.eventName}</h1>
              <Slider {...settings}>
                {image.imageData.map((image, imageIdx) => (
                  <div key={imageIdx} className="container has-text-centered">
                    <div className="is-centered">
                      <img
                        className="is-centered"
                        src={image.imageUrl}
                        alt={image.description}
                        style={{ width: 600 }}
                      />
                      <p>{image.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          );
        })}
      </div>
    </section>
  );
}
