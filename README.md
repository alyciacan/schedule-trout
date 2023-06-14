# schedule-trout
## Better README to come!

* Built with the MERN (MongoDB, Express, React, Node) stack. Be sure to install Node.js and MongoDB on your machine.

## Getting Started:
1) Clone the repo:
```git clone git@github.com:alyciacan/schedule-trout.git```
2) Cd in:
```cd schedule-trout```
3) Install dependencies:
```cd client
npm install
cd api
npm install 
```
4) Configure your environment variables:
* Rename .env.example file in the `api` directory to `.env`
* Update the environment variables in the `.env` file

5) Start the backend server:
* cd ../api
* npm run server

6) Start up the react app:
* cd ../client
* npm run dev
* The app will be running in your browser at http://localhost:5173/

## Known Issues:
I spun this app up as quickly as possible, so I have a long list of to-dos:
* Fix security issues around passwords and JWTs
* Coaches can't see their individual schedules yet (this is a big one)
* Coaches need to be able to add notes and scores to past appointments
* The library react-big-calendar has a known bug when changing date range
* I haven't styled literally anything
* There are plenty more!




