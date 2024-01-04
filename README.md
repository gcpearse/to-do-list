# To-do List

## Overview

This to-do list is a mini app built with React and Vite that allows users to add tasks to a to-do list, mark them as complete, and delete them from the list.

The hosted version of this application can be found [here](https://e-task.netlify.app).

The app is optimised for mobile, but also works well on desktop displays.

This is a standalone mini project that may be updated in the future.

## Local Setup Instructions

### Cloning the Repository

Begin by clicking on the **CODE** button above and copying the URL. Then, navigate to the directory into which you would like to clone the repository, and run this command:

```
git clone <URL>
```

To push changes from your cloned local version to a personal repository on GitHub, you will first need to create a new GitHub repository. 

Initialise the repository <u>without</u> a `README`, `gitignore`, or `licence`.

Then, copy the URL of your new repository and run the following commands:

```
git remote set-url origin <NEW_URL>
git branch -M main
git push -u origin main
```

### Prerequisites

Please ensure you have installed Node.js. If you encounter any issues when running the project locally, you may need to use a different version of Node.

You can check your Node version by running `node --version`. 

Consider using Node Version Manager (nvm) to install, remove, and switch between different Node versions on your local machine.

### Installing Packages and Running the Project

Once you have cloned the repository on your local machine, please use the `cd` command to navigate to the `to-do-list` directory of this project.

You may then run the following commands:

```
npm install
```

This will install all required NPM packages.

```
npm run dev
```

This will run the app locally, typically on port 5173. Please check your terminal log for confirmation.
