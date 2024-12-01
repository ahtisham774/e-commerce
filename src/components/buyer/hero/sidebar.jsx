import React, { useState } from 'react';

const Sidebar = () => {
  const items = [
    {
      label: "Woman’s Fashion",
      url: 'women-fashion',
      subItems: [
        {
          label: 'Dresses',
          url: '/dresses',
        },
      ],
    },
    {
      label: "Man’s Fashion",
      url: 'men-fashion',
      subItems: [
        {
          label: 'Shirts',
          url: '/shirts',
        },
      ],
    },
    { label: 'Electronics', url: 'electronics' },
    { label: 'Home & Lifestyle', url: 'home-lifestyle' },
    { label: 'Medicine', url: 'medicine' },
    { label: 'Sports & Outdoor', url: 'sports-outdoor' },
    { label: "Baby’s & Toys", url: 'baby-toys' },
    { label: 'Groceries & Pets', url: 'groceries-pets' },
    { label: 'Health & Beauty', url: 'health-beauty' },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleSubItems = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-black text-white p-4 w-full lg:w-max 2xl:w-72 h-full shrink-0 rounded shadow-lg">
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            {item.subItems ? (
              <div
                className="text-lg font-normal items-center w-full flex justify-between cursor-pointer"
                onClick={() => toggleSubItems(index)}
              >
                {item.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-2 transform transition-transform ${
                    expanded[index] ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </div>
            ) : (
              <a
                href={item.url}
                className="text-lg font-normal items-center w-full hover:underline"
              >
                {item.label}
              </a>
            )}

            {item.subItems && expanded[index] && (
              <div className="pl-4 mt-2">
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.url}
                    className="block   mb-2"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
