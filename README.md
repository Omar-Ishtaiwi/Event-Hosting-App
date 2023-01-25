# Event Management Web App 

React.js application that uses Firebase for user authentication and Firestore for data storage and retrieval. The application uses React hooks such as useState and useEffect to manage the component's state. The code also uses the map method from the async library and the BrowserRouter, Route, Switch and Link from react-router-dom for routing.

The application allows users to view and add events and clubs, and also has a login page that uses Firebase's email and link-based authentication. It also uses useRef which allows to reference a DOM node or a component.

The getEvents and getClubs functions are used to retrieve data from Firestore and the addEvents and addClubs functions are used to add data to Firestore. The handleSubmit function is used to handle form submissions. The signIn function is used to handle the email-based sign-in process and the statusCheck function is used to check the sign-in status of the user.

 
Clone the repository

```
git clone https://github.com/<your-username>/ubco-club-app.git
```

Navigate to the project directory

```
cd ubco-club-app
```

Install the required dependencies

```
npm install
```

Create a .env file in the root of the project and add your Firebase config keys

```
touch .env
```

```
REACT_APP_API_KEY=<your_api_key>
REACT_APP_AUTH_DOMAIN=<your_auth_domain>
REACT_APP_DATABASE_URL=<your_database_url>
REACT_APP_PROJECT_ID=<your_project_id
```

