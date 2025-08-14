# API (Application Programming Interface) 
"An **API** is a **set of rules** that lets different apps or programs talk to each other and share information safely and easily."

In simple Restaurant and Waiter example:

The **API** is like a waiter that takes the request from customer to the kitchen and brings back the result, without needing to know how everything works inside.

## Country API
"A Country API is like a smart **global directory** that delivers detailed, real-time information about any country—such as its name, capital, currency, language, and more—when asked by a program or app."

### What Does a Country API Do?
![image](https://github.com/user-attachments/assets/c99a48f6-f78a-43ac-9c18-daf8cca0aa08)

### What Can We Do With It?
- Get data for analytics or comparisons
- Build dropdowns for selecting countries
- Show country info in travel, education, or news apps
- Display flags, names, and regions dynamically etc.

### Popular Country APIs:
1. #### REST Countries API
    - **Website:** https://restcountries.com/
    - **Data Link:** https://restcountries.com/v3.1/all
    - **Description:** Provides comprehensive data on countries, including names, codes, capitals, currencies, languages, and flags. It's free and widely used in web and mobile applications.

2. #### World Bank Country API
    - **Website:** https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries
    - **Data Link:** https://api.worldbank.org/v2/country/all?format=json
    - **Description:** Offers extensive economic, social, and demographic data for countries worldwide. Ideal for applications requiring statistical information
## Product API
<img width="787" height="533" alt="image" src="https://github.com/user-attachments/assets/e08a8f49-8c5a-467d-8d79-f8a5ac549fa1" />


## JSON Viewer Chrome Extension
"A JSON Viewer Chrome extension is a browser add-on that automatically detects and beautifies raw JSON data viewed in the browser, transforming it into an interactive, readable tree structure with features like syntax highlighting, collapsible nodes, and real-time validation—making it easier for developers to explore and debug JSON responses directly from REST APIs or web services."

![image](https://github.com/user-attachments/assets/a6ca1492-0b47-483d-8f56-f47448641dd2)

   1. **Install the Extension**
        - Go to the **Chrome Web Store**
        - Search for **“JSON Viewer”** (popular options: JSON Viewer Pro, JSON Formatter, JSON Viewer Lite)
        - Click **“Add to Chrome” → “Add Extension”**
          ![image](https://github.com/user-attachments/assets/9ebeb9c7-1eca-407a-9d85-5a5e0446dbe0)
      
   2. **Open a JSON File or API Endpoint**
        - Visit a URL that returns raw JSON (e.g., a REST API endpoint like (https://restcountries.com/v3.1/all) )
        - Alternatively, open a `.json` file hosted online

   3. **Automatic Formatting**
        - The extension will automatically detect JSON content and **reformat it ** into:
            - A **collapsible tree view**
            - **Color-coded syntax (hig**hlighting keys, values, and data types)
            - Indentation for better readability
      
        ![image](https://github.com/user-attachments/assets/0d98a7a3-b257-4be2-97a5-7807f4a8afe6)


## Postman
"Postman is a **digital toolkit** that helps developers **explore, test, and share APIs**—like a powerful remote control that lets you send requests to any API and instantly see how it responds, without needing to write a full program."
### What Postman does in the context of APIs:
![image](https://github.com/user-attachments/assets/e0c8d931-da0e-4143-848e-6247709a8bb7)

![image](https://github.com/user-attachments/assets/21d9f69e-2595-4ace-a75a-a0d364196a2b)

![image](https://github.com/user-attachments/assets/a7495002-6bb9-4b36-9eb4-7e93272a1d95)

![image](https://github.com/user-attachments/assets/839b1e56-35a9-4aff-a1da-8fdc0b2822f1)

### How to use it:
- Go to the link [Download Postman](https://www.postman.com/downloads/). Download the app to get started with the Postman API Platform
- Install Postman App in the system
- Open the App, then click "Send an API request"
- Select a method such as **GET**
    ![image](https://github.com/user-attachments/assets/fce96884-5640-4e69-a12d-1f4dc1ae43e2)

- Copy [the Country API](https://restcountries.com/v3.1/all), then Paste it inside the **GET**, then click **Send** button
    ![image](https://github.com/user-attachments/assets/90404e61-9c64-4a38-91c5-cc4835ea294d)
- The successful **Get Request** will fetch the data properly
      ![image](https://github.com/user-attachments/assets/71ff6377-7377-44d9-8580-bbafa399efe0)
- Now we can check "Does the API provide Valid data", "Does the Data work or Not" and, also we can search some specific Data.

## Thunder Client extension in VS Code
"Thunder Client is a **lightweight API testing tool** built right into VS Code, letting developers send and test API requests without ever leaving their code editor—like having a mini Postman quietly sitting inside your workspace, ready to test APIs with speed and simplicity."

### What Thunder Client Does in VS Code:
- ![image](https://github.com/user-attachments/assets/d896cd1e-ce2d-455b-a82d-183c2a8c2965)
  
- ![image](https://github.com/user-attachments/assets/9f31de2c-6b7f-47f9-8db5-1fc963cacda8)
 
- ![image](https://github.com/user-attachments/assets/b64e38a6-36d4-45a1-8e7f-e4abe94e2562)
  
- ![image](https://github.com/user-attachments/assets/336f666d-683f-4c2a-aabd-478e6431a899)
  
- ![image](https://github.com/user-attachments/assets/d6229868-3cce-4e41-9646-45dba8dc2bd9)


### How to use it:
- Open VS Code, Click on extension, Search **Thunder Client** extension and Install it.
    ![image](https://github.com/user-attachments/assets/28b89983-dca2-47e2-a487-8865381e0940)

- Open the Thunder Client extension, then click "New Request", Select a method such as **GET**. Copy-Paste [the Country API](https://restcountries.com/v3.1/all), inside the GET, then click "Send" button
    ![image](https://github.com/user-attachments/assets/e7620f3e-ebf3-4fe4-919c-5b14b99d9a45)
  
-  The successful **Get Request** will fetch the data properly  
    ![image](https://github.com/user-attachments/assets/de2c6d56-0e2e-497f-a2b4-161728548f52)


## Axios in React (NPM Package)
 "Axios is a promise-based HTTP client library, installed via npm, that allows React applications to communicate with external APIs by making asynchronous HTTP requests (GET, POST, PUT, DELETE). It simplifies data fetching, handles request/response transformation, supports interceptors for global request handling, and integrates seamlessly with React’s component lifecycle and state management."

![image](https://github.com/user-attachments/assets/5f364bc3-656b-4b70-8624-9d05d27fb347)

  **Axios** is a **JavaScript library** (often used in **React** and other frontend frameworks) that helps the application **send HTTP requests** to servers and **handle responses** — typically for interacting with APIs.

![image](https://github.com/user-attachments/assets/afa19e8d-77a5-4bf1-ba17-4aeba4fd811e)


### How to use it:
- Go to the **axios npm** site, [Link](https://www.npmjs.com/package/axios)
- Open the `Gitbash` terminal in vs code and Run the command below:
  ```
  npm i axios
  ```
- Create a `jsx` file ( e.g. `DemoTest.jsx`) and Copy-paste the code below:

  ```jsx
  import React, { useState, useEffect } from "react";
  import axios from "axios";

    const DemmoTest = () => {
        let [allData, setAllData] = useState([]);
    
        useEffect(() => {
            async function all() {
    
                let myData = await axios.get("https://dummyjson.com/products");
                setAllData(myData.data.products);
            }
            all();
        }, []);

        return (
            <>
                <h1>Api Testing</h1>
    
                <select>
                    {allData.map(
                        (item) => (
                            <option key={item.id}>{item.title}</option>
                        )
                    )}
                </select>
    
            </>
        );
    };

    export default DemmoTest;

  ```

<img width="809" height="598" alt="image" src="https://github.com/user-attachments/assets/ba595203-62f1-494d-bb96-b4d1233b0b58" />
<img width="656" height="313" alt="image" src="https://github.com/user-attachments/assets/463049af-f271-41d3-8d02-d72081f4b02b" />
<img width="787" height="577" alt="image" src="https://github.com/user-attachments/assets/1febd1a0-375b-4f58-89dd-9f4926e5da8e" />
<img width="792" height="631" alt="image" src="https://github.com/user-attachments/assets/403a0674-5433-442f-bf26-dd75c59f9f4a" />
<img width="647" height="376" alt="image" src="https://github.com/user-attachments/assets/92ea0718-740f-4107-83b4-f6c88f2fea30" />










