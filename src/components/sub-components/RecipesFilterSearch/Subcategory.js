import React from 'react'

const subcategory = ({subcategory}) => {


const subcategoriesData = [
  {
    name: "Chicken",
  },
  {
    name: "Dairy",
  },
  {
    name: "Grains",
  },
  {
    name: "Lamb",
  },
  {
    name: "Noodles",
  },
];

    return (
      <>
        <div className="subcategories-cont">
          {(subcategory?subcategory:subcategoriesData).map((data, index) => {
                  return (
                    <button
                      key={data + index}
                      className="subcategory-listing"
                      type="button"
                    >
                      <svg
                        width="31"
                        height="44"
                        viewBox="0 0 31 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.0032 44V0H17.3959H17.1972C16.1988 0.0507447 15.2565 0.470886 14.5581 1.17668L1.442 14.026C0.666977 14.7984 0.220496 15.834 0.193992 16.9207L0.00321309 25.5497C-0.0104057 26.1022 0.0864914 26.6519 0.288362 27.1675C0.490232 27.683 0.793114 28.1542 1.17968 28.5541L14.9317 42.7606C15.5811 43.4399 16.4549 43.8683 17.3959 43.9686L30.0032 44ZM14.5104 22.0353C14.5104 20.8996 14.8516 19.7894 15.491 18.8451C16.1304 17.9008 17.0391 17.1648 18.1024 16.7302C19.1656 16.2956 20.3356 16.1819 21.4643 16.4034C22.593 16.625 23.6298 17.1719 24.4436 17.975C25.2574 18.778 25.8116 19.8012 26.0361 20.9151C26.2606 22.0289 26.1454 23.1835 25.705 24.2327C25.2646 25.282 24.5187 26.1788 23.5619 26.8098C22.605 27.4407 21.48 27.7775 20.3291 27.7775C19.5623 27.7775 18.8031 27.628 18.095 27.3374C17.387 27.0469 16.7441 26.6211 16.2034 26.0846C15.6626 25.548 15.2347 24.9113 14.9441 24.211C14.6536 23.5107 14.5062 22.7606 14.5104 22.0039V22.0353Z"
                          fill="#FB9400"
                        />
                      </svg>
                      <div className="text-cont">{data}</div>
                    </button>
                  );
                })}
        </div>
      </>
    );
}

export default subcategory
