import { useState } from "react";



export const Pagination = () => {
    return (
      <div className="mt-4 flex justify-center space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded">1</button>
        <button className="px-4 py-2 bg-gray-200 rounded">2</button>
      </div>
    );
  };



export const ToggleSwitch = () => {
    return (
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="hidden" />
        <span className="w-8 h-4 bg-gray-300 rounded-full relative">
          <span className="w-4 h-4 bg-white rounded-full shadow absolute left-0"></span>
        </span>
      </label>
    );
  };


export const QuestionItem = ({ question }) => {
    return (
      <tr>
        <td className="border-b py-2 px-8">{question.title}</td>
        <td className="border-b py-2 px-4">
          <button>Open</button> | <button>Delete</button>
        </td>
        <td className="border-b py-2 px-4">-</td>
        <td className="border-b py-2 px-4">-</td>
        <td className="border-b py-2 px-4">-</td>
      </tr>
    );
  };

export const SubCategoryItem = ({ category }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <>
        <tr>
          <td className="border-b py-2 px-4">
            <button
              className="flex items-center space-x-2"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{isExpanded ? "▼" : "▶"}</span>
              <span>{category.title}</span>
            </button>
          </td>
          <td className="border-b py-2 px-4">
            <div className="flex space-x-2">
              <button>Edit</button>
              <button>View</button>
              <button>Copy</button>
              <button>Delete</button>
            </div>
          </td>
          <td className="border-b py-2 px-4">{category.level}</td>
          <td className="border-b py-2 px-4">{category.totalQuestions}</td>
          <td className="border-b py-2 px-4">
            <ToggleSwitch />
          </td>
        </tr>
        {isExpanded &&
          category.subCategories &&
          category.subCategories.map((subCategory) => (
            <SubCategoryItem key={subCategory.id} category={subCategory} />
          ))}
        {isExpanded &&
          category.questions &&
          category.questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
      </>
    );
  };
  


const Test = () => {
    const questions = [
        {
          id: 1,
          title: "1.0 Type Capability Title",
          level: 1,
          totalQuestions: 1,
          subCategories: [
            {
              id: 2,
              title: "1.1 Type Capability Title",
              level: 2,
              totalQuestions: 1,
              subCategories: [
                {
                  id: 3,
                  title: "1.1.1 Type Capability Title",
                  level: 3,
                  totalQuestions: 1,
                  questions: [
                    { id: 4, title: "Q1 Type Question" },
                    { id: 5, title: "Q1 Type Question" },
                    { id: 6, title: "Q1 Type Question" },
                  ],
                },
              ],
            },
          ],
        },
        { id: 7, title: "2.0 Type Capability Title", level: 1, totalQuestions: 1 },
      ];
  return (
    <div>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Category</th>
            <th className="border-b py-2 px-4">Action</th>
            <th className="border-b py-2 px-4">Level</th>
            <th className="border-b py-2 px-4">Total Questions</th>
            <th className="border-b py-2 px-4">LIVE</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((category) => (
            <SubCategoryItem key={category.id} category={category} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Test