
const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "images/customer-1.jpg",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "images/customer-2.jpg",
    },
    {
      name: "Bob Johnson",
      email: "bob.john@example.com",
      image: "images/customer-3.jpg",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "images/customer-4.jpg",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "images/customer-6.jpg",
    },
    {
      name: "Bob Johnson",
      email: "bob.john@example.com",
      image: "images/customer-5.jpg",
    },
    ,
    {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "images/customer-1.jpg",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "images/customer-4.jpg",
    },
    {
      name: "Bob Johnson",
      email: "bob.john@example.com",
      image: "images/customer-3.jpg",
    },
  ];
  
  users.forEach((user) => {
    const element = document.createElement("users-container");
    element.innerHTML = `
      <li class="py-8 sm:pb-4" >
      <div class="flex items-center space-x-4 justify-between" >
      <div class="flex-1 flex gap-x-6 items-center">
                  <!-- image -->
                  <div class="flex-shrink-0">
                    <img
                      class="w-14 h-14 rounded-full"
                      src="${user.image}"
                      alt="${user.name}"
                    />
                  </div>
                  <!-- name & email -->
                  <div class="flex-1 min-w-0">
                    <p
                      class="text-sm font-medium text-indigo-600 truncate dark:text-indigo-600"
                    >
                    ${user.name}
                    </p>
                    <p
                      class="text-sm flex gap-2 items-end text-gray-500 truncate dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                        />
                        <path
                          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                        />
                      </svg>
                      ${user.email}
                    </p>
                  </div>
                </div>
  
                <div
                  class="flex-1 items-center text-base text-gray-900 dark:text-gray-900"
                >
                  <p class="font-semibold text-gray-700 mb-2">
                    Applied on january 7,2020
                  </p>
                  <div class="flex gap-x-3">
                    <div class="bg-green-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 p-1 font-bold"
                      >
                        <path
                          class="text-white"
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p class="capitalize text-gray-500 font-normal">
                      Completed Phone Screening
                    </p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500">
                  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>
                </div>
                </li>
      `;
    document.getElementById("users-container").appendChild(element);
  });