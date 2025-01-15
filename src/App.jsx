import React, { useState } from "react";

const App = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 roboto-regular">
      <div
        className={`bg-gray-900 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "w-14" : "w-56"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <span
            className={`font-semibold text-gray-100 text-base transition-opacity duration-300 ${
              isSidebarCollapsed ? "opacity-0 hidden" : "opacity-100"
            }`}
          >
            Left Menu
          </span>
          <button
            className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          >
            <i
              className={`bi ${
                isSidebarCollapsed ? "bi-chevron-right" : "bi-chevron-left"
              } text-base`}
            ></i>
          </button>
        </div>
        <ul className="space-y-1 mt-4">
          {[
            { icon: "bi-house-door", label: "Home" },
            { icon: "bi-folder2-open", label: "Projects" },
            { icon: "bi-people", label: "Team" },
            { icon: "bi-gear", label: "Settings" },
            { icon: "bi-question-circle", label: "Help" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800 hover:text-gray-100 cursor-pointer transition-all duration-200"
            >
              <i className={`bi ${item.icon} text-base`}></i>
              <span
                className={`text-sm transition-opacity duration-300 ${
                  isSidebarCollapsed ? "opacity-0 hidden" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        {/* Navbar */}
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 shadow-sm">
          <h1 className="text-xl font-medium text-gray-800">Dynamic Layout</h1>
        </div>

        {/* Content */}
        <div className="flex flex-1 p-6 gap-6">
          <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-gray-800 text-xl font-medium mb-4">
              Main Content
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet nulla et sapien gravida, ut elementum libero iaculis.
              Aliquam erat volutpat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde tenetur quae illo debitis, amet blanditiis
              fugiat veniam commodi eum obcaecati voluptate cumque voluptatum
              suscipit, atque explicabo et sed magnam provident. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Et accusantium nulla
              repellat ratione ipsum, alias eos iure necessitatibus voluptas
              eligendi hic corrupti quia ducimus est odio nam dolore omnis
              perferendis.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt
              nisi, vitae tincidunt odio nisl vitae magna. Fusce aliquet urna
              vitae felis ornare, nec hendrerit justo viverra.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quam, atque veniam earum
              aliquid, rerum magnam mollitia voluptas laboriosam optio animi cum
              quo! Ea vero voluptatum ullam ipsa, delectus doloremque repellat.
            </p>
          </div>
          <div className="w-80 flex-shrink-0 bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-gray-800 text-xl font-medium mb-4">
              Right Section
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Curabitur consectetur felis a purus volutpat, vitae elementum
              lorem sollicitudin. Integer nec facilisis enim.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Mauris tempus nibh sed sodales ullamcorper.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 p-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Dynamic Layout. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
